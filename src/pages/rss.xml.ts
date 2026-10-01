import type { APIRoute } from 'astro';
import { allPosts, postHref, summary } from '../lib/posts';
const xml = (value: string) =>
  value.replace(
    /[<>&"']/g,
    (char) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
      })[char]!,
  );
export const GET: APIRoute = async ({ site }) => {
  const posts = await allPosts();
  const home = new URL(import.meta.env.BASE_URL, site).href;
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>security-notes</title><link>${xml(home)}</link><description>security-notesの記事更新</description><language>ja</language>${posts
      .map((post) => {
        const url = new URL(postHref(post), site).href;
        return `<item><title>${xml(post.data.title)}</title><link>${xml(url)}</link><guid isPermaLink="true">${xml(url)}</guid><pubDate>${post.data.date.toUTCString()}</pubDate><description>${xml(summary(post))}</description></item>`;
      })
      .join('')}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
};
