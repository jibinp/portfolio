---
title: "Daily Log : plateforme de données assistée par l’IA"
tag: "Projet indépendant"
icon: "db"
cats: ["sw", "db"]
chips: ["Agents d’IA", "JavaScript", "PostgreSQL · Supabase", "Sécurité au niveau des lignes", "PWA", "GitHub Actions", "Chart.js", "Netlify"]
summary: "Une application web assistée par l’IA qui réunit des outils de santé, de carrière et de finances sous un même toit : environ 47 pages avec une version mobile, environ 100 tables PostgreSQL protégées par la sécurité au niveau des lignes, et une analyse des données par des agents d’IA en arrière-plan."
order: 7
flow:
  - { name: "Agents d’IA", detail: "Analyse des données en arrière-plan", link: "données relues" }
  - { name: "Web + application mobile", detail: "Environ 47 pages · PWA<br>tableaux de bord Chart.js", link: "SDK Supabase · RLS" }
  - { name: "PostgreSQL", detail: "4 schémas · ~100 tables<br>fonctions SQL · déclencheurs", link: "écritures" }
  - { name: "Tâches planifiées", detail: "Flux de données<br>déclencheurs edge" }
---

## Ce que c’est

Une application web assistée par l’IA qui réunit des outils distincts de santé, de carrière et de finances sous un même toit, avec saisie de données, tableaux de bord et graphiques pour chacun. Elle fonctionne sur ordinateur et comme application mobile installable (PWA), et elle est construite comme un vrai produit : une vraie conception de base de données, un contrôle d’accès, des tâches de données automatisées et des tests.

## Assistance par l’IA

Des agents d’IA (Claude Code) fonctionnent en arrière-plan et se chargent de l’analyse des données derrière l’application. Leurs résultats sont relus avant d’arriver dans la base de données.

## Comment elle est construite

- **Interface :** environ 47 pages en HTML, CSS et JavaScript pur, plus une coque mobile de 10 écrans. Graphiques avec Chart.js.
- **Base de données :** PostgreSQL sur Supabase. 4 schémas, environ 100 tables, des fonctions et déclencheurs SQL, et la sécurité au niveau des lignes sur chaque table pour que chaque ligne appartienne à son propriétaire.
- **Tâches de données :** des tâches planifiées exécutent des scripts Node qui récupèrent des flux de données selon un calendrier. De petites fonctions edge en TypeScript permettent au bouton Actualiser de la page de lancer ces tâches sans placer de jeton dans le navigateur.
- **Tests :** environ 420 tests unitaires répartis dans 50 fichiers de test.
- **Hébergement :** Netlify, avec une étape qui saute la compilation lorsque le site n’a pas changé, et un cache hors ligne pour l’application mobile.

## Son évolution

- **v1 :** planifiée avec un document de conception générale, puis construite comme une application à un seul module sur Supabase.
- **v2 :** reconstruite en plateforme multi-modules complète.

Développée avec l’aide de l’IA (Claude Code), les tests servant de contrôle à chaque modification.
