/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to edit when adapting the theme for a new client.
 *
 * Colors flow into  → src/styles/theme.css  (CSS custom properties)
 * Fonts flow into   → astro.config.mjs      (Astro 6 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Color format: use hex (#1a1a2e) or CSS color values.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: "Natural Cleaning Crew",
  tagline: "Professional Cleaning With a Natural Touch",
  description:
    "Natural cleaning services that create healthier, fresher spaces for your home and family.",
  url: "https://natural-cleaning-crew.vercel.app",
  locale: "en_US",

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: "Inter",
    display: "Oswald",
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  // These values are written to CSS custom properties in theme.css.
  // Tailwind v4 @theme picks them up automatically.
  colors: {
    primary: "#2F6F4E", // deep natural green (trust, eco, brand identity)
    primaryLight: "#4CAF7A", // fresh green (growth, cleanliness)
    primaryFg: "#ffffff",

    accent: "#A3D9A5", // soft sage accent (eco highlight, calm energy)
    accentFg: "#0F172A",

    background: "#FAFAF7", // warm off-white (less sterile than pure white)
    surface: "#F1F5F1", // soft green-tinted surface
    border: "#D6E4D8", // muted natural divider

    text: "#1F2A24", // soft near-black (natural feel, not harsh)
    textMuted: "#5B6B61", // muted earthy gray-green

    dark: "#0E1A14", // deep forest tone for dark mode
    darkSurface: "#16261D", // muted dark green surface
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "9999px",
  },
} as const;

export type Brand = typeof brand;
