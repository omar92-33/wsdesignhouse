import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { journey, services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Interior Design & Architecture | WS DESIGNHOUSE" },
      {
        name: "description",
        content:
          "Consultation, 3D visualisation and turnkey execution for private residences and luxury interiors in New Cairo, Egypt.",
      },
      { property: "og:title", content: "Services — WS DESIGNHOUSE" },
      {
        property: "og:description",
        content:
          "Consultation, 3D visualisation and turnkey execution for private residences and luxury interiors.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Expertise"
        title="From Vision to Reality"
        intro="Consultation • 3D Visualisation • Turnkey Execution"
      />

      <section className="py-20 lg:py-28">
        <Container>
          <ul className="grid gap-16 md:grid-cols-2 lg:gap-24">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 2) * 90}>
                <article>
                  {s.hasPage ? (
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group block"
                    >
                      <h2 className="display mt-8 text-[clamp(1.9rem,4vw,3rem)]">{s.title}</h2>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                        {s.short}
                      </p>
                    </Link>
                  ) : (
                    <div>
                      <h2 className="display mt-8 text-[clamp(1.9rem,4vw,3rem)]">{s.title}</h2>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                        {s.short}
                      </p>
                      <Link
                        to="/contact"
                        className="label mt-6 inline-flex items-center gap-2 text-champagne"
                      >
                        Discuss Your Project
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.2} aria-hidden />
                      </Link>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/50 py-24 lg:py-32">
        <Container>
          <Reveal>
            <h2 className="display text-center text-[clamp(1.9rem,5vw,3.75rem)] uppercase">
              From Idea to Final Space
            </h2>
            <ol className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-4">
              {journey.map((step) => (
                <li
                  key={step}
                  className="font-display text-xl uppercase tracking-[0.12em] sm:text-2xl"
                >
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <FinalCta heading="Discuss Your Project" description="Call us directly for a private consultation." />
    </>
  );
}
