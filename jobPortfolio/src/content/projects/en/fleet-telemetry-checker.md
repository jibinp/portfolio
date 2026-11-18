---
title: "Fleet telemetry checker"
tag: "Data pipeline"
icon: "cloud"
cats: ["sw", "db"]
chips: ["Python", "MQTT", "Scheduled jobs", "SQLite", "Streamlit"]
summary: "A listen-only MQTT collector and a scheduled cloud job that grade every packet from a fleet of street-light controllers against the firmware packet formats. Almost 20,000 packets from 13 devices checked in its first 17 days."
order: 4
cover: "/img/projects/fleet-telemetry-checker-cover.png"
coverAlt: "Illustration: field devices, MQTT collector, packet checker and dashboard"
flow:
  - { name: "Field devices", detail: "Street-light controllers", link: "MQTT · persistent session" }
  - { name: "Collector", detail: "Listen-only subscriber<br>broker holds packets offline", link: "every 3 h" }
  - { name: "Scheduled cloud job", detail: "Drains the queue<br>dated archive files", link: "archive" }
  - { name: "Checker + dashboard", detail: "Good · warn · bad with reason<br>Streamlit · SQLite" }
---

## The problem

Field devices send packets all day. When one sends a bad packet, nobody notices until a customer complains. The checker had to catch every packet, check it, and cost nothing to run.

## How it works

- **Collector:** listens only and never publishes. A persistent MQTT session means the broker holds packets while no one is connected.
- **Scheduled job:** every 3 hours, a scheduled cloud job drains the queue into dated archive files.
- **Checker:** each packet is graded good, warn or bad against the firmware packet formats, with the reason.
- **Dashboard:** Streamlit on a local SQLite database for field triage, plus a live mode that refreshes every 10 minutes.

There is no server to pay for, and the PC doesn't need to stay on.

## Results

In its first 17 days it checked **almost 20,000 packets** from **13 devices**, each graded good, warn or bad with the reason. The warn and bad grades pointed the firmware team straight at the faults to fix.

I designed and wrote the whole tool.
