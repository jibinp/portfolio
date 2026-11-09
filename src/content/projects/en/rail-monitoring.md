---
title: "Railway point-machine condition monitoring"
tag: "Rail IoT · Flagship"
icon: "train"
cats: ["hw", "fw", "sw", "db"]
chips: ["STM32H753", "FreeRTOS", "LoRa", "4G · MQTT", "Altium", "SQLite", "Python"]
summary: "Trackside field units, a LoRa sensor network and a 4G gateway that catch point-machine faults before they stop trains. Built to the national railway research body's specification."
order: 1
flagship: true
featured: true
flow:
  - { name: "Field unit", detail: "STM32H753 · FreeRTOS<br>V / I / vibration", link: "LoRa" }
  - { name: "Station gateway", detail: "SQLite · time source<br>global event IDs", link: "4G · MQTT" }
  - { name: "Backend", detail: "waveforms · FFT<br>ML datasets" }
---

## The problem

Point machines move the rails at a junction. When one starts to fail, the first sign is usually a train held at a signal. The goal was to watch each machine's voltage, current and vibration continuously and flag a fault before it causes a delay. The units sit trackside, lose power, and share a narrow radio channel.

## What I built

- **Continuous sampling engine:** a timer-paced ADC feeding a DMA circular buffer at 64 samples per mains cycle, with non-blocking averaging.
- **Onboarding protocol:** five steps (register, assign, parameters, time sync, finish) with retries and power-loss-safe persistence to flash.
- **Radio framing:** compact binary frames with burst-level acknowledgements in place of JSON, to save LoRa airtime.
- **Flash event storage:** an event-storage engine verified by a formal test report.
- **Drivers:** RS485 Modbus RTU driver for an inclinometer, plus display and status-LED modules.

## What I led

- System design, the global event-ID scheme and the gateway data flow (SQLite, time source).
- The rev-2 board in Altium: analog voltage and current front ends, digital inputs, ESP32 and Ethernet. Bring-up and SMT hand-off with the assembly vendor.
- The EMC, environmental and railway compliance plan, with requirement-to-test traceability and a shortlist of accredited labs.
- Python simulator, analyzer and configuration tools, and FFT features and datasets for predictive-maintenance models.
