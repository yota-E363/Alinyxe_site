import type { Dictionary } from '@/lib/i18n/types'

export const fr: Dictionary = {
  common: {
    navbar: {
      home: 'Accueil',
      services: 'Services IA',
      about: 'À propos',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
    },
    footer: {
      tagline: 'Intelligence artificielle & automatisation sur mesure',
      product: 'Solutions',
      company: 'Entreprise',
      legal: 'Légal',
      services: 'Services IA',
      about: 'À propos',
      blog: 'Blog',
      contact: 'Contact',
      faq: 'FAQ',
      privacy: 'Confidentialité',
      terms: "Conditions d'utilisation",
      rights: 'Tous droits réservés.',
      builtWith: "Conçu avec passion pour l'IA.",
    },
    buttons: {
      start: 'Démarrer un projet',
      discover: 'Découvrir nos services',
      book: 'Réserver un appel',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      subscribe: "S'abonner",
      readMore: 'Lire la suite',
      backToBlog: 'Retour au blog',
      login: 'Connexion',
      logout: 'Déconnexion',
      loginGoogle: 'Continuer avec Google',
    },
    language: 'Langue',
    theme: 'Thème',
  },
  home: {
    hero: {
      eyebrow: 'Agence IA & automatisation',
      title: "L'IA qui travaille pour votre entreprise",
      subtitle:
        "Alinyxe conçoit, intègre et automatise des solutions d'intelligence artificielle qui font gagner du temps à vos équipes et accélèrent votre croissance.",
      metrics: [
        { value: '+40%', label: 'de productivité moyenne' },
        { value: '24/7', label: 'support client automatisé' },
        { value: '<3 mois', label: 'retour sur investissement' },
      ],
    },
    services: {
      eyebrow: 'Nos services',
      title: 'Des solutions IA pensées pour votre métier',
      subtitle:
        'De la stratégie au déploiement, nous bâtissons des systèmes intelligents qui s’intègrent à vos outils existants.',
      items: [
        {
          title: 'Conseil & stratégie IA',
          description:
            'Nous identifions les cas d’usage à fort impact et construisons une feuille de route IA alignée sur vos objectifs.',
          features: ['Audit des processus', 'Cas d’usage prioritaires', 'Feuille de route IA'],
        },
        {
          title: 'Automatisation de processus',
          description:
            'Nous automatisons les tâches répétitives pour libérer vos équipes et réduire les erreurs.',
          features: ['Workflows automatisés', 'Intégration d’outils', 'Tableaux de bord'],
        },
        {
          title: 'Chatbots & agents IA',
          description:
            'Des assistants conversationnels et des agents autonomes qui gèrent le support et les opérations 24/7.',
          features: ['Support client 24/7', 'Agents autonomes', 'Multilingue'],
        },
        {
          title: 'Intégrations sur mesure',
          description:
            'Nous connectons l’IA à votre CRM, ERP et API internes pour une expérience fluide.',
          features: ['API & CRM', 'Modèles personnalisés', 'Sécurité & conformité'],
        },
      ],
    },
    how: {
      eyebrow: 'Notre méthode',
      title: 'Une approche en 4 étapes',
      subtitle:
        'Un accompagnement structuré, du premier atelier jusqu’à l’optimisation continue.',
      steps: [
        {
          title: 'Découverte',
          description:
            'Nous analysons vos processus et identifions les opportunités d’automatisation les plus rentables.',
        },
        {
          title: 'Prototypage',
          description:
            'Nous construisons un prototype fonctionnel pour valider la valeur avant tout déploiement.',
        },
        {
          title: 'Déploiement',
          description:
            'Nous intégrons la solution à vos outils et formons vos équipes à son utilisation.',
        },
        {
          title: 'Amélioration continue',
          description:
            'Nous mesurons les résultats et affinons les modèles pour maximiser le retour sur investissement.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Des résultats qui parlent',
      items: [
        {
          quote:
            'Alinyxe a automatisé notre support de niveau 1. Nos délais de réponse ont chuté de 70 % en deux mois.',
          name: 'Camille Laurent',
          role: 'Directrice des opérations',
          company: 'NovaRetail',
        },
        {
          quote:
            'Leur agent IA gère désormais la qualification de nos leads. Notre équipe commerciale se concentre enfin sur la vente.',
          name: 'Thomas Mercier',
          role: 'CEO',
          company: 'Finly',
        },
        {
          quote:
            'Une équipe pragmatique et compétente. Le prototype était prêt en trois semaines, déployé le mois suivant.',
          name: 'Sofia Benali',
          role: 'Head of Product',
          company: 'Healthbridge',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Vos questions, nos réponses',
      items: [
        {
          question: 'Combien de temps dure un projet type ?',
          answer:
            'La plupart de nos projets passent du prototype à la production en 6 à 12 semaines, selon la complexité et les intégrations nécessaires.',
        },
        {
          question: 'Faut-il une grande quantité de données pour commencer ?',
          answer:
            'Non. Nous adaptons l’approche à vos données existantes et pouvons démarrer avec des modèles pré-entraînés, puis affiner au fil du temps.',
        },
        {
          question: 'Vos solutions sont-elles sécurisées et conformes ?',
          answer:
            'Oui. Nous appliquons les bonnes pratiques de sécurité, chiffrons les données sensibles et respectons le RGPD.',
        },
        {
          question: 'Pouvez-vous intégrer nos outils existants ?',
          answer:
            'Absolument. Nous connectons l’IA à votre CRM, ERP, base de données et API internes via des intégrations sur mesure.',
        },
        {
          question: 'Que se passe-t-il après le déploiement ?',
          answer:
            'Nous assurons le suivi, la maintenance et l’amélioration continue des modèles pour garantir des performances durables.',
        },
      ],
    },
    newsletter: {
      title: 'Recevez nos meilleures pratiques IA',
      subtitle:
        'Des conseils concrets sur l’automatisation et l’IA, une fois par mois. Pas de spam.',
      placeholder: 'votre@email.com',
      success: 'Merci ! Vous êtes bien abonné·e.',
      error: 'Une erreur est survenue. Réessayez.',
    },
    cta: {
      title: 'Transformons ensemble votre entreprise grâce à l’IA',
      subtitle:
        'Réservez un appel découverte gratuit. Nous identifierons vos meilleures opportunités d’automatisation.',
    },
      keyFeatures: {
  eyebrow: 'FONCTIONNALITÉS',
  title: 'Aperçu des fonctionnalités clés',
  subtitle: 'Découvrez les fonctionnalités complètes qui distinguent Arise en matière d\'excellence en conception web.',
  items: [
    { title: 'Notifications intelligentes', description: 'Recevez des alertes en temps réel sur les mises à jour qui comptent le plus pour vous.' },
    { title: 'Collaboration facilitée', description: 'Une solution simplifiée pour un travail d\'équipe fluide et productif.' },
    { title: 'Stimulez votre croissance', description: 'Donnez à votre entreprise les moyens d\'agir grâce à des insights et analyses basés sur les données.' },
    { title: 'Indicateurs de performance', description: 'Suivez votre réussite grâce à des analyses et insights complets.' },
    { title: 'Tableau de bord analytique', description: 'Gardez une longueur d\'avance avec une visualisation de données et des rapports en temps réel.' },
  ],
},
  },
  services: {
    hero: {
      eyebrow: 'Services IA',
      title: 'Des solutions IA taillées pour votre métier',
      subtitle:
        'Nous couvrons l’ensemble du cycle : stratégie, conception, intégration et optimisation continue.',
    },
    list: {
      items: [
        {
          title: 'Conseil & stratégie IA',
          description:
            'Nous évaluons votre maturité IA, priorisons les cas d’usage et construisons une feuille de route concrète et chiffrée.',
          features: [
            'Audit complet des processus',
            'Identification des cas d’usage à fort ROI',
            'Feuille de route et estimation budgétaire',
            'Accompagnement au changement',
          ],
        },
        {
          title: 'Automatisation de processus',
          description:
            'Nous automatisons les tâches manuelles et répétitives pour réduire les coûts et les erreurs.',
          features: [
            'Workflows automatisés de bout en bout',
            'Traitement intelligent de documents',
            'Connexion à vos outils métiers',
            'Tableaux de bord de suivi',
          ],
        },
        {
          title: 'Chatbots & agents IA',
          description:
            'Nous concevons des assistants conversationnels et des agents autonomes capables d’agir sur vos systèmes.',
          features: [
            'Support client 24/7 multilingue',
            'Agents autonomes orientés tâches',
            'Base de connaissances personnalisée',
            'Escalade intelligente vers vos équipes',
          ],
        },
        {
          title: 'Intégrations sur mesure',
          description:
            'Nous développons des intégrations robustes entre l’IA et votre écosystème logiciel.',
          features: [
            'API & connecteurs personnalisés',
            'Intégration CRM / ERP',
            'Modèles fine-tunés sur vos données',
            'Sécurité, RGPD et conformité',
          ],
        },
      ],
    },
    features: {
      eyebrow: 'Fonctionnalités',
      title: 'Fonctionnalités pilotées par l’IA',
      subtitle: 'Exploitez tout le potentiel de vos données grâce à des solutions IA avancées',
      workflow: {
        title: 'Automatisation des workflows IA',
        description:
          'Automatisez les tâches répétitives et chronophages grâce à notre automatisation de workflows par IA',
        steps: ['Saisie des données', 'Automatisation IA', 'Analyse & optimisation'],
      },
      nlp: {
        title: 'Moteur de traitement du langage naturel (NLP)',
        description:
          'Automatisez les tâches répétitives et chronophages grâce à nos outils d’automatisation par IA. Augmentez votre productivité.',
      },
      predictive: {
        title: 'Analyse prédictive',
        description:
          'Automatisez les tâches répétitives et chronophages grâce à notre automatisation de workflows par IA',
      },
      visualization: {
        title: 'Visualisation intelligente des données',
        description:
          'Automatisez les tâches répétitives et chronophages grâce à notre automatisation de workflows par IA',
        metrics: ['Processus', 'Optimisation', 'Analyse des données'],
      },
      decision: {
        title: 'Prise de décision assistée par IA',
        description:
          'Cette fonctionnalité traite de grands volumes de données en temps réel, identifie des tendances et anticipe',
      },
      cta: 'Voir toutes les fonctionnalités',
    },
    workSteps: {
      eyebrow: 'Notre fonctionnement',
      title: 'Comment nous concrétisons votre projet',
      subtitle:
        'Un processus clair en trois étapes, du premier échange jusqu’à des résultats mesurables.',
      steps: [
        {
          title: 'Appel de découverte',
          description:
            'Nous échangeons sur vos objectifs et vos processus pour identifier où l’IA créera le plus de valeur, rapidement.',
        },
        {
          title: 'Proposition sur mesure',
          description:
            'Nous cadrons une solution adaptée à vos priorités et à votre budget, avec des jalons et livrables clairs.',
        },
        {
          title: 'Réalisation & accompagnement',
          description:
            'Nous développons, déployons, et restons présents après le lancement pour faire évoluer la solution avec vos besoins.',
        },
      ],
    },
    pipeline: {
      eyebrow: 'Sous le capot',
      title: 'Comment fonctionne notre pipeline IA',
      subtitle:
        'De la donnée brute à l’optimisation continue, voici ce qui se passe une fois Alinyxe branché sur votre stack.',
      steps: [
        {
          title: 'Connexion de vos données',
          description:
            'Nous nous connectons à votre CRM, ERP, tableurs ou bases de données internes en quelques minutes, sans configuration lourde de votre côté.',
        },
        {
          title: 'Analyse par l’IA',
          description:
            'Nos modèles traitent et croisent vos données en temps réel pour faire ressortir les tendances et opportunités à exploiter.',
        },
        {
          title: 'Optimisation continue',
          description:
            'Chaque résultat vient nourrir le système, pour que la précision et les recommandations s’améliorent à mesure que vous l’utilisez.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions sur nos services',
      subtitle: 'Tout ce qu’il faut savoir avant de démarrer un projet avec nous.',
      items: [
        {
          question: 'Quels services IA proposez-vous ?',
          answer:
            'Nous couvrons le conseil en IA, l’automatisation de processus, les chatbots & agents IA, ainsi que les intégrations sur mesure, adaptés à vos besoins.',
        },
        {
          question: 'Comment se déroule une mission ?',
          answer:
            'Nous commençons par un audit, définissons une feuille de route, puis livrons par cycles itératifs courts pour créer de la valeur rapidement.',
        },
        {
          question: 'Pouvez-vous vous intégrer à nos outils existants ?',
          answer:
            'Oui. Nos solutions se connectent à votre CRM, votre ERP et vos API internes, et nous concevons les intégrations autour de votre stack existante.',
        },
        {
          question: 'Quel support proposez-vous après la mise en production ?',
          answer:
            'Nous proposons un suivi continu, de l’optimisation et des plans de support pour garder vos systèmes IA fiables dans la durée.',
        },
      ],
    },
  },
  about: {
    hero: {
      eyebrow: 'À propos',
      title: 'Nous rendons l’IA utile, concrète et rentable',
      subtitle:
        'Alinyxe est une agence d’intelligence artificielle qui aide les entreprises à automatiser, à décider plus vite et à mieux servir leurs clients.',
    },
    mission: {
      title: 'Notre mission',
      body: [
        'Nous croyons que l’IA ne devrait pas être réservée aux géants de la tech. Notre mission est de la rendre accessible et actionnable pour les entreprises de toutes tailles.',
        'Plutôt que de vendre du rêve, nous livrons des systèmes mesurables, intégrés à vos outils et conçus pour générer un retour sur investissement rapide.',
      ],
      stats: [
        { value: '50+', label: 'projets livrés' },
        { value: '12', label: 'secteurs accompagnés' },
        { value: '98%', label: 'clients satisfaits' },
      ],
    },
    values: {
      title: 'Nos valeurs',
      subtitle: 'Ce qui guide chacune de nos décisions.',
      items: [
        {
          title: 'Pragmatisme',
          description:
            'Nous privilégions l’impact réel à la hype. Chaque projet doit créer de la valeur mesurable.',
        },
        {
          title: 'Transparence',
          description:
            'Pas de boîte noire. Nous expliquons nos choix techniques et partageons nos résultats sans détour.',
        },
        {
          title: 'Excellence',
          description:
            'Nous tenons à la qualité du code, à la robustesse des systèmes et à la sécurité des données.',
        },
        {
          title: 'Partenariat',
          description:
            'Nous travaillons aux côtés de vos équipes, pas à leur place. Votre autonomie est notre objectif.',
        },
      ],
    },
    offerings: {
      categories: {
        eyebrow: 'Ce que nous faisons',
        title: 'Un seul partenaire pour toutes vos briques IA',
        subtitle:
          'Du premier atelier jusqu’au fonctionnement quotidien, notre offre couvre l’ensemble du cycle de vie d’un projet IA.',
        items: [
          {
            title: 'Conseil & stratégie IA',
            description:
              'Nous transformons des idées éparses en une feuille de route priorisée et chiffrée, avec un cas d’usage business clair.',
            features: ['Audit des opportunités', 'Feuille de route priorisée', 'Modélisation du ROI'],
          },
          {
            title: 'Automatisation & workflows',
            description:
              'Nous transformons vos processus répétitifs en workflows automatisés qui tournent de façon fiable en arrière-plan.',
            features: ['Workflows de bout en bout', 'Traitement de documents', 'Tableaux de bord de suivi'],
          },
          {
            title: 'IA conversationnelle & agents',
            description:
              'Nous concevons des assistants et des agents autonomes qui gèrent le support, les ventes et les demandes internes.',
            features: ['Support multilingue 24/7', 'Agents orientés tâches', 'Escalade intelligente'],
          },
          {
            title: 'Intégrations & ingénierie des données',
            description:
              'Nous connectons chaque modèle à votre écosystème existant pour que les insights arrivent dans les outils déjà utilisés par vos équipes.',
            features: ['Connecteurs CRM & ERP', 'API personnalisées', 'Sécurité & conformité'],
          },
        ],
      },
      capabilities: {
        eyebrow: 'Sous le capot',
        title: 'Les capacités derrière chaque mission',
        subtitle:
          'Quel que soit le service par lequel vous démarrez, il s’appuie sur le même socle technique.',
        items: [
          {
            title: 'Moteurs NLP multilingues',
            description:
              'Des modèles de langage ajustés pour comprendre et répondre dans la langue de vos clients.',
          },
          {
            title: 'Analyse prédictive',
            description:
              'Des modèles qui anticipent la demande, le churn et les risques avant qu’ils n’apparaissent dans vos chiffres.',
          },
          {
            title: 'Tableaux de bord en temps réel',
            description:
              'Un reporting en direct pour que vos équipes voient l’impact de l’automatisation au fil de l’eau.',
          },
          {
            title: 'Infrastructure sécurisée et conforme',
            description:
              'Chiffrement, minimisation des données et hébergement conforme au RGPD par défaut.',
          },
        ],
      },
      outcomes: {
        eyebrow: 'Ce que vous obtenez',
        title: 'Des résultats mesurables dès le premier jour',
        subtitle:
          'Chaque mission s’articule autour de jalons clairs et d’un retour sur investissement mesurable.',
        stats: [
          { value: '6-12 semaines', label: 'du lancement à la mise en production' },
          { value: '24/7', label: 'couverture propulsée par l’IA' },
          { value: '<3 mois', label: 'délai de rentabilité type' },
        ],
        ctaLabel: 'Échanger avec notre équipe',
      },
    },
  },
  contact: {
    hero: {
      eyebrow: 'Contact',
      title: 'Parlons de votre projet IA',
      subtitle:
        'Décrivez-nous votre besoin. Nous revenons vers vous sous 24 heures ouvrées.',
    },
    form: {
      name: 'Nom complet',
      email: 'Email',
      company: 'Entreprise',
      message: 'Votre message',
      namePlaceholder: 'Jean Dupont',
      emailPlaceholder: 'jean@entreprise.com',
      companyPlaceholder: 'Nom de votre entreprise',
      messagePlaceholder: 'Décrivez votre projet ou votre besoin...',
      success: 'Message envoyé ! Nous vous répondons rapidement.',
      error: 'Une erreur est survenue. Réessayez.',
    },
    info: {
      emailLabel: 'Email',
      emailValue: 'contact@alinyxe.online',
      responseLabel: 'Délai de réponse',
      responseValue: 'Sous 24 heures ouvrées',
      locationLabel: 'Disponibilité',
      locationValue: 'À distance, partout en Europe',
    },
  },
  faqPage: {
    hero: {
      eyebrow: 'FAQ',
      title: 'Questions fréquentes',
      subtitle: 'Tout ce que vous devez savoir avant de démarrer un projet avec Alinyxe.',
    },
    items: [
      {
        question: 'Combien coûte un projet IA ?',
        answer:
          'Le coût dépend de la complexité et du périmètre. Nous proposons un audit initial gratuit pour vous donner une estimation claire et chiffrée.',
      },
      {
        question: 'Combien de temps dure un projet type ?',
        answer:
          'La plupart de nos projets passent du prototype à la production en 6 à 12 semaines.',
      },
      {
        question: 'Faut-il une grande quantité de données pour commencer ?',
        answer:
          'Non. Nous démarrons souvent avec des modèles pré-entraînés et affinons ensuite avec vos données.',
      },
      {
        question: 'Vos solutions sont-elles conformes au RGPD ?',
        answer:
          'Oui. La protection des données est au cœur de notre démarche : chiffrement, minimisation et hébergement conforme.',
      },
      {
        question: 'Proposez-vous de la maintenance après déploiement ?',
        answer:
          'Oui, nous offrons des contrats de suivi incluant monitoring, mises à jour et amélioration continue des modèles.',
      },
      {
        question: 'Travaillez-vous avec des PME ?',
        answer:
          'Absolument. Nous accompagnons aussi bien des startups que des PME et des grands comptes.',
      },
    ],
  },
  blog: {
    list: {
      eyebrow: 'Blog',
      title: 'Idées, guides et retours d’expérience IA',
      subtitle:
        'Nos meilleures pratiques sur l’automatisation, les agents IA et la transformation des entreprises.',
      empty: 'Aucun article publié pour le moment. Revenez bientôt !',
      readTime: 'min de lecture',
    },
    article: {
      backToBlog: 'Retour au blog',
      publishedOn: 'Publié le',
      notFound: 'Article introuvable',
      notFoundBody: 'Cet article n’existe pas ou a été déplacé.',
      related: 'À lire aussi',
    },
  },
  auth: {
    login: {
      title: 'Espace administrateur',
      subtitle: 'Connectez-vous pour gérer le contenu du site.',
      email: 'Email',
      password: 'Mot de passe',
      emailPlaceholder: 'admin@alinyxe.online',
      passwordPlaceholder: '••••••••',
      submit: 'Se connecter',
      orContinue: 'ou continuer avec',
      invalid: 'Identifiants invalides.',
      success: 'Connexion réussie.',
    },
    admin: {
      title: 'Tableau de bord',
      subtitle: 'Gérez les articles du blog (FR & EN).',
      newPost: 'Nouvel article',
      editPost: 'Modifier l’article',
      postTitle: 'Titre',
      slug: 'Slug (URL)',
      excerpt: 'Extrait',
      content: 'Contenu',
      coverImage: 'Image de couverture (URL)',
      tag: 'Catégorie',
      published: 'Publié',
      draft: 'Brouillon',
      save: 'Enregistrer',
      saving: 'Enregistrement...',
      cancel: 'Annuler',
      delete: 'Supprimer',
      confirmDelete: 'Supprimer cet article ?',
      empty: 'Aucun article. Créez le premier !',
      created: 'Article créé.',
      updated: 'Article mis à jour.',
      deleted: 'Article supprimé.',
      status: 'Statut',
      actions: 'Actions',
      langTab: 'Langue du contenu',
    },
  },

}
