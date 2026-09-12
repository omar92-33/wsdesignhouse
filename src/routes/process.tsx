import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { method } from "@/lib/site";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Method · The Design Process | WS DESIGNHOUSE" },
      {
        name: "description",
        content:
          "Consultation, curation and creation: how WS DESIGNHOUSE takes a residential interior from first idea through visualization, planning and on-site execution.",
      },
      { property: "og:title", content: "Our Method · WS DESIGNHOUSE" },
      {
        property: "og:description",
        content: "From idea to final space, the WS DESIGNHOUSE design and delivery process.",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Journey"
        title="Our Method"
        intro="Three stages, one studio, from the first conversation to the final finish."
      />

      <section className="desktop-section py-20 lg:py-24 2xl:py-32">
        <Container>
          <ol className="border-t border-border">
            {method.map((m, i) => (
              <Reveal as="li" key={m.number} delay={i * 90}>
                <div className="grid gap-6 border-b border-border py-10 md:grid-cols-[auto_1fr_1.2fr] md:gap-12 2xl:py-14 2xl:gap-16">
                  <span className="label text-champagne">{m.number}</span>
                  <h2 className="font-display text-4xl uppercase tracking-wide sm:text-5xl">
                    {m.title}
                  </h2>
                  <p className="max-w-lg text-base leading-loose text-muted-foreground sm:text-lg">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="desktop-section py-16 text-center lg:py-20 2xl:py-28">
        <Container>
          <Link
            to="/contact"
            className="label desktop-button inline-block border border-ink px-10 py-5 transition-colors duration-200 hover:bg-ink hover:text-ivory"
          >
            Begin Your Journey
          </Link>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
