import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { editorialMarkdown } from './src/lib/editorial-markdown.mjs';

export default defineConfig({
  site: 'https://color4pen.github.io',
  base: '/security-notes',
  trailingSlash: 'always',
  output: 'static',
  markdown: {
    shikiConfig: { theme: 'github-light' },
    processor: unified({ remarkPlugins: [editorialMarkdown] }),
  },
  devToolbar: { enabled: false },
});
