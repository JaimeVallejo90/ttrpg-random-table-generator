# Random Table Builder

Interactive, client-side tool for building TTRPG/DnD random tables with exact odds. Add dice, apply keep/drop rules, define outcome ranges, and see probabilities instantly.

## Live demo
- https://jaimevallejo90.github.io/ttrp-random-tables-builder/

## Highlights
- Exact distribution: live chart, per-total table, expected value, and range.
- Outcome ranges: lock/unlock ranges, auto-spread to fill gaps, overlap warnings.
- Keep/drop rules: drop/keep highest or lowest with adjustable count.
- Shareable configs: “Share link” copies a permalink with your current setup.
- Persistence: state and theme are saved locally; works offline after first load.
- Copy-friendly: one-click copy of the outcome table with probabilities.
- Theming: light/dark toggle.

## Quick start
1) Add dice (tap a die button; tap a pill in the pool to remove).  
2) Pick a keep/drop rule and count (or “No rule”).  
3) Set outcome ranges manually or hit “Auto spread”; lock any you don’t want moved.  
4) Copy outcomes or use “Share link” to send a permalink to friends.

## Tips
- Tab between outcome name fields; overlap and uncovered totals are flagged below the list.
- Keep/drop rules are capped to keep calculations fast; reduce dice/sides if you hit the limit.
- You can paste the copied outcomes into your prep notes or VTT handouts.

## Tech
- Vanilla HTML/CSS/JS; all computation happens in the browser, no backend or dependencies.
- Hosted on GitHub Pages; should work offline once cached.

## Contributing
Ideas, issues, and PRs are welcome (UX tweaks, presets, or new features).***
