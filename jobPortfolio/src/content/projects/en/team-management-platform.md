---
title: "Team & project management platform"
tag: "Internal platform"
icon: "grid"
cats: ["sw", "db"]
chips: ["Python", "pandas", "PostgreSQL", "Supabase", "Netlify"]
summary: "Web platform for milestones, tasks, timesheets and weekly client reports across several client projects, backed by a Supabase PostgreSQL database."
order: 6
flow:
  - { name: "Project data", detail: "Plans · tasks<br>timesheets · reports", link: "Python · pandas" }
  - { name: "PostgreSQL", detail: "Supabase<br>per project · per engineer", link: "Supabase API" }
  - { name: "Web app", detail: "Netlify<br>milestones · weekly updates" }
---

## Why

Running several client projects with one team means many plans, timesheets and weekly reports. Keeping them in spreadsheets made it hard to see who was working on what.

## What it does

- Tracks milestones, tasks and timesheets per project and per engineer.
- Helps produce weekly client updates and team task plans.
- Python and pandas load the data into a **Supabase PostgreSQL** database. The web front end is deployed on Netlify.
