# dracor-blog

Source of [blog.dracor.org](https://blog.dracor.org), the blog of the [DraCor](https://dracor.org) project.

The blog is a [Jekyll](https://jekyllrb.com) site deployed via [GitHub Pages](https://pages.github.com). It was bootstrapped from the layout and visual identity of the [DraCor Summit](https://github.com/dracor-org/dracor-summit) site.

## Local development

```sh
bundle install
bundle exec jekyll serve
```

The site is then available at <http://localhost:4000>.

## Writing a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-slug.md` with this front matter:

```yaml
---
title: "Your post title"
date: 2025-12-01 10:00:00 +0100
author: dracor-org     # key from _data/authors.yml — keys are GitHub usernames.
                       # Can be a list, e.g. [ingoboerner, cmil]
tags: [DraCorOs]
excerpt: >
  One or two sentences that show up on the index page and in the RSS feed.
---
```

### Reblogging / cross-posting

If the post was originally published elsewhere, add:

```yaml
canonical_url: https://example.org/some-post
original_site: "Example Site"
```

The blog will render an "Originally published on [Example Site](…)" note and set the HTML `<link rel="canonical">` for SEO.

### Images

Always put images in a **per-post subfolder** under `assets/images/`, named after the post's date and slug. One post → one folder, even if the post only has a single image:

```
assets/images/2025-09-02-dracor-user-survey/results-chart.svg
assets/images/2026-03-02-dhd2026-vienna-poster-awards/superposter.jpg
```

Reference them in Markdown with the `relative_url` filter so the link works both on the staging deploy and on the final custom domain:

```markdown
![Chart of survey responses]({{ '/assets/images/2025-09-02-dracor-user-survey/results-chart.svg' | relative_url }})
```

Naming: lowercase, hyphenated, descriptive, no spaces or unicode.

**Reblogs:** for cross-posts (e.g. from `weltliteratur.net`) reference images as absolute URLs back to the source domain (`https://weltliteratur.net/images/foo.jpg`) rather than copying binaries into this repo.

**Sizing:** Jekyll does not resize. Export web-appropriate dimensions before committing (≤1600px wide for hero images, ≤1000px for inline). Prefer SVG for diagrams and logos, WebP or JPG for photos, PNG only when you need transparency.

## Funding

This blog is produced in the context of the DraCorOS project. We acknowledge the OSCARS project, which has received funding from the European Commission’s Horizon Europe Research and Innovation programme under grant agreement No. 101129751.
