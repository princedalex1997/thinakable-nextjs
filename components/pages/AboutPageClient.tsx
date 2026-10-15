'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { AboutSection } from '@/components/sections/AboutSection';

export function AboutPageClient() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="pt-24"
    >
      <AboutSection
        onContactClick={() => router.push('/contact')}
        onExploreServices={() => router.push('/services')}
      />
    </motion.div>
  );
}
