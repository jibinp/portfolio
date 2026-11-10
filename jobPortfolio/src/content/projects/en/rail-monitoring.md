---
title: "Railway predictive maintenance system"
tag: "Rail IoT · Flagship"
icon: "train"
cats: ["hw", "fw", "sw", "db"]
chips: ["STM32H753", "FreeRTOS", "LoRa", "Zigbee", "4G LTE", "Ethernet", "Linux gateway", "Python", "SQLite", "MQTT · TLS", "AI/ML data"]
summary: "A predictive maintenance system for railway signalling. Trackside field units record how each asset behaves, and that field data trains AI/ML models that predict faults before they stop a train. I wrote the field-unit firmware and the Linux station gateway, and lead the project. Built to the national railway research body's specification."
order: 1
flagship: true
featured: true
flow:
  - { name: "Trackside sensors", detail: "Voltage · current<br>vibration (RS485)<br>relay contacts", link: "ADC · RS485 · DI" }
  - { name: "Field unit", detail: "STM32H753 · FreeRTOS<br>64 samples per cycle<br>flash event log", link: "LoRa · Zigbee · 4G · Ethernet" }
  - { name: "Station gateway", detail: "Linux PC · Python<br>SQLite store-and-forward<br>time source for all units", link: "MQTT · TLS · fibre + 4G" }
  - { name: "Railway cloud", detail: "AI/ML fault prediction<br>alerts · dashboards" }
---

## The problem

Signalling equipment such as point machines moves the rails at a junction. When one starts to fail, the first sign is often a train held at a signal. The goal is **predictive maintenance**: record how every asset behaves on every operation, use that field data to train AI/ML models, and predict faults such as poor lubrication, friction or an obstruction before they cause a delay.

The units sit trackside, lose power, and share narrow radio channels, so the data has to survive all of that.

## The system

- **Field unit:** STM32H753 with FreeRTOS. Samples voltage, current and vibration and captures a waveform signature of every operation. Designed for several links: LoRa, Zigbee and 4G direct from the MCU, and Wi-Fi or Ethernet through an ESP32.
- **Station gateway:** a Python application on a Linux PC. Collects data from all the field units at a station over LoRa (point-to-point and LoRaWAN), Ethernet and 4G, stores it, and forwards it to the cloud.
- **Railway cloud:** the AI/ML application learns from the field data, predicts faults and sends alerts to the control room and to mobile.

## What I built

**Field-unit firmware**

- **Sampling engine:** timer-paced ADC with a DMA circular buffer, 64 samples per 50 Hz mains cycle, 7 active channels, with non-blocking averaging.
- **Onboarding:** a five-step protocol (register, assign, parameters, time sync, finish) that saves its progress to flash, so a power cut never leaves a unit half set up.
- **Radio protocol:** compact binary frames with acknowledgements and resend of missing frames, in place of JSON, to save airtime.
- **Flash event storage:** events are kept in a 5 MB region of SPI flash while the link is down, then delivered in order once it is back.
- **Drivers:** RS485 Modbus RTU for an inclinometer, LoRa over AT commands, display and status LEDs.

**Station gateway (Linux PC)**

- **No event lost:** a SQLite store-and-forward queue with a 5-million-event log. An event is marked sent only after the cloud broker acknowledges it (MQTT QoS 1 over TLS).
- **Redundant uplink:** fibre as the main link with 4G as backup; data is held through outages and sent on reconnect.
- **Time source for the station:** keeps every field unit's clock aligned, so waveform signatures from different assets line up for the AI/ML models.
- **Device management:** onboarding and identity for each field unit, LoRaWAN device provisioning, health reports and an audit log.
- **Station UI:** a local HTTPS web app (Flask) for commissioning and monitoring.

The AI/ML models run in the cloud application. My part is making sure the data they learn from is complete, time-aligned and never lost.

## Proof, not promises

A formal flash event-storage test:

- **74 h 36 min** with the radio link off: **568 of 568** events stored and delivered, **0 gaps**.
- Flash write pointer matched the gateway's data to **0 bytes**.
- 150 events fired while a send was in progress: all passed.

## Bugs worth telling

- **Silent LoRa start-up:** the init sequence never checked the module's replies. I raised the reset wait from 1.2 s to 3 s and added retries.
- **Current reading 1000× off:** a mA-to-A conversion was applied twice, and a sense-resistor value was wrong in the code. Both fixed and recalibrated.

## What I led

- System design, the event-ID scheme and the data flow from field unit to cloud.
- Drove the rev-2 board redesign (analog voltage and current inputs, digital inputs, ESP32, Ethernet, RS485): specification and review, working with the hardware engineer.
- Wrote the station gateway's protocol and implementation reference, so another engineer can take it over.
- The test and certification plan, with requirement-to-test traceability.
- Client demos and weekly reports. Status: prototype and client demo stage.
