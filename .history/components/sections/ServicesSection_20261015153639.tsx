'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Cloud, 
  Printer, 
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { CORE_SERVICES } from '@/data/siteData';
import { ServiceItem } from '@/types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onRequestQuoteForService 
}) => {
  const [filter, setFilter] = useState<'all' | 'core' | 'growth' | 'infrastructure' | 'specialized'>('all');

  const filteredServices = filter === 'all' 
    ? CORE_SERVICES 
    : CORE_SERVICES.filter(s => s.category === filter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-400" />;
      case 'Printer': return <Printer className="w-6 h-6 text-rose-400" />;
      default: return <Code2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services-section" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span>Our Core Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From building your first digital presence to developing complex business applications, Thinkable Innovations provides end-to-end technology and digital solutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All 8 Services' },
            { id: 'core', label: 'Software, Web & Mobile' },
            { id: 'growth', label: 'SEO & Marketing' },
            { id: 'infrastructure', label: 'Hosting & Cloud' },
            { id: 'specialized', label: 'Institutional Printing' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-2xl bg-white/80 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-950/30 hover:-translate-y-1 relative backdrop-blur-sm"
            >
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {service.description}
                </p>

                {/* Micro Solution Tags */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 mb-5">
                  {service.solutions.slice(0, 3).map((sol, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                      <span className="truncate">{sol}</span>
                    </div>
                  ))}
                  {service.solutions.length > 3 && (
                    <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold pt-0.5">
                      +{service.solutions.length - 3} more solutions
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/60">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 group/btn"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onRequestQuoteForService(service.title)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white text-[11px] font-semibold transition-colors"
                >
                  Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner from Specification */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/40 border border-blue-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Have a custom software or business automation requirement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              We begin by analyzing your exact business problem and deliver end-to-end technology from concept to deployment.
            </p>
          </div>
          <button
            onClick={() => onRequestQuoteForService('Custom Software / Multi-Service')}
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
          >
            Discuss Your Project
          </button>
        </div>

      </div>
    </section>
  );
};
