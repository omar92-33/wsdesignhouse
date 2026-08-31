# Faster Site Motion and “About WS” Navigation

## Changes

1. **Rename the About navigation link**
   - Change the shared `/about` label from **“Studio”** to **“About WS”**.
   - This updates it consistently in the desktop navigation, mobile menu, and footer navigation without changing the page URL or SEO content.

2. **Make motion faster and more restrained site-wide**
   - Shorten the shared content reveal animations and reduce their movement and blur so sections appear promptly instead of slowly drifting into place.
   - Speed up header background changes, navigation hover feedback, buttons, links, and the hamburger-to-close transition.
   - Make the mobile menu open, stagger, and close considerably faster.
   - Retune smooth scrolling to feel responsive and controlled, with less inertia and substantially less velocity blur.
   - Preserve slideshow autoplay and functional transitions while avoiding unnecessary changes to content or layout.

3. **Accessibility and verification**
   - Keep the existing reduced-motion behavior authoritative.
   - Verify desktop and mobile navigation labels, menu opening/closing, normal page scrolling, section reveals, and the absence of runtime/build errors.

## Technical details

- Update the shared label in `src/lib/site.ts`.
- Tune shared motion tokens/utilities in `src/styles.css` rather than adjusting every page separately.
- Retune Lenis in `src/components/site/SmoothScroll.tsx`.
- Reduce component-specific navigation timings in `src/components/site/Nav.tsx`.
