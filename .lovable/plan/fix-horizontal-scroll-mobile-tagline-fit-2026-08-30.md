# Fix: Horizontal scroll + mobile tagline fit

## Problems

1. **Page can shift/scroll left–right** — `overflow-x: hidden` is only set on `body`. With Lenis smooth scroll active, the horizontal overflow happens at the `html` level, so the page can still be dragged sideways (especially on mobile touch).
2. **"Designed with Vision. Delivered with Precision." still overflows mobile** — the heading uses `whitespace-nowrap` with `clamp(1.45rem, 5.5vw, 4.25rem)`. At 5.5vw the minimum 1.45rem kicks in around 26px, but the full one-line sentence needs roughly 13–15px to fit a 360px screen, so it still clips/overruns on phones.

## Changes

### 1. Lock horizontal overflow at both levels — `src/styles.css`
- Add `overflow-x: clip` (with `hidden` fallback) to both `html` and `body` so no element — including Lenis-transformed content, reveal animations that start offset, or wide images — can create a horizontal scrollbar or sideways drag on any device.
- Add `overscroll-behavior-x: none` on `html` to stop sideways rubber-banding on iOS/Android.

### 2. Make the tagline truly fit one line on mobile — `src/routes/index.tsx` (WhyStudio heading)
- Replace the current sizing with a width-driven clamp that guarantees fit on a 320px screen: `text-[clamp(0.95rem, 4.2vw, 4.25rem)]` and keep `whitespace-nowrap`.
- Add `max-w-full` so the element itself can never exceed the viewport, as a safety net.

## Verification
- Playwright at 360px and 1280px viewports: confirm `document.documentElement.scrollWidth === clientWidth` (no horizontal overflow anywhere on the homepage) and the tagline renders on a single line without clipping.
- Confirm vertical smooth scroll (Lenis) still works on mobile after the change.
