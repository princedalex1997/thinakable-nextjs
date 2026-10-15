import type { Metadata } from 'next';
import { AboutPageClient } from '@/components/pages/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Thinkable Innovations — Bangalore Software Firm',
  description:
    'Learn about Thinkable Innovations — a Bangalore-based software development proprietorship led by Pradeep Kumar P. We build custom software, AI, ERP, web and mobile apps for businesses and institutions.',
  keywords: [
    'about thinkable innovations',
    'thinkable innovations pradeep kumar',
    'bangalore software firm about',
    'proprietorship IT company bangalore',
    'software development company about us',
    'custom software company bangalore',
    'technology partner bangalore',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Thinkable Innovations | Bangalore Software Development Firm',
    description:
      'Thinkable Innovations is a Bangalore-based proprietorship technology firm helping businesses and institutions with custom software, AI, ERP and digital solutions.',
    url: '/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
