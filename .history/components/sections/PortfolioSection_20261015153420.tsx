'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  TrendingUp, 
  Cpu, 
  Clock, 
  Tag
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/data/siteData';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onStartProject: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onStartProject }) => {
  const [activeIndustry, setActiveIndustry] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem>(PORTFOLIO_PROJECTS[0]);

  const industries = ['All', 'Education', 'Travel & Transportation', 'Small & Medium Businesses', 'Professional Services'];

  const filteredProjects = activeIndustry === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.industry === activeIndustry);

  return (
    <section id="portfolio-section" className="py-24 bg-slate-100/60 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span>Portfolio & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects & Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Every project starts with a problem. We work with businesses and organisations to understand their requirements and convert them into practical digital solutions.
          </p>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setActiveIndustry(ind)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeIndustry === ind
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-2xs'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 hover:border-blue-300 dark:hover:border-slate-700 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-950/30"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                    {project.industry}
                  </span>
                  {project.stats && (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/40">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.stats.label}: {project.stats.value}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Client Context: {project.client}
                  </p>
                </div>

                {/* Requirement & Challenge */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    <span className="text-rose-600 dark:text-rose-400 font-bold">Challenge: </span>
                    {project.challenge}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Requirement: </span>
                    {project.requirement}
                  </p>
                </div>

                {/* Solution Summary */}
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Engineered Solution: </span>
                  {project.solution}
                </div>

                {/* Key Features */}
                <div className="space-y-1.5 pt-2">
                  <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Key Features Delivered:
                  </p>
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="pt-2">
                  <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Technology Stack:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome Highlight Box */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 text-xs text-emerald-800 dark:text-emerald-300">
                  <span className="font-bold">Measurable Outcome: </span>
                  {project.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 dark:from-blue-950/40 dark:via-slate-950 dark:to-indigo-950/40 border border-slate-200 dark:border-slate-800 max-w-3xl mx-auto space-y-4 shadow-sm">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">
            Have a project similar to these?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Tell us about your organization&apos;s bottlenecks and our technical team will map out a customized prototype architecture.
          </p>
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
