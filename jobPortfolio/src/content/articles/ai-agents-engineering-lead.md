---
title: "What I let AI agents do as an engineering lead (and what I don't)"
summary: "I lead a team of 6 engineers across several client projects. AI agents now draft our timesheets, weekly client updates and task plans. Here is how they are built, and the rules that keep them honest."
tags: ["AI agents", "Engineering leadership", "Claude Code"]
readMin: 5
order: 5
---

Leading several client projects at once comes with a lot of writing. Every day there is a timesheet. Every week there is an update for each client and a task plan for each engineer. None of it is hard, but all of it takes time away from the work it describes.

So I built AI agents to write the first draft. Not a chatbot I paste notes into, but agents that go and look at the work themselves.

## Three agents, three jobs

- **Timesheet writer:** reads what changed across my project folders today and writes an hour-by-hour timesheet.
- **Weekly client update:** writes one plain-English update per project per week, in that project's own format.
- **Team task planner:** turns each project's open work into next week's tasks for each engineer, around working days, holidays and leave.

Each one is a Claude Code agent with its own tools (read files, search, run a script, write a file), its own inputs and its own written rules.

## The most important design choice: evidence before writing

The first version of an agent like this is tempting to write as "summarise my week". The result reads well and is quietly wrong, because the model fills gaps with plausible work.

The fix was to stop asking the model to remember anything. A small Python script runs first and collects the evidence for each project: commits, uncommitted changes, every file touched in the week, the timesheet lines, and the notes from my working sessions. Only then does the agent open the files that changed and write from them.

A lot of real engineering work never lands in a commit (a test log, a meeting note, a changed spreadsheet), so commits alone are never enough. Looking at every file touched is what makes the drafts complete.

## Rules matter as much as prompts

Every agent carries a short list of hard rules. For the client update:

1. **Never invent work.** No evidence and no input from me means no update for that project, and the agent says so.
2. **Write for the client.** No register names, file paths, commit hashes or internal tool names. Say what was achieved and what it means for them.
3. **No secrets.** No passwords, keys, device IDs, IP addresses or phone numbers.
4. **Keep the format.** Read the last two or three updates first, so headings and tone carry on week to week.
5. **Accept my input as fact.** Work done by the team does not always show up on my machine, so I can add it in a line, and the agent words it for the client.

## What I don't hand over

The agents draft; I decide. I read every update before it goes to a client and every task plan before it goes to an engineer. Judgement calls stay with me: what to promise a client, how to word a delay, who should take which task.

## What changed

The writing that used to eat into my engineering time is now a review of a draft. The drafts are more complete than what I used to write from memory at the end of a long week, because the agent actually looks at every changed file.

The lesson I would pass on: an AI agent is only as trustworthy as the evidence you make it read and the rules you make it follow. Get those two right and the writing takes care of itself.
