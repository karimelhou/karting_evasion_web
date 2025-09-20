import { Locale, defaultLocale } from './i18n';
import { addonOptions } from './data';

export type Localized<T = string> = Record<Locale, T>;

const ls = <T extends string>(fr: T, en: T): Localized<T> => ({ fr, en });

export type SessionOption = {
  id: string;
  name: Localized;
  durationMinutes: number;
  priceAdult: number;
  priceJunior?: number;
};

export type GrandPrixOption = {
  id: string;
  name: Localized;
  pricePerDriver: number;
  duration: string;
  description: Localized;
};

export type SchoolOption = {
  id: string;
  name: Localized;
  price: number;
  description: Localized;
};

export const sessionOptions: SessionOption[] = [
  {
    id: 'session-10',
    name: ls('Session 10 minutes', '10-minute session'),
    durationMinutes: 10,
    priceAdult: 24,
    priceJunior: 19
  },
  {
    id: 'session-20',
    name: ls('Double session 20 minutes', 'Double session 20 minutes'),
    durationMinutes: 20,
    priceAdult: 44,
    priceJunior: 36
  },
  {
    id: 'family-pack',
    name: ls('Pack famille 4 x 10 minutes', 'Family pack 4 x 10 minutes'),
    durationMinutes: 40,
    priceAdult: 84,
    priceJunior: 72
  }
];

export const grandPrixOptions: GrandPrixOption[] = [
  {
    id: 'mini-gp',
    name: ls('Mini GP', 'Mini GP'),
    pricePerDriver: 93,
    duration: '45 min',
    description: ls('Briefing + essais chronométrés + finale sprint.', 'Briefing, timed practice and sprint final.')
  },
  {
    id: 'grand-prix',
    name: ls('GP', 'GP'),
    pricePerDriver: 126,
    duration: '1 h 15',
    description: ls('Briefing, essais libres, chrono, finale longue.', 'Briefing, free practice, quali and long final.')
  },
  {
    id: 'maxi-gp',
    name: ls('Maxi GP', 'Maxi GP'),
    pricePerDriver: 140,
    duration: '1 h 45',
    description: ls('Essais libres, qualifs, pré-finale et grande finale.', 'Free practice, qualifying, semi-final and grand final.')
  }
];

export const schoolOptions: SchoolOption[] = [
  {
    id: 'stage-initiation',
    name: ls('Stage initiation 3 séances', 'Initiation stage 3 sessions'),
    price: 210,
    description: ls('Apprentissage trajectoires, freinage et coaching personnalisé.', 'Learn racing lines, braking technique and personal coaching.')
  },
  {
    id: 'stage-performance',
    name: ls('Stage performance 5 séances', 'Performance stage 5 sessions'),
    price: 320,
    description: ls('Analyse vidéo, travail chrono et finale chronométrée.', 'Video analysis, lap-time work and timed finale.')
  }
];

export const addons = addonOptions.map((option) => ({ ...option }));

export type ReservationInput = {
  packageId: string;
  participants: number;
  juniors?: number;
  locale?: Locale;
  addons?: string[];
};

export function getSessionById(id: string) {
  return sessionOptions.find((option) => option.id === id);
}

export function getGrandPrixById(id: string) {
  return grandPrixOptions.find((option) => option.id === id);
}

export function getSchoolById(id: string) {
  return schoolOptions.find((option) => option.id === id);
}

export function getAddonTotal(selected: string[] = []): number {
  return selected.reduce((total, id) => {
    const addon = addons.find((item) => item.id === id);
    return addon ? total + addon.price : total;
  }, 0);
}

export function estimateReservationTotal(input: ReservationInput): number {
  const { packageId, participants, juniors = 0, addons: selectedAddons = [] } = input;
  if (participants <= 0) return 0;
  const session = getSessionById(packageId);
  if (session) {
    const adultCount = Math.max(participants - juniors, 0);
    const juniorCount = Math.min(juniors, participants);
    const juniorPrice = session.priceJunior ?? session.priceAdult;
    const base = adultCount * session.priceAdult + juniorCount * juniorPrice;
    return base + getAddonTotal(selectedAddons);
  }
  const gp = getGrandPrixById(packageId);
  if (gp) {
    return participants * gp.pricePerDriver + getAddonTotal(selectedAddons);
  }
  const school = getSchoolById(packageId);
  if (school) {
    return school.price * participants + getAddonTotal(selectedAddons);
  }
  return getAddonTotal(selectedAddons);
}

export function formatPrice(value: number, locale: Locale = defaultLocale) {
  return new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    style: 'currency',
    currency: 'EUR'
  }).format(value);
}
