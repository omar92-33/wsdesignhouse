import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, Play } from "lucide-react";
import { ProjectFilm } from "./ProjectFilm";
import type { PortfolioProject as Sample, GalleryImage } from "@/lib/egypt-projects";
export function projectImages(project: Sample): GalleryImage[] {
  if (project.gallery) return project.gallery;
  const src = "/media/portfolio-preview/" + project.image + ".webp";
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
// Slide photo: the crop is drawn with a plain <img> (no SVG) so the browser can composite it
// while the strip scrolls; SVG <image> repaints mid-swipe and flickered on phones.
function SlidePhoto({
  photo,
  expanded,
  eager,
}: {
  photo: GalleryImage;
  expanded: boolean;
  eager: boolean;
}) {
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
          loading={eager ? "eager" : "lazy"}
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
// Gallery: custom slideshow built on native CSS scroll-snap. The browser itself moves the
// strip (no JS transforms, no DOM swaps mid-swipe), which is what keeps it flicker-free.
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
  const viewport = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const last = photos.length - 1;

  // Track the visible slide from the scroll position.
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const onScroll = () => {
      const width = el.clientWidth || 1;
      setIndex(Math.max(0, Math.min(last, Math.round(el.scrollLeft / width))));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [last]);

  // Warm the cache for the next photos so they are decoded before they slide in.
  useEffect(() => {
    photos.slice(index + 1, index + 3).forEach((p) => {
      if (p.kind !== "video" && !p.youtubeUrl) new Image().src = p.src;
    });
  }, [index]);

  // Button / keyboard navigation
  const goTo = useCallback(
    (i: number) => {
      const el = viewport.current;
      if (!el) return;
      const target = Math.max(0, Math.min(last, i));
      el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
    },
    [last],
  );

  return (
    <div
      className={`pf-gallery ${expanded ? "pf-expanded" : ""}`}
      role="region"
      aria-label={`${project.name} gallery`}
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") goTo(index + 1);
        if (event.key === "ArrowLeft") goTo(index - 1);
      }}
    >
      <div className="pf-viewport pf-snap" ref={viewport}>
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
                <SlidePhoto photo={photo} expanded={expanded} eager={i <= 1} />
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
            ) : (
              <SlidePhoto photo={photo} expanded={expanded} eager={i <= 1} />
            )}
          </div>
        ))}
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
            onClick={() => goTo(index - 1)}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label={`Next image of ${project.name}`}
            disabled={index === last}
            onClick={() => goTo(index + 1)}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
