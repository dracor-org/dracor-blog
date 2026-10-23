---
title: "The Cloud, the Credits and a Coding Agent: Your Own DraCor on the EOSC EU Node"
date: 2026-10-23 10:00:00 +0200
author: ingoboerner
tags: [DraCorOS, EOSC]
excerpt: >
  Inspired by the EOSC Symposium 2026 in Florence: how the EOSC
  turned for me from a cloudy promise into a place where anyone with a university
  login can run their own DraCor, and how a written-down tandem with a coding
  agent makes deploying it something you can actually try.
---

*Inspired by the EOSC Symposium 2026 in Florence*

Coming back from the [EOSC Symposium 2026](https://eosc.eu/symposium-2026) in Florence, one question stays with me: who are the users of EOSC, and what do they need? I spoke there in the EOSC User Forum session about my experience of deploying the DraCor Open Knowledge Graph on the EOSC EU Node ([slides on Zenodo](https://doi.org/10.5281/zenodo.23410326)).

The Symposium's message was "[the Federation in production](https://eosc.eu/news/eosc-symposium-2026-the-federation-in-production-the-community-in-action-and-a-new-era-for-european-science)": after long years of planning, the European Open Science Cloud (EOSC) now runs services, offered by a growing number of "nodes" across Europe. In another session, the EU Node team mentioned that they have around 6,000 registered users. But who are these users, and what do they need? That was the question behind [the session I spoke in](https://indico.global/event/18268/sessions/23858/), "EOSC Federation User Forum: the Voice of the Research Community". The session chairs, Andy Götz, Sally Chambers and Marta Gutierrez, put one answer in their [summary](https://user-forum.eosc.eu/t/eosc-symposium-2026-user-session/145/11): "We cannot attract users by talking about the EOSC Federation and Nodes. Users care about research and science!"

This post is an attempt to show what EOSC can mean for the digital humanities, with DraCor as the example.

## From a cloudy promise to a running service

In DraCorOS, our [OSCARS](https://oscars-project.eu/) project, we set out to connect DraCor to EOSC, and at first, I have to admit, EOSC was "cloudy" to me: we knew we had to "onboard to EOSC", but I could not have told you what this cloud concretely was. This post tells how it became useful for us in the DraCorOS project, from a "cloudy" promise to an infrastructure offering a concrete service, through a saga about credits, and why I think that, with the EOSC EU Node and a coding agent, you can now run your own DraCor on the web.

The cloud cleared at the [CLARIN Annual Conference 2025](https://www.clarin.eu/event/2025/clarin-annual-conference-2025) in Vienna, when Matej Ďurčo asked me whether I had looked at the Cloud Container Platform of the EOSC EU Node. In that conversation, EOSC materialised: I logged in with the account of my university and found services that were plainly meant for someone like me. Since then, the EU Node has become my staging and demo environment for developing the DraCor Open Knowledge Graph within DraCorOS, and at the EcoCor hackathon I put it to use for an MCP server that had to be reachable on the web within hours (see the [EcoCor hackathon post]({% post_url 2026-05-06-ecocor-hackathon-humans-adaptation-story %})). At the Symposium, I talked about deploying the Knowledge Graph there.

What matters most to me is not a technical feature. I can claim computing resources myself. Nobody to convince, no ticket, no budget. And no bill: I had run experiments on a commercial cloud before and never dared to leave anything running, because a forgotten experiment can cost real money. On the EU Node, the worst case is spent "credits".

How did I do the deployments? Running servers is not my daily work: for dracor.org, deployment and operations are Carsten Milling's great work. I know a bit of Docker, but Kubernetes, the system behind the EU Node's Cloud Container Platform, was new to me. That I can work with it at all is thanks to a tandem with a coding agent, as I said in Florence. For the deployments I did, the agent prepared the configuration files, rehearsed the deployment locally and helped with every error message; I pasted each file into the platform's web console myself, and the agent never saw a password.

My talk ended with a call to action for the newly established [User Forum](https://user-forum.eosc.eu/): "Let us post our use cases, our manifests, our deployment logs, and our failures. DraCor's is on my list." I am keeping this promise with this post, though it is not the use case I had in mind in Florence. Not the Knowledge Graph, but something closer to what some people in the DraCor community need: your own DraCor, with your corpus, online, so that you can show it to others, thanks to the EU Node.

## The credit saga, and a correction

![Illustration: a researcher with a DraCor laptop and a shocked SSHOC representative climb through stacks of EU folders past signposts reading "Helpdesk", "IdP" and "Project Officer?", over a rickety bridge with barriers and question marks, to reach a pile of EU Node credit coins powering a happily smiling EOSC cloud]({{ '/assets/images/2026-10-23-cloud-credits-coding-agent-own-dracor-eosc-eu-node/eosc-credits-journey.jpg' | relative_url }})

*The credit saga, as an AI-generated illustration (ChatGPT).*

Resources on the EU Node are paid in credits, a virtual currency with no monetary value. How many you get depends on your **access group**. You log in through MyAccessID with your university account, and your university's identity provider passes a few details about you on to the EU Node, among them your affiliation (faculty, staff, student, and so on). The EU Node derives your access group from it. My start was bumpy: the EU Node did not grant me Investigator status, because my university's identity provider did not send the "faculty" affiliation, for anyone. The EU Node helpdesk found the cause on day one; my university fixed its settings five weeks later, and since then at least every researcher at the University of Potsdam is recognised correctly. (But beware: it might be the same at your institution, so if you want to use the EU Node, check your access group first.)

Then came the "saga" I told in Florence. It started at the CLARIN conference in 2025, when I first did the math. A Collaborator received 500 credits then, not even enough to keep a small service running until the credits were refreshed, and even my personal credits as an Investigator would not keep the Knowledge Graph running for months. I needed at least a group project with its 6,000 credits, or more. So I asked for the 40,000-credit grant the EU Node offers to EC-funded projects. DraCorOS is one, although it is complicated: the policy does not seem to have foreseen cascading grants like those of OSCARS. The helpdesk asked me, for example, to name our project's EC project officer. But cascading grants exist precisely so that smaller projects do not have to carry the administrative overhead that comes with large EU projects: the coordinating umbrella project, OSCARS, holds the grant agreement with the European Commission, and the projects it funds do not report to the Commission directly, so they have no project officer of their own. In a nutshell: grant money flows down the cascade; credits, it seemed, do not.

I owe a correction here. At the Symposium, the EU Node team explained that they had changed their credit policy and increased the credits granted to individual users. I reread the [User Access Policy](https://open-science-cloud.ec.europa.eu/about/access-policy) afterwards: the regular credits now cover what we need. In version 2.3.4 (April 2026), the access groups are:

* **Collaborator:** 1,000 credits, may use the smallest container size ("Small").
* **Investigator:** 2,000 personal credits, all sizes, and up to two group projects with 6,000 credits each, for working together with colleagues.

Credits are reset to these amounts every 90 days. The Small size (2 CPUs, 8 GB of memory) costs 10 credits per day, 900 credits for a full period, and a standard DraCor fits into it. So even the lowest access group with credits can keep its own DraCor running for a whole period; compared with my calculation in 2025, the allocations have nearly doubled. Reservations can be extended before they end, and when you book again, your instance gets the same address. More credits would still be put to good use, but we no longer depend on them.

In Florence I did use the coffee breaks to talk to people about the credit question, and I am still hoping for some extra credits. One credit, though, I did not get. At the end of the first day's session, where the EU Node celebrated its progress, the team handed out a commemorative coin to its own people. I was only allowed to take a photo.

![The EOSC EU Node commemorative coin in its capsule: "1 Credit", "E pluribus scientia", "Non-transferable, infinitely reusable", with the first names of team members in the background]({{ '/assets/images/2026-10-23-cloud-credits-coding-agent-own-dracor-eosc-eu-node/eu-node-coin.jpg' | relative_url }})

*The real credit: non-transferable, infinitely reusable, and for the EU Node team only.*

## Why would you want your own DraCor?

Most people use DraCor through [dracor.org](https://dracor.org), its API, or one of the client libraries. But dracor.org is an evolving system, and its corpora are "living corpora": they grow and get corrected, the API gains features, and the software is kept current, with updated dependencies and security fixes. For a public service that is exactly right.

For a researcher in the middle of a project, it can be a problem. You compute your results against the live API, you submit the paper, and a few months later the data has changed. A reviewer who checks the numbers against dracor.org may no longer get the same results. We discussed this in detail in the CLS INFRA report [On Versioning Living and Programmable Corpora](https://zenodo.org/records/11081934).

There are more reasons to run your own instance:

* **Your own corpus.** You encode plays that are not (yet) part of a DraCor corpus, or you build a custom selection across several corpora, and you want the full DraCor toolset on them: API, network metrics, frontend.
* **Your own frontend.** You adapt the interface for a project, a class, or an exhibition.
* **Your own API features.** You extend the API with new features for your research.
* **A fixed version.** You decide when to move on, not the release schedule of dracor.org.

And sometimes it is simply about having DraCor at hand. While I was writing this post, the University of Potsdam temporarily took all its virtual machines off the web as a precaution, after a critical PHP vulnerability had made the news; dracor.org went offline too, although it was not affected. My test instance for this post and the guide, on the EU Node, kept running.

## We have been here before: Dockerizing DraCor

None of this is new for DraCor. It started with the "Small World" paper ([paper](https://doi.org/10.1515/9783111071824-002), [repository](https://github.com/dracor-org/small-world-paper)), where we froze a populated DraCor and the analysis environment as Docker images. I presented the approach at DH2023 as ["Dockerizing DraCor"](https://doi.org/10.5281/zenodo.8107836), and [VeBiDraCor](https://github.com/dracor-org/vebidracor) is our standing example of a corpus shared as a versioned DraCor image. Chapter 6 of the DraCor Textbook shows how to run DraCor yourself: ["Infrastructure"](https://dracor-org.github.io/dracor-textbook/chapters/06-infrastructure.html).

So the recipe has existed for some time. But two things have kept it from becoming routine. The first is the local machine: Docker on a laptop works, until it does not. I have had more than one conversation with people I tried to convince to run DraCor locally with Docker, and who in the end did not get it to work. I always blame Windows, but to be fair, it is difficult. The second, and bigger one, is sharing. A DraCor instance on your laptop is yours alone. Your co-author cannot click through it, your students cannot query it, and a reviewer cannot check your numbers against it. What people with a custom instance want is to put it online and show it.

This is where the EU Node comes in: its Cloud Container Platform runs container images for you and gives them an address on the web, and you get in with your university login, without an application or a budget. That is exactly the missing piece between "DraCor in Docker on my laptop" and "DraCor online that I can share".

## The twist: from ad hoc to an controlled agentic setup

Here is what changed since Florence. In my talk, the tandem with the coding agent was something I did: improvised, session by session, with the knowledge in my head and in the conversation. This week I wrote it down.

The result is a repository, [dracor-org/dracor-eosc-eu-node-deploy](https://github.com/dracor-org/dracor-eosc-eu-node-deploy), with the configuration files and a file called `AGENTS.md`: instructions for a coding agent on how to guide a person through the deployment. You clone the repository, start the agent in it, and say "hello" (or whatever). The agent explains what you are going to do together, asks for your project ID on the EU Node, fills in the configuration, tells you exactly where to click in the web console, reads the messages you paste back, and shows you at every step where you are.

The clear division of roles is important, and it is part of the instructions, not left to chance. You log in, book the resources and click in the console; you create the database password yourself, in a form of the platform, and the agent never sees it. Even loading corpora, which needs that password, the agent can do for you without seeing it: you put the password into a file that the repository's settings forbid the agent to read, while it may hand the file to the command that sends it.

What you get is your own DraCor on the web (API, network metrics, website), any corpus from the DraCor registry, and the [DraCor MCP server](https://github.com/dracor-org/dracor-mcp) as a fixed part of every instance, so that you can ask an AI assistant about your own DraCor. You do not need the agent, though: the [step-by-step guide](https://github.com/dracor-org/dracor-eosc-eu-node-deploy/blob/main/docs/guide-eosc-eu-node.md) has the same steps for people, with screenshots, and explains the details, including why we had to adapt the official images slightly for the platform. In our test with a fresh account, getting into the EU Node was easy; the platform's web console is where you need some patience the first time, and where the agent and the screenshots help most. Thanks to Angelika Hechtl for testing the agent mode.

This is the shift I mean. A year ago, deploying DraCor on a cloud platform needed someone who knows Kubernetes. Now it needs an institutional login, a few credits, and an agent that has been told how to do it properly. That is what empowerment looks like to me: the EOSC EU Node gives you the resources without asking anyone, and an agentic setup gives you the skills.

## What is still not perfect
To be fair, here is what you should know before you start.

* **You have to renew.** Credits come back every 90 days by themselves, but your reservation does not renew itself. You get a warning five days before it ends; if you miss it, your instance is switched off, and ten days later it is deleted. My first Knowledge Graph deployment ran for 78 days without a single incident and then died of a calendar. Put the date in yours.
* **The addresses are not pretty.** Your instance gets a stable address on the web, but it is long and generated by the platform. Readable addresses are on my wish list for the EOSC nodes (counting on SSHOC; see [my post in the User Forum](https://user-forum.eosc.eu/t/eosc-symposium-2026-user-session/145/10)).
* **A frozen instance on the web is still old software.** On your laptop, running an old version is a manageable risk. On the open web, it carries all the old dependencies with it, which is exactly why dracor.org keeps updating. Run a public frozen instance as long as you need it for review, teaching, or a demo, and not forever.
* **This is not yet the reproducible DraCor.** Loading a corpus the default way gives you the state of that corpus at the moment you load it. That is fine for teaching, trying things out, or showing a custom corpus. Freezing a specific version of data and software, the idea behind Dockerizing DraCor, takes more than the default setup; that is a topic for another post.
* **Platforms change.** The EU Node is a young service, and its rules may change. Build your instance so that you can move it: keep your configuration, write down the steps, and you can set up your DraCor again anywhere. In my talk I called this principle "ephemeral infrastructure, durable artifact". And watch out around February 2027: the [current contract for running the EU Node](https://open-science-cloud.ec.europa.eu/news/eosc-eu-node-contractors-meet-athens-review-progress-and-align-next-phase) is expected to end then, and a new one is being tendered. We will see how the handover goes.

## Give it a try
The first step costs you nothing: log in to the [EOSC EU Node](https://open-science-cloud.ec.europa.eu/) with your institutional/university account and see which access group you land in. If you have credits, clone the [repository](https://github.com/dracor-org/dracor-eosc-eu-node-deploy), start your agent, and deploy your own DraCor; or follow the [guide](https://github.com/dracor-org/dracor-eosc-eu-node-deploy/blob/main/docs/guide-eosc-eu-node.md) on your own.

And then tell us how it went, in the [thread about it in the EOSC User Forum](https://user-forum.eosc.eu/t/dracoros-use-case-your-own-dracor-on-the-eosc-eu-node-cloud-container-platform/168). That is also my answer to the question from Florence: here are some of the users, and this is what they need. And it keeps the promise from my talk: the use case, the manifests and the guide are public, and this post tells the failures.

The [EcoCor hackathon post]({% post_url 2026-05-06-ecocor-hackathon-humans-adaptation-story %}) ended with the promise that the deployment to EOSC would get its own post. Here it is!

Thanks to Sally Chambers and [DARIAH](https://www.dariah.eu/) for inviting me to the User Forum session in Florence and for supporting my participation, including the (hefty) registration fee 😱.

---

*The DraCorOS project is funded as a cascading grant by OSCARS. The authors acknowledge the OSCARS project, which has received funding from the European Commission's Horizon Europe Research and Innovation programme under grant agreement No. 101129751.*

*Editorial note.* This post is drafted with AI editorial assistance (voice-to-text, structuring, copy-editing). Opinions are still my own. Another good tandem with the agent.
