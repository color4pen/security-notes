import data from '../data/taxonomy.json';
import { href, type Post } from './posts';

/**
 * タグの分類（docs/tagging.md）。
 * front matter のタグはそのまま残し、ここで「攻撃手法・対象技術・インシデント種別」の
 * 分類タグに束ねる。members のどれかを持つ記事が、その分類タグの記事になる。
 */
export interface TaxonomyTag {
  name: string;
  slug: string;
  members: string[];
  category: string;
}
export interface TaxonomyCategory {
  name: string;
  description: string;
  tags: TaxonomyTag[];
}
export const categories: TaxonomyCategory[] = data.categories.map((category) => ({
  ...category,
  tags: category.tags.map((tag) => ({ ...tag, category: category.name })),
}));
export const taxonomyTags = categories.flatMap((category) => category.tags);
/** 表記ゆれ（front matter で使わない別名 → 正しい表記） */
export const tagAliases: Record<string, string> = data.aliases;

const byMember = new Map<string, TaxonomyTag[]>();
for (const tag of taxonomyTags)
  for (const member of tag.members)
    byMember.set(member, [...(byMember.get(member) ?? []), tag]);

/** 記事が属する分類タグ（分類の並び順） */
export function taxonomyOf(post: Post): TaxonomyTag[] {
  const found = new Set(post.data.tags.flatMap((tag) => byMember.get(tag) ?? []));
  return taxonomyTags.filter((tag) => found.has(tag));
}
/** front matter のタグが分類タグのメンバーなら、その分類タグ */
export const taxonomyFor = (tag: string) => byMember.get(tag)?.[0];
export const tagHref = (tag: TaxonomyTag) => href(`tags/${tag.slug}/`);
export const tagsIndexHref = href('tags/');
/** 分類にないタグ（固有名詞・CVE など）は全記事検索へ */
export const searchHref = (query: string) =>
  `${href('')}?q=${encodeURIComponent(query)}`;
