---
title: "Contrôleur d’éclairage public intelligent"
tag: "Ville intelligente"
icon: "light"
cats: ["hw", "fw"]
chips: ["Quectel EC200U open-CPU", "SDK Quectel", "Compteur DLMS", "Relais bistables", "Programmateur", "4G MQTT", "Python"]
summary: "Un contrôleur d’éclairage public 4G qui lit un compteur d’énergie, commute des zones de lampadaires selon un programme et déclenche des alarmes électriques. Responsabilité complète du projet, de la conception à la livraison."
order: 3
flow:
  - { name: "Compteur d’énergie", detail: "Relevés DLMS<br>tension · courant · énergie", link: "DLMS" }
  - { name: "Contrôleur d’éclairage", detail: "Quectel EC200U open-CPU<br>3 relais bistables · programmateur<br>alarmes électriques et de lampe", link: "4G · MQTT" }
  - { name: "Courtier MQTT", detail: "État · alarmes<br>mises à jour OTA", link: "écoute seule" }
  - { name: "Vérificateur de télémétrie", detail: "Classe chaque paquet<br>bon · avertissement · mauvais" }
---

## Le produit

Le contrôleur lit un compteur d’énergie en DLMS et calcule l’énergie par zone, commute trois zones de lampadaires par relais bistables en mode manuel ou programmé, déclenche des alarmes de surtension, de sous-tension, de surintensité et de défaut de lampe, et transmet en MQTT sur 4G. Le micrologiciel tourne directement sur le module 4G Quectel EC200U (open-CPU), avec le SDK Quectel : il n’y a donc pas de microcontrôleur séparé. Les données hors ligne et les réglages sont conservés en flash, et les mises à jour du micrologiciel sont livrées à distance.

Le matériel est une conception à plusieurs cartes qui tient la commutation à fort courant à l’écart de l’électronique de commande.

## Ce que j’ai fait

- **Responsabilité complète du projet :** micrologiciel, essais, demandes de modification et points d’avancement client.
- **Protection électrique :** un déclenchement matériel en surtension et un filtrage du bruit, pour que de brefs pics en entrée ne soient pas pris pour une surtension et ne déclenchent pas les relais. Testé par injection de bruit.
- **Essais :** essais d’endurance avec des compteurs réels et des simulateurs de compteur, et une série de production.

## État

Micrologiciel livré au client. Les mises à jour sont livrées à distance aux unités sur le terrain.

## Sur le terrain

Chaque paquet envoyé par les contrôleurs est évalué par le [vérificateur de télémétrie de flotte](/portfolio/fr/projects/fleet-telemetry-checker), que j’ai construit.
