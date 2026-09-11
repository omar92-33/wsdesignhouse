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

      <section className="py-20 lg:py-20 2xl:py-28">
        <Container>
          <div className="space-y-16 sm:space-y-20 lg:space-y-20 2xl:space-y-28">
            {projects.map((p) => (
              <Reveal as="article" key={p.slug}>
                <div className="mx-auto max-w-4xl lg:max-w-3xl 2xl:max-w-4xl">
                  <Frame image={p.hero} aspect="wide" caption={`${p.title} — hero photograph`} />
                  <h2 className="display mt-8 text-[clamp(1.75rem,5vw,3.5rem)]">{p.title}</h2>
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
