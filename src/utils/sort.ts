import type { CollectionEntry } from "astro:content";

export function postOrderByCreatedAt(posts: any) {
	posts.sort((a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) => {
		return b.data.createDate.valueOf() - a.data.createDate.valueOf();
	});
	return posts;
}
