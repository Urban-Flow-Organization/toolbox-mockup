# Urban-Flow Toolbox Portal – interactive mockup

A clickable mockup of the future Urban-Flow Local Digital Twin Toolbox portal.

- **Sign-in (Keycloak, simulated):** pick one of the five user archetypes (Municipality, City Officer, Citizen, Stakeholder, Platform Operator). No credentials are requested. Each profile has different permissions, so some modules show a padlock and an "Access restricted" page.
- **Portal:** home dashboard, slide-in module menu grouped by architecture layer, one page per module with a workspace preview, description, technology, repositories and links to connected modules.
- **Marketplace:** the Analyse · Simulate · Forecast layer, where each domain lists the tools developed by the partners, with their GitHub repositories.
- **Valdarena – the story:** the same use case told as a comic for non-technical audiences (`#/comic`): characters and speech bubbles, highlighted words that light up the matching parts of a simplified "city platform" map, and a Play button that advances panel by panel.
- **Use case: Valdarena:** a carousel (`#/tour`) telling a fictional use case inspired by the Valencia, Florence and Tampere pilot sheets (GA §1.2.1.4), one slide per User Journey step: how data and actions flow, the five core tools (LDT, e-Participation, KPI Manager, Idra, Marketplace – max 2 Marketplace tools) and the components of every layer, external sources and data spaces included. Arrows, step buttons, ← → keys and Play.
- **Municipality user journey:** the User Journey of the Grant Agreement (preparation + UJ S1–S8) as a journey map: loop diagram, what the municipality does at each step, the tools involved (core tools highlighted), outputs, stakeholders, a confidence curve and a tool × step matrix.
- **Use cases:** a chapter-by-chapter story (Florence: parking in San Frediano) showing who does what and which tools come into play at each moment, with a data-flow chain, a mini architecture that lights up, and a journey map of all chapters.
- **Architecture:** the Urban-Flow reference architecture with every block clickable (summary, D3.1 reference, partner, GitHub links, "open module").

All figures, maps and tables are **sample data** for illustration.

## Run locally

Keep `index.html` and the `assets/` and `config/` folders together and open `index.html` in any modern browser (double-click). No build step or server needed.
The look & feel follows the Urban-Flow presentation template (palette, logo, aerial imagery, funding footer). Text uses Aptos when installed, otherwise Albert Sans from Google Fonts (online) or the system font (offline).

Deep links work through the URL hash, e.g. `index.html#/architecture` or `index.html#/module/ldt`.

## Editing the architecture cards (no coding needed)

Everything shown when a block of the architecture is clicked — block title, summary, tools, partners,
cities (flags), work packages and GitHub links — lives in **`config/architecture-tools.js`**.

1. Open `config/architecture-tools.js` with any text editor (VS Code, TextEdit in plain-text mode, …).
2. Change or add entries. The part after `window.UF_CONFIG =` is plain JSON (double quotes, no trailing commas).
   The header comment of the file explains every field.
3. Save and reload `index.html` in the browser (Cmd+Shift+R in Chrome, Cmd+Option+R in Safari).

- The **"i" button** next to each layer title opens an explanation of the layer. Its text is in the `"layers"` section of the same file.

Examples:
- **Add a tool to a block:** append an object to that block's `"tools"` list, e.g.
  `{ "name": "New tool", "partner": "ETRA", "reference": "D3.1 §4.3.10", "description": "…", "cities": ["Valencia"], "wp": "WP4", "tasks": "T4.3", "repositories": [{ "label": "GitHub", "url": "https://github.com/…" }] }`
- **Show all three flags:** `"cities": ["All"]`.
- **Add a new Marketplace block:** add an entry to `"newMarketplaceBlocks"` with a new `id` and an existing `domain`
  (see `"hia"`, Air Quality & Health Impact, as an example).

If something is wrong (unknown block id, JSON error, missing file) the Home and Architecture pages show a yellow
**Configuration issues** box explaining what to fix.

## Editing the use-case stories

The stories on the **Use cases** page (`index.html#/story/florence`) live in **`config/use-cases.js`** (plain JSON after `window.UF_STORIES =`).
Each chapter has a time, a stage, the characters, the narrative paragraphs, an optional quote and metrics, the `tools`
involved (`block` = architecture block id, `tool` = tool name as in `architecture-tools.js`, `does` = what it does in that moment)
and the `flow` (block ids in the order the action travels). Add a new object to `"stories"` to create another story
(e.g. Valencia or Tampere); it becomes available at `index.html#/story/<id>`. Unknown block ids are reported in a yellow box.

## Editing the user journey

The content of the journey page (`index.html#/journey`) lives in **`config/user-journey.js`** (plain JSON after `window.UF_JOURNEY =`): steps, actions, tools (`block` = architecture block id), outputs, stakeholders and the `coreTools` highlighted in lime. The Valdarena carousel reads the `tour` section of the same file (city, problem, goal, `marketplace` tools, KPIs and steps with `flow` and `components`).

## Editing the comic

The comic lives in **`config/comic.js`** (plain JSON after `window.UF_COMIC =`): cast, chapters and panels. In a panel's text write a platform component as `{{blockId:words shown}}` (e.g. `{{ldt:the 3D model}}`): the words are highlighted and that block lights up on the map. Only highlighted components light up.

## Publish on GitHub Pages

Push `index.html`, the `assets/` and `config/` folders and this README to a repository and enable *Settings → Pages → Deploy from branch*.

## Sources

- D3.1 Urban-Flow Platform Specifications – Version 1 (Chapter 4 and Figure 4)
- Grant Agreement 101239472
- [Urban-Flow tool catalogue](https://github.com/Urban-Flow-Organization/Catalogue)

## Videos

The "Watch video" button next to "Open module" (KPI Manager, e-Participation) plays the files in
`assets/videos/`. Add a `"video": { "src": "assets/videos/<file>.mp4", "title": "...", "label": "Watch video" }`
entry to any block in `config/architecture-tools.js` to show the button on that block.

## Online version

The site is fully static, so it can be published with GitHub Pages (Settings › Pages › Deploy from branch `main`, folder `/`).
The `.nojekyll` file makes GitHub serve the files as they are.
