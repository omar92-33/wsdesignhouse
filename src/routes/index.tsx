import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Frame } from "@/components/site/Frame";
import { VirtualTour } from "@/components/site/VirtualTour";
import { Social } from "@/components/site/Social";
import { FinalCta } from "@/components/site/FinalCta";
import { Recognition } from "@/components/site/Recognition";
import { LivingOasis } from "@/components/site/LivingOasis";
import { StudioFilm } from "@/components/site/StudioFilm";
import diningAsset from "@/assets/dining-interior.jpg.asset.json";
import { journey, method, pillars, projects, services, site, testimonials } from "@/lib/site";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WS DESIGNHOUSE | Luxury Interior Architecture & Bespoke Design in New Cairo" },
      {
        name: "description",
        content:
          "WS DESIGNHOUSE is a New Cairo interior architecture studio specializing in luxury residential interiors, visualization, bespoke furniture and end-to-end project management.",
      },
      {
        property: "og:title",
        content: "WS DESIGNHOUSE | Luxury Interior Architecture in New Cairo",
      },
      {
        property: "og:description",
        content:
          "Design Spaces… Creating Dreams. End-to-end luxury interior design, visualization, planning, engineering and FF&E in New Cairo, Egypt.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StudioFilm />
      <Vision />
      <BrandStatement />
      <Founder />
      <Pillars />
      <ServicesPreview />
      <Journey />
      <Portfolio />
      <Recognition />
      <LivingOasis />

      <VirtualTour />
      <Process />
      {testimonials.length > 0 && <ClientExperiences />}
      <Social />
      <StudioLocation />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(110% 85% at 70% 15%, oklch(0.31 0.016 80) 0%, oklch(0.17 0.006 90) 65%)",
        }}
      />

      <Container className="relative pb-24 pt-40 lg:pb-32">
        <Reveal>
          <Eyebrow>Interior Architecture Specialists</Eyebrow>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="display mt-10 max-w-[15ch] text-[clamp(2.9rem,9vw,8rem)] leading-[1.18] tracking-[0.005em]">
            Designing Spaces That Define Lifestyle
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-10 font-display text-2xl italic text-champagne sm:text-3xl">
            {site.tagline}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal delay={300}>
            <p className="label text-[0.75rem] opacity-60">{site.serviceLine}</p>
            <p className="label mt-8 opacity-50">{site.location}</p>
          </Reveal>

          <Reveal delay={380}>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                to="/contact"
                className="label border border-champagne bg-champagne px-8 py-5 text-center text-accent-foreground transition-opacity duration-500 hover:opacity-85"
              >
                Book a Private Consultation
              </Link>
            </div>
            <div className="mt-6 lg:text-right">
              <a
                href={site.virtualTour}
                target="_blank"
                rel="noopener noreferrer"
                className="label inline-flex items-center gap-2 border border-champagne px-8 py-4 text-champagne transition-colors duration-500 hover:bg-champagne hover:text-accent-foreground"
              >
                View the Virtual Tour
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Vision() {
  return (
    <section className="py-28 lg:py-44" aria-labelledby="vision-heading">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-28">
          <Reveal>
            <Eyebrow>The Vision</Eyebrow>
            <h2 id="vision-heading" className="display mt-8 text-[clamp(2.25rem,6vw,4.75rem)]">
              Boutique Design for Sovereign Living
            </h2>
            <p className="mt-10 max-w-lg text-sm leading-loose text-muted-foreground sm:text-base">
              WS DESIGNHOUSE is a premium interior studio specializing in artisanal residential
              spaces. Based in New Cairo, we bring a global luxury perspective to every Egyptian
              home.
            </p>
            <hr className="my-12 w-24 border-champagne" />
            <blockquote className="max-w-lg font-display text-2xl italic leading-snug sm:text-3xl">
              “We don't just design rooms; we curate experiences that define who you are.”
            </blockquote>
            <p className="label mt-6 text-muted-foreground">— Walid Samir, Lead Architect</p>
          </Reveal>

          <Reveal delay={140}>
            <Frame
              aspect="portrait"
              image={{
                src: diningAsset.url,
                alt: "Architectural interior — dining space with sculptural table, pendant lighting and warm cove light",
                aspect: "portrait",
              }}
              caption="Architectural interior — studio photography"
              className="lg:mt-16"
            />

          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function BrandStatement() {
  return (
    <section className="border-y border-border bg-muted/50 py-28 lg:py-48">
      <Container className="text-center">
        <Reveal>
          <p className="display text-[clamp(2.5rem,11vw,9rem)] leading-[0.95]">Design Spaces…</p>
          <p className="display text-[clamp(2.5rem,11vw,9rem)] italic leading-[0.95] text-champagne">
            Creating Dreams
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-14 max-w-2xl text-sm leading-loose text-muted-foreground sm:text-base">
            Every space begins with an idea. Through thoughtful design, visualization, planning
            and execution, we transform that idea into an environment designed around the way you
            live.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-28 lg:py-44" aria-labelledby="founder-heading">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal>
            <p className="label text-muted-foreground">Dr. Wessam Abdellatif</p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>The Founder</Eyebrow>
            <h2 id="founder-heading" className="display mt-8 text-[clamp(2.25rem,6vw,4.5rem)]">
              About Me
            </h2>
            <div className="mt-10 max-w-2xl space-y-6 text-sm leading-loose text-muted-foreground">
              <p>
                I began my professional journey in the late 1990s, working in real estate
                design—an experience that laid the foundation for my understanding of space,
                function, and the built environment. In 2000, I pursued an MBA at The American
                University in Cairo, but soon realized that my true passion lay elsewhere: design.
              </p>
              <p>
                Following that realization, I transitioned fully into the creative field. My
                career took me to Canada, where I founded and managed a furniture business while
                also overseeing operations within a construction company.
              </p>
            </div>
            <Link
              to="/about"
              className="label mt-10 inline-block border border-ink px-8 py-4 transition-colors duration-500 hover:bg-ink hover:text-ivory"
            >
              Meet the Designer
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Pillars() {
  return (
    <section className="bg-ink py-28 text-ivory lg:py-44" aria-labelledby="pillars-heading">
      <Container>
        <Reveal>
          <Eyebrow>The Difference</Eyebrow>
          <h2 id="pillars-heading" className="display mt-8 text-[clamp(2.25rem,6vw,4.75rem)]">
            Designed With Intention
          </h2>
        </Reveal>
        <ul className="mt-16 border-t border-ivory/12">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.number} delay={i * 70}>
              <div className="grid gap-4 border-b border-ivory/12 py-10 md:grid-cols-[auto_1fr_1.2fr] md:items-baseline md:gap-12">
                <span className="label text-champagne">{p.number}</span>
                <h3 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
                  {p.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed opacity-65">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-28 lg:py-44" aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <Eyebrow>Our Expertise</Eyebrow>
          <h2 id="services-heading" className="display mt-8 text-[clamp(2.25rem,6vw,4.75rem)]">
            From Vision to Reality
          </h2>
          <p className="label mt-8 text-muted-foreground">{site.serviceLine}</p>
        </Reveal>

        <ul className="mt-16 border-t border-border">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 50}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid gap-3 border-b border-border py-8 transition-colors duration-500 hover:bg-muted/60 md:grid-cols-[1fr_1.1fr_auto] md:items-center md:gap-10"
              >
                <h3 className="font-display text-3xl sm:text-4xl">{s.title}</h3>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <span aria-hidden />

              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <Link
            to="/contact"
            className="label mt-14 inline-block border border-ink px-8 py-4 transition-colors duration-500 hover:bg-ink hover:text-ivory"
          >
            Discuss Your Project
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

function Journey() {
  return (
    <section
      className="border-y border-border bg-muted/50 py-28 lg:py-40"
      aria-labelledby="journey-heading"
    >
      <Container>
        <Reveal>
          <h2
            id="journey-heading"
            className="display text-center text-[clamp(2rem,6vw,4.5rem)] uppercase"
          >
            From Idea to Final Space
          </h2>
        </Reveal>
        <ol className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-0 md:flex-row md:flex-wrap md:justify-center">
          {journey.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 70} className="flex items-center">
              <span className="group flex flex-col items-center px-4 py-3">
                <span className="label text-[0.7rem] text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 font-display text-xl uppercase tracking-[0.12em] transition-colors duration-500 group-hover:text-champagne sm:text-2xl">
                  {step}
                </span>
              </span>
              {i < journey.length - 1 && (
                <span
                  aria-hidden
                  className="mx-1 h-px w-6 bg-border md:w-8 max-md:h-6 max-md:w-px"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="py-28 lg:py-44" aria-labelledby="portfolio-heading">
      <Container>
        <Reveal>
          <Eyebrow>Selected Works</Eyebrow>
          <h2 id="portfolio-heading" className="display mt-8 text-[clamp(2.25rem,6vw,4.75rem)]">
            Portfolio Collection
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            A curated selection of residential masterpieces in Egypt.
          </p>
        </Reveal>
      </Container>

      <Container>
        <div className="mt-20 space-y-24 lg:space-y-32">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.slug}>
              <div className="mx-auto max-w-4xl">
                <Frame image={p.hero} aspect="wide" caption={`${p.title} — hero photograph`} />
                <div
                  className={`mt-8 grid gap-4 md:grid-cols-[auto_1fr] md:items-end md:gap-12 ${
                    i % 2 === 1 ? "md:justify-items-end" : ""
                  }`}
                >
                  <div>
                    <p className="label text-champagne">{p.category}</p>
                    <h3 className="display mt-3 text-[clamp(1.75rem,5vw,3.5rem)]">{p.title}</h3>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:pb-3">
                    {p.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  return (
    <section className="py-28 lg:py-44" aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <Eyebrow>The Journey</Eyebrow>
          <h2 id="process-heading" className="display mt-8 text-[clamp(2.25rem,6vw,4.75rem)]">
            Our Method
          </h2>
        </Reveal>
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {method.map((m, i) => (
            <Reveal as="li" key={m.number} delay={i * 90}>
              <div className="border-t border-champagne pt-8">
                <span className="label text-champagne">{m.number}</span>
                <h3 className="mt-4 font-display text-3xl uppercase tracking-wide">{m.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <Link
            to="/process"
            className="label mt-14 inline-block border border-ink px-8 py-4 transition-colors duration-500 hover:bg-ink hover:text-ivory"
          >
            Begin Your Journey
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

function ClientExperiences() {
  return (
    <section className="border-t border-border py-28 lg:py-40">
      <Container>
        <Eyebrow>Client Experiences</Eyebrow>
        <ul className="mt-14 grid gap-12 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.author}>
              <blockquote className="font-display text-2xl italic leading-snug">
                “{t.quote}”
              </blockquote>
              <p className="label mt-5 text-muted-foreground">{t.author}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function StudioLocation() {
  return (
    <section className="border-t border-border py-28 lg:py-40" aria-labelledby="location-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
          <Reveal>
            <Eyebrow>The Studio</Eyebrow>
            <h2
              id="location-heading"
              className="display mt-8 text-[clamp(2rem,6vw,4.25rem)] uppercase"
            >
              Visit Our Studio
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{site.location}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${site.coordinates.lat},${site.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-10 inline-block border border-ink px-8 py-4 transition-colors duration-500 hover:bg-ink hover:text-ivory"
            >
              Get Directions
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title="WS DESIGNHOUSE studio location, New Cairo"
                loading="lazy"
                className="h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}&z=14&output=embed`}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
