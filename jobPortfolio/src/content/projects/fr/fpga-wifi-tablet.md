---
title: "Module Wi-Fi pour une tablette : conception FPGA"
tag: "FPGA · VLSI"
icon: "chip"
cats: ["hw", "fw"]
chips: ["FPGA", "Verilog", "Xilinx ISE", "Spartan-6", "VLSI"]
summary: "Conception et mise en œuvre du module Wi-Fi d’une tablette dans le domaine VLSI, sur un FPGA Xilinx Spartan-6, en tant que développeur FPGA chez Audrey Technologies."
order: 19
flow:
  - { name: "Conception Verilog", detail: "Logique du module Wi-Fi", link: "synthèse" }
  - { name: "Xilinx ISE", detail: "Synthèse · placement<br>et routage", link: "bitstream" }
  - { name: "FPGA Spartan-6", detail: "Module Wi-Fi de la tablette" }
---

## Le projet

Audrey Technologies développait une tablette dans le domaine VLSI. Ma partie était le module Wi-Fi : je l’ai conçu et mis en œuvre sur un FPGA Xilinx Spartan-6.

## Comment il a été construit

- **Conception :** écrite en Verilog.
- **Outils :** Xilinx ISE pour la synthèse, le placement et routage, et la programmation du FPGA.
- **Essais :** d’abord en simulation, puis essais et débogage sur la carte.
