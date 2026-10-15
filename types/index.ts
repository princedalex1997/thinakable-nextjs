// ─── Domain Types ────────────────────────────────────────────────────────────

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  category: 'core' | 'growth' | 'infrastructure' | 'specialized';
  solutions: string[];
  ctaText: string;
  badge?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: 'In Development' | 'Planned / In Development' | 'Planned';
  icon: string;
  modules: string[];
  features?: string[];
  ctaText: string;
  demoMetrics?: { label: string; value: string }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  solutions: string[];
  color: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  requirement: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  outcome: string;
  stats?: { label: string; value: string };
}

export interface InsightItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteFormData {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  serviceType: string;
  description: string;
  estimatedBudget: string;
  expectedTimeline: string;
  referenceUrl?: string;
}
