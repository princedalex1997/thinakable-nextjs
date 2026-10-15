'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenQuote,
}) => {
  const router = useRouter();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (href: string) => {
    router.push(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="master-site-footer" className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">

          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-md shadow-blue-500/25">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 text-xl tracking-tighter">
                    Ti
                  </span>
                </div>
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">
                Thinkable <span className="text-blue-600 dark:text-blue-500 font-semibold">Innovations</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {COMPANY_INFO.primaryTagline}
            </p>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {COMPANY_INFO.shortDescription}
            </p>

            <div className="pt-2 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <p><span className="text-slate-900 dark:text-slate-200 font-semibold">Business Type:</span> {COMPANY_INFO.businessType}</p>
              <p><span className="text-slate-900 dark:text-slate-200 font-semibold">Proprietor:</span> {COMPANY_INFO.proprietor}</p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Services
            </p>
            <ul className="space-y-2 text-xs">
              {[
                'Custom Software Development',
                'Web Development',
                'Mobile App Development',
                'AI Solutions',
                'ERP Development',
                'Hosting & Cloud',
                'SEO Services',
                'Digital Marketing',
                'Printing Solutions',
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate('/services')}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Products
            </p>
            <ul className="space-y-2 text-xs">
              {[
                'Education ERP',
                'Bus Tracking',
                'Business ERP',
                'AI Business Solutions',
              ].map((prod, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate('/products')}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                  >
                    {prod}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Contact & Company
            </p>
            <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-slate-900 dark:hover:text-white transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md transition-colors text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 Thinkable Innovations. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Proprietorship Firm | Bangalore, Karnataka, India
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button onClick={onOpenPrivacy} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
