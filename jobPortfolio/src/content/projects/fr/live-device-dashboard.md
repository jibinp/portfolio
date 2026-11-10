---
title: "Tableau de bord d’appareils en direct"
tag: "Web · temps réel"
icon: "monitor"
cats: ["sw"]
chips: ["Python", "Flask", "Socket.IO", "MQTT", "JavaScript"]
summary: "Un backend Flask s’abonne aux topics MQTT des appareils et pousse chaque mesure vers le navigateur via Socket.IO, pour que les données des capteurs apparaissent sur la page dès que l’appareil les envoie."
order: 5
flow:
  - { name: "Boîtier de capteurs", detail: "Qualité de l’air · CO2 · COV<br>événements sonores · comptage", link: "MQTT · JSON" }
  - { name: "Backend Flask", detail: "Abonné paho-mqtt<br>Python", link: "Socket.IO" }
  - { name: "Navigateur", detail: "Page en direct<br>sans rechargement" }
---

## Fonctionnement

1. L’appareil publie une mesure JSON sur un topic MQTT.
2. Un backend Flask s’abonne à ce topic.
3. Chaque mesure est poussée directement vers le navigateur via Socket.IO.
4. La page se met à jour sur place, sans rechargement ni interrogation périodique.

## Où je l’ai utilisé

Une unité multicapteur d’intérieur : température, humidité, pression, qualité de l’air, CO2, COV et ammoniac, un microphone pour les événements sonores et une caméra thermique pour le comptage de personnes. Le tableau de bord donnait aux ingénieurs terrain et d’essai une vue en direct du capteur pendant qu’ils travaillaient dessus. Un abonné en ligne de commande et un éditeur de test l’accompagnaient pour les essais sur banc.
