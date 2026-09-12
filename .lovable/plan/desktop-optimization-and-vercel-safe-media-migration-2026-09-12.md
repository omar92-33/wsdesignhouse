# Desktop optimization and Vercel-safe media migration

## Goal
Make the site at 100% browser zoom feel as balanced and compact as its current 80% zoom appearance on 1366×768, 1440×900, and especially 1920×1080, without changing any phone or tablet presentation. Move every project image and video from Lovable-hosted asset pointers into the GitHub repository so Vercel serves the same media reliably.

## Desktop-only layout changes
- Apply new sizing rules only from `1280px` upward. Keep every style below 1280px untouched, including mobile and tablet navigation, spacing, type, images, and components.
- Stop the current large-screen re-expansion at 1536px by replacing oversized `2xl` values with restrained desktop values.
- Use a consistent desktop content system: balanced centered containers, narrower reading widths, reduced section padding and gaps, and compact page headers.
- Fit the homepage navigation and hero comfortably within a 1080px-tall viewport while preserving the full-bleed image treatment and existing brand styling.
- Audit and compact all content routes: Home, About WS, Services, service details, Portfolio, project details, Process, and Contact.
- Tighten desktop headings, paragraphs, labels, navigation, footer copy, forms, service blocks, credentials, reviews, maps, tour section, calls to action, and other repeated content without changing any text or hierarchy.
- Standardize desktop buttons with smaller padding and consistent alignment while preserving their current actions and visual style.

## Desktop image system
- Add a shared desktop project-photo ratio of `780:498` with `width: 100%`, a maximum rendered width near 780px, stable containers, `object-fit: cover`, and intentional object positioning.
- Apply it to relevant project photography on listings, project pages, and editorial project sections.
- Keep necessary format exceptions unchanged in purpose: the full-bleed homepage/project cover images, founder portrait, certificate documents, logos, vertical studio film, maps, and virtual-tour content. These require their native presentation to avoid destructive cropping.
- Constrain concept slideshows to the same approximate desktop footprint where practical, while protecting text-bearing competition boards from cropping.

## Local media migration
- Download all 26 current image/video assets, approximately 11.1 MB total, from their existing asset URLs into a normal repository-owned static media directory.
- Preserve the actual media format and use clear local filenames, correcting extension/content-type mismatches where needed.
- Replace every `.asset.json` import and `.url` usage in site data, navigation, footer, certificates, slideshows, homepage imagery, founder portrait, and studio film with local static paths.
- Remove the obsolete asset-pointer files only after every reference has been replaced; keep the existing local favicon unchanged.
- Confirm no `/__l5e/assets-v1/` URL or `.asset.json` media import remains anywhere in the application.

## Verification
- Check every content page at 1920×1080, 1440×900, and 1366×768 at 100% zoom.
- Recheck representative tablet and mobile widths to confirm they are visually unchanged.
- Verify no horizontal overflow, oversized sections, awkward wrapping, excessive button height, or accidental image distortion/cropping.
- Confirm project-photo containers use the intended 780:498 desktop proportion and all images, certificates, logos, and the studio video load from repository-local URLs.
- Run the production build and inspect the latest build/runtime signals before completion.

## Technical approach
Use additive `xl:`/desktop media-query overrides and shared desktop utility classes rather than browser zoom, transforms, or changes to base/mobile styles. Store binary media under `public/media` so GitHub and Vercel publish it directly with stable root-relative URLs.
