# Enchant pitch micro-sites (`/pitch/` on enchant.co)

This folder lives in `letsenchant/enchant-v8` (the repo serving enchant.co via GitHub Pages), at `enchant.co/pitch/`. Deliberately **no `index.html`** here: trimming a shared URL to `/pitch/` 404s instead of revealing the hub. All pages are `noindex` and `/pitch/` is disallowed in the root `robots.txt` — publicly reachable but uncrawled; links shared only by Paul + Brittany. When a landing direction wins, swap it into the repo-root `index.html`.

## What Enchant is

Enchant is Paul and Brittany Mederos's product studio for health, wellness, and healthcare companies. The public-facing frame is a two-principal product pod: Paul brings 0→1 product strategy, health founder/operator experience, AI-native building, and network/intros; Brittany brings principal-level product design, Gen AI product design leadership, research synthesis, and hands-on craft.

The working thesis: Enchant helps funded health companies find and ship their next product, AI-native system, or growth bet in weeks, not quarters. It should read as senior operators who can clarify the bet, design it, build it, and help validate it with real customers.

## The pages

| File | Audience | Notes |
|---|---|---|
| `growth-lab.html` | Series A–C founders/CPOs | Growth Lab flagship pitch; the candidate to swap into enchant.co's index when Paul + Brittany pick the winner |
| `ai-native.html` | CEOs/COOs with board-level AI pressure | The wedge SKU; easiest first yes |
| `portfolio.html` | VCs + platform/operating partners | Worked privately via DMs, never the homepage |
| `vision.html` | Brittany | The two-of-us deck: scenarios, promises, first 90 days. `noindex`, unlinked from client pages |
| `hub.html` | Paul (internal) | Navigator across all four + send-to guidance. `noindex`, linked from nowhere public |

Client decks deliberately do NOT cross-link to each other or to the hub — a recipient should never discover the pitch multiverse. Only `vision.html` and `hub.html` link onward.

## Design system (2026-06 rebuild)

- `shared.css` holds the whole system; each page adds only a small page-specific `<style>` block (e.g., `vision.html`'s golden-hour palette overrides).
- Type: **Fraunces** (display serif, weight ~430) + **Inter** (body/UI). Palette: bone `#FBF7F0`, ink `#241B15`, clay `#B44A1F`, peach `#F4C99B`, moss `#5E7259`, a whisper of violet `#8B6EE0` inside mesh gradients only (echoes the enchant.co orb logo).
- Light story: client pages read as **morning light** (peach/rose mesh); the vision deck reads as **golden hour** (amber/rose/violet overrides).
- Motion: animated mesh blobs (`drift` keyframes), staggered scroll reveals (`data-d="1..4"` delays), card lift + gradient-hairline micro-interactions, arrow nudges on CTAs. Everything respects `prefers-reduced-motion`.
- The flagship card uses `#flagship` (id selector) so no section-level rule can outrank its dark background — this fixed a real specificity bug where `section.tinted .card` beat `.card.flagship` and left cream text on a white card.

## Copy rules

- Numbers must survive diligence. Current canon: Territory **$1.5M → $15M+ ARR** (through the rebrand; marketplace relaunch grew sales 60% in six months), Fitt Insider **"Client → product lead"** (the unsourced ~200% MoM stat was retired 2026-06-11), Apothékary **"Studio client, 2019–21"**, Microsoft **100M+ users**. If Paul produces sources for stronger numbers, update all pages together.
- Brittany language: "a decade leading Gen AI design at Microsoft" — no departure language until her own public presence updates.
- Pricing is currently public ($36k / from $150k / $15–20k/mo). If strategy changes to pricing-on-request, strip from all pages together.
- Curly apostrophes only; scan for spaced em-dashes and unconscious "X, not Y" contrasts before committing (a few deliberate ones are kept: "Proof, not promises", "a draft of a life, not a contract").

## Privacy

- Assume anything here is publicly reachable once pushed. No private addresses, family details, raw exports, warm-target lists, or internal strategy notes.
- `vision.html` is written to be public-safe (no household burn figures; scenario revenue uses already-public SKU prices) but is `noindex` and unlinked. If Paul wants it fully private, move it to a folder with a `.private` file — it then loses its URL.
- Deeper strategy, target lists, research, and CSVs live in `paul-context/projects/enchant-consulting/`, never here.
