# Barron Sports

Marketing site for one firearms safety course, **Firearms Safety Essentials**. Next.js static export, ready for **GitHub Pages**. Enrolment lives on a separate platform; this site only links there.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL |
| `NEXT_PUBLIC_COURSES_URL` | External training platform (Start the course) |
| `GITHUB_PAGES` | Set to `true` in CI so assets are prefixed with `/safety` |
| `NEXT_PUBLIC_BASE_PATH` | Optional local override of that prefix |

Company copy, course name, and contact details live in `src/lib/site.ts`.

## Deploy on GitHub Pages

The repo is [AllenGleeson/safety](https://github.com/AllenGleeson/safety). After the first successful workflow run the site is at:

**https://allengleeson.github.io/safety/**

1. In the GitHub repo: **Settings → Pages**.
2. Set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or run **Actions → Deploy to GitHub Pages → Run workflow**).

The workflow in `.github/workflows/pages.yml` builds a static export into `out/` and publishes it. GitHub Pages cannot run a Node server, so this project uses `output: "export"` in `next.config.ts`.

To preview a production-style Pages build locally:

```bash
# PowerShell
$env:GITHUB_PAGES="true"
$env:NEXT_PUBLIC_SITE_URL="https://allengleeson.github.io/safety"
npm run build
```

The exported files are in `out/`. `npm start` serves that folder (without the `/safety` prefix unless you built with `GITHUB_PAGES=true` and host it under that path).
