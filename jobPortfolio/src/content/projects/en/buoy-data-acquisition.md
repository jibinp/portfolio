---
title: "Ocean buoy firmware: debug and upkeep"
tag: "Marine"
icon: "anchor"
cats: ["fw"]
chips: ["Nuvoton M451 · Cortex-M4", "Bare-metal C", "GPS / NavIC", "Keil · Arm Compiler 6"]
summary: "Took over the production firmware of a solar navigation-light buoy (GPS and NavIC position, battery and solar charging, lamp status, tsunami alert) and fixed the faults found in service."
order: 10
flow:
  - { name: "GNSS + sensors", detail: "GPS · NavIC receiver<br>battery · solar · light sensor", link: "UART · ADC" }
  - { name: "Buoy controller", detail: "Nuvoton M451 · Cortex-M4<br>charging · lamp logic<br>tsunami alert", link: "4× a day + on command" }
  - { name: "Status reports", detail: "Position · voltages<br>lamp state · alerts" }
---

## The product

A solar-powered navigation-light buoy. Its controller logs GPS and NavIC position, battery and solar voltage and lamp status, raises a tsunami alert from altitude change, reports four times a day and answers remote commands. The firmware was written by a colleague and was already in production when I took it over.

## What I fixed

- **Light reading frozen:** the lux value stuck at 1 or 65,481. The min/max window never reset, and a `pow(10, x)` result overflowed a 16-bit integer.
- **Lamp status stuck on:** replaced the old logic with a 5-sample debounce, so it now reacts in about 0.5 s.
- **New alert:** lamp in the wrong state for the time of day.
- **Compiler upgrade:** moved the project from Arm Compiler 5 to 6. Fixed a link error, rewrote the HardFault handler as a naked function, and fixed the build scripts.
- Clearer ADC naming and extra debug fields in the remote status reply.

18 logged changes in total.
