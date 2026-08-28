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
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Immersive Experience</Eyebrow>
            <h2 id="tour-heading" className="display mt-8 text-[clamp(2.5rem,6vw,4.5rem)]">
              Step Inside
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-65">
              Experience the space from a new perspective through our immersive virtual
              experience. It opens in a new window.
            </p>
            <div className="mt-10 flex">
              <a
                href={site.virtualTour}
                target="_blank"
                rel="noopener noreferrer"
                className="label border border-champagne px-8 py-4 text-center text-champagne transition-colors duration-500 hover:bg-champagne hover:text-accent-foreground"
              >
                View the Virtual Tour
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
