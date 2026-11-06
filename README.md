# Aniswar Gupta: portfolio

Personal site for Aniswar Gupta, Senior Software Engineer (backend, distributed systems, agentic AI).

Built with React 18, TypeScript and Vite. The hero is a small animated Kafka-style event stream; everything else is plain, fast HTML and CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Editing content

All text lives in `src/data.ts`: experience, skills, projects and links. Styles are in `src/styles.css`.

## Deploy

Every push to `main` builds the site and deploys `dist/` to Netlify via `.github/workflows/deploy.yml`. It needs two repository secrets: `NETLIFY_PERSONAL_ACCESS_TOKEN` and `NETLIFY_SITE_ID`.
