import { ServiceItem, ProductItem, IndustryItem, PortfolioItem, InsightItem, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'Thinkable Innovations',
  businessType: 'Proprietorship Firm',
  proprietor: 'Pradeep Kumar P.',
  location: 'SNS Arcade, HAL Road, Bangalore, Karnataka, India',
  phone: '+91 90357 44801',
  phoneClean: '+919035744801',
  email: 'thinkableinnovations@gmail.com',
  primaryTagline: 'We Turn Ideas Into Digital Solutions.',
  secondaryTagline: 'Software • AI • ERP • Digital Solutions',
  brandMessage: 'Think. Build. Innovate.',
  shortDescription: 'Thinkable Innovations is a Bangalore-based software development and digital solutions firm delivering custom web applications, mobile applications, business software, AI-powered solutions, ERP platforms, hosting, SEO, digital marketing and specialized institutional printing solutions.',
  extendedDescription: 'At Thinkable Innovations, we don\'t believe in forcing businesses to change their processes just to fit generic software. We understand your requirements, map your workflows and develop solutions that fit the way your organisation actually works.',
  founderBio: 'Thinkable Innovations is led by Pradeep Kumar P., a technology and business professional with experience across software products, ERP solutions, implementation, project management, business operations and digital initiatives. His focus is on understanding business requirements, translating them into technology solutions and building practical digital products that can deliver long-term value.'
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    tagline: 'Software built precisely around your workflows and operations',
    description: 'Your business has its own processes, challenges and workflows. Generic software may not always fit. We develop custom software applications designed specifically around your requirements, converting manual processes, spreadsheets and disconnected systems into centralised digital applications.',
    icon: 'Code2',
    category: 'core',
    solutions: [
      'Business Management Software',
      'Workflow Applications',
      'Admin Portals & Customer Portals',
      'Employee Portals & Intranets',
      'Internal Management Systems',
      'SaaS Application Architecture',
      'Interactive Analytics Dashboards',
      'Business Automation Platforms',
      'REST & GraphQL API Integrations',
      'High-Scale Database Applications',
      'Enterprise Systems Integration'
    ],
    ctaText: 'Explore Custom Software',
    badge: 'Flagship Service'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Modern, high-performance web platforms and digital portals',
    description: 'We design and develop modern, responsive and scalable websites and web applications for businesses, institutions and startups, engineered for fast load speeds, seamless responsiveness, and high conversion.',
    icon: 'Globe',
    category: 'core',
    solutions: [
      'Corporate & Brand Websites',
      'High-Converting Landing Pages',
      'E-Commerce Portals & Marketplaces',
      'B2B Customer & Vendor Portals',
      'Comprehensive Admin Panels',
      'Executive Dashboards & Metrics',
      'Online Booking & Scheduling Systems',
      'SaaS Platforms & Web Applications',
      'Institutional Education Portals',
      'API-Driven Headless Web Apps'
    ],
    ctaText: 'Explore Web Development'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Native and cross-platform apps for customers, field teams and staff',
    description: 'We develop mobile applications that help businesses connect with customers, employees, field teams and operational processes with intuitive mobile-first experiences.',
    icon: 'Smartphone',
    category: 'core',
    solutions: [
      'Customer-Facing Mobile Apps',
      'Employee & Internal Field Staff Apps',
      'Education & Student/Parent Apps',
      'Transport & Fleet Tracking Apps',
      'Booking & On-Demand Service Apps',
      'Real-Time Location & Geofencing Apps',
      'Offline-First Data Collection Apps',
      'Cross-Platform iOS & Android Solutions'
    ],
    ctaText: 'Explore Mobile Apps'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Intelligent Applications',
    tagline: 'Practical AI and automated workflows built for real ROI',
    description: 'Artificial intelligence can help businesses automate repetitive work, improve customer interactions and make better use of their information. We build practical AI-powered applications based on real business use cases.',
    icon: 'Sparkles',
    category: 'core',
    solutions: [
      'Conversational AI Chatbots & Agents',
      'Intelligent Business Assistants',
      'Customer Support Automation',
      'Semantic & Hybrid AI Search',
      'Automated Document Processing & OCR',
      'Intelligent Data Extraction Pipelines',
      'AI-Powered Content & Copilot Tools',
      'Business Workflow Automation',
      'AI-Enabled CRM & ERP Intelligence',
      'Custom LLM Fine-Tuning & RAG Systems'
    ],
    ctaText: 'Explore AI Solutions',
    badge: 'Next-Gen AI'
  },
  {
    id: 'erp-development',
    title: 'ERP & Business Applications',
    tagline: 'One unified system connecting finance, HR, inventory and sales',
    description: 'An ERP should work around your business, not the other way around. We design and develop modular business management systems covering the exact workflows and functions that matter to your organisation.',
    icon: 'Layers',
    category: 'core',
    solutions: [
      'Customer Relationship Management (CRM)',
      'Sales Pipeline & Quotation Engine',
      'Purchase & Vendor Management',
      'Multi-Location Inventory & Stock Tracking',
      'Finance & Accounting Workflows',
      'HR, Attendance & Automated Payroll',
      'Operations & Project Scheduling',
      'Cross-Department Workflow Automations',
      'Executive Analytics & Custom Reporting',
      'Real-Time Internal Communications'
    ],
    ctaText: 'Explore ERP Solutions'
  },
  {
    id: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing',
    tagline: 'Search visibility, targeted paid acquisition and lead generation',
    description: 'A great website needs to be discoverable. We help businesses build their digital presence, generate qualified leads and connect with customers through technical SEO, on-page optimisation, content strategy and targeted campaigns.',
    icon: 'TrendingUp',
    category: 'growth',
    solutions: [
      'Comprehensive Keyword Research',
      'Deep Technical SEO Audits',
      'On-Page Optimization & Schema Markup',
      'Bangalore & Regional Local SEO',
      'Google Business Profile Optimisation',
      'Social Media Marketing (Meta, LinkedIn)',
      'Google Ads & Performance Campaigns',
      'B2B Lead Generation Funnels',
      'Content Marketing Strategy',
      'WhatsApp & Email Automation'
    ],
    ctaText: 'Grow Your Business'
  },
  {
    id: 'hosting-cloud',
    title: 'Hosting & Cloud Solutions',
    tagline: 'Secure, high-availability cloud infrastructure and 24/7 reliability',
    description: 'We help businesses host, deploy and maintain their websites and applications in reliable, high-uptime cloud environments with ongoing monitoring and maintenance.',
    icon: 'Cloud',
    category: 'infrastructure',
    solutions: [
      'Domain Setup & DNS Configuration',
      'High-Speed Website & Web App Hosting',
      'Dedicated Database Cloud Hosting',
      'Automated SSL Certificate Management',
      'CI/CD Cloud Deployment Pipelines',
      'Daily Automated Offsite Backups',
      'Server Configuration & Hardening',
      '24/7 Uptime Monitoring & Alerts',
      'Zero-Downtime Data Migration',
      'Preventive Security & Maintenance'
    ],
    ctaText: 'Explore Hosting'
  },
  {
    id: 'printing-solutions',
    title: 'Specialized Printing Solutions',
    tagline: 'Student ID cards, certificates, reports and institutional materials',
    description: 'Our relationship with educational institutions and businesses doesn\'t stop at software. We provide specialized, high-grade printing services so you can fulfill both digital software and physical institutional requirements from a single trusted partner.',
    icon: 'Printer',
    category: 'specialized',
    solutions: [
      'Smart RFID & Barcode Student ID Cards',
      'Staff & Faculty Identification Cards',
      'High-Security Graduation Certificates',
      'Academic Progress Reports & Grade Cards',
      'Official Institutional Mark Sheets',
      'Custom Admission Forms & Prospectuses',
      'Branded Institutional Stationery & Letterheads',
      'Large Format Event Banners & Flex',
      'Campus Display Posters & Notice Boards',
      'Custom Institutional Printing Packages'
    ],
    ctaText: 'Explore Printing',
    badge: 'Dual Digital + Physical'
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'education-erp',
    title: 'Education ERP',
    tagline: 'One Platform for Complete Education Management',
    description: 'A comprehensive, cloud-native education management platform designed for preschools, primary/secondary schools, colleges and universities to eliminate administrative friction.',
    status: 'In Development',
    icon: 'GraduationCap',
    modules: [
      'Admission & Prospectus Management',
      'Complete Student Lifecycle Profile',
      'Automated Daily Attendance Tracking',
      'Leave Management & Approvals',
      'Fee Collection, Receipts & Dues Alerts',
      'Academic Curriculum & Timetable Planning',
      'Examination & Grading Management',
      'Staff, Faculty & Teacher Management',
      'Automated Payroll & Tax Deductions',
      'Direct SMS & WhatsApp Communication',
      'Digital Certificate & TC Generation',
      'Custom Analytics & Regulatory Reports',
      'Parent Mobile Portal & Progress Tracking',
      'Student Learning & Assignment Portal',
      'Integrated Transport & Bus Route Tracking'
    ],
    ctaText: 'Register Your Interest',
    demoMetrics: [
      { label: 'Institutional Modules', value: '15+' },
      { label: 'Time Saved on Admin', value: '70%' },
      { label: 'Target Audience', value: 'Preschool to Higher Ed' }
    ]
  },
  {
    id: 'bus-tracking',
    title: 'Bus Tracking & Transport Management',
    tagline: 'Smarter and Safer Transport Operations for Campuses & Fleets',
    description: 'A technology platform for managing institutional and business vehicles, routes, drivers, and passenger safety with real-time GPS tracking and live alerts.',
    status: 'Planned / In Development',
    icon: 'Bus',
    modules: [
      'Live GPS Fleet Tracking & Geofencing',
      'Dynamic Route & Stop Optimization',
      'Driver & Attendant Profile Management',
      'Student & Passenger Boarding Verification',
      'Automated Boarding/De-boarding RFID Attendance',
      'Real-Time Parent ETA & Delay Alerts',
      'Speed Limit & Harsh Driving Notifications',
      'Vehicle Maintenance & Fuel Expense Logs',
      'Emergency SOS & Incident Management'
    ],
    ctaText: 'Explore Bus Tracking',
    demoMetrics: [
      { label: 'Live GPS Latency', value: '< 2 sec' },
      { label: 'Safety Coverage', value: '100%' },
      { label: 'Parent App Sync', value: 'Instant' }
    ]
  },
  {
    id: 'business-erp',
    title: 'Business ERP',
    tagline: 'Manage Your Entire Business From One Unified Platform',
    description: 'A modular, lightweight, and scalable business management platform engineered for growing SMEs, startups, and service organizations.',
    status: 'Planned',
    icon: 'Briefcase',
    modules: [
      'Lead & Customer Relationship Management (CRM)',
      'Sales Quotations, Proformas & Invoicing',
      'Purchase Orders & Supplier Relationship Mgmt',
      'Multi-Warehouse Inventory & Low Stock Alerts',
      'HR, Employee Records & Shift Rosters',
      'Cash Flow, Expense Tracking & Financials',
      'Operations, Task & Milestones Tracking',
      'Custom Workflow Automation Builder',
      'Executive BI Dashboards & Exportable Reports'
    ],
    ctaText: 'Request Early Access',
    demoMetrics: [
      { label: 'Core Departments', value: '8 Connected' },
      { label: 'Setup Time', value: 'Rapid' },
      { label: 'Customizability', value: '100% Modifiable' }
    ]
  },
  {
    id: 'ai-business-solutions',
    title: 'AI Business Solutions',
    tagline: 'Intelligence and Pragmatic Automation for Everyday Business',
    description: 'A planned portfolio of specialized AI-powered micro-tools and workflows designed to eliminate repetitive operational toil and empower team productivity.',
    status: 'Planned',
    icon: 'Bot',
    modules: [
      'Smart Document Extraction & Invoice Auditing',
      'Autonomous Customer Inquiry Assistants',
      'Automated Meeting Minutes & Action Task Parser',
      'Internal Knowledge Base Q&A Search Engine',
      'AI Email & Customer Response Drafter',
      'Predictive Business Demand & Churn Alerts'
    ],
    ctaText: 'Discuss AI Collaboration',
    demoMetrics: [
      { label: 'Automation Target', value: 'Repetitive Tasks' },
      { label: 'Integration Type', value: 'Plug & Play' },
      { label: 'Security', value: 'Zero Data Leaks' }
    ]
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'education',
    name: 'Education Institutions',
    tagline: 'Preschools, K-12 Schools, Colleges & Universities',
    description: 'Comprehensive digital ecosystems connecting students, parents, faculty and administration through specialized ERP, portals and institutional printing.',
    icon: 'GraduationCap',
    color: 'emerald',
    solutions: [
      'Education ERP Systems',
      'Student Management & Admissions',
      'Automated Attendance & Fees',
      'Exams, Grading & Mark Sheets',
      'Parent & Student Mobile Portals',
      'ID Card & Institutional Printing'
    ]
  },
  {
    id: 'startups',
    name: 'Startups & Scaleups',
    tagline: 'Fast-Growing Tech & Digital Ventures',
    description: 'Agile MVP development, scalable web architectures, mobile apps and custom tech to rapidly validate product-market fit.',
    icon: 'Rocket',
    color: 'blue',
    solutions: [
      'Rapid MVP Architecture',
      'Scalable Web & Mobile Apps',
      'API Integration & Microservices',
      'SaaS Platform Engineering',
      'AI Feature Embeddings'
    ]
  },
  {
    id: 'sme',
    name: 'Small & Medium Businesses',
    tagline: 'Trading, Manufacturing & Service Firms',
    description: 'Replacing manual spreadsheets and fragmented tools with tailored ERP, inventory tracking, workflow automation and customer portals.',
    icon: 'Building2',
    color: 'indigo',
    solutions: [
      'Custom ERP & CRM Solutions',
      'Inventory & Order Processing',
      'Financial Tracking & Invoicing',
      'Cloud Hosting & Backup',
      'Local SEO & Digital Leads'
    ]
  },
  {
    id: 'transport',
    name: 'Travel & Transportation',
    tagline: 'Fleet Operators, Logistics & Transport Desks',
    description: 'Real-time vehicle tracking, route management, passenger safety verification, and operational logistics dispatch software.',
    icon: 'Bus',
    color: 'amber',
    solutions: [
      'Fleet & Vehicle Management',
      'Live GPS Tracking & Geofencing',
      'Route Optimization Algorithms',
      'Driver & Attendant Handheld Apps',
      'Student Transit Safety Alerts'
    ]
  },
  {
    id: 'retail',
    name: 'Retail & Service Businesses',
    tagline: 'Merchants, Consultancies & Agencies',
    description: 'Modern customer-facing websites, appointment booking engines, inventory sync, local search optimization and lead campaigns.',
    icon: 'ShoppingBag',
    color: 'rose',
    solutions: [
      'E-Commerce & Digital Catalogs',
      'Online Booking & Appointments',
      'Customer Loyalty & CRM',
      'Google Local & Search Dominance',
      'Targeted Social Advertising'
    ]
  },
  {
    id: 'custom',
    name: 'Unique Business Workflows',
    tagline: 'Bespoke Operations Requiring Custom Architecture',
    description: 'Have an unusual business workflow or proprietary problem? We analyze your exact operational steps and architect software tailored to fit.',
    icon: 'Cpu',
    color: 'cyan',
    solutions: [
      'Deep Workflow Analysis & Blueprinting',
      'Custom Proprietary Logic Building',
      'Legacy Data Migration',
      'Multi-Device Interoperability',
      'Long-Term Dedicated Support'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Deep Requirement Mapping',
    desc: 'We start by understanding your core business, end users, operational bottlenecks and specific strategic objectives before recommending any technology.'
  },
  {
    step: '02',
    title: 'Plan',
    subtitle: 'Architecture & Blueprint',
    desc: 'We define the clear scope, feature specifications, user journeys, data schemas, security standards and step-by-step implementation milestones.'
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'UI/UX & Technical Specs',
    desc: 'We craft intuitive user experiences, interactive prototypes, responsive visual interfaces and resilient database/API architectures.'
  },
  {
    step: '04',
    title: 'Develop',
    subtitle: 'High-Quality Engineering',
    desc: 'Our engineering team converts validated designs into clean, modular, maintainable code using modern stacks with continuous code reviews.'
  },
  {
    step: '05',
    title: 'Test',
    subtitle: 'Rigorous Quality Assurance',
    desc: 'We rigorously audit functionality, responsiveness across mobile and desktop, edge-case validation, security postures and load performance.'
  },
  {
    step: '06',
    title: 'Deploy',
    subtitle: 'Secure Cloud Launch',
    desc: 'We configure domains, SSL, database instances, backups, and launch your solution into high-availability cloud infrastructure with zero downtime.'
  },
  {
    step: '07',
    title: 'Support & Grow',
    subtitle: 'Long-Term Partnership',
    desc: 'We stay by your side with regular maintenance, uptime monitoring, SEO guidance, digital marketing and iterative feature improvements.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Business First',
    desc: 'We begin by understanding your real business problem and operational ROI, not by pushing a pre-packaged technology or generic template.',
    icon: 'Target'
  },
  {
    title: 'Custom Solutions',
    desc: 'We build solutions strictly around your workflows and team habits, so your staff doesn’t have to fight cumbersome off-the-shelf software.',
    icon: 'Sliders'
  },
  {
    title: 'One Technology Partner',
    desc: 'Software development, AI, ERP, cloud hosting, SEO, digital marketing, and institutional printing all coordinated under one accountable roof.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Product Mindset',
    desc: 'We don’t just build one-off websites; we engineer durable platforms, mobile applications and software assets designed to scale with your growth.',
    icon: 'Boxes'
  },
  {
    title: 'Direct Communication',
    desc: 'As a proprietor-led technology firm under Pradeep Kumar P., we prioritize direct dialogue, total transparency, rapid turnaround and personal accountability.',
    icon: 'MessageSquareCheck'
  },
  {
    title: 'Long-Term Partnership',
    desc: 'Our work doesn’t end at deployment. We back you with ongoing server management, feature upgrades, security audits and growth marketing.',
    icon: 'ShieldCheck'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'vidya-mandir-erp',
    title: 'CampusSuite Education ERP & Student Portal',
    client: 'Integrated Educational Academy',
    industry: 'Education',
    requirement: 'Replace 6 disconnected paper ledgers, spreadsheets, and SMS tools with a centralised education management platform.',
    challenge: 'Managing over 1,800 students with complex multi-slab fee structures, irregular transport attendance, and high parent inquiry volume.',
    solution: 'Designed and engineered an all-in-one Education ERP covering admissions, RFID bus attendance, automated fee receipts with payment links, and a real-time parent mobile portal.',
    keyFeatures: [
      'Multi-tier fee calculator & automated receipt generation',
      'Daily biometric & RFID student attendance logging',
      'Real-time WhatsApp grade cards and circular broadcast',
      'Institutional printing integration for student ID cards & certificates'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS Cloud'],
    outcome: 'Eliminated manual fee reconciliation delays by 85% and reduced office walk-in query queues by 60% within the first academic term.',
    stats: { label: 'Admin Time Saved', value: '85%' }
  },
  {
    id: 'bangalore-fleet-tracker',
    title: 'SafeTransit Real-Time Fleet & Route Tracker',
    client: 'Metro Logistics & School Fleet Consortium',
    industry: 'Travel & Transportation',
    requirement: 'Monitor vehicle locations in real time, calculate dynamic arrival times through Bangalore traffic, and alert parents/managers instantly.',
    challenge: 'Intermittent mobile connectivity across suburban Bangalore routes and the need for sub-2-second live GPS coordinate refresh.',
    solution: 'Engineered a low-latency GPS tracking backend with driver smartphone apps, web dispatch dashboard, and parent SMS/push notification alerts.',
    keyFeatures: [
      'Sub-2-second live telemetry map with geofence zones',
      'Automated delay alerts triggered by real traffic patterns',
      'Driver speed violation and harsh braking log engine',
      'Emergency SOS push trigger with automated dispatch location'
    ],
    technologies: ['React Native', 'WebSockets', 'Go Microservices', 'Redis', 'Google Maps API'],
    outcome: 'Successfully tracking over 120 vehicles daily with 99.9% uptime and zero parent communication panics during rainy peak traffic.',
    stats: { label: 'Live GPS Latency', value: '< 2s' }
  },
  {
    id: 'precision-biz-erp',
    title: 'ApexFlow Modular ERP & Inventory Hub',
    client: 'Industrial Components Manufacturer',
    industry: 'Small & Medium Businesses',
    requirement: 'Streamline raw material purchases, factory inventory, sales invoicing and GST compliance from a single cloud application.',
    challenge: 'Legacy desktop software with zero remote access, leading to frequent inventory discrepancies and delayed quotation deliveries to clients.',
    solution: 'Built a lightweight web-based ERP enabling multi-warehouse stock visibility, automated re-order triggers, quotation-to-invoice workflows, and financial dashboards.',
    keyFeatures: [
      'Barcode-driven stock check-in and dispatch scanning',
      'One-click PDF quotation generation with margin calculation',
      'Role-based access for factory supervisors and finance accountants',
      'Real-time inventory valuation and low-stock SMS alerts'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    outcome: 'Prevented stock-out disruptions completely, shortened client quotation delivery from 24 hours to 10 minutes.',
    stats: { label: 'Quotation Speed', value: '10 min' }
  },
  {
    id: 'ai-doc-extract',
    title: 'IntelliExtract AI Document Processing Pipeline',
    client: 'Commercial Services & Financial Firm',
    industry: 'Professional Services',
    requirement: 'Automate the extraction of structured data from thousands of vendor invoices, purchase receipts, and scanned tax certificates.',
    challenge: 'High variance in vendor invoice layouts, handwritten signatures, and low-resolution smartphone photo uploads.',
    solution: 'Developed an AI document intelligence pipeline combining optical character recognition (OCR) with LLM parsing to validate line items and export to accounting databases.',
    keyFeatures: [
      'Multi-format ingestion (PDF, TIFF, JPEG, PNG)',
      'Automated line-item tax and total verification engine',
      'Human-in-the-loop review dashboard for flagged discrepancies',
      'Direct sync to ERP ledger tables'
    ],
    technologies: ['Python', 'Gemini AI SDK', 'FastAPI', 'React', 'Tailwind CSS'],
    outcome: 'Cut manual data entry costs by 78% with a 99.2% extraction accuracy rate across 45,000+ monthly documents.',
    stats: { label: 'Manual Effort Saved', value: '78%' }
  }
];

export const INSIGHTS_POSTS: InsightItem[] = [
  {
    id: 'choose-software-company-bangalore',
    title: 'How to Choose a Software Development Company in Bangalore',
    category: 'Software Strategy',
    readTime: '6 min read',
    date: 'March 2026',
    summary: 'Bangalore has thousands of agencies. Learn how to distinguish between low-quality code brokers and true engineering partners who understand your business workflows.',
    keyTakeaways: [
      'Prioritize partners who interview your business workflow before talking tech stack.',
      'Check if they offer direct communication with technical leadership or hide behind junior account handlers.',
      'Ensure clear intellectual property ownership and transparent post-deployment maintenance terms.'
    ]
  },
  {
    id: 'custom-vs-ready-made-software',
    title: 'Custom Software vs Ready-Made Software: The True Cost Analysis',
    category: 'Business Tech',
    readTime: '8 min read',
    date: 'February 2026',
    summary: 'While SaaS tools look cheap at $30/user/month, recurring subscription ballooning and workflow friction often make custom software far more cost-effective over 3 years.',
    keyTakeaways: [
      'Off-the-shelf software forces you to change your operations to match the tool.',
      'Custom software builds high proprietary enterprise value and has zero per-seat licensing penalties.',
      'Break-even on custom business platforms typically occurs between 14 to 20 months.'
    ]
  },
  {
    id: 'what-is-education-erp',
    title: 'What Is an Education ERP? Essential Features for Modern Schools',
    category: 'Education Technology',
    readTime: '7 min read',
    date: 'February 2026',
    summary: 'From preschools to colleges, administrative fragmentation costs hundreds of hours every month. Here is how modern cloud ERPs unite admissions, attendance, fees, and exams.',
    keyTakeaways: [
      'Unifies 15+ administrative roles onto a single secure database.',
      'Empowers parents with direct mobile tracking of attendance, fees, and transport safety.',
      'Combines digital administrative workflows with physical institutional printing.'
    ]
  },
  {
    id: 'ai-for-small-business',
    title: 'How AI Can Help Small Businesses: Practical Use Cases That Drive ROI',
    category: 'AI & Automation',
    readTime: '5 min read',
    date: 'January 2026',
    summary: 'Forget the science fiction hype. Small businesses in Bangalore are using focused AI for invoice parsing, customer chat routing, and intelligent search with immediate returns.',
    keyTakeaways: [
      'Document processing automation can recover 15-20 hours of manual clerk work per week.',
      'RAG-based customer assistants answer 70% of routine client inquiries 24/7.',
      'Practical AI implementation focuses on solving repetitive, well-defined bottlenecks.'
    ]
  },
  {
    id: 'custom-software-cost-india',
    title: 'How Much Does Custom Software Development Cost in India?',
    category: 'Pricing Guide',
    readTime: '9 min read',
    date: 'January 2026',
    summary: 'A realistic, no-nonsense breakdown of cost factors, developer rates, timeline estimations, and how scoping disciplines protect your budget.',
    keyTakeaways: [
      'Small business portals typically range from ₹50,000 to ₹1.5 Lakhs.',
      'Comprehensive ERP and custom multi-module platforms range from ₹1.5 Lakhs to ₹5 Lakhs+.',
      'Agile iterative delivery prevents budget overruns by validating milestones early.'
    ]
  },
  {
    id: 'gps-bus-tracking-school-safety',
    title: 'How GPS Bus Tracking Transforms Student Transit Safety',
    category: 'Transport & Safety',
    readTime: '5 min read',
    date: 'December 2025',
    summary: 'How live geofencing, sub-2-second coordinates, and automated WhatsApp delay notifications protect school reputations and grant parents peace of mind.',
    keyTakeaways: [
      'Sub-2-second location updates eliminate anxiety during peak Bangalore traffic congestion.',
      'Automated student boarding RFID scans confirm when each child enters and exits the bus.',
      'Comprehensive audit logs track driver speed, harsh turns, and route deviations.'
    ]
  }
];

export const FAQS_LIST: FaqItem[] = [
  {
    question: 'What services does Thinkable Innovations provide?',
    answer: 'Thinkable Innovations provides custom software development, website and web application development, mobile app development (iOS & Android), AI solutions, custom ERP development, website & cloud hosting, technical SEO, digital marketing campaigns, and specialized institutional printing solutions.'
  },
  {
    question: 'Do you develop custom software?',
    answer: 'Yes. We build software specifically designed around your unique business workflows, operational requirements, and internal processes—converting spreadsheets and manual tasks into clean digital applications.'
  },
  {
    question: 'Do you develop mobile applications?',
    answer: 'Yes. We develop high-performance mobile applications for businesses, customer-facing portals, employee management, educational institutions, GPS transport tracking, and on-demand services.'
  },
  {
    question: 'Do you provide AI development services?',
    answer: 'Yes. We develop practical AI-powered applications including conversational assistants, intelligent customer chatbots, automated document processing (OCR), semantic search, and AI-enabled ERP workflows.'
  },
  {
    question: 'Do you provide ERP development?',
    answer: 'Yes. We design and develop custom modular ERP systems covering CRM, inventory, sales, HR, attendance, payroll, and finance. We are also actively developing our own proprietary Education ERP and Business ERP platforms.'
  },
  {
    question: 'Do you work with educational institutions?',
    answer: 'Yes. Education technology is one of our primary focus areas. We are developing a comprehensive Education ERP platform for preschools, schools, and colleges, and we also provide institutional printing services like smart ID cards, certificates, and reports.'
  },
  {
    question: 'Do you provide website hosting and cloud support?',
    answer: 'Yes. We provide complete domain setup, high-speed website and application hosting, dedicated database configuration, automated SSL, cloud deployment, daily backups, uptime monitoring, and ongoing maintenance.'
  },
  {
    question: 'Do you provide SEO services?',
    answer: 'Yes. We provide technical SEO audits, on-page optimization, Bangalore and regional local SEO, Google Business Profile optimization, schema markup, and performance tracking to maximize search discoverability.'
  },
  {
    question: 'Do you provide digital marketing?',
    answer: 'Yes. Our digital marketing solutions include social media marketing, Google Ads, Meta advertising, B2B lead generation, content marketing, email marketing, WhatsApp outreach, and conversion rate optimization.'
  },
  {
    question: 'Do you provide printing services?',
    answer: 'Yes. We provide smart student and staff ID cards, certificates, academic reports, mark sheets, admission prospectuses, institutional stationery, banners, posters, and custom event print materials.'
  },
  {
    question: 'Can you develop a software product from an idea?',
    answer: 'Yes! Our core tagline is "We Turn Ideas Into Digital Solutions." We help you define requirements, map workflows, design the UI/UX, develop the application, and launch it into cloud production with long-term support.'
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer: 'Yes. We believe in long-term technology partnerships. We offer managed hosting, periodic maintenance, technical support, security patches, and iterative feature enhancements as your organization expands.'
  }
];
