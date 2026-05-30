---
title: My Complete Note-Taking Workflow
published: 2026-03-04
updated: 2026-03-14
description: A practical walkthrough of how I capture, organize, and connect notes daily.
tags:
  - habits
  - productivity
image: notes.jpg
imageAlt: notes
imageOG: false
hideCoverImage: false
hideTOC: false
hideLocalGraph: false
keyword: ""
draft: false
redirects: my-note-taking-workflow
---

After years of trying different systems, I've landed on a workflow that actually sticks. Here's the full breakdown.

## Daily Capture

Every morning I open my daily note and jot down what's on my mind. Throughout the day, I capture anything interesting. Fleeting notes, quotes, article highlights, random ideas.

The rule: capture first, organize later. If I try to categorize in the moment, I lose the thought.

### What I Capture

Not everything deserves a note. Over time I've developed a filter:

- **Ideas I might act on.** Even half-formed ones.
- **Things that surprised me.** Surprise means my mental model was wrong, which means learning.
- **Connections between topics.** "This reminds me of..." is always worth writing down.
- **Quotes that resonate.** But only if I can articulate *why* they resonate[^1].

[^1]: A quote without your own commentary is just someone else's thought. The value comes from your reaction to it.

## Weekly Review

Every Sunday I spend 30 minutes reviewing the week's captures. This is where the magic happens:

- Promote fleeting notes to permanent notes
- Add links to related ideas
- Tag anything that connects to active projects
- Delete anything that no longer seems interesting

This is closely tied to the principles I wrote about in [Building a Second Brain](posts/building-a-second-brain/index.md). The review habit is what turns a pile of notes into a knowledge system.

### The Review Checklist

I keep a simple template for the weekly review:

1. Open this week's daily notes
2. Star anything worth keeping
3. For each starred item: create a proper note or add it to an existing one
4. Link the new notes to at least two existing notes
5. Check the "unlinked" list for orphaned notes
6. Archive the daily notes

## Tools and Setup

My stack:

| Tool | Purpose | Why I chose it |
|------|---------|----------------|
| **Obsidian** | Writing and linking | Local-first, Markdown, incredible plugin ecosystem |
| **Readwise** | Book/article highlights | Auto-syncs to Obsidian |
| **Physical notebook** | Meetings and sketches | Some things are better on paper |

I publish my notes using a static site generator. The same principles that make code maintainable (clear structure, minimal duplication, good naming) apply to knowledge bases too.

### Folder Structure

I keep it minimal:

```
vault/
  daily/          # Daily notes, auto-generated
  notes/          # Permanent notes, linked
  projects/       # Active project folders
  references/     # Source material
  templates/      # Note templates
```

The key insight: folders are for *types of notes*, not *topics*. Topics emerge from links and tags, not from where a file lives[^2].

[^2]: This is the difference between a filing cabinet (hierarchical) and a wiki (networked). Both have value, but for knowledge work, the network wins.

## Note Types

Not all notes are the same. I use three tiers:

### Fleeting Notes

Quick captures. A sentence or two. No formatting required. These live in daily notes and get processed during the weekly review. Most of them get deleted or absorbed into permanent notes.

### Literature Notes

Summaries and reactions to things I've read. Always include the source and my own commentary. "The author argues X. I think this connects to Y because Z."

### Permanent Notes

The building blocks of the system. Each one is:

- **Atomic**: one idea per note
- **Self-contained**: makes sense without context
- **Linked**: connected to at least two other notes
- **Written in my own words**: not a copy-paste

## What I've Learned

The biggest lesson: your note-taking system should reduce anxiety, not create it. If you feel guilty about an inbox of unprocessed notes, your system is too rigid.

> [!tip] The golden rule of note-taking
> If your system makes you feel guilty instead of productive, simplify it. Delete the rules that create pressure without creating value.

The [Kaizen](posts/kaizen/index.md) approach applies perfectly here. Don't try to build the perfect system in a weekend. Make one small improvement each week. After a few months, you'll have something that genuinely serves how you think.

Keep it simple. Link generously. Review regularly. That's it.
