# Slideshow polish, 360 fix, performance and motion

## 1. Slideshows (Milan + Living Oasis, shared component)

- Shrink the arrows: smaller icons, tighter padding, subtle circular translucent buttons pinned near the vertical middle, fading in on hover on desktop and staying small and out of the way on mobile so they never cover the boards' text.
- Auto-advance slowly (about 6s per slide) with a smooth crossfade/slide, pausing on hover, focus, touch, when the tab is hidden, and when the visitor has manually navigated a moment ago. Fully disabled under reduced-motion.
- Add touch swipe (left/right) plus mouse drag on both slideshows, with a small distance threshold so vertical page scrolling still works normally.
- Keep the existing dots, counter, keyboard arrows and accessibility roles.

## 2. Explore in 360

The tour host sends `X-Frame-Options: SAMEORIGIN`, so the tour can never render inside an iframe on this site — that is why the button appears broken. Fix: make "Explore in 360°" and the preview panel open the tour in a new tab (same as "Open Full Screen"), and replace the dead embed area with a clickable 360 preview panel that states it opens in a new window.

## 3. Faster loading

- Serve responsive, width-limited images: add `width`/`height`, `sizes`, `decoding="async"`, and lazy-load everything below the fold; only the hero and first visible image load eagerly.
- Preload just the hero/logo assets; drop render-blocking work elsewhere. Load the Google Fonts stylesheet non-blocking with a `preconnect` + swap fallback so text paints immediately.
- Trim the font request to the weights actually used.
- Defer the map and any embeds until they scroll into view or are clicked.
- Avoid re-triggering layout: reserve aspect-ratio boxes for all images so nothing shifts while loading.

## 4. Smoother scroll animation

- Rework the reveal utility: shorter distance, gentler easing, slight blur-to-clear, staggered by index, all GPU-composited (opacity/transform only).
- Add a soft parallax/scale on large section images and a smooth scroll behaviour with proper reduced-motion opt-out.
- Make section transitions consistent so headings, paragraphs and images ease in as a group instead of individually popping.

## Technical notes

- Changes are contained to `src/components/site/Slideshow.tsx`, `VirtualTour.tsx`, `Reveal.tsx`, `Frame.tsx`, `src/styles.css`, and `src/routes/__root.tsx` head links.
- No backend or content changes; all supplied imagery and copy stay as-is.
