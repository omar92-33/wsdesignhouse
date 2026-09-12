import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug && s.hasPage);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable · WS DESIGNHOUSE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} in New Cairo · WS DESIGNHOUSE`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.hasPage && s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHeader eyebrow="Our Expertise" title={service.title} intro={service.intro} />

      <section className="desktop-section py-20 lg:py-24 2xl:py-32">
        <Container>
          <div className="grid gap-16">
            <Reveal>
              <div className="max-w-2xl space-y-6 text-base leading-loose text-muted-foreground sm:text-lg">
                {service.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <Link
                to="/contact"
                className="label desktop-button mt-12 inline-block border border-ink px-8 py-4 transition-colors duration-200 hover:bg-ink hover:text-ivory"
              >
                Discuss Your Project
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="desktop-section border-t border-border py-16 lg:py-20 2xl:py-28">
        <Container>
          <h2 className="label text-muted-foreground">Other Services</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="font-display text-2xl link-underline"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
