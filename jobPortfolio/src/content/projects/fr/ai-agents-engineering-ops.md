---
title: "Agents d’IA pour la gestion d’une équipe d’ingénierie"
tag: "IA · Automatisation"
icon: "cpu"
cats: ["sw"]
chips: ["Claude Code", "Agents d’IA", "Python", "Git", "Conception de règles et de prompts"]
summary: "7 agents d’IA sur mesure qui soutiennent une équipe de 6 ingénieurs dans quatre domaines : gestion de l’équipe, recherche, analyse de données et développement assisté par l’IA, en partant des vrais fichiers de projet. Je les ai conçus et développés, et je relis tout ce qu’ils produisent."
order: 6.5
cover: "/img/projects/ai-agents-engineering-ops-cover.png"
coverAlt: "Illustration : preuves de projet, agents d’IA, relecture, équipe et clients"
featured: true
flow:
  - { name: "Preuves de projet", detail: "Fichiers de projet · fiches techniques<br>données d’essai · notes de session", link: "script de preuves" }
  - { name: "Agents Claude Code", detail: "Gestion de l’équipe · recherche<br>analyse de données<br>développement assisté par l’IA", link: "brouillons" }
  - { name: "Relecture du chef", detail: "Vérifié par moi<br>envoyé au client ou à l’équipe" }
---

## Le problème

Mener plusieurs projets clients en parallèle, c’est écrire sans arrêt : une feuille de temps chaque jour, un rapport par projet et par semaine pour chaque client, et un plan de tâches par ingénieur et par semaine. Tout part de la même matière (ce qui a changé dans le code, les documents, les comptes rendus) et tout prend du temps à l’ingénierie.

## Ce que j’ai construit

7 agents Claude Code sur mesure, chacun avec ses outils, ses entrées et ses règles écrites, dans quatre domaines.

**Gestion de l’équipe**

- **Rédacteur de feuilles de temps :** transforme le vrai travail de la journée dans les dossiers de projet en feuille de temps heure par heure.
- **Rapport hebdomadaire au client :** rédige un rapport en langage simple par projet et par semaine, dans le format propre à ce projet, pour que chaque client retrouve la même structure chaque semaine.
- **Planificateur de tâches :** prépare les tâches de la semaine suivante pour chaque ingénieur à partir du travail ouvert de chaque projet, en tenant compte des jours ouvrés, des jours fériés et des congés.

**Soutien à l’ingénierie**

- **Recherche :** fiches techniques, normes et informations sur les composants pour les projets.
- **Analyse de données :** données d’essai et de terrain transformées en rapports clairs.
- **Développement assisté par l’IA :** revue du code du micrologiciel, outils de test et simulateurs.

## Les preuves d’abord

Les agents n’écrivent pas de mémoire. Pour la gestion de l’équipe, un petit script Python s’exécute d’abord et rassemble les preuves de la semaine pour chaque projet : commits, modifications non validées, chaque fichier touché, les lignes de feuille de temps et les notes de session. L’agent ouvre ensuite les fichiers modifiés et écrit à partir d’eux.

Les règles écrites dans chaque agent comptent autant que les prompts :

- **Ne jamais inventer de travail.** Sans preuve et sans information de ma part, pas de rapport pour ce projet.
- **Langage client uniquement :** pas de noms de registres, de chemins de fichiers, de hachages de commit ni de noms d’outils internes.
- **Aucun secret :** pas de mots de passe, de clés, d’identifiants d’appareils ni d’adresses IP.
- **Garder le format :** relire les derniers rapports d’abord pour garder le ton et les titres d’une semaine à l’autre.

## Le résultat

L’écriture, la recherche et l’analyse qui prenaient du temps à l’ingénierie sont devenues des brouillons que je relis et j’utilise.

Pour en savoir plus, lisez l’article (en anglais) [What I let AI agents do as an engineering lead](/portfolio/articles/ai-agents-engineering-lead).
