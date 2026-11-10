---
title: "Agents d’IA pour la gestion d’une équipe d’ingénierie"
tag: "IA · Automatisation"
icon: "cpu"
cats: ["sw"]
chips: ["Claude Code", "Agents d’IA", "Python", "Git", "Conception de règles et de prompts"]
summary: "Des agents d’IA qui rédigent la paperasse d’une équipe de 6 ingénieurs : feuilles de temps quotidiennes, rapports hebdomadaires aux clients et plans de tâches, à partir de ce qui s’est réellement passé dans les fichiers de projet. Je les ai conçus et développés, et je relis tout ce qu’ils écrivent."
order: 6.5
featured: true
flow:
  - { name: "Preuves de projet", detail: "Commits git · fichiers modifiés<br>feuilles de temps · notes de session", link: "script de preuves" }
  - { name: "Agents Claude Code", detail: "Rédacteur de feuilles de temps<br>rapport hebdomadaire client<br>planificateur de tâches", link: "brouillons" }
  - { name: "Relecture du chef", detail: "Vérifié par moi<br>envoyé au client ou à l’équipe" }
---

## Le problème

Mener plusieurs projets clients en parallèle, c’est écrire sans arrêt : une feuille de temps chaque jour, un rapport par projet et par semaine pour chaque client, et un plan de tâches par ingénieur et par semaine. Tout part de la même matière (ce qui a changé dans le code, les documents, les comptes rendus) et tout prend du temps à l’ingénierie.

## Ce que j’ai construit

Des agents Claude Code sur mesure, chacun avec ses outils, ses entrées et ses règles écrites. Les trois que j’utilise pour l’équipe :

- **Rédacteur de feuilles de temps :** transforme le vrai travail de la journée dans les dossiers de projet en feuille de temps heure par heure.
- **Rapport hebdomadaire au client :** rédige un rapport en langage simple par projet et par semaine, dans le format propre à ce projet, pour que chaque client retrouve la même structure chaque semaine.
- **Planificateur de tâches :** prépare les tâches de la semaine suivante pour chaque ingénieur à partir du travail ouvert de chaque projet, en tenant compte des jours ouvrés, des jours fériés et des congés.

## Les preuves d’abord

Les agents n’écrivent pas de mémoire. Un petit script Python s’exécute d’abord et rassemble les preuves de la semaine pour chaque projet : commits, modifications non validées, chaque fichier touché, les lignes de feuille de temps et les notes de session. L’agent ouvre ensuite les fichiers modifiés et écrit à partir d’eux.

Les règles écrites dans chaque agent comptent autant que les prompts :

- **Ne jamais inventer de travail.** Sans preuve et sans information de ma part, pas de rapport pour ce projet.
- **Langage client uniquement :** pas de noms de registres, de chemins de fichiers, de hachages de commit ni de noms d’outils internes.
- **Aucun secret :** pas de mots de passe, de clés, d’identifiants d’appareils ni d’adresses IP.
- **Garder le format :** relire les derniers rapports d’abord pour garder le ton et les titres d’une semaine à l’autre.

## Le résultat

L’écriture qui prenait du temps à l’ingénierie est devenue un brouillon que je relis et j’envoie. Dans la même période, j’ai construit d’autres agents pour mon propre parcours professionnel, comme des outils de recherche et d’entraînement.

Pour en savoir plus, lisez l’article (en anglais) [What I let AI agents do as an engineering lead](/portfolio/articles/ai-agents-engineering-lead).
