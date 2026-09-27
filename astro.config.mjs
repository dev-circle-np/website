import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { statSync } from "node:fs";
import { fileURLToPath } from "node:url";

const site = "https://devcirclenepal.org";

/**
 * Source files that decide a route's <lastmod>. Kept explicit so the sitemap
 * reflects real content edits instead of resetting on every deploy.
 */
const sourceFiles = {
  "/": ["src/pages/index.astro"],
  "/members/": ["src/pages/members.astro", "src/data/members.ts"],
};

const lastModified = (pathname) => {
  let latest = 0;
  for (const file of sourceFiles[pathname] ?? []) {
    try {
      latest = Math.max(
        latest,
        statSync(fileURLToPath(new URL(file, import.meta.url))).mtimeMs,
      );
    } catch {
      // Missing file: keep whatever we already found.
    }
  }
  return new Date(latest || Date.now());
};

export default defineConfig({
  site,
  integrations: [
    sitemap({
      // Pages flagged noindex (404) are dropped automatically by the integration.
      serialize(item) {
        const { pathname } = new URL(item.url);
        item.lastmod = lastModified(pathname).toISOString();
        item.changefreq = pathname === "/" ? "weekly" : "monthly";
        item.priority = pathname === "/" ? 1 : 0.8;
        return item;
      },
    }),
  ],
});
