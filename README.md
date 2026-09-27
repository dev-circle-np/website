# Developers Circle Nepal (DCN) — official website

Source for [devcirclenepal.org](https://devcirclenepal.org), the home of Developers Circle Nepal: a community of developers, designers, and students who learn, code, build, share, and help.

Built with [Astro](https://astro.build) (static output) and TypeScript. Deployed as Cloudflare Workers static assets.

## Requirements

- Node.js >= 22.12.0
- pnpm 10 (pinned via `packageManager`; run `corepack enable` once)

## Local development

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

| Command                 | What it does                                               |
| ----------------------- | ---------------------------------------------------------- |
| `pnpm dev`              | Dev server with hot reload                                 |
| `pnpm build`            | Static build into `dist/`                                  |
| `pnpm preview`          | Serve the built `dist/` locally                            |
| `pnpm exec astro check` | TypeScript and template diagnostics for all `.astro` files |
| `pnpm deploy`           | Maintainers only: build and deploy to Cloudflare           |

## Routes

| Path       | Source                    |
| ---------- | ------------------------- |
| `/`        | `src/pages/index.astro`   |
| `/members` | `src/pages/members.astro` |
| `404`      | `src/pages/404.astro`     |

## Project layout

```
astro.config.mjs        Site URL, sitemap integration, per-route lastmod sources
wrangler.jsonc          Cloudflare Workers assets config
public/                 Files served as-is: favicons, images, robots.txt, _redirects
src/data/members.ts     The member directory data
src/layouts/            BaseLayout.astro — head/meta, JSON-LD, global styles
src/components/         Header.astro, Footer.astro
src/pages/              index.astro, members.astro, 404.astro
src/worker.ts           Asset worker that serves the built site
```

## Add yourself as a member

Append an entry to the `unsortedMembers` array in **`src/data/members.ts`** and open a pull request. The list is sorted by name at build time, so there is no marker to chase.

```ts
{
  fullName: "Your Full Name",
  discord: "yourdiscord",              // optional
  about: "One line about yourself",
  links: {
    github: "your-github-username",    // required: gives you a real avatar
    twitter: "your-twitter-handle",    // optional
    facebook: "your-facebook-username",// optional
    instagram: "your-instagram-handle" // optional
  }
},
```

Write handles, not URLs — the templates build the links. Without a GitHub handle the site falls back to a generated initials avatar. Your card then appears on the Members page, and in the homepage preview if you added GitHub.

Full walkthrough, including setup and PR steps: **[CONTRIBUTION.md](./CONTRIBUTION.md)**.

## Contributing

Everyone is welcome, GitHub beginners included. Check out the [contribution guide](./CONTRIBUTION.md), and join us in the [Discord server](https://discord.gg/fp5CmBG) before you start.

## Contributors

We ❤️ our [Contributors](https://github.com/dev-circle-np/website/graphs/contributors).
