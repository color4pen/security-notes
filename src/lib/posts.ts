import { getCollection, type CollectionEntry } from 'astro:content';
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (path = '') => `${base}/${path.replace(/^\//, '')}`;
export const dateLabel = (date: Date) =>
  date.toISOString().slice(0, 10).replaceAll('-', '.');
export const postHref = (post: CollectionEntry<'posts'>) =>
  href(`notes/${post.id}/`);
export function summary(post: CollectionEntry<'posts'>) {
  if (post.data.description) return post.data.description;
  const firstBullet = (post.body ?? '').match(/^[-*] (.+)$/m)?.[1] ?? '';
  const plain = firstBullet
    .replace(/\*\*|`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  return plain.length > 135 ? plain.slice(0, 135) + '…' : plain;
}
export const readingMinutes = (post: CollectionEntry<'posts'>) =>
  Math.max(1, Math.ceil((post.body?.length ?? 0) / 600));
export async function allPosts() {
  return (await getCollection('posts')).sort(
    (a, b) =>
      b.data.date.valueOf() - a.data.date.valueOf() || a.id.localeCompare(b.id),
  );
}
