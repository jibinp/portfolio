---
title: "Wi-Fi module for a tablet: FPGA design"
tag: "FPGA · VLSI"
icon: "chip"
cats: ["hw", "fw"]
chips: ["FPGA", "Verilog", "Xilinx ISE", "Spartan-6", "VLSI"]
summary: "FPGA logic in Verilog on a Xilinx Spartan-6 to integrate a Wi-Fi module into a tablet in the VLSI domain, plus UART and SPI controllers, as an FPGA developer at Audrey Technologies."
order: 19
flow:
  - { name: "Verilog design", detail: "Wi-Fi integration logic<br>UART · SPI controllers", link: "synthesis" }
  - { name: "Xilinx ISE", detail: "Synthesis · place<br>and route", link: "bitstream" }
  - { name: "Spartan-6 FPGA", detail: "Wi-Fi module in the tablet" }
---

## The project

Audrey Technologies was developing a tablet in the VLSI domain. My part was the FPGA logic to integrate a Wi-Fi module into the tablet, on a Xilinx Spartan-6, plus UART and SPI controllers.

## How it was built

- **Design:** written in Verilog.
- **Tools:** Xilinx ISE for synthesis, place and route, and programming the FPGA.
- **Testing:** simulation first, then testing and debugging on the board.
