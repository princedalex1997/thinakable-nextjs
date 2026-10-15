'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Sliders, 
  CheckCircle2, 
  Boxes, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { WHY_CHOOSE_US, PROCESS_STEPS, COMPANY_INFO } from '../data/siteData';

interface WhyChooseUsAndProcessProps {
  onStartProject: () => void;
}

export const WhyChooseUsAndProcess: React.FC<WhyChooseUsAndProcessProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'Target': return <Target className="w-5 h-5 text-blue-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-indigo-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-purple-400" />;
      case 'MessageSquareCheck': return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default: return <Target className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div id="why-and-process-wrapper">
      {/* Why Choose Thinkable Innovations */}
      <section id="why-choose-us-section" className="py-24 bg-slate-100/70 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>The Thinkable Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Choose Thinkable Innovations?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              We combine business understanding with solid technical craftsmanship to deliver practical systems you actually enjoy using.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-slate-700 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-950/20 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getPillarIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Proprietor Note Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md">
                PK
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {COMPANY_INFO.proprietor}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Proprietor & Technology Lead — Thinkable Innovations
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 italic sm:text-right max-w-md">
              &ldquo;We treat your business with the care of a trusted in-house team. No junior sales reps, no hidden handoffs.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* Our 7-Step Process: From Idea to Implementation */}
      <section id="process-section" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Structured Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              From Idea to Implementation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              A transparent, battle-tested 7-step engineering methodology that eliminates uncertainty and ensures predictable milestones.
            </p>
          </div>

          {/* Process Steps Navigator */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  activeStep === idx
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 shadow-2xs'
                }`}
              >
                <span className={`text-[10px] font-mono block ${activeStep === idx ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'}`}>
                  STEP {step.step}
                </span>
                <span className="text-xs font-bold block truncate mt-0.5">
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Step Feature Box */}
          <div className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold">
                  Phase {PROCESS_STEPS[activeStep].step} of 07
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {PROCESS_STEPS[activeStep].title} — <span className="text-blue-600 dark:text-blue-400 font-semibold">{PROCESS_STEPS[activeStep].subtitle}</span>
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {PROCESS_STEPS[activeStep].desc}
                </p>

                <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Deliverables
                  </span>
                  <span>•</span>
                  <span>Weekly Progress Sync</span>
                  <span>•</span>
                  <span>Zero Guesswork</span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-center items-center md:items-end gap-3">
                <button
                  onClick={onStartProject}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Initiate Step 01</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  No commitment required for initial discovery call.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
