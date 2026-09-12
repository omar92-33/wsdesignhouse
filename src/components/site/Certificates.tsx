import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
const certificates = [
  {
    src: "/media/cert-arcbazar.jpg",
    title: "3rd Prize · LX Club and Offices Competition",
    issuer: "Arcbazar, Cambridge, Massachusetts",
    date: "May 2, 2026",
    alt: "Arcbazar certificate awarding WS Design House 3rd Prize in the LX Club and Offices competition",
  },
  {
    src: "/media/cert-leeds.jpg",
    title: "Professional Doctorate in Interior Design",
    issuer: "Leeds International College, United Kingdom",
    date: "2022 · Honours Class II (Upper Division)",
    alt: "Leeds International College Professional Doctorate in Interior Design certificate for Wessam Abdellatif Elsaid Aly Sheisha",
  },
  {
    src: "/media/cert-doctorate-ar.jpg",
    title: "Professional Doctorate in Interior Design · Certified Translation",
    issuer: "Leeds International College, certified in Cairo",
    date: "October 2022",
    alt: "Arabic certified translation of the Professional Doctorate in Interior Design awarded to Wessam Abdellatif Elsaid Aly Sheisha",
  },
  {
    src: "/media/cert-masters.png",
    title: "Professional Masters in Interior Design",
    issuer: "Leeds International College, London, United Kingdom",
    date: "November 2020",
    alt: "Leeds International College Professional Masters in Interior Design degree certificate for Wessam Abdellatif Elsaid Aly Sheisha",
  },
  {
    src: "/media/cert-graduation.png",
    title: "Graduation Certificate · Professional Masters in Interior Design",
    issuer: "Leeds International College, United Kingdom",
    date: "November 2020 · With Merit of Honors",
    alt: "Leeds International College graduation certificate for the Professional Masters in Interior Design, awarded with merit of honors",
  },
  {
    src: "/media/cert-arabic.jpg",
    title: "Graduation Document · Arabic Division",
    issuer: "Leeds International College, Arabic Division",
    date: "Final result: Passed with grade Excellent",
    alt: "Leeds International College Arabic Division graduation document confirming the Professional Masters Degree in Interior Design with grade Excellent",
  },
  {
    src: "/media/cert-excellence.png",
    title: "Certificate of Excellence",
    issuer: "Leeds International College, United Kingdom",
    date: "Grade “Excellent” in the graduation project",
    alt: "Leeds International College Certificate of Excellence awarded to Wessam Abdellatif Elsaid Aly Shiesha",
  },
  {
    src: "/media/cert-eastern.jpg",
    title: "Diploma with Distinction · Interior Decorating",
    issuer: "Eastern College, Halifax, Nova Scotia, Canada",
    date: "November 16, 2018",
    alt: "Eastern College diploma with distinction in Interior Decorating awarded to Wessam Sheisha",
  },
];


export function Certificates() {
  return (
    <section
      className="desktop-section border-t border-border py-24 lg:py-24 2xl:py-36"
      aria-labelledby="certificates-heading"
    >
      <Container>
        <Reveal>
          <Eyebrow>Credentials</Eyebrow>
          <h2 id="certificates-heading" className="display mt-8 text-[clamp(2.25rem,5vw,4rem)]">
            Certificates &amp; Recognition
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3 2xl:max-w-5xl 2xl:gap-12">
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
                <p className="mt-2 text-base text-muted-foreground">{c.issuer}</p>
                <p className="label mt-2 opacity-70">{c.date}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
