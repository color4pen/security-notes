import { getCollection, type CollectionEntry } from 'astro:content';
export type Post = CollectionEntry<'posts'>;
export type Region = Post['data']['region'];
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (path = '') => `${base}/${path.replace(/^\//, '')}`;
export const dateLabel = (date: Date) =>
  date.toISOString().slice(0, 10).replaceAll('-', '.');
export const postHref = (post: Post) => href(`notes/${post.id}/`);
export const repoUrl = 'https://github.com/color4pen/security-notes';
export const issueHref = (issue: number) => `${repoUrl}/issues/${issue}`;

/** 紙面（国内=社会面 / 海外=国際面）の表示情報 */
export const regions = {
  domestic: {
    label: '国内',
    page: '社会面',
    path: 'domestic/',
    lead: '国内の組織・サービスで起きたインシデントを、続報を追いながら記録します。',
    empty: '国内の記事は準備中です。',
  },
  overseas: {
    label: '海外',
    page: '国際面',
    path: 'overseas/',
    lead: '海外の脆弱性悪用・侵害事例を、根本原因と対策の観点で読み解きます。',
    empty: '海外の記事は準備中です。',
  },
} as const satisfies Record<Region, object>;
export const regionHref = (region: Region) => href(regions[region].path);

/** 最終更新日（updated がなければ公開日） */
export const lastModified = (post: Post) => post.data.updated ?? post.data.date;
/** 公開後に更新（続報の追記など）があったか */
export const isUpdated = (post: Post) =>
  !!post.data.updated && post.data.updated.valueOf() > post.data.date.valueOf();
export const isOngoing = (post: Post) => post.data.status === 'ongoing';

export function summary(post: Post) {
  if (post.data.description) return post.data.description;
  // 要点枠（## 要点）の中の箇条書きではなく、本文冒頭の箇条書きを要約に使う。
  const body = (post.body ?? '').replace(
    /^##[ \t]+要点[ \t]*\n[\s\S]*?(?=^##[ \t])/m,
    '',
  );
  const firstBullet = body.match(/^[-*] (.+)$/m)?.[1] ?? '';
  const plain = firstBullet
    .replace(/\*\*|`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  return plain.length > 135 ? plain.slice(0, 135) + '…' : plain;
}
export const readingMinutes = (post: Post) =>
  Math.max(1, Math.ceil((post.body?.length ?? 0) / 600));
export async function allPosts() {
  return (await getCollection('posts')).sort(
    (a, b) =>
      b.data.date.valueOf() - a.data.date.valueOf() || a.id.localeCompare(b.id),
  );
}
/** 紙面ごとの記事。国内は続報を追うため更新日順、海外は公開日順。 */
export function postsIn(posts: Post[], region: Region) {
  const list = posts.filter((post) => post.data.region === region);
  if (region === 'domestic')
    list.sort(
      (a, b) =>
        lastModified(b).valueOf() - lastModified(a).valueOf() ||
        b.data.date.valueOf() - a.data.date.valueOf() ||
        a.id.localeCompare(b.id),
    );
  return list;
}
