import { useEffect } from "react";

type LenisLike = {
  stop: () => void;
  start: () => void;
  destroy: () => void;
  scrollTo: (t: number | string | HTMLElement, o?: Record<string, unknown>) => void;
  velocity: number;
};

let lenisInstance: LenisLike | null = null;
let lockCount = 0;

/** Pause inertial scrolling (used by full-screen overlays like the mobile menu). */
export function lockScroll() {
  lockCount += 1;
  if (lenisInstance) lenisInstance.stop();
  else document.documentElement.style.overflow = "hidden";
}

/** Resume inertial scrolling. */
export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0) return;
  if (lenisInstance) lenisInstance.start();
  else document.documentElement.style.overflow = "";
}

/**
 * Premium inertial smooth scrolling (Apple/Porsche feel) for desktop and touch.
 * GPU-composited: transforms/opacity/filter only, driven by a single rAF loop
 * so it tracks 120Hz displays. A velocity-linked --scroll-blur variable adds a
 * very subtle motion softening while the page is moving fast.
 */
export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Skip the velocity blur on low-powered devices — keep the scroll itself.
    const cores = navigator.hardwareConcurrency ?? 8;
    const allowBlur = cores > 4;

    let destroy: (() => void) | undefined;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.35,
        // Long, decelerating, never bouncy — same curve family as --ease-lux.
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        lerp: 0.085,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.6,
        // Inertial scrolling on phones/tablets too.
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchInertiaExponent: 1.9,
        autoRaf: true,
        anchors: { offset: -80 },
        prevent: (node: Element) => node.hasAttribute?.("data-lenis-prevent"),
      } as never) as unknown as LenisLike;

      lenisInstance = lenis;
      document.documentElement.classList.add("lenis-active");

      let raf = 0;
      let current = 0;
      const root = document.documentElement;

      const tick = () => {
        const v = Math.abs(lenis.velocity);
        // Map velocity to a very small blur; text must never look broken.
        const target = allowBlur ? Math.min(3, v * 0.045) : 0;
        current += (target - current) * 0.18;
        if (current < 0.02) current = 0;
        root.style.setProperty("--scroll-blur", `${current.toFixed(2)}px`);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      destroy = () => {
        cancelAnimationFrame(raf);
        root.style.removeProperty("--scroll-blur");
        root.classList.remove("lenis-active");
        lenis.destroy();
        lenisInstance = null;
      };
    });

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  return null;
}
