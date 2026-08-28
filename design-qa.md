# Homepage hero photo QA

## Evidence

- Source visual truth: the five uploaded files in `upload/usagiDelice_*.jpg`.
- Implementation: Vercel branch preview for commit `527d469`.
- Browser viewport: 1363 × 936 CSS pixels at device pixel ratio 1.
- State: homepage, top of page, all five hero images loaded.
- Browser-rendered screenshot: inspected in the cloud browser but the runtime could not persist it to a workspace path.

## Checks

- Typography: unchanged from the approved homepage.
- Spacing and layout: five-photo desktop collage retains the approved 58/42 composition and has no horizontal overflow.
- Colors: uploaded image colors are preserved; only WebP compression and resizing were applied.
- Image quality: all five WebP assets load successfully and remain sharp at the desktop viewport.
- Copy: unchanged.
- Focused crop check: the cooking subject, plaque, Arc de Triomphe product, Eiffel Tower product and Noël La Villette stand remain identifiable in their respective frames.
- Console: no site-origin errors; one unrelated browser-extension metadata error was observed.

## Findings

- No P0, P1 or P2 issue was visible in the desktop hero.
- Mobile automated viewport capture remains unavailable in this cloud browser, so the single-image mobile crop needs user/device confirmation.

## Comparison history

- Initial capture briefly showed two lazy images before paint completed.
- After waiting for paint, all five frames appeared correctly; no code fix was required.

## Final result

final result: blocked

Blocker: the mobile viewport and a persistable combined comparison image are unavailable in the current browser environment.
