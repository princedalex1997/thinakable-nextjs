'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Printer, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  FileText, 
  IdCard, 
  School,
  QrCode
} from 'lucide-react';

interface EducationAndPrintingSectionProps {
  onDiscussEducation: () => void;
  onRequestPrintingQuote: () => void;
}

export const EducationAndPrintingSection: React.FC<EducationAndPrintingSectionProps> = ({
  onDiscussEducation,
  onRequestPrintingQuote
}) => {
  const [activeView, setActiveView] = useState<'both' | 'software' | 'printing'>('both');

  const softwareModules = [
    'Education ERP Platform',
    'Online & Walk-In Admission Mgmt',
    'Student Lifecycle & Document Profiles',
    'Biometric & RFID Student Attendance',
    'Fee Management & Instant Digital Receipts',
    'Academic Timetabling & Syllabus Progress',
    'Automated Examination & Grade Cards',
    'Staff Attendance & Automated Payroll',
    'Parent Mobile App & Student Portals',
    'Live Bus Transport & Safety Alerts',
    'Digital Transfer Certificates (TC)',
    'Institutional Accreditation Reports'
  ];

  const printingItems = [
    { title: 'Smart Student ID Cards', desc: 'Durable PVC cards with embedded RFID chips, barcodes & high-resolution lamination', icon: <IdCard className="w-4 h-4 text-blue-400" /> },
    { title: 'Staff & Faculty ID Cards', desc: 'Executive security cards with magnetic stripes or QR code authentication', icon: <IdCard className="w-4 h-4 text-indigo-400" /> },
    { title: 'Graduation Certificates', desc: 'Anti-counterfeiting security borders, gold foiling and official seals', icon: <Award className="w-4 h-4 text-amber-400" /> },
    { title: 'Academic Progress Reports', desc: 'Custom formatted, branded multi-page grade cards ready for parent signatures', icon: <FileText className="w-4 h-4 text-emerald-400" /> },
    { title: 'Official Mark Sheets', desc: 'Watermark-protected examination mark sheets with serialized verification', icon: <FileText className="w-4 h-4 text-cyan-400" /> },
    { title: 'Admission Prospectuses & Forms', desc: 'Glossy brochures, application booklets, and enrollment stationery', icon: <School className="w-4 h-4 text-purple-400" /> },
    { title: 'Campus Banners & Posters', desc: 'Large format outdoor flex banners, directional signage, and event backdrops', icon: <Printer className="w-4 h-4 text-rose-400" /> },
    { title: 'Institutional Stationery', desc: 'Custom branded letterheads, fee receipt booklets, and envelopes', icon: <FileText className="w-4 h-4 text-slate-400" /> }
  ];

  return (
    <section id="education-printing-section" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <School className="w-3.5 h-3.5" />
            <span>Specialized Focus Area</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education Technology + Institutional Printing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A single trusted partner managing your entire institutional ecosystem — from cloud ERP portals and mobile apps to smart RFID ID cards and physical certificates.
          </p>
        </div>

        {/* Dual Pillar Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Pillar 1: Education Technology & ERP */}
          <div className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Education Technology
                    </h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      Preschools, Schools, Colleges & Higher Ed
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 uppercase">
                  Digital Hub
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Education is one of our primary technology focus areas. We engineer software solutions designed to simplify day-to-day operations — from admissions and attendance to fee collection, exams, parent communication, and reporting.
              </p>

              <div className="space-y-2 mb-8">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Supported Digital Capabilities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {softwareModules.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onDiscussEducation}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <span>Discuss Education ERP Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 2: Institutional Printing Solutions */}
          <div className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center">
                    <Printer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Institutional Printing
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      Physical Collateral & Academic Stationery
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 uppercase">
                  Physical Hub
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Our relationship with institutions doesn’t end with software code. We provide high-quality physical printing services so you can fulfill both digital platform needs and essential campus printing through a single contract.
              </p>

              <div className="space-y-3 mb-8">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Specialized Printing Services
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {printingItems.map((item, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 text-xs">
                      <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                        {item.icon}
                        <span className="truncate">{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onRequestPrintingQuote}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
            >
              <span>Request Printing Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Highlight Callout Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-slate-50 to-blue-50 dark:from-emerald-950/30 dark:via-slate-900 dark:to-blue-950/30 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
              <QrCode className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Seamless Digital + Physical Integration
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Printed student ID cards can be encoded with ERP database credentials, QR codes, and RFID for instant gate attendance.
              </p>
            </div>
          </div>
          <button
            onClick={onDiscussEducation}
            className="px-5 py-2.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 shrink-0"
          >
            Explore Unified Solution
          </button>
        </div>

      </div>
    </section>
  );
};
