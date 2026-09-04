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
```

## Deployment

This site is deployed through **Cloudflare Pages**.

- Production branch: `main`
- Preview branch: `preview`
- Automatic deployments: enabled
- No build step is currently required
- The site is served directly from the repository root

Changes committed to `preview` are used for testing before production.

Changes merged into `main` are automatically deployed to the live site.

### Deployment rule

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

Avoid large untested site-wide changes directly on `main`.

The existing EmberForge design should be preserved and updated deliberately, file by file, rather than replaced through surprise global refactors.

---

## Ember Vault

**Ember Vault** is the first public product built in EmberForge.

It is a configurable Discord economy platform with:

- guild-isolated wallets and balances
- payments and transactions
- daily, work, and crime systems
- shops and rewards
- reward categories
- inventories
- vouchers
- redemptions
- role income
- guild-specific settings
- delegated manager permissions
- configurable currencies and starting balances
- transaction logging
- scalable shop and reward pagination

### Current state

Ember Vault now runs independently on dedicated EmberForge application infrastructure and is currently:

> **Operational · Active development · Beta preparation**

The current public bot surface includes **17 commands**:

```text
/balance
/pay
/daily
/work
/crime
/shop
/inventory
/leaderboard
/transactions
/wallet
/vault
/vouchers
/redemptions
/rewards
/categories
/roleincome
/setup
```

Recent reliability and product work includes:

- guild-isolated multi-tenant economy data
- atomic shop purchases
- protected redemption state transitions
- reward categories
- paginated shop/category/reward views
- dedicated Linux service identity
- isolated application database
- local service monitoring
- dedicated crash monitoring
- automatic Ember Vault recovery after MySQL recovery
- restore-tested application backups

### Current commercial direction

The current pre-beta product direction uses two plans:

#### Spark

**$0**

Current planning:

- 1 Discord guild
- 25 shop listings
- 3 reward categories
- 5 role-income rules
- 5 voucher types
- 24-hour logs
- core economy features including wallets, payments, daily, work, crime, leaderboard, inventory, currency, and starting-balance configuration

#### Inferno

**$4.99/month**

Current planning:

- 2 Discord guilds included
- up to 5 total guilds with add-ons
- 500 shop listings
- 50 reward categories
- 100 role-income rules
- 250 voucher types
- 5-day logs
- additional guild slots currently planned at $1.49/month

Pricing, limits, retention windows, and plan details are still subject to change before public beta.

---

## Ember Nexus

**Ember Nexus** is EmberForge’s connection layer for game communities.

Its first implementation is **Nexus ARK**.

The larger multi-game vision remains, but the current build direction is intentionally disciplined:

> **ARK first. Cross-chat first. Build outward from there.**

### Current status

> **Nexus ARK foundation & architecture locked · Pre-production**

Nexus is no longer just a broad concept. Its first product boundaries and architecture have been defined far enough to begin MVP sequencing.

### Nexus ARK Core

**Free · $0**

Current direction:

- up to 15 connected ARK servers per Discord community
- up to 2 clusters / chat groups
- ARK → ARK cross-chat
- ARK → Discord
- Discord → ARK
- server aliases
- basic message formatting
- group-based routing
- mute / unmute controls
- basic connection state

Core promise:

> **Full cross-chat for up to 15 ARK servers across 2 clusters. Free.**

### Nexus ARK Premium

**$4.99/month per Discord community**

Current direction:

- unlimited connected ARK servers
- up to 10 clusters / chat groups
- advanced routing
- filters and moderation controls
- advanced formatting
- scheduled and recurring announcements
- monitoring and incident alerts
- automation
- configuration/admin audit history

### RCON Add-on

**$1.99/month**

Planned safe remote actions include:

- live player list
- player lookup
- server status
- broadcast
- save world
- kick
- ban / unban
- restart
- shutdown workflows
- per-command Discord permissions
- admin action logging

Raw unrestricted RCON console access is not part of the launch direction.

### Insights Add-on

Current planned options:

- **7-Day Insights** — $1.49/month
- **30-Day Insights** — $2.49/month

The feature set is the same; retention differs.

Planned analytics include:

- chat volume by server and cluster
- busiest and quietest maps
- busiest hours and days
- ARK vs Discord activity
- rolling activity trends
- comparisons
- exportable summaries

Insights is intended to focus on community-level patterns rather than individual player surveillance.

### Nexus architecture principles

The current architecture is built around three separate questions:

> **Entitlements determine what the community bought.**  
> **Capabilities determine what the connection can do.**  
> **Permissions determine what the person may do.**

Additional design rules include:

- Nexus Core remains authoritative
- Agents connect outward where possible
- one broken destination must not block healthy destinations
- events report what happened
- actions request what should happen
- retries use stable IDs for safety
- no arbitrary shell or PowerShell execution
- no unrestricted raw RCON pass-through
- monitoring reacts to sustained state rather than single noisy events
- automations re-check current reality before acting
- Discord and the dashboard are interfaces to one Core, not competing sources of truth

### What comes next

Recommended next work:

```text
MVP sequencing
→ first Nexus Agent proof-of-concept
→ concrete database schema
→ API endpoint inventory
→ onboarding flow
→ production deployment topology
```

The long-term multi-game direction remains, but ARK is the first proving ground.

---

## EmberForge HQ

**EmberForge HQ** is the public community home for the Forge.

It is used for:

- announcements
- development updates
- changelogs
- roadmap discussion
- public support
- private support tickets
- bug reports
- feedback
- future beta testing
- product demonstrations

Join here:

[https://discord.gg/WRv4fGv2PG](https://discord.gg/WRv4fGv2PG)

### Support routes

Private Discord ticketing is live for:

1. Ember Vault Support
2. Bug Report
3. Other / Contact Us

General support email:

`support@emberforgehq.com`

Security reports:

`security@emberforgehq.com`

---

## Behind the Forge

EmberForge now runs more than product code.

Current operational infrastructure includes:

- dedicated EmberForge application hosting
- isolated product service accounts
- isolated application databases
- local watchdog monitoring
- real-time Ember Vault crash monitoring
- external uptime monitoring
- automatic MySQL → Ember Vault recovery behavior
- restore-tested MySQL application backups
- self-hosted Mailcow business email
- authenticated inbound/outbound mail
- dedicated support and security aliases

The goal is simple:

> Build the infrastructure like the products are meant to be relied on.

---

## How we build

EmberForge follows a few simple rules:

- useful before impressive
- community-first design
- clear systems over unnecessary complexity
- build from real problems
- test with real workflows
- isolate data and permissions properly
- least privilege by default
- recover cleanly from failure
- restore-test backups
- leave room to grow

The shiny bits come later, after the thing actually works.

---

## Website update rules

The website has an established design and should be updated deliberately.

Preferred approach:

```text
preserve the current visual system
→ update one page at a time
→ preview
→ review
→ merge
```

Avoid:

- surprise site-wide redesigns
- giant global CSS rewrites without review
- overwriting page-specific identity
- skipping the preview branch for substantial changes
- publishing planned features as released software

Always clearly distinguish:

- operational
- active development
- pre-production
- planned
- future

---

## Current website status

🚧 **Active development**

Current product state:

```text
Ember Vault
→ operational
→ active development
→ preparing for public beta

Nexus ARK
→ product foundation locked
→ first architecture ring locked
→ pre-production
→ MVP sequencing next

EmberForge HQ
→ public and operational
→ onboarding configured
→ support ticketing live
```

Which means there is almost certainly something being tinkered with right now.

---

## Links

- Website: [https://emberforgehq.com](https://emberforgehq.com)
- Ember Vault: [https://emberforgehq.com/ember-vault.html](https://emberforgehq.com/ember-vault.html)
- Ember Nexus: [https://emberforgehq.com/ember-nexus.html](https://emberforgehq.com/ember-nexus.html)
- Creator: [https://emberforgehq.com/creator.html](https://emberforgehq.com/creator.html)
- Support: [https://emberforgehq.com/support.html](https://emberforgehq.com/support.html)
- Security: [https://emberforgehq.com/security.html](https://emberforgehq.com/security.html)
- Discord: [https://discord.gg/WRv4fGv2PG](https://discord.gg/WRv4fGv2PG)
- Support: `support@emberforgehq.com`
- Security: `security@emberforgehq.com`

---

**Built in the Forge.**
