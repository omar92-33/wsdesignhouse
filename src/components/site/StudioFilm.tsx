import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export function StudioFilm() {
  return (
    <section
      className="desktop-section border-t border-border py-24 lg:py-24 2xl:py-36"
      aria-labelledby="studio-film-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16 2xl:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Studio Film</Eyebrow>
              <h2
                id="studio-film-heading"
                className="display mt-8 text-[clamp(2.25rem,5vw,4rem)]"
              >
                Spaces in Motion
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                A short walkthrough of our work, materiality, light and detail seen the way
                a space is actually experienced.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-border bg-muted lg:max-w-[300px] 2xl:max-w-sm">
              <video
                className="block aspect-[9/16] w-full object-cover"
                poster="/media/studio-film-poster.jpg"
                src="/media/studio-film.mp4"
                controls
                playsInline
                preload="none"
                aria-label="WS Design House studio walkthrough film"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
