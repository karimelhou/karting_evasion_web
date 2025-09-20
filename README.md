# Karting Évasion Rumilly – Site Web

Site vitrine moderne et performant pour Karting Évasion Rumilly. L’expérience est pensée pour la conversion (billetterie & devis groupes), l’accessibilité et l’internationalisation (FR/EN).

## ✨ Fonctionnalités

- **Architecture Next.js (App Router)** avec i18n (`/fr`, `/en`) et redirection automatique depuis `/`.
- **Pages clés** : Accueil immersif, Expérience, Pistes (2 tracés avec cartes SVG), Offres & Tarifs (MDX), Billetterie (assistant multi-étapes), Galerie avec lightbox, Restaurant Le Melbourne, Événements filtrables, Actualités (MDX + pages dynamiques), FAQ schema.org, Contact.
- **Assistant de réservation** (React) : calcul temps réel des tarifs (sessions & Grand Prix), extras, validation Zod, message de confirmation.
- **Devis instantané groupes & entreprises** : estimation du budget en fonction des options choisies.
- **Widget statut piste** : ouverture/fermeture + météo mock.
- **Leaderboard démo** : tableau + graphique SVG.
- **Contenus MDX** : `content/tracks`, `content/pricing`, `content/groups`, `content/blog`, `content/faq`.
- **PWA** : manifest, service worker, page offline.
- **SEO** : JSON-LD LocalBusiness, FAQPage, métadonnées partagées, focus sur performance & accessibilité.
- **Images** : 100 % Unsplash (aucune ressource binaire embarquée) avec fallback dégradé.

## 🧱 Structure

```
app/                 Pages Next.js (FR/EN, layout, offline)
components/          Composants UI (nav, hero, formulaires, widgets…)
content/             Contenus éditoriaux MDX (pistes, tarifs, groupes, blog, FAQ)
lib/                 Données, i18n, pricing, schémas Zod, helpers MDX
public/              Manifest PWA, service worker, icônes SVG
tests/unit/          Tests Vitest pricing & schémas
e2e/                 Tests Playwright (wizard de réservation)
```

## 🚀 Démarrage

```bash
npm install
npm run dev
```

Visiter [http://localhost:3000/fr](http://localhost:3000/fr).

### Production

```bash
npm run build
npm run start
```

## ✅ Tests

```bash
# Unitaires Vitest
npm run test

# End-to-end Playwright (démarre automatiquement le serveur dev)
npm run e2e
```

## 🖼️ Personnaliser les visuels

Toutes les images proviennent d’Unsplash via `https://source.unsplash.com`. Pour remplacer par des visuels locaux :

1. Téléchargez vos images dans `public/images/…`.
2. Remplacez les URLs Unsplash dans `lib/data.ts` et les fichiers MDX.
3. Vérifiez que les formats restent optimisés (WebP/JPEG) et que les textes alternatifs sont mis à jour.

## 🌐 Internationalisation

- Français par défaut (`/fr`).
- Anglais en option (`/en`).
- Les dictionnaires sont dans `lib/i18n.ts`. Si une clé manque en EN, le fallback FR est utilisé.

## ♿ Accessibilité & performance

- Contrastes élevés, focus visible, navigation clavier, animation réduite respectée.
- Navigation sticky, CTA clairs, composants ARIA.
- PWA + offline fallback pour une expérience robuste.

## 🔐 Notes

- Pas d’intégration de paiement : l’assistant envoie un récapitulatif mock (console). Adapter `ReservationWizard` pour connecter un backend / CRM.
- Le service worker est minimal (mise en cache offline). Adapter selon les besoins.
