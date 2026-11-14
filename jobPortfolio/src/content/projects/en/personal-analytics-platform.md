---
title: "Daily Log: AI-supported life and work data platform"
tag: "Independent project"
icon: "db"
cats: ["sw", "db"]
chips: ["AI agents", "JavaScript", "PostgreSQL · Supabase", "Row-level security", "PWA", "GitHub Actions", "Chart.js", "Netlify"]
summary: "An AI-supported web app that brings health, career and finance tools together under one umbrella: about 47 pages with a phone version, about 100 PostgreSQL tables behind row-level security, and data analysis by AI agents running in the background."
order: 7
flow:
  - { name: "AI agents", detail: "Background data analysis", link: "reviewed data" }
  - { name: "Web + phone app", detail: "About 47 pages · PWA<br>Chart.js dashboards", link: "Supabase SDK · RLS" }
  - { name: "PostgreSQL", detail: "4 schemas · ~100 tables<br>SQL functions · triggers", link: "writes" }
  - { name: "Scheduled jobs", detail: "Data feeds<br>edge-function triggers" }
---

## What it is

An AI-supported web app that brings separate health, career and finance tools together under one umbrella, with data entry, dashboards and charts for each. It runs on desktop and as an installable phone app (PWA), and is built the way a production product would be: a real database design, access control, automated data jobs and tests.

## AI support

AI agents (Claude Code) run in the background and handle the data analysis behind the app. Their results are reviewed before they reach the database.

## How it's built

- **Front end:** about 47 pages of HTML, CSS and plain JavaScript, plus a phone shell with 10 screens. Charts in Chart.js.
- **Database:** PostgreSQL on Supabase. 4 schemas, about 100 tables, SQL functions and triggers, and row-level security on every table so each row belongs to its owner.
- **Data jobs:** scheduled jobs run Node scripts that fetch data feeds on a schedule. Small TypeScript edge functions let the page's Refresh button start those jobs without putting a token in the browser.
- **Tests:** around 420 unit tests across 50 test files.
- **Hosting:** Netlify, with a step that skips the build when the site has not changed, and an offline cache for the phone app.

## How it grew

- **v1:** planned with a high-level design document, then built as a single-module app on Supabase.
- **v2:** rebuilt into the full multi-module platform.

Built with AI-assisted development (Claude Code), with the tests as the check on every change.
