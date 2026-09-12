# Fix Process Section Scroll Behavior

## Goal
Keep the Process heading, introduction, and four steps moving naturally together with the page while preserving the current appearance and mobile layout.

## Changes
- Remove the desktop sticky positioning from the Process introduction column, which currently keeps the left text stationary while the steps continue scrolling.
- Keep the existing two-column desktop composition, typography, spacing, colors, and single-column mobile layout unchanged.
- Ensure the Process reveal wrapper does not create a transformed containing block after its entrance animation, preventing scroll-positioning artifacts.

## Verification
- Test the Process section while scrolling at laptop and desktop sizes and confirm both columns move with the document.
- Check mobile to confirm its order and layout are unchanged.
- Confirm there is no horizontal overflow and the page remains error-free.
