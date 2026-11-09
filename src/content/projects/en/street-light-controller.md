---
title: "Smart street-light controller"
tag: "Smart city"
icon: "light"
cats: ["hw", "fw"]
chips: ["Altium", "DC-DC", "Relays", "MQTT"]
summary: "Main control card (rev 3.0) with its DC-DC power stage, plus a separate relay card for switching lamp loads, both in Altium. The controllers report to an MQTT broker."
order: 3
---

## Hardware

- **Main control card, rev 3.0:** the controller board, with its own DC-DC power stage.
- **Relay card:** a separate board for switching lamp loads, which keeps high-current switching away from the control electronics.

Both boards were designed in Altium.

## In the field

The controllers publish their status to an MQTT broker. The [fleet telemetry checker](/projects/fleet-telemetry-checker) grades every packet they send against the firmware formats.
