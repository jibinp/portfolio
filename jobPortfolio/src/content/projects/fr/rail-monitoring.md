---
title: "Surveillance de l’état des moteurs d’aiguillage ferroviaire"
tag: "IoT ferroviaire · Projet phare"
icon: "train"
cats: ["hw", "fw", "sw", "db"]
chips: ["STM32H753", "FreeRTOS", "LoRa", "4G · MQTT", "Altium", "SQLite", "Python"]
summary: "Unités de terrain en bordure de voie, réseau de capteurs LoRa et passerelle 4G qui détectent les défauts des moteurs d’aiguillage avant qu’ils n’arrêtent les trains. Conçu selon la spécification de l’organisme national de recherche ferroviaire."
order: 1
flagship: true
featured: true
flow:
  - { name: "Unité de terrain", detail: "STM32H753 · FreeRTOS<br>V / I / vibration", link: "LoRa" }
  - { name: "Passerelle de gare", detail: "SQLite · source horaire<br>ID d’événements globaux", link: "4G · MQTT" }
  - { name: "Backend", detail: "formes d’onde · FFT<br>jeux de données ML" }
---

## Le problème

Les moteurs d’aiguillage déplacent les rails à un embranchement. Quand l’un d’eux commence à faiblir, le premier signe est souvent un train arrêté à un signal. Le but : surveiller en continu la tension, le courant et les vibrations de chaque moteur et signaler un défaut avant qu’il ne cause un retard. Les unités sont installées en bordure de voie, subissent des coupures de courant et partagent un canal radio étroit.

## Ce que j’ai construit

- **Moteur d’échantillonnage continu :** ADC cadencé par minuterie vers un tampon circulaire DMA, à 64 échantillons par cycle secteur, avec moyennage non bloquant.
- **Protocole d’intégration :** cinq étapes (enregistrement, affectation, paramètres, synchronisation horaire, fin) avec reprises et persistance en flash résistante aux coupures de courant.
- **Trames radio :** trames binaires compactes avec accusés de réception par rafale au lieu du JSON, pour économiser le temps d’antenne LoRa.
- **Stockage d’événements en flash :** moteur de stockage validé par un rapport d’essai formel.
- **Pilotes :** pilote RS485 Modbus RTU pour un inclinomètre, et modules d’affichage et de voyants d’état.

## Ce que j’ai dirigé

- La conception du système, le schéma d’identifiants d’événements globaux et le flux de données de la passerelle (SQLite, source horaire).
- La carte rév. 2 sous Altium : entrées analogiques de tension et de courant, entrées numériques, ESP32 et Ethernet. Mise en service et transfert au sous-traitant d’assemblage CMS.
- Le plan de conformité CEM, environnementale et ferroviaire, avec traçabilité des exigences jusqu’aux essais et une présélection de laboratoires accrédités.
- Les outils Python de simulation, d’analyse et de configuration, et les caractéristiques FFT et jeux de données pour les modèles de maintenance prédictive.
