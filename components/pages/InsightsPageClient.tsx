'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { FaqSection } from '@/components/sections/FaqSection';

export function InsightsPageClient() {
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
      <InsightsSection onRequestQuote={() => handleOpenQuote('General Consultation')} />
      <FaqSection onContactClick={() => router.push('/contact')} />
    </motion.div>
  );
}
