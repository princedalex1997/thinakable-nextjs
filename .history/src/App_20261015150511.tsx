import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { ServicesSection } from './components/ServicesSection';
import { TechFocusSection } from './components/TechFocusSection';
import { ProductsSection } from './components/ProductsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { EducationAndPrintingSection } from './components/EducationAndPrintingSection';
import { WhyChooseUsAndProcess } from './components/WhyChooseUsAndProcess';
import { PortfolioSection } from './components/PortfolioSection';
import { InsightsSection } from './components/InsightsSection';
import { FaqSection } from './components/FaqSection';
import { ContactAndQuoteSection } from './components/ContactAndQuoteSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PrivacyPolicyModal, TermsModal, ServiceDetailModal } from './components/Modals';
import { PageView, ServiceItem, ProductItem } from '../types';
import { CORE_SERVICES, PRODUCTS_LIST, COMPANY_INFO } from './data/siteData';
import "../app/globals.css"

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteServiceTarget, setQuoteServiceTarget] = useState<string>('Custom Software');
  
  // Modals state
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  // Sync scroll on navigate
  const handleNavigate = (view: PageView, sectionId?: string) => {
    setCurrentView(view);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) setQuoteServiceTarget(serviceName);
    setCurrentView('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = () => {
    setCurrentView('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    if (currentView === 'home') {
      const el = document.getElementById('services-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased flex flex-col justify-between transition-colors duration-200">
        
        {/* Global Sticky Navigation */}
        <Navbar
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenQuoteModal={() => handleOpenQuoteModal('Custom Software')}
        />

      {/* Main Content Area */}
      <main className="grow">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Home Hero with interactive dashboard simulator */}
              <HeroSection
                onStartProject={handleStartProject}
                onExploreServices={handleExploreServices}
              />

              {/* Section 2: Technology Built Around Your Business */}
              <IntroductionSection
                onTellUsWhatYouNeed={() => handleOpenQuoteModal('Custom Workflow Analysis')}
              />

              {/* Section 3: Core Services */}
              <ServicesSection
                onSelectService={(srv) => setSelectedService(srv)}
                onRequestQuoteForService={(title) => handleOpenQuoteModal(title)}
              />

              {/* Section 4: Technology Focus */}
              <TechFocusSection
                onExploreService={(category) => handleOpenQuoteModal(category)}
              />

              {/* Section 5: Products & Platforms */}
              <ProductsSection
                onSelectProduct={(prod) => handleOpenQuoteModal(`Product Pilot: ${prod.title}`)}
                onRegisterInterest={(title) => handleOpenQuoteModal(`Pilot Interest: ${title}`)}
              />

              {/* Section 6: Industries We Serve */}
              <IndustriesSection
                onConsultIndustry={(name) => handleOpenQuoteModal(`Industry Consultation: ${name}`)}
                onExploreEducation={() => {
                  const el = document.getElementById('education-printing-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* Sections 7 & 8: Education Technology + Printing */}
              <EducationAndPrintingSection
                onDiscussEducation={() => handleOpenQuoteModal('Education Technology / ERP')}
                onRequestPrintingQuote={() => handleOpenQuoteModal('Institutional Printing Solutions')}
              />

              {/* Sections 9 & 10: Why Choose Us + 7-Step Process */}
              <WhyChooseUsAndProcess
                onStartProject={handleStartProject}
              />

              {/* Section 11: Portfolio & Real Case Studies */}
              <PortfolioSection
                onStartProject={handleStartProject}
              />

              {/* Section 10: Insights & Ideas */}
              <InsightsSection
                onRequestQuote={() => handleOpenQuoteModal('General Technology Consultation')}
              />

              {/* Section 13: Frequently Asked Questions */}
              <FaqSection
                onContactClick={() => handleNavigate('contact')}
              />

              {/* Sections 11 & 12: Contact & Interactive Quote Request */}
              <ContactAndQuoteSection
                initialService={quoteServiceTarget}
                isQuoteMode={false}
              />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div
              key="about-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-24"
            >
              <AboutSection
                onContactClick={() => handleNavigate('contact')}
                onExploreServices={() => handleNavigate('services')}
              />
            </motion.div>
          )}

          {currentView === 'services' && (
            <motion.div
              key="services-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-24"
            >
              <ServicesSection
                onSelectService={(srv) => setSelectedService(srv)}
                onRequestQuoteForService={(title) => handleOpenQuoteModal(title)}
              />
              <TechFocusSection
                onExploreService={(category) => handleOpenQuoteModal(category)}
              />
              <ContactAndQuoteSection
                initialService="Custom Software Development"
                isQuoteMode={true}
              />
            </motion.div>
          )}

          {currentView === 'products' && (
            <motion.div
              key="products-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-24"
            >
              <ProductsSection
                onSelectProduct={(prod) => handleOpenQuoteModal(`Product Pilot: ${prod.title}`)}
                onRegisterInterest={(title) => handleOpenQuoteModal(`Pilot Interest: ${title}`)}
              />
              <EducationAndPrintingSection
                onDiscussEducation={() => handleOpenQuoteModal('Education Technology / ERP')}
                onRequestPrintingQuote={() => handleOpenQuoteModal('Institutional Printing Solutions')}
              />
            </motion.div>
          )}

          {currentView === 'industries' && (
            <motion.div
              key="industries-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-24"
            >
              <IndustriesSection
                onConsultIndustry={(name) => handleOpenQuoteModal(`Industry Consultation: ${name}`)}
                onExploreEducation={() => handleOpenQuoteModal('Education Technology')}
              />
              <EducationAndPrintingSection
                onDiscussEducation={() => handleOpenQuoteModal('Education Technology / ERP')}
                onRequestPrintingQuote={() => handleOpenQuoteModal('Institutional Printing Solutions')}
              />
            </motion.div>
          )}

          {currentView === 'portfolio' && (
            <motion.div
              key="portfolio-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-24"
            >
              <PortfolioSection
                onStartProject={handleStartProject}
              />
              <WhyChooseUsAndProcess
                onStartProject={handleStartProject}
              />
            </motion.div>
          )}

          {currentView === 'insights' && (
            <motion.div
              key="insights-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-24"
            >
              <InsightsSection
                onRequestQuote={() => handleOpenQuoteModal('General Consultation')}
              />
              <FaqSection
                onContactClick={() => handleNavigate('contact')}
              />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div
              key="contact-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-24"
            >
              <ContactAndQuoteSection
                initialService="General Enquiry"
                isQuoteMode={false}
              />
              <FaqSection
                onContactClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </motion.div>
          )}

          {currentView === 'quote' && (
            <motion.div
              key="quote-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pt-24"
            >
              <ContactAndQuoteSection
                initialService={quoteServiceTarget}
                isQuoteMode={true}
              />
              <WhyChooseUsAndProcess
                onStartProject={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Master Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
        onOpenQuote={() => handleOpenQuoteModal('Custom Project Quote')}
      />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloatingButton />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Terms & Conditions Modal */}
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />

      </div>
    </ThemeProvider>
  );
}
