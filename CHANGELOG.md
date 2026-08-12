# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Entries before this file existed were reconstructed retroactively from the git
history, each dated to the last commit of the work it covers.

## [1.6.0] - 2026-08-12

### Added

- Four new articles: "Focused Coherence", "The Right Tool for the Work", "AI Like Consciousness", and "The Love of Wisdom, Made Runnable". The last two are marked `published: false` until banner and thumbnail art exists, so they are reachable at their URLs but stay out of every listing.
- Passthrough copy for `src/shinbun`, where Shinbun's daily editions land.

### Fixed

- Article markdown renamed to match its containing folder so relative images resolve.
- Article front matter uses `subtitle` rather than `description`, matching what the layout reads.
- Reference URLs in "Focused Coherence" are now clickable links.

## [1.5.0] - 2025-02-19

### Added

- `/apps` portfolio section: eight project templates, written content, retina-resolution thumbnails, and realigned lead photos.
- Modal viewer for portfolio content, with the open item's id reflected in the URL hash so specific entries can be bookmarked and shared.
- Modal viewer for the art gallery.
- Trail-maps demo for mtbco, served from a passthrough-copied static directory.
- Art link on the homepage.

### Changed

- Portfolio layout rebuilt on CSS grid so it reflows properly at small widths.
- Homepage intro copy reworked, nav font size increased, and the CV link dropped from the homepage.

### Fixed

- App images moved into the static images folder to stop them colliding with the template system.
- Missing thumbnail for Workforce Finder and missing description for Trailmaps.
- Alignment on several portfolio samples, plus minor CSS accessibility issues.
- CV links to articles that were not displaying their images.
- Trail-maps init function and relative path references that broke in production.

## [1.4.0] - 2025-01-07

### Added

- Full `/cv` page with the CV downloadable as both PDF and RTF.
- Fathom analytics script across all page templates.
- New homepage bullets.

### Changed

- CV content updated repeatedly through the period: education and apps sections, Computechnosoft description, latest wording, and dates.
- CV skill lists restyled for legibility, with improved colour contrast on the bullets, and the headshot moved into the page title.

### Removed

- References section from the CV.

### Fixed

- Verold URL and demo link on `/web`, with a note added that Verold is no longer active.
- CV page title, and the links to download the CV PDF.

## [1.3.0] - 2024-09-26

### Added

- Tag system for the words section: `tagList` and `wordTags` collections in the Eleventy config, plus tag-list and per-tag index pages.
- The remaining articles carried over from the old website, and further articles through August and September 2024.

### Changed

- Art moved from `/art` to `/arts` and became a tagged collection alongside words, sharing the same tag infrastructure.
- Footer recommendations limited to six articles.
- Homepage description reworded.

## [1.2.0] - 2023-12-19

### Added

- Words section: Sass build system, base typography, and a colour palette with matching blockquote styles.
- Article template with header, footer, tag list, subtitle, and meta information.
- Banner images on article pages.
- Article list thumbnails and simplified URIs.
- "More articles" footer listing, with the current page filtered out.
- `/words` index page and a separate `/words/articles` index page.
- First article: "What is a JWT".
- Beginnings of an image processor built on `eleventy-img`.
- Responsive styles across the words section.

### Fixed

- Multi-line header and date spacing.
- Code block overflow at small widths.
- Syntax highlighting.
- Banner image causing horizontal scroll.
- List margins aligned with body copy, and paragraph/image spacing.

## [1.1.0] - 2023-11-13

### Added

- New homepage and `/web` section.
- `/about` page carrying the first CV draft.
- Legacy art page, with the Instagram link surfaced as "photos".

### Fixed

- Eleventy passthrough copy for `/javascripts` and `/about/cv`.

## [1.0.0] - 2022-12-17

### Added

- Initial Eleventy scaffold: build config, `src`/`build` directory layout, and favicon.
- Nunjucks layouts for the default, art, web, and words sections.
- Art collection seeded with the first eleven pieces and their metadata.
