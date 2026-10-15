'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (href: string, sectionId?: string) => {
    router.push(href);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/85 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/20 py-3'
          : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div>
              <span className="block font-bold text-slate-900 dark:text-white text-lg tracking-tight group-hover:text-blue-500 transition-colors">
                Thinkable <span className="text-blue-500 font-semibold">Innovations</span>
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <button
                  key={link.label}
                  id={`nav-link-${link.href.replace('/', '') || 'home'}`}
                  onClick={() => navigate(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden md:flex items-center space-x-2.5">
            <ThemeToggle />

            <button
              id="header-quote-cta-btn"
              onClick={onOpenQuoteModal}
              className="relative group overflow-hidden rounded-lg p-px focus:outline-none"
            >
              <span className="absolute inset-0 bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-lg group-hover:opacity-90 transition-opacity"></span>
              <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-[7px] bg-blue-600 group-hover:bg-blue-600/90 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/30">
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                <span>Get a Quote</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle className="p-1.5" />

            <button
              id="mobile-quote-trigger"
              onClick={onOpenQuoteModal}
              className="px-2.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900 dark:text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent('Hello Thinkable Innovations, I would like to discuss a requirement.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600/15 border border-emerald-500/40 text-xs font-medium text-emerald-700 dark:text-emerald-300"
              >
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Theme Mode</span>
              <ThemeToggle showLabel={true} />
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    navigate(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === link.href
                      ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onOpenQuoteModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-md text-center"
              >
                Request a Custom Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
