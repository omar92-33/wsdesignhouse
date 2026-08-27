import { useState } from "react";
import { site } from "@/lib/site";
import { Container, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

/** 360° experience — embed is lazy-loaded only after the visitor opts in. */
export function VirtualTour() {
  const [active, setActive] = useState(false);

  return (
    <section className="bg-ink py-28 text-ivory lg:py-40" aria-labelledby="tour-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-24">
          <Reveal>
            <Eyebrow>Immersive Experience</Eyebrow>
            <h2 id="tour-heading" className="display mt-8 text-[clamp(2.5rem,6vw,4.5rem)]">
              Step Inside
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-65">
              Experience the space from a new perspective through our immersive virtual
              experience.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setActive(true)}
                className="label border border-champagne px-8 py-4 text-champagne transition-colors duration-500 hover:bg-champagne hover:text-accent-foreground"
              >
                Explore in 360°
              </button>
              <a
                href={site.virtualTour}
                target="_blank"
                rel="noopener noreferrer"
                className="label border border-ivory/25 px-8 py-4 text-center transition-colors duration-500 hover:border-ivory"
              >
                Open Full Screen
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-ivory/15 bg-ink">
              {active ? (
                <iframe
                  src={site.virtualTour}
                  title="WS DESIGNHOUSE 360° virtual experience"
                  loading="lazy"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActive(true)}
                  className="group absolute inset-0 flex flex-col items-center justify-center gap-5"
                  style={{
                    backgroundImage:
                      "radial-gradient(90% 80% at 50% 40%, oklch(0.3 0.014 85) 0%, oklch(0.16 0.006 90) 75%)",
                  }}
                >
                  <span
                    aria-hidden
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-champagne/60 font-display text-lg text-champagne transition-transform duration-700 group-hover:scale-105"
                  >
                    360°
                  </span>
                  <span className="label opacity-70">Launch the virtual experience</span>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
