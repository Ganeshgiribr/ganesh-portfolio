# Repository Overview

## Project Summary
- **Name**: ganesh-portfolio
- **Type**: Personal portfolio built with Vite + React + Tailwind CSS
- **Primary Entry Point**: `index.html` at the repository root, which loads `src/main.jsx`

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Build & Deployment
- Build command: `npm run build`
- Output directory: `dist`
- Netlify publish directory should target `dist`

## Notable Configuration Files
- `vite.config.js` — Vite configuration and path aliases
- `tailwind.config.js` — Tailwind CSS setup and content paths
- `postcss.config.js` — PostCSS plugins (Tailwind, Autoprefixer)

## Source Structure
- `src/main.jsx` — Application bootstrap, renders `<App />`
- `src/App.jsx` — Root component orchestrating layout and routes
- `src/components/` — Reusable React components (About, Projects, etc.)
- `src/data/` — Data-driven content (skills, projects, experience)
- `src/index.css` — Global styles & Tailwind base imports

## Assets
- Static assets located under `public/assets`
- During build, Vite copies necessary assets into `dist/assets`

## Common Issues & Tips
- Ensure `public` directory remains at root so Vite can serve `index.html`
- If Netlify build fails with missing entry, verify publish path and presence of `index.html`
- Keep `node_modules_backup_*` directories out of version control to avoid confusion