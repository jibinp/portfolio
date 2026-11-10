---
title: "Vérificateur de télémétrie de flotte"
tag: "Pipeline de données"
icon: "cloud"
cats: ["sw", "db"]
chips: ["Python", "MQTT", "GitHub Actions", "Apps Script", "SQLite", "Streamlit"]
summary: "Un collecteur MQTT en écoute seule et une tâche cloud planifiée qui évaluent chaque paquet d’une flotte de contrôleurs d’éclairage public par rapport aux formats de paquets du micrologiciel. 19 465 paquets de 13 appareils vérifiés au cours de ses 17 premiers jours."
order: 4
flow:
  - { name: "Appareils de terrain", detail: "Contrôleurs d’éclairage<br>environ 15 paquets par heure", link: "MQTT · session persistante" }
  - { name: "Collecteur", detail: "Abonné en écoute seule<br>le courtier garde les paquets", link: "toutes les 3 h" }
  - { name: "Tâche GitHub Actions", detail: "Vide la file<br>fichiers JSONL datés", link: "Apps Script" }
  - { name: "Vérificateur + tableau de bord", detail: "Archive Google Drive<br>bon · avertissement · mauvais<br>Streamlit · SQLite" }
---

## Le problème

Les appareils sur le terrain envoient des paquets toute la journée. Quand l’un d’eux envoie un paquet erroné, personne ne le remarque avant qu’un client se plaigne. Le vérificateur devait capter chaque paquet, le vérifier et ne rien coûter à faire tourner.

## Fonctionnement

- **Collecteur :** il écoute seulement et ne publie jamais. Une session MQTT persistante permet au courtier de conserver les paquets lorsque personne n’est connecté.
- **Tâche planifiée :** toutes les 3 heures, GitHub Actions vide la file dans des fichiers JSONL datés et les envoie vers un dossier Google Drive via Google Apps Script.
- **Vérificateur :** chaque paquet est classé bon, avertissement ou mauvais par rapport aux formats de paquets du micrologiciel, avec la raison.
- **Tableau de bord :** Streamlit sur une base SQLite locale pour le tri sur le terrain, plus un mode en direct actualisé toutes les 10 minutes.

Aucun serveur à payer, et le PC n’a pas besoin de rester allumé.

## Résultats

Au cours de ses 17 premiers jours : **19 465 paquets** de **13 appareils**, classés 16 423 bons, 1 251 avertissements et 1 765 mauvais. Les paquets mauvais et en avertissement ont mené l’équipe micrologiciel droit aux défauts à corriger.

J’ai conçu et écrit l’outil en entier.
