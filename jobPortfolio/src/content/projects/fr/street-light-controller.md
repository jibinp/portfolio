---
title: "Contrôleur d’éclairage public intelligent"
tag: "Ville intelligente"
icon: "light"
cats: ["hw", "fw"]
chips: ["Quectel EC200N open-CPU", "Compteur DLMS", "Relais", "4G MQTT", "Altium"]
summary: "Un contrôleur d’éclairage public 4G qui lit un compteur d’énergie, commute des zones de lampadaires et déclenche des alarmes électriques. J’ai dirigé le projet, choisi les composants de comptage et corrigé un défaut de battement des relais dans le micrologiciel de terrain."
order: 3
flow:
  - { name: "Compteur d’énergie", detail: "Relevés DLMS<br>tension · courant · énergie", link: "DLMS · RS232" }
  - { name: "Contrôleur d’éclairage", detail: "Quectel EC200N open-CPU<br>3 relais · zones · RTC<br>alarmes de surtension et sous-tension", link: "4G · MQTT" }
  - { name: "Courtier MQTT", detail: "État · alarmes<br>mises à jour OTA", link: "écoute seule" }
  - { name: "Vérificateur de télémétrie", detail: "Classe chaque paquet<br>bon · avertissement · mauvais" }
---

## Le produit

Le contrôleur lit un compteur d’énergie en DLMS, commute des zones de lampadaires par relais, déclenche des alarmes de surtension, de sous-tension et de surintensité, et transmet en MQTT sur 4G. Le micrologiciel tourne directement sur le processeur du module 4G (Quectel EC200N open-CPU) : il n’y a donc pas de microcontrôleur séparé.

Le matériel est un ensemble de quatre cartes conçues sous Altium par l’équipe : la carte de commande principale (rév. 3.0), une carte d’alimentation, une carte relais qui tient la commutation à fort courant à l’écart de l’électronique de commande, et une carte de lecture optique du compteur.

## Mon rôle

- Responsable technique : planification, demandes de modification et points d’avancement client.
- Sélection et vérification des circuits intégrés de comptage et de leurs pilotes.
- **Correction du battement des relais :** des pics de bruit sur les broches d’entrée étaient interprétés comme une surtension et déclenchaient les relais. J’ai ajouté un anti-rebond et l’ai testé par injection de bruit.
- Essais finaux sur un lot de production de 10 cartes avec 2 compteurs réels et 3 simulateurs de compteur.

## État

Micrologiciel livré au client. Les mises à jour sont déployées à distance : l’une d’elles a été appliquée à une unité déjà sur le terrain.

## Sur le terrain

Chaque paquet envoyé par les contrôleurs est évalué par le [vérificateur de télémétrie de flotte](/portfolio/fr/projects/fleet-telemetry-checker), que j’ai construit.
