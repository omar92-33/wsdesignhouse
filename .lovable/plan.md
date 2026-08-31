# Laptop scale and density optimization

## Goal
Make the existing site feel properly proportioned on common laptop screens (roughly 1280–1536px wide and 700–900px tall), so key sections and photographs can be understood without excessive scrolling, while preserving the current luxury editorial identity.

## Changes
- Reduce the global desktop content width at laptop breakpoints while retaining the wider layout for large monitors.
- Make the homepage hero fit within one laptop viewport beneath the navigation, with a smaller headline, tighter spacing, and fully visible primary content.
- Constrain non-slideshow project photography to a more editorial width and reduce oversized gaps between project entries.
- Scale down laptop typography, section padding, card padding, and vertical gaps across homepage sections; keep mobile sizing readable and preserve generous spacing on large displays.
- Reduce the displayed size of the vertical studio film and balance it with its accompanying copy.
- Constrain concept slideshows and map/virtual-tour sections on laptops so they do not dominate the viewport.
- Apply the same laptop-scale rules to shared page headers and portfolio pages so the rest of the site remains visually consistent.

## Verification
- Check the homepage and representative inner pages at 1366×768 and 1440×900.
- Confirm images remain uncropped where their content must be read, headings fit cleanly, and no horizontal overflow is introduced.
- Recheck mobile to ensure laptop-specific changes do not regress the existing small-screen layout.
- Confirm the final build is error-free.

## Technical approach
Use responsive Tailwind breakpoints and shared component constraints rather than browser zoom or a global transform. Prefer laptop-specific `lg` sizing with larger `xl`/`2xl` values reserved for large desktop monitors.
