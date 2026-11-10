---
title: "Micro-réseau avec supervision IoT"
tag: "Universitaire · Lambton 2019"
icon: "bolt"
cats: ["hw", "fw", "sw"]
chips: ["Raspberry Pi", "Arduino", "C++", "Mesure de courant", "Commutation de source", "AWS S3"]
summary: "Un petit micro-réseau renouvelable qui alimente des charges légères à partir d’une batterie chargée par le solaire, bascule automatiquement entre le réseau et la source renouvelable, et affiche la consommation en direct sur un site web. Un projet d’équipe."
order: 21
image: "/img/projects/microgrid.jpg"
imageAlt: "Montage du micro-réseau : commutateur, onduleur et lampe d’essai"
flow:
  - { name: "Solaire / éolien + batterie", detail: "Batterie 12 V<br>onduleur pour l’éclairage", link: "onduleur" }
  - { name: "Commutation", detail: "Commutateur automatique 63 A<br>relais réseau 20 A", link: "courant · tension" }
  - { name: "Raspberry Pi", detail: "Logique de commande C++<br>Arduino en SPI", link: "envoi" }
  - { name: "Site web sur AWS S3", detail: "Consommation en direct<br>réseau ou renouvelable" }
---

## L’idée

Le solaire ou l’éolien charge une batterie de 12 V, qui alimente les charges légères via un onduleur. Les charges lourdes restent toujours sur le réseau principal. Le système surveille la charge et bascule automatiquement l’alimentation, pour que la source renouvelable soit utilisée dès qu’elle peut supporter la charge.

## Comment il est construit

- **Partie puissance :** un inverseur de source automatique biphasé de 63 A entre le réseau et la source renouvelable, et un relais de 20 A qui coupe l’alimentation réseau.
- **Mesure :** un transformateur de courant SCT-013 et un capteur de tension lus par un Arduino.
- **Commande :** un Raspberry Pi en C++ lit l’Arduino en SPI, applique des seuils de tension et de courant et commute les relais.
- **Site web :** le Pi écrit les valeurs en direct dans une page web et la téléverse sur AWS S3 toutes les quelques secondes, pour que les utilisateurs voient la quantité d’énergie fournie par chaque source.

[Code et circuit sur GitHub](https://github.com/jibinp/Micro-Grid-Integrated-with-IOT) · [Code du site web](https://github.com/jibinp/MGIoT-Website)
