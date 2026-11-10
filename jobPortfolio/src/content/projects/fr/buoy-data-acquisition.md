---
title: "Micrologiciel de bouée océanique : débogage et maintenance"
tag: "Marine"
icon: "anchor"
cats: ["fw"]
chips: ["Nuvoton M451 · Cortex-M4", "C bare-metal", "GPS / NavIC", "Keil · Arm Compiler 6"]
summary: "Reprise du micrologiciel de production d’une bouée lumineuse de navigation solaire (position GPS et NavIC, batterie et charge solaire, état de la lampe, alerte tsunami) et correction des défauts constatés en service."
order: 10
flow:
  - { name: "GNSS + capteurs", detail: "Récepteur GPS · NavIC<br>batterie · solaire · luminosité", link: "UART · ADC" }
  - { name: "Contrôleur de bouée", detail: "Nuvoton M451 · Cortex-M4<br>charge · logique de lampe<br>alerte tsunami", link: "4× par jour + sur commande" }
  - { name: "Rapports d’état", detail: "Position · tensions<br>état de la lampe · alertes" }
---

## Le produit

Une bouée lumineuse de navigation alimentée à l’énergie solaire. Son contrôleur enregistre la position GPS et NavIC, les tensions de la batterie et du panneau solaire et l’état de la lampe, déclenche une alerte tsunami à partir d’un changement d’altitude, transmet quatre fois par jour et répond aux commandes à distance. Le micrologiciel a été écrit par un collègue et était déjà en production quand je l’ai repris.

## Ce que j’ai corrigé

- **Mesure de luminosité figée :** la valeur en lux restait bloquée à 1 ou à 65 481. La fenêtre min/max n’était jamais réinitialisée, et le résultat d’un `pow(10, x)` débordait un entier 16 bits.
- **État de la lampe bloqué sur allumé :** remplacement de l’ancienne logique par un anti-rebond sur 5 échantillons ; la réaction prend désormais environ 0,5 s.
- **Nouvelle alerte :** lampe dans le mauvais état pour l’heure de la journée.
- **Mise à niveau du compilateur :** migration du projet d’Arm Compiler 5 à 6. Correction d’une erreur d’édition de liens, réécriture du gestionnaire HardFault en fonction naked et correction des scripts de compilation.
- Nommage ADC plus clair et champs de débogage supplémentaires dans la réponse d’état à distance.

18 modifications consignées au total.
