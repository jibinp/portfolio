---
title: "Contrôleur d’éclairage public intelligent"
tag: "Ville intelligente"
icon: "light"
cats: ["hw", "fw"]
chips: ["Altium", "DC-DC", "Relais", "MQTT"]
summary: "Carte de commande principale (rév. 3.0) avec son étage d’alimentation DC-DC, et une carte relais distincte pour commuter les lampes, toutes deux sous Altium. Les contrôleurs transmettent leurs données à un courtier MQTT."
order: 3
---

## Matériel

- **Carte de commande principale, rév. 3.0 :** la carte contrôleur, avec son propre étage d’alimentation DC-DC.
- **Carte relais :** une carte distincte pour commuter les lampes, qui éloigne la commutation de fort courant de l’électronique de commande.

Les deux cartes ont été conçues sous Altium.

## Sur le terrain

Les contrôleurs publient leur état sur un courtier MQTT. Le [vérificateur de télémétrie de parc](/fr/projects/fleet-telemetry-checker) contrôle chaque paquet envoyé par rapport aux formats du micrologiciel.
