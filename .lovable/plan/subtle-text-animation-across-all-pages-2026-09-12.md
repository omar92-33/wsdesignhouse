# Subtle Text Animation Across All Pages

## Changes

1. **Add a restrained text entrance effect**
   - Animate headings, labels, paragraphs, lists, and text links with a short fade and very small upward movement as they enter the screen.
   - Keep the effect subtle, fast, and consistent on both mobile and laptop screens.
   - Trigger each text group once so scrolling remains natural and never feels repetitive.

2. **Keep media and layout completely still**
   - Remove reveal movement from photos, videos, slideshows, maps, forms, and other non-text content.
   - Do not change page structure, spacing, typography, colors, content, or functionality.
   - Preserve the recently corrected Process scrolling behavior with no sticky or split movement.

3. **Apply the treatment everywhere**
   - Cover the homepage, About WS, Services, Portfolio, Process, Contact, project details, service details, shared calls to action, navigation, and footer text.
   - Use the existing shared reveal system so timing and easing stay uniform across the site.

4. **Accessibility and verification**
   - Continue honoring reduced-motion settings by showing text immediately without animation.
   - Check mobile and laptop pages for smooth scrolling, readable text, no hidden content, no layout shifts, and no horizontal overflow.

## Technical details

- Refine `Reveal` to support text-only motion while leaving containing media and structural elements static.
- Add a shared text animation utility with a low travel distance, no heavy blur, and a short premium easing curve.
- Update shared page headers and any unanimated route text so every content page receives the same treatment.
- Verify representative pages at mobile, 1366×768, 1440×900, and 1920×1080.
