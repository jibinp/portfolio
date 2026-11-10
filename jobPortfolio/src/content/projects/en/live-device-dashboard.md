---
title: "Live device dashboard"
tag: "Web · real-time"
icon: "monitor"
cats: ["sw"]
chips: ["Python", "Flask", "Socket.IO", "MQTT", "JavaScript"]
summary: "A Flask backend subscribes to device MQTT topics and pushes each reading to the browser over Socket.IO, so sensor data appears on the page the moment the device sends it."
order: 5
flow:
  - { name: "Sensor unit", detail: "Air quality · CO2 · VOC<br>sound events · people count", link: "MQTT · JSON" }
  - { name: "Flask backend", detail: "paho-mqtt subscriber<br>Python", link: "Socket.IO" }
  - { name: "Browser", detail: "Live page<br>no refresh · no polling" }
---

## How it works

1. The device publishes a JSON reading to an MQTT topic.
2. A Flask backend subscribes to that topic.
3. Each reading is pushed straight to the browser over Socket.IO.
4. The page updates in place, with no refresh and no polling.

## Where I used it

An indoor multi-sensor unit: temperature, humidity, pressure, air quality, CO2, VOC and ammonia, a microphone for sound events and a thermal camera for people counting. The dashboard gave field and test engineers a live view of the sensor while they worked on it. A command-line subscriber and a test publisher came with it for bench testing.
