# Architecture

## Route groups

This frontend uses Next.js App Router route groups under `src/app`:

- `(public)`: public entry routes such as login and unauthorized
- `(applicant)`: applicant-only routes under `/applicant`
- `(evaluator)`: evaluator-only routes under `/evaluator`
- `(super-admin)`: super-admin-only routes under `/super-admin`

The route groups are organizational and do not appear in the URL. They exist so each portal can have its own layout and route ownership while still sharing the same root app shell.

## Shared layout strategy

- `src/app/layout.tsx` owns global metadata, fonts, global styles, and app-wide providers.
- Each portal route group has its own layout that mounts `PortalShell` with the correct role.
- `PortalShell` owns the shared dashboard frame: sidebar, topbar, and main content region.
- Individual pages compose `PageContainer` plus feature-specific placeholders or future feature components.

This keeps portal chrome consistent while avoiding a giant single layout with role conditionals spread everywhere.

## Feature-module philosophy

Use `src/features` for domain behavior, not just shared UI:

- `auth`: login, session bootstrapping, route-guard helpers, auth mutations
- `applicant-profile`: institution profile forms and applicant-specific profile UI
- `applications`: application list/detail/submission flows
- `evaluations`: evaluator review tools, findings, due diligence, paper evaluation
- `evaluator-management`: super-admin evaluator CRUD and assignment workflows
- `criteria`: criteria upload, listing, versioning, and document-specific logic
- `certificates`: accreditation results and certificate-facing UI

Shared UI only belongs in `src/components` when it is meaningfully reusable across features or portals.

## Server vs client component guidance

Default to server components.

Use client components only when one of these is true:

- the component needs local state or event handlers
- the component uses browser APIs
- the component uses React context providers
- the component depends on client-only hooks such as `usePathname`
- the component wraps third-party UI that requires the client runtime

In this starter, client components are intentionally limited to providers and active-navigation behavior. Layouts and pages remain server-first.

## API layer conventions

The API layer lives in `src/lib/api` and is intentionally lightweight:

- `client.ts` contains the shared request helper
- subfolders map to backend-facing domains such as auth, applications, evaluations, evaluators, and criteria
- each domain file exports typed request functions only
- no fake backend logic is embedded in shared components or route files

When the backend contract is ready, extend the domain helpers first, then wire those helpers into feature-owned queries and mutations.
