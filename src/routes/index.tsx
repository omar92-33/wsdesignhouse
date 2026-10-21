import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FeaturedPilates } from "@/components/site/FeaturedPilates";
import { VirtualTour } from "@/components/site/VirtualTour";
import { FinalCta } from "@/components/site/FinalCta";
import { StudioMap } from "@/components/site/StudioMap";

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
          "Interior architecture and bespoke design for private residences, villas and exceptional spaces. WS DESIGNHOUSE · New Cairo, Egypt and international projects.",
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
      <FeaturedPilates />
      <Services />
      <WhyStudio />
      <StudioFilm />
      <Studio />
      <Proof />
      <Process />

      <VirtualTour />
      <StudioMap />
      <FinalCta />
      <WhatsAppFloat />
    </>
  );
}

/* ------------------------------------------------------------- 01, hero */

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
      <img
        src="/media/entry.webp"
        alt=""
        aria-hidden
        fetchPriority="high"
        decoding="async"
        className="ws-hero-image absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(45,33,25,0.78) 0%, rgba(45,33,25,0.62) 45%, rgba(45,33,25,0.95) 100%)",
        }}
      />

      <Container className="laptop-hero-density desktop-hero-content relative pb-14 pt-32 2xl:pb-24 2xl:pt-40">
        <Reveal>
          <p className="label desktop-hero-label opacity-55">{site.positioning}</p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="display desktop-hero-heading mt-7 max-w-[16ch] text-[clamp(2.7rem,6vw,4.25rem)] leading-[1.06] 2xl:text-[clamp(3rem,7vw,7rem)]">
            Interiors Designed for the Way You Live.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="desktop-hero-lead mt-5 max-w-xl text-base leading-relaxed opacity-70 2xl:mt-9 2xl:text-lg">
            Luxury interior architecture and bespoke design for private residences, villas, and
            exceptional spaces.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center 2xl:mt-12 2xl:gap-4">
            <Link
              to={secondaryCta.to}
              className="label desktop-button desktop-hero-button inline-flex items-center justify-center border border-champagne bg-champagne px-8 py-4 text-accent-foreground transition-opacity duration-200 hover:opacity-85 2xl:px-9 2xl:py-5"
            >
              {secondaryCta.label}
            </Link>
            <Link
              to={primaryCta.to}
              className="label desktop-button desktop-hero-button inline-flex items-center justify-center border border-ivory/40 px-8 py-4 transition-colors duration-200 hover:border-ivory 2xl:px-9 2xl:py-5"
            >
              {primaryCta.label}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <p className="label mt-6 opacity-45 2xl:mt-14">
            New Cairo · Egypt · International Projects
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------- 02, selected projects */

/* ------------------------------------------------------------- 03, why us */

function WhyStudio() {
  return (
    <section
      className="desktop-section bg-ink py-20 text-ivory lg:py-24 2xl:py-36"
      aria-labelledby="why-heading"
    >
      <Container>
        <Reveal>
          <Eyebrow>Why WS DESIGNHOUSE</Eyebrow>
          <h2
            id="why-heading"
            className="display mt-7 max-w-full whitespace-nowrap text-[clamp(0.95rem,4.2vw,4.25rem)]"
          >
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

/* ------------------------------------------------------------ 04, process */

function Process() {
  return (
    <section
      className="desktop-section border-y border-border bg-muted py-20 lg:py-24 2xl:py-36"
      aria-labelledby="process-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16 2xl:gap-24">
          <Reveal className="process-intro-reveal">
            <div>
              <Eyebrow>Process</Eyebrow>
              <h2
                id="process-heading"
                className="display mt-7 max-w-[15ch] text-[clamp(2.4rem,6vw,4.75rem)]"
              >
                From First Conversation to Final Detail.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                A considered path from understanding how you live to delivering every final detail.
              </p>
            </div>
          </Reveal>

          <ol className="border-t border-ink">
            {method.map((m, i) => (
              <Reveal as="li" key={m.number} delay={i * 60}>
                <div className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-border py-7 sm:grid-cols-[4rem_minmax(0,0.65fr)_minmax(0,1fr)] sm:items-start sm:gap-6 lg:py-8">
                  <span className="font-display text-3xl leading-none text-champagne" aria-hidden>
                    {m.number}
                  </span>
                  <h3 className="font-display text-3xl leading-none sm:text-4xl">{m.title}</h3>
                  <p className="col-start-2 max-w-xl text-base leading-relaxed text-muted-foreground sm:col-start-auto">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- 05, studio */

function Studio() {
  return (
    <section
      className="desktop-section border-y border-border bg-muted py-20 lg:py-24 2xl:py-36"
      aria-labelledby="studio-heading"
    >
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

/* ----------------------------------------------------------- 06, services */

function Services() {
  return (
    <section
      className="desktop-section pb-20 pt-12 lg:pb-24 lg:pt-14 2xl:pb-36 2xl:pt-20"
      aria-labelledby="services-heading"
    >
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
                className="desktop-card block h-full px-8 py-10 transition-colors duration-200 hover:bg-muted/70 lg:px-9 lg:py-10 2xl:px-12 2xl:py-16"
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

/* -------------------------------------------------------------- 07, proof */

function Proof() {
  return (
    <section
      className="desktop-section bg-ink py-20 text-ivory lg:py-24 2xl:py-32"
      aria-labelledby="proof-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 2xl:gap-24">
          <Reveal>
            <Eyebrow>Recognition &amp; Credentials</Eyebrow>
            <h2
              id="proof-heading"
              className="display mt-7 max-w-[10ch] text-[clamp(2.6rem,6vw,5rem)]"
            >
              Verified Experience.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed opacity-70">
              Awarded placements, degrees and diplomas documenting our professional experience.
            </p>
            <Link
              to="/about"
              className="label desktop-button lux-press mt-9 inline-flex min-h-12 items-center justify-center border border-champagne bg-champagne px-7 py-3 text-accent-foreground"
            >
              View Certificates{" "}
              <span className="ml-3" aria-hidden>
                →
              </span>
            </Link>
          </Reveal>

          <div className="border-t border-ivory/25">
            {[
              {
                title: "Third Prize · LX Club and Offices Competition",
                institution: "Arcbazar",
                detail: "2026",
              },
              {
                title: "Professional Doctorate in Interior Design, Honours Class II",
                institution: "Leeds International College",
                detail: "United Kingdom",
              },
              {
                title: "Diploma with Distinction in Interior Decorating",
                institution: "Eastern College",
                detail: "Halifax, Canada",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <article className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 gap-y-4 border-b border-ivory/20 py-7 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6 lg:py-8">
                  <span className="font-display text-2xl text-champagne" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl leading-snug sm:text-3xl">{item.title}</h3>
                    <p className="mt-2 text-sm uppercase text-champagne sm:hidden">
                      {item.institution} · {item.detail}
                    </p>
                  </div>
                  <div className="col-start-2 hidden min-w-[10rem] text-right sm:block">
                    <p className="text-sm font-medium uppercase text-champagne">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-sm opacity-60">{item.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {testimonials.length > 0 && (
          <ul className="mt-16 grid gap-12 border-t border-ivory/20 pt-12 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.author} delay={i * 60}>
                <blockquote className="font-display text-2xl italic leading-snug">
                  “{t.quote}”
                </blockquote>
                <p className="label mt-5 text-champagne">{t.author}</p>
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
