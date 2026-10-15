'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ContactAndQuoteSection } from '@/components/sections/ContactAndQuoteSection';
import { FaqSection } from '@/components/sections/FaqSection';

export function ContactPageClient() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="pt-24"
    >
      <ContactAndQuoteSection initialService="General Enquiry" isQuoteMode={false} />
      <FaqSection onContactClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </motion.div>
  );
}
