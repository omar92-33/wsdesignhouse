import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { Certificates } from "@/components/site/Certificates";
import { founder, pillars, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WS DESIGNHOUSE | Interior Architecture Studio, New Cairo" },
      {
        name: "description",
        content:
          "Meet Dr. Wessam Abdellatif and WS DESIGNHOUSE, a New Cairo studio designing luxury residential interiors with an end-to-end, architecture-led approach.",
      },
      { property: "og:title", content: "About WS DESIGNHOUSE" },
      {
        property: "og:description",
        content:
          "A boutique interior architecture studio in New Cairo, founded on craftsmanship, planning and end-to-end delivery.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="The Studio"
        title="A Studio Built on Experience"
        intro="WS DESIGNHOUSE is a premium interior studio specializing in artisanal residential spaces. We bring a global luxury perspective to every home."
      />

      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <p className="label text-muted-foreground">{founder.name}</p>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow>The Founder</Eyebrow>
              <h2 className="display mt-8 text-[clamp(2.25rem,6vw,4.5rem)]">{founder.heading}</h2>
              <div className="mt-10 max-w-2xl space-y-6 text-base leading-loose text-muted-foreground sm:text-lg">
                {founder.bio.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <Link
                to="/contact"
                className="label mt-12 inline-block border border-ink px-8 py-4 transition-colors duration-500 hover:bg-ink hover:text-ivory"
              >
                Book a Private Consultation
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <Certificates />

      <section className="bg-ink py-24 text-ivory lg:py-36">
        <Container>
          <Reveal>
            <Eyebrow>The Difference</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2.25rem,6vw,4.5rem)]">
              Designed With Intention
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-10 md:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.number} delay={i * 70}>
                <div className="border-t border-ivory/20 pt-8">
                  <span className="label text-champagne">{p.number}</span>
                  <h3 className="mt-4 font-display text-3xl uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed opacity-65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 lg:py-36">
        <Container>
          <Reveal>
            <h2 className="display max-w-4xl text-[clamp(1.9rem,4.5vw,3.5rem)]">
              Interior architecture, not decoration
            </h2>
            <div className="mt-10 grid max-w-5xl gap-10 text-base leading-loose text-muted-foreground md:grid-cols-2 sm:text-lg">
              <p>
                Interior decoration works with what a space already is — colour, furniture,
                finishes. Interior architecture asks whether the space itself is right: where the
                walls fall, how light enters, how people move between rooms. Most homes in New
                Cairo are delivered as a shell, which makes that question the most valuable one to
                answer first.
              </p>
              <p>
                Our practice covers both, in sequence. We resolve the plan and the architecture,
                then design the interior, the joinery and the bespoke furniture that completes it,
                and manage the execution on site. One studio, one set of drawings, one point of
                accountability.
              </p>
            </div>
            <p className="label mt-12 text-muted-foreground">{site.serviceLine}</p>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
