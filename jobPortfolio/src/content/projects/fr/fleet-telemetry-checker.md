---
title: "Vérificateur de télémétrie de flotte"
tag: "Pipeline de données"
icon: "cloud"
cats: ["sw", "db"]
chips: ["Python", "MQTT", "Tâches planifiées", "SQLite", "Streamlit"]
summary: "Un collecteur MQTT en écoute seule et une tâche cloud planifiée qui évaluent chaque paquet d’une flotte de contrôleurs d’éclairage public par rapport aux formats de paquets du micrologiciel. près de 20 000 paquets de 13 appareils vérifiés au cours de ses 17 premiers jours."
order: 4
flow:
  - { name: "Appareils de terrain", detail: "Contrôleurs d’éclairage", link: "MQTT · session persistante" }
  - { name: "Collecteur", detail: "Abonné en écoute seule<br>le courtier garde les paquets", link: "toutes les 3 h" }
  - { name: "Tâche cloud planifiée", detail: "Vide la file<br>fichiers d’archive datés", link: "archive" }
  - { name: "Vérificateur + tableau de bord", detail: "Bon · avertissement · mauvais<br>Streamlit · SQLite" }
---

## Le problème

Les appareils sur le terrain envoient des paquets toute la journée. Quand l’un d’eux envoie un paquet erroné, personne ne le remarque avant qu’un client se plaigne. Le vérificateur devait capter chaque paquet, le vérifier et ne rien coûter à faire tourner.

## Fonctionnement

- **Collecteur :** il écoute seulement et ne publie jamais. Une session MQTT persistante permet au courtier de conserver les paquets lorsque personne n’est connecté.
- **Tâche planifiée :** toutes les 3 heures, une tâche cloud planifiée vide la file dans des fichiers d’archive datés.
- **Vérificateur :** chaque paquet est classé bon, avertissement ou mauvais par rapport aux formats de paquets du micrologiciel, avec la raison.
- **Tableau de bord :** Streamlit sur une base SQLite locale pour le tri sur le terrain, plus un mode en direct actualisé toutes les 10 minutes.

Aucun serveur à payer, et le PC n’a pas besoin de rester allumé.

## Résultats

Au cours de ses 17 premiers jours, il a vérifié **près de 20 000 paquets** de **13 appareils**, chacun classé bon, avertissement ou mauvais avec la raison. Ces classements ont mené l’équipe micrologiciel droit aux défauts à corriger.

J’ai conçu et écrit l’outil en entier.
