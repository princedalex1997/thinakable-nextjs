'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  GraduationCap, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Bus,
  Laptop,
  Check
} from 'lucide-react';


interface HeroSectionProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartProject, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'education' | 'ai' | 'transport'>('education');

  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 sm:w-225 h-112.5 bg-linear-to-tr from-blue-500/10 via-indigo-500/10 to-cyan-500/10 dark:from-blue-600/15 dark:via-indigo-600/10 dark:to-cyan-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
                Bangalore • SNS Arcade, HAL Road
              </span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-xs font-medium text-blue-600 dark:text-cyan-400">
                Software • AI • ERP • Digital Solutions
              </span>
            </motion.div>

            {/* Main Headline H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              We Turn Ideas Into
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                Digital Solutions.
              </span>
            </motion.h1>

            {/* Supporting Text from Specification */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Thinkable Innovations helps businesses and educational institutions transform ideas, processes and challenges into practical digital solutions.
              From custom software and web applications to mobile apps, AI solutions, ERP platforms, hosting, SEO and digital marketing — we build technology around your requirements.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                id="hero-start-project-btn"
                onClick={onStartProject}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-sm border border-slate-300 dark:border-slate-700/80 transition-all hover:scale-[1.02] shadow-sm"
              >
                <span>Explore Our Services</span>
              </button>
            </motion.div>

            {/* Pillar Badges from Specification */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 border-t border-slate-200 dark:border-slate-800/80"
            >
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                Core Domains
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-sm">
                  <Code2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                  Software Development
                </span>
                <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  AI Solutions
                </span>
                <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-sm">
                  <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  ERP Systems
                </span>
                <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  Digital Growth
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Tech Platform Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white/80 dark:bg-linear-to-b dark:from-slate-900/90 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-300/40 dark:shadow-blue-950/40 p-5 backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 ml-2">thinkable.platform.preview</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
                  System Online
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1.5 pt-3 pb-4">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'education'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education ERP</span>
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'ai'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI Agent</span>
                </button>
                <button
                  onClick={() => setActiveTab('transport')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === 'transport'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <Bus className="w-3.5 h-3.5" />
                  <span>Bus Tracking</span>
                </button>
              </div>

              {/* Tab 1: Education ERP Preview */}
              {activeTab === 'education' && (
                <div className="space-y-3.5 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Student Attendance</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">97.4%</p>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">✓ Automated biometric sync</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Fees Collected</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">₹14.8 L</p>
                      <p className="text-[10px] text-blue-600 dark:text-blue-400 font-medium mt-1">✓ Instant receipts issued</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">Active Campus Modules</span>
                      <span className="text-[10px] text-blue-600 dark:text-cyan-400 font-mono font-semibold">15/15 Enabled</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-[10px] text-slate-700 dark:text-slate-300">
                      <div className="p-1.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 text-center font-medium shadow-xs">
                        Admissions
                      </div>
                      <div className="p-1.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 text-center font-medium shadow-xs">
                        Exams & TC
                      </div>
                      <div className="p-1.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 text-center font-medium shadow-xs">
                        Parent App
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-slate-700 dark:text-slate-300 text-[11px]">Printed ID Cards & Reports Synced</span>
                    </div>
                    <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-300 uppercase">Production Ready</span>
                  </div>
                </div>
              )}

              {/* Tab 2: AI Automation Preview */}
              {activeTab === 'ai' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 font-mono text-[11px]">
                    <div className="text-slate-500 dark:text-slate-400">// Practical Business Automation</div>
                    <div className="text-blue-600 dark:text-cyan-400 mt-1">Prompt: &quot;Process 84 monthly supplier invoices&quot;</div>
                    <div className="text-slate-700 dark:text-slate-300 mt-2 p-2 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] space-y-1">
                      <div className="text-emerald-600 dark:text-emerald-400">✓ 84/84 Invoices OCR Extracted (99.4% accuracy)</div>
                      <div className="text-slate-700 dark:text-slate-300">✓ Tax & GSTIN verified against portal</div>
                      <div className="text-blue-600 dark:text-blue-400">✓ Ledger entries queued for approval</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between text-slate-800 dark:text-slate-300 font-semibold">
                      <span>Manual Clerk Time Saved</span>
                      <span className="text-emerald-600 dark:text-emerald-400">~18 hrs / week</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="w-[82%] h-full bg-linear-to-r from-blue-500 to-emerald-400"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Transport & Fleet Preview */}
              {activeTab === 'transport' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                        <Bus className="w-3.5 h-3.5 text-amber-500" />
                        <span>Route #12: HAL Road to Whitefield</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Live GPS (1.2s)</span>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-[11px] space-y-1">
                      <div className="flex justify-between text-slate-600 dark:text-slate-300">
                        <span>Current Location:</span>
                        <span className="text-slate-900 dark:text-white font-medium">Near Marathahalli Bridge</span>
                      </div>
                      <div className="flex justify-between text-slate-600 dark:text-slate-300">
                        <span>Speed & Status:</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">32 km/h • Normal Route</span>
                      </div>
                      <div className="flex justify-between text-slate-600 dark:text-slate-300">
                        <span>ETA Next Stop:</span>
                        <span className="text-blue-600 dark:text-cyan-400 font-semibold">4 mins (Parents notified)</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 text-[11px]">RFID Student Tap-in Boarding</span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-300 font-medium">38/38 Verified</span>
                  </div>
                </div>
              )}

              {/* Brand Watermark Bottom */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Thinkable Innovations Platform Architecture</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Proprietor-Led • Bangalore</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

  );
};
