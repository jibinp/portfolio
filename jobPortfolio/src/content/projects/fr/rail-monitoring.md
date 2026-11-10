---
title: "Système de maintenance prédictive ferroviaire"
tag: "IoT ferroviaire · Projet phare"
icon: "train"
cats: ["hw", "fw", "sw", "db"]
chips: ["STM32H753", "FreeRTOS", "LoRa", "Zigbee", "4G LTE", "Ethernet", "Passerelle Linux", "Python", "SQLite", "MQTT · TLS", "Données IA/ML"]
summary: "Un système de maintenance prédictive pour la signalisation ferroviaire. Des unités de terrain en bordure de voie enregistrent le comportement de chaque équipement, et ces données de terrain entraînent des modèles d’IA/ML qui prédisent les pannes avant qu’elles n’arrêtent un train. J’ai écrit le micrologiciel des unités de terrain et la passerelle de gare sous Linux, et je dirige le projet. Conçu selon la spécification de l’organisme national de recherche ferroviaire."
order: 1
flagship: true
featured: true
flow:
  - { name: "Capteurs en voie", detail: "Tension · courant<br>vibrations (RS485)<br>contacts de relais", link: "ADC · RS485 · ES" }
  - { name: "Unité de terrain", detail: "STM32H753 · FreeRTOS<br>64 échantillons par cycle<br>journal d’événements en flash", link: "LoRa · Zigbee · 4G · Ethernet" }
  - { name: "Passerelle de gare", detail: "PC Linux · Python<br>stockage et retransmission SQLite<br>source de temps des unités", link: "MQTT · TLS · fibre + 4G" }
  - { name: "Cloud ferroviaire", detail: "Prédiction de pannes par IA/ML<br>alertes · tableaux de bord" }
---

## Le problème

Les équipements de signalisation comme les moteurs d’aiguillage déplacent les rails à un embranchement. Quand l’un d’eux commence à faiblir, le premier signe est souvent un train arrêté à un signal. Le but est la **maintenance prédictive** : enregistrer le comportement de chaque équipement à chaque manœuvre, utiliser ces données de terrain pour entraîner des modèles d’IA/ML, et prédire des défauts comme une mauvaise lubrification, un frottement ou un obstacle avant qu’ils ne causent un retard.

Les unités sont installées en bordure de voie, subissent des coupures de courant et partagent des canaux radio étroits ; les données doivent donc résister à tout cela.

## Le système

- **Unité de terrain :** STM32H753 avec FreeRTOS. Échantillonne la tension, le courant et les vibrations, et capture la signature de forme d’onde de chaque manœuvre. Conçue pour plusieurs liaisons : LoRa, Zigbee et 4G directement depuis le MCU, et Wi-Fi ou Ethernet via un ESP32.
- **Passerelle de gare :** une application Python sur un PC Linux. Collecte les données de toutes les unités de terrain d’une gare en LoRa (point à point et LoRaWAN), Ethernet et 4G, les stocke et les transmet au cloud.
- **Cloud ferroviaire :** l’application d’IA/ML apprend à partir des données de terrain, prédit les pannes et envoie des alertes au poste de contrôle et sur mobile.

## Ce que j’ai construit

**Micrologiciel des unités de terrain**

- **Moteur d’échantillonnage :** ADC cadencé par minuterie avec tampon circulaire DMA, 64 échantillons par cycle secteur de 50 Hz, 7 canaux actifs, avec moyennage non bloquant.
- **Intégration :** un protocole en cinq étapes (enregistrement, affectation, paramètres, synchronisation horaire, fin) qui sauvegarde sa progression en flash, pour qu’une coupure de courant ne laisse jamais une unité à moitié configurée.
- **Protocole radio :** trames binaires compactes avec accusés de réception et renvoi des trames manquantes, au lieu du JSON, pour économiser le temps d’antenne.
- **Stockage d’événements en flash :** les événements sont conservés dans une zone de 5 Mo de flash SPI pendant que la liaison est coupée, puis livrés dans l’ordre dès son rétablissement.
- **Pilotes :** RS485 Modbus RTU pour un inclinomètre, LoRa par commandes AT, affichage et voyants d’état.

**Passerelle de gare (PC Linux)**

- **Aucun événement perdu :** une file de stockage et retransmission SQLite avec un journal de 5 millions d’événements. Un événement n’est marqué comme envoyé qu’après l’accusé de réception du courtier MQTT du cloud (MQTT QoS 1 sur TLS).
- **Liaison montante redondante :** la fibre comme liaison principale et la 4G en secours ; les données sont conservées pendant les coupures et envoyées à la reconnexion.
- **Source horaire de la gare :** maintient l’horloge de chaque unité de terrain alignée, pour que les signatures de forme d’onde des différents équipements concordent pour les modèles d’IA/ML.
- **Gestion des appareils :** intégration et identité de chaque unité de terrain, provisionnement des appareils LoRaWAN, rapports d’état et journal d’audit.
- **Interface de gare :** une application web HTTPS locale (Flask) pour la mise en service et la surveillance.

Les modèles d’IA/ML tournent dans l’application cloud. Mon rôle est de garantir que les données dont ils apprennent sont complètes, alignées dans le temps et jamais perdues.

## Des preuves, pas des promesses

Un essai formel du stockage d’événements en flash :

- **74 h 36 min** avec la liaison radio coupée : **568 sur 568** événements stockés et livrés, **0 trou**.
- Le pointeur d’écriture flash correspondait aux données de la passerelle à **0 octet** près.
- 150 événements déclenchés pendant un envoi en cours : tous réussis.

## Des bogues qui méritent d’être racontés

- **Démarrage LoRa silencieux :** la séquence d’initialisation ne vérifiait jamais les réponses du module. J’ai porté l’attente après réinitialisation de 1,2 s à 3 s et ajouté des reprises.
- **Mesure de courant fausse d’un facteur 1000 :** une conversion mA vers A était appliquée deux fois, et la valeur d’une résistance de mesure était erronée dans le code. Les deux ont été corrigées et l’ensemble recalibré.

## Ce que j’ai dirigé

- La conception du système, le schéma d’identifiants d’événements et le flux de données de l’unité de terrain jusqu’au cloud.
- J’ai piloté la refonte de la carte rév. 2 (entrées analogiques de tension et de courant, entrées numériques, ESP32, Ethernet, RS485) : spécification et revue, avec l’ingénieur matériel.
- J’ai rédigé la référence du protocole et de l’implémentation de la passerelle, pour qu’un autre ingénieur puisse la reprendre.
- Le plan d’essais et de certification, avec traçabilité des exigences jusqu’aux essais.
- Les démonstrations client et les rapports hebdomadaires. État : prototype et démonstration client.
