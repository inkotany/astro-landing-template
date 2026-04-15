# 🚀 astro-template

A clean, ready-to-go Astro starter with everything wired up so you can skip the boring parts and start building.

---

## ✨ What's included

| Feature | Details |
|---|---|
| **Astro** | v4, strict TypeScript |
| **React** | Islands-ready with `client:*` directives |
| **Tailwind CSS** | Configured + class sorting on save |
| **shadcn/ui** | Pre-init'd, just run `npx shadcn add <component>` |
| **Path aliases** | `@/` maps to `src/` everywhere |
| **SEO** | `astro-seo` wired into `BaseLayout`, OG + Twitter ready |
| **robots.txt** | Dynamic endpoint, respects `PUBLIC_SITE_URL` |
| **Prettier** | Astro + Tailwind plugins, runs on commit |
| **Husky** | Pre-commit hook via `lint-staged` |
| **Env config** | All site-wide values in one place |

---

## 🏁 Getting started

```bash
# 1. Clone and install
git clone https://github.com/you/astro-template my-app
cd my-app
npm install

# 2. Copy env file and fill it in
cp .env.example .env

# 3. Start dev server
npm run dev
```

---

## ⚙️ Environment variables

Edit `.env` with your site's details:

```env
PUBLIC_SITE_NAME="My Site"
PUBLIC_SITE_URL="https://example.com"
PUBLIC_SITE_DESCRIPTION="Short description for SEO"
PUBLIC_SITE_AUTHOR="Your Name"
PUBLIC_TWITTER_HANDLE="@yourhandle"
```

All values flow through `src/config/site.ts` — import `siteConfig` wherever you need them.

---

## 🧱 Project structure

```
src/
├── components/
│   └── ui/          ← shadcn components go here
├── config/
│   └── site.ts      ← siteConfig from env vars
├── layouts/
│   └── BaseLayout.astro  ← SEO, fonts, global styles
├── lib/
│   └── utils.ts     ← cn() and other helpers
└── pages/
    ├── index.astro
    └── robots.txt.ts
```

---

## 🎨 Adding shadcn components

```bash
npx shadcn add button
npx shadcn add card dialog input
```

Components land in `src/components/ui/`. Use them in `.astro` files or React islands.

---

## 🔧 Scripts

```bash
npm run dev        # dev server at localhost:4321
npm run build      # production build
npm run preview    # preview the build
npm run format     # run prettier across everything
```

> Built with ☕ and [Astro](https://astro.build). Happy shipping.

madeinterry