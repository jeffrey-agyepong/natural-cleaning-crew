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
    lineOne: '123 Main Street',
    lineTwo: 'Suite 100',
    city: 'Raleigh',
    state: 'NC',
    zip: '27601',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/example',
  },
  socials: {
    facebook: 'https://www.facebook.com/people/The-Natural-Cleaning-Crew-LLC/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },
  domain: 'https://natural-cleaning-crew.vercel.app',
} as const;

export type Client = typeof client;
