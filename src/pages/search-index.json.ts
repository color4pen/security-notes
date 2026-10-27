import type { APIRoute } from 'astro';
import { allPosts, summary } from '../lib/posts';
import { taxonomyOf } from '../lib/taxonomy';

/** 紙面をまたいだ検索の件数表示に使う軽量インデックス（タブページから必要時に読む） */
export const GET: APIRoute = async () => {
  const posts = await allPosts();
  const index = posts.map((post) => {
    const taxonomy = taxonomyOf(post).map((tag) => tag.name);
    return {
      r: post.data.region,
      t: [...new Set([...taxonomy, ...post.data.tags])],
      s: `${post.data.title} ${post.data.tags.join(' ')} ${taxonomy.join(' ')} ${summary(post)}`.toLowerCase(),
    };
  });
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
