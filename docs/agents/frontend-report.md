# Frontend Report

## Scope
- Base project: `Design Hiring Module`
- Source of additional pages/logic: `Онбординг, Карьерная карта, отслеживания развития сотрудника`

## Implemented
- Added three top-level sidebar modules alongside `Найм`:
  - `Онбординг` -> `/development/onboarding`
  - `Карьерная карта` -> `/development/career-map`
  - `Отслеживание развития` -> `/development/tracking`
- Integrated corresponding page logic and UI components from source mockup:
  - `DevelopmentOnboarding.tsx`
  - `CareerMap.tsx`
  - `TeamDevelopment.tsx`
- Copied reusable UI blocks:
  - `components/onboarding/*`
  - `components/career/*`
  - `components/team/*`
- Updated router and header metadata to support new module-specific titles/subtitles/actions.

## Runtime Foundations
- Added Vite app entry points:
  - `index.html`
  - `src/main.tsx`
- Added API proxy in Vite config for `/api`.

## Fullstack Layer
- Added Express backend (`server/index.js`) with endpoints:
  - `GET /api/health`
  - `GET /api/development/onboarding`
  - `GET /api/development/career-map`
  - `GET /api/development/tracking`
- Connected new pages to backend via `fetch` with graceful fallback to defaults.

## NPM Scripts
- `npm run dev` (frontend + backend via concurrently)
- `npm run build`
- `npm run start` (serve API/static)
