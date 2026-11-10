/*
  All page text that is not a project, in English and French.
  Edit here to change text; keep both languages in step.
*/

export const contact = {
  email: 'jibinp812@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jibinpoulose',
  github: 'https://github.com/jibinp',
  resume: '/Jibin_Poulose_Resume.pdf', // TODO: add the PDF to public/
};

export const t = {
  en: {
    meta: {
      title: 'Jibin Poulose · Electrical & Electronics Engineer',
      description:
        'Electrical and electronics engineer covering the whole connected product: hardware design and debugging, embedded firmware, backend and frontend software, and databases. Open to remote, hybrid and on-site roles worldwide.',
    },
    nav: {
      expertise: 'Expertise', projects: 'Projects', notes: 'Field notes', skills: 'Skills',
      experience: 'Experience', contact: 'Get in touch', menuOpen: 'Open menu', menuClose: 'Close menu',
      home: 'Home',
    },
    hero: {
      pill: 'Electrical & Electronics Engineer · Open to roles worldwide',
      h1: 'Ideas, <span class="grad">engineered.</span>',
      lead:
        'Electrical and electronics engineer who takes an idea all the way to a product that works in the field: circuit and PCB, the firmware that runs it, and the backend, database and dashboard its data ends up in. I also lead the team that ships it.',
      ctaProjects: 'View projects',
      ctaResume: 'Download resume',
      meta: 'Remote · Hybrid · Relocation-ready &nbsp;·&nbsp; Hardware · Firmware · Full-stack · Team lead',
    },
    stack: ['Altium Designer', 'Analog front ends', 'STM32 · FreeRTOS', 'LoRa · 4G · MQTT', 'FOTA · Bootloader', 'Python · Flask', 'JavaScript · TypeScript', 'PostgreSQL · Supabase', 'SQLite', 'GitHub Actions'],
    highlights: [
      { num: '4<span>layers</span>', label: 'of the product I work in: board, firmware, backend, front end' },
      { num: '4<span>PCBs</span>', label: 'Altium board designs across rail, elevator and street-light products' },
      { num: '6', label: 'product domains: rail, building, smart city, industrial, energy, marine' },
      { num: 'Lead', label: 'of a 6-engineer team across 5+ concurrent client projects' },
    ],
    expertise: {
      eyebrow: '01 — Expertise',
      h2: 'One engineer, every layer of the product',
      sub: "Most IoT problems sit where two layers meet: a firmware bug that's really an op-amp, a dashboard gap that's really a packet format. I work on both sides of each of those boundaries.",
      more: 'Full skills list',
      items: [
        { icon: 'bolt', n: 'L1', title: 'Hardware design', text: 'Schematics and PCB layout in Altium: power and DC-DC stages, battery backup, analog voltage and current front ends, relay drivers, 4G modem and Ethernet integration, BOMs and SMT hand-off.', chips: ['Altium', 'AFE', 'Power', 'BOM'] },
        { icon: 'bug', n: 'L1', title: 'Hardware debugging & test', text: 'Board bring-up, signal tracing with oscilloscope and logic analyzer, analog signal-chain analysis, SWD/JTAG, EMC and environmental pre-compliance and compliance planning.', chips: ['Bring-up', 'Scope', 'EMC'] },
        { icon: 'chip', n: 'L2', title: 'Embedded firmware', text: 'C on STM32, STM8, ESP32 and Nuvoton with FreeRTOS. Drivers, DMA and ADC engines, custom bootloader and FOTA, power-loss-safe flash storage, LoRa, 4G, MQTT, RS485 and CAN.', chips: ['C', 'FreeRTOS', 'FOTA'] },
        { icon: 'server', n: 'L3', title: 'Backend & cloud', text: 'Python services with Flask and Socket.IO, MQTT ingestion and validation pipelines, TypeScript edge functions on schedules, GitHub Actions jobs, and deployments on Netlify and Vercel.', chips: ['Python', 'Flask', 'TypeScript'] },
        { icon: 'db', n: 'L3', title: 'Databases', text: 'PostgreSQL on Supabase: schema design, SQL functions and data loading. SQLite on edge gateways. Data modelling for telemetry, events, timesheets and analytics.', chips: ['PostgreSQL', 'Supabase', 'SQLite'] },
        { icon: 'monitor', n: 'L4', title: 'Frontend', text: 'Responsive multi-page web apps and live dashboards in HTML, CSS and JavaScript, from real-time device views to a 50-page analytics site and internal team tools.', chips: ['JavaScript', 'HTML/CSS', 'Dashboards'] },
      ],
    },
    projects: {
      eyebrow: '02 — Selected work',
      h2: 'Projects',
      sub: 'Client names are left out and client code stays private.',
      subAll: 'Client names are left out and client code stays private. Use the filters to see the hardware, firmware or software side.',
      all: 'All projects',
      filters: { all: 'All', hw: 'Hardware', fw: 'Firmware', sw: 'Software', db: 'Data' },
      read: 'Read case study',
      back: 'All projects',
      tech: 'Tech used',
      areas: 'Areas',
      more: 'More projects',
    },
    notes: {
      eyebrow: '03 — Field notes',
      h2: "Bugs I'm proud of finding",
      sub: 'Firmware is won or lost on debugging. Real root causes, told short.',
      all: 'All field notes',
      fix: 'fix',
      items: [
        { sym: 'config read-back returns garbage', title: 'Three RTOS tasks, one flash chip', text: 'Shared SPI flash used by three FreeRTOS tasks with only partial locking, so another task could slip in between a command and its read. I moved the lock to cover each whole flash operation and backed it with a test report.', fix: 'lock per full operation' },
        { sym: 'RS485 port completely silent', title: 'STM32H7 USART kernel-clock order', text: 'The Modbus driver looked right but nothing left the pin. The order the USART kernel clock was set up on the H7 left the peripheral unclocked. A fix in the init sequence, not the protocol.', fix: 'clock init sequence' },
        { sym: 'current channel clips early', title: 'It was the op-amp, not the ADC', text: "Readings flattened out below full scale. I traced it to the op-amp's output swing in the analog front end and gave the hardware team a specific fix for the next revision.", fix: 'AFE change, next PCB rev' },
        { sym: 'crash right after onboarding', title: "Proved it, didn't guess it", text: 'I added HardFault PC/LR capture and a stack-overflow hook, then used compiler <code>.su</code> and <code>.map</code> data to show which task overflowed and why. Production firmware was stable after the fix.', fix: 'stack sized from evidence' },
      ],
    },
    skills: {
      eyebrow: '04 — Toolbox',
      h2: 'Skills',
      sub: 'Grouped the way a product is built: the board, the firmware on it, and the software and data behind it.',
      groups: [
        { name: 'Electrical & electronics', items: [
          { icon: 'bolt', title: 'Circuit & PCB design', text: 'Altium Designer schematics and layout, power and DC-DC stages, battery backup, relay drivers, 4G modem and Ethernet integration, BOMs.' },
          { icon: 'scope', title: 'Analog & signal chain', text: 'Voltage and current sensing front ends, op-amp stages, AC current sensing, vibration sensors, FFT analysis.' },
          { icon: 'bug', title: 'Hardware debugging', text: 'Board bring-up, oscilloscope, logic analyzer, SWD/JTAG, root-cause work across hardware and firmware, SMT vendor coordination.' },
          { icon: 'shield', title: 'Test & compliance', text: 'EMC, environmental and railway compliance planning, test reports, requirement-to-test traceability, HIL and Python simulators.' },
        ] },
        { name: 'Embedded', items: [
          { icon: 'chip', title: 'MCUs & platforms', text: 'STM32 (H7 / Cortex-M7, F-series), STM8, ESP32, Nuvoton M031, Raspberry Pi CM5, LoRa-E5. NVIC, linker scripts, HardFault analysis.' },
          { icon: 'cpu', title: 'Firmware & RTOS', text: 'C99/C11, FreeRTOS, HAL/LL drivers, DMA and ADC engines, custom bootloader, FOTA, power-loss-safe flash storage.' },
          { icon: 'radio', title: 'Connectivity', text: 'LoRa P2P, LoRaWAN Class A/C, 4G/LTE (Quectel, AT), MQTT, RS485 / Modbus RTU, CAN, DLMS/COSEM, GPS.' },
          { icon: 'plug', title: 'Peripherals', text: 'SPI NOR flash, I2C, UART, I2S/TDM, timers, multiplexed displays. STM32CubeIDE, GCC, Keil MDK.' },
        ] },
        { name: 'Software & data', items: [
          { icon: 'server', title: 'Backend', text: 'Python, Flask, Socket.IO, MQTT ingestion and validation, TypeScript edge functions, REST APIs, pandas.' },
          { icon: 'monitor', title: 'Frontend', text: 'HTML, CSS, JavaScript; Astro; responsive multi-page web apps, real-time dashboards and internal tools.' },
          { icon: 'db', title: 'Databases', text: 'PostgreSQL on Supabase (schemas, SQL functions, data loading), SQLite on edge gateways, data modelling.' },
          { icon: 'tool', title: 'DevOps & tools', text: 'Git, GitHub Actions, Netlify, Vercel, scheduled jobs, VS Code, Claude Code with test-backed verification.' },
        ] },
      ],
    },
    experience: {
      eyebrow: '05 — Experience',
      h2: "Where I've worked",
      sub: 'Leading delivery as well as doing the engineering: stand-ups, sprint and monthly plans, code reviews, client reports, vendor and lab coordination, knowledge transfer.',
      roles: [
        { when: 'Feb 2026 — Present', title: 'Senior Embedded Systems Engineer (Technical Lead)', where: 'RIOD Logic · India', text: "Lead hardware design, firmware and software delivery for 5+ concurrent IoT client projects in rail, building, smart city, industrial and energy, with a team of 6 engineers. I also build the company's internal web platforms and data tools." },
        { when: 'Oct 2020 — Jan 2026', title: 'Senior Repair Technician', where: 'Ivy Technology · Canada', text: 'Board-level fault finding and repair of laptops, desktops and peripherals with multimeters, oscilloscopes and logic probes, working from schematics and BOMs. 8–10 boards a day, each tested to confirm the fix.' },
        { when: '2016 — 2017', title: 'FPGA Developer', where: 'Audrey Tech · India', text: 'Developed and tested FPGA designs.' },
        { when: 'Oct 2015 — Oct 2016', title: 'Graduate Trainee', where: 'TELK (Transformers and Electricals Kerala) · India', text: 'Trained at a high-voltage power transformer manufacturer.' },
        { when: '2018 — 2019', title: 'Post-Graduate Program, Embedded Systems Design and Development', where: 'Lambton College · Canada', text: '' },
        { when: '2011 — 2015', title: "Bachelor's Degree, Electrical and Electronics Engineering", where: 'India · WES assessed', text: '' },
      ],
    },
    contactSec: {
      eyebrow: 'Contact',
      h2: 'Got a hard problem in hardware, firmware or software?',
      sub: "Happy to talk about a stubborn bug, a board that won't boot or a dashboard that needs its data.",
    },
    footer: 'Built with Astro · deployed by GitHub Actions',
    skip: 'Skip to content',
  },

  fr: {
    meta: {
      title: 'Jibin Poulose · Ingénieur en génie électrique et électronique',
      description:
        'Ingénieur en génie électrique et électronique couvrant tout le produit connecté : conception et débogage matériel, micrologiciel embarqué, logiciel backend et frontend, bases de données. Ouvert aux postes à distance, hybrides ou sur site, partout dans le monde.',
    },
    nav: {
      expertise: 'Expertise', projects: 'Projets', notes: 'Notes de terrain', skills: 'Compétences',
      experience: 'Expérience', contact: 'Me contacter', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu',
      home: 'Accueil',
    },
    hero: {
      pill: 'Ingénieur en génie électrique et électronique · Ouvert aux postes partout dans le monde',
      h1: 'Idées, <span class="grad">concrétisées.</span>',
      lead:
        'Ingénieur en génie électrique et électronique, je mène une idée jusqu’à un produit qui fonctionne sur le terrain : le circuit et le PCB, le micrologiciel qui le fait tourner, puis le backend, la base de données et le tableau de bord où arrivent ses données. Je dirige aussi l’équipe qui le livre.',
      ctaProjects: 'Voir les projets',
      ctaResume: 'Télécharger le CV',
      meta: 'À distance · Hybride · Prêt à déménager &nbsp;·&nbsp; Matériel · Micrologiciel · Full-stack · Chef d’équipe',
    },
    stack: ['Altium Designer', 'Étages d’entrée analogiques', 'STM32 · FreeRTOS', 'LoRa · 4G · MQTT', 'FOTA · Bootloader', 'Python · Flask', 'JavaScript · TypeScript', 'PostgreSQL · Supabase', 'SQLite', 'GitHub Actions'],
    highlights: [
      { num: '4<span>couches</span>', label: 'du produit sur lesquelles je travaille : carte, micrologiciel, backend, frontend' },
      { num: '4<span>PCB</span>', label: 'cartes conçues sous Altium pour des produits ferroviaires, d’ascenseurs et d’éclairage public' },
      { num: '6', label: 'domaines : ferroviaire, bâtiment, ville intelligente, industriel, énergie, maritime' },
      { num: 'Chef', label: 'd’une équipe de 6 ingénieurs sur plus de 5 projets clients en parallèle' },
    ],
    expertise: {
      eyebrow: '01 — Expertise',
      h2: 'Un ingénieur, toutes les couches du produit',
      sub: 'La plupart des problèmes IoT se trouvent là où deux couches se rencontrent : un bogue de micrologiciel qui vient en fait d’un ampli-op, un trou dans un tableau de bord qui vient en fait d’un format de paquet. Je travaille des deux côtés de chacune de ces frontières.',
      more: 'Toutes les compétences',
      items: [
        { icon: 'bolt', n: 'L1', title: 'Conception matérielle', text: 'Schémas et routage de PCB sous Altium : étages d’alimentation et DC-DC, secours par batterie, étages d’entrée analogiques de tension et de courant, pilotes de relais, intégration de modem 4G et Ethernet, nomenclatures et transfert à l’assemblage CMS.', chips: ['Altium', 'AFE', 'Alimentation', 'BOM'] },
        { icon: 'bug', n: 'L1', title: 'Débogage matériel et essais', text: 'Mise en service des cartes, analyse de signaux à l’oscilloscope et à l’analyseur logique, analyse de chaînes de signal analogiques, SWD/JTAG, planification de la préconformité et de la conformité CEM et environnementale.', chips: ['Mise en service', 'Oscilloscope', 'CEM'] },
        { icon: 'chip', n: 'L2', title: 'Micrologiciel embarqué', text: 'C sur STM32, STM8, ESP32 et Nuvoton avec FreeRTOS. Pilotes, moteurs DMA et ADC, chargeur d’amorçage sur mesure et FOTA, stockage flash résistant aux coupures de courant, LoRa, 4G, MQTT, RS485 et CAN.', chips: ['C', 'FreeRTOS', 'FOTA'] },
        { icon: 'server', n: 'L3', title: 'Backend et cloud', text: 'Services Python avec Flask et Socket.IO, chaînes d’ingestion et de validation MQTT, fonctions edge TypeScript planifiées, tâches GitHub Actions et déploiements sur Netlify et Vercel.', chips: ['Python', 'Flask', 'TypeScript'] },
        { icon: 'db', n: 'L3', title: 'Bases de données', text: 'PostgreSQL sur Supabase : conception de schémas, fonctions SQL et chargement de données. SQLite sur les passerelles en périphérie. Modélisation de données pour la télémétrie, les événements, les feuilles de temps et l’analytique.', chips: ['PostgreSQL', 'Supabase', 'SQLite'] },
        { icon: 'monitor', n: 'L4', title: 'Frontend', text: 'Applications web multipages adaptatives et tableaux de bord en direct en HTML, CSS et JavaScript, des vues d’appareils en temps réel à un site analytique de 50 pages et à des outils internes d’équipe.', chips: ['JavaScript', 'HTML/CSS', 'Tableaux de bord'] },
      ],
    },
    projects: {
      eyebrow: '02 — Projets choisis',
      h2: 'Projets',
      sub: 'Les noms des clients sont omis et leur code reste privé.',
      subAll: 'Les noms des clients sont omis et leur code reste privé. Utilisez les filtres pour voir le côté matériel, micrologiciel ou logiciel.',
      all: 'Tous les projets',
      filters: { all: 'Tous', hw: 'Matériel', fw: 'Micrologiciel', sw: 'Logiciel', db: 'Données' },
      read: 'Lire l’étude de cas',
      back: 'Tous les projets',
      tech: 'Technologies',
      areas: 'Domaines',
      more: 'Autres projets',
    },
    notes: {
      eyebrow: '03 — Notes de terrain',
      h2: 'Des bogues que je suis fier d’avoir trouvés',
      sub: 'En micrologiciel, tout se joue au débogage. De vraies causes profondes, en bref.',
      all: 'Toutes les notes',
      fix: 'correctif',
      items: [
        { sym: 'la relecture de la config renvoie n’importe quoi', title: 'Trois tâches RTOS, une seule puce flash', text: 'Une flash SPI partagée par trois tâches FreeRTOS avec un verrouillage partiel : une autre tâche pouvait s’intercaler entre une commande et sa lecture. J’ai étendu le verrou à chaque opération flash complète et je l’ai validé par un rapport d’essai.', fix: 'verrou par opération complète' },
        { sym: 'port RS485 complètement muet', title: 'Ordre de l’horloge noyau USART sur STM32H7', text: 'Le pilote Modbus semblait correct, mais rien ne sortait de la broche. L’ordre de configuration de l’horloge noyau de l’USART sur le H7 laissait le périphérique sans horloge. Une correction dans la séquence d’initialisation, pas dans le protocole.', fix: 'séquence d’init. de l’horloge' },
        { sym: 'le canal de courant sature trop tôt', title: 'C’était l’ampli-op, pas l’ADC', text: 'Les mesures plafonnaient sous la pleine échelle. J’ai remonté le problème jusqu’à l’excursion de sortie de l’ampli-op dans l’étage d’entrée analogique et donné à l’équipe matérielle une correction précise pour la révision suivante.', fix: 'modif. de l’AFE, prochaine rév. du PCB' },
        { sym: 'plantage juste après l’intégration', title: 'Prouvé, pas deviné', text: 'J’ai ajouté la capture PC/LR des HardFault et un crochet de débordement de pile, puis utilisé les données <code>.su</code> et <code>.map</code> du compilateur pour montrer quelle tâche débordait et pourquoi. Le micrologiciel de production est resté stable après la correction.', fix: 'pile dimensionnée sur preuves' },
      ],
    },
    skills: {
      eyebrow: '04 — Boîte à outils',
      h2: 'Compétences',
      sub: 'Regroupées comme on construit un produit : la carte, le micrologiciel qu’elle exécute, puis le logiciel et les données derrière.',
      groups: [
        { name: 'Génie électrique et électronique', items: [
          { icon: 'bolt', title: 'Conception de circuits et de PCB', text: 'Schémas et routage sous Altium Designer, étages d’alimentation et DC-DC, secours par batterie, pilotes de relais, intégration de modem 4G et Ethernet, nomenclatures.' },
          { icon: 'scope', title: 'Analogique et chaîne de signal', text: 'Étages d’entrée de mesure de tension et de courant, étages à ampli-op, mesure de courant alternatif, capteurs de vibrations, analyse FFT.' },
          { icon: 'bug', title: 'Débogage matériel', text: 'Mise en service des cartes, oscilloscope, analyseur logique, SWD/JTAG, recherche de causes profondes entre matériel et micrologiciel, coordination avec le sous-traitant CMS.' },
          { icon: 'shield', title: 'Essais et conformité', text: 'Planification de la conformité CEM, environnementale et ferroviaire, rapports d’essai, traçabilité des exigences jusqu’aux essais, simulateurs HIL et Python.' },
        ] },
        { name: 'Embarqué', items: [
          { icon: 'chip', title: 'Microcontrôleurs et plateformes', text: 'STM32 (H7 / Cortex-M7, série F), STM8, ESP32, Nuvoton M031, Raspberry Pi CM5, LoRa-E5. NVIC, scripts d’édition de liens, analyse des HardFault.' },
          { icon: 'cpu', title: 'Micrologiciel et RTOS', text: 'C99/C11, FreeRTOS, pilotes HAL/LL, moteurs DMA et ADC, chargeur d’amorçage sur mesure, FOTA, stockage flash résistant aux coupures de courant.' },
          { icon: 'radio', title: 'Connectivité', text: 'LoRa P2P, LoRaWAN classe A/C, 4G/LTE (Quectel, AT), MQTT, RS485 / Modbus RTU, CAN, DLMS/COSEM, GPS.' },
          { icon: 'plug', title: 'Périphériques', text: 'Flash SPI NOR, I2C, UART, I2S/TDM, minuteries, afficheurs multiplexés. STM32CubeIDE, GCC, Keil MDK.' },
        ] },
        { name: 'Logiciel et données', items: [
          { icon: 'server', title: 'Backend', text: 'Python, Flask, Socket.IO, ingestion et validation MQTT, fonctions edge TypeScript, API REST, pandas.' },
          { icon: 'monitor', title: 'Frontend', text: 'HTML, CSS, JavaScript; Astro; applications web multipages adaptatives, tableaux de bord en temps réel et outils internes.' },
          { icon: 'db', title: 'Bases de données', text: 'PostgreSQL sur Supabase (schémas, fonctions SQL, chargement de données), SQLite sur les passerelles en périphérie, modélisation de données.' },
          { icon: 'tool', title: 'DevOps et outils', text: 'Git, GitHub Actions, Netlify, Vercel, tâches planifiées, VS Code, Claude Code avec vérification appuyée par des tests.' },
        ] },
      ],
    },
    experience: {
      eyebrow: '05 — Expérience',
      h2: 'Mon parcours',
      sub: 'Je dirige la livraison tout en faisant l’ingénierie : réunions quotidiennes, plans de sprint et mensuels, revues de code, rapports aux clients, coordination avec les fournisseurs et les laboratoires, transfert de connaissances.',
      roles: [
        { when: 'Févr. 2026 — Aujourd’hui', title: 'Ingénieur principal en systèmes embarqués (chef technique)', where: 'RIOD Logic · Inde', text: 'Je dirige la conception matérielle, le micrologiciel et la livraison logicielle de plus de 5 projets IoT clients en parallèle (ferroviaire, bâtiment, ville intelligente, industriel et énergie), avec une équipe de 6 ingénieurs. Je développe aussi les plateformes web et les outils de données internes de l’entreprise.' },
        { when: 'Oct. 2020 — Janv. 2026', title: 'Technicien principal en réparation', where: 'Ivy Technology · Canada', text: 'Recherche de pannes et réparation au niveau de la carte d’ordinateurs portables, de postes de travail et de périphériques, au multimètre, à l’oscilloscope et à la sonde logique, à partir des schémas et des nomenclatures. 8 à 10 cartes par jour, chacune testée pour confirmer la réparation.' },
        { when: '2016 — 2017', title: 'Développeur FPGA', where: 'Audrey Tech · Inde', text: 'Conception et essai de designs FPGA.' },
        { when: 'Oct. 2015 — Oct. 2016', title: 'Stagiaire diplômé', where: 'TELK (Transformers and Electricals Kerala) · Inde', text: 'Formation chez un fabricant de transformateurs de puissance haute tension.' },
        { when: '2018 — 2019', title: 'Programme postdiplôme, conception et développement de systèmes embarqués', where: 'Lambton College · Canada', text: '' },
        { when: '2011 — 2015', title: 'Baccalauréat en génie électrique et électronique', where: 'Inde · évalué par WES', text: '' },
      ],
    },
    contactSec: {
      eyebrow: 'Contact',
      h2: 'Un problème coriace en matériel, en micrologiciel ou en logiciel?',
      sub: 'Je serai ravi de discuter d’un bogue coriace, d’une carte qui ne démarre pas ou d’un tableau de bord qui attend ses données.',
    },
    footer: 'Conçu avec Astro · déployé par GitHub Actions',
    skip: 'Aller au contenu',
  },
};
