/**
 * Shared JSON-LD for the business. Used by the homepage and reviews page so
 * both describe the same LocalBusiness entity (linked by @id).
 */
import { brand } from '../config/brand';
import { client } from '../data/client';

export function localBusinessSchema(extra: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${client.domain}/#business`,
    name: client.name,
    alternateName: brand.seo.keyword,
    description: brand.seo.description,
    slogan: brand.tagline,
    url: client.domain,
    image: 'https://ik.imagekit.io/boxhuwbys/natural-cleaning-crew-jawebdesign.webp?updatedAt=1783730222122',
    telephone: client.phoneForTel,
    email: client.email,
    // Service-area business: no street address, just the home city/region.
    address: {
      '@type': 'PostalAddress',
      addressLocality: client.address.city,
      addressRegion: client.address.state,
      addressCountry: client.address.country,
    },
    areaServed: [
      ...client.serviceAreas.map((city) => ({
        '@type': 'City',
        name: `${city}, NC`,
        containedInPlace: { '@type': 'State', name: 'North Carolina' },
      })),
      { '@type': 'State', name: 'North Carolina' },
    ],
    knowsAbout: ['Natural cleaning', 'Eco-friendly cleaning', 'Non-toxic house cleaning', 'Green cleaning'],
    keywords: brand.seo.keywords.join(', '),
    sameAs: [client.socials.facebook],
    ...extra,
  };
}
