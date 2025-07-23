# Personal website monorepo

This is the monorepo powering my personal web presence, managed with [turborepo](https://turbo.build/repo) for high-performance development. It's being hosted on `kingzai.com` and its subdomains.

---

## Monorepo Structure

```
apps/
├── www       → Main website
├── about     → About site
├── resume    → Resume site
└── api       → REST API backend

packages/
├── data      → Shared personal data (bio, projects, links, etc.)
├── ui        → Shared UI components
├── tsconfigs → Shared TypeScript configurations
└── eslint    → Shared ESLint configuration

````

---

## Apps Overview

### `www` – Main Site
- **URL**: [https://kingzai.com](https://kingzai.com)
- **Stack**: Next.js

### `about` – Personal Details
- **URL**: [https://about.kingzai.com](https://about.kingzai.com)
- **Stack**: Next.js

### `resume` – Resume Site
- **URL**: [https://resume.kingzai.com](https://resume.kingzai.com)
- **Stack**: Next.js

### `api` – REST API
- **URL**: [https://api.kingzai.com](https://api.kingzai.com)
- **Stack**: Express.js

---

## Shared Package

### `packages/data`
- Centralized source of truth for:
  - Personal information
  - Social links
  - Project data

Updating anything in this package automatically propagates to all apps that consume it.

---

## Development

### Requirements
- Node.js ≥ 20
- pnpm (recommended)

### Install Dependencies

```bash
pnpm install
````

### Run All Apps in Dev Mode

```bash
pnpm dev
```

### Build Everything

```bash
pnpm build
```

---

## License

MIT © Zai


