---
title: "AIHRo: humanoid robot you teach by gesture"
tag: "Academic · B.Tech 2015"
icon: "cpu"
cats: ["hw", "fw", "sw"]
chips: ["TM4C1294", "MSP430", "BeagleBoard-xM", "Arduino", "RF · Bluetooth", "Custom PCBs", "Android"]
summary: "A 142 cm humanoid robot that learns a task from hand gestures and repeats it on a voice command. A team project, selected in the top 14 in India in the Texas Instruments India Design Contest 2015."
order: 20
featured: true
image: "/img/projects/aihro.jpg"
imageAlt: "The AIHRo humanoid robot standing in a corridor"
flow:
  - { name: "Gesture band", detail: "MSP430 + MPU6050<br>or Android app", link: "RF · Bluetooth" }
  - { name: "Control boards", detail: "2× TM4C1294<br>sensing · motor drive<br>MSP430 hand controllers", link: "serial" }
  - { name: "BeagleBoard-xM", detail: "Linux brain<br>task database · voice" }
---

## What it does

You teach the robot a task by moving your hand with a wearable gesture band, or from an Android app over Bluetooth. It stores the motion sequence under a task name and replays it when you say "do" and the task name. It can also hold a simple conversation.

## How it's built

- **Brain:** a BeagleBoard-xM running Linux, with a database of learned tasks.
- **Control:** two TM4C1294 microcontrollers, one for sensing and one for driving the motors, plus MSP430 hand controllers and Arduino boards.
- **Gesture band:** an MSP430 with an MPU6050 motion sensor, sending over an RF link.
- **Drive:** a 20 A H-bridge for two DC gear motors, and servos for face, eyes, lips and fingers.
- **Own boards:** audio amplifier, buck converter, I2C board and voltage regulator, drawn in ExpressPCB and Proteus.

## Numbers

142 cm tall, 22 kg, 12 degrees of freedom, 0.85 kg grip per finger, powered by 12 V and 6 V battery packs.

## Recognition

Selected in the **top 14 projects in India** in the Texas Instruments Innovation Challenge India Design Contest (TIIC IDC) 2015.

[Code, board files and photos on GitHub](https://github.com/jibinp/Artificial-intelligent-Hummanoid-Robot-AIHRo-)
