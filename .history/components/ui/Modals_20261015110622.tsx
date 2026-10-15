'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, FileText, Send, Sparkles, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { ServiceItem, ProductItem } from '../types';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto relative text-slate-800 dark:text-slate-200"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Compliance</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Policy</h2>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Thinkable Innovations respects the privacy of visitors and customers who use our website.
            </p>
            <p>
              Information submitted through enquiry, contact and quote forms may include your name, organisation, phone number, email address and project requirements.
            </p>
            <p className="font-semibold text-slate-900 dark:text-white pt-2">We use this information to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Respond to enquiries</li>
              <li>Understand project requirements</li>
              <li>Prepare proposals</li>
              <li>Communicate regarding services</li>
              <li>Provide requested information</li>
              <li>Improve our services</li>
            </ul>
            <p className="pt-2">
              We do not intentionally sell personal information submitted through our website to third parties.
            </p>
            <p>
              Appropriate technical and organisational measures are implemented to protect information collected through the website.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mt-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">For privacy-related questions, contact:</p>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto relative text-slate-800 dark:text-slate-200"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold">
            <FileText className="w-4 h-4" />
            <span>Commercial Terms</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Terms & Conditions</h2>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              The content on this website is provided for general information about Thinkable Innovations and its services.
            </p>
            <p>
              Project scope, pricing, timelines, deliverables, payment terms, intellectual property, support and other commercial conditions will be defined separately in the applicable proposal, quotation, work order or agreement.
            </p>
            <p>
              Information about products marked as &quot;Planned&quot;, &quot;Coming Soon&quot; or &quot;In Development&quot; represents future or ongoing product initiatives and should not be interpreted as a currently available commercial product unless explicitly stated.
            </p>
            <p>
              Thinkable Innovations reserves the right to update website content, services and product information from time to time.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mt-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">For project-specific terms or contract inquiries:</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Thinkable Innovations — SNS Arcade, HAL Road, Bangalore</p>
              <p className="text-xs text-blue-600 dark:text-blue-400">{COMPANY_INFO.phone}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onRequestQuote }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto relative text-slate-800 dark:text-slate-200"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
              {service.category.toUpperCase()}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
              {service.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {service.description}
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Comprehensive Capabilities & Solutions Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.solutions.map((sol, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">Tailored to your exact workflow</p>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors"
            >
              Request Quote for {service.title}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
