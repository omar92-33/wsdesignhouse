# Faster map load + mobile heading fit

## 1. Map loads automatically (no tap required)

The `StudioMap` iframe currently uses `loading="lazy"`, which defers the embed until it scrolls near the viewport. Switch it to eager loading so it starts immediately, while keeping it non-blocking for the hero.

- In `src/components/site/StudioMap.tsx`:
  - Remove `loading="lazy"` from the `<iframe>`.
  - Add `loading="eager"` and `fetchpriority="low"`.
  - Add `decoding="async"` if a static fallback is used.
  - Add `<link rel="preconnect">` hints for Google Maps domains in `src/routes/__root.tsx` head links so the connection warms up before the iframe request.

## 2. "Designed with Vision. Delivered with Precision." fits one line on mobile

The heading currently uses `text-[clamp(2.1rem,5.5vw,4.25rem)]`. On small screens 2.1 rem can still wrap to two lines.

- In `src/routes/index.tsx` inside `WhyStudio`:
  - Reduce the mobile minimum so the text stays on one line at ~375 px width.
  - Keep the desktop maximum unchanged for impact.
  - Suggested clamp: `text-[clamp(1.45rem,5.5vw,4.25rem)]` or add `whitespace-nowrap` with a smaller mobile size.
  - Remove `max-w-[20ch]` or keep it only on larger breakpoints so it does not force wrapping.

## Files touched

- `src/components/site/StudioMap.tsx`
- `src/routes/index.tsx`
- `src/routes/__root.tsx` (preconnect links only)
