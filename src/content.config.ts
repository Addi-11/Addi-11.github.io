import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each blog post lives in its own folder under src/content/blog/.
// A post is published by adding `<slug>/index.md` (or any .md / README.md)
// with the frontmatter below and pushing to GitHub.
const blog = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional().default(""),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
