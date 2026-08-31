import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Slideshow } from "@/components/site/Slideshow";
import { ConceptTag } from "@/components/site/ConceptTag";
import o1 from "@/assets/oasis-5408.jpg.asset.json";
import o2 from "@/assets/oasis-5405.jpg.asset.json";
import o3 from "@/assets/oasis-5406.jpg.asset.json";
import o4 from "@/assets/oasis-5407.jpg.asset.json";

const slides = [
  {
    src: o1.url,
    alt: "Shaded communal courtyard with perforated canopy — Designed for the Saudi Climate",
  },
  {
    src: o2.url,
    alt: "Aerial masterplan showing climate-aware zoning, green zones and shaded circulation",
  },
  {
    src: o3.url,
    alt: "Courtyard-facing bedroom with cross-ventilation and private outdoor connection",
  },
  {
    src: o4.url,
    alt: "Six climate-responsive design principles guiding The Living Oasis",
  },
];

export function LivingOasis() {
  return (
    <section
      className="border-t border-border bg-muted/50 py-24 lg:py-24 xl:py-36"
      aria-labelledby="living-oasis-heading"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16 xl:gap-24">
          <Reveal className="lg:mx-auto lg:w-full lg:max-w-[620px]">
            <Slideshow slides={slides} />
          </Reveal>

          <div className="lg:order-first">
            <Reveal>
              <ConceptTag>Design Research — Concept Entry, Not a Client Project</ConceptTag>
              <Eyebrow className="mt-6">Competition Entry</Eyebrow>
              <h2
                id="living-oasis-heading"
                className="display mt-6 text-[clamp(2.25rem,5vw,4rem)]"
              >
                The Living Oasis
                <span className="block text-champagne">Designed for the Saudi Climate</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 max-w-md space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  A climate-responsive retreat shaped by shade, landscape, natural ventilation,
                  and passive design.
                </p>
                <p>
                  The Living Oasis explores how architecture can create comfort while staying
                  connected to its environment.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
