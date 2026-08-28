# Homepage design QA

## Source references

- Desktop sketch: `upload/01-b8d4b38e93056340933c128b675d05f8.png`
- Mobile sketch: `upload/02-ChatGPT-Image-2026-8-27-22_03_01.png`
- Requirements: `upload/03-Usagi_Delice_-_-_-_-.docx`

## Implemented structure

- Desktop: compact header, editorial photo collage, Osaka product introduction, cooking media, three upcoming dates, contact CTA, lightweight footer.
- Mobile: compact header with drawer, single hero image, vertical product story, compact dates, centered contact CTA and stacked footer.
- Content exclusions preserved: no hygiene rating, mayor photo, Game’in Reims, SIRET or operating address.

## Automated checks

- Astro check: passed with 0 errors, 0 warnings and 0 hints.
- Production build: passed; 11 static routes generated.
- Vercel deployment: ready and linked to commit `b805b83`.
- Desktop browser QA at 1363 × 936: passed for the hero collage, product section, cooking media, event cards, contact CTA, footer, image loading, video playback and horizontal overflow.
- Mobile browser emulation: blocked by the cloud browser URL/security policy. The mobile CSS and markup passed static/build validation, but an automated 375/390/430 visual screenshot could not be produced in this environment.

## Mobile handoff check

- Open the branch preview with browser responsive mode at 375 px, 390 px and 430 px.
- Confirm no horizontal overflow, the mobile drawer operation, image crops and the 105–125 px event card height.
