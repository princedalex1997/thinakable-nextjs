'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { EducationAndPrintingSection } from '@/components/sections/EducationAndPrintingSection';

export function IndustriesPageClient() {
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
      <IndustriesSection
        onConsultIndustry={(name) => handleOpenQuote(`Industry Consultation: ${name}`)}
        onExploreEducation={() => handleOpenQuote('Education Technology')}
      />
      <EducationAndPrintingSection
        onDiscussEducation={() => handleOpenQuote('Education Technology / ERP')}
        onRequestPrintingQuote={() => handleOpenQuote('Institutional Printing Solutions')}
      />
    </motion.div>
  );
}
