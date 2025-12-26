# SignalQo Website

This repository contains the source code for **signalqo.com**, the public-facing site for SignalQo.

SignalQo exists to help leaders, managers, and operators restore clarity, strengthen execution, and build business systems that hold under pressure. As part of its branding and marketplace positioning, the site is intentionally direct – designed to filter for fit, not maximize volume.

---

## Tech Stack

- Framework: Vite + React (TypeScript)
- Styling: Tailwind CSS
- Hosting: Cloudflare Pages
- DNS / Edge: Cloudflare
- Analytics: Google Analytics (gtag)
- Schema: JSON-LD (Organization)

---

## Project Structure (High Level)

- `index.html`
  Core document head (meta tags, analytics, schema).

- `src/`
  Application source.
  - `components/` – Reusable UI and section components
  - `pages/` – Page-level assemblies (Home, Services, Next Steps, etc.)
  - `styles/` – Global styles and Tailwind configuration

- `public/`
  Static assets.

---

## Local Development

```bash
npm install
npm run dev
```

Runs the site locally using Vite’s development server.

---

## Deployment

Deployment is handled automatically via **Cloudflare Pages**.

- Commits to the configured branch trigger builds.
- DNS is managed in Cloudflare.
- The apex domain uses Cloudflare’s proxied A-record setup for Pages.

No manual deployment steps are required.

---

## Notes on Intent

This site is not designed as a traditional consulting or agency site.

- Language is intentionally precise and non-promotional.
- The goal is clarity and self-selection, not persuasion at all costs.
- SEO is treated as a discovery mechanism, not an identity.

If something feels overly generic, it is likely incorrect.

---

## Status

- Initial public launch: December 2025
- Actively iterating copy, structure, and supporting content.
- No backwards-compatibility guarantees at this stage.

---

## Contact

support@signalqo.com

---

Built deliberately. Maintained pragmatically.
