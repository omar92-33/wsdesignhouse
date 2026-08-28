import { Link, useRouterState } from "@tanstack/react-router";
import wsMark from "@/assets/ws-mark-light.png.asset.json";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { navItems, site, whatsappUrl } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid
            ? "bg-ink/95 backdrop-blur-sm text-ivory shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
            : "bg-transparent text-ivory"
        }`}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:py-5">
          <Link to="/" className="min-w-0 leading-none" aria-label="WS DESIGNHOUSE — home">
            <span className="flex items-center gap-3 sm:gap-4">
              <img
                src={wsMark.url}
                alt=""
                aria-hidden
                className="h-9 w-auto shrink-0 sm:h-11"
              />
              <span className="min-w-0">
                <span className="block whitespace-nowrap font-display text-lg leading-none tracking-[0.14em] sm:text-2xl">
                  WS DESIGN HOUSE
                </span>
                <span className="label mt-1.5 hidden opacity-60 sm:block">
                  {site.positioning}
                </span>
              </span>
            </span>
          </Link>

          <nav className="hidden justify-center lg:flex" aria-label="Primary">
            <ul className="flex items-center gap-9">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="label link-underline opacity-80 transition-opacity hover:opacity-100"
                    activeProps={{ className: "label opacity-100 text-champagne" }}
                    
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-4">
            <Link
              to="/contact"
              className="label hidden border border-ivory/40 px-6 py-3 transition-colors duration-500 hover:border-champagne hover:bg-champagne hover:text-accent-foreground lg:inline-block"
            >
              Book a Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="label flex items-center gap-2 py-2 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" strokeWidth={1} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink text-ivory transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-3"><img src={wsMark.url} alt="" aria-hidden className="h-9 w-auto" /><span className="font-display text-lg tracking-[0.14em]">WS DESIGN HOUSE</span></span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X className="h-6 w-6" strokeWidth={1} aria-hidden />
            </button>
          </div>

          <nav className="mt-14 flex-1" aria-label="Mobile">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-display text-4xl leading-none tracking-tight"
                    activeProps={{ className: "text-champagne" }}
                    
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-ivory/15 pt-6">
            <Link
              to="/contact"
              className="label block border border-champagne bg-champagne px-6 py-4 text-center text-accent-foreground"
            >
              Book a Private Consultation
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="label flex items-center justify-center gap-2 border border-ivory/30 px-6 py-4"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.2} aria-hidden />
              WhatsApp the Studio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
