# 🔥 EmberForgeHQ Website

Official website and product pages for **EmberForgeHQ**.

EmberForge builds practical community tools shaped by the problems we’ve actually had to solve ourselves.

> **Professional enough to trust. Personal enough to recognize. Weird enough to remember.**

## What lives here

This repository contains the public EmberForgeHQ website, including:

- EmberForge homepage
- Ember Vault product page
- Ember Nexus product page
- Creator page
- Support page
- Security / responsible disclosure page
- `/.well-known/security.txt`

## Current pages

```text
/
├── index.html
├── ember-vault.html
├── ember-nexus.html
├── creator.html
├── support.html
├── security.html
└── .well-known/
    └── security.txt
````

## Deployment

This site is deployed through **Cloudflare Pages**.

* Production branch: `main`
* Preview branch: `preview`
* Automatic deployments: enabled
* No build step is currently required
* The site is served directly from the repository root

Changes committed to `preview` are used for testing before production.

Changes merged into `main` are automatically deployed to the live site.

## Ember Vault

**Ember Vault** is the first public product built in EmberForge.

It is a configurable Discord economy platform with features including:

* guild-isolated wallets and balances
* transactions
* shops and marketplaces
* rewards
* vouchers
* inventories and redemptions
* role income
* guild-specific settings
* delegated manager permissions
* configurable currencies and starting balances
* transaction logging

Ember Vault now runs independently on EmberForge infrastructure and is currently in **active development and beta preparation**.

The current bot runtime includes **16 active commands**, with additional onboarding, administration, documentation, analytics, and automation work still ahead.

### Planned plans

Current product planning includes:

* **Spark** — free core economy plan
* **Inferno** — planned paid tier for communities that need higher limits, additional guilds, deeper configuration, and more automation

Pricing, limits, retention windows, and plan details are still subject to change before launch.

## Ember Nexus

**Ember Nexus** is EmberForge’s planned multi-game integration platform.

The goal is to connect systems communities already run, including:

* dedicated game servers
* Discord
* websites
* shops
* player identities
* events
* automation
* crosschat
* monitoring and health information

Nexus is being designed around a game-agnostic core with adapters for individual games rather than hardcoding one game or one community into the platform.

Phoenix Clan Rising is intended to serve as the first real-world proving ground.

**Current status:** concept / pre-development planning.

The roadmap currently includes product definition, architecture, Nexus Core, game adapters, crosschat, dashboard management, identity, commerce, automation, and eventual multi-game productization.

## EmberForge HQ

**EmberForge HQ** is the public community home for the Forge.

It is used for:

* announcements
* development updates
* changelogs
* roadmap discussion
* public support
* feedback
* future beta testing

Join here:

[https://discord.gg/WRv4fGv2PG](https://discord.gg/WRv4fGv2PG)

## How we build

EmberForge follows a few simple rules:

* useful before impressive
* community-first design
* clear systems over unnecessary complexity
* build from real problems
* test with real workflows
* isolate data and permissions properly
* leave room to grow

The shiny bits come later, after the thing actually works.

## Development workflow

Website changes should normally follow this flow:

```text
preview
   ↓
Cloudflare preview deployment
   ↓
review and test
   ↓
merge into main
   ↓
production deployment
```

Avoid making large untested site-wide changes directly on `main`.

## Status

🚧 **Active development**

The website, Ember Vault, Ember Nexus, and the broader EmberForge project are still being actively built and refined.

Ember Vault is moving toward public beta.

Ember Nexus is still intentionally on the workbench.

EmberForge HQ is open for humans.

Which means there is almost certainly something being tinkered with right now.

## Links

* Website: [https://emberforgehq.com](https://emberforgehq.com)
* Ember Vault: [https://emberforgehq.com/ember-vault.html](https://emberforgehq.com/ember-vault.html)
* Ember Nexus: [https://emberforgehq.com/ember-nexus.html](https://emberforgehq.com/ember-nexus.html)
* Creator: [https://emberforgehq.com/creator.html](https://emberforgehq.com/creator.html)
* Support: [https://emberforgehq.com/support.html](https://emberforgehq.com/support.html)
* Security: [https://emberforgehq.com/security.html](https://emberforgehq.com/security.html)
* Discord: [https://discord.gg/WRv4fGv2PG](https://discord.gg/WRv4fGv2PG)
* Contact: `ever_forge@outlook.com`

---

**Built in the Forge.**
