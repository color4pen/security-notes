// Keep source Markdown unchanged; apply presentation at build time.
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
  };
}
