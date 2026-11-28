export interface ContactChannel {
  id: string;
  title: string;
  value: string;
  actionText: string;
  href: string;
  description: string;
  badge: string;
  iconName: "Phone" | "Mail" | "MessageSquare" | "LifeBuoy";
}

export interface RegionalOffice {
  city: string;
  state: string;
  type: "Headquarters" | "Regional Hub" | "Overseas Desk";
  address: string;
  landmark: string;
  phone: string;
  hours: string;
  isHQ?: boolean;
}

export interface ContactFaq {
  question: string;
  answer: string;
  category: "General" | "Counseling" | "Documentation" | "Visits";
}

export interface ContactContent {
  hero: {
    pill: string;
    title: string;
    description: string;
    trustBadges: string[];
  };
  channels: {
    pill: string;
    title: string;
    subtitle: string;
    list: ContactChannel[];
  };
  offices: {
    pill: string;
    title: string;
    subtitle: string;
    list: RegionalOffice[];
  };
  terminal: {
    pill: string;
    title: string;
    subtitle: string;
    reassurancePoints: {
      title: string;
      desc: string;
    }[];
    destinations: string[];
    neetStatusOptions: string[];
    modes: string[];
    budgetOptions: string[];
  };
  faqs: {
    pill: string;
    title: string;
    subtitle: string;
    list: ContactFaq[];
  };
}

export const contactContent: ContactContent = {
  hero: {
    pill: "DIRECT MEDICAL ADVISORY DESK",
    title: "Connect with Our Senior MBBS Abroad Advisors",
    description:
      "Whether you need comprehensive NEET qualification analysis, university fee breakdowns, NMC 2021 Gazette compliance checks, or direct application support, our medical advisory team is here to guide your journey.",
    trustBadges: [
      "100% Free Consultation",
      "Zero Hidden Fees",
      "NMC 2021 Compliant",
      "MOE & WHO Partner Support",
    ],
  },
  channels: {
    pill: "COMMUNICATION CHANNELS",
    title: "Direct Ways to Reach Us",
    subtitle:
      "Choose the communication channel that suits you best. Our team guarantees a response within 2 hours during working hours.",
    list: [
      {
        id: "phone",
        title: "Direct Phone Helpline",
        value: "+91 98765 43210",
        actionText: "Call Now",
        href: "tel:+919876543210",
        description:
          "Speak directly with a senior education counselor for instant university fee audits and NEET score analysis.",
        badge: "Instant Response",
        iconName: "Phone",
      },
      {
        id: "whatsapp",
        title: "Official WhatsApp Desk",
        value: "+91 98765 43210",
        actionText: "Chat on WhatsApp",
        href: "https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20MBBS%20Abroad%20counseling",
        description:
          "Get fee breakdown PDFs, authentic hostel photos, and curriculum brochures delivered directly to your chat.",
        badge: "Quick Brochure",
        iconName: "MessageSquare",
      },
      {
        id: "email",
        title: "Admissions & Documents",
        value: "admissions@westudyoverseas.com",
        actionText: "Send Email",
        href: "mailto:admissions@westudyoverseas.com",
        description:
          "Submit academic marksheets, NEET qualification scores, and passport copies for official eligibility evaluation.",
        badge: "2-Hour Response",
        iconName: "Mail",
      },
      {
        id: "emergency",
        title: "Parent & Student Welfare",
        value: "support@westudyoverseas.com",
        actionText: "Contact Welfare Desk",
        href: "mailto:support@westudyoverseas.com",
        description:
          "Dedicated assistance channel for enrolled students overseas, parent queries, hostel accommodations, and visas.",
        badge: "Priority Queue",
        iconName: "LifeBuoy",
      },
    ],
  },
  offices: {
    pill: "OFFICE NETWORK",
    title: "Visit Our Counseling Center",
    subtitle:
      "Drop in for a personalized, face-to-face consultation with our senior medical advisors.",
    list: [
      {
        city: "Bhubaneswar (Headquarters)",
        state: "Odisha",
        type: "Headquarters",
        address: "Saheed Nagar, Janpath Road, Bhubaneswar, Odisha 751007",
        landmark: "Near Master Canteen Square & Bhubaneswar Railway Station",
        phone: "+91 98765 43210",
        hours: "Mon – Sat: 10:00 AM – 7:00 PM IST",
        isHQ: true,
      },
    ],
  },
  terminal: {
    pill: "SCHEDULE ADVISORY",
    title: "Book a Free 1-on-1 Profile Evaluation",
    subtitle:
      "Receive a personalized institutional recommendation, university cost comparison, and an authentic NMC compliance roadmap tailored to your NEET score and budget.",
    reassurancePoints: [
      {
        title: "1-on-1 NEET Score & Budget Mapping",
        desc: "We match your NEET score and maximum 6-year budget to officially recognized government medical colleges.",
      },
      {
        title: "100% NMC 2021 Gazette Compliance Check",
        desc: "Every institution suggested strictly fulfills the 54-month English-medium coursework and 12-month internship rules.",
      },
      {
        title: "Zero Hidden Charges Policy",
        desc: "Complete transparency with verified university tuition fees, hostel rent, Indian mess costs, and visa processing fees.",
      },
      {
        title: "Official Document Checklist Included",
        desc: "Receive an immediate checklist covering passport requirements, 10+2 marksheet apostille, and medical clearances.",
      },
    ],
    destinations: [
      "Russia (Top Govt Universities)",
      "China (45 MOE Universities)",
      "Uzbekistan (English Medium)",
      "Kazakhstan (NMC Compliant)",
      "Georgia (European Curriculum)",
      "Kyrgyzstan (Affordable Govt)",
      "Need Advisor Recommendation",
    ],
    neetStatusOptions: [
      "Qualified (NEET 2026/2025)",
      "Appearing in Upcoming NEET",
      "Seeking Guidance on Eligibility",
    ],
    modes: [
      "Video Call (Google Meet)",
      "Phone Call Consultation",
      "In-Person Visit (Bhubaneswar HQ)",
    ],
    budgetOptions: [
      "₹18L – ₹25L All-Inclusive",
      "₹25L – ₹35L All-Inclusive",
      "₹35L – ₹50L All-Inclusive",
      "Flexible / Need Comparison",
    ],
  },
  faqs: {
    pill: "FREQUENT QUESTIONS",
    title: "Counseling & Visit Inquiries",
    subtitle:
      "Everything students and parents need to know before booking an advisory session with We Study Overseas.",
    list: [
      {
        question: "Is the initial MBBS abroad consultation completely free?",
        answer:
          "Yes, 100%. We Study Overseas never charges any fee for the initial profile evaluation, eligibility check, or university shortlisting consultation. You will receive an authentic, impartial breakdown of your options without any financial obligation.",
        category: "Counseling",
      },
      {
        question: "Can parents join the consultation session virtually?",
        answer:
          "Absolutely. In fact, we strongly encourage parents to be present during both online video consultations and in-person office visits. We address all parental queries regarding safety, living costs, Indian mess facilities, hostel security, and NMC legal validity.",
        category: "Counseling",
      },
      {
        question: "What documents should I bring or have ready for the counseling session?",
        answer:
          "For an initial evaluation, please keep your 10th and 12th standard marksheets (or predicted scores), NEET scorecard (if already appeared), and valid passport copy ready. If you don't have a passport yet, our team will guide you on the fast-track application process.",
        category: "Documentation",
      },
      {
        question: "How soon will a counselor contact me after submitting the contact form?",
        answer:
          "During regular working hours (Monday to Saturday, 10:00 AM – 7:00 PM IST), our senior medical counselors reach out within 30 to 90 minutes. Inquiries submitted overnight or on Sundays are prioritized on the immediate next working morning.",
        category: "General",
      },
      {
        question: "Do you assist with educational bank loans and financial documentation?",
        answer:
          "Yes. Our specialized loan advisory desk provides university-stamped cost estimate letters and full documentation support to facilitate education loans through major nationalized and private Indian banks (SBI, PNB, Bank of Baroda, HDFC, and Axis Bank).",
        category: "Documentation",
      },
      {
        question: "Can I visit your Bhubaneswar office in person without a prior appointment?",
        answer:
          "Walk-ins are always welcome at our Bhubaneswar headquarters in Odisha. However, booking an appointment in advance guarantees that a senior counselor specializing in your preferred destination country is exclusively reserved for you.",
        category: "Visits",
      },
    ],
  },
};
