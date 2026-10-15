'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton';
import { PrivacyPolicyModal, TermsModal, ServiceDetailModal } from '@/components/ui/Modals';
import { ServiceItem } from '@/types';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleOpenQuoteModal = (serviceName?: string) => {
    const params = serviceName ? `?service=${encodeURIComponent(serviceName)}` : '';
    router.push(`/quote${params}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased flex flex-col justify-between transition-colors duration-200">
        <Navbar onOpenQuoteModal={() => handleOpenQuoteModal('Custom Software')} />

        <main className=" bg-red-800 grow">{children}</main>

        <Footer
          onOpenPrivacy={() => setPrivacyModalOpen(true)}
          onOpenTerms={() => setTermsModalOpen(true)}
          onOpenQuote={() => handleOpenQuoteModal('Custom Project Quote')}
        />

        <WhatsAppFloatingButton />

        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestQuote={(serviceTitle) => handleOpenQuoteModal(serviceTitle)}
        />

        <PrivacyPolicyModal
          isOpen={privacyModalOpen}
          onClose={() => setPrivacyModalOpen(false)}
        />

        <TermsModal
          isOpen={termsModalOpen}
          onClose={() => setTermsModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
