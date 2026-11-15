# Rahul Dev: portfolio

Personal site and blog built with [Astro](https://astro.build). Layout modelled on sonnet.io.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Edit content

- Personal details and links: `src/site.ts`
- Work history, education, publications, projects, skills: `src/resume.ts`
- Blog posts: Markdown files in `src/content/blog/` (front matter: `title`, `description`, `date`, optional `draft: true`)
- Colors and layout: `src/styles/global.css` (the `:root` variables at the top)

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repo. Vercel detects Astro automatically.
3. Set `site` in `astro.config.mjs` to the final URL so the RSS feed links are right.

Every push to `main` redeploys, and pull requests get preview URLs.
