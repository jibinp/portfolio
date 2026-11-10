---
title: "Microgrid with IoT monitoring"
tag: "Academic · Lambton 2019"
icon: "bolt"
cats: ["hw", "fw", "sw"]
chips: ["Raspberry Pi", "Arduino", "C++", "Current sensing", "Changeover switching", "AWS S3"]
summary: "A small renewable microgrid that powers light loads from a solar-charged battery, switches between grid and renewable supply automatically, and shows live usage on a website. A team project."
order: 21
image: "/img/projects/microgrid.jpg"
imageAlt: "Microgrid bench setup: changeover switch, inverter and test lamp"
flow:
  - { name: "Solar / wind + battery", detail: "12 V battery<br>inverter for light loads", link: "inverter" }
  - { name: "Changeover", detail: "63 A automatic switch<br>20 A grid relay", link: "current · voltage" }
  - { name: "Raspberry Pi", detail: "C++ control logic<br>Arduino over SPI", link: "upload" }
  - { name: "Website on AWS S3", detail: "Live energy usage<br>grid vs renewable" }
---

## The idea

Solar or wind charges a 12 V battery, which feeds the light loads through an inverter. Heavy loads always stay on the main grid. The system watches the load and switches supply automatically, so the renewable side is used whenever it can carry the load.

## How it's built

- **Power side:** a 63 A two-phase automatic changeover switch between grid and renewable supply, and a 20 A relay that cuts the grid feed.
- **Sensing:** an SCT-013 current transformer and a voltage sensor read by an Arduino.
- **Control:** a Raspberry Pi in C++ reads the Arduino over SPI, applies voltage and current thresholds and switches the relays.
- **Website:** the Pi writes live values into a web page and uploads it to AWS S3 every few seconds, so users can see how much energy came from each source.

[Code and circuit on GitHub](https://github.com/jibinp/Micro-Grid-Integrated-with-IOT) · [Website code](https://github.com/jibinp/MGIoT-Website)
