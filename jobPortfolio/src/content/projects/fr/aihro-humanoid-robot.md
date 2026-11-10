---
title: "AIHRo : robot humanoïde qu’on instruit par le geste"
tag: "Universitaire · B.Tech 2015"
icon: "cpu"
cats: ["hw", "fw", "sw"]
chips: ["TM4C1294", "MSP430", "BeagleBoard-xM", "Arduino", "RF · Bluetooth", "PCB sur mesure", "Android"]
summary: "Un robot humanoïde de 142 cm qui apprend une tâche à partir de gestes de la main et la répète sur commande vocale. Un projet d’équipe, sélectionné parmi les 14 meilleurs en Inde au Texas Instruments India Design Contest 2015."
order: 20
featured: true
image: "/img/projects/aihro.jpg"
imageAlt: "Le robot humanoïde AIHRo debout dans un couloir"
flow:
  - { name: "Bracelet gestuel", detail: "MSP430 + MPU6050<br>ou application Android", link: "RF · Bluetooth" }
  - { name: "Cartes de commande", detail: "2× TM4C1294<br>acquisition · moteurs<br>contrôleurs de main MSP430", link: "série" }
  - { name: "BeagleBoard-xM", detail: "Cerveau Linux<br>base de tâches · voix" }
---

## Ce qu’il fait

On apprend une tâche au robot en bougeant la main avec un bracelet gestuel, ou depuis une application Android en Bluetooth. Il enregistre la séquence de mouvements sous un nom de tâche et la rejoue quand on dit « do » suivi du nom de la tâche. Il peut aussi tenir une conversation simple.

## Comment il est construit

- **Cerveau :** une BeagleBoard-xM sous Linux, avec une base de données des tâches apprises.
- **Commande :** deux microcontrôleurs TM4C1294, l’un pour la mesure et l’autre pour la commande des moteurs, plus des contrôleurs de main MSP430 et des cartes Arduino.
- **Bracelet gestuel :** un MSP430 avec un capteur de mouvement MPU6050, qui transmet par liaison RF.
- **Motorisation :** un pont en H de 20 A pour deux motoréducteurs à courant continu, et des servomoteurs pour le visage, les yeux, les lèvres et les doigts.
- **Cartes maison :** amplificateur audio, convertisseur abaisseur (buck), carte I2C et régulateur de tension, dessinés sous ExpressPCB et Proteus.

## En chiffres

142 cm de haut, 22 kg, 12 degrés de liberté, prise de 0,85 kg par doigt, alimenté par des blocs de batteries de 12 V et 6 V.

## Distinction

Sélectionné parmi les **14 meilleurs projets en Inde** au Texas Instruments Innovation Challenge India Design Contest (TIIC IDC) 2015.

[Code, fichiers des cartes et photos sur GitHub](https://github.com/jibinp/Artificial-intelligent-Hummanoid-Robot-AIHRo-)
