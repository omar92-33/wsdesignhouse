import { Link } from "@tanstack/react-router";
import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinalCta({
  heading = "Your Space Deserves More Than a Template.",
  description = "Every exceptional project begins with a conversation.",
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
            "radial-gradient(120% 90% at 50% 0%, oklch(0.36 0.032 62) 0%, oklch(0.24 0.024 62) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1000px] px-5 py-28 text-center sm:px-8 lg:py-28 2xl:py-40">
        <Reveal>
          <span className="rule-accent" aria-hidden />
          <h2 className="display mt-8 text-[clamp(2.5rem,6vw,4.5rem)] 2xl:text-[clamp(2.5rem,7vw,5.5rem)]">{heading}</h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed opacity-70">
            {description}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="label w-full border border-champagne bg-champagne px-10 py-5 text-accent-foreground transition-opacity duration-200 hover:opacity-85 sm:w-auto"
            >
              Book Your Private Consultation
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="label w-full border border-ivory/35 px-10 py-5 transition-colors duration-200 hover:border-ivory sm:w-auto"
            >
              Prefer to Talk? WhatsApp Us
            </a>
          </div>
          <p className="label mt-10 opacity-45">
            Built on decades of experience across design, construction, and bespoke furniture
          </p>

        </Reveal>
      </div>
    </section>
  );
}
