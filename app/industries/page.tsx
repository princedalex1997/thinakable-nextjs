import type { Metadata } from 'next';
import { IndustriesPageClient } from '@/components/pages/IndustriesPageClient';

export const metadata: Metadata = {
  title: 'Industries We Serve | Thinkable Innovations Bangalore',
  description:
    'Thinkable Innovations serves education institutions, startups, SMEs, transport & logistics, retail and service businesses in Bangalore with custom software, ERP and digital solutions.',
  keywords: [
    'software for schools bangalore',
    'education technology company bangalore',
    'startup technology partner india',
    'SME software company bangalore',
    'small business ERP india',
    'transport fleet management software india',
    'retail software solutions bangalore',
    'IT solutions for educational institutions bangalore',
    'software for manufacturing companies india',
    'logistics software bangalore',
  ],
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries Served by Thinkable Innovations | Bangalore',
    description:
      'Technology solutions for education, startups, SMEs, transport and retail — custom software built by Thinkable Innovations, Bangalore.',
    url: '/industries',
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
