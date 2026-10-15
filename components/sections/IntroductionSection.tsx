'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, Layers, Cpu, Shield, Sparkles, Workflow } from 'lucide-react';

interface IntroductionSectionProps {
  onTellUsWhatYouNeed: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onTellUsWhatYouNeed }) => {
  return (
    <section id="introduction-section" className="py-20 bg-slate-100/60 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800/80 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <Workflow className="w-3.5 h-3.5" />
            <span>Workflow-Centric Engineering</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technology Built Around Your Business
          </h2>
          
          <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
            Every business is different. Your software should be too.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            At Thinkable Innovations, we don&apos;t believe in forcing businesses to change their processes just to fit generic software. 
            We understand your requirements, map your workflows and develop solutions that fit the way your organisation actually works.
          </p>
        </div>

        {/* Comparison: Generic Off-The-Shelf vs Thinkable Custom Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Generic Software Trap */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-4 shadow-sm">
            <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400 font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              </div>
              <span>The Generic Software Dilemma</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Pre-built software forces your employees to change their habits, pay recurring monthly per-seat licensing penalties, and juggle multiple disconnected subscriptions.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-2">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Rigid workflows that don&apos;t match your team&apos;s daily routine</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Bloated features you never use, missing the 3 features you actually need</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Recurring per-user costs that skyrocket as your organization expands</span>
              </li>
            </ul>
          </div>

          {/* Thinkable Innovations Custom Approach */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-blue-50/70 to-white dark:from-blue-950/40 dark:to-slate-950 border border-blue-200 dark:border-blue-600/30 shadow-xl shadow-blue-500/5 dark:shadow-blue-950/30 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span>The Thinkable Innovations Method</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              We analyze your exact paper notes, spreadsheets, and operational steps—crafting custom platforms that feel like a natural extension of your team.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 pt-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Precision mapping: Software mirrors your exact daily operational steps</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Full asset ownership with zero restrictive per-seat penalties</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>End-to-end partner: Concept, UI/UX, coding, hosting, SEO, and printing</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Section 2 Call to action */}
        <div className="text-center">
          <button
            id="intro-tell-us-btn"
            onClick={onTellUsWhatYouNeed}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/25 hover:scale-105"
          >
            <span>Tell Us What You Need</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
