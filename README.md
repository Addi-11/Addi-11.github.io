# Aditi Singh - Portfolio

A professional, research-oriented portfolio and blog built with [Astro](https://astro.build/) and deployed to GitHub Pages at [addi-11.github.io](https://addi-11.github.io).

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Writing a blog post

The blog is markdown-driven. To publish a new post:

1. Create a folder under `src/content/blog/`, e.g. `src/content/blog/my-post/`.
2. Add a `README.md` (or `index.md`) inside it with this frontmatter:

   ```markdown
   ---
   title: "My Post Title"
   date: 2026-07-01
   summary: "One-line description shown in the blog list."
   tags: ["LLMs", "RL"]
   draft: false
   ---

   Write your post in Markdown here.
   ```

3. Commit and push to `main`.

That's it. The GitHub Action rebuilds the site and the post appears at
`/blog/my-post/`. Set `draft: true` to keep a post hidden in production while
you work on it (drafts are still visible in `npm run dev`).

Co-locate images next to the markdown file and reference them, or drop them in
`public/images/` and link with an absolute path like `/images/foo.png`.

## One-time deployment setup

This repo deploys via **GitHub Actions** (see `.github/workflows/deploy.yml`),
not from a branch. Enable it once:

> GitHub repo -> **Settings** -> **Pages** -> **Build and deployment** ->
> **Source** -> select **GitHub Actions**.

After that, every push to `main` builds and deploys automatically.

## Editing site content

Most page content (bio, experience, education, projects, skills, social links)
lives in a single file: [`src/data/profile.ts`](src/data/profile.ts). Edit it to
update the site without touching the components.

## Project structure

```
src/
  components/      UI sections (Hero, About, Experience, Projects, ...)
  content/blog/    one folder per blog post (markdown)
  data/profile.ts  all profile content
  layouts/         Base layout (head, nav, footer, scroll reveal)
  lib/blog.ts      blog helpers (slug, sorting, formatting)
  pages/           index.astro + /blog routes
  styles/          global.css design system
public/images/     static assets (project gifs, logos)
```
