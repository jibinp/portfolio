---
title: "Smart street-light controller"
tag: "Smart city"
icon: "light"
cats: ["hw", "fw"]
chips: ["Quectel EC200N open-CPU", "DLMS meter", "Relays", "4G MQTT", "Altium"]
summary: "A 4G street-light controller that reads an energy meter, switches lamp zones and raises power alarms. I led the project, chose the metering parts and fixed a relay-flicker fault in the field firmware."
order: 3
flow:
  - { name: "Energy meter", detail: "DLMS readings<br>voltage · current · energy", link: "DLMS · RS232" }
  - { name: "Street-light controller", detail: "Quectel EC200N open-CPU<br>3 relays · lamp zones · RTC<br>over/under-voltage alarms", link: "4G · MQTT" }
  - { name: "MQTT broker", detail: "Status · alarms<br>OTA updates", link: "listen-only" }
  - { name: "Fleet telemetry checker", detail: "Grades every packet<br>good · warn · bad" }
---

## The product

The controller reads an energy meter over DLMS, switches lamp zones through relays, raises over-voltage, under-voltage and over-current alarms, and reports over 4G MQTT. The firmware runs directly on the 4G module's own processor (Quectel EC200N open-CPU), so there is no separate microcontroller.

The hardware is a set of four boards designed in Altium by the team: the main control card (rev 3.0), a power supply card, a relay card that keeps high-current switching away from the control electronics, and an optical meter-reader board.

## My role

- Technical lead: planning, change requests and client updates.
- Selected and checked the metering ICs and their drivers.
- **Relay flicker fix:** noise spikes on the input pins were read as over-voltage and tripped the relays. I added a debounce and tested it with injected noise.
- Final testing on a 10-board production batch with 2 real meters and 3 meter simulators.

## Status

Firmware released to the customer. Updates are delivered over the air: one was applied to a unit already in the field.

## In the field

Every packet the controllers send is graded by the [fleet telemetry checker](/portfolio/projects/fleet-telemetry-checker), which I built.
