// README.md の記事一覧（国内・海外・脆弱性）を posts/ の front matter から作り直す。
// 並びはサイトと同じ公開日（date）の新しい順、同日はファイル名順。
// 使い方: npm run readme
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const posts = readdirSync('posts')
  .filter((file) => file.endsWith('.md'))
  .map((file) => {
    const text = readFileSync(`posts/${file}`, 'utf8');
    const front = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const field = (name) => {
      const raw = front.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'))?.[1]?.trim();
      if (raw === undefined) return undefined;
      return raw.startsWith('"') ? JSON.parse(raw) : raw.replace(/^'(.*)'$/, '$1');
    };
    return {
      file,
      title: field('title'),
      date: field('date'),
      region: field('region') ?? 'overseas',
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.file.localeCompare(b.file));

let readme = readFileSync('README.md', 'utf8');
for (const region of ['domestic', 'overseas', 'vuln']) {
  const start = `<!-- posts:${region}:start -->`;
  const end = `<!-- posts:${region}:end -->`;
  const lines = posts
    .filter((post) => post.region === region)
    .map((post) => `- ${post.date} [${post.title}](posts/${post.file})`);
  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (!pattern.test(readme)) throw new Error(`README.md に ${start} 〜 ${end} がありません`);
  readme = readme.replace(pattern, `${start}\n${lines.join('\n')}\n${end}`);
}
writeFileSync('README.md', readme);
console.log(`README.md の記事一覧を更新しました（${posts.length}本）`);
