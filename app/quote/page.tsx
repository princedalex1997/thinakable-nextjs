import type { Metadata } from 'next';
import { QuotePageClient } from '@/components/pages/QuotePageClient';

export const metadata: Metadata = {
  title: 'Request a Custom Software Quote | Thinkable Innovations',
  description:
    'Request a free custom software, web app, mobile app, ERP, AI or digital marketing quote from Thinkable Innovations in Bangalore. We respond within 24 hours.',
  keywords: [
    'get custom software quote bangalore',
    'software development quote india',
    'web development quote bangalore',
    'mobile app development cost india',
    'ERP development quote india',
    'custom software pricing india',
    'request software proposal india',
    'technology quote bangalore',
    'hire software company bangalore',
  ],
  alternates: { canonical: '/quote' },
  openGraph: {
    title: 'Get a Custom Software Quote | Thinkable Innovations Bangalore',
    description:
      'Request a free consultation and quote for custom software, web, mobile, AI, ERP or digital marketing from Thinkable Innovations.',
    url: '/quote',
  },
};

export default function QuotePage() {
  return <QuotePageClient />;
}
