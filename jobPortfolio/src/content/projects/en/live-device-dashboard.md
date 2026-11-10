---
title: "Live device dashboard"
tag: "Web · real-time"
icon: "monitor"
cats: ["sw"]
chips: ["Flask", "Socket.IO", "MQTT", "JavaScript"]
summary: "A Flask backend subscribes to device MQTT topics and pushes each reading to the browser over Socket.IO, so sensor data appears on the page the moment the device sends it."
order: 5
featured: true
---

## How it works

1. The device publishes a JSON reading to an MQTT topic.
2. A Flask backend subscribes to that topic.
3. Each reading is pushed straight to the browser over Socket.IO.
4. The page updates in place, with no refresh and no polling.

This gives field and test engineers a live view of a sensor while they work on it.
