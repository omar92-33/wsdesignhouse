import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Frame } from "@/components/site/Frame";
import { projects, site, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — WS DESIGNHOUSE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — ${project.category} | WS DESIGNHOUSE`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/portfolio/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${params.slug}` }],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const sections = [
    { title: "The Concept", body: project.concept },
    { title: "The Details", body: project.details },
    { title: "The Space", body: project.space },
    { title: "The Craft", body: project.craft },
  ].filter((s) => Boolean(s.body));

  const facts = [
    project.projectLocation ? { label: "Location", value: project.projectLocation } : null,
    project.date ? { label: "Date", value: project.date } : null,
    project.materials?.length
      ? { label: "Materials", value: project.materials.join(", ") }
      : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <header className="relative min-h-[85svh] overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0">
          <Frame
            image={project.hero}
            aspect="wide"
            tone="dark"
            priority
            className="!aspect-auto h-full min-h-[85svh]"
            caption={`${project.title} — hero photograph`}
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, oklch(0.16 0.006 90 / 0.92) 0%, oklch(0.16 0.006 90 / 0.25) 55%, transparent 100%)",
          }}
        />
        <Container className="relative flex min-h-[85svh] flex-col justify-end pb-20 pt-40">
          <p className="label text-champagne">{project.category}</p>
          <h1 className="display mt-5 max-w-[14ch] text-[clamp(2.75rem,9vw,7rem)]">
            {project.title}
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed opacity-75">
            {project.description}
          </p>
        </Container>
      </header>

      {project.videoUrl && (
        <section className="bg-ink pb-20">
          <Container>
            <div className="aspect-video w-full border border-ivory/15">
              <iframe
                src={project.videoUrl}
                title={`${project.title} — project film`}
                loading="lazy"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </Container>
        </section>
      )}

      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90}>
                <div className="border-t border-champagne pt-8">
                  <h2 className="label text-champagne">{s.title}</h2>
                  <p className="mt-6 max-w-lg text-sm leading-loose text-muted-foreground sm:text-base">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {facts.length > 0 && (
            <dl className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="label text-muted-foreground">{f.label}</dt>
                  <dd className="mt-2 font-display text-xl">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </Container>
      </section>

      <section className="pb-24 lg:pb-36" aria-label="Project gallery">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-10">
            {project.gallery.map((img, i) => (
              <Reveal
                as="figure"
                key={img.alt}
                delay={(i % 2) * 80}
                className={img.aspect === "wide" ? "sm:col-span-2" : ""}
              >
                <Frame image={img} caption={img.alt} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-28 text-ivory lg:py-40">
        <Container className="text-center">
          <Reveal>
            <span className="rule-accent" aria-hidden />
            <h2 className="display mt-8 text-[clamp(2.25rem,7vw,5rem)]">
              Inspired by this space?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed opacity-70">
              Let's create something designed around the way you live.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="label w-full border border-champagne bg-champagne px-10 py-5 text-accent-foreground sm:w-auto"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="label w-full border border-ivory/35 px-10 py-5 transition-colors duration-500 hover:border-ivory sm:w-auto"
              >
                Book a Private Consultation
              </Link>
            </div>
            <a
              href={whatsappUrl(
                `Hi WS DESIGNHOUSE, I saw ${project.title} on your website and I'd like to arrange a private consultation.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="label link-underline mt-10 inline-block opacity-60 hover:opacity-100"
            >
              Or message the studio on WhatsApp
            </a>
            <p className="label mt-10 text-[0.95rem] opacity-40">{site.location}</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border py-16">
        <Container>
          <p className="label text-muted-foreground">More Projects</p>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: p.slug }}
                    className="font-display text-2xl link-underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
