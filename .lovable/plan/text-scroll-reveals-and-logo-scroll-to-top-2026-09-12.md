# Text Scroll Reveals and Logo Scroll-to-Top

## Scope
- Add a subtle, text-only reveal while scrolling across every content page on mobile, tablet, and desktop.
- Keep imagery, layout, colors, content, and existing responsive sizing unchanged.
- Make the top-left WS DESIGNHOUSE logo return to the top when clicked, including when already on the homepage.

## Implementation
- Add one shared text-reveal observer at the site shell so route headings, paragraphs, quotes, labels, captions, and plain text list items receive consistent motion.
- Use short opacity and vertical movement transitions with staggered timing, one-time activation, and reduced-motion support.
- Expose the existing smooth-scroll controller through a safe scroll-to-top helper and connect it to the logo.
- Verify homepage and inner-page behavior at mobile and desktop widths, including reduced motion and horizontal overflow.

## Technical details
- Use `IntersectionObserver` and transform/opacity only for efficient scrolling.
- Re-run discovery after client-side route changes so every page receives the effect.
- Fall back to native scrolling when smooth scrolling is unavailable.
