import part_1 from "../assets/teamMembers/Manoj Bhansal.webp";
import part_2 from "../assets/teamMembers/Manoj Sharma.webp";
import part_3 from "../assets/teamMembers/Nikhil Rathi.webp";
import part_4 from "../assets/teamMembers/Nishant Agarwal.webp";
import part_5 from "../assets/teamMembers/Sheetal.webp";
import part_6 from "../assets/teamMembers/Tilkesh.webp";
export const MenuBar = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/Contact",
    name: "Contact",
  },
];

// Landing page contetn start
export const services = [
  {
    title: "Audit & Assurance",
    description:
      "Statutory, Internal, Concurrent, Revenue, and Management Audits",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    features: ["Statutory Audit", "Internal Audit", "Tax Audit", "Stock Audit"],
  },
  {
    title: "Taxation Services",
    description: "Direct & Indirect Tax, GST, Income Tax, TDS Compliance",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    features: ["GST Filing", "Income Tax", "TDS Returns", "Tax Planning"],
  },
  {
    title: "Corporate Finance",
    description: "Project Funding, Business Advisory & Restructuring",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    features: [
      "Project Finance",
      "Working Capital",
      "M&A Advisory",
      "Valuation",
    ],
  },
  {
    title: "FEMA & Compliance",
    description: "RBI, FOREX Compliance & International Taxation",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    features: [
      "FEMA Advisory",
      "RBI Compliance",
      "FOREX Services",
      "NRI Services",
    ],
  },
  {
    title: "Company Secretary",
    description: "Company Law Compliance & Secretarial Services",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    features: ["ROC Filings", "Board Meetings", "AGM Support", "Compliance"],
  },
  {
    title: "Business Advisory",
    description: "Strategic Planning & Business Consulting",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    features: [
      "Business Plans",
      "Financial Models",
      "Risk Management",
      "Strategy",
    ],
  },
];

export const industries = [
  {
    name: "Banking & Finance",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    count: "150+",
  },
  {
    name: "Manufacturing",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    count: "120+",
  },
  {
    name: "Real Estate",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    count: "80+",
  },
  {
    name: "IT & Technology",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    count: "90+",
  },
  {
    name: "Healthcare",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    count: "60+",
  },
  {
    name: "Retail & E-commerce",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    count: "70+",
  },
];

export const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Qualified CAs with 20+ years of experience",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Technology Driven",
    description: "Modern tools for efficient service delivery",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Client-Centric",
    description: "Personalized solutions for every client",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "Pan-India Presence",
    description: "Offices in Mumbai, Delhi, and Nagpur",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechCorp Solutions",
    text: "Outstanding service! Their audit team is thorough and professional. Highly recommended for any business.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Sharma Industries",
    text: "They've been handling our taxation for 5 years. Excellent guidance and always prompt with filings.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Green Ventures",
    text: "Best CA firm in Mumbai! Their advisory helped us secure project funding worth 50 crores.",
    rating: 5,
  },
];

export const partners = [
  {
    name: "CA. Tilkesh Shah",
    designation: "FCA",
    expertise: "Taxation & GST",
    image: part_6,
  },
  {
    name: "CA. Manoj Sharma",
    designation: "FCA",
    expertise: "Audit & Assurance",
    image: part_2,
  },
  {
    name: "CA. Nishant Agarwal",
    designation: "FCA, DISA",
    expertise: "Project Finance",
    image: part_4,
  },
  {
    name: "CA. Manoj Bansal",
    designation: "FCA",
    expertise: "Audit Services",
    image: part_1,
  },
  {
    name: "CA. Nikhil Rathi",
    designation: "ACA",
    expertise: "Bank Audits",
    image: part_3,
  },
  {
    name: "CA. Sheetal Shaikh",
    designation: "ACA",
    expertise: "Compliance",
    image: part_5,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "Free consultation to understand your needs",
  },
  {
    step: "02",
    title: "Proposal & Agreement",
    desc: "Customized proposal with transparent pricing",
  },
  {
    step: "03",
    title: "Execution",
    desc: "Expert team delivers quality services",
  },
  {
    step: "04",
    title: "Ongoing Support",
    desc: "Continuous support and guidance",
  },
];
export const coreValues = [
  "Integrity",
  "Professionalism",
  "Confidentiality",
  "Client-Centric",
  "Teamwork",
  "Continuous Learning",
];
// Landing page contetn end
// contact page contetn start

export const contactMethods = [
  {
    title: "Call Us",
    info: "+91 98190 82700",
    subInfo: "022-4264 0413",
    link: "tel:+919819082700",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email Us",
    info: "info@smartsca.co.in",
    subInfo: "admin@smartsca.co.in",
    link: "mailto:info@smartsca.co.in",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Visit Us",
    info: "Mumbai Head Office",
    subInfo: "Mon - Sat: 10:00 AM - 7:00 PM",
    link: "#locations",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export const offices = [
  {
    city: "Mumbai",
    type: "Head Office",
    address:
      "1202 , Lotus Arc One, New Link Road, Opp. Tanishq Showroom, Andheri West, Mumbai- 400013",
    phone: "+91 98190 82700",
    email: "pm.associates@hotmail.com",
    timings: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
  {
    city: "Delhi",
    type: "Branch Office",
    address:
      "H.No. 102-103, 3rd floor, Pocket-8, Sector-23, Rohini PO, Rohini Sector-7 , DIST North West Delhi, Delhi - 110085",
    phone: "+91 98190 82700",
    email: "pm.associates@hotmail.com",
    timings: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
  {
    city: "Nagpur",
    type: "Branch Office",
    address:
      "74, Samaj Ekta Society, Near Mausam Colony, Somalwada, Manish Nagar, Nagpur - 440005",
    phone: "+91 98190 82700",
    email: "pm.associates@hotmail.com",
    timings: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
  {
    city: "Ahmedabad",
    type: "Branch Office",
    address:
      "A-332, Sumel 8, Ajit Mill Cross Road, Rakhial, Ahmedabad - 380023.",
    phone: "+91 98190 82700",
    email: "pm.associates@hotmail.com",
    timings: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
];

export const servicesC = [
  "Statutory Audit",
  "Internal Audit",
  "GST Services",
  "Income Tax Services",
  "Corporate Finance",
  "Business Valuation",
  "Company Law Compliance",
  "FEMA & RBI Compliance",
  "Other Services",
];

export const faqs = [
  // {
  //   question: "What are your consultation charges?",
  //   answer:
  //     "We offer a free initial consultation to understand your requirements. Our service charges vary based on the scope and complexity of work.",
  // },
  {
    question: "How quickly can you respond to urgent matters?",
    answer:
      "For existing clients, we aim to respond within 24 hours. For urgent matters, you can reach us directly via phone for immediate assistance.",
  },
  {
    question: "Do you serve clients outside Mumbai?",
    answer:
      "Yes, we serve clients across India with offices in Mumbai, Delhi, and Nagpur. We also provide virtual consultation services.",
  },
  {
    question: "What documents should I bring for consultation?",
    answer:
      "Depending on your requirement, we'll guide you on specific documents. Generally, bring relevant financial statements, tax records, and incorporation documents.",
  },
];
// contact page contetn end
//services page contetn start
export const categories = [
  { id: "all", name: "All Services" },
  { id: "audit", name: "Audit & Assurance" },
  { id: "tax", name: "Taxation" },
  { id: "advisory", name: "Advisory" },
  { id: "compliance", name: "Compliance" },
];

export const servicesS = [
  {
    id: 1,
    category: "audit",
    title: "Statutory Audit",
    shortDesc:
      "Comprehensive statutory audits as per Companies Act and regulatory requirements",
    features: [
      "Financial statement audit",
      "Internal control evaluation",
      "Risk assessment procedures",
      "Compliance verification",
      "Audit report preparation",
    ],
    benefits: [
      "Enhanced credibility with stakeholders",
      "Regulatory compliance assurance",
      "Fraud detection and prevention",
      "Improved financial transparency",
    ],
  },
  {
    id: 2,
    category: "audit",
    title: "Internal Audit",
    shortDesc:
      "Independent evaluation of your organization's internal controls and processes",
    features: [
      "Control system review",
      "Operational efficiency analysis",
      "Risk management assessment",
      "Process improvement recommendations",
      "Continuous monitoring",
    ],
    benefits: [
      "Strengthened internal controls",
      "Operational efficiency improvement",
      "Cost reduction opportunities",
      "Enhanced governance",
    ],
  },
  {
    id: 3,
    category: "audit",
    title: "Bank Audit",
    shortDesc:
      "Specialized banking sector audits for various financial institutions",
    features: [
      "Branch audits",
      "Revenue audit",
      "Stock audit",
      "Concurrent audit",
      "Credit audit",
    ],
    benefits: [
      "Regulatory compliance",
      "Asset quality improvement",
      "Risk mitigation",
      "Enhanced customer confidence",
    ],
  },
  {
    id: 4,
    category: "audit",
    title: "Forensic Audit",
    shortDesc:
      "Investigation and detection of financial fraud and irregularities",
    features: [
      "Fraud investigation",
      "Financial statement analysis",
      "Asset misappropriation detection",
      "Litigation support",
      "Expert witness services",
    ],
    benefits: [
      "Fraud prevention and detection",
      "Legal evidence documentation",
      "Recovery assistance",
      "Risk mitigation",
    ],
  },
  {
    id: 5,
    category: "tax",
    title: "GST Services",
    shortDesc: "Complete GST compliance, filing, and advisory services",
    features: [
      "GST registration",
      "Monthly/Quarterly returns",
      "Input tax credit reconciliation",
      "GST audit and assessment",
      "Refund applications",
    ],
    benefits: [
      "Timely compliance",
      "Maximum ITC utilization",
      "Penalty avoidance",
      "Optimized tax liability",
    ],
  },
  {
    id: 6,
    category: "tax",
    title: "Income Tax Services",
    shortDesc: "Comprehensive income tax planning, filing, and representation",
    features: [
      "Tax planning and advisory",
      "Return preparation and filing",
      "Assessment proceedings",
      "Appeal representation",
      "Tax dispute resolution",
    ],
    benefits: [
      "Tax optimization",
      "Regulatory compliance",
      "Reduced tax liability",
      "Professional representation",
    ],
  },
  {
    id: 7,
    category: "tax",
    title: "TDS Compliance",
    shortDesc: "End-to-end TDS management and compliance services",
    features: [
      "TDS calculation and deduction",
      "Quarterly return filing",
      "TDS reconciliation",
      "Form 16/16A issuance",
      "TDS demand notices",
    ],
    benefits: [
      "Error-free compliance",
      "Penalty avoidance",
      "Systematic documentation",
      "Timely filings",
    ],
  },
  {
    id: 8,
    category: "tax",
    title: "International Taxation",
    shortDesc: "Cross-border taxation and transfer pricing services",
    features: [
      "Transfer pricing studies",
      "DTAA advisory",
      "Foreign tax credit",
      "FEMA compliance",
      "NRI taxation",
    ],
    benefits: [
      "Global tax optimization",
      "Compliance with international laws",
      "Tax treaty benefits",
      "Risk mitigation",
    ],
  },
  {
    id: 9,
    category: "advisory",
    title: "Corporate Finance",
    shortDesc: "Strategic financial planning and project funding solutions",
    features: [
      "Project finance advisory",
      "Working capital management",
      "Debt syndication",
      "Equity funding",
      "Financial modeling",
    ],
    benefits: [
      "Optimal capital structure",
      "Funding accessibility",
      "Financial stability",
      "Growth enablement",
    ],
  },
  {
    id: 10,
    category: "advisory",
    title: "Business Valuation",
    shortDesc: "Professional valuation services for various business purposes",
    features: [
      "Fair value determination",
      "DCF valuation",
      "Comparable company analysis",
      "Asset-based valuation",
      "Valuation reports",
    ],
    benefits: [
      "Informed decision making",
      "Transaction support",
      "Dispute resolution",
      "Regulatory compliance",
    ],
  },
  {
    id: 11,
    category: "advisory",
    title: "Mergers & Acquisitions",
    shortDesc: "Strategic M&A advisory and transaction support services",
    features: [
      "Target identification",
      "Due diligence",
      "Deal structuring",
      "Negotiation support",
      "Post-merger integration",
    ],
    benefits: [
      "Successful transactions",
      "Risk mitigation",
      "Value maximization",
      "Smooth integration",
    ],
  },
  {
    id: 12,
    category: "advisory",
    title: "Management Consulting",
    shortDesc: "Strategic business consulting for operational excellence",
    features: [
      "Business strategy development",
      "Process optimization",
      "Performance improvement",
      "Change management",
      "MIS development",
    ],
    benefits: [
      "Improved efficiency",
      "Cost optimization",
      "Strategic clarity",
      "Competitive advantage",
    ],
  },
  {
    id: 13,
    category: "compliance",
    title: "Company Law Compliance",
    shortDesc: "Complete company law and secretarial compliance services",
    features: [
      "Company incorporation",
      "ROC filings",
      "Board meeting compliance",
      "AGM/EGM support",
      "Secretarial audit",
    ],
    benefits: [
      "Legal compliance",
      "Penalty avoidance",
      "Good corporate governance",
      "Stakeholder confidence",
    ],
  },
  {
    id: 14,
    category: "compliance",
    title: "FEMA & RBI Compliance",
    shortDesc: "Foreign exchange and RBI regulatory compliance services",
    features: [
      "FEMA advisory",
      "ODI/FDI compliance",
      "ECB advisory",
      "FEMA reporting",
      "RBI liaison",
    ],
    benefits: [
      "Regulatory compliance",
      "Smooth foreign transactions",
      "Risk mitigation",
      "Expert guidance",
    ],
  },
  {
    id: 15,
    category: "compliance",
    title: "PF/ESIC & Labor Law",
    shortDesc: "Comprehensive labor law compliance and payroll services",
    features: [
      "PF/ESIC registration",
      "Monthly compliance",
      "Labor law advisory",
      "Payroll processing",
      "Employee benefits management",
    ],
    benefits: [
      "Legal compliance",
      "Employee satisfaction",
      "Penalty avoidance",
      "Systematic processes",
    ],
  },
  {
    id: 16,
    category: "advisory",
    title: "Startup Advisory",
    shortDesc: "End-to-end support for startups and new ventures",
    features: [
      "Business plan preparation",
      "Entity structuring",
      "Funding assistance",
      "Compliance roadmap",
      "Mentorship support",
    ],
    benefits: [
      "Strong foundation",
      "Funding readiness",
      "Compliance framework",
      "Strategic guidance",
    ],
  },
];
export const specializedServices = [
  {
    title: "Insolvency & Bankruptcy (IBC 2016)",
    description:
      "Expert advisory on insolvency resolution and bankruptcy proceedings",
  },
  {
    title: "ERP & System Audit",
    description: "Technology audit and ERP implementation support services",
  },
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies",
  },
  {
    title: "Portfolio Advisory",
    description: "Investment portfolio management and advisory services",
  },
];
//services page contetn end

// about page contetn start
export const timeline = [
  {
    year: "2005",
    title: "Foundation",
    description:
      "Founded by CA Prashant Mittal as Prashant Mittal and Associates in Mumbai",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    year: "2010",
    title: "First Expansion",
    description:
      "Expanded services to include corporate restructuring and FEMA advisory",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    year: "2015",
    title: "Multi-City Presence",
    description:
      "Opened branch offices in Delhi and Nagpur to serve clients nationwide",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Adopted technology-driven processes and cloud-based services",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    year: "2023",
    title: "Rebranding",
    description:
      "Rebranded to S M A R T S & Co. LLP, achieved ISO certification",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    year: "2026",
    title: "Excellence Continues",
    description:
      "Serving 500+ clients with 20+ years of expertise and excellence",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export const coreValuesA = [
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our professional dealings",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    color: "from-primary-400 to-primary-600",
  },
  {
    title: "Professionalism",
    description:
      "Delivering expert services with precision and commitment to excellence",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "from-primary-400 to-primary-600",
  },
  {
    title: "Confidentiality",
    description: "Your sensitive information is protected with utmost security",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    color: "from-primary-400 to-primary-600",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your success is our priority—we tailor solutions to your unique needs",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    color: "from-primary-400 to-primary-600",
  },
  {
    title: "Teamwork",
    description:
      "Collaborative approach ensures comprehensive and quality service delivery",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      </svg>
    ),
    color: "from-primary-400 to-primary-600",
  },
  {
    title: "Continuous Learning",
    description:
      "We stay updated with latest regulations and industry best practices",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    color: "from-primary-400 to-primary-600",
  },
];
export const achievements = [
  {
    number: "500+",
    label: "Satisfied Clients",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "1000+",
    label: "Projects Delivered",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    number: "20+",
    label: "Years of Excellence",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    number: "4",
    label: "Office Locations",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    number: "6",
    label: "Expert Partners",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    number: "50+",
    label: "Team Members",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];
export const whyChoose = [
  {
    title: "Decades of Experience",
    description: "20+ years of proven track record across diverse industries",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Partner-Level Attention",
    description: "Direct access to senior partners for personalized service",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "ISO certified with rigorous quality control processes",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Multi-Location Presence",
    description: "Offices in Mumbai, Delhi, and Nagpur for nationwide coverage",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Technology Driven",
    description: "Modern tools and cloud-based systems for efficient delivery",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Client Retention",
    description: "95% client retention rate through consistent excellence",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];
export const partnersAbout = [
  {
    name: "CA. Tilkesh Shah",
    designation: "FCA",
    expertise: "Taxation, Project Finance & Audit Services",
    experience: "8+ Years",
    specialization: [
      "Direct & Indirect Taxation",
      "GST Compliance & Advisory",
      "Project Finance",
      "Funding Advisory",
      "Implementation Strategies",
    ],
    image: part_6,
  },
  {
    name: "CA. Nishant Agarwal",
    designation: "FCA, DISA",
    expertise: "Financing, Project Funding & SME Advisory",
    experience: "12+ Years",
    specialization: [
      "Project Funding Assessment",
      "Internal Control Systems",
      "System & Information Audit",
      "SME Advisory",
      "Government & Banking Sector Exposure",
    ],
    image: part_4,
  },
  {
    name: "CA. Nikhil Rathi",
    designation: "ACA",
    expertise: "Government, Bank & Cooperative Audits",
    experience: "4+ Years",
    specialization: [
      "Government Audits",
      "Bank & Cooperative Audits",
      "MSME Finance",
      "Project Funding",
      "Subsidy Advisory",
      "IBC Assignments",
    ],
    image: part_3,
  },
  {
    name: "CA. Manoj Sharma",
    designation: "FCA",
    expertise: "Audit, Assurance & Regulatory Compliance",
    experience: "7+ Years",
    specialization: [
      "Statutory & Internal Audit",
      "System Audit",
      "Direct & Indirect Taxation",
      "Regulatory Compliance",
      "Appellate Representations",
      "Service & Infrastructure Sectors",
    ],
    image: part_2,
  },
  {
    name: "CA. Manoj Bansal",
    designation: "FCA",
    expertise: "Statutory Audit, GST & Tax Audits",
    experience: "12+ Years",
    specialization: [
      "Statutory & Internal Audits",
      "GST Compliance",
      "Tax Audits",
      "Consolidated Financial Statements",
      "Construction & Hospitality Sector",
      "Capital Markets & MSMEs",
    ],
    image: part_1,
  },
  {
    name: "CA. Sheetal Shaikh",
    designation: "ACA",
    expertise: "Audit, Compliance & Corporate Secretarial Services",
    experience: "8+ Years",
    specialization: [
      "Audit & Assurance",
      "Corporate Compliance",
      "Secretarial Services",
      "Banking & IT Sector",
      "Infrastructure & Export Sector",
      "Service Industry",
    ],
    image: part_5,
  },
];

export const credentials = [
  { label: "ICAI Registration", value: "FRN 126763W" },
  { label: "PAN Number", value: "ABGFP5145E" },
  { label: "GST Number", value: "27ABGFP5145E1Z9" },
  { label: "ISO Certification", value: "Certified & Peer Reviewed" },
];

//about page contetn end
