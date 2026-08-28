# Certificates After the Founder Section

## What to change

On the About page, move the full Certificates & Recognition grid (all 8 certificates) so it appears **directly after the "The Founder" section** (the about-me section), instead of its current position after "Interior architecture, not decoration".

## New About page order

```text
Page Header — "A Studio Built on Experience"
The Founder — Dr. Wessam Abdellatif bio
Certificates & Recognition — all 8 certificates   ← moved here
The Difference — Designed With Intention (dark pillars section)
Interior architecture, not decoration
Final CTA
```

## Technical details

- Edit `src/routes/about.tsx` only: cut the `<Certificates />` usage from before `<FinalCta />` and place it immediately after the founder `<section>`.
- The `Certificates` component already renders all 8 certificates with its own border-top separation, so no styling changes are needed — the border will sit cleanly between the founder section and the dark "Designed With Intention" section that follows.
- No content, image, or layout changes to the certificates themselves.
