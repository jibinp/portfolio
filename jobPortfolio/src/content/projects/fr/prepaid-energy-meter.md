---
title: "Compteur d’énergie prépayé"
tag: "Universitaire · B.Tech"
icon: "zap"
cats: ["hw", "fw"]
chips: ["8051", "Assembleur", "Keil", "Proteus", "GSM / SMS"]
summary: "Un compteur d’électricité prépayé sur 8051, écrit en assembleur : il compte les impulsions d’énergie, déduit le crédit du solde, avertit quand le crédit est faible et coupe l’alimentation à zéro. Recharge par SMS."
order: 22
image: "/img/projects/meter.jpg"
imageAlt: "Afficheur du compteur indiquant le solde prépayé"
flow:
  - { name: "Compteur d’énergie", detail: "Sortie d’impulsions", link: "impulsions" }
  - { name: "Contrôleur 8051", detail: "Micrologiciel en assembleur<br>solde · afficheur<br>coupure par relais", link: "GSM · SMS / GPRS" }
  - { name: "Serveur de recharge", detail: "Vérifie le code PIN<br>renvoie le crédit" }
---

## Fonctionnement

- Le 8051 compte les impulsions du compteur d’énergie et déduit une unité monétaire du solde toutes les 5 impulsions.
- **Solde faible :** un voyant d’avertissement et un buzzer, et « LOW BALANCE » à l’écran.
- **Solde nul :** un relais coupe l’alimentation, avec un voyant rouge, un buzzer et « PLEASE RECHARGE ».
- **Recharge :** l’utilisateur envoie le code d’une carte à gratter par SMS. Le serveur le vérifie et renvoie le crédit au compteur via GPRS.

## Outils

Micrologiciel en assembleur 8051 sous Keil, testé en simulation Proteus pour un solde normal, faible et nul.

[Code, circuit et simulation sur GitHub](https://github.com/jibinp/Centralised-Energy-Meter)
