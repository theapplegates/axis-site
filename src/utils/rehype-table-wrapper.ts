import type { Root, Element } from 'hast';
import { visit } from 'unist-util-visit';

/**
 * Wraps every <table> in a <div class="table-wrapper"> so wide tables
 * scroll horizontally inside their container on mobile instead of forcing
 * the whole page to scroll. The wrapper's overflow-x styling lives in
 * src/styles/global.css.
 */
export function rehypeTableWrapper() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (
        node.tagName !== 'table' ||
        index === undefined ||
        !parent ||
        !('children' in parent)
      ) return;

      // Skip if already wrapped (re-processing safety)
      if ((parent as Element).tagName === 'div' &&
          Array.isArray((parent as Element).properties?.className) &&
          ((parent as Element).properties!.className as string[]).includes('table-wrapper')) {
        return;
      }

      const wrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrapper'] },
        children: [node],
      };

      (parent as Element).children[index] = wrapper;
    });
  };
}

export default rehypeTableWrapper;
