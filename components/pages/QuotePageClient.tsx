'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ContactAndQuoteSection } from '@/components/sections/ContactAndQuoteSection';
import { WhyChooseUsAndProcess } from '@/components/sections/WhyChooseUsAndProcess';
import { Suspense } from 'react';

function QuoteContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const service = searchParams.get('service') || 'Custom Software';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="pt-24"
    >
      <ContactAndQuoteSection initialService={service} isQuoteMode={true} />
      <WhyChooseUsAndProcess
        onStartProject={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </motion.div>
  );
}

export function QuotePageClient() {
  return (
    <Suspense fallback={<div className="pt-24 min-h-screen" />}>
      <QuoteContent />
    </Suspense>
  );
}
