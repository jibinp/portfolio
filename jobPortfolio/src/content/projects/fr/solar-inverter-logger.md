---
title: "Enregistreur de données 4G pour onduleurs solaires sur AWS IoT"
tag: "Énergie · Responsable technique"
icon: "zap"
cats: ["hw", "fw", "sw"]
chips: ["STM32", "4G LTE Cat-1", "RS485 Modbus", "AWS IoT Core", "Provisionnement de flotte", "IoT Jobs", "MQTT · TLS", "Élément sécurisé"]
summary: "Un enregistreur de données 4G qui lit des onduleurs solaires et transmet à AWS IoT, avec provisionnement de flotte, mises à jour à distance signées et rotation des certificats. Je suis le responsable technique et je porte la conception de bout en bout, de l’appareil jusqu’à AWS."
order: 9
featured: true
flow:
  - { name: "Onduleurs solaires", detail: "4 marques<br>4 types de charge utile", link: "RS485 · Modbus RTU" }
  - { name: "Enregistreur 4G", detail: "STM32 · 4G LTE Cat-1<br>élément sécurisé · RTC<br>16 Go de stockage tampon", link: "TLS · MQTT · QoS 1" }
  - { name: "AWS IoT Core", detail: "Provisionnement de flotte<br>Basic Ingest · règles<br>IoT Jobs : OTA + certificats", link: "règles" }
  - { name: "Plateforme du client", detail: "Données des onduleurs<br>alertes · rapports" }
---

## Le produit

L’enregistreur lit les onduleurs solaires de quatre marques en RS485 Modbus RTU et convertit les mesures en quatre types de charge utile (monophasé, triphasé et deux types hybrides avec données de batterie). Il les publie vers AWS IoT en 4G, conserve les données sur 16 Go de stockage quand le réseau tombe, et les renvoie sur un topic de reprise distinct. Le matériel comprend un élément sécurisé pour les certificats de l’appareil et une horloge secourue par batterie, pour que TLS fonctionne dès le tout premier démarrage.

## Conception AWS IoT (ma partie)

- **Provisionnement de flotte :** chaque enregistreur quitte l’usine avec un certificat de revendication partagé, se connecte une fois, et l’échange contre son propre certificat d’appareil et son nom de Thing.
- **Télémétrie :** MQTT sur TLS en QoS 1 via AWS IoT Basic Ingest, avec une gigue d’envoi aléatoire pour qu’une flotte entière ne transmette jamais dans la même seconde.
- **Mises à jour à distance via AWS IoT Jobs :** téléchargement HTTPS, vérification SHA-256 et de signature, partitions A/B avec retour arrière automatique, et remontée de l’état vers le cloud.
- **Rotation des certificats**, également via IoT Jobs : échange atomique, accusé de réception et nettoyage.
- **Bac à sable AWS :** types de Thing, stratégies de revendication et d’appareil, modèle de provisionnement, une Lambda de pré-provisionnement et la règle de routage, ainsi qu’un simulateur d’appareil en Python qui se provisionne lui-même et envoie les quatre types de charge utile, pour que le micrologiciel et le cloud puissent être testés avant que le matériel n’existe.
- **Fabrication :** la procédure de programmation en usine du certificat de revendication, du numéro de série, de l’autorité de certification racine et du point de terminaison, et un paquet de version de micrologiciel signé pour la chaîne de validation du client.

## Travail de direction

- **Revue des spécifications :** recoupement des trois documents de spécification du client (exigences, guide d’intégration AWS, format des charges utiles) et consignation de 18 questions ouvertes et contradictions, des noms de topics jusqu’à un boîtier trop bas pour ses connecteurs.
- **Plan d’ingénierie :** 56 tâches, 229 jours-personnes et 4 jalons ; un suivi des fonctionnalités couvrant 104 exigences, chacune rattachée à une clause de la spécification client.
- **Matériel :** architecture système, sélection des composants, et revue du schéma et du routage avec l’ingénieur matériel.
- Réunions client hebdomadaires et rapports d’avancement.

## État

En conception : architecture terminée, schéma et routage en revue. Le bac à sable AWS, le simulateur d’appareil et le premier prototype Modbus vers AWS sont les prochaines étapes. Un essai d’endurance de 7 jours et un pilote sur le terrain font partie du plan d’acceptation.
