/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Natural Cleaning Crew',
  email: 'naturalcleaningcrew@gmail.com',
  phoneForTel: '919-346-3040',
  phoneFormatted: '(919) 346-3040',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'Lic# 123456',
  address: {
    city: 'Raleigh',
    state: 'NC',
    country: 'US',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Raleigh%2C+NC',
  },
  /** Cities served — used in SEO metadata / JSON-LD (no storefront address). */
  serviceAreas: ['Raleigh', 'Angier', 'Fuquay-Varina', 'Cary', 'Apex', 'Lillington', 'Holly Springs'],
  socials: {
    facebook: 'https://www.facebook.com/p/The-Natural-Cleaning-Crew-LLC-61560201158647/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },
  domain: 'https://natural-cleaning-crew.vercel.app',
} as const;

export type Client = typeof client;
