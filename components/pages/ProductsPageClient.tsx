'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { EducationAndPrintingSection } from '@/components/sections/EducationAndPrintingSection';

export function ProductsPageClient() {
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
      <ProductsSection
        onSelectProduct={(prod) => handleOpenQuote(`Product Pilot: ${prod.title}`)}
        onRegisterInterest={(title) => handleOpenQuote(`Pilot Interest: ${title}`)}
      />
      <EducationAndPrintingSection
        onDiscussEducation={() => handleOpenQuote('Education Technology / ERP')}
        onRequestPrintingQuote={() => handleOpenQuote('Institutional Printing Solutions')}
      />
    </motion.div>
  );
}
