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

## Funding

This blog is produced in the context of the DraCorOS project. We acknowledge the OSCARS project, which has received funding from the European Commission’s Horizon Europe Research and Innovation programme under grant agreement No. 101129751.
