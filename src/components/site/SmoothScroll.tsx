import { useEffect } from "react";

/**
 * Premium inertial smooth scrolling (Apple/Porsche feel).
 * GPU-composited: Lenis animates a translate3d on the content wrapper,
 * synced to the browser's rAF so it tracks 120Hz displays.
 * Disabled automatically for users who prefer reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let destroy: (() => void) | undefined;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.1,
        // Apple-like decelerating curve
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        lerp: 0.11,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        // Inertial scrolling on touch devices too
        syncTouch: true,
        syncTouchLerp: 0.085,
        autoRaf: true,
        anchors: true,
      });

      document.documentElement.classList.add("lenis-active");

      destroy = () => {
        document.documentElement.classList.remove("lenis-active");
        lenis.destroy();
      };
    });

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  return null;
}
