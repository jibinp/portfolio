---
title: "Elevator monitor: board + OTA firmware"
tag: "Building IoT"
icon: "elevator"
cats: ["hw", "fw"]
chips: ["Altium", "STM32", "STM8 · CAN", "4G", "MQTT", "FOTA"]
summary: "Altium board with power and battery-backup stages, an STM32 controller and a 4G modem, plus the firmware that updates itself over the air."
order: 2
featured: true
---

## Hardware

An Altium board with separate power and battery-backup stages, an STM32 main controller, an STM8 CAN node and a 4G cellular modem.

## Firmware

- Redesigned the flash layout around a custom **4 KB bootloader**.
- Traced FOTA failures through partition writes, payload verification and the bootloader hand-off.
- Fixed CAN bit-timing and transceiver faults, and AT-command / SMS pass-through between the STM32 and the STM8.
- Fixed MQTT re-subscription after connection drops.
- Supported the customer through acceptance testing.
