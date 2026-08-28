# Bigger body copy, smaller labels again

The last change enlarged the small uppercase labels (nav, eyebrows, captions, counters). That wasn't the ask. Revert those and instead enlarge the actual reading text — founder bio, project descriptions, service copy, section intros, form and footer text.

## Revert

- Root scale back to 112.5% (from 118.75%).
- Uppercase label size back to a compact 0.75rem editorial label with normal-ish weight.
- Remove the per-component `text-[0.95rem]` label bumps in Nav, Slideshow counter, FinalCta and Footer bottom bar.

## Enlarge (the reading text)

Move paragraph copy up one to two steps, roughly `text-sm` → `text-base`, and `sm:text-base` → `sm:text-lg`, with comfortable line-height:

- About page founder bio and the "interior architecture, not decoration" columns
- Page intros (`PageHeader`), homepage vision/portfolio/service descriptions
- Project detail copy: description, concept, details, space, craft
- Services list and service detail body paragraphs
- Recognition (Milan) and Living Oasis narrative text
- Studio Film, Virtual Tour, Social, Final CTA, Certificates issuer lines
- Consultation form field text, helper text and footer link lists

Headlines stay as they are; only body copy grows.

## Technical notes

Files touched: `src/styles.css`, `src/components/site/*` (Section, Nav, Footer, FinalCta, Slideshow, Recognition, LivingOasis, StudioFilm, VirtualTour, Social, Certificates, ConsultationForm), and routes `index.tsx`, `about.tsx`, `process.tsx`, `contact.tsx`, `services.*`, `portfolio.*`. Presentation-only class changes; no content or logic edits.
