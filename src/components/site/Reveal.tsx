import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "rise" | "zoom" | "mask";

const CLASSES: Record<Variant, { hidden: string; shown: string }> = {
  rise: { hidden: "reveal-hidden", shown: "reveal-shown" },
  zoom: { hidden: "reveal-zoom-hidden", shown: "reveal-zoom-shown" },
  mask: { hidden: "reveal-mask-hidden", shown: "reveal-mask-shown" },
};

/**
 * Restrained scroll reveal — GPU-composited (opacity/transform/filter only),
 * long decelerating easing, fires once when the element enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "rise",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number | undefined;
  className?: string | undefined;
  variant?: Variant | undefined;
  as?: "div" | "section" | "li" | "article" | "figure" | "span" | undefined;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            // Schedule on the next frame so the transition always composites.
            requestAnimationFrame(() => setShown(true));
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  const v = CLASSES[variant];
  const inner = (
    <Component
      ref={ref}
      className={`${shown ? v.shown : v.hidden} ${className}`}
      style={shown && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );

  if (variant === "mask") {
    return <span className="reveal-mask-clip">{inner}</span>;
  }

  return inner;
}
