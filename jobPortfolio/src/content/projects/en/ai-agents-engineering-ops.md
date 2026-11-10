---
title: "AI agents for engineering team operations"
tag: "AI · Automation"
icon: "cpu"
cats: ["sw"]
chips: ["Claude Code", "AI agents", "Python", "Git", "Prompt and rule design"]
summary: "A set of AI agents that draft the paperwork of running a 6-engineer team: daily timesheets, weekly client updates and weekly task plans, built from what actually happened in the project files. I designed and built them, and I review everything they write."
order: 6.5
featured: true
flow:
  - { name: "Project evidence", detail: "Git commits · changed files<br>timesheets · session notes", link: "evidence script" }
  - { name: "Claude Code agents", detail: "Timesheet writer<br>weekly client update<br>team task planner", link: "drafts" }
  - { name: "Lead review", detail: "Checked by me<br>sent to client or team" }
---

## The problem

Leading several client projects at once means a steady stream of writing: a timesheet every day, a client update for every project every week, and a task plan for every engineer every week. Each one is built from the same raw material (what changed in the code, the documents, the meeting notes) and each one takes time away from engineering.

## What I built

Custom Claude Code agents, each with its own tools, inputs and written rules. The three I use for team operations:

- **Timesheet writer:** turns the day's real work across the project folders into an hour-by-hour timesheet.
- **Weekly client update:** writes one plain-English update per project per week, in that project's own format, so each client sees the same structure every week.
- **Team task planner:** prepares next week's tasks for each engineer from each project's open work, taking working days, holidays and leave into account.

## Evidence first

The agents do not write from memory. A small Python script runs first and collects the week's evidence for each project: commits, uncommitted changes, every file touched, the timesheet lines and the session notes. The agent then opens the files that changed and writes from those.

The rules written into each agent matter as much as the prompts:

- **Never invent work.** No evidence and no input from me means no update for that project.
- **Client language only:** no register names, file paths, commit hashes or internal tool names.
- **No secrets:** no passwords, keys, device IDs or IP addresses.
- **Keep the format:** read the last few updates first so tone and headings carry on week to week.

## The result

The writing that used to eat into engineering time is now a draft I review and send. Over the same period I built more agents for my own career work, such as research and practice tools.

Read more in the article [What I let AI agents do as an engineering lead](/portfolio/articles/ai-agents-engineering-lead).
