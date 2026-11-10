---
title: "HVAC controller: factory test firmware"
tag: "Production test"
icon: "tool"
cats: ["fw"]
chips: ["Nuvoton M031 · Cortex-M0", "Bootloader", "RS485", "ESP32", "4G / 2G modem", "GCC · CMake"]
summary: "A one-week support job on a heating and cooling controller board: factory test firmware for its relay and input checks, and a cellular modem change for a new market."
order: 11
flow:
  - { name: "Test station", detail: "RS485 console<br>pass / fail per step", link: "RS485 · 9600" }
  - { name: "M031 test firmware", detail: "Cortex-M0 · behind bootloader<br>app at 0x2800", link: "GPIO" }
  - { name: "Board under test", detail: "8 relays · single-wire inputs<br>reset detect" }
---

## The board

An HVAC controller with 8 relays (heaters, furnace, fan, freeze protection) and three controllers: an STM32, a Nuvoton M031 and an ESP32 with a cellular modem.

## What I did (a one-week job)

- **Factory test firmware for the M031:** relay test, two single-wire input tests and a reset-detect test, driven from an RS485 console at the test station.
- **Runs behind a bootloader:** the app is linked at offset 0x2800. A Cortex-M0 has no vector-table offset register, so the bootloader has to jump to the app itself.
- Builds with both Keil (Arm Compiler 6) and CMake with arm-none-eabi-gcc.
- **Modem change:** moved the ESP32's modem from US LTE-M to 2G on the 900/1800 MHz bands for the Indian market.
