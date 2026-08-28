import { createFileRoute } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Frame } from "@/components/site/Frame";
import { FinalCta } from "@/components/site/FinalCta";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Luxury Residential Interiors | WS DESIGNHOUSE" },
      {
        name: "description",
        content:
          "A curated selection of residential interior architecture projects by WS DESIGNHOUSE — kitchens, master suites and villa living areas in Egypt.",
      },
      { property: "og:title", content: "Portfolio Collection — WS DESIGNHOUSE" },
      {
        property: "og:description",
        content: "A curated selection of residential masterpieces in Egypt.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Works"
        title="Portfolio Collection"
        intro="A curated selection of residential masterpieces in Egypt."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {projects.map((p) => (
              <Reveal as="article" key={p.slug}>
                <div className="mx-auto max-w-4xl">
                  <Frame image={p.hero} aspect="wide" caption={`${p.title} — hero photograph`} />
                  <p className="label mt-8 text-champagne">{p.category}</p>
                  <h2 className="display mt-3 text-[clamp(1.75rem,5vw,3.5rem)]">{p.title}</h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
