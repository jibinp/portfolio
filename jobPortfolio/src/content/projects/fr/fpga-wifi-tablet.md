---
title: "Module Wi-Fi pour une tablette : conception FPGA"
tag: "FPGA · VLSI"
icon: "chip"
cats: ["hw", "fw"]
chips: ["FPGA", "Verilog", "Xilinx ISE", "Spartan-6", "VLSI"]
summary: "Logique FPGA en Verilog sur un Xilinx Spartan-6 pour intégrer un module Wi-Fi dans une tablette du domaine VLSI, ainsi que des contrôleurs UART et SPI, en tant que développeur FPGA chez Audrey Technologies."
order: 19
flow:
  - { name: "Conception Verilog", detail: "Logique d’intégration Wi-Fi<br>contrôleurs UART · SPI", link: "synthèse" }
  - { name: "Xilinx ISE", detail: "Synthèse · placement<br>et routage", link: "bitstream" }
  - { name: "FPGA Spartan-6", detail: "Module Wi-Fi dans la tablette" }
---

## Le projet

Audrey Technologies développait une tablette dans le domaine VLSI. Ma partie était la logique FPGA pour intégrer un module Wi-Fi dans la tablette, sur un Xilinx Spartan-6, ainsi que des contrôleurs UART et SPI.

## Comment il a été construit

- **Conception :** écrite en Verilog.
- **Outils :** Xilinx ISE pour la synthèse, le placement et routage, et la programmation du FPGA.
- **Essais :** d’abord en simulation, puis essais et débogage sur la carte.
