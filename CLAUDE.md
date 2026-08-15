# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build → /build
npm test           # Run tests (react-scripts/Jest)
npm run deploy     # Runs predeploy (build) then gh-pages -d build
```

No linter script is configured; ESLint is embedded in `react-scripts` and runs automatically during `start`/`build`.

## Architecture

Single-page React 18 app bootstrapped with Create React App. No Vite or custom Webpack config — everything goes through `react-scripts`.

**Rendering model:** One long-scroll page. `App.js` composes all sections in order; React Router (`BrowserRouter`) is present but used only for context, not for route-based navigation.

**Section order in `App.js`:**
Hero → Skills → Experience → Projects → Education → Certifications → Footer

`Contact` and `StarCanvas` are imported but commented out.

### Key directories

| Path | Purpose |
|------|---------|
| `src/components/sections/` | Full-page sections (Hero, Skills, Experience, Projects, Education, Certifications, Contact, Footer, Chatbot) |
| `src/components/cards/` | Reusable card components (ExperienceCard, EducationCard, ProjectCard) |
| `src/components/canvas/` | Three.js / R3F scenes (Earth.jsx, Stars.jsx) |
| `src/components/Dialog/` | ProjectDetails modal, opened by lifting state from Projects |
| `src/components/HeroBgAnimation/` | CSS animation used as Hero background |
| `src/data/constants.js` | **All content lives here** — Bio, skills, experiences, projects, education, certifications |
| `src/data/exp.js` | `calculateYOE(experiences)` — computes years of experience dynamically from date strings |
| `src/utils/Themes.js` | `darkTheme` / `lightTheme` token objects (bg, primary, card, text colours) |
| `src/utils/motion.js` | Framer Motion variant presets (slideAnimation, fadeAnimation, head*Animation) |
| `src/utils/analytics.js` | Umami analytics wrapper — `trackEvent()` and `getLandingSource()` |
| `public/` | Static assets: resume PDF/DOCX, project screenshots, Hero image, Nginx-served `index.html` |

### Styling approach

Styled-components with a `ThemeProvider` wrapping the entire app. Theme tokens are accessed via `${({ theme }) => theme.<token>}`. No CSS Modules or Tailwind.

### 3D elements

`@react-three/fiber` + `@react-three/drei` power the Earth and Star canvas components. The `maath` library is used for math utilities within Three.js scenes.

### Animation

Framer Motion `AnimatePresence` wraps the main content. Shared animation variants are exported from `src/utils/motion.js` and reused across sections.

### Project modal

`openModal` state (`{ state: boolean, project: object | null }`) lives in `App.js` and is passed down to `Projects` and `ProjectDetails`. Clicking a project card sets `openModal`; the modal conditionally renders when `openModal.state === true`.

### Analytics

Umami (`window.umami`) is injected via a script tag in `public/index.html`. `trackEvent` silently no-ops when Umami isn't loaded. Landing-source tracking fires once per session (guarded by `sessionStorage`).

### Deployment

- **GitHub Pages:** `npm run deploy` (gh-pages writes to the `gh-pages` branch; homepage is `https://kkarthik3.github.io`).
- **Docker/Nginx:** `Dockerfile` does a multi-stage build (Node 18 → nginx:latest) with a custom `portfolio.conf` Nginx config. Port 80. The Docker path is for self-hosted deployment and is separate from the GH Pages flow.

## Content updates

All portfolio content (bio, roles, skills, experience, projects, education, certifications) is in `src/data/constants.js`. Experience dates follow the format `"Mon YYYY - Mon YYYY"` or `"Mon YYYY - Present"` — `calculateYOE` in `src/data/exp.js` parses this format exactly.
