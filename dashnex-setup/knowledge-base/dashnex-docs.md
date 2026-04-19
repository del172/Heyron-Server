# DashNex Knowledge Base

> Scraped from https://github.com/dashnex/skills - April 2026

## Overview

**Module** — an NPM package under the `@dashnex` scope. Modules are isolated, self-sufficient units that provide defined functionality (pages, API routes, events, database models, CLI commands, MCP tools).

**Web Application** — a vinext application configured to work with `@dashnex` modules.

### Available Modules

| Package | Description |
|---------|-------------|
| `@dashnex/types` | Type definitions and interfaces |
| `@dashnex/ui` | Reusable UI components and design system |
| `@dashnex/cli` | Command-line interface tools |
| `@dashnex/core` | Core functionality and utilities |
| `@dashnex/users` | User management |
| `@dashnex/auth` | Authentication and authorization |
| `@dashnex/events` | Event tracking system |
| `@dashnex/system` | Shared elements |
| `@dashnex/mcp` | MCP (Model Context Protocol) server and tools |
| `@dashnex/contacts` | Contact management |
| `@dashnex/emails` | Email campaigns, templates, and transactional emails |
| `@dashnex/products` | Product and variant management |
| `@dashnex/offers` | Offers, checkouts, purchases, and subscriptions |
| `@dashnex/portal` | Customer portal |
| `@dashnex/affiliates` | Affiliate management |
| `@dashnex/analytics` | Analytics and reporting |
| `@dashnex/api` | Public API module |
| `@dashnex/oauth2-server` | OAuth2 server implementation |
| `@dashnex/debug` | Debugging and logging utilities |

## Commands

```bash
pnpm install          # Install deps + dashnex postinstall + dashnex build
pnpm dev              # Start dev server
npx dashnex build     # Regenerate module registry
npx dashnex db migrate # Run database migrations
```

## MCP (Model Context Protocol)

The `@dashnex/mcp` module exposes an MCP server over HTTP using JSON-RPC 2.0.

### Endpoint

```
POST /api/mcp
```

### Available Tools

AI agents can call tools, read resources, and use prompts registered by any module.

## External API

The `@dashnex/api` module provides an external API layer for third-party integrations.

- All external API endpoints are mounted under `/api/v1/`
- Authentication via Bearer API key
- OpenAPI 3.0 spec auto-generated at `GET /api/v1/docs.json`

## Pages

Modules can register React components to be rendered at specific browser paths.

```ts
export interface DashnexPage {
  path: string;
  title: string;
  description?: string;
  roles?: string[];
  component: ({ params }: { params?: Promise<any> }) => React.ReactElement;
}
```

## Auth

`@dashnex/auth` provides access control:

- **Route Guards** — `AuthGuard` and `CheckRoleGuard`
- **`getUser(request)`** — get current user from request
- **`hasRole(user, role)`** — check if user has a specific role
- **Role Hierarchy:** `owner` > `admin` > `user`

## Best Practices

### Route Handlers
- Handlers are thin — deal only with HTTP layer
- Extract request body, query params, route params
- Identify current user from request context
- Call appropriate service method
- Return response (plain object)
- Must NOT contain business logic, Zod validation, or DB operations

### Services (Singleton Pattern)
- Services own all business logic and database access
- Use singleton pattern stored in `globalThis`
- Validate input with Zod at service boundary
- Emit events after mutations

### Models (Drizzle ORM)
- Use CUID2 for primary keys
- Use `date()` from `@dashnex/core` for date fields
- Column names use `snake_case` in database

### Schemas (Zod)
- Validate input at service boundary
- Not in handlers

## CLI Commands

```bash
npx dashnex login --email <email> --password <password>
npx dashnex app pull <appname>
npx dashnex app push
npx dashnex app deploy
npx dashnex app status
```

## File Structure

```
src/
  server.ts          # Server-side module config
  client.ts          # Client-side module config
  routes/
    index.ts         # Route definitions
    <entity>.ts      # Handler functions
  services/
    <entity>.service.ts
  models/
    <entity>.model.ts
  schemas/
    <entity>.schema.ts
  listeners/
    <event-name>.ts
dashnex.json         # Module config
package.json
```

## Module Config (dashnex.json)

```json
{
  "bindings": {
    "CORE_DB": { "type": "DB", "description": "Main database" },
    "UPLOADS": { "type": "STORAGE", "description": "File storage" }
  },
  "env": ["API_KEY", "WEBHOOK_SECRET"]
}
```

Binding types: `DB`, `STORAGE`, `KV`, `SERVICE`, `OBJECT`, `AGENT`, `WORKER`, `AI`, `RAG`, `QUEUE`.

## Installation

```bash
npm install -g dashnex
npx dashnex login --email <email> --password <password>
```

Or use locally:

```bash
mkdir my-dashnex-app && cd my-dashnex-app
npm init -y
npm install dashnex
npx dashnex --help
```