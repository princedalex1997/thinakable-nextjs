import type { Metadata } from 'next';
import { InsightsPageClient } from '@/components/pages/InsightsPageClient';

export const metadata: Metadata = {
  title: 'Insights & Ideas — Software, AI, ERP | Thinkable Innovations',
  description:
    'Practical articles on software development costs in India, choosing a software company in Bangalore, custom vs off-the-shelf software, education ERP features, AI automation and GPS tracking.',
  keywords: [
    'software development cost india',
    'how to choose software company bangalore',
    'custom vs readymade software india',
    'education ERP benefits india',
    'AI automation for small business india',
    'GPS bus tracking school safety india',
    'software development articles bangalore',
    'ERP implementation guide india',
    'digital marketing insights bangalore',
    'technology blog bangalore',
  ],
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights on Software, AI & ERP | Thinkable Innovations',
    description:
      'Technology insights, software guides and business automation articles from Thinkable Innovations, Bangalore.',
    url: '/insights',
  },
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
