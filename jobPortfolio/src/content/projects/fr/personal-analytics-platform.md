---
title: "Daily Log : plateforme de données personnelles"
tag: "Projet personnel"
icon: "db"
cats: ["sw", "db"]
chips: ["JavaScript", "PostgreSQL · Supabase", "Sécurité au niveau des lignes", "PWA", "GitHub Actions", "Chart.js", "Netlify"]
summary: "Une application web d’environ 47 pages, avec une version mobile, pour mes propres données de finances, de santé et de carrière : environ 100 tables PostgreSQL protégées par la sécurité au niveau des lignes, des tâches de données planifiées et environ 420 tests unitaires."
order: 7
flow:
  - { name: "Web + application mobile", detail: "Environ 47 pages · PWA<br>tableaux de bord Chart.js", link: "SDK Supabase · RLS" }
  - { name: "PostgreSQL", detail: "4 schémas · ~100 tables<br>fonctions SQL · déclencheurs", link: "écritures" }
  - { name: "Tâches planifiées", detail: "Cron GitHub Actions<br>taux de change · données publiques<br>déclencheurs edge" }
---

## Ce que c’est

Une application web privée qui réunit mes propres données en un seul endroit, avec tableaux de bord et graphiques : finances, santé, progression de carrière, notes et tâches à faire. Elle fonctionne sur ordinateur et comme application mobile installable (PWA).

## Comment elle est construite

- **Interface :** environ 47 pages en HTML, CSS et JavaScript pur, plus une coque mobile de 10 écrans. Graphiques avec Chart.js.
- **Base de données :** PostgreSQL sur Supabase. 4 schémas, environ 100 tables, des fonctions et déclencheurs SQL, et la sécurité au niveau des lignes sur chaque table pour que chaque ligne appartienne à son propriétaire. Connexion par e-mail et mot de passe.
- **Tâches de données :** des tâches cron GitHub Actions exécutent des scripts Node qui récupèrent des données publiques, comme les taux de change quotidiens et les statistiques d’immigration publiées. De petites fonctions edge en TypeScript permettent au bouton Actualiser de la page de lancer ces tâches sans placer de jeton dans le navigateur.
- **Tests :** environ 420 tests unitaires répartis dans 50 fichiers de test.
- **Hébergement :** Netlify, avec une étape qui saute la compilation lorsque le site n’a pas changé, et un cache hors ligne pour l’application mobile.

## Son évolution

- **v1, Daily Compass** ([dépôt public](https://github.com/jibinp/Daily-Compass)) : planifiée avec un document de conception générale, puis construite comme journal de santé sur Supabase.
- **v2, Daily Log** : reconstruite en plateforme complète.

Développée avec l’aide de l’IA (Claude Code), les tests servant de contrôle à chaque modification.
