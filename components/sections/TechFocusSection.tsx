'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Smartphone, Sparkles, Cloud, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const TechFocusSection: React.FC<{ onExploreService: (category: string) => void }> = ({ onExploreService }) => {
  const [activeArea, setActiveArea] = useState<number>(0);

  const focusAreas = [
    {
      title: 'Web Technologies',
      short: 'Web',
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      tagline: 'High-Performance Web Applications & Portals',
      description: 'Websites, portals, dashboards, SaaS platforms and enterprise web applications built with modern architectures for speed and resilience.',
      stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'GraphQL / REST'],
      deliverables: ['Custom Portals', 'Executive Dashboards', 'SaaS Architectures', 'E-Commerce Engines']
    },
    {
      title: 'Mobile Applications',
      short: 'Mobile',
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
      tagline: 'Cross-Platform Android & iOS Engineering',
      description: 'Native and hybrid mobile applications designed for customers, employee field teams, education portals, and live GPS transport tracking.',
      stack: ['React Native', 'Flutter', 'TypeScript', 'Offline SQLite', 'Geofencing SDKs', 'Push Notifications'],
      deliverables: ['Parent & Student Apps', 'Field Staff Tools', 'Transport GPS Apps', 'On-Demand Service Portals']
    },
    {
      title: 'Artificial Intelligence',
      short: 'AI',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      tagline: 'Applied Intelligence & Workflow Automation',
      description: 'AI assistants, automation, intelligent search, document processing and AI-powered business applications that eliminate manual toil.',
      stack: ['LLM Pipelines', 'Gemini AI API', 'RAG Vector Embeddings', 'OCR Document Parsing', 'FastAPI', 'Python'],
      deliverables: ['Document Processing / OCR', 'Customer Support Assistants', 'Semantic Search Systems', 'Automated Summarizers']
    },
    {
      title: 'Cloud & Infrastructure',
      short: 'Cloud',
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      tagline: 'High-Availability Hosting & DevOps',
      description: 'Hosting, deployment, databases, automated backups, 24/7 monitoring and hardened application infrastructure with zero downtime.',
      stack: ['AWS', 'Google Cloud', 'Docker', 'PostgreSQL / MySQL', 'SSL Automation', 'CI/CD Pipelines'],
      deliverables: ['Domain & DNS Setup', 'Daily Automated Backups', 'Server Hardening', '99.9% Uptime SLA']
    },
    {
      title: 'Business Systems & ERP',
      short: 'Business Systems',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      tagline: 'Modular Enterprise Resource Platforms',
      description: 'ERP, CRM, HR, finance, inventory, workflow and operational management systems connecting multiple departments seamlessly.',
      stack: ['Modular ERP Frameworks', 'Multi-Tenant Databases', 'Role-Based Access Control', 'Automated PDF Invoicing'],
      deliverables: ['Education ERP', 'Inventory & Sales Hubs', 'HR & Payroll Engines', 'Custom Workflow Triggers']
    }
  ];

  return (
    <section id="tech-focus-section" className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span>Our Technology Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technology That Solves Real Problems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            We master modern frameworks to deliver reliable, scalable software that delivers immediate operational results.
          </p>
        </div>

        {/* Tab Selector for Mobile / Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8 max-w-4xl mx-auto">
          {focusAreas.map((area, index) => (
            <button
              key={area.short}
              onClick={() => setActiveArea(index)}
              className={`p-3 rounded-xl text-left border transition-all flex items-center gap-2 ${
                activeArea === index
                  ? 'bg-white dark:bg-blue-600/15 border-blue-500 text-blue-600 dark:text-white shadow-md'
                  : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="shrink-0">{area.icon}</div>
              <span className="text-xs font-bold truncate">{area.short}</span>
            </button>
          ))}
        </div>

        {/* Active Technology Focus Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  {focusAreas[activeArea].icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {focusAreas[activeArea].title}
                </h3>
              </div>
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                {focusAreas[activeArea].tagline}
              </p>
            </div>

            <button
              onClick={() => onExploreService(focusAreas[activeArea].title)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors shrink-0"
            >
              <span>Explore {focusAreas[activeArea].short} Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Capabilities & Scope
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {focusAreas[activeArea].description}
              </p>

              <div className="space-y-2 pt-2">
                {focusAreas[activeArea].deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Engineered With Modern Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {focusAreas[activeArea].stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                <span>Production-grade architectures, strictly avoiding bloated dependencies.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
