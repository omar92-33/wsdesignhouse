import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import film from "@/assets/studio-film.mp4.asset.json";
import poster from "@/assets/studio-film-poster.jpg.asset.json";

export function StudioFilm() {
  return (
    <section
      className="border-t border-border py-28 lg:py-44"
      aria-labelledby="studio-film-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
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
                A short walkthrough of our work — materiality, light and detail seen the way
                a space is actually experienced.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-border bg-muted">
              <video
                className="block aspect-[9/16] w-full object-cover"
                poster={poster.url}
                src={film.url}
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
