import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({
		base: "./src/content/blog",
		pattern: "**/*.{md,mdx}",
		generateId: ({ data }) => String(data.slug),
	}),
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()),
		createDate: z.coerce.date(),
		updateDate: z.coerce.date(),
		slug: z.string(),
		draft: z.boolean().optional(),
	}),
});

export const collections = { blog };
