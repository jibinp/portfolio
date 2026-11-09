---
title: "Vérificateur de télémétrie de parc"
tag: "Chaîne de données"
icon: "cloud"
cats: ["sw", "db"]
chips: ["Python", "MQTT", "GitHub Actions", "Apps Script", "JSONL"]
summary: "Un collecteur MQTT en écoute seule et une tâche infonuagique planifiée qui contrôlent chaque paquet d’un parc de contrôleurs d’éclairage public selon les formats du micrologiciel."
order: 4
---

## Le problème

Les appareils sur le terrain envoient des paquets toute la journée. Quand l’un d’eux envoie un paquet erroné, personne ne le remarque avant la plainte d’un client. Il fallait capter chaque paquet, le vérifier, et ne rien payer pour le faire tourner.

## Fonctionnement

- **Collecteur :** écoute seulement, ne publie jamais. Une session MQTT persistante permet au courtier de garder les paquets quand personne n’est connecté.
- **Tâche planifiée :** toutes les 3 heures, GitHub Actions vide la file dans des fichiers JSONL datés et les envoie dans un dossier Google Drive via Google Apps Script.
- **Vérificateur :** chaque paquet est classé bon, avertissement ou mauvais selon les formats du micrologiciel, avec la raison.
- **Tableau de bord :** un tableau de bord local pour le tri sur le terrain.

Aucun serveur à payer, et le PC n’a pas besoin de rester allumé.
