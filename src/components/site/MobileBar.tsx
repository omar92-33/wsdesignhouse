import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, CalendarDays } from "lucide-react";
import { site, telUrl, whatsappUrl } from "@/lib/site";

/** Subtle persistent mobile action bar: WhatsApp • Call • Consult. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ivory/10 bg-ink/95 backdrop-blur-sm text-ivory lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-ivory/10">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.2} aria-hidden />
          <span className="label text-[0.68rem]">WhatsApp</span>
        </a>
        <a href={telUrl(site.phones[0])} className="flex flex-col items-center gap-1 py-3">
          <Phone className="h-4 w-4" strokeWidth={1.2} aria-hidden />
          <span className="label text-[0.68rem]">Call</span>
        </a>
        <Link to="/contact" className="flex flex-col items-center gap-1 py-3 text-champagne">
          <CalendarDays className="h-4 w-4" strokeWidth={1.2} aria-hidden />
          <span className="label text-[0.68rem]">Consult</span>
        </Link>
      </div>
    </div>
  );
}
