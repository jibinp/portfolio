---
title: "4G solar inverter data logger on AWS IoT"
tag: "Energy · Tech lead"
icon: "zap"
cats: ["hw", "fw", "sw"]
chips: ["STM32", "4G LTE Cat-1", "RS485 Modbus", "AWS IoT Core", "Fleet provisioning", "IoT Jobs", "MQTT · TLS", "Secure element"]
summary: "A 4G data logger that reads solar inverters and reports to AWS IoT, with fleet provisioning, signed over-the-air updates and certificate rotation. I am the technical lead and own the device-to-AWS design."
order: 9
featured: true
flow:
  - { name: "Solar inverters", detail: "4 brands<br>4 payload types", link: "RS485 · Modbus RTU" }
  - { name: "4G data logger", detail: "STM32 · 4G LTE Cat-1<br>secure element · RTC<br>16 GB store-and-forward", link: "TLS · MQTT · QoS 1" }
  - { name: "AWS IoT Core", detail: "Fleet provisioning<br>Basic Ingest · rules<br>IoT Jobs: OTA + cert rotation", link: "rules" }
  - { name: "Client platform", detail: "Inverter data<br>alerts · reports" }
---

## The product

The logger reads solar inverters from four brands over RS485 Modbus RTU and turns the readings into four payload types (single-phase, three-phase and two hybrid types with battery data). It publishes them to AWS IoT over 4G, keeps data on 16 GB of storage when the network drops, and resends it on a separate resume topic. Hardware includes a secure element for the device certificates and a battery-backed clock, so TLS works from the very first boot.

## AWS IoT design (my part)

- **Fleet provisioning:** each logger leaves the factory with a shared claim certificate, connects once, and swaps it for its own device certificate and Thing name.
- **Telemetry:** MQTT over TLS with QoS 1 through AWS IoT Basic Ingest, with randomised send jitter so a whole fleet never reports in the same second.
- **Over-the-air updates through AWS IoT Jobs:** HTTPS download, SHA-256 and signature check, A/B partitions with automatic rollback, and status back to the cloud.
- **Certificate rotation**, also through IoT Jobs: atomic swap, acknowledgement and clean-up.
- **AWS sandbox:** Thing types, claim and device policies, the provisioning template, a pre-provisioning Lambda and the routing rule, plus a Python device simulator that provisions itself and sends all four payload types, so firmware and cloud can be tested before the hardware exists.
- **Manufacturing:** the factory flashing procedure for claim certificate, serial, root CA and endpoint, and a signed firmware release package for the client's validation pipeline.

## Lead work

- **Spec review:** cross-checked the client's three specification documents (requirements, AWS integration guide, payload format) and logged 18 open questions and conflicts, from topic names to a box height too small for its connectors.
- **Engineering plan:** 56 tasks, 229 person-days and 4 milestones; a feature tracker of 104 requirements, each traced to a clause of the client specification.
- **Hardware:** system architecture, component selection, and schematic and layout review with the hardware engineer.
- Weekly client meetings and progress reports.

## Status

In design: architecture done, schematic and layout under review. AWS sandbox, device simulator and the first Modbus-to-AWS prototype are next. A 7-day soak test and a field pilot are part of the acceptance plan.
