# Enchant vision micro-sites (`/vision/` on enchant.co)

This folder lives in `letsenchant/enchant-v8` (the repo serving enchant.co via GitHub Pages), at `enchant.co/vision/`. The hub IS the index (Paul's call, 2026-06-11 PM): `enchant.co/vision/` routes by audience — `/vision/partnership` (Paul + Brittany), `/vision/clients` (CEOs, the merged flagship), `/vision/boards` (investors), `/vision/evidence` (receipts). GitHub Pages serves the extensionless URLs. All pages are `noindex` and `/vision/` is disallowed in root `robots.txt`. NOTE the accepted trade: anyone holding a client link can trim the URL to `/vision/` and see the full deck index, including the partnership deck — Paul chose the clean-URL hub over the 404 guard. When a landing direction wins, swap it into the repo-root `index.html`.

## What Enchant is

Enchant is Paul and Brittany Mederos's product studio for health, wellness, and healthcare companies. The public-facing frame is a two-principal product pod: Paul brings 0→1 product strategy, health founder/operator experience, AI-native building, and network/intros; Brittany brings principal-level product design, Gen AI product design leadership, research synthesis, and hands-on craft.

The working thesis: Enchant helps funded health companies find and ship their next product, AI-native system, or growth bet in weeks, not quarters. It should read as senior operators who can clarify the bet, design it, build it, and help validate it with real customers.

## The pages

| File | Audience | Notes |
|---|---|---|
| `clients.html` | Series A–C founders/CPOs/CEOs | The merged flagship (2026-06-11 PM: absorbed the separate ai-native wedge deck — same buyer, one offer ladder; §04 carries the two-surface AI story + principles + greenhouse art). The candidate to swap into enchant.co's index |
| `boards.html` | VCs + platform/operating partners | Worked privately via DMs, never the homepage |
| `partnership.html` | Paul + Brittany (joint) | Our-vision-together deck: after-tax scenarios with breakeven tick, promises, first 90 days, NBP painterly art (`img/`). Reframed 2026-06-11 from “Paul pitching Brittany” to shared we-voice. `noindex`, unlinked from client pages |
| `evidence.html` | Anyone (audience-neutral) | The public receipts page: demand stats, execution-gap stats, jobs.fitt.co census, quotes, honest counters. Linked from partnership's receipts fold; safe to link from client pages later. `noindex` |
| `index.html` | Paul + Brittany (the router) | Navigator across all four + send-to guidance. `noindex`, linked from nowhere public |

Client decks still do not cross-link to each other (a recipient lands on their deck, not the multiverse) — but the `/vision/` index now exists at the clean URL by Paul's choice, so discovery via URL-trim is accepted. Only `partnership.html` and `index.html` link onward.

## Design system (2026-06 rebuild)

- `shared.css` holds the whole system; each page adds only a small page-specific `<style>` block (e.g., `partnership.html`'s golden-hour palette overrides).
- Type: **Fraunces** (display serif; hero h1 weight 390 at clamp→5.8rem, -0.025em tracking; section h2 weight 400, larger — bold-elegant-minimal pass 2026-06-11 PM) + **Inter** (body/UI). Palette: bone `#FBF7F0`, ink `#241B15`, clay `#B44A1F`, peach `#F4C99B`, moss `#5E7259`, a whisper of violet `#8B6EE0` inside mesh gradients only (echoes the enchant.co orb logo).
- Light story (2026-06-11 PM rev): **structure is stark ink/black** (CTAs, numerals, hairlines — mirrors enchant.co's black-CTA register); **warmth comes from rainbow meshes** sampled from Paul's mesh-gradient pack (`~/Downloads/Mesh Gradients/JPG`): client pages = “Egg Sour” palette (violet `#6048DE`, magenta `#AF6090`, butter `#FCF2B6`, rose `#E5A29F`, lavender `#A78ADC`), partnership deck = “Royal Heath” + amber (periwinkle `#9FA1F6`, berry `#B95C8D`, amber `#EAAF6E`, orchid `#D49EE0`). Clay survives only in the logo orb + art. Hero/closing `em` = rainbow gradient text.
- All decks carry NBP art in **Shinkai-style anime key visual** form (Paul's direction 2026-06-11 PM, two style iterations: painterly → plain anime → key-visual recipe). Partnership: `garden-couple` / `studio` / `garden-dusk` (golden hour + dusk). Heroes: clients = `clients-hero` (stairway ascent above clouds) + `systems.jpg` (luminous greenhouse, §04), boards = `boards-hero` (aerial plots, one glowing). The working prompt recipe: 'Anime key visual, cinematic anime film screencap in the style of Makoto Shinkai' + lighting block (color temp, god rays, bloom, floating motes, layered depth haze) + sculpted-cumulus sky + camera block (20mm, angle, diagonal flow) + CRITICAL no-text clause (NBP fabricates titles otherwise — it titled one 'TWILIGHT HARVEST'). `.vision-art` figure component lives in shared.css.
- Motion: animated mesh blobs (`drift` keyframes), staggered scroll reveals (`data-d="1..4"` delays), card lift + gradient-hairline micro-interactions, arrow nudges on CTAs. Everything respects `prefers-reduced-motion`.
- The flagship card uses `#flagship` (id selector) so no section-level rule can outrank its dark background — this fixed a real specificity bug where `section.tinted .card` beat `.card.flagship` and left cream text on a white card.

## Copy rules

- Numbers must survive diligence. Current canon: Territory **$1.5M → $15M+ ARR** (through the rebrand; marketplace relaunch grew sales 60% in six months), Fitt Insider **"Client → product lead"** (the unsourced ~200% MoM stat was retired 2026-06-11), Apothékary **"Studio client, 2019–21"**, Microsoft **100M+ users**. If Paul produces sources for stronger numbers, update all pages together. Market receipts on pages (all primary-sourced in `paul-context/projects/enchant-consulting/research/2026-06-11_ai-demand-evidence.md`): 54% of 2025 US digital-health funding to AI (Rock Health), ~30% of gen-AI pilots reach production + ~half cite missing in-house expertise (Bessemer × AWS × Bain), 2× external-vs-internal success (MIT NANDA), 48 AI-titled roles across 23 funded health cos (jobs.fitt.co census, 2026-06-11 — refresh before reuse; it dates).
- Brittany language: "a decade leading Gen AI design at Microsoft" — no departure language until her own public presence updates.
- Pricing is currently public ($36k / from $150k / $15–20k/mo). If strategy changes to pricing-on-request, strip from all pages together.
- Curly apostrophes only; scan for spaced em-dashes and unconscious "X, not Y" contrasts before committing (a few deliberate ones are kept: "Proof, not promises", "a draft of a life, not a contract").

## Privacy

- Assume anything here is publicly reachable once pushed. No private addresses, family details, raw exports, warm-target lists, or internal strategy notes.
- `partnership.html` scenario math is after-tax (blended ~34% effective; derivation in `paul-context/projects/enchant-consulting/business-plan.md` §6) and the breakeven tick makes a monthly family number inferable — Paul approved this trade 2026-06-11. Stays `noindex` and unlinked. If Paul wants it fully private, move it to a folder with a `.private` file — it then loses its URL.
- Deeper strategy, target lists, research, and CSVs live in `paul-context/projects/enchant-consulting/`, never here.
