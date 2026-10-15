import type { Metadata } from 'next';
import { PortfolioPageClient } from '@/components/pages/PortfolioPageClient';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Thinkable Innovations Bangalore',
  description:
    'Real-world software projects by Thinkable Innovations — education ERP implementation, AI document processing, real-time GPS fleet tracking and custom business ERP case studies from Bangalore.',
  keywords: [
    'software development portfolio bangalore',
    'ERP implementation case study india',
    'AI document processing project india',
    'GPS bus tracking system india',
    'education software case study bangalore',
    'custom ERP case study india',
    'web application portfolio bangalore',
    'software development projects india',
  ],
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio & Case Studies | Thinkable Innovations',
    description:
      'Explore real software projects and case studies from Thinkable Innovations — ERP, AI, GPS tracking and custom software solutions from Bangalore.',
    url: '/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
