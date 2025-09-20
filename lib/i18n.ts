export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type Dictionary = {
  nav: {
    home: string;
    experience: string;
    tracks: string;
    offers: string;
    booking: string;
    gallery: string;
    restaurant: string;
    events: string;
    news: string;
    contact: string;
    faq: string;
  };
  hero: {
    title: string;
    subtitle: string;
    bookCta: string;
    offersCta: string;
    groupsCta: string;
  };
  home: {
    trackTitle: string;
    trackSubtitle: string;
    statsTitle: string;
    testimonialsTitle: string;
    restaurantTitle: string;
    restaurantDescription: string;
    restaurantCta: string;
    partnersTitle: string;
    wizardTitle: string;
    wizardSubtitle: string;
  };
  experience: {
    title: string;
    intro: string;
    sections: Array<{
      title: string;
      description: string;
    }>;
  };
  tracks: {
    title: string;
    intro: string;
    callout: string;
  };
  offers: {
    title: string;
    sessionsTitle: string;
    grandPrixTitle: string;
    schoolTitle: string;
    groupsTitle: string;
  };
  wizard: {
    stepOne: string;
    stepTwo: string;
    stepThree: string;
    stepFour: string;
    next: string;
    back: string;
    submit: string;
    summaryTitle: string;
    totalLabel: string;
    thankYouTitle: string;
    thankYouBody: string;
  };
  groups: {
    builderTitle: string;
    builderDescription: string;
    totalLabel: string;
    cta: string;
    emailPlaceholder: string;
  };
  leaderboard: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    description: string;
    formTitle: string;
    infoTitle: string;
  };
  footer: {
    legal: string;
    privacy: string;
    terms: string;
    careers: string;
    giftCards: string;
    rights: string;
  };
  status: {
    open: string;
    closed: string;
    weatherLabel: string;
  };
};

const base: Dictionary = {
  nav: {
    home: 'Accueil',
    experience: 'Expérience',
    tracks: 'Pistes',
    offers: 'Offres & Tarifs',
    booking: 'Billetterie',
    gallery: 'Galerie',
    restaurant: 'Restaurant',
    events: 'Événements',
    news: 'Actualités',
    contact: 'Contact',
    faq: 'FAQ'
  },
  hero: {
    title: 'Deux pistes, un seul objectif : la sensation ultime',
    subtitle:
      "Prenez le départ sur 1150 m outdoor et 550 m indoor. Grand Prix, école de pilotage, EVG/EVJF et restaurant Le Melbourne vous attendent à Rumilly.",
    bookCta: 'Réserver une session',
    offersCta: 'Découvrir les offres',
    groupsCta: 'Devis groupes instantané'
  },
  home: {
    trackTitle: 'Des tracés pour tous les niveaux',
    trackSubtitle: 'Enchaînez les virages techniques et les longues lignes droites avec un revêtement premium et un éclairage spectaculaire.',
    statsTitle: 'Une infrastructure pensée pour la performance',
    testimonialsTitle: 'Ils ont vécu le frisson Karting Évasion',
    restaurantTitle: 'Restaurant Le Melbourne',
    restaurantDescription: 'Pause gourmande panoramique sur les pistes, produits locaux, ambiance conviviale midi & soir.',
    restaurantCta: 'Voir la carte du restaurant',
    partnersTitle: 'Ils nous font confiance',
    wizardTitle: 'Réservation rapide',
    wizardSubtitle: 'Planifiez votre prochain départ en moins de deux minutes.'
  },
  experience: {
    title: 'Pourquoi choisir Karting Évasion Rumilly ?',
    intro:
      "Une expérience accessible aux familles comme aux passionnés avec un encadrement pro, des karts dernière génération et un complexe complet.",
    sections: [
      {
        title: 'Briefing sécurité systématique',
        description: "Équipement homologué, briefing vidéo et instructeurs bilingues pour rouler en toute confiance."
      },
      {
        title: 'Karts premium',
        description: 'Flotte SODI 270cc pour adultes, karts bi-place et modèles enfants avec contrôle à distance.'
      },
      {
        title: 'Services sur mesure',
        description: 'Privatisations, options restauration, trophées personnalisés, coaching et chronométrage LiveTiming.'
      }
    ]
  },
  tracks: {
    title: 'Deux pistes complémentaires',
    intro: 'Passez de l’indoor au plein air avec des dénivelés, des banking et un système de chronométrage avancé.',
    callout: 'Choisissez votre configuration : 550 m indoor technique ou 1150 m outdoor vitesse.'
  },
  offers: {
    title: 'Offres & tarifs',
    sessionsTitle: 'Sessions solo & famille',
    grandPrixTitle: 'Formules Grand Prix',
    schoolTitle: 'École de pilotage',
    groupsTitle: 'Groupes & entreprises'
  },
  wizard: {
    stepOne: 'Date & créneau',
    stepTwo: 'Participants',
    stepThree: 'Forfait',
    stepFour: 'Coordonnées & extras',
    next: 'Étape suivante',
    back: 'Retour',
    submit: 'Valider la réservation',
    summaryTitle: 'Récapitulatif',
    totalLabel: 'Estimation totale',
    thankYouTitle: 'Merci !',
    thankYouBody: 'Votre demande est transmise à notre équipe. Nous confirmons votre réservation sous 24 h.'
  },
  groups: {
    builderTitle: 'Devis instantané groupes & entreprises',
    builderDescription: 'Combinez sessions, Grand Prix et options traiteur pour estimer votre prochain événement.',
    totalLabel: 'Budget estimé',
    cta: 'Recevoir une proposition détaillée',
    emailPlaceholder: 'Email professionnel'
  },
  leaderboard: {
    title: 'Classement hebdo',
    subtitle: 'Top chronos sur la piste 1150 m – challengez vos équipes !'
  },
  faq: {
    title: 'FAQ officielle',
    subtitle: 'Toutes les réponses sur les formules, la sécurité et les conditions de réservation.'
  },
  contact: {
    title: 'Nous trouver',
    description: 'Route de l’Albanais, 74150 Rumilly. Parking gratuit, accès bus et navettes privatives sur demande.',
    formTitle: 'Écrivez-nous',
    infoTitle: 'Informations pratiques'
  },
  footer: {
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    terms: 'CGV',
    careers: 'Recrutement',
    giftCards: 'Bons cadeaux',
    rights: '© ' + new Date().getFullYear() + ' Karting Évasion Rumilly. Tous droits réservés.'
  },
  status: {
    open: 'Piste ouverte',
    closed: 'Piste fermée',
    weatherLabel: 'Météo'
  }
};

const overrides: Record<Locale, DeepPartial<Dictionary>> = {
  fr: {},
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      tracks: 'Tracks',
      offers: 'Offers & Pricing',
      booking: 'Book',
      gallery: 'Gallery',
      restaurant: 'Restaurant',
      events: 'Events',
      news: 'News',
      contact: 'Contact',
      faq: 'FAQ'
    },
    hero: {
      title: 'Two tracks, one goal: pure adrenaline',
      subtitle:
        'Race on 1,150 m outdoor and 550 m indoor tracks. Grand Prix, racing school, bachelor & corporate events plus Le Melbourne restaurant.',
      bookCta: 'Book a race',
      offersCta: 'Explore packages',
      groupsCta: 'Instant group quote'
    },
    home: {
      trackTitle: 'Layouts for every driver',
      trackSubtitle: 'Blend technical sequences with high-speed straights on pro-grade asphalt and dramatic lighting.',
      statsTitle: 'An infrastructure built for performance',
      testimonialsTitle: 'They felt the Karting Évasion rush',
      restaurantTitle: 'Le Melbourne Restaurant',
      restaurantDescription: 'Panoramic dining over the track with seasonal menus and a warm service day & night.',
      restaurantCta: 'View restaurant menu',
      partnersTitle: 'Trusted by',
      wizardTitle: 'Quick booking',
      wizardSubtitle: 'Plan your next race in under two minutes.'
    },
    experience: {
      title: 'Why race at Karting Évasion Rumilly?',
      intro:
        'From family fun to corporate hospitality, enjoy pro instructors, next-gen karts and a fully equipped complex.',
      sections: [
        {
          title: 'Safety-first briefing',
          description: 'Certified gear, bilingual video briefing and marshals to keep every race secure.'
        },
        {
          title: 'Premium karts',
          description: 'SODI 270cc fleet for adults, two-seaters and junior karts with remote assistance.'
        },
        {
          title: 'Tailored services',
          description: 'Venue privatization, catering, custom trophies, coaching and LiveTiming.'
        }
      ]
    },
    tracks: {
      title: 'Two complementary tracks',
      intro: 'Switch between indoor and outdoor thrills with elevation changes, banking and advanced timing.',
      callout: 'Select your setup: 550 m technical indoor or 1,150 m outdoor speedway.'
    },
    offers: {
      title: 'Offers & pricing',
      sessionsTitle: 'Solo & family sessions',
      grandPrixTitle: 'Grand Prix packages',
      schoolTitle: 'Racing school',
      groupsTitle: 'Groups & corporate'
    },
    wizard: {
      stepOne: 'Date & slot',
      stepTwo: 'Participants',
      stepThree: 'Package',
      stepFour: 'Details & extras',
      next: 'Next step',
      back: 'Back',
      submit: 'Confirm booking',
      summaryTitle: 'Summary',
      totalLabel: 'Estimated total',
      thankYouTitle: 'Thank you!',
      thankYouBody: 'Our team will confirm your booking within 24 hours.'
    },
    groups: {
      builderTitle: 'Instant quote for groups & companies',
      builderDescription: 'Mix sessions, Grand Prix and catering to budget your next event.',
      totalLabel: 'Estimated budget',
      cta: 'Receive a detailed proposal',
      emailPlaceholder: 'Business email'
    },
    leaderboard: {
      title: 'Weekly leaderboard',
      subtitle: 'Fastest laps on the 1,150 m track – challenge your crew!'
    },
    faq: {
      title: 'Official FAQ',
      subtitle: 'Answers to your questions on packages, safety and bookings.'
    },
    contact: {
      title: 'Visit us',
      description: 'Route de l’Albanais, 74150 Rumilly. Free parking, bus access and private shuttles on request.',
      formTitle: 'Write to us',
      infoTitle: 'Practical information'
    },
    footer: {
      legal: 'Legal notice',
      privacy: 'Privacy',
      terms: 'Terms',
      careers: 'Careers',
      giftCards: 'Gift vouchers',
      rights: '© ' + new Date().getFullYear() + ' Karting Évasion Rumilly. All rights reserved.'
    },
    status: {
      open: 'Track open',
      closed: 'Track closed',
      weatherLabel: 'Weather'
    }
  }
};

function deepMerge<T>(target: T, source: DeepPartial<T>): T {
  const output: any = Array.isArray(target) ? [...target] : { ...target };
  if (source == null) return output;
  for (const key of Object.keys(source) as Array<keyof T>) {
    const value = source[key];
    if (value === undefined) continue;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      output[key] = deepMerge((target as any)[key], value as any);
    } else {
      output[key] = value;
    }
  }
  return output;
}

export function getDictionary(locale: Locale): Dictionary {
  const override = overrides[locale] ?? overrides[defaultLocale];
  return deepMerge(base, override);
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
