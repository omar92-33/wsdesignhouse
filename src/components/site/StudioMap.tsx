import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { mapsUrl, site } from "@/lib/site";

export function StudioMap() {
  return (
    <section className="py-20 lg:py-20 2xl:py-28" aria-labelledby="studio-map-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14 2xl:grid-cols-[1fr_1.4fr] 2xl:gap-20">
          <Reveal>
            <Eyebrow>Location</Eyebrow>
            <h2 id="studio-map-heading" className="display mt-7 text-[clamp(2rem,5vw,3.5rem)]">
              Visit the Studio.
            </h2>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-8 inline-block border border-input px-8 py-4 transition-colors duration-200 hover:border-foreground"
            >
              Get Directions →
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="aspect-[16/10] w-full overflow-hidden border border-border">
              <iframe
                title="WS DESIGNHOUSE studio location"
                loading="eager"
                className="h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}&z=14&output=embed`}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
