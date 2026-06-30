import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

// Turn a content id like "my-post/README" or "my-post/index" into "my-post".
// Flat files like "my-post" are left untouched.
export function slugFromId(id: string): string {
  const cleaned = id.replace(/\/(readme|index)$/i, "");
  return cleaned.replace(/^\/+|\/+$/g, "");
}

export function postUrl(post: Post): string {
  return `/blog/${slugFromId(post.id)}/`;
}

// All non-draft posts, newest first. Drafts are hidden in production only.
export async function getPublishedPosts(): Promise<Post[]> {
  const all = await getCollection("blog");
  const visible = import.meta.env.PROD
    ? all.filter((p) => !p.data.draft)
    : all;
  return visible.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
