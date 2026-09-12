# Larger desktop text and studio video

## Goal
Increase text readability across laptop and desktop screens while preserving the current compact layout, all mobile and tablet styling, and the entire About WS page exactly as it is.

## Changes
- Apply the typography increase only from the existing desktop breakpoint of 1280px and above.
- Increase desktop headings, paragraphs, navigation text, labels, buttons, service copy, project copy, form text, and footer text by a restrained step so the site remains balanced and avoids awkward wrapping.
- Scope the increases to every content page except `/about`; the About WS page, including its shared header, footer, calls to action, certificates, and all other content, will retain its current sizing.
- Make the homepage Studio Film video slightly wider on desktop while preserving its vertical 9:16 shape and current behavior.
- Keep all colors, wording, spacing, imagery, functionality, and animation behavior unchanged.

## Verification
- Check `/`, portfolio, project detail, services, service detail, process, and contact at 1920×1080, 1440×900, and 1366×768.
- Confirm `/about` is visually unchanged at desktop sizes.
- Recheck representative widths below 1280px to confirm mobile and tablet are unchanged.
- Confirm no horizontal overflow, clipped text, awkward button wrapping, or build errors.

## Technical approach
Use route-scoped desktop classes rather than changing the root font size globally. Add a dedicated desktop video size override and ensure shared navigation/footer typography can retain the old scale specifically on the About WS route.
