# RTB Accreditation Frontend

This repository contains the frontend for the RTB Accreditation platform.

It is a shared codebase for three portals:

- Applicant Portal
- Evaluator Portal
- Super Admin Portal

The purpose of this repository is to give every frontend contributor a clean and organized starting point so implementation can begin immediately and stay consistent across the team.

## Project Goal

Build the frontend according to the approved design, keep the portals clearly separated by role, and collaborate through feature branches before merging into the shared development branch.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Radix UI primitives
- `lucide-react`
- TanStack Query
- React Hook Form
- Zod

## UI And Styling Setup

The component and styling setup is already prepared in this codebase.

Collaborators should continue using the same stack and not introduce a different UI system.

### Use these styling tools

- Tailwind CSS for layout, spacing, sizing, and utility styling
- Radix UI primitives for accessible component behavior
- `lucide-react` for icons
- Existing reusable UI components from `src/components/ui`
- Existing shared layout components from `src/components/layout` and `src/components/navigation`

### Important note about shadcn/ui

This project is already structured in a `shadcn`-style way manually.

That means:

- reusable UI components already exist in `src/components/ui`
- the team should keep following the same pattern
- if new components are added later, they should match the current structure and styling approach

### Brand color

The main blue used in this project is:

```text
#0088FF
```

Use this blue consistently for:

- primary buttons
- active sidebar states
- focused inputs
- highlights
- key chart accents
- onboarding progress states

### Shared image assets already added

The following shared assets are already available in the project:

- Logo: `public/images/branding/rtb-logo.png`
- Login or auth banner: `public/images/auth/sider-banner-login.png`

Use these existing assets instead of re-uploading duplicates.

Example usage:

```tsx
import Image from "next/image";

<Image src="/images/branding/rtb-logo.png" alt="RTB Logo" width={120} height={80} />
<Image src="/images/auth/sider-banner-login.png" alt="Login banner" width={432} height={768} />
```

## Getting Started

### 1. Clone the repository into the current root folder

Open or create your project folder first, then run:

```bash
git clone https://github.com/etrainermis/accreditation-frontendv2.git .
```

The dot `.` means the repository will be cloned into the current folder.

### 2. Confirm you are in the project root

Run all commands from the repository root directory.

### 3. Install dependencies

```bash
npm install
```

### 4. Create your own branch before starting work

Every developer should work on their own branch.
Use your name as the branch name.

Examples:

```bash
git checkout -b emmanuel
git checkout -b kelia
git checkout -b tresor
```

Do not work directly on `main`.
Do not work directly on `dev`.

### 5. Start the project

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Branching Workflow

Use this flow for collaboration:

1. Clone the project.
2. Create your own personal branch using your name.
3. Implement your assigned task in your own branch.
4. Push your branch and open a merge request or pull request into `dev`.
5. Review and merge changes into `dev` first.
6. Move changes to `main` only after they are stable and approved from `dev`.

In short:

- Personal branches: day-to-day work
- `dev`: integration branch
- `main`: stable branch

## Design Implementation Rule

Frontend implementation should follow the design as it is.

Use the shared Figma design link provided by the team as the main visual reference before building screens, components, spacing, layout, and flows.

Do not guess new layouts when the design already exists.
Do not redesign screens unless the team agrees on a change.

## Available Portals

### Applicant Portal

Used for:

- onboarding and registration
- institution profile
- applications
- evaluation status visibility
- certification outcome visibility

### Evaluator Portal

Used for:

- assigned applications
- reviews
- due diligence
- paper evaluation
- findings and comments

### Super Admin Portal

Used for:

- evaluator management
- evaluator assignment
- criteria management
- monitoring progress
- platform oversight

## Codebase Structure

```text
src/
  app/
  components/
  features/
  lib/
  hooks/
  types/
  styles/
public/
  images/
    branding/
    auth/
```

### `src/app`

Contains all routes and portal entry points.

This includes:

- public routes such as login and onboarding
- applicant routes
- evaluator routes
- super-admin routes
- route layouts

### `src/components`

Contains reusable UI and shared layout pieces.

This includes:

- shared sidebar and topbar pieces
- reusable UI building blocks
- shared form wrappers
- feedback and table placeholders

### `src/features`

Contains feature-based business areas.

This is where portal-specific implementation should grow.

Examples:

- auth
- applications
- evaluations
- criteria
- evaluator-management
- certificates

### `src/lib`

Contains project utilities and shared frontend logic.

This includes:

- API helpers
- auth helpers
- permissions
- constants
- config
- validations
- utility functions

### `src/hooks`

Contains reusable React hooks shared across features.

### `src/types`

Contains shared TypeScript types and interfaces.

### `src/styles`

Contains shared styling tokens and global style support.

Important files here include:

- `src/styles/tokens.css` for design tokens and shared color values
- `src/app/globals.css` for global app styling

### `public`

Contains static assets used directly by the frontend.

Use this folder for:

- logos
- banners
- illustrations
- mock images
- other shared visual assets

## Implementation Guidance For Contributors

When you start work:

1. Check the design first.
2. Identify the correct portal.
3. Work inside your own branch.
4. Add code in the correct folder based on responsibility.
5. Reuse the current styling system instead of creating a new one.
6. Use the existing blue `#0088FF` as the primary action color.
7. Use the shared assets already placed in `public/images` where appropriate.
8. Keep role-specific logic inside the correct portal or feature area.
9. Merge into `dev` before anything goes to `main`.

## Scripts

- `npm run dev` - start development server
- `npm run build` - build the project
- `npm run start` - run production server
- `npm run lint` - run linting
- `npm run typecheck` - run TypeScript checks

## Important Notes

- This repository is frontend-focused.
- Avoid backend assumptions unless the frontend needs a lightweight placeholder.
- Keep the portals separate by role.
- Keep implementation aligned with the Figma design.
- Keep using the current component and styling system already present in the repo.

## Additional Docs

- [docs/architecture.md](./docs/architecture.md)
- [docs/collaboration.md](./docs/collaboration.md)
