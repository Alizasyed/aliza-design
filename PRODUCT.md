# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers and recruiters evaluating Aliza Habib for full-time UI/UX and product design roles. Current priority is landing UI/UX product design positions specifically (as opposed to comms/strategy roles), though the site also documents comms/engagement-strategy work (DAI/CFA) as secondary evidence of range. Secondary, lower-priority audience: potential freelance/consulting clients (e.g. Webflow builds like Impetus).

## Product Purpose

A personal portfolio site for Aliza Habib, a Senior Product Designer & Communications Strategist. It exists to demonstrate end-to-end product design craft through real case studies (research, UI/UX decisions, shipped outcomes) so a hiring manager can assess her for a full-time design role.

## Positioning

Design work for "the people existing systems tend to leave out" — low-literacy, low-numeracy, and low-digital-access users in fintech (MMBL), healthcare (HealthOps, maternal health research), and climate finance (CFA), where comprehension, trust, and access are treated as design constraints from day one rather than retrofitted. Range spans hands-on UI/UX craft and communications/engagement strategy across government, investor, and startup stakeholders.

## Operating Context

Case studies span multiple employers/engagements: Ideate Innovation (MMBL, HealthOps, Maternal Health Research, Max), DAI Pakistan (Climate Finance Accelerator, under NDA for the strategic plan, public campaign materials shown), NYU ITP (What She Carried, VR/photogrammetry thesis as a Fulbright Scholar), Precision Medicine Lab (Biofutures), and freelance/agency web builds (Impetus, Flyve, Jack Morton). Some case studies are confidentiality-gated (`locked`/`nda`/`confidentialityNote` fields in the data model) and must not expose NDA'd material.

## Capabilities and Constraints

- Content model: all case study, client, and profile content lives in `src/lib/data.ts` as a single typed source of truth (`CaseStudy` type) — no CMS.
- Case studies render via a shared template (`src/app/work/[slug]/page.tsx` + `CaseStudyDetails.tsx`) with optional per-section layouts (timeline, findings, tags, comparison, swatches, personas, side-by-side, contain, grid2x2) chosen per case study rather than applied globally, so visual variety doesn't require one-off page code.
- Case study covers use a static image, a Lottie JSON animation, or a muted looping video, in that fallback order, each lazy-loaded/paused-when-offscreen for performance.
- Real assets only: screenshots and device mockups are either the actual shipped/live product, or genuine source files the user supplies. Stock/third-party footage scraped from a client's own marketing site (e.g. raw b-roll) is not to be reused as "cover" material without the user's explicit, real asset in hand.
- No fabricated testimonials, metrics, or client quotes; all pull quotes and metrics in case studies are real and attributed.

## Brand Commitments

- Name/voice: Aliza Habib, first person, direct and specific (no marketing-speak); case-study copy avoids the "brief asked for X, the real job was Y" reframe pattern repeated across multiple projects.
- Visual identity: Hero palette is deep green (`#004437`) + beige (`#d5b38e`), chosen after mockup comparison against alternatives. Aujournuit is the evaluated/selected display font pairing.
- Design tokens: `--color-ink`, `--color-paper`, `--color-panel`, `--color-line`, `--color-accent` (see `src/app/globals.css`); each case study also carries its own `accent` color used for hover/active states on that project's pages.

## Evidence on Hand

Real, verifiable case studies with shipped outcomes and metrics: MMBL Dost App Redesign (fintech, bank-provided screens + real research), HealthOps Reporting Dashboard, Climate Finance Accelerator Launch (DAI/PwC/UK Government FCDO, ~55 applications → 11-business cohort), What She Carried (NYU ITP Fulbright thesis), Biofutures (Precision Medicine Lab workshop), Maternal Health Research, Impetus Advisory Group website (Webflow, UI-only framing, real screenshots of the live site), Flyve, Max, Jack Morton. A LinkedIn recommendation from a former manager (Lara Saab, Datadog) exists as unused evidence — not yet placed on the site.

## Product Principles

1. Every claim of craft must be backed by a real, inspectable artifact (screenshot, shipped metric, real quote) — never an invented one.
2. Visual variety in how a case study presents data (timeline vs. cards vs. swatches vs. comparison) is chosen per project's actual content, not applied as a uniform template.
3. Accessibility and comprehension for the end users Aliza designs *for* (low-literacy, low-vision, low-numeracy) is itself a recurring craft story the site should keep surfacing, not just a claim made once.
4. Performance matters as a portfolio signal itself: covers are lazy-loaded and compressed (video preferred over GIF) so the site's own execution reflects the craft being claimed.
5. Real people's faces are not to be featured in case-study visuals unless the user explicitly approves it case-by-case; default to UI/product screenshots over personal photography.

## Accessibility & Inclusion

No site-specific accessibility standard has been formally established for aliza.design itself, but several case studies (MMBL) document real WCAG contrast/accessibility work as design deliverables — that documentation should remain accurate to what was actually tested.
