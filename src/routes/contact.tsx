import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Container, Eyebrow, PageHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { mapsUrl, site, telUrl, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Private Consultation | WS DESIGNHOUSE" },
      {
        name: "description",
        content:
          "Request a private interior design consultation with WS DESIGNHOUSE in New Cairo. Call, email or message the studio on WhatsApp.",
      },
      { property: "og:title", content: "Start Your Journey — WS DESIGNHOUSE" },
      {
        property: "og:description",
        content:
          "Reach out to our design team for a private consultation.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Connect"
        title="Start Your Journey"
        intro="Experience the art of artisanal living. Reach out to our design team for a private consultation."
      />

      <section className="py-20 lg:py-24 2xl:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16 2xl:gap-24">
            <Reveal>
              <ConsultationForm />
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-10">
                <div>
                  <Eyebrow>The Studio</Eyebrow>
                  <ul className="mt-8 space-y-5 text-base">
                    {site.phones.map((p) => (
                      <li key={p}>
                        <a
                          href={telUrl(p)}
                          className="link-underline inline-flex items-center gap-3"
                        >
                          <Phone className="h-4 w-4 text-champagne" strokeWidth={1.2} aria-hidden />
                          {p}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href={`mailto:${site.email}`}
                        className="link-underline inline-flex items-center gap-3"
                      >
                        <Mail className="h-4 w-4 text-champagne" strokeWidth={1.2} aria-hidden />
                        {site.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline inline-flex items-center gap-3"
                      >
                        <MessageCircle
                          className="h-4 w-4 text-champagne"
                          strokeWidth={1.2}
                          aria-hidden
                        />
                        Chat on WhatsApp
                      </a>
                    </li>
                    <li className="inline-flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-champagne" strokeWidth={1.2} aria-hidden />
                      {site.location}
                    </li>
                  </ul>
                  <a
                    href={`mailto:${site.email}`}
                    className="label mt-10 inline-block border border-ink px-8 py-4 transition-colors duration-500 hover:bg-ink hover:text-ivory"
                  >
                    Email the Studio
                  </a>
                </div>

                <div>
                  <h2 className="display text-3xl uppercase">Visit Our Studio</h2>
                  <p className="mt-3 text-base text-muted-foreground">{site.location}</p>
                  <div className="mt-6 aspect-[4/3] w-full overflow-hidden border border-border">
                    <iframe
                      title="WS DESIGNHOUSE studio location, New Cairo"
                      loading="lazy"
                      className="h-full w-full"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}&z=14&output=embed`}
                    />
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label mt-6 inline-block border border-input px-8 py-4 transition-colors duration-500 hover:border-foreground"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
