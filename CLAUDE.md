# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website monorepo for kingzai.com, built with Turborepo. Hosts multiple Next.js applications and an Express API, all sharing common data and UI components.

## Architecture

### Monorepo Structure

- **apps/** - Individual applications
  - **www** - Main landing page (port 5173)
  - **about** - Personal details and contact (port 5174)
  - **resume** - Professional resume (port 5175)
  - **api** - Express.js REST API backend

- **packages/** - Shared packages
  - **data** - Centralized personal data (bio, projects, social links, education, work history)
  - **ui** - Shared UI components library (shadcn/ui based)
  - **tsconfigs** - Shared TypeScript configurations
  - **eslint** - Shared ESLint configurations

### Data Flow

The `@repo/data` package is the single source of truth for:
- Personal information (profile/index.ts)
- Projects (profile/projects.ts)
- Work experience (profile/works.ts)
- Education (profile/education.ts)
- Skills, clients, testimonials
- Site configuration (site.ts)

All apps import from `@repo/data` to display consistent information across the site.

### UI Component Architecture

The `@repo/ui` package provides:
- shadcn/ui components via exports pattern
- Shared Tailwind configuration
- Global CSS styles
- Common hooks and utilities

Apps consume UI components via `@repo/ui/components/*` imports.

## Development Commands

### Local Development

```bash
# Install dependencies
pnpm install

# Run all apps in development mode
pnpm dev

# Run dev for specific app
pnpm --filter www dev
pnpm --filter about dev
pnpm --filter resume dev
pnpm --filter api dev
```

### Building

```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter www build
```

### Linting

```bash
# Lint all packages
pnpm lint

# Lint specific app
pnpm --filter www lint
```

### Formatting

```bash
# Format all code
pnpm format
```

### UI Components

```bash
# Add new shadcn component to @repo/ui
pnpm ui add [component-name]
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS 3.4
- **Monorepo**: Turborepo 2.1
- **Package Manager**: pnpm 9.12 (with workspace protocol)
- **Type System**: TypeScript 5.6
- **UI Library**: Radix UI + shadcn/ui
- **Backend**: Express.js + TypeScript
- **Analytics**: Vercel Analytics
- **Font**: JetBrains Mono

## Application-Specific Notes

### www (Main Site)
- Landing page with sections: hero, features, projects, testimonials
- Section components in `sections/` directory
- Uses `@repo/data` for all dynamic content

### about (Personal Site)
- Route groups: (root), /contact, /gallery, /history
- Contact form with form validation (react-hook-form + zod)
- Theme switcher (next-themes)

### resume (Resume Site)
- Professional resume display
- Pulls from `@repo/data` for work history and education

### api (Backend API)
- Express.js server
- TypeScript with ts-node for development
- Routes: index, assets, contact
- Middleware: logger, errorHandler
- CORS configuration in config/corsOptions
- Build output: `dist/` directory
- Deployed to Vercel (see vercel.json)

## Key Patterns

### Workspace Dependencies
Use `workspace:*` protocol in package.json for internal packages:
```json
"@repo/data": "workspace:*"
```

### Catalog Dependencies
Version-managed dependencies use `catalog:` or `catalog:react18`:
```json
"react": "catalog:react18",
"typescript": "catalog:"
```

### Port Assignments
- www: 5173
- about: 5174
- resume: 5175
- api: 3000 (default, configurable via PORT env)

## Environment

- **Node**: >= 20.17.0
- **pnpm**: 9.12.0
- Volta configuration ensures consistent Node/pnpm versions

## Important Files

- `turbo.json` - Turborepo pipeline configuration
- `pnpm-workspace.yaml` - Workspace and catalog definitions
- `packages/data/profile/index.ts` - Core personal data
- `packages/data/site.ts` - Site URLs and configuration
- `packages/ui/src/components/` - Shared UI components

## Deployment

All apps are deployed to Vercel:
- www → kingzai.com
- about → about.kingzai.com
- resume → resume.kingzai.com
- api → api.kingzai.com

API uses custom vercel.json configuration for Express routes.
