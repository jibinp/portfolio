---
title: "Prepaid energy meter"
tag: "Academic · B.Tech"
icon: "zap"
cats: ["hw", "fw"]
chips: ["8051", "Assembly", "Keil", "Proteus", "GSM / SMS"]
summary: "A prepaid electricity meter on an 8051, written in assembly: it counts energy pulses, takes credit off the balance, warns when credit is low and cuts supply at zero. Recharge by SMS."
order: 22
image: "/img/projects/meter.jpg"
imageAlt: "Meter display showing the prepaid balance"
flow:
  - { name: "Energy meter", detail: "Pulse output", link: "pulses" }
  - { name: "8051 controller", detail: "Assembly firmware<br>balance · display<br>relay cut-off", link: "GSM · SMS / GPRS" }
  - { name: "Recharge server", detail: "Checks scratch-card PIN<br>sends credit back" }
---

## How it works

- The 8051 counts pulses from the energy meter and takes one unit of currency off the balance every 5 pulses.
- **Low balance:** a warning LED and buzzer, and "LOW BALANCE" on the display.
- **Zero balance:** a relay cuts the supply, with a red LED, buzzer and "PLEASE RECHARGE".
- **Recharge:** the user sends a scratch-card PIN by SMS. The server checks it and sends credit back to the meter over GPRS.

## Tools

Firmware in 8051 assembly in Keil, tested in a Proteus simulation for normal, low and zero balance.

[Code, circuit and simulation on GitHub](https://github.com/jibinp/Centralised-Energy-Meter)
