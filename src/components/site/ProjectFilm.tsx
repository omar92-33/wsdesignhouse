import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import "./ProjectFilm.css";

/** Muted inline playback only while this film is visible and its gallery slide is active. */
export function ProjectFilm({
  src,
  poster,
  label,
  active = true,
}: {
  src: string;
  poster?: string | undefined;
  label: string;
  active?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  const [intent, setIntent] = useState<"auto" | "play" | "pause">("auto");
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.25)),
      { threshold: [0, 0.25] },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const sync = () => {
      if (active && visible && !document.hidden && intent !== "pause") {
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => {
      document.removeEventListener("visibilitychange", sync);
      video.pause();
    };
  }, [active, visible, intent, src]);
  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      setIntent("pause");
      video.pause();
    } else {
      setIntent("play");
      void video.play().catch(() => setPlaying(false));
    }
  }
  return (
    <div className="project-film" data-lenis-prevent>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={label}
        muted
        loop
        playsInline
        preload="metadata"
        autoPlay={active && visible && intent !== "pause"}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      />
      {failed ? (
        <p className="project-film-error">
          This film could not load. <a href={src}>Open video</a>
        </p>
      ) : (
        <button
          type="button"
          className="project-film-toggle"
          aria-label={`${playing ? "Pause" : "Play"} ${label}`}
          onClick={toggle}
        >
          {playing ? <Pause size={15} /> : <Play size={15} />}
          <span>{playing ? "Pause film" : "Play film"}</span>
        </button>
      )}
      <span className="project-film-muted">SILENT FILM</span>
    </div>
  );
}
