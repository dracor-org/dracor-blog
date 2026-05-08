---
title: "The EcoCor Hackathon: A Human's DraCor Adaptation Story"
date: 2026-05-06 10:00:00 +0200
author: ingoboerner
tags: [DraCorOS, Conference Report]
excerpt: >
  Three days at the Potsdam "Environments in and as Networks" hackathon —
  where I came to build an MCP server, ended up redesigning the API to
  carry multiple annotation layers, and discovered that EcoCor was
  becoming a useful test case for how far DraCor's infrastructure can
  travel.
---

*Draft — work in progress; image placeholders, work-package number, and minor copy still to fill in.*

This is one of two parallel posts about the **EcoCor strand of the [Environments in and as Networks Hackathon](https://www.uni-potsdam.de/de/digital-humanities/aktivitaeten/environmental-digital-humanities-hackathon)** organized by the [Network of Digital Humanities of the University of Potsdam](https://www.uni-potsdam.de/de/digital-humanities), 15–17 April 2026. This is the "(mostly) human's view" (resulting from voice interaction with Claude Code); the [companion post]({% post_url 2026-05-06-ecocor-hackathon-agents-adaptation-story %}) is written entirely by the coding agent that worked alongside me. I had asked it for what I thought would be a neutral summary of what we had done together — framed, somewhat carelessly on my part, as a request "from its perspective". Reading that sloppy prompt against the surrounding context (I was collecting material for a blog post), the agent wrote one of its own. The blog post covers the technical things very accurately, but also shows signs of an overconfident, context-unaware coworker. I am sharing it for two reasons: as a substantive account of what the agent actually did during our work, and as an artifact of a strange feature of agentic AI: These tools can confidently present themselves as active participants in events, and the temptation to read them as "colleagues" with their own agency is real, even when one knows better. Publishing the post is not an endorsement of that personification of coding agents, though. So, here is how I remembered the Hackathon:

I joined the Hackathon for the **EcoCor: The Next Generation challenge** in the building of the Brandenburg Museum for Future, Present and Past — an ideal venue for such a future experiment — with two main things on my agenda: build a Model Context Protocol (MCP) server for **[EcoCor](https://ecocor.org)**, and finally ship the long-planned but never-finished [DTS](https://dtsapi.org/specifications) addition to the EcoCor API. In retrospect I spent most of the time involved in a third thing that wasn't very high on my wishlist: a re-design of the data model and API to carry **multiple annotation layers**. And actually, most of that time was spent **babysitting several parallel Claude Code agents across as many VS Code tabs** while they did most of the actual coding work. This was an eye-opening experience and by the end I had a much clearer realisation of what a deliverable of DraCorOS' **Work Package 3 — *DraCor Open Source*** — could actually look like in practice under current circumstances: not the code itself, but the means for other communities to produce it themselves — a harness for AI agents, not a finished product. For context: Our Work Package has set out to *"further develop the DraCor software into an independent Open Source solution for hosting and distributing (programmable) research corpora beyond dramatic texts"*. For one, EcoCor was the ideal testing ground for that and after seeing what these coding agent(s) can do in a couple of days, we have to rethink what such an "Open ~~Source~~ Solution" could actually be in the Age of Agentic AI...

## EcoCor: The Original Series  🐎 🌳

EcoCor — *"Programmable Corpora for Research in Ecocriticism"* — has its origin in the predecessor of this hackathon: the [Environmental Data, Media and the Humanities-Hackathon](https://www.uni-potsdam.de/de/digital-humanities/aktivitaeten/henriette-herz-hackathons/environmental-data-media-and-the-humanities-hackathon) of 31 May – 2 June 2023, where we set out — to quote the [challenge page](https://www.uni-potsdam.de/de/digital-humanities/aktivitaeten/henriette-herz-hackathons/environmental-data-media-and-the-humanities-hackathon/ecocor-a-programmable-corpus-for-research-in-ecocriticism) — to prototype *"a programmable corpus (incl. an API) for computational research of literary texts that have repeatedly served as references for research in ecocriticism"*. That phrase was of course a deliberate echo of DraCor's own pitch: "Programmable Corpora" as an infrastructure pattern, now applied to ecocriticism.

At the start of the 2026 Hackathon — three years after EcoCor's rapid prototyping at the 2023 hackathon — the system was already substantial. The fork ran a working eXist-DB-powered [API](https://ecocor.org/doc/api) (see [code repo](https://github.com/EcoCor/ecocor-api)) derived from the DraCor codebase by **Carsten Milling**. The first EcoCor hackathon had actually run a few months ahead of our own [DraCor API v1 streamlining]({% post_url 2023-12-01-streamlining-the-dracor-api %}) (December 2023), and ideas cross-pollinated in both directions. **Henny Sluyter-Gäthje** and **Daniil Skorinkin** had built an entity **extractor microservice** (a FastAPI service that ran a curated word list of plants and animals over each text, here's the [repo](https://github.com/EcoCor/ecocor-extractor)). The frontend (see [repo](https://github.com/EcoCor/ecocor-frontend)) was designed by DraCor's Art Director **Mark Schwindt** (get the [T-Shirts](https://www.amazon.de/s?rh=n%3A77028031%2Cp_4%3AEcoCor)!); its implementation, alongside Carsten's other DraCor adaptation work, helped seed what became the [DraCor React component library](https://www.npmjs.com/package/@dracor/react). Two language corpora were already in place: German *eco-de* ([repo](https://github.com/EcoCor/eco-de)) and English *eco-en* ([repo](https://github.com/EcoCor/eco-en)).

## EcoCor: Next Generation's challenge – the Annotation Layers 🙈

The hackathon's [EcoCor challenge](https://www.uni-potsdam.de/de/digital-humanities/aktivitaeten/environmental-digital-humanities-hackathon/challenges/ecocor-the-new-generation), titled **"EcoCor: The Next Generation"**, had several subchallenges. Two of them collided usefully on day 1: *Dance of the Taggers* (**Mareike Schumacher's** strand on entity-annotation tools and approaches) and *EcoCor Infrastructure*, which was framed in the challenge brief as

> *"Redesign the platform to accommodate multiple annotation layers, output via API, and develop new word cloud visualizations."*

In the kick-off discussion it became clear that the existing single-layer setup — one extractor, one word list, one set of entity hits per text — could not carry what the *Dance of the Taggers* was all about: polyperspectivism. The team had several taggers that they wanted to compare: the existing dictionary-lookup EcoCor Extractor, the **NTEE** annotations produced by the [NEISS TEI Entity Enricher](https://github.com/NEISSproject/tei_entity_enricher), a neural tagger which only runs on Mareike's pre-historic and super-heavy laptop, LLM-based annotations coming out of pipelines by **Thomas Nikolaus Haider** et al., a carefully produced gold-standard layer worked on by **Clara Helmig** and **Henny Sluyter-Gäthje**, and linguistic features (POS, lemma) comming "for free" from spaCy used in the EcoCor Extractor. Each of them is an "opinion" about the text that a researcher might want to query, compare, or override. 

And, because Programmable Corpora are about APIs, we wanted to try implementing this in the API. Multiple parallel annotation layers, with provenance, addressable per token, was something **DraCor itself had never built**. We had thought about it more than once and never decided to tackle it: the "Vanilla" approach to DraCor's TEI files deliberately keeps linguistic markup out, on the assumption that any embedded NLP would quickly become outdated as new generations of tools appear. And we had not seen a strong need for the kind of multiple, sometimes-conflicting annotations that EcoCor suddenly required. With the solution we came up with on Day 2, we found ourselves — somewhat — returning to a TEI markup we had thrown out of ShakeDraCor back in 2022 (see [pull request](https://github.com/dracor-org/shakedracor/pull/6)) in striving for "Vanilla Corpora".

## Going Stand-off 🏄 🌊

The technical decision was to move every annotation off the source TEI and into separate, sibling stand-off layer files. The base text stayed somewhat *vanilla* — TEI without inline linguistic markup (remember, ShakeDraCor...), but every word wrapped in `<w xml:id="…">` with stable identifiers. Anything anyone wants to *say about* the text — a POS tag, a plant lemma, a gold-standard entity — lives in its own TEI file as an `<annotation>` (in `<listAnnotation>` inside `<standOff>` as a sibling to the header), points at those token IDs via `@target`, and carries its own `<teiHeader>` with provenance: who or what produced it, on what date, with which tool version.

A simple annotation generated by NTEE and extracted into a stand-off layer pointing at a vanilla tokenized file, for example, looks like this:

```xml
<annotation target="#eco_de_000032_30_1310" ana="#cat-habitat"/>
```

The metadata on the tagging process resulting in the annotations can be documented in the TEI header inside `<encodingDesc>`:

```xml
<encodingDesc>
  <classDecl>
    <taxonomy xml:id="ecocor-entity-types">
      <category xml:id="cat-animal"><catDesc>Animal — Animalia</catDesc></category>
      <category xml:id="cat-plant"><catDesc>Plant — Plantae</catDesc></category>
      <category xml:id="cat-habitat"><catDesc>Habitat — landscape, water body, terrain</catDesc></category>
    </taxonomy>
  </classDecl>
  <appInfo>
    <application ident="tei_entity_enricher" version="">
      <label>NEISS TEI Entity Enricher (NTEE)</label>
      <ref target="https://github.com/NEISSproject/tei_entity_enricher"/>
    </application>
  </appInfo>
</encodingDesc>
```

The full set of layered files lives in the `eco-de` repository: the [annotation layers](https://github.com/EcoCor/eco-de/tree/90b6166aa14e73105e9375db767caf167371b7ce/annotations) and the [tokenized base files](https://github.com/EcoCor/eco-de/tree/90b6166aa14e73105e9375db767caf167371b7ce/tokenized) whose `<w xml:id>` elements the annotations target. Both links are pinned to a post-hackathon commit — by which point NTEE had been run across all texts, not just the ten testing samples from the hackathon itself.

Discussing (with humans and agents in parallel) the TEI structure was the part that took the most time on Day 1 and 2. It reminded me of DraCor ODD/schema-sessions going for months, but on steroids compacted into basically a couple of hours. In parallel to us discussing the bespoke agent took off and forked the original extractor microservice (that in the course of the Hackathon was also fixed by Henny and updated by **Clara Runa Schlör** — this is still the human-crafted and now Python-wise up-to-date microservice that is powering ecocor.org) 

The coding agent in parallel incrementally built a Python toolchain `ecocor-tokenizer` (see [repo](https://github.com/EcoCor/ecocor-tokenizer)) that ingests the TEI files coming from the challenge *EcoCor Corpus Sprint (“EcoCor100”)* worked on by **Daniil Skorinkin** and others still encoded conforming to the schema of "the original series"; the tokenizer produces the "next generation" base-layer and can also generate the stand-off layers in the new shape — that does the inverse on the way *into* the corpus: take a source TEI, emit vanilla tokenised TEI plus linguistic and dictionary-lookup annotation layers, all with the same `xml:id` scheme. Both pipelines converge on the same layered output. 

![GitHub contributors view of the ecocor-tokenizer repository, showing Ingo Börner and Claude with almost equal commit counts]({{ '/assets/images/2026-05-06-ecocor-hackathon-humans-adaptation-story/ecocor-tokenizer-contributors.png' | relative_url }})

*Contributors to the `ecocor-tokenizer` repository — Claude Code and I, with near-identical commit counts. I'm ahead by one: the initial commit.*

To be honest, the agent is the only one that can effectively use the tool chain. At one point Henny asked me how it actually works; I had to admit I didn't know, and to ask the agent. After failing multiple times I understood that the agent session in which the tool had been created was extremely valuable, and best left untouched — not reused for anything else. So the next tab was opened, with the next agent session, which could not reliably command the tool chain. That felt strangely familiar from any hackathon: people running between sub-challenges with only a vague idea of what the others were doing, everything moving too fast for anyone to keep up. The agents were now in the same dynamic. The one that had built the tokenizer was visibly proud of it; the next one could barely use it — I had clearly not instructed it well enough. Still, this second agent never complained when it had to adapt to "new" TEI craziness regarding the standoff encoding proposals — a level of patience that any developer who has had to keep up with quickly shifting requirements will recognise as decidedly not human. 
 
Once that shape was somewhat stable (still unchecked against the TEI Guidelines and Schema itself 😱), the annotation layers stacked up quickly. By the end of the hackathon, every text in the *eco-de* corpus carried a vanilla tokenised base alongside parallel dictionary-lookup and linguistic layers, plus NTEE entity layers for a subset — the last a testing-only run by Mareike on her heavy laptop during the hackathon. All files named identically per text, discriminated only by folder. These hackathon-era tokenised files and annotation layers live only on GitHub, on the [`ecohack26`](https://github.com/EcoCor/eco-de/tree/ecohack26) branch — they are not part of the Zenodo release.

In parallel, the *EcoCor100* sub-challenge team grew the German corpus from 31 to **184 texts** (101 by male, 83 by female authors) and pushed the female-author share from around 10% to roughly 45%; the result is the [EcoCor-DE release on Zenodo](https://zenodo.org/records/19630113) 🎉.

## The API consequences 🔌

The EcoCor API followed the data. Carsten reworked the loading pipeline at the end of Day 2 so the new layered files would ingest cleanly; in parallel, the agent had been "sideloading" via the built-in eXist-API in perfection, totally ignoring how our Programmable Corpora normally load data. Once that was sorted, the API work could finally start — and the rest, or REST, of the surface needed new endpoints to make sense of the new layered data model:

- annotation-layer listings and per-layer retrieval, with category filters and JSON / TEI / TSV formats;
- token-level addressability — every word in every text reachable by URL, with cross-layer search via a `layerType=entities` filter;
- computed aggregates ("which entities are in this corpus, grouped by lemma, with counts per text");
- **DTS v1.0**;
- **full-text search** across the corpus, with KWIC results resolvable to DTS-citable units — something DraCor famously lacks.

At some point, once the staging situation is sorted and the API is live somewhere (see the EOSC outlook below), a proper walkthrough of the new EcoCor API may follow as its own post — no firm timeline.

A trade-off worth noting: code review of the agent-produced pull requests simply could not happen during the hackathon — the code arrived faster than we could review it — and as a consequence the new layered API never made it to production. The production EcoCor server still runs the legacy API; we had not provisioned a designated staging server (as we have for DraCor), so the agent itself was effectively the only customer of the new endpoints during the three days. Getting the new features properly reviewed and into production will take some time. This is, as it happens, exactly one of the moments where **EOSC's Cloud Container Platform** comes in — more on that further down.

## Between all this madness out of the blue emerged DTS

[DTS (Distributed Text Services)](https://distributed-text-services.github.io/specifications/) is the emerging community standard for retrieving and citing text fragments at structural granularity — a paragraph, a chapter, a range. In DraCor you can address individual structural units, like scenes, and parts thereof, e.g. individual stage directions. **Version 1.0** of DTS is now stable, and DraCor itself implements an earlier "unstable" version (see [CLS INFRA D.7.4](https://zenodo.org/records/15301341) or the [DraCor Notebook on DTS](https://github.com/dracor-org/dracor-notebooks/blob/main/dts/dts.ipynb)). My initial 2023 DTS draft for EcoCor never shipped; this hackathon was finally the moment to roll out a clean v1.0 implementation (with the help of the agent in the middle of the night coming to the brink of my token limit). Because I had originally planned for the DTS implementation and had the documentation in a well-consumable form for the agent, as well as a codebase to build on, implementing a clean version was almost frictionless. Here the vibe-coding really shined. The agent might be proud of the tokenizer, but I think it excelled in implementing DTS. Updating DraCor's own DTS implementation to v1.0 is a related, separate task on the infrastructure list.

![Claude Code Max plan reaching the session token limit on Friday morning of the hackathon]({{ '/assets/images/2026-05-06-ecocor-hackathon-humans-adaptation-story/claude-max-session-limit.png' | relative_url }})

*The session limit signal from Claude Code Max, hit just as the DTS implementation came together.*

## Last seconds, The MCP 🤖, finally

That left the thing I had originally come to build. By Friday morning, with the API in shape and DTS landing, I sketched out an MCP server with **fastmcp**, wrapping the API endpoints as MCP tools more or less 1:1: list corpora, fetch annotation layers, search tokens by entity category, walk the DTS structure. The MCP for EcoCor was different to what I had built for DraCor last year ([dracor-org/dracor-mcp](https://github.com/dracor-org/dracor-mcp)) inspired by **Stijn Meiers**' then vibe-coded [initial proposal](https://github.com/dracor-org/dracor-api/discussions/292) 🙏. The DraCor MCP evaluated in the *[Agentic DraCor and the Art of Docstring Engineering](https://arxiv.org/abs/2508.13774)* paper was hand-crafted; for EcoCor I went back to the roots so to say. As Stijn had done, I had the agent build it — we needed it fast to play around with it. I am in particular grateful to **Renée Ridgway** — a participant at the hackathon, joining the EcoCor challenge as an observer — who could briefly test it from within [Le Chat](https://chat.mistral.ai) (Mistral) after I finally managed to deploy it on EOSC's Cloud Container Platform minutes before we had to present on Friday around noon. Renée had been interested to work with EcoCor's MCP from day 1 of the hackathon, but as the other stuff got in the way, she could only play around with DraCor's MCP while we were off the head with `<standOff>`. Still, it was interesting to hear her impressions comparing the two MCP servers from a researcher's perspective.

![Le Chat (Mistral) calling a tool exposed by the EcoCor MCP server, shortly after deployment to EOSC's Cloud Container Platform]({{ '/assets/images/2026-05-06-ecocor-hackathon-humans-adaptation-story/le-chat-ecocor-mcp.png' | relative_url }})

*First time Le Chat (Mistral) calls a tool from the EcoCor MCP* 

## EOSC — a sneak preview ☁️

The other thing this hackathon did, almost as a side-effect, was push me to actually use services on the **[EOSC EU Node](https://open-science-cloud.ec.europa.eu/)** — Europe's federated research-cloud platform — for the first time in earnest. 

![Mattermost message from me to the project channel raving about the EOSC services]({{ '/assets/images/2026-05-06-ecocor-hackathon-humans-adaptation-story/mattermost-eosc-rave.png' | relative_url }})

*From our DraCorOS project channel on Mattermost*

Two moments regarding EOSC are worth pulling out:

**File Sync & Share.** A discussion in Mattermost on the first day surfaced a need that's familiar to anyone who's run a hackathon: not everything we need to share belongs in a Git repository, and we'd rather not default to Google Drive or Dropbox. The EOSC EU Node's *File Sync & Share* service — a Nextcloud-based shared-storage offering — turned out to be embarrassingly easy to spin up and share write access to a folder. For a project that, by virtue of being European-funded, cares about not being entangled with US-only consumer infrastructure (OK, Anthropic's Claude Code, GitHub ...), this was a small but real discovery.

**Cloud Container Platform.** EcoCor doesn't yet have a public staging server for the new layered API. I wanted other participants — and Renée — to be able to actually *use* the new MCP themselves. The EOSC EU Node's **Cloud Container Platform** (a managed Kubernetes service) accepted a small Docker image of the MCP server with very little ceremony, and by the closing hours of the hackathon the EcoCor MCP was responding from a public EOSC URL. Deploying the *full* layered API to EOSC — not just the MCP wrapper — was beyond the hackathon's scope; that story will get its own post.

## At a Hackathon amongst Claude Code Agents 🤖 🤖 🤖 🤖 🤖

A note on method, because it shaped what was possible. Almost all of the implementation work was done together with **[Claude Code](https://www.claude.com/product/claude-code)**. In practice this meant several Claude Code sessions running in separate tabs of the VS Code integration, although not really parallel, but dependent on each other's results with its own working directory and its own narrow brief — one agent on the data-model design, another on the API endpoints, another on the tokenizer, another on the MCP. Context needed to flow *through me* between tabs: I dug into what one had produced, gave it feedback, instructed it to summarise the relevant decisions for another. It was my work to keep the architectural picture coherent across fairly long sessions. It was a manual, fairly intense form of multi-agent orchestration, and it was the only way to get this much built in essentially two days, but to what result? In the end we ended up with yet another working API prototype, an MCP, even partly deployed on EU EOSC Cloud infrastructure, but at the end, nothing really ready for production.

A small example of the context-unawareness flagged earlier: the [companion post]({% post_url 2026-05-06-ecocor-hackathon-agents-adaptation-story %}) closes with the line "*That's not bad work for a weekend*" — though the hackathon ran Wednesday to Friday. But, honestly, while writing this post only weeks later, I was not too sure about the order of events either, and had to consult the Mattermost conversation, git commit history, and similar artefacts to restore the chronology. The agent and I are at least on similar ground — both in need of good context.

There is an angle to this hackathon that is highly relevant for our OSCARS projects' work: When we wrote the DraCorOS proposal, agentic coding tools at this level of capability at least for us were not on the horizon. The plan assumed adapting the DraCor stack to other corpora would be **manual engineering work**: people sitting with a codebase, refactoring, repackaging, redocumenting, then doing it again for the next set of Programmable Corpora.

Three days at the EcoCor hackathon shifted that picture. Most of the code that ended up in the new tokenizer pipeline, the reworked API, the MCP server, the yaml files needed for the EOSC deploy, and the documentation was not "written" by my hands. It was written by Claude Code agents under direction — sometimes running in parallel tabs, with me carrying the architectural picture between windows. What the Hackathon needed from me was not, mostly, *coding*. It was **context, direction, and the architectural picture**.

If WP3 is "adapt the DraCor stack so other corpus communities can use it", the hardest part of that work is no longer the rework itself. It is **preparing the harness** — the documentation, the worked examples, the test data, the specifications — that lets an agent do the adaptation faithfully and at speed: a stack that orients an agent in ninety minutes and lets it carry the next adaptation forward without me typing any of it. The proposal didn't see how close that destination was; the EcoCor hackathon was the moment I did.

The next adaptation in line is **ELTeC** — the European Literary Text Collection. That will be its own sprint, its own write-up, and likely many more agent interactions.

For now: thanks to the [Potsdam Network for Digital Humanities](https://www.uni-potsdam.de/de/digital-humanities/) for organizing; to Mareike, Peer, and the EcoCor team for the challenge; to everyone who produced data, to Henny, Carsten, Runa, for the more reliable and tested work on the infrastructure components; and to Renée for being patient with day-old endpoints but then eager to test them out with the MCP.

![Ingo sitting on the floor at the EcoCor hackathon, working with multiple Claude Code agents on a laptop]({{ '/assets/images/2026-05-06-ecocor-hackathon-humans-adaptation-story/floor-sitting-with-agents.jpg' | relative_url }})

*Three days, several parallel agents — needing a lot of rare power, not only from sockets.*


*Editorial note.* This post is drafted with AI editorial assistance (voice-to-text, structuring, copy-editing). Opinions are still my own.