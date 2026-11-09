---
title: "Moniteur d’ascenseur : carte + micrologiciel OTA"
tag: "IoT du bâtiment"
icon: "elevator"
cats: ["hw", "fw"]
chips: ["Altium", "STM32", "STM8 · CAN", "4G", "MQTT", "FOTA"]
summary: "Carte Altium avec étages d’alimentation et de secours par batterie, contrôleur STM32 et modem 4G, et le micrologiciel qui se met à jour à distance."
order: 2
featured: true
---

## Matériel

Une carte Altium avec des étages d’alimentation et de secours par batterie distincts, un contrôleur principal STM32, un nœud CAN STM8 et un modem cellulaire 4G.

## Micrologiciel

- Réorganisation de la flash autour d’un **chargeur d’amorçage de 4 Ko** sur mesure.
- Analyse des échecs FOTA : écriture des partitions, vérification de la charge utile et passage au chargeur d’amorçage.
- Correction de défauts de synchronisation CAN et d’émetteur-récepteur, et du relais de commandes AT / SMS entre le STM32 et le STM8.
- Correction du réabonnement MQTT après une perte de connexion.
- Accompagnement du client pendant les essais d’acceptation.
