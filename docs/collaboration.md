# Collaboration Conventions

## Branch naming suggestions

Use short, descriptive branches. Suggested patterns:

- `codex/frontend-foundation`
- `feature/applicant-profile-form`
- `feature/evaluator-findings-table`
- `chore/docs-architecture`
- `fix/super-admin-nav-state`

If your team has a standard branch policy, follow that instead.

## File naming conventions

- Route folders: kebab-case
- Feature folders: kebab-case
- React components: PascalCase file exports, with kebab-case filenames allowed only if the team prefers that style consistently
- Utility files: descriptive lowercase names such as `client.ts`, `navigation.ts`, `access.ts`
- Validation files: domain-oriented names such as `applications.ts` or `criteria.ts`

## Component placement rules

Place code by ownership first.

- Put route entry files in `src/app`
- Put domain behavior and business-aware UI in `src/features`
- Put generic reusable UI in `src/components`
- Put API helpers, config, validation, permission helpers, and low-level utilities in `src/lib`
- Put cross-feature hooks in `src/hooks`
- Put shared TypeScript contracts in `src/types`

## Shared vs feature components

Create a shared component only when at least one of these is true:

- the component is reused across multiple features
- the component has no business language tied to one domain
- the component represents app chrome or low-level UI primitives

Keep a component inside a feature when:

- it encodes business terminology for one workflow
- it contains feature-specific form logic or query behavior
- only one portal or one domain uses it

Promote cautiously. It is cheaper to move a proven component into `src/components` later than to prematurely create an over-general shared abstraction.

## Keeping role boundaries clean

- Applicant, Evaluator, and Super Admin should have separate route ownership.
- Super Admin is not a superset UI of Evaluator. Shared patterns are fine, shared portal assumptions are not.
- Keep super-admin-only mutations such as evaluator management and assignment controls out of evaluator routes.
- Keep evaluator findings and review tools out of applicant-facing routes.
- If two portals need similar visuals, share presentational components only and keep workflow orchestration inside the owning feature.

## Practical workflow for contributors

1. Start from the route that owns the user flow.
2. Add or extend the relevant feature module.
3. Use shared components only where reuse already exists.
4. Keep typed API helpers thin until backend contracts are confirmed.
5. Update docs when introducing a new cross-cutting convention.
