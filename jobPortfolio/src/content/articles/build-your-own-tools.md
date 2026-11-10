---
title: "Why I build my own tools for testing and data analysis"
summary: "Off-the-shelf apps are great until your problem is specific. Small tools I wrote myself (a fleet packet checker, simulators, a calibration tool) found faults that general apps would have missed. When building beats buying, and when it does not."
tags: ["Testing", "Data analysis", "Tools"]
readMin: 4
order: 4
---

There is an app for almost everything: MQTT clients, serial monitors, log viewers, dashboards, spreadsheets. I use many of them. But again and again, the tool that actually solved the problem was a small one I wrote myself, in an afternoon, for exactly that problem.

## General apps show data. Own tools understand it.

A generic MQTT client will show you every packet a device sends. It cannot tell you that packet number 4,812 has a field in the wrong unit, because it does not know what the field should be.

On a street-light project I wrote a small checker that knows the firmware's packet formats. It collects every packet from the fleet, grades each one good, warn or bad, and says why. In its first weeks it checked almost 20,000 packets from 13 devices, and the bad and warn packets pointed the firmware team straight at the faults to fix. No off-the-shelf app could have done that, because the knowledge it needed lived only in our firmware.

## Examples from my work

- **Device simulators** in Python that generate realistic traffic, so firmware and gateways can be tested before the hardware exists.
- **A calibration tool** that turns raw ADC readings into amps with curve fitting, used to validate field-unit firmware.
- **Log analysers** that replay captured data and show exactly where a sequence broke.
- **Live dashboards** in Flask or Streamlit that show one device's data the moment it arrives.
- **Excel trackers** with requirement-to-test traceability, which are tools too, just built in a spreadsheet.

## Why it pays off

- **It fits the problem exactly.** Your formats, your thresholds, your edge cases.
- **It encodes knowledge.** A checker written once keeps checking long after the person who knew the rules has moved on.
- **It automates the boring part.** A scheduled job that grades every packet is more reliable than a person scrolling a log.
- **It costs little.** A Python script, a free scheduler and a spreadsheet can replace a paid platform for a small team.
- **It becomes a test asset.** The same tool checks the next firmware release, and the one after that.

## When not to build

Own tools are not always the answer:

- If a mature tool already does the job well, use it. Nobody needs another serial terminal.
- If the tool needs to be maintained by many people for years, a supported product may cost less in the end.
- If it is a one-off question, a spreadsheet is often enough.

My rule of thumb: buy for general jobs, build for knowledge. When the value of a tool depends on knowing your system, a small tool of your own will usually beat a big tool that knows nothing about it.

With AI coding assistants, the cost of writing these tools has dropped further. That makes the case for building them stronger than ever.
