import type { ComponentType } from 'react';

export const RoutePath = {
  HOME: '/',
  SERVICES: '/services',
  LEADERSHIPQO: '/leadershipqo',
  SOLUTIONS: '/solutions',
  NEXT_STEPS: '/next-steps',
  CONTACT: '/contact',

  ABOUT: '/about',
  LEGAL: '/legal',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  ACCEPTABLE_USE: '/acceptable-use',
} as const;

export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];
export interface NavItem {
  label: string;
  path: RoutePath;
}
export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  priceEstimate?: string;
  features: string[];
  cta: string;
}

export type Offering = ServiceOffering;

export interface EcosystemBrand {
  name: string;
  tagline: string;
  description: string;
  color: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
}
