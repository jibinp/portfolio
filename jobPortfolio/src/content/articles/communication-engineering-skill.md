---
title: "Communication is an engineering skill, not a soft one"
summary: "The bugs that cost the most on my projects were rarely in the code. They were in a requirement nobody questioned or an update nobody understood. Why I treat clear communication as part of the job."
tags: ["Communication", "Engineering leadership", "Client work"]
readMin: 4
order: 1
---

Early in my career I thought the job was the board and the firmware. Leading client projects changed that. The most expensive problems I have dealt with were not in the code. They were in a sentence: a requirement that meant two things, a status update that hid a risk, a handover that assumed too much.

## Reading a spec is a communication task

On one project the client sent three documents: requirements, a cloud integration guide and a payload format. Read separately, each looked fine. Read side by side, they disagreed on topic names, data formats, upload intervals and even the size of the box against its own connectors. I logged 18 open questions before a single line of firmware was written.

None of that needed advanced engineering. It needed careful reading and the confidence to ask. Every one of those questions, answered early, is a week of rework that never happens.

## Writing for the person reading it

Every week I write updates for clients. The rule I follow: say what was achieved and what it means for them, in their words, not mine. A client does not need register names or commit hashes. They need to know that the 4G link is now stable, and whether the field trial is still on schedule.

The same rule applies inside the team, just with a different reader. A good bug report says what happened, what was expected, how to reproduce it and what has already been ruled out. That turns a two-day hunt into a two-hour fix.

## Saying the uncomfortable thing early

The hardest communication is the update nobody wants to send: a part with a long lead time, a test that failed, a scope that grew. I have learned that bad news gets more expensive every day it waits. Raised early, with a plan, it is a decision. Raised late, it is a crisis.

## Handover is part of the product

When a project changes hands, the code is only half of what moves. The rest is the reasoning: why the protocol looks the way it does, which corner cases bit us, what the next engineer should not touch. On a station gateway I worked on, I wrote a protocol and implementation reference so another engineer could take it over without me in the room.

## What I practise

- Ask the question in writing, so the answer is written down too.
- One update, one reader: client, team or management, never all three in one message.
- Lead with the outcome, then the detail.
- Put risks in the first paragraph, not the last.
- Write the handover document while the project is still fresh.

Technical skill gets you into the room. Communication decides whether the project in that room succeeds.
