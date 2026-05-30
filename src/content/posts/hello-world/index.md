---
title: Hello, World
published: 2026-02-02
updated: 2026-04-02
description: Welcome to your new Axis site. This is a sample post to get you started.
tags: []
image: the-globe.jpg
imageAlt: The globe
imageOG: false
hideCoverImage: false
hideTOC: false
hideLocalGraph: false
keyword: ""
draft: false
---

Welcome to Axis. This is a sample post. Edit or remove it and start writing.

## What's Included

Axis is a premium Astro theme built for [Vault CMS](https://docs.vaultcms.org) and designed to be configured entirely from inside Obsidian. Use **Axis Settings** in Obsidian for themes, navigation, custom head and footer snippets, optional cookie consent, and more; [Configuration](#configuration) spells out the highlights.

### Site Features

- **17 color themes** with a live theme selector in the command palette
- **Dark mode** with system-aware or manual toggle
- **Command palette** (`Ctrl+K`) for searching posts, pages, projects, docs, and quick actions
- **Site-wide search** powered by the command palette
- **Custom theme generation** to extract colors from your Obsidian theme and create your own
- **OG image generation** with automatic Open Graph images for every post
- **JSON-LD structured data** for better SEO (BlogPosting, WebPage, WebSite schemas)
- **RSS feed** and **sitemap** generated automatically
- **Configurable navigation** with nested dropdown menus and external link support

### Content Types

- **Posts** for blog content with tags, cover images, and reading time
- **Pages** for static content (About, Setup, etc.)
- **Projects** for showcasing your work with status badges and links[^1]
- **Docs** for documentation with category grouping and sidebar navigation

[^1]: Projects support `active`, `wip`, and `archived` status badges, plus optional links to a repository and live URL.

### Writing Features

Axis supports a rich set of Markdown and Obsidian-compatible content features:

| Feature | Syntax | Example |
|---------|--------|---------|
| Headings | `## H2` through `#### H4` | This page's sections |
| Bold / Italic | `**bold**` / `*italic*` | **bold** and *italic* |
| Links | `[text](url)` | Standard Markdown links |
| Images | `![alt](image.jpg)` | With automatic WebP conversion |
| Code blocks | Triple backticks | With syntax highlighting |
| Tables | Pipe syntax | This table |
| Footnotes | `[^1]` | See the footnote above |
| Callouts | `> [!type]` | See examples below |
| Math | `$inline$` or `$$block$$` | KaTeX rendering |
| Mermaid | Fenced `mermaid` blocks | Diagrams rendered on the page |
| Highlights | `==highlighted==` | ==highlighted text== |
| Image grids | Multiple images in sequence | Responsive grid layouts |

### Post Features

- **Table of contents** generated from headings, configurable depth
- **Reading time and word count** shown on each post
- **Related posts** suggested based on shared tags and links
- **Linked mentions** (backlinks) showing which other posts link here
- **Local knowledge graph** visualizing how posts connect
- **Previous/next navigation** between posts
- **Cover images** with configurable aspect ratios and display options
- **Draft support** with underscore prefix or frontmatter flag[^2]
- **Redirect tracking** via the `redirects` property for SEO-safe URL changes

[^2]: Drafts are visible during development (`pnpm dev`) but hidden in production builds. They also won't appear in the graph, RSS feed, or sitemap.

## Callout Examples

Axis supports Obsidian-style callouts. Here are the available types:

> [!note] A note
> Use notes for general supplementary information that adds context.

> [!tip] A helpful tip
> Tips highlight best practices or shortcuts the reader might not know.

> [!warning] Be careful
> Warnings flag potential issues or things that could go wrong.

> [!important] Key information
> Important callouts draw attention to critical details.

> [!caution] Proceed with care
> Caution callouts are stronger than warnings. Use them for actions that could cause data loss or breaking changes.

## Configuration

Use the **Axis Settings** Obsidian plugin as the main way to tune the site without hand-editing files:

- **Themes and layout**: Themes, fonts, content width, feature toggles, and navigation (including nested menus and external links) from the plugin UI.
- **Custom snippets**: **Head** and **end-of-body** fields inject HTML or scripts at the end of `<head>` and before `</body>`—handy for analytics, extra meta, or third-party tags. The plugin writes values into `src/config.ts` for the build.
- **Cookie consent (optional)**: Enable a minimal EU-style banner. When it is on, those custom snippets run only after the visitor chooses **Accept all**; off by default.

If you prefer, edit `src/config.ts` directly. Every option uses `[CONFIG:KEY]` markers that the plugin reads and writes.

### Getting Help

- **Documentation**: [docs.vaultcms.org](https://docs.vaultcms.org)
- **Community**: [Join the Discord](https://discord.gg/gyrNHAwHK8)
- **Updates**: Run `pnpm run update` with your license key to get the latest version
