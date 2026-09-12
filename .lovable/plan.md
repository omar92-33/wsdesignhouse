# Hero emphasis, smaller film, larger buttons on laptop/desktop

## Goal
On laptop/desktop only (1280px and above), make the homepage hero text more prominent, slightly reduce the studio film size, and enlarge the hero CTA buttons. Leave mobile, tablet, and the About WS page completely unchanged.

## Changes

### 1. Hero text enlargement (homepage only)
In `src/routes/index.tsx` Hero:
- Increase the positioning label (`site.positioning` / "Interior Architecture Specialists").
- Increase the H1 "Interiors Designed for the Way You Live.".
- Increase the supporting paragraph "Luxury interior architecture and bespoke design...".
- Scope the increases to desktop only via the existing `desktop-hero-heading` / new dedicated classes, without affecting mobile/tablet.

### 2. Studio film slightly smaller
In `src/components/site/StudioFilm.tsx`:
- Reduce the desktop max-width of the 9:16 video wrapper from the current `340px` down to roughly `280px` at 1280px+, keeping the `2xl` value proportionally smaller.
- Leave the mobile/tablet sizing unchanged.

### 3. Hero buttons bigger
In `src/routes/index.tsx` Hero CTA links:
- Add a dedicated `desktop-hero-button` class.
- Increase padding and/or font-size on laptop/desktop only so the primary and secondary buttons feel more substantial.
- Keep mobile/tablet button sizing unchanged.

## Technical approach
- Add/update selectors inside the existing `@media (min-width: 1280px)` desktop layer in `src/styles.css`.
- Use homepage-specific classes (`desktop-hero-heading`, `desktop-hero-button`, `desktop-hero-lead`, `desktop-hero-label`) so the changes do not leak onto the About WS page or other routes.
- Do not touch `src/routes/about.tsx` or any mobile/tablet breakpoints.

## Verification
- Check the homepage at 1920×1080, 1440×900, and 1366×768: hero headline, label, paragraph, and buttons are visibly larger; studio film is slightly smaller but still balanced.
- Confirm mobile/tablet layouts and the About WS page are unchanged.
- Confirm no horizontal overflow and the build is error-free.
