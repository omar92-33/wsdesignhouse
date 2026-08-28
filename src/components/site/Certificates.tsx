import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import arcbazar from "@/assets/cert-arcbazar.jpg.asset.json";
import leeds from "@/assets/cert-leeds.jpg.asset.json";

const certificates = [
  {
    src: arcbazar.url,
    title: "3rd Prize — LX Club and Offices Competition",
    issuer: "Arcbazar, Cambridge, Massachusetts",
    date: "May 2, 2026",
    alt: "Arcbazar certificate awarding WS Design House 3rd Prize in the LX Club and Offices competition",
  },
  {
    src: leeds.url,
    title: "Professional Doctorate in Interior Design",
    issuer: "Leeds International College, United Kingdom",
    date: "2022 — Honours Class II (Upper Division)",
    alt: "Leeds International College Professional Doctorate in Interior Design certificate for Wessam Abdellatif Elsaid Aly Sheisha",
  },
];

export function Certificates() {
  return (
    <section
      className="border-t border-border py-28 lg:py-40"
      aria-labelledby="certificates-heading"
    >
      <Container>
        <Reveal>
          <Eyebrow>Credentials</Eyebrow>
          <h2 id="certificates-heading" className="display mt-8 text-[clamp(2.25rem,5vw,4rem)]">
            Certificates &amp; Recognition
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-12 sm:grid-cols-2">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 120} as="figure">
              <div className="overflow-hidden border border-border bg-background">
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <figcaption className="mt-5">
                <p className="font-display text-xl leading-snug">{c.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="label mt-2 opacity-70">{c.date}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
