import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string };

export function Slideshow({
  slides,
  className = "",
}: {
  slides: Slide[];
  className?: string | undefined;
}) {
  const [index, setIndex] = useState(0);
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

  if (total === 0) return null;

  return (
    <div
      className={`group relative ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project feedback slides"
    >
      <div className="relative overflow-hidden border border-border bg-muted">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <figure key={s.src} className="w-full shrink-0" aria-hidden={i !== index}>
              <img
                src={s.src}
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className="block h-auto w-full"
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 border border-border bg-background/80 p-3 text-foreground backdrop-blur transition hover:bg-background sm:left-6"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 border border-border bg-background/80 p-3 text-foreground backdrop-blur transition hover:bg-background sm:right-6"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
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
        <p className="label text-[0.6rem] opacity-60">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
