---
title: "Tableau de bord d’appareils en direct"
tag: "Web · temps réel"
icon: "monitor"
cats: ["sw"]
chips: ["Flask", "Socket.IO", "MQTT", "JavaScript"]
summary: "Un backend Flask s’abonne aux sujets MQTT des appareils et envoie chaque mesure au navigateur par Socket.IO : les données s’affichent dès que l’appareil les envoie."
order: 5
featured: true
---

## Fonctionnement

1. L’appareil publie une mesure JSON sur un sujet MQTT.
2. Un backend Flask est abonné à ce sujet.
3. Chaque mesure est envoyée directement au navigateur par Socket.IO.
4. La page se met à jour sur place, sans rechargement ni interrogation.

Les ingénieurs de terrain et d’essai voient ainsi un capteur en direct pendant qu’ils travaillent dessus.
