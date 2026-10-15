import './globals.css';
import { ClientLayout } from '@/components/layout/ClientLayout';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thinkableinnovations.com'),
  title: {
    default: 'Software Development Company in Bangalore | Thinkable Innovations',
    template: '%s | Thinkable Innovations',
  },
  description:
    'Thinkable Innovations is a Bangalore-based software development and digital solutions company offering custom software, web and mobile apps, AI solutions, ERP, cloud hosting, SEO and digital marketing services.',
  keywords: [
    'software development company bangalore',
    'custom software development bangalore',
    'web development bangalore',
    'mobile app development bangalore',
    'AI solutions bangalore',
    'ERP development india',
    'digital marketing bangalore',
    'IT company bangalore',
    'thinkable innovations',
    'software company HAL road bangalore',
    'custom web application bangalore',
  ],
  authors: [{ name: 'Thinkable Innovations', url: 'https://thinkableinnovations.com' }],
  creator: 'Thinkable Innovations',
  publisher: 'Thinkable Innovations',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thinkableinnovations.com',
    siteName: 'Thinkable Innovations',
    title: 'Software Development Company in Bangalore | Thinkable Innovations',
    description:
      'Thinkable Innovations — Bangalore software development company. Custom software, web & mobile apps, AI solutions, ERP, cloud hosting, SEO & digital marketing.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thinkable Innovations — Software Development Company in Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company in Bangalore | Thinkable Innovations',
    description:
      'Custom software, web & mobile apps, AI, ERP, cloud hosting, SEO & digital marketing — Thinkable Innovations, Bangalore.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Thinkable Innovations',
  description:
    'Bangalore-based software development and digital solutions firm delivering custom web applications, mobile apps, AI-powered solutions, ERP platforms, hosting, SEO and digital marketing.',
  url: 'https://thinkableinnovations.com',
  telephone: '+919035744801',
  email: 'thinkableinnovations@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SNS Arcade, HAL Road',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: ['Bangalore', 'Karnataka', 'India'],
  knowsAbout: [
    'Software Development',
    'Web Development',
    'Mobile App Development',
    'AI Solutions',
    'ERP Development',
    'Digital Marketing',
    'SEO',
    'Cloud Hosting',
  ],
  priceRange: '₹₹',
  openingHours: 'Mo-Sa 09:00-18:00',
  founder: {
    '@type': 'Person',
    name: 'Pradeep Kumar P.',
    jobTitle: 'Proprietor & Lead',
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
