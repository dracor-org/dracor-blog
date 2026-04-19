---
title: "DraCor Schema 1.4.0 released"
date: 2025-09-02 16:00:00 +0200
author: cmil
tags: [Schema]
excerpt: >
  Version 1.4.0 simplifies the markup for Wikidata IDs and other metadata and
  consolidates the corpus.xml format.
---

The [DraCor Schema 1.4.0](https://github.com/dracor-org/dracor-schema/releases/tag/1.4.0)
has been released today. With this release we deprecate the use of the
`standOff` element and instead recommend a largely simplified way of encoding
Wikidata IDs for plays. The introduction of a custom `dracorCorpus` root
element allows us to fully validate the corpus.xml files which provide the
metadata for a whole corpus.
