# Open Innovation

A small website on open innovation missions: a short history, competing definitions of openness, a matrix of open innovation programs and where they succeeded or failed, and an analysis of common points of failure.

Live site: https://kaustubh-misra.github.io/open-innovation-missions/

## Editing the text

All page text lives in `src/content/` — no coding needed:

| Page | File |
|---|---|
| Home | `src/content/home.ts` |
| Definitions | `src/content/definitions.ts` |
| Matrix | `src/content/matrix.ts` and `src/content/matrix-data.json` |
| Test results (per component) | `src/content/conditions.ts` |
| Analysis | `src/content/analysis.ts` |

Each file explains its own format at the top. Push to `main` and the site rebuilds automatically (see the Actions tab).

## Running locally

```bash
npm install
npm run dev   # http://localhost:3000
```
