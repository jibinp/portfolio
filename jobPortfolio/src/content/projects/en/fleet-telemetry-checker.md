---
title: "Fleet telemetry checker"
tag: "Data pipeline"
icon: "cloud"
cats: ["sw", "db"]
chips: ["Python", "MQTT", "GitHub Actions", "Apps Script", "JSONL"]
summary: "A listen-only MQTT collector and a scheduled cloud job that grade every packet from a fleet of street-light controllers against the firmware packet formats."
order: 4
---

## The problem

Field devices send packets all day. When one sends a bad packet, nobody notices until a customer complains. The checker needed to catch every packet, check it, and cost nothing to run.

## How it works

- **Collector:** listens only and never publishes. A persistent MQTT session means the broker holds packets while no one is connected.
- **Scheduled job:** every 3 hours, GitHub Actions drains the queue into dated JSONL files and sends them to a Google Drive folder through Google Apps Script.
- **Checker:** each packet is graded good, warn or bad against the firmware packet formats, with the reason.
- **Dashboard:** a local dashboard for field triage.

There is no server to pay for, and the PC doesn't need to stay on.
