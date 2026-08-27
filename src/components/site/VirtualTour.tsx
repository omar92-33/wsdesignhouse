import { site } from "@/lib/site";
import { Container, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

/**
 * 360° experience — the tour host blocks iframe embedding (X-Frame-Options),
 * so the experience always opens in a new tab.
 */
export function VirtualTour() {
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
              experience. It opens in a new window.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={site.virtualTour}
                target="_blank"
                rel="noopener noreferrer"
                className="label border border-champagne px-8 py-4 text-center text-champagne transition-colors duration-500 hover:bg-champagne hover:text-accent-foreground"
              >
                Explore in 360°
              </a>
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
            <a
              href={site.virtualTour}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Launch the 360° virtual experience in a new window"
              className="group relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border border-ivory/15 bg-ink"
              style={{
                backgroundImage:
                  "radial-gradient(90% 80% at 50% 40%, oklch(0.3 0.014 85) 0%, oklch(0.16 0.006 90) 75%)",
              }}
            >
              <span className="flex flex-col items-center gap-5">
                <span
                  aria-hidden
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-champagne/60 font-display text-lg text-champagne transition-transform duration-700 group-hover:scale-105"
                >
                  360°
                </span>
                <span className="label opacity-70">Launch the virtual experience</span>
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
