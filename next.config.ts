import type { NextConfig } from "next";

/*
 * GitHub Pages hosting
 * When PAGES_BASE_PATH is set (by .github/workflows/deploy.yml), the site is
 * exported as plain static files, served from https://<user>.github.io/<repo>/.
 * Static export can't run with Cache Components / Partial Prefetching, so those
 * are only switched on for local development (`npm run dev`).
 */
const pagesBasePath = process.env.PAGES_BASE_PATH;
const isPagesBuild = pagesBasePath !== undefined;

const nextConfig: NextConfig = {
  ...(isPagesBuild
    ? { output: "export", trailingSlash: true, basePath: pagesBasePath }
    : { cacheComponents: true, partialPrefetching: true }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
