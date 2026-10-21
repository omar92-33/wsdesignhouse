import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { navItems, site, whatsappUrl } from "@/lib/site";
import { lockScroll, scrollToTop, unlockScroll } from "@/components/site/SmoothScroll";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";
  const lockedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock through the smooth-scroll engine rather than body overflow, so
  // inertial scrolling resumes cleanly (and correctly on iOS) after closing.
  useEffect(() => {
    if (open && !lockedRef.current) {
      lockedRef.current = true;
      lockScroll();
    } else if (!open && lockedRef.current) {
      lockedRef.current = false;
      unlockScroll();
    }
    return () => {
      if (lockedRef.current) {
        lockedRef.current = false;
        unlockScroll();
      }
    };
  }, [open]);

  const closeMenu = () => {
    if (!open) return;
    setClosing(true);
    setOpen(false);
    window.setTimeout(() => setClosing(false), 240);
  };


  const solid = scrolled || !overHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-[400ms] [transition-timing-function:var(--ease-lux)] ${
          solid
            ? "bg-ink/95 backdrop-blur-sm text-ivory shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
            : "bg-transparent text-ivory"
        }`}
      >
        <div className="desktop-container desktop-nav mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:py-4 2xl:max-w-[1600px] 2xl:py-5">
          <Link
            to="/"
            className="min-w-0 leading-none"
            aria-label="WS DESIGNHOUSE, home and page top"
            onClick={(event) => {
              if (pathname === "/") event.preventDefault();
              scrollToTop();
            }}
          >
            <span className="flex items-center gap-3 sm:gap-4">
              <img
                src="/media/ws-mark-light.webp"
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
                    className="label link-underline opacity-75 transition-opacity duration-200 [transition-timing-function:var(--ease-lux)] hover:opacity-100"
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
              className="label desktop-button lux-press hidden border border-ivory/40 px-6 py-3 hover:border-champagne hover:bg-champagne hover:text-accent-foreground lg:inline-block"
            >
              Book a Consultation
            </Link>
            <button
              type="button"
              onClick={() => (open ? closeMenu() : setOpen(true))}
              className="label lux-press relative flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="relative block h-4 w-6" aria-hidden>
                {/* Two-stage: lines glide to centre, then rotate */}
                <span
                  className={`absolute left-0 block h-px w-6 bg-current transition-all duration-300 [transition-timing-function:var(--ease-lux)] ${
                    open
                      ? "top-1/2 rotate-45 [transition-delay:40ms]"
                      : "top-0.5 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-6 bg-current transition-all duration-300 [transition-timing-function:var(--ease-lux)] ${
                    open
                      ? "top-1/2 -rotate-45 [transition-delay:40ms]"
                      : "top-[calc(100%-2px)] rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`menu-panel fixed inset-0 z-[60] bg-ink text-ivory lg:hidden ${
          open
            ? "pointer-events-auto opacity-100 [clip-path:inset(0_0_0%_0)]"
            : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
        data-lenis-prevent
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-3"><img src="/media/ws-mark-light.webp" alt="" aria-hidden className="h-9 w-auto" /><span className="font-display text-lg tracking-[0.14em]">WS DESIGN HOUSE</span></span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="lux-press p-2"
            >
              <X className="h-6 w-6" strokeWidth={1} aria-hidden />
            </button>
          </div>

          <nav className="mt-14 flex-1" aria-label="Mobile">
            <ul className="space-y-6">
              {navItems.map((item, i) => (
                <li
                  key={item.to}
                  className={open ? "menu-item-in" : closing ? "menu-item-out" : "opacity-0"}
                  style={
                    open
                      ? { animationDelay: `${60 + i * 45}ms` }
                      : closing
                        ? { animationDelay: `${i * 15}ms` }
                        : undefined
                  }
                >
                  <Link
                    to={item.to}
                    className="lux-press inline-block font-display text-4xl leading-none tracking-tight"
                    activeProps={{ className: "text-champagne" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`space-y-4 border-t border-ivory/15 pt-6 ${
              open ? "menu-item-in" : closing ? "menu-item-out" : "opacity-0"
            }`}
            style={
              open
                ? { animationDelay: `${80 + navItems.length * 45}ms` }
                : closing
                  ? { animationDelay: "0ms" }
                  : undefined
            }
          >

            <Link
              to="/contact"
              className="label lux-press block border border-champagne bg-champagne px-6 py-4 text-center text-accent-foreground"
            >
              Book a Private Consultation
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="label lux-press flex items-center justify-center gap-2 border border-ivory/30 px-6 py-4"
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
