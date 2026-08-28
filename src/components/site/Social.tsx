import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Container, Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

const channels = [
  {
    name: "Instagram",
    handle: site.social.instagramHandle,
    href: site.social.instagram,
    Icon: Instagram,
  },
  { name: "TikTok", handle: site.social.tiktokHandle, href: site.social.tiktok, Icon: null },
  {
    name: "LinkedIn",
    handle: site.social.linkedinName,
    href: site.social.linkedin,
    Icon: Linkedin,
  },
];

export function Social() {
  return (
    <section className="border-t border-border py-28 lg:py-40" aria-labelledby="social-heading">
      <Container>
        <Reveal>
          <Eyebrow>Follow the Journey</Eyebrow>
          <h2 id="social-heading" className="display mt-8 text-[clamp(2.25rem,6vw,4.5rem)]">
            Inside WS DESIGNHOUSE
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Discover our latest spaces, design ideas and creative work across our social
            channels.
          </p>
        </Reveal>

        <ul className="mt-16 border-t border-border">
          {channels.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 80}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 border-b border-border py-8 transition-colors duration-500 hover:bg-muted/60"
              >
                <span className="flex min-w-0 items-baseline gap-5">
                  <span className="font-display text-3xl sm:text-4xl">{c.name}</span>
                  <span className="label truncate text-muted-foreground">{c.handle}</span>
                </span>
                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-champagne transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1}
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
