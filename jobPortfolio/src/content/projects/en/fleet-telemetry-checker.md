---
title: "Fleet telemetry checker"
tag: "Data pipeline"
icon: "cloud"
cats: ["sw", "db"]
chips: ["Python", "MQTT", "GitHub Actions", "Apps Script", "SQLite", "Streamlit"]
summary: "A listen-only MQTT collector and a scheduled cloud job that grade every packet from a fleet of street-light controllers against the firmware packet formats. 19,465 packets from 13 devices checked in its first 17 days."
order: 4
flow:
  - { name: "Field devices", detail: "Street-light controllers<br>about 15 packets an hour each", link: "MQTT · persistent session" }
  - { name: "Collector", detail: "Listen-only subscriber<br>broker holds packets offline", link: "every 3 h" }
  - { name: "GitHub Actions job", detail: "Drains the queue<br>dated JSONL files", link: "Apps Script" }
  - { name: "Checker + dashboard", detail: "Google Drive archive<br>good · warn · bad with reason<br>Streamlit · SQLite" }
---

## The problem

Field devices send packets all day. When one sends a bad packet, nobody notices until a customer complains. The checker had to catch every packet, check it, and cost nothing to run.

## How it works

- **Collector:** listens only and never publishes. A persistent MQTT session means the broker holds packets while no one is connected.
- **Scheduled job:** every 3 hours, GitHub Actions drains the queue into dated JSONL files and sends them to a Google Drive folder through Google Apps Script.
- **Checker:** each packet is graded good, warn or bad against the firmware packet formats, with the reason.
- **Dashboard:** Streamlit on a local SQLite database for field triage, plus a live mode that refreshes every 10 minutes.

There is no server to pay for, and the PC doesn't need to stay on.

## Results

In its first 17 days: **19,465 packets** from **13 devices**, graded 16,423 good, 1,251 warn and 1,765 bad. The bad and warn packets pointed the firmware team straight at the faults to fix.

I designed and wrote the whole tool.
