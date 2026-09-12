import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

const TEXT_SELECTOR = [
  "main h1",
  "main h2",
  "main h3",
  "main h4",
  "main p",
  "main figcaption",
  "main dt",
  "main dd",
  "main a.label",
  "main button.label",
  "header a.label",
  "header button.label",
  "footer h2",
  "footer h3",
  "footer h4",
  "footer p",
  "footer a",
].join(",");

export function TextMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | undefined;
    let innerFrame = 0;

    const outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => {
        const elements = Array.from(
          document.querySelectorAll<HTMLElement>(TEXT_SELECTOR),
        ).filter((element) => !element.closest("[data-text-motion='off']"));

        if (reducedMotion || typeof IntersectionObserver === "undefined") {
          elements.forEach((element) => element.classList.add("text-reveal-visible"));
          return;
        }

        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("text-reveal-visible");
              observer?.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
        );

        elements.forEach((element) => {
          element.classList.add("text-reveal-ready");
          observer?.observe(element);
        });
      });
    });

    return () => {
      cancelAnimationFrame(outerFrame);
      cancelAnimationFrame(innerFrame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}