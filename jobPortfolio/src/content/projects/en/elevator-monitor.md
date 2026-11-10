---
title: "Elevator monitor: 4G retrofit with OTA updates"
tag: "Building IoT"
icon: "elevator"
cats: ["hw", "fw"]
chips: ["STM32F103", "STM8", "RS485 Modbus", "4G LTE", "MQTT", "FOTA"]
summary: "A retrofit unit that reads a lift controller over RS485 and reports status, faults and counters over 4G. I led the project to customer acceptance and fixed the firmware faults that blocked it."
order: 2
flow:
  - { name: "Lift controller", detail: "Existing panel<br>status · faults · counters", link: "RS485 Modbus · ~1 s" }
  - { name: "Monitor unit", detail: "STM32F103 · bare-metal C<br>flash-backed offline queue<br>FOTA bootloader", link: "UART · AT" }
  - { name: "4G modem + STM8", detail: "Quectel LTE modem<br>STM8 for SMS alerts", link: "4G · MQTT" }
  - { name: "Cloud", detail: "Status · faults · counters<br>over-the-air updates" }
---

## The product

The unit connects to an existing lift controller over RS485 Modbus, reads a status frame about once a second, and sends status, faults and counters to the cloud over 4G MQTT. An STM8 co-processor handles SMS alerts. The main controller is an STM32F103 running bare-metal C with a Quectel 4G modem.

## My role

Technical lead: client confirmations, change requests, code analysis, testing, shipping and support through customer acceptance testing. The base firmware and the first board came from the team. I took the firmware to a shippable state, drove the V2 board revision with the hardware engineer, and handled the PCB and assembly vendors.

## Firmware fixes

- **Offline data survives power loss:** moved the offline message queue from RAM to flash, freeing about 6 KB of RAM.
- **Settings survive reboot:** alert phone number, APN, mode and send interval are now stored in flash.
- **SMS notices never acknowledged:** messages from the STM32 to the STM8 were missing a line terminator, so the STM8 never answered. Fixed at the root.
- **Over-the-air updates:** traced FOTA failures through partition writes, image checks and the bootloader hand-off. Link-time optimisation cut the app from 54.5 KB to 51 KB to fit the update slot.
- **Debug output that works in a crash:** a bit-banged serial port that still prints from the HardFault handler.

In total, 11 reported bugs and 4 newly found ones fixed.

## Result

First unit shipped for customer acceptance testing, followed by three more units tested and shipped.
