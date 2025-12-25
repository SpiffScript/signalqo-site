// src/types.ts
import type { ComponentType } from 'react';

// Routes
export const RoutePath = {
  // Main Navigation
  HOME: '/',
  SERVICES: '/services',
  LEADERSHIPQO: '/leadershipqo',
  SOLUTIONS: '/solutions',
  NEXT_STEPS: '/next-steps',
  CONTACT: '/contact',

  // Footer / Legal
  ABOUT: '/about',
  LEGAL: '/legal',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  ACCEPTABLE_USE: '/acceptable-use',
} as const;

export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];

// Nav
export interface NavItem {
  label: string;
  path: RoutePath;
}

// Offerings
export interface ServiceOffering {
  id: string; // Made required for consistent React mapping
  title: string;
  description: string;
  priceEstimate?: string;
  features: string[];
  cta: string;
}

/** * @deprecated Use ServiceOffering instead.
 * Keeping for immediate compatibility; target for removal in next pass.
 */
export type Offering = ServiceOffering;

// Ecosystem
export interface EcosystemBrand {
  name: string;
  tagline: string;
  description: string;
  color: string; // Tailwind class string (ex: "text-emerald-500")
  icon: ComponentType<{ className?: string }>;
  href?: string;
}
