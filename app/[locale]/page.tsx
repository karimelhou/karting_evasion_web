import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { StatsStrip } from '@/components/StatsStrip';
import { TrackHighlights } from '@/components/TrackHighlights';
import { Testimonials } from '@/components/Testimonials';
import { RestaurantTeaser } from '@/components/RestaurantTeaser';
import { Partners } from '@/components/Partners';
import { Leaderboard } from '@/components/Leaderboard';
import { Locale, defaultLocale, getDictionary, isLocale } from '@/lib/i18n';
import Link from 'next/link';

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <HeroSection
        locale={locale}
        title={dictionary.hero.title}
        subtitle={dictionary.hero.subtitle}
        primaryCta={{ href: `/${locale}/billetterie`, label: dictionary.hero.bookCta }}
        secondaryCta={{ href: `/${locale}/offres`, label: dictionary.hero.offersCta }}
        tertiaryCta={{ href: `/${locale}/evenements`, label: dictionary.hero.groupsCta }}
      />
      <StatsStrip title={dictionary.home.statsTitle} subtitle={dictionary.home.wizardSubtitle} locale={locale} />
      <TrackHighlights locale={locale} introTitle={dictionary.home.trackTitle} introSubtitle={dictionary.home.trackSubtitle} />
      <section className="section" data-surface>
        <header style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', marginBottom: '0.5rem' }}>
            {dictionary.home.wizardTitle}
          </h2>
          <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.home.wizardSubtitle}</p>
        </header>
        <div className="grid-responsive grid-responsive--two">
          <article className="card-surface" data-glow>
            <h3 style={{ fontFamily: 'var(--font-heading)' }}>{dictionary.wizard.stepOne}</h3>
            <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.wizard.stepTwo}</p>
            <Link href={`/${locale}/billetterie`} className="btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
              {dictionary.hero.bookCta}
            </Link>
          </article>
          <article className="card-surface" data-glow>
            <h3 style={{ fontFamily: 'var(--font-heading)' }}>{dictionary.groups.builderTitle}</h3>
            <p style={{ color: 'rgba(241,250,238,0.75)' }}>{dictionary.groups.builderDescription}</p>
            <Link href={`/${locale}/offres#groupes`} className="btn-secondary" style={{ marginTop: '1rem', width: 'fit-content' }}>
              {dictionary.groups.cta}
            </Link>
          </article>
        </div>
      </section>
      <Testimonials title={dictionary.home.testimonialsTitle} locale={locale} />
      <RestaurantTeaser
        title={dictionary.home.restaurantTitle}
        description={dictionary.home.restaurantDescription}
        cta={dictionary.home.restaurantCta}
        href={`/${locale}/restaurant`}
      />
      <Leaderboard title={dictionary.leaderboard.title} subtitle={dictionary.leaderboard.subtitle} locale={locale} />
      <Partners title={dictionary.home.partnersTitle} />
    </>
  );
}
