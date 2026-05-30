import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

/**
 * Detects whether the markdown AST contains any KaTeX math nodes
 * (created by `remark-math` and the Obsidian display-math plugin).
 *
 * Writes the result to `file.data.astro.frontmatter.hasMath` so the
 * value is exposed to layouts via `remarkPluginFrontmatter` from
 * `await render(entry)`. The layout passes it through to BaseHead,
 * which conditionally injects the KaTeX stylesheet — saving a
 * cross-origin request on every page that doesn't actually use math.
 *
 * Must be registered AFTER `remarkMath` and any custom math-emitting
 * plugins (e.g. `remarkObsidianDisplayMath`) so their nodes exist.
 */
export default function remarkDetectMath() {
  return (tree: Root, file: any) => {
    let hasMath = false;
    visit(tree, (node: any) => {
      if (hasMath) return;
      if (node.type === 'math' || node.type === 'inlineMath') {
        hasMath = true;
      }
    });
    file.data = file.data || {};
    file.data.astro = file.data.astro || {};
    file.data.astro.frontmatter = file.data.astro.frontmatter || {};
    file.data.astro.frontmatter.hasMath = hasMath;
  };
}
