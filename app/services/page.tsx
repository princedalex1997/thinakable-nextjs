import type { Metadata } from 'next';
import { ServicesPageClient } from '@/components/pages/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Software Development Services in Bangalore | Thinkable Innovations',
  description:
    'Custom software development, web development, mobile apps, AI solutions, ERP systems, SEO, digital marketing and cloud hosting services in Bangalore, India.',
  keywords: [
    'software development services bangalore',
    'custom software development india',
    'web development company bangalore',
    'mobile app development india',
    'AI development company bangalore',
    'ERP development services india',
    'SEO services bangalore',
    'digital marketing agency bangalore',
    'cloud hosting services india',
    'react developer bangalore',
    'node js development india',
    'SaaS development bangalore',
    'web application development bangalore',
    'institutional printing services bangalore',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Software Development Services Bangalore | Thinkable Innovations',
    description:
      'Full-stack software services: custom software, web & mobile apps, AI, ERP, cloud hosting, SEO & digital marketing — from Thinkable Innovations, Bangalore.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
