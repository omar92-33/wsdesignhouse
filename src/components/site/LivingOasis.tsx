import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Slideshow } from "@/components/site/Slideshow";
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
      className="border-t border-border bg-muted/50 py-28 lg:py-44"
      aria-labelledby="living-oasis-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-24">
          <Reveal>
            <Slideshow slides={slides} />
          </Reveal>

          <div className="lg:sticky lg:top-32 lg:order-first">
            <Reveal>
              <Eyebrow>Competition Entry</Eyebrow>
              <h2
                id="living-oasis-heading"
                className="display mt-8 text-[clamp(2.25rem,5vw,4rem)]"
              >
                The Living Oasis
                <span className="block text-champagne">Designed for the Saudi Climate</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 max-w-md space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
