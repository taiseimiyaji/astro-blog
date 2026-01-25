import type { CollectionEntry } from "astro:content";

export function postOrderByCreatedAt(posts: CollectionEntry<"blog">[]) {
	posts.sort((a, b) => {
		return b.data.createDate.valueOf() - a.data.createDate.valueOf();
	});
	return posts;
}
