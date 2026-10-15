import type { Metadata } from 'next';
import { HomePageClient } from '@/components/pages/HomePageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Bangalore | Thinkable Innovations',
  description:
    'Thinkable Innovations — Bangalore software development company. Custom software, web & mobile apps, AI solutions, ERP, cloud hosting, SEO & digital marketing. We turn ideas into digital solutions.',
  keywords: [
    'software development company bangalore',
    'custom software development bangalore',
    'web development company bangalore',
    'mobile app development bangalore',
    'AI solutions bangalore',
    'ERP development bangalore',
    'software company HAL road bangalore',
    'IT company bangalore india',
    'thinkable innovations bangalore',
    'custom web application development india',
    'digital solutions company bangalore',
    'software development firm bangalore',
    'react developer bangalore',
    'node js development bangalore',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Software Development Company in Bangalore | Thinkable Innovations',
    description:
      'We Turn Ideas Into Digital Solutions. Custom software, web & mobile apps, AI, ERP, cloud hosting, SEO & digital marketing from Bangalore.',
    url: '/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Thinkable Innovations' }],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
