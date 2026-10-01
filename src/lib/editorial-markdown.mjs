// Keep source Markdown unchanged; apply presentation at build time.

const text = (node) =>
  node.value ?? (node.children ?? []).map((child) => text(child)).join('');

// 要点枠の小見出しと表示の種類。ここにない見出し名もそのまま表示できる。
const summaryKinds = [
  [/^(発表された事実|わかったこと|影響バージョン|影響範囲)/, 'fact'],
  [/^わかっていないこと/, 'unknown'],
  [/^関係しそうな既知の手口/, 'analysis'],
  [/^今すぐやること/, 'action'],
];
const summaryKind = (label) =>
  summaryKinds.find(([pattern]) => pattern.test(label))?.[1] ?? 'other';

/**
 * 「## 要点」から次の「##」見出しまでを、記事冒頭の要点枠にする。
 * 枠の中の「### 見出し」ごとに項目を分ける。
 */
function summaryBox(tree) {
  const start = tree.children.findIndex(
    (node) =>
      node.type === 'heading' &&
      node.depth === 2 &&
      text(node).trim() === '要点',
  );
  if (start === -1) return;
  let end = tree.children.findIndex(
    (node, index) =>
      index > start && node.type === 'heading' && node.depth <= 2,
  );
  if (end === -1) end = tree.children.length;
  const body = tree.children.slice(start + 1, end);
  const items = [];
  let intro = [];
  for (const node of body) {
    if (node.type === 'heading' && node.depth === 3) {
      const label = text(node).trim();
      items.push({
        type: 'summaryItem',
        data: {
          hName: 'div',
          hProperties: {
            className: ['summary-item', `summary-${summaryKind(label)}`],
          },
        },
        children: [
          {
            ...node,
            data: { hProperties: { className: ['summary-label'] } },
          },
          {
            type: 'summaryBody',
            data: {
              hName: 'div',
              hProperties: { className: ['summary-body'] },
            },
            children: [],
          },
        ],
      });
    } else if (items.length) {
      items.at(-1).children[1].children.push(node);
    } else {
      intro.push(node);
    }
  }
  const box = {
    type: 'summaryBox',
    data: {
      hName: 'section',
      hProperties: { className: ['summary-box'], ariaLabel: '要点' },
    },
    children: [
      {
        type: 'paragraph',
        data: { hProperties: { className: ['summary-title'] } },
        children: [{ type: 'text', value: '要点' }],
      },
      ...intro,
      ...items,
    ],
  };
  tree.children.splice(start, end - start);
  // 書いた位置にかかわらず、本文の冒頭（h1の直後）に置く。
  tree.children.unshift(box);
}

export function editorialMarkdown() {
  return (tree) => {
    tree.children = tree.children.filter(
      (node) => !(node.type === 'heading' && node.depth === 1),
    );
    for (const node of tree.children) {
      if (
        node.type === 'paragraph' &&
        node.children?.length === 1 &&
        node.children[0].type === 'strong'
      ) {
        const label = node.children[0].children
          ?.map((child) => child.value ?? '')
          .join('');
        if (/^(事実|考察)(?:（.*）)?$/.test(label ?? '')) {
          node.data = {
            hProperties: {
              className: [
                'editorial-label',
                label.startsWith('事実') ? 'fact' : 'analysis',
              ],
            },
          };
        }
      }
    }
    summaryBox(tree);
  };
}
