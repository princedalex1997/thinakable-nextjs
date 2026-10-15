'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { WhyChooseUsAndProcess } from '@/components/sections/WhyChooseUsAndProcess';

export function PortfolioPageClient() {
  const router = useRouter();
  const handleStartProject = () => {
    router.push('/quote');
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
      <PortfolioSection onStartProject={handleStartProject} />
      <WhyChooseUsAndProcess onStartProject={handleStartProject} />
    </motion.div>
  );
}
