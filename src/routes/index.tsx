import { createFileRoute, Link } from "@tanstack/react-router";
import entryAsset from "@/assets/entry.png.asset.json";

import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Frame } from "@/components/site/Frame";
import { VirtualTour } from "@/components/site/VirtualTour";
import { FinalCta } from "@/components/site/FinalCta";
import { StudioMap } from "@/components/site/StudioMap";
import { Recognition } from "@/components/site/Recognition";
import { LivingOasis } from "@/components/site/LivingOasis";
import { StudioFilm } from "@/components/site/StudioFilm";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import {
  method,
  pillars,
  primaryCta,
  projects,
  secondaryCta,
  serviceCategories,
  site,
  studioSummary,
  testimonials,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WS DESIGNHOUSE | Interior Architecture & Bespoke Design, New Cairo" },
      {
        name: "description",
        content:
          "Interior architecture and bespoke design for private residences, villas and exceptional spaces. WS DESIGNHOUSE — New Cairo, Egypt and international projects.",
      },
      {
        property: "og:title",
        content: "WS DESIGNHOUSE | Interior Architecture & Bespoke Design",
      },
      {
        property: "og:description",
        content:
          "Luxury interior architecture and bespoke design for private residences, villas, and exceptional spaces. New Cairo, Egypt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <SelectedProjects />
      <Services />
      <WhyStudio />
      <StudioFilm />
      <Studio />
      <Proof />
      <Process />
      <BeyondTheFinishedSpace />
      <VirtualTour />
      <StudioMap />
      <FinalCta />
      <WhatsAppFloat />
    </>
  );
}

/* ------------------------------------------------------------- 01 — hero */

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
      <img
        src={entryAsset.url}
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(45,33,25,0.78) 0%, rgba(45,33,25,0.62) 45%, rgba(45,33,25,0.95) 100%)",
        }}
      />



      <Container className="laptop-hero-density relative pb-14 pt-32 2xl:pb-24 2xl:pt-40">
        <Reveal>
          <p className="label opacity-55">{site.positioning}</p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="display mt-7 max-w-[16ch] text-[clamp(2.7rem,6vw,4.25rem)] leading-[1.06] 2xl:text-[clamp(3rem,7vw,7rem)]">
            Interiors Designed for the Way You Live.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-5 max-w-xl text-base leading-relaxed opacity-70 2xl:mt-9 2xl:text-lg">
            Luxury interior architecture and bespoke design for private residences, villas, and
            exceptional spaces.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center 2xl:mt-12 2xl:gap-4">
            <Link
              to={secondaryCta.to}
              className="label inline-flex items-center justify-center border border-champagne bg-champagne px-8 py-4 text-accent-foreground transition-opacity duration-200 hover:opacity-85 2xl:px-9 2xl:py-5"
            >
              {secondaryCta.label}
            </Link>
            <Link
              to={primaryCta.to}
              className="label inline-flex items-center justify-center border border-ivory/40 px-8 py-4 transition-colors duration-200 hover:border-ivory 2xl:px-9 2xl:py-5"
            >
              {primaryCta.label}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <p className="label mt-6 opacity-45 2xl:mt-14">New Cairo · Egypt · International Projects</p>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------- 02 — selected projects */

function SelectedProjects() {
  return (
    <section className="pb-12 pt-20 lg:pb-14 lg:pt-24 2xl:pb-20 2xl:pt-36" aria-labelledby="projects-heading">
      <Container>
        <Reveal>
          <Eyebrow>Selected Projects</Eyebrow>
          <h2 id="projects-heading" className="display mt-7 text-[clamp(2.1rem,5.5vw,4.25rem)]">
            The Work.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            A selection of spaces shaped through architecture, material, light, and detail.
          </p>

        </Reveal>

        <div className="mx-auto mt-12 max-w-5xl space-y-16 sm:mt-14 sm:space-y-20 lg:space-y-20 2xl:mt-16 2xl:space-y-28">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.slug} delay={i * 60}>
              <Link to="/portfolio/$slug" params={{ slug: p.slug }} className="group block">
                <Frame image={p.hero} aspect="wide" caption={`${p.title} — photograph`} />
                <div className="mt-7 grid gap-5 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
                  <div>
                    {p.propertyType && (
                      <p className="label text-muted-foreground">{p.propertyType}</p>
                    )}
                    <h3 className="display mt-3 text-[clamp(1.7rem,4.5vw,3.1rem)]">{p.title}</h3>
                    {(p.projectLocation || p.scope) && (
                      <p className="mt-3 text-base text-muted-foreground">
                        {[p.projectLocation, p.scope].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            to={secondaryCta.to}
            className="label inline-flex items-center justify-center border border-ink px-9 py-4 transition-colors duration-200 hover:bg-ink hover:text-ivory"
          >
            {secondaryCta.label} →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- 03 — why us */

function WhyStudio() {
  return (
    <section className="bg-ink py-20 text-ivory lg:py-24 2xl:py-36" aria-labelledby="why-heading">
      <Container>
        <Reveal>
          <Eyebrow>Why WS DESIGNHOUSE</Eyebrow>
          <h2 id="why-heading" className="display mt-7 max-w-full whitespace-nowrap text-[clamp(0.95rem,4.2vw,4.25rem)]">
            Designed with Vision. Delivered with Precision.
          </h2>
        </Reveal>

        <ul className="mt-12 border-t border-ivory/12 2xl:mt-16">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.number} delay={i * 70}>
              <div className="grid gap-4 border-b border-ivory/12 py-7 md:grid-cols-[auto_1fr_1.3fr] md:items-baseline md:gap-10 2xl:py-10 2xl:gap-14">
                <span className="label opacity-50">{p.number}</span>
                <h3 className="font-display text-3xl uppercase tracking-[0.08em] sm:text-4xl">
                  {p.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed opacity-70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ 04 — process */

function Process() {
  return (
    <section className="py-20 lg:py-24 2xl:py-36" aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <Eyebrow>Process</Eyebrow>
          <h2 id="process-heading" className="display mt-7 max-w-[22ch] text-[clamp(2.1rem,5.5vw,4.25rem)]">
            From First Conversation to Final Detail.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8 2xl:mt-16 2xl:gap-10">
          {method.map((m, i) => (
            <Reveal as="li" key={m.number} delay={i * 80}>
              <div className="border-t border-ink pt-7">
                <span className="label text-muted-foreground">{m.number}</span>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.08em] sm:text-3xl">
                  {m.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- 05 — studio */

function Studio() {
  return (
    <section className="border-y border-border bg-muted py-20 lg:py-24 2xl:py-36" aria-labelledby="studio-heading">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16 2xl:gap-24">
          <Reveal>
            <Eyebrow>The Studio</Eyebrow>
            <h2 id="studio-heading" className="display mt-7 text-[clamp(2.1rem,5.5vw,4.25rem)]">
              {studioSummary.heading}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {studioSummary.body}
            </p>
            <ul className="mt-10 border-t border-border">
              {studioSummary.credibility.map((c) => (
                <li key={c} className="label border-b border-border py-4">
                  {c}
                </li>
              ))}
            </ul>
            <Link to="/about" className="label link-underline mt-10 inline-block">
              Discover the Studio →
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- 06 — services */

function Services() {
  return (
    <section className="pb-20 pt-12 lg:pb-24 lg:pt-14 2xl:pb-36 2xl:pt-20" aria-labelledby="services-heading">
      <Container>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 id="services-heading" className="display mt-7 text-[clamp(2.1rem,5.5vw,4.25rem)]">
            What We Do.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 2xl:mt-16">
          {serviceCategories.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60} className="bg-background">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="block h-full px-8 py-10 transition-colors duration-200 hover:bg-muted/70 lg:px-9 lg:py-10 2xl:px-12 2xl:py-16"
              >
                <h3 className="font-display text-3xl sm:text-4xl">{s.title}</h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <Link to="/services" className="label link-underline mt-14 inline-block">
            Explore Our Services →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- 07 — proof */

function Proof() {
  return (
    <section className="border-y border-border py-20 lg:py-24 2xl:py-32" aria-labelledby="proof-heading">
      <Container>
        <Reveal>
          <Eyebrow>Recognition & Credentials</Eyebrow>
          <h2 id="proof-heading" className="display mt-7 text-[clamp(2rem,5vw,3.75rem)]">
            Verified Experience.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Awarded placements, degrees and diplomas — documented credentials, separate from
            the concept and competition work shown further below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:gap-12 md:grid-cols-3 2xl:mt-14">
          {[
            {
              title: "Third Prize — LX Club and Offices Competition",
              meta: "Arcbazar · 2026",
            },
            {
              title: "Professional Doctorate in Interior Design, Honours Class II",
              meta: "Leeds International College, United Kingdom",
            },
            {
              title: "Diploma with Distinction in Interior Decorating",
              meta: "Eastern College, Halifax, Canada",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="border-t border-ink pt-6">
                <p className="font-display text-2xl leading-snug">{item.title}</p>
                <p className="label mt-4 text-muted-foreground">{item.meta}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link to="/about" className="label link-underline mt-12 inline-block">
            View Certificates →
          </Link>
        </Reveal>

        {testimonials.length > 0 && (
          <ul className="mt-16 grid gap-12 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.author}>
                <blockquote className="font-display text-2xl italic leading-snug">
                  “{t.quote}”
                </blockquote>
                <p className="label mt-5 text-muted-foreground">{t.author}</p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

/* ----------------------------------------------- 08 — concepts / recognition */

function BeyondTheFinishedSpace() {
  return (
    <section aria-labelledby="beyond-heading">
      <Container className="pt-20 lg:pt-24 2xl:pt-36">
        <Reveal>
          <Eyebrow>Concepts · Recognition · Studio Work</Eyebrow>
          <h2 id="beyond-heading" className="display mt-7 text-[clamp(2rem,5vw,3.75rem)]">
            Beyond the Finished Space.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Competition entries, design research and studio work. Everything in this section is
            concept work — not completed client projects — and any feedback shown belongs to the
            competition submissions themselves.
          </p>
        </Reveal>
      </Container>

      <Recognition />
      <LivingOasis />
    </section>
  );
}
