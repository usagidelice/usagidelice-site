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
- Local browser comparison: blocked by the cloud preview transport after the preview service reported healthy. This is an environment limitation rather than a rendered application error.

## Remaining visual gate

- Compare the deployed branch preview at desktop width and at 375 px, 390 px and 430 px.
- Confirm no horizontal overflow, mobile drawer operation, video fallback/poster, image crops and event card height.
