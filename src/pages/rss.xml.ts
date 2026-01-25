import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog: CollectionEntry<'blog'>[] = await getCollection('blog');
  const posts: CollectionEntry<'blog'>[] = blog
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.createDate.getTime() - a.data.createDate.getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site?.toString() || SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.createDate,
      description: post.body.slice(0, 200) + '...',
      link: `/posts/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>ja</language>`,
  });
}
