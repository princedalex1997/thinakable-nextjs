'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Bus, 
  Briefcase, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { PRODUCTS_LIST } from '@/data/siteData';
import { ProductItem } from '@/types';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem => void;
  onRegisterInterest: (productTitle: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  onSelectProduct,
  onRegisterInterest 
}) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const activeProduct = PRODUCTS_LIST[selectedProductIndex];

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-blue-400" />;
      case 'Bus': return <Bus className="w-6 h-6 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-purple-400" />;
      default: return <Layers className="w-6 h-6 text-blue-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'In Development') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          Product in Development
        </span>
      );
    }
    if (status === 'Planned / In Development') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400"></span>
          Planned / In Development
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
        <Clock className="w-3 h-3" />
        Planned Product
      </span>
    );
  };

  return (
    <section id="products-section" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span>Our Products & Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Software Products Built for Recurring Challenges
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Thinkable Innovations is building a portfolio of technology products designed to solve recurring business and institutional challenges.
          </p>
          <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
            Identify a real problem → design a practical solution → build a scalable platform → continuously improve it.
          </p>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PRODUCTS_LIST.map((prod, idx) => (
            <button
              key={prod.id}
              onClick={() => setSelectedProductIndex(idx)}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                selectedProductIndex === idx
                  ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-400 dark:border-blue-500/60 shadow-lg shadow-blue-500/10 dark:shadow-blue-950/50 -translate-y-1'
                  : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    {getProductIcon(prod.icon)}
                  </div>
                  {idx === selectedProductIndex && (
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {prod.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {prod.tagline}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                {getStatusBadge(prod.status)}
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Showcase for Selected Product */}
        <div className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Info, Status & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    {getProductIcon(activeProduct.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {activeProduct.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                      {activeProduct.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  {getStatusBadge(activeProduct.status)}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                  {activeProduct.description}
                </p>
              </div>

              {/* Demo Metrics */}
              {activeProduct.demoMetrics && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80">
                  {activeProduct.demoMetrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{metric.value}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Product Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onRegisterInterest(activeProduct.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>{activeProduct.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectProduct(activeProduct)}
                  className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all border border-slate-200 dark:border-slate-700"
                >
                  View Full Specifications
                </button>
              </div>
            </div>

            {/* Right Col: Modular Feature Breakdown */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Planned Platform Modules ({activeProduct.modules.length})
                </h4>
                <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono">Integrated Workflow</span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-1">
                {activeProduct.modules.map((mod, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/70 flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                    <span className="truncate">{mod}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/70 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Want to pilot this platform for your campus or business?</span>
                <button
                  onClick={() => onRegisterInterest(activeProduct.title)}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Join Pilot Program →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
