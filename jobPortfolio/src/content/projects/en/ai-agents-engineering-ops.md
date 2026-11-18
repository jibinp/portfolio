---
title: "AI agents for engineering team operations"
tag: "AI · Automation"
icon: "cpu"
cats: ["sw"]
chips: ["Claude Code", "AI agents", "Python", "Git", "Prompt and rule design"]
summary: "7 custom AI agents that support a 6-engineer team across four areas: team operations, research, data analysis and AI-assisted development, all working from the real project files. I designed and built them, and I review everything they produce."
order: 6.5
cover: "/img/projects/ai-agents-engineering-ops-cover.png"
coverAlt: "Illustration: project evidence, AI agents, engineer review, team and clients"
featured: true
flow:
  - { name: "Project evidence", detail: "Project files · datasheets<br>test data · session notes", link: "evidence script" }
  - { name: "Claude Code agents", detail: "Team operations · research<br>data analysis<br>AI-assisted development", link: "drafts" }
  - { name: "Lead review", detail: "Checked by me<br>sent to client or team" }
---

## The problem

Leading several client projects at once means a steady stream of writing: a timesheet every day, a client update for every project every week, and a task plan for every engineer every week. Each one is built from the same raw material (what changed in the code, the documents, the meeting notes) and each one takes time away from engineering.

## What I built

7 custom Claude Code agents, each with its own tools, inputs and written rules, across four areas.

**Team operations**

- **Timesheet writer:** turns the day's real work across the project folders into an hour-by-hour timesheet.
- **Weekly client update:** writes one plain-English update per project per week, in that project's own format, so each client sees the same structure every week.
- **Team task planner:** prepares next week's tasks for each engineer from each project's open work, taking working days, holidays and leave into account.

**Engineering support**

- **Research:** datasheets, standards and component information for projects.
- **Data analysis:** test data and field data turned into clear reports.
- **AI-assisted development:** firmware code review, test tools and simulators.

## Evidence first

The agents do not write from memory. For team operations, a small Python script runs first and collects the week's evidence for each project: commits, uncommitted changes, every file touched, the timesheet lines and the session notes. The agent then opens the files that changed and writes from those.

The rules written into each agent matter as much as the prompts:

- **Never invent work.** No evidence and no input from me means no update for that project.
- **Client language only:** no register names, file paths, commit hashes or internal tool names.
- **No secrets:** no passwords, keys, device IDs or IP addresses.
- **Keep the format:** read the last few updates first so tone and headings carry on week to week.

## The result

The writing, research and analysis that used to eat into engineering time is now a draft I review and use.

Read more in the article [What I let AI agents do as an engineering lead](/portfolio/articles/ai-agents-engineering-lead).
