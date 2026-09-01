# EmberForge Website Update — September 1, 2026

This package updates the public EmberForge site around the current project state.

## Files

- `index.html` — updated EmberForge homepage
- `ember-vault.html` — current Ember Vault product page
- `ember-nexus.html` — Ember Nexus concept / roadmap page
- `creator.html` — updated creator story covering Vault + Nexus
- `support.html` — Discord-first support + static report builder
- `security.html` — refreshed responsible disclosure page
- `styles.css` — shared site styling
- `site.js` — footer year + support report builder

## Keep your existing asset

The pages reference:

`/emberforge-mark.png`

Keep the existing EmberForge moon / forge mark in the repository. It is not included in this package because the file available in this session was the Ember Vault product logo, not the EmberForge website mark.

## Current public positioning reflected here

- EmberForge = parent workshop brand
- Ember Vault = active development, independent runtime, public-beta preparation
- Ember Nexus = concept / pre-development only
- EmberForge HQ Discord = public community/support/beta home
- Phoenix Clan Rising = origin / proving ground, not a dependency or customer-facing product assumption

## Deployment

Use the existing safe workflow:

1. Put these files on the `preview` branch.
2. Keep the existing `emberforge-mark.png` asset.
3. Let Cloudflare Pages build the preview.
4. Test desktop + mobile navigation, support form buttons, Discord links, and all internal links.
5. Merge `preview` into `main` only after the preview looks right.

## Discord

Current public invite used in these files:

`https://discord.gg/WRv4fGv2PG`

## Note on Ember Vault pricing

Spark / Inferno language is intentionally presented as product direction rather than a launch guarantee because Ember Vault is still pre-beta.
