# DCN Contribution Guide

Whether you're new to GitHub or an experienced developer, we welcome your contribution. This project is a small, static [Astro](https://astro.build) site — a realistic first open-source project if you've never opened a pull request before.

Join the conversation in [our Discord server](https://discord.gg/fp5CmBG) before contributing. Let us know what you want to add or fix.

---

## What this project is

- Astro 6 with static output — no client-side framework, no runtime API
- TypeScript throughout
- Deployed as Cloudflare Workers static assets, configured in `wrangler.jsonc`
- Live at [devcirclenepal.org](https://devcirclenepal.org)

The site has three routes: `/` (home), `/members` (member directory) and a `404` page.

---

## Before you start

- **Node.js >= 22.12.0** — required by Astro 6
- **pnpm 10** — the pinned package manager (`packageManager` in `package.json`). Run `corepack enable` once and the right version is used automatically

The repository carries both `package-lock.json` and `pnpm-lock.yaml`. pnpm is the manager maintainers use, so run `pnpm install` and commit the updated `pnpm-lock.yaml` if you touch dependencies.

---

## Local setup

1. [Fork the repo](https://help.github.com/articles/fork-a-repo/) on GitHub
2. Clone your fork locally and install dependencies:

   ```bash
   git clone git@github.com:YOUR-USERNAME/website.git
   cd website
   pnpm install
   ```

3. Add the upstream remote:

   ```bash
   git remote add upstream https://github.com/dev-circle-np/website.git
   ```

You should now have `origin` → your fork and `upstream` → the original DCN repo.

Useful commands:

| Command             | What it does                                          |
| ------------------- | ----------------------------------------------------- |
| `pnpm dev`          | Dev server with hot reload on `http://localhost:4321`  |
| `pnpm build`        | Static build into `dist/`                              |
| `pnpm preview`      | Serve the built `dist/` locally                        |
| `pnpm exec astro check` | TypeScript and template diagnostics for all `.astro` files |
| `pnpm deploy`       | Maintainers only: build and deploy to Cloudflare (`npx wrangler deploy`) |

---

## Project layout

```
astro.config.mjs        Site URL, sitemap integration and per-route lastmod sources
wrangler.jsonc          Cloudflare Workers assets config (main: src/worker.ts)
public/                 Files served as-is: favicons, images, robots.txt, _redirects
src/data/members.ts     The member directory data
src/layouts/            BaseLayout.astro — head tags, meta/OG/Twitter, JSON-LD, global CSS
src/components/         Header.astro, Footer.astro
src/pages/              index.astro, members.astro, 404.astro
src/worker.ts           One-line asset worker that serves the built site
```

---

## Adding yourself as a member

The only file you need to edit is **`src/data/members.ts`**. Append an entry to the `unsortedMembers` array:

```ts
{
  fullName: "Your Full Name",
  discord: "yourdiscord",              // optional
  about: "One line about yourself",
  links: {
    github: "your-github-username",    // used for your avatar
    twitter: "your-twitter-handle",    // optional
    facebook: "your-facebook-username",// optional
    instagram: "your-instagram-handle" // optional
  }
},
```

**Notes:**

- `fullName` — your real name or preferred display name
- `discord` — your Discord handle, optional
- `about` — keep it short, one sentence
- `links` — every key is optional, but `github` is what gives you a real profile photo. Without it the site falls back to a generated initials avatar
- Write handles, not URLs — the templates build the links (`github`, `twitter`, `facebook`, `instagram`)
- **Don't sort the array yourself.** The exported `members` list is sorted by name (case-insensitive) at build time, so your entry works wherever you put it

Your card appears automatically on the **Members** page and, if you added a GitHub handle, in the homepage preview once merged. No other file needs to change — the member count on both pages is derived from the list length.

---

## Other kinds of changes

**Pages and components.** Add a route under `src/pages/*.astro` and wrap the content in `BaseLayout`, which takes `title`, `description`, and optionally `image`, `imageAlt`, `noindex`, `breadcrumbs` and `structuredData`. Pass `noindex` for anything that shouldn't be indexed (the sitemap integration drops those routes automatically). Keep one `<h1>` per page and give meaningful `alt` text and `aria-label`s.

If you add a route, add it to the `sourceFiles` map in `astro.config.mjs` — that is what gives each sitemap entry a truthful `lastmod` instead of the deploy time.

If you remove a route, add a redirect to `public/_redirects` (see the retired `/fellowship` entries) so old links keep working.

**Styling.** Styles live in scoped `<style>` blocks in the component that uses them. Shared tokens are defined globally in `BaseLayout.astro`: `--container-max`, `--page-gutter` and `--ease-out-quint`, plus the `.container` helper. The palette is dark: page `#11100d`, raised panels `#17140f` / `#15120e`, text `#fff7e8`, accent `#f2c66b`. Typography is Space Grotesk, loaded in `BaseLayout`.

**Motion.** Sections fade in through the `[data-reveal]` attribute and a small `IntersectionObserver` script, and everything respects `prefers-reduced-motion`. Follow that pattern rather than adding animation libraries.

**Assets.** Put images in `public/images/` and reference them with absolute paths (`/images/logo.png`).

**Dependencies.** Keep the site lean. If a change really needs a new package, say why in the pull request description.

---

## Checklist before opening a pull request

- `pnpm build` completes without errors
- `pnpm exec astro check` reports no errors, warnings or hints
- You previewed your change at a narrow (~375px) and a wide viewport
- Any new interactive element is keyboard reachable and labelled
- Only files related to your change are in the diff

---

## Working with a local copy

Before making changes, sync your fork with upstream:

1. Make sure you're on `master`:

   ```bash
   git checkout master
   git status
   ```

2. Sync with upstream:

   ```bash
   git pull --rebase upstream master
   ```

3. Create a new branch:

   ```bash
   git checkout -B your-branch-name
   ```

   Use a descriptive name, e.g. `add-nabin-as-member` or `fix-navbar-mobile`.

4. Make your changes and run `pnpm dev` to preview them.

---

## Pushing changes to your fork

```bash
git status                          # review changed files
git add src/data/members.ts         # stage only what you changed
git commit -m "add your-name as member"
git push -u origin your-branch-name
```

---

## Submitting a pull request

1. Go to the [DCN repository on GitHub](https://github.com/dev-circle-np/website)
2. Click **"New pull request"** → **"compare across forks"**
3. Set:
   - **base:** `dev-circle-np/website` → `master`
   - **compare:** `YOUR-USERNAME/website` → `your-branch-name`
4. Title your PR clearly, e.g. `add Nabin Sademba as member`
5. If you're fixing an issue, add `closes #123` in the description
6. Submit — maintainers will review and merge, then deploy

If changes are requested, push additional commits to the same branch and the PR updates automatically.
