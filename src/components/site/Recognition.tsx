import { Container, Eyebrow } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Slideshow } from "@/components/site/Slideshow";
import { ConceptTag } from "@/components/site/ConceptTag";
const slides = [
  { src: "/media/milan-5400.webp", alt: "Project feedback · Milan Design Loft, Living Studio proposal overview" },
  { src: "/media/milan-5401.webp", alt: "Jury feedback quote on the Living Studio loft proposal" },
  { src: "/media/milan-5402.webp", alt: "Key strengths of the Living Studio proposal: spatial organization, storage, materiality, visual presentation" },
  { src: "/media/milan-5403.webp", alt: "Closing evidence board for the Milan Design Loft, Living Studio proposal" },
];

export function Recognition() {
  return (
    <section
      className="desktop-section border-t border-border py-24 lg:py-24 2xl:py-36"
      aria-labelledby="recognition-heading"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16 2xl:gap-24">
          <div>
            <Reveal>
              <ConceptTag>Concept Work · Competition Entry, Not a Client Project</ConceptTag>
              <Eyebrow className="mt-6">Jury Feedback</Eyebrow>
              <h2
                id="recognition-heading"
                className="display mt-6 text-[clamp(2.25rem,5vw,4rem)]"
              >
                Living Studio
                <span className="block text-champagne">Milan Design Loft</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 max-w-md space-y-5 text-base leading-relaxed opacity-70 sm:text-lg">
                <p>
                  A closer look at the jury feedback for our Living Studio | Milan Design Loft
                  proposal.
                </p>
                <p>
                  Recognized for its clear spatial organization, refined material palette,
                  integrated storage, and polished visual presentation.
                </p>
                <p>
                  A project shaped around thoughtful living, working, and everyday flexibility.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:mx-auto lg:w-full lg:max-w-[620px]">
            <Slideshow slides={slides} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
