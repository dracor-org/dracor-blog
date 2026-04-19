---
title: "DraCor Schema 1.4.0 released"
date: 2026-04-19 16:00:00 +0200
author: cmil
tags: [Schema]
excerpt: >
  Version 1.4.0 simplifies the markup for Wikidata IDs and other metadata and
  consolidates the corpus.xml format.
---

With the release of
[DraCor Schema 1.4.0](https://github.com/dracor-org/dracor-schema/releases/tag/1.4.0)
we deprecate the use of the `standOff` element and instead recommend a largely
simplified way of
[encoding Wikidata IDs for plays](https://dracor.org/doc/odd#section-additional-metadata).The introduction of a custom `dracorCorpus` root element allows us to fully
validate the [corpus.xml files](https://dracor.org/doc/odd#section-corpus-xml)
which provide the metadata for a whole corpus.
