---
title: "Smart street-light controller"
tag: "Smart city"
icon: "light"
cats: ["hw", "fw"]
chips: ["Quectel EC200U open-CPU", "Quectel SDK", "DLMS meter", "Latching relays", "Scheduler", "4G MQTT", "Python"]
summary: "A 4G street-light controller that reads an energy meter, switches lamp zones on schedule and raises power alarms. Complete project ownership, from design to release."
order: 3
cover: "/img/projects/street-light-controller-cover.png"
coverAlt: "Illustration: street lights at night with the 4G controller on a pole"
flow:
  - { name: "Energy meter", detail: "DLMS readings<br>voltage · current · energy", link: "DLMS" }
  - { name: "Street-light controller", detail: "Quectel EC200U open-CPU<br>3 latching relays · scheduler<br>power and lamp-fault alarms", link: "4G · MQTT" }
  - { name: "MQTT broker", detail: "Status · alarms<br>OTA updates", link: "listen-only" }
  - { name: "Fleet telemetry checker", detail: "Grades every packet<br>good · warn · bad" }
---

## The product

The controller reads an energy meter over DLMS and calculates energy per zone, switches three lamp zones through latching relays in manual or scheduled mode, raises over-voltage, under-voltage, over-current and lamp-fault alarms, and reports over 4G MQTT. The firmware runs directly on the Quectel EC200U 4G module (open-CPU), built on the Quectel SDK, so there is no separate microcontroller. Offline data and settings are kept in flash, and firmware updates are delivered over the air.

The hardware is a multi-board design that keeps high-current switching away from the control electronics.

## What I did

- **Complete project ownership:** firmware, testing, change requests and client updates.
- **Power protection:** a hardware over-voltage trip plus noise filtering, so short spikes on the input are not read as over-voltage and do not trip the relays. Tested with injected noise.
- **Testing:** long-run tests with real meters and meter simulators, and a production run.

## Status

Firmware released to the customer. Updates are delivered over the air to units in the field.

## In the field

Every packet the controllers send is graded by the [fleet telemetry checker](/portfolio/projects/fleet-telemetry-checker), which I built.
