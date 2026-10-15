'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechFocusSection } from '@/components/sections/TechFocusSection';
import { ContactAndQuoteSection } from '@/components/sections/ContactAndQuoteSection';

export function ServicesPageClient() {
  const router = useRouter();
  const handleOpenQuote = (serviceName?: string) => {
    const params = serviceName ? `?service=${encodeURIComponent(serviceName)}` : '';
    router.push(`/quote${params}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="pt-24"
    >
      <ServicesSection
        onSelectService={() => {}}
        onRequestQuoteForService={(title) => handleOpenQuote(title)}
      />
      <TechFocusSection onExploreService={(cat) => handleOpenQuote(cat)} />
      <ContactAndQuoteSection initialService="Custom Software Development" isQuoteMode={true} />
    </motion.div>
  );
}
