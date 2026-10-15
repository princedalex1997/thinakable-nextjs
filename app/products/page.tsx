import type { Metadata } from 'next';
import { ProductsPageClient } from '@/components/pages/ProductsPageClient';

export const metadata: Metadata = {
  title: 'Software Products & Platforms | Thinkable Innovations',
  description:
    'Education ERP, bus tracking system, business ERP and AI business solutions from Thinkable Innovations — software products designed for schools, colleges, SMEs and enterprises in India.',
  keywords: [
    'education ERP software india',
    'school management system bangalore',
    'college ERP system india',
    'bus tracking software schools india',
    'student bus tracking app india',
    'business ERP software india',
    'SME ERP platform india',
    'AI business automation tools india',
    'education technology software bangalore',
    'school software company bangalore',
  ],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Software Products for Education & Business | Thinkable Innovations',
    description:
      'Education ERP, real-time bus tracking, business ERP and AI automation tools built by Thinkable Innovations, Bangalore.',
    url: '/products',
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
