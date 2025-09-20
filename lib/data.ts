import { Locale } from './i18n';

type LocalizedString = Record<Locale, string>;

const ls = (fr: string, en: string): LocalizedString => ({ fr, en });

export type Highlight = {
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
};

export const heroImage = 'https://source.unsplash.com/random/1600x900/?karting,start';

export const highlights: Highlight[] = [
  {
    title: ls('1150 m outdoor spectaculaire', 'Spectacular 1,150 m outdoor'),
    description: ls(
      'Longues courbes rapides, banking éclairé et zones de dépassement pour des sensations de compétition.',
      'High-speed sweepers, lit banking and overtaking zones designed for competitive racing.'
    ),
    icon: '🏁'
  },
  {
    title: ls('550 m indoor technique', 'Technical 550 m indoor'),
    description: ls(
      'Virages serrés, revêtement premium et chrono LiveTiming pour progresser toute l’année.',
      'Tight corners, pro asphalt and LiveTiming to sharpen your skills year-round.'
    ),
    icon: '⚙️'
  },
  {
    title: ls('Hospitality & terrasse', 'Hospitality & terrace'),
    description: ls(
      'Salon privatif, salle séminaire, terrasse panoramique sur les pistes et restaurant Le Melbourne.',
      'Private lounge, seminar room, panoramic terrace over the track and Le Melbourne restaurant.'
    ),
    icon: '🍽️'
  }
];

export const homeStats = [
  {
    value: '65k',
    label: ls('Pilotes par an', 'Drivers per year'),
    detail: ls('Passionnés, familles & entreprises', 'Enthusiasts, families & corporate teams')
  },
  {
    value: '25',
    label: ls('Karts dernière génération', 'Latest generation karts'),
    detail: ls('SODI 270cc + bi-places + enfants', 'SODI 270cc plus two-seaters & junior karts')
  },
  {
    value: '15',
    label: ls('Années d’expérience', 'Years of experience'),
    detail: ls('Coaching, chronométrage et hospitalité', 'Coaching, timing and hospitality')
  }
];

export type TrackInfo = {
  slug: string;
  name: LocalizedString;
  length: string;
  image: string;
  mapColor: string;
  mapPath: string;
  description: LocalizedString;
  technical: Array<LocalizedString>;
};

export const tracks: TrackInfo[] = [
  {
    slug: 'piste-550',
    name: ls('Piste Indoor 550 m', '550 m Indoor track'),
    length: '550 m',
    image: 'https://source.unsplash.com/random/1200x800/?karting,indoor',
    mapColor: '#e63946',
    mapPath: 'M10 180 C 80 40, 220 40, 300 140 S 420 260, 520 200 640 60 820 120',
    description: ls(
      'Virages serrés, chicane double droite-gauche, pont-sous-pont spectaculaire et ambiance lumineuse immersive.',
      'Tight corners, double chicane, bridge-underpass combo and immersive lighting ambience.'
    ),
    technical: [
      ls('Revêtement epoxy haute adhérence', 'High-grip epoxy surface'),
      ls('Chronométrage LiveTiming & écrans géants', 'LiveTiming with trackside big screens'),
      ls('Idéale pour coaching et débutants', 'Perfect for coaching and beginners')
    ]
  },
  {
    slug: 'piste-1150',
    name: ls('Piste Outdoor 1150 m', '1,150 m Outdoor track'),
    length: '1150 m',
    image: 'https://source.unsplash.com/random/1200x800/?karting,outdoor',
    mapColor: '#f1faee',
    mapPath: 'M20 120 Q 180 10 360 100 T 720 80 Q 900 160 820 260 T 420 320 Q 220 260 120 200 Z',
    description: ls(
      'Départs lancés, dénivelés naturels, banking à 9° et longue ligne droite pour atteindre 80 km/h.',
      'Rolling starts, natural elevation, 9° banked corner and a long straight for 80 km/h top speed.'
    ),
    technical: [
      ls('Système de chrono connecté & application mobile', 'Connected timing system & mobile app'),
      ls('Zone stands 30 karts & briefing outdoor', '30-kart paddock & outdoor briefing'),
      ls('Sections mixant rapides et technique', 'Mix of fast and technical sectors')
    ]
  }
];

export type Testimonial = {
  name: string;
  company?: string;
  quote: LocalizedString;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Camille L.',
    quote: ls(
      'Organisation parfaite pour notre EVJF. La team a su adapter les sessions à tous les niveaux et le cocktail dinatoire était excellent.',
      'Perfect setup for our bachelorette party. Staff tailored the sessions to every level and the cocktail dinner was excellent.'
    )
  },
  {
    name: 'Julien P.',
    company: 'Team manager',
    quote: ls(
      'Le tracé 1150 m est une vraie découverte : grip constant, zones de dépassement franches et podium final avec trophées.',
      'The 1,150 m track is a revelation: consistent grip, clear overtaking spots and a podium ceremony with trophies.'
    )
  },
  {
    name: 'Sophie & Marc',
    quote: ls(
      'Sortie famille réussie ! Les enfants ont adoré le bi-place et la terrasse du restaurant offre une vue incroyable.',
      'Family outing success! Kids loved the two-seater kart and the restaurant terrace view is incredible.'
    )
  }
];

export const partners: string[] = [
  'Alpine Savoie',
  'Club des Sports Annecy',
  'Évènements Léman',
  'Haute-Savoie Tourisme',
  'Team BTP Rumilly'
];

export type GalleryItem = {
  src: string;
  alt: LocalizedString;
};

export const galleryItems: GalleryItem[] = [
  {
    src: 'https://source.unsplash.com/random/1000x700/?karting,team',
    alt: ls('Briefing des pilotes avant le départ', 'Drivers briefing before the race')
  },
  {
    src: 'https://source.unsplash.com/random/1000x700/?karting,race',
    alt: ls('Peloton en pleine ligne droite', 'Pack charging down the straight')
  },
  {
    src: 'https://source.unsplash.com/random/1000x700/?karting,pit',
    alt: ls('Préparation des karts dans les stands', 'Karts being prepped in the pits')
  },
  {
    src: 'https://source.unsplash.com/random/1000x700/?restaurant,chef',
    alt: ls('Chef dressant un plat signature', 'Chef plating a signature dish')
  },
  {
    src: 'https://source.unsplash.com/random/1000x700/?team,celebration',
    alt: ls('Podium entreprise avec médailles', 'Corporate podium celebration with medals')
  },
  {
    src: 'https://source.unsplash.com/random/1000x700/?family,karting',
    alt: ls('Famille partageant un moment karting', 'Family enjoying karting together')
  }
];

export type EventItem = {
  id: string;
  title: LocalizedString;
  date: string;
  category: 'competition' | 'decouverte' | 'entreprise';
  description: LocalizedString;
};

export const events: EventItem[] = [
  {
    id: 'endurance-night',
    title: ls('Endurance Night 3h', 'Endurance Night 3h'),
    date: '2024-07-12',
    category: 'competition',
    description: ls(
      'Course relais par équipe de 3 à 5 pilotes sur la piste 1150 m avec ravitaillement et trophées.',
      'Relay race for teams of 3 to 5 drivers on the 1,150 m track with pit stops and trophies.'
    )
  },
  {
    id: 'stage-ete',
    title: ls('Stage été École de pilotage', 'Summer Racing School'),
    date: '2024-08-05',
    category: 'decouverte',
    description: ls(
      "Programme jeunes 7-14 ans : trajectoires, freinage et finale chronométrée sur 2 jours.",
      'Youth program (7-14) covering lines, braking and a timed final over two days.'
    )
  },
  {
    id: 'afterwork',
    title: ls('Afterwork Challenge Entreprises', 'Corporate Afterwork Challenge'),
    date: '2024-06-20',
    category: 'entreprise',
    description: ls(
      'Parcours accueil café, challenge sprint + finale, cocktail signatures Le Melbourne.',
      'Includes welcome coffee, sprint challenge + final and Le Melbourne signature cocktail dinner.'
    )
  }
];

export type LeaderboardEntry = {
  driver: string;
  team: string;
  lapTime: number; // seconds
  date: string;
};

export const leaderboard: LeaderboardEntry[] = [
  { driver: 'Clara M.', team: 'Racing Bees', lapTime: 62.41, date: '2024-04-12' },
  { driver: 'Lucas R.', team: 'Savoie Kart Club', lapTime: 61.88, date: '2024-04-11' },
  { driver: 'Noah G.', team: 'Rumilly Motors', lapTime: 63.12, date: '2024-04-10' },
  { driver: 'Anna M.', team: 'Alpine Talents', lapTime: 62.95, date: '2024-04-09' },
  { driver: 'Ethan S.', team: 'Kart 2 Win', lapTime: 63.37, date: '2024-04-08' }
];

export const restaurantImage = 'https://source.unsplash.com/random/1400x900/?restaurant,bar';

export const trackStatusSchedule = {
  week: {
    open: 10,
    close: 23
  },
  weekend: {
    open: 9,
    close: 1
  }
};

export type Weather = {
  condition: LocalizedString;
  temperature: string;
};

export const weatherForecast: Weather[] = [
  { condition: ls('Ensoleillé', 'Sunny'), temperature: '22°C' },
  { condition: ls('Nuages & éclaircies', 'Clouds & sun'), temperature: '19°C' },
  { condition: ls('Ciel dégagé', 'Clear skies'), temperature: '21°C' }
];

export const addonOptions = [
  {
    id: 'podium',
    name: ls('Podium & trophées', 'Podium & trophies'),
    price: 90
  },
  {
    id: 'cocktail',
    name: ls('Cocktail dinatoire', 'Cocktail dinner'),
    price: 28
  },
  {
    id: 'coaching',
    name: ls('Coaching personnalisé', 'Personal coaching'),
    price: 55
  }
];

export const partnerLogos: { name: string; url: string }[] = partners.map((name) => ({ name, url: '#'+name.toLowerCase().replace(/[^a-z]+/g, '-') }));
