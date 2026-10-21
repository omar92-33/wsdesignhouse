import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Expand, Play } from "lucide-react";
import { ProjectFilm } from "./ProjectFilm";
import type { PortfolioProject as Sample, GalleryImage } from "@/lib/egypt-projects";
export function projectImages(project: Sample): GalleryImage[] {
  if (project.gallery) return project.gallery;
  const src = "/media/portfolio-preview/" + project.image + ".jpg";
  return [
    { src, label: "The space", width: 1024, height: 1280, crop: project.crop! },
    {
      src,
      label: "Presentation reference",
      width: 1024,
      height: 1280,
      crop: [0, 0, 1024, 1280],
      contain: true,
    },
  ];
}
export function Photo({ photo, expanded }: { photo: GalleryImage; expanded: boolean }) {
  const [x, y, r, b] = photo.crop;
  return (
    <div className="pf-photo">
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
        viewBox={`${x} ${y} ${r - x} ${b - y}`}
        preserveAspectRatio={photo.contain || expanded ? "xMidYMid meet" : "xMidYMid slice"}
        role="img"
        aria-label={photo.label}
      >
        <svg
          x={x}
          y={y}
          width={r - x}
          height={b - y}
          viewBox={`${x} ${y} ${r - x} ${b - y}`}
          overflow="hidden"
        >
          <image href={photo.src} width={photo.width} height={photo.height} />
        </svg>
      </svg>
    </div>
  );
}
// Touch phones: SVG <image> slides repaint stale frames while Embla moves them (photos flash
// back and forth), so on coarse pointers the same crop is drawn with a plain <img> instead.
function useTouchDevice() {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return touch;
}
function MobilePhoto({ photo, expanded }: { photo: GalleryImage; expanded: boolean }) {
  const [x, y, r, b] = photo.crop;
  const w = r - x;
  const h = b - y;
  const fit = photo.contain || expanded ? "min" : "max";
  return (
    <div className="pf-photo pf-photo-mobile">
      <div
        className="pf-photo-crop"
        style={{
          aspectRatio: `${w} / ${h}`,
          width: `${fit}(100cqw, calc(100cqh * ${w / h}))`,
        }}
      >
        <img
          src={photo.src}
          alt={photo.label}
          draggable={false}
          decoding="async"
          style={{
            left: `${(-x / w) * 100}%`,
            top: `${(-y / h) * 100}%`,
            width: `${(photo.width / w) * 100}%`,
            height: `${(photo.height / h) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
export function Gallery({
  project,
  expanded = false,
  onExpand,
  enabled = true,
}: {
  project: Sample;
  expanded?: boolean;
  onExpand?: () => void;
  enabled?: boolean;
}) {
  const photos = projectImages(project);
  const touch = useTouchDevice();
  const SlidePhoto = touch ? MobilePhoto : Photo;
  const [ref, api] = useEmblaCarousel({ loop: false });
  const [index, setIndex] = useState(0);
  const [reach, setReach] = useState(3);
  useEffect(() => {
    setReach((r) => Math.max(r, index + 3));
    // Warm the browser cache for upcoming photos so slides appear instantly.
    photos.slice(index + 1, index + 4).forEach((p) => {
      if (p.kind !== "video" && !p.youtubeUrl) new Image().src = p.src;
    });
  }, [index]);
  useEffect(() => {
    if (!api) return;
    const update = () => setIndex(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);
  return (
    <div
      className={`pf-gallery ${expanded ? "pf-expanded" : ""}`}
      role="region"
      aria-label={`${project.name} gallery`}
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") api?.scrollNext();
        if (event.key === "ArrowLeft") api?.scrollPrev();
      }}
    >
      <div className="pf-viewport" ref={ref}>
        <div className="pf-track">
          {photos.map((photo, i) => (
            <div
              className="pf-slide"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${photos.length}`}
            >
              {photo.youtubeUrl ? (
                <a href={photo.youtubeUrl} target="_blank" rel="noopener noreferrer" className="pf-youtube-slide" aria-label={`Watch ${project.name} on YouTube (opens in a new tab)`}>
                  <Photo photo={photo} expanded={expanded} />
                  <span className="pf-medina-play" aria-hidden="true"><Play size={23} fill="currentColor" /></span>
                  <span className="pf-medina-youtube">Watch on YouTube</span>
                </a>
              ) : photo.kind === "video" ? (
                <div className="pf-photo pf-film-slide">
                  <ProjectFilm
                    src={photo.src}
                    poster={photo.poster}
                    label={photo.label}
                    active={enabled && index === i}
                  />
                </div>
              ) : i <= reach ? (
                <SlidePhoto photo={photo} expanded={expanded} />
              ) : (
                <div className="pf-photo" />
              )}
            </div>
          ))}
        </div>
      </div>
      {onExpand && (
        <button
          className="pf-expand"
          onClick={onExpand}
          aria-label={`Expand ${project.name} gallery`}
        >
          <Expand size={17} />
        </button>
      )}
      <div className="pf-gallery-controls">
        <span aria-live="polite">
          <span className="pf-number">
            {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </span>
          <span className="pf-slide-label">{photos[index]?.label}</span>
        </span>
        <div>
          <button
            aria-label={`Previous image of ${project.name}`}
            disabled={index === 0}
            onClick={() => api?.scrollPrev()}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label={`Next image of ${project.name}`}
            disabled={index === photos.length - 1}
            onClick={() => api?.scrollNext()}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
