---
title: "Daily Log: personal data platform"
tag: "Personal project"
icon: "db"
cats: ["sw", "db"]
chips: ["JavaScript", "PostgreSQL · Supabase", "Row-level security", "PWA", "GitHub Actions", "Chart.js", "Netlify"]
summary: "A web app of about 47 pages, with a phone version, for my own finance, health and career data: about 100 PostgreSQL tables behind row-level security, scheduled data jobs and around 420 unit tests."
order: 7
flow:
  - { name: "Web + phone app", detail: "About 47 pages · PWA<br>Chart.js dashboards", link: "Supabase SDK · RLS" }
  - { name: "PostgreSQL", detail: "4 schemas · ~100 tables<br>SQL functions · triggers", link: "writes" }
  - { name: "Scheduled jobs", detail: "GitHub Actions cron<br>exchange rates · public data<br>edge-function triggers" }
---

## What it is

A private web app that brings my own data into one place, with dashboards and charts: finance, health, career progress, notes and to-dos. It runs on desktop and as an installable phone app (PWA).

## How it's built

- **Front end:** about 47 pages of HTML, CSS and plain JavaScript, plus a phone shell with 10 screens. Charts in Chart.js.
- **Database:** PostgreSQL on Supabase. 4 schemas, about 100 tables, SQL functions and triggers, and row-level security on every table so each row belongs to its owner. Email and password login.
- **Data jobs:** GitHub Actions cron jobs run Node scripts that fetch public data, such as daily exchange rates and published immigration statistics. Small TypeScript edge functions let the page's Refresh button start those jobs without putting a token in the browser.
- **Tests:** around 420 unit tests across 50 test files.
- **Hosting:** Netlify, with a step that skips the build when the site has not changed, and an offline cache for the phone app.

## How it grew

- **v1, Daily Compass** ([public repo](https://github.com/jibinp/Daily-Compass)): planned with a high-level design document, then built as a health log on Supabase.
- **v2, Daily Log:** rebuilt into the full platform.

Built with AI-assisted development (Claude Code), with the tests as the check on every change.
