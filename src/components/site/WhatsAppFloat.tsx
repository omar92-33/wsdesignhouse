import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="label fixed bottom-6 right-6 z-40 border border-ink bg-background px-5 py-3 text-foreground shadow-lg transition-all duration-200 [transition-timing-function:var(--ease-lux)] hover:bg-ink hover:text-ivory active:scale-95 sm:bottom-8 sm:right-8"
      style={{
        animation: "wa-float-in 0.45s var(--ease-lux) 0.15s both",
      }}
    >
      WhatsApp
    </a>
  );
}
