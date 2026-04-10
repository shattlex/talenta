QA REPORT:
- Risk Level: Medium
- Findings:
  1. Bundle size warning (`~901kb` JS chunk) from Vite indicates potential performance risk on low-bandwidth devices.
  2. New backend currently serves static API payloads (no persistence/DB), so data is not yet operationally stateful.
- Suggested Fix:
  - Introduce route-based code-splitting for heavy pages/charts.
  - Add persistent storage layer (PostgreSQL or equivalent) and CRUD APIs for onboarding/career/tracking entities.
- Test Scenarios:
  - Preconditions / Steps / Expected Result / Priority
  - Frontend routing:
    Preconditions: app started with `npm run dev`
    Steps: open each route (`/`, `/development/onboarding`, `/development/career-map`, `/development/tracking`)
    Expected Result: sidebar active state and page header metadata match selected module
    Priority: High
  - Backend API health:
    Preconditions: backend running
    Steps: `GET /api/health`
    Expected Result: `{ "status": "ok" }`
    Priority: High
  - Data hydration fallback:
    Preconditions: frontend running, backend intentionally stopped
    Steps: open new module pages
    Expected Result: pages render default stats without crash
    Priority: Medium
  - Build gate:
    Preconditions: dependencies installed
    Steps: `npm run build`
    Expected Result: successful production build
    Priority: High
- Production Impact:
  - Current delivery is deployable as MVP fullstack shell (UI + API), but not yet suitable for enterprise production workloads without persistence, authentication, and performance hardening.
