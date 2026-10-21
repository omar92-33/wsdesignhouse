import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { TikTokIcon } from "./TikTokIcon";
import { Reveal } from "./Reveal";
import { navItems, site, telUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="desktop-footer bg-ink pb-16 pt-16 text-ivory 2xl:pb-20 2xl:pt-20">
      <div className="desktop-container mx-auto max-w-[1180px] px-5 sm:px-8 2xl:max-w-[1600px]">
        <div className="grid gap-14 border-b border-ivory/12 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <img src="/media/ws-logo-light.webp" alt="WS DESIGN HOUSE" width={745} height={541} className="h-24 w-auto sm:h-28" />
            <Reveal>
              <p className="mt-4 font-display text-xl italic opacity-80">
                Interior architecture, considered in every detail.
              </p>
              <p className="label mt-6 opacity-60">{site.positioning}</p>
              <p className="mt-4 text-base leading-relaxed opacity-60">{site.serviceLine}</p>
            </Reveal>
          </div>

          <nav aria-label="Footer">
            <Reveal delay={40}>
              <p className="label mb-6 text-champagne">Navigate</p>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-base opacity-70 hover:opacity-100">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </nav>

          <div>
            <Reveal delay={80}>
              <p className="label mb-6 text-champagne">Studio</p>
              <ul className="space-y-3 text-base opacity-70">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:opacity-100">
                    {site.email}
                  </a>
                </li>
                {site.phones.map((p) => (
                  <li key={p}>
                    <a href={telUrl(p)} className="hover:opacity-100">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal delay={120}>
              <p className="label mb-6 text-champagne">Follow</p>
              <ul className="space-y-3 text-base opacity-70">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.2} aria-hidden /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <TikTokIcon className="h-4 w-4" /> TikTok
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={1.2} aria-hidden /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-100"
                >
                  <Facebook className="h-4 w-4" strokeWidth={1.2} aria-hidden /> Facebook
                </a>
              </li>
              </ul>
              <Link
                to="/contact"
                className="label mt-8 inline-block border border-champagne px-5 py-3 text-champagne transition-colors duration-200 hover:bg-champagne hover:text-accent-foreground"
              >
                Book a Private Consultation
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="flex flex-col gap-3 pt-8 tracking-[0.12em] uppercase opacity-45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 WS DESIGNHOUSE. Crafting Luxury Interiors.</p>
            <p>Tax ID Number: {site.taxId}</p>
            <p>{site.established}</p>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.instagram.com/mox_web_designs?stkn=MW16Y3o3NTMxa3B2eg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.14em] opacity-35 transition-opacity duration-200 hover:opacity-70"
            >
              powered by mox web designs
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
