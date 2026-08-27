import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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

      <section className="space-y-24 py-20 lg:space-y-40 lg:py-28">
        {projects.map((p) => (
          <Reveal as="article" key={p.slug}>
            <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="group block">
              <Frame image={p.hero} aspect="wide" caption={`${p.title} — hero photograph`} />
              <Container className="mt-8">
                <p className="label text-champagne">{p.category}</p>
                <h2 className="display mt-3 text-[clamp(2rem,6vw,5rem)]">{p.title}</h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <span className="label mt-6 inline-flex items-center gap-2">
                  Explore Project
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.2}
                    aria-hidden
                  />
                </span>
              </Container>
            </Link>
          </Reveal>
        ))}
      </section>

      <FinalCta />
    </>
  );
}
