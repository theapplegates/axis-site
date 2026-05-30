---
title: Reading Tracker
description: A minimal CLI and web dashboard for tracking books and highlights. Export from Kindle, Apple Books, or plain markdown.
date: 2024-08-22
categories:
  - Example
repositoryUrl: ""
projectUrl: ""
status: wip
image: grabbing-a-book.jpg
imageAlt: grabbing a book
hideCoverImage: false
hideTOC: false
draft: false
featured: false
---

A side project for people who read across several apps and want one place to see what they’ve finished and what they’re reading next.

## Why I built it

Highlights and notes were scattered: Kindle, Apple Books, physical books with margin notes, and markdown files. I wanted a single list of books with optional highlights, plus a simple way to add “to read” items without opening a heavy app.

## How it works

- **Ingest:** Drop exported highlights (Markdown or CSV) into a folder; the script parses and merges them into a single JSON store.
- **CLI:** Commands like `reading add`, `reading list`, and `reading stats` for quick check-ins from the terminal.
- **Dashboard:** A small Astro site reads the same JSON and shows progress, recent highlights, and a backlog. No database, no auth—just static files.

## Stack

Node scripts for ingestion, Astro for the dashboard, and a single JSON file as the source of truth. Fits into a daily backup or git repo.
