'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Rocket, 
  Building2, 
  Bus, 
  ShoppingBag, 
  Cpu, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { INDUSTRIES_LIST } from '../data/siteData';

interface IndustriesSectionProps {
  onConsultIndustry: (industryName: string) => void;
  onExploreEducation: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ 
  onConsultIndustry,
  onExploreEducation 
}) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-blue-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-indigo-400" />;
      case 'Bus': return <Bus className="w-6 h-6 text-amber-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-rose-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      default: return <Building2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="industries-section" className="py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span>Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Solutions for Different Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Whether running an educational campus, a logistics fleet, or a growing service firm, we engineer systems tailored to your operational realities.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_LIST.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 hover:border-blue-300 dark:hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-950/20 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  {ind.id === 'education' && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                      Primary Focus
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {ind.name}
                </h3>
                
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {ind.tagline}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {ind.description}
                </p>

                {/* Sub solutions list */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 mb-5">
                  {ind.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                      <span className="truncate">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                {ind.id === 'education' ? (
                  <button
                    onClick={onExploreEducation}
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1"
                  >
                    <span>Explore Education Focus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onConsultIndustry(ind.name)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
                  >
                    <span>Discuss Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  onClick={() => onConsultIndustry(ind.name)}
                  className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-[11px] font-medium border border-slate-200 dark:border-slate-800"
                >
                  Consult
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Business Requirements Feature Box from Specification */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Have a unique workflow or business problem?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              We can analyse your requirement, map your operational steps, and design a technology solution specifically for your organisation.
            </p>
          </div>
          <button
            onClick={() => onConsultIndustry('Custom Workflow Requirement')}
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
          >
            Analyse My Workflow
          </button>
        </div>

      </div>
    </section>
  );
};
