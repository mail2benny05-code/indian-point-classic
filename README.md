# Indian Point Classic — Tournament Software Evaluation

A static, client-side decision tool for the independent volunteer committee organizing a four-day outdoor pickleball tournament in Nova Scotia. Vendor descriptions, prices and editorial fit scores are preliminary research leads, not independently verified facts.

## Local development

Requires Node.js 20.19+ or 22+. From the repository root:

```sh
npm install
npm run dev
npm run build
```

The production files are written to `dist/`. Preview them with `npm run preview`. After the initial load, interactions use bundled JavaScript and browser storage; this project does not include a service worker, so reloading without internet is not guaranteed.

## Running this branch

Run `npm install` once, then `npm run dev` and open the local URL printed by Vite. For a production check, run `npm run build` followed by `npm run preview`. No GitHub Actions workflow is needed for either command.

The Vite base path remains configurable if GitHub Pages deployment is added later: `VITE_BASE_PATH=/your-repository-name/ npm run build`.

## Meeting presentation

The three vendor briefing cards are designed for projector use. Each card keeps preliminary strengths, demo questions, pricing leads, and official links visible; expand the feature-status panel for detailed discussion. The **Present** control increases briefing readability, and the browser Print command produces a concise paper view. Vendor notes entered on a card also appear in the decision matrix and printed summary.

## Committee data

Ratings, weights, notes and demo checkboxes are saved in this browser's `localStorage`. Use **Export JSON** to move the evaluation to another device, and **Import JSON** to restore it. **Reset** clears committee entries after confirmation. The JSON does not include vendor data or calculator inputs. Use the browser's Print command for a meeting summary; print styling removes controls and emphasizes results.

## Calculation notes

A six-team full round robin has 15 pool matches. Two semifinals, bronze and final bring it to 19 matches per division. At 30 divisions this is 570 matches; at 33 it is 627. Five courts × four days × eight scheduled hours × four 15-minute slots per hour yields 640 theoretical slots. These exclude player overlaps, court turnover beyond the selected slot, weather and actual delays. Two pools of three give each team two guaranteed pool matches. The cost calculator models one registration fee per unique player plus a bracket fee per player entry or per team entry. Its vendor platform fees and processing/tax inputs are editable scenario estimates, not vendor quotes or tax advice.

## Sources and verification

The evaluation is limited to Pickleball Tournaments, FluidPB and DinkTourney. The supplied preliminary vendor dataset is in `src/data/vendors.ts`; official vendor home/product pages are linked there and in the site. This build did not independently verify product documentation, feature support, prices, Canadian payment terms or current availability. All features default to **Needs verification** unless a supplied vendor description specifically claims them, in which case they are labeled **Vendor claim not independently tested**. No unsupported or confirmed status is inferred from silence.

## CAD conversion and images

All displayed costs are in CAD. Preliminary foreign-currency pricing leads were converted using the Bank of Canada daily average of 1.4181 published November 10, 2026, the latest official daily rate available when checked November 11, 2026: https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/. This is an indicative snapshot, not a live rate or a Canadian vendor quote. Refresh the rate and obtain written CAD pricing before the committee selects a platform. FluidPB tournament pricing remains quote required; its converted club-plan reference is not assumed to apply.

The two bundled pickleball images in `public/images/` were generated for this site. They illustrate the sport and do not depict the event venue or participants.
