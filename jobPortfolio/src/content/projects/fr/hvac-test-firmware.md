---
title: "Contrôleur CVC : micrologiciel de test en usine"
tag: "Test de production"
icon: "tool"
cats: ["fw"]
chips: ["Nuvoton M031 · Cortex-M0", "Chargeur d’amorçage", "RS485", "ESP32", "Modem 4G / 2G", "GCC · CMake"]
summary: "Une mission d’appui d’une semaine sur une carte de contrôleur de chauffage et de climatisation : micrologiciel de test en usine pour ses vérifications de relais et d’entrées, et changement de modem cellulaire pour un nouveau marché."
order: 11
flow:
  - { name: "Poste d’essai", detail: "Console RS485<br>réussi / échec par étape", link: "RS485 · 9600" }
  - { name: "Micrologiciel de test M031", detail: "Cortex-M0 · derrière le chargeur<br>application à 0x2800", link: "GPIO" }
  - { name: "Carte testée", detail: "8 relais · entrées un fil<br>détection de reset" }
---

## La carte

Un contrôleur CVC avec 8 relais (résistances chauffantes, chaudière, ventilateur, protection antigel) et trois contrôleurs : un STM32, un Nuvoton M031 et un ESP32 avec un modem cellulaire.

## Ce que j’ai fait (une mission d’une semaine)

- **Micrologiciel de test en usine pour le M031 :** test des relais, deux tests d’entrées monofil et un test de détection de réinitialisation, pilotés depuis une console RS485 au poste de test.
- **Fonctionne derrière un chargeur d’amorçage :** l’application est liée à l’offset 0x2800. Un Cortex-M0 n’a pas de registre de décalage de table des vecteurs, donc le chargeur d’amorçage doit lui-même sauter vers l’application.
- Se compile avec Keil (Arm Compiler 6) comme avec CMake et arm-none-eabi-gcc.
- **Changement de modem :** passage du modem de l’ESP32 du LTE-M américain au 2G sur les bandes 900/1800 MHz pour le marché indien.
