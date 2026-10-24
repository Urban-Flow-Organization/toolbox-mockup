# Urban-Flow Toolbox Portal – interactive mockup

A clickable mockup of the future Urban-Flow Local Digital Twin Toolbox portal.

- **Sign-in (Keycloak, simulated):** pick one of the five user archetypes (Municipality, City Officer, Citizen, Stakeholder, Platform Operator). No credentials are requested. Each profile has different permissions, so some modules show a padlock and an "Access restricted" page.
- **Portal:** home dashboard, left sidebar menu grouped by architecture layer (collapsible), one page per module with a workspace preview, description, technology, repositories and links to connected modules.
- **Marketplace:** the Analyse · Simulate · Forecast layer, shown as one row per domain (Climate resilience, Energy, Space & infrastructures, EV charging infra, CCAV fleet, with the colours of the WP6 slide) with the 17 pilot tools directly under their domain. Click a tool for partner, cities, WP/task, GitHub links and, where available, its demo video.
- **Tools & partners:** the list of all tools with the partner that develops them and a domain tag. The 17 Marketplace tools come first, then the other tools; tools not developed by a project partner carry an "External tool" label. Filters by Tool, Partner and Domain (with a Marketplace option), plus free-text search. Click a tool for its details and demo video.
- **Valdarena – the story:** the same use case told as a comic for non-technical audiences (`#/comic`): characters and speech bubbles, highlighted words that light up the matching parts of a simplified "city platform" map, and a Play button that advances panel by panel.
- **Use case: Valdarena:** a carousel (`#/tour`) telling a fictional use case inspired by the Valencia, Florence and Tampere pilot sheets (GA §1.2.1.4), one slide per User Journey step: how data and actions flow, the five core tools (LDT, e-Participation, KPI Manager, Idra, Marketplace – max 2 Marketplace tools) and the components of every layer, external sources and data spaces included. Arrows, step buttons, ← → keys and Play.
- **Municipality user journey:** the User Journey of the Grant Agreement (preparation + UJ S1–S8) as a journey map: loop diagram, what the municipality does at each step, the tools involved (core tools highlighted), outputs, stakeholders, a confidence curve and a tool × step matrix.
- **Use cases:** a chapter-by-chapter story (Florence: parking in San Frediano) showing who does what and which tools come into play at each moment, with a data-flow chain, a mini architecture that lights up, and a journey map of all chapters.
- **Architecture:** the Urban-Flow reference architecture with every block clickable (summary, D3.1 reference, partner, GitHub links, "open module"). Tool cards show a "Watch video" button for the tools with a demo (Decidim, KPI Manager, Idra, GeoCacher).

All figures, maps and tables are sample data for illustration.

## Editing the tools and the architecture cards (no coding needed)

Almost everything you see in the mockup about tools lives in one file: **`config/architecture-tools.js`**.
It feeds the architecture cards (click a block), the Marketplace layer, the **Tools & partners** list and the tool detail windows:
block titles, summaries, tools, partners, cities (flags), work packages, GitHub links and demo videos.

**How to change it**

1. Open `config/architecture-tools.js` with any text editor (VS Code, or TextEdit in plain-text mode).
2. Change or add entries. The part after `window.UF_CONFIG =` is plain JSON: use double quotes `"`, and no comma after the last item of a list. The comment at the top of the file explains every field.
3. Save and reload `index.html` in the browser (Cmd+Shift+R in Chrome, Cmd+Option+R in Safari).

The **"i" button** next to each layer title opens an explanation of the layer. Its text is in the `"layers"` section of the same file.

**Common changes**

| I want to… | What to do |
| --- | --- |
| Add a tool to a block | In `"blocks"`, find the block and add an object to its `"tools"` list (example below). The tool also appears in **Tools & partners**. |
| Show the three city flags | `"cities": ["All"]` (or a list such as `["Valencia", "Florence"]`). |
| Add a demo video to a tool | Put the file in `assets/videos/`, then add `"video": { "src": "assets/videos/MyTool.mp4", "title": "My tool – demo video", "label": "Watch video" }` to the tool. A "Watch video" button appears on its card and in its detail window. |
| Mark a tool as external (not developed by a project partner) | Add `"openSource": true` to the tool. It gets the "External tool" label. |
| Change the name shown on a Marketplace button | Set `"shortName"` on the tool. Use `"order"` (1, 2, 3…) to decide its position inside its domain. |
| Add a new Marketplace block | Add an entry to `"newMarketplaceBlocks"` with a new `"id"` and one of the existing domains (example below). Its tools appear under that domain. |

**Example – a new tool**

```json
{
  "name": "New tool",
  "partner": "ETRA",
  "reference": "D3.1 §4.3.10",
  "description": "One or two sentences about the tool.",
  "cities": ["Valencia"],
  "wp": "WP4",
  "tasks": "T4.3",
  "repositories": [{ "label": "GitHub", "url": "https://github.com/…" }]
}
```

Only `"name"` is required; leave out the fields you do not need.

**Example – a new Marketplace block**

```json
{
  "id": "my_block",
  "domain": "Energy Communities",
  "title": "My new block",
  "summary": "What this block does.",
  "tools": [ { "name": "My new tool", "shortName": "NEW TOOL", "partner": "ETRA" } ]
}
```

The `"id"` must be new (lowercase, no spaces). The `"domain"` must be one of: Climate Resilience / Adaptation, Energy Communities, Space & Infrastructures, EV Charging Infrastructure, CCAV Fleet.

**If something is wrong** (unknown block id, JSON error, missing file), the Home and Architecture pages show a yellow **Configuration issues** box that says what to fix.
