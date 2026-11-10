---
title: "Moniteur d’ascenseur : modernisation 4G avec mises à jour OTA"
tag: "IoT du bâtiment"
icon: "elevator"
cats: ["hw", "fw"]
chips: ["STM32F103", "STM8", "RS485 Modbus", "4G LTE", "MQTT", "FOTA"]
summary: "Une unité de modernisation qui lit un contrôleur d’ascenseur en RS485 et transmet l’état, les défauts et les compteurs en 4G. J’ai mené le projet jusqu’à l’acceptation client et corrigé les défauts du micrologiciel qui la bloquaient."
order: 2
flow:
  - { name: "Contrôleur d’ascenseur", detail: "Armoire existante<br>état · défauts · compteurs", link: "RS485 Modbus · ~1 s" }
  - { name: "Boîtier de suivi", detail: "STM32F103 · C bare-metal<br>file hors ligne en flash<br>chargeur d’amorçage FOTA", link: "UART · AT" }
  - { name: "Modem 4G + STM8", detail: "Modem LTE Quectel<br>STM8 pour les alertes SMS", link: "4G · MQTT" }
  - { name: "Cloud", detail: "État · défauts · compteurs<br>mises à jour à distance" }
---

## Le produit

L’unité se connecte à un contrôleur d’ascenseur existant en RS485 Modbus, lit une trame d’état environ une fois par seconde et envoie l’état, les défauts et les compteurs vers le cloud en MQTT sur 4G. Un coprocesseur STM8 gère les alertes SMS. Le contrôleur principal est un STM32F103 en C sans système d’exploitation (bare-metal), avec un modem 4G Quectel.

## Mon rôle

Responsable technique : confirmations client, demandes de modification, analyse du code, essais, expédition et support jusqu’aux essais d’acceptation client. Le micrologiciel de base et la première carte venaient de l’équipe. J’ai amené le micrologiciel jusqu’à un état livrable, piloté la révision V2 de la carte avec l’ingénieur matériel et géré les fournisseurs de PCB et d’assemblage.

## Corrections du micrologiciel

- **Les données hors ligne survivent aux coupures de courant :** déplacement de la file des messages hors ligne de la RAM vers la flash, ce qui libère environ 6 Ko de RAM.
- **Les réglages survivent au redémarrage :** le numéro de téléphone d’alerte, l’APN, le mode et l’intervalle d’envoi sont désormais stockés en flash.
- **Avis SMS jamais acquittés :** il manquait un terminateur de ligne aux messages du STM32 vers le STM8, si bien que le STM8 ne répondait jamais. Corrigé à la source.
- **Mises à jour à distance :** analyse des échecs FOTA à travers l’écriture des partitions, la vérification de l’image et le passage au chargeur d’amorçage. L’optimisation à l’édition de liens a réduit l’application de 54,5 Ko à 51 Ko pour tenir dans l’emplacement de mise à jour.
- **Une sortie de débogage qui fonctionne en cas de plantage :** un port série logiciel (bit-banging) qui écrit encore depuis le gestionnaire HardFault.

Au total, 11 bogues signalés et 4 nouveaux bogues découverts ont été corrigés.

## Résultat

Première unité expédiée pour les essais d’acceptation client, puis trois autres unités testées et expédiées.
