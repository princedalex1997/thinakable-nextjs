'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Target, 
  Compass, 
  UserCheck, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

interface AboutSectionProps {
  onContactClick: () => void;
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, onExploreServices }) => {
  return (
    <section id="about-page-view" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Main Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>Bangalore Proprietorship Firm</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Thinkable Innovations
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Think. Build. Innovate.
          </p>
        </div>

        {/* Narrative & Overview Box */}
        <div className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 mb-16 shadow-xl shadow-slate-200/50 dark:shadow-xl space-y-6">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
            Thinkable Innovations is a Bangalore-based proprietorship firm focused on software development, technology solutions and digital services.
            We help businesses and educational institutions adopt technology that makes their operations simpler, more efficient and more scalable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800">
            <p>
              Our services cover the complete digital lifecycle — from understanding an idea and designing the solution to development, deployment, hosting, optimisation and ongoing support.
              We develop custom websites, web applications, mobile applications, business software, AI-powered applications and ERP platforms. We also provide hosting, SEO and digital marketing services to help businesses establish and grow their digital presence.
            </p>
            <p>
              Education technology is one of our important focus areas. We are working towards developing our own education ERP platform while also providing technology and institutional printing solutions to educational organisations.
              Our long-term objective is to build practical technology products that solve real-world problems and create measurable value for businesses and institutions.
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center">
              <Compass className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To build practical, accessible and innovative technology solutions that help businesses and institutions work smarter, grow faster and operate more efficiently.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To combine technology, business understanding and innovation to create reliable digital solutions that solve real customer problems.
            </p>
          </div>

        </div>

        {/* Our Approach (5 Pillars) */}
        <div className="rounded-3xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 mb-16">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Our Approach</h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              How we approach every technology engagement:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: 'Understand', desc: 'Understand the business before recommending technology.' },
              { step: 'Simplify', desc: 'Convert complex processes into simple digital workflows.' },
              { step: 'Build', desc: 'Develop scalable and maintainable solutions.' },
              { step: 'Support', desc: 'Remain available beyond the initial implementation.' },
              { step: 'Improve', desc: 'Continuously enhance solutions based on changing business requirements.' }
            ].map((app, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-xs">
                <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                  Pillar 0{i+1}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{app.step}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder & Proprietor Spotlight */}
        <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 mb-16 shadow-2xl shadow-slate-200/50 dark:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg shadow-blue-500/20">
                PK
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{COMPANY_INFO.proprietor}</h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Proprietor — Thinkable Innovations</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Bangalore, Karnataka, India</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Leadership & Philosophy
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {COMPANY_INFO.founderBio}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                <span className="px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">Software Products</span>
                <span className="px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">ERP Solutions</span>
                <span className="px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">Project Management</span>
                <span className="px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">Digital Initiatives</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Model: Technology Partner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">A Technology Partner for Businesses & Institutions</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Projects can range from small websites and digital services to complex software platforms and long-term product development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              'Startups',
              'Small and Medium Businesses',
              'Educational Institutions',
              'Service Organisations',
              'Entrepreneurs',
              'Organisations Requiring Custom Technology'
            ].map((client, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                ✓ {client}
              </span>
            ))}
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={onContactClick}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
            >
              Discuss Your Project
            </button>
            <button
              onClick={onExploreServices}
              className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all border border-slate-200 dark:border-slate-700"
            >
              Explore Services
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
