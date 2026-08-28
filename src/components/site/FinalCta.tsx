import { Link } from "@tanstack/react-router";
import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinalCta({
  heading = "Ready to Elevate Your Space?",
  description = "Call us directly for a private consultation.",
}: {
  heading?: string | undefined;
  description?: string | undefined;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-ivory">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 50% 0%, oklch(0.28 0.012 85) 0%, oklch(0.16 0.006 90) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-5 py-32 text-center sm:px-8 lg:py-44">
        <Reveal>
          <span className="rule-accent" aria-hidden />
          <h2 className="display mt-8 text-[clamp(2.5rem,7vw,5.5rem)]">{heading}</h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed opacity-70">
            {description}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="label w-full border border-champagne bg-champagne px-10 py-5 text-accent-foreground transition-opacity duration-500 hover:opacity-85 sm:w-auto"
            >
              Start Your Project
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="label w-full border border-ivory/35 px-10 py-5 transition-colors duration-500 hover:border-ivory sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="label mt-10 opacity-45">
            {site.location} — {site.established}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
