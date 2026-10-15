import type { Metadata } from 'next';
import { ContactPageClient } from '@/components/pages/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Thinkable Innovations — Bangalore Software Company',
  description:
    'Contact Thinkable Innovations for software development, AI, ERP, web development, mobile apps, hosting, SEO or digital marketing. Reach us at SNS Arcade, HAL Road, Bangalore or call +91 90357 44801.',
  keywords: [
    'contact thinkable innovations bangalore',
    'software company contact bangalore',
    'hire software developer bangalore',
    'IT company contact HAL road bangalore',
    'custom software enquiry bangalore',
    'web development contact india',
    'get software quote india',
    'technology partner contact bangalore',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Thinkable Innovations | Bangalore Software Company',
    description:
      'Get in touch with Thinkable Innovations — custom software, AI, ERP, web & mobile apps from Bangalore. Call +91 90357 44801.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
