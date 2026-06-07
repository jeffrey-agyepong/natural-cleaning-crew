import { config, fields, collection, singleton } from '@keystatic/core';

/**
 * Storage: Keystatic Cloud — lets the client log in with email/password
 * (no GitHub account needed) while changes are still committed to this repo.
 *
 * Replace 'YOUR_TEAM/natural-cleaning-crew' with the project slug shown on
 * your Keystatic Cloud project's settings page (https://keystatic.cloud).
 */
export default config({
  storage: {
    kind: 'cloud',
  },
    cloud: {
    project: 'j-a-web-design/naturalcleaningcrew',
  },

  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage/',
      format: { data: 'json' },
      schema: {
        heroTopper: fields.text({ label: 'Hero topper text' }),
        heroHeading: fields.text({ label: 'Hero heading' }),
        heroDescription: fields.text({ label: 'Hero description', multiline: true }),
        heroCtaLabel: fields.text({ label: 'Primary button label' }),
        heroSecondaryLabel: fields.text({ label: 'Secondary button label' }),

        trustItems: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            value: fields.text({ label: 'Value (optional, e.g. "10+")', validation: { isRequired: false } }),
          }),
          {
            label: 'Trust bar items',
            itemLabel: (props) => props.fields.label.value || 'Item',
          },
        ),

        aboutTopper: fields.text({ label: 'About preview — topper text' }),
        aboutHeading: fields.text({ label: 'About preview — heading' }),
        aboutBody: fields.array(
          fields.text({ label: 'Paragraph', multiline: true }),
          {
            label: 'About preview — paragraphs',
            itemLabel: (props) => props.value.slice(0, 60) || 'Paragraph',
          },
        ),
        aboutBenefits: fields.array(
          fields.text({ label: 'Benefit' }),
          {
            label: 'About preview — bullet points',
            itemLabel: (props) => props.value || 'Benefit',
          },
        ),

        ctaTitle: fields.text({ label: 'Bottom call-to-action — title' }),
        ctaDescription: fields.text({ label: 'Bottom call-to-action — description', multiline: true }),
        ctaButtonText: fields.text({ label: 'Bottom call-to-action — button text' }),
      },
    }),

    about: singleton({
      label: 'About Page',
      path: 'src/content/about/',
      format: { data: 'json' },
      schema: {
        introTopper: fields.text({ label: 'Intro — topper text' }),
        introHeading: fields.text({ label: 'Intro — heading' }),
        introBody: fields.text({ label: 'Intro — paragraph', multiline: true }),

        storyTopper: fields.text({ label: 'Our story — topper text' }),
        storyHeading: fields.text({ label: 'Our story — heading' }),
        storyBody: fields.array(
          fields.text({ label: 'Paragraph', multiline: true }),
          {
            label: 'Our story — paragraphs',
            itemLabel: (props) => props.value.slice(0, 60) || 'Paragraph',
          },
        ),
      },
    }),

    servicesPage: singleton({
      label: 'Services Page',
      path: 'src/content/services-page/',
      format: { data: 'json' },
      schema: {
        heading: fields.text({ label: 'Intro heading' }),
        description: fields.text({ label: 'Intro description', multiline: true }),

        uponRequestHeading: fields.text({ label: '"Upon request" — heading' }),
        uponRequestDescription: fields.text({ label: '"Upon request" — description' }),
        uponRequestItems: fields.array(
          fields.text({ label: 'Item' }),
          {
            label: '"Upon request" — items',
            itemLabel: (props) => props.value || 'Item',
          },
        ),
      },
    }),

    contact: singleton({
      label: 'Contact Page',
      path: 'src/content/contact/',
      format: { data: 'json' },
      schema: {
        intro: fields.text({ label: 'Form intro paragraph', multiline: true }),
        hours: fields.array(
          fields.object({
            label: fields.text({ label: 'Day(s), e.g. "Mon – Fri"' }),
            time: fields.text({ label: 'Hours, e.g. "7:00 AM – 6:00 PM"' }),
          }),
          {
            label: 'Business hours',
            itemLabel: (props) => `${props.fields.label.value} — ${props.fields.time.value}`,
          },
        ),
      },
    }),
  },

  collections: {
    teamMembers: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'src/content/team/*/',
      format: { data: 'json' },
      entryLayout: 'form',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        image: fields.url({ label: 'Photo URL', validation: { isRequired: true } }),
        bio: fields.text({ label: 'Bio', multiline: true }),
      },
    }),

    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*/',
      format: { data: 'json' },
      entryLayout: 'form',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        image: fields.url({ label: 'Image URL', validation: { isRequired: true } }),
        points: fields.array(
          fields.text({ label: 'Bullet point' }),
          {
            label: 'Bullet points',
            itemLabel: (props) => props.value || 'Point',
          },
        ),
        order: fields.number({ label: 'Display order (lower shows first)', defaultValue: 0 }),
      },
    }),

    reviews: collection({
      label: 'Reviews',
      slugField: 'name',
      path: 'src/content/reviews/*/',
      format: { data: 'json' },
      entryLayout: 'form',
      schema: {
        name: fields.slug({ name: { label: 'Customer name' } }),
        location: fields.text({ label: 'Location', validation: { isRequired: false } }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        rating: fields.number({ label: 'Rating (1–5)', defaultValue: 5, validation: { isRequired: true, min: 1, max: 5 } }),
      },
    }),
  },
});
