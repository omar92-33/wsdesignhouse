import { site } from "@/lib/site";
import { Container, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

/**
 * 360° experience, the tour host blocks iframe embedding (X-Frame-Options),
 * so the experience always opens in a new tab.
 */
export function VirtualTour() {
  return (
    <section className="bg-ink py-24 text-ivory lg:py-24 2xl:py-36" aria-labelledby="tour-heading">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Immersive Experience</Eyebrow>
            <h2 id="tour-heading" className="display mt-8 text-[clamp(2.5rem,6vw,4.5rem)]">
              Step Inside
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-65">
              Experience the space from a new perspective through our immersive virtual
              experience. It opens in a new window.
            </p>
            <div className="mt-10 flex">
              <a
                href={site.virtualTour}
                target="_blank"
                rel="noopener noreferrer"
                className="label border-2 border-champagne bg-champagne px-10 py-5 text-center text-accent-foreground shadow-lg transition-all duration-200 hover:bg-transparent hover:text-champagne"
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
