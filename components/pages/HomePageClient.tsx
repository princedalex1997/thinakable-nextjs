'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroductionSection } from '@/components/sections/IntroductionSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechFocusSection } from '@/components/sections/TechFocusSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { EducationAndPrintingSection } from '@/components/sections/EducationAndPrintingSection';
import { WhyChooseUsAndProcess } from '@/components/sections/WhyChooseUsAndProcess';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactAndQuoteSection } from '@/components/sections/ContactAndQuoteSection';


export function HomePageClient() {
  const router = useRouter();

  const handleStartProject = () => {
    router.push('/quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    const params = serviceName ? `?service=${encodeURIComponent(serviceName)}` : '';
    router.push(`/quote${params}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      key="home-view"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <HeroSection
        onStartProject={handleStartProject}
        onExploreServices={handleExploreServices}
      />

      <IntroductionSection
        onTellUsWhatYouNeed={() => handleOpenQuote('Custom Workflow Analysis')}
      />

      <ServicesSection
        onSelectService={() => {}}
        onRequestQuoteForService={(title) => handleOpenQuote(title)}
      />

      <TechFocusSection
        onExploreService={(category) => handleOpenQuote(category)}
      />

      <ProductsSection
        onSelectProduct={(prod) => handleOpenQuote(`Product Pilot: ${prod.title}`)}
        onRegisterInterest={(title) => handleOpenQuote(`Pilot Interest: ${title}`)}
      />

      <IndustriesSection
        onConsultIndustry={(name) => handleOpenQuote(`Industry Consultation: ${name}`)}
        onExploreEducation={() => {
          const el = document.getElementById('education-printing-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <EducationAndPrintingSection
        onDiscussEducation={() => handleOpenQuote('Education Technology / ERP')}
        onRequestPrintingQuote={() => handleOpenQuote('Institutional Printing Solutions')}
      />

      <WhyChooseUsAndProcess onStartProject={handleStartProject} />

      <PortfolioSection onStartProject={handleStartProject} />

      <InsightsSection
        onRequestQuote={() => handleOpenQuote('General Technology Consultation')}
      />

      <FaqSection
        onContactClick={() => router.push('/contact')}
      />

      <ContactAndQuoteSection
        initialService="Custom Software"
        isQuoteMode={false}
      />
    </motion.div>
  );
}
