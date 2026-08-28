import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string };

const AUTOPLAY_MS = 6000;

export function Slideshow({
  slides,
  className = "",
}: {
  slides: Slide[];
  className?: string | undefined;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [drag, setDrag] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<{ x: number; y: number; active: boolean } | null>(null);
  const total = slides.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Slow, gentle autoplay — paused on hover/focus/touch, hidden tabs, reduced motion.
  useEffect(() => {
    if (total < 2 || paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") go(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [go, paused, total, index]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pointer.current = { x: e.clientX, y: e.clientY, active: true };
    setPaused(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const p = pointer.current;
    if (!p?.active) return;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 12) {
      pointer.current = null;
      setDrag(0);
      return;
    }
    setDrag(dx);
  };

  const endDrag = () => {
    const p = pointer.current;
    pointer.current = null;
    if (p?.active) {
      const width = trackRef.current?.clientWidth ?? 1;
      const threshold = Math.min(80, width * 0.12);
      if (drag <= -threshold) go(1);
      else if (drag >= threshold) go(-1);
    }
    setDrag(0);
    setPaused(false);
  };

  if (total === 0) return null;

  const offsetPct = trackRef.current?.clientWidth
    ? (drag / trackRef.current.clientWidth) * 100
    : 0;

  return (
    <div
      className={`group relative ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project slides"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="relative touch-pan-y overflow-hidden border border-border bg-muted select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className={`flex ${drag ? "" : "transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{ transform: `translate3d(${-index * 100 + offsetPct}%,0,0)` }}
        >
          {slides.map((s, i) => (
            <figure key={s.src} className="w-full shrink-0" aria-hidden={i !== index}>
              <img
                src={s.src}
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="block h-auto w-full"
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/60 text-foreground opacity-0 backdrop-blur transition duration-300 hover:bg-background focus-visible:opacity-100 group-hover:opacity-100 max-sm:opacity-70 sm:left-3"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/60 text-foreground opacity-0 backdrop-blur transition duration-300 hover:bg-background focus-visible:opacity-100 group-hover:opacity-100 max-sm:opacity-70 sm:right-3"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-px w-10 transition-all ${
                i === index ? "bg-champagne" : "bg-border hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
        <p className="label opacity-60">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
