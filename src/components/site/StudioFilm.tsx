import { ArrowUpRight, Play } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

export function StudioFilm() {
  return (
    <section
      id="medina-film"
      className="desktop-section border-t border-border py-24 lg:py-24 2xl:py-36 scroll-mt-24"
      aria-labelledby="studio-film-heading"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16 2xl:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Saudi Arabia · Project film</Eyebrow>
              <h2 id="studio-film-heading" className="display mt-8 text-[clamp(2.25rem,5vw,4rem)]">
                Medina Project.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                A closer look at our Medina project in Saudi Arabia.
              </p>
              <a
                href="https://www.youtube.com/watch?v=1Yid4UTk7NE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-5 border-b border-ink pb-3 text-sm"
              >
                Watch on YouTube <ArrowUpRight size={18} />
              </a>
            </Reveal>
          </div>
          <Reveal>
            <a
              href="https://www.youtube.com/watch?v=1Yid4UTk7NE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Medina Project, Saudi Arabia, on YouTube (opens in a new tab)"
              className="group relative block aspect-video overflow-hidden bg-ink focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <img
                src="https://i.ytimg.com/vi/1Yid4UTk7NE/hqdefault.jpg"
                alt="Medina Project video preview"
                width="480"
                height="360"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <span className="flex h-12 w-16 items-center justify-center rounded-xl bg-red-700 text-white transition-colors group-hover:bg-red-600">
                  <Play size={23} fill="currentColor" />
                </span>
              </span>
              <span className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 text-xs text-white">YouTube</span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

