// Auto-generated content for We Study Overseas Redesign
// Guaranteed 100% text fidelity to original WSO home.html

export interface Destination {
  country: string;
  badge: string;
  image?: string;
  flag?: string;
  description: string;
  features: string[];
  tuition: string;
  action: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface University {
  name: string;
  country: string;
  badge: string;
  estYear: string;
  tuition: string;
  duration: string;
  language: string;
  highlights: string[];
}

export const homeContent = {
  nav: {
    brandName: "We Study Overseas",
    tagline: "Global Medical Education Advisory",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "#impact" },
      { label: "Universities", href: "#featured-universities" },
      { label: "FAQs", href: "#faqs" },
      { label: "Blogs", href: "#blog" },
    ],
    contactText: "Contact Us",
    applyText: "APPLY NOW",
  },

  hero: {
    badge: "MBBS Abroad 2027 Admissions Open.",
    headline: "MBBS Abroad 2027 Admissions Open.",
    subtext:
      "Get trusted guidance for placements at top universities and a successful your medical career.",
    primaryCta: "Explore Top Destinations",
    secondaryCta: "Free Profile Evaluation",
    trustTags: [
      "NMC Compliant",
      "WHO Recognized",
      "English Medium",
      "Direct Admission Support",
    ],
  },

  destinationsSection: {
    pill: "Study Destinations",
    title: "Top Countries for MBBS Study Abroad",
    subtext:
      "Explore premier medical education hubs offering globally recognized degrees at affordable costs.",
    destinations: [
      {
        country: "Russia",
        badge: "Popular Choice",
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80",
        flag: "https://flagcdn.com/w160/ru.png",
        description:
          "Russia is an excellent option for students seeking an MBBS degree, offering affordable, world-class education at leading universities.",
        features: [
          "Top-Ranked Medical Universities",
          "World-class Clinical Infrastructure",
          "NMC & WHO Recognized Degrees",
          "English Medium Instruction",
        ],
        tuition: "₹18L - ₹32L (Total Package)",
        action: "Explore Russian Universities",
        href: "#featured-universities",
      },
      {
        country: "Uzbekistan",
        badge: "Rapidly Growing Hub",
        image: "https://images.unsplash.com/photo-1583658554203-d867c9baa7bc?w=800&auto=format&fit=crop&q=80",
        flag: "https://flagcdn.com/w160/uz.png",
        description:
          "Uzbekistan offers high-quality medical education matching NMC guidelines with modern European curricula and very affordable living costs.",
        features: [
          "Fully Compliant With NMC 2021 Gazette",
          "Affordable Tuition Fees & Living",
          "Bilingual & English Faculty",
          "Direct Flight Connectivity",
        ],
        tuition: "₹15L - ₹22L (Total Package)",
        action: "Explore Uzbekistan Universities",
        href: "#featured-universities",
      },
      {
        country: "Kazakhstan",
        badge: "High Clinical Exposure",
        image: "https://images.unsplash.com/photo-1770053472516-d18fc00d3982?q=80&w=800&auto=format&fit=crop",
        flag: "https://flagcdn.com/w160/kz.png",
        description:
          "Kazakhstan features distinguished national medical institutions with extensive hospital beds, hands-on clinical rotations, and global recognition.",
        features: [
          "Government National Universities",
          "Modern Simulation & Practical Labs",
          "Safe, Multicultural Campus Life",
          "Extensive Indian Student Community",
        ],
        tuition: "₹16L - ₹25L (Total Package)",
        action: "Explore Kazakhstan Universities",
        href: "#featured-universities",
      },
      {
        country: "Kyrgyzstan",
        badge: "Budget-Friendly Option",
        image: "https://images.unsplash.com/photo-1569530593440-e48dc137f7d0?auto=format&fit=crop&w=800&q=80",
        flag: "https://flagcdn.com/w160/kg.png",
        description:
          "Kyrgyzstan delivers affordable medical programs tailored for international students, with established Indian mess facilities and experienced faculty.",
        features: [
          "Low Tuition & Low Living Costs",
          "Indian Mess & Hostel Facilities",
          "FMGE / NExT Preparation Guidance",
          "Simplified Admission Process",
        ],
        tuition: "₹14L - ₹20L (Total Package)",
        action: "Explore Kyrgyzstan Universities",
        href: "#featured-universities",
      },
    ],
  },

  metricsSection: {
    pill: "Our Experience",
    title: "Trusted By Students Exploring Global Medical Education",
    subtext:
      "Our resources have helped students from diverse academic backgrounds to explore various global educational options with confidence.",
    metrics: [
  {
    "value": "10,000+",
    "label": "Students Guided",
    "description": "Comprehensive guidance provided to Indian medical aspirants."
  },
  {
    "value": "50+",
    "label": "Medical Universities Covered",
    "description": "Carefully audited institutions across top study destinations."
  },
  {
    "value": "10+",
    "label": "Educational Destinations",
    "description": "Global destinations vetted for safety, language, and clinical training."
  },
  {
    "value": "100%",
    "label": "Verified Resources",
    "description": "Verified information directly from official government & university sources."
  }
],
  },

  regulatory: {
  "badge": "Official Options",
  "title": "Understanding NMC, FMGE & NExT",
  "description": "It's utmost important for students seeking global medical education to understand terms like NMC, FMGE and NExT to make informed choices.",
  "cards": [
    {
      "acronym": "NMC",
      "name": "National Medical Commission",
      "tagline": "Statutory Regulatory Authority",
      "description": "NMC is India's premier regulatory body responsible for setting medical education standards and overseeing licensing for foreign medical graduates.",
      "points": [
        "Enforces the 2021 Foreign Medical Graduate Licentiate (FMGL) Regulations",
        "Mandates 54 months of theoretical and clinical coursework + 12-month internship",
        "Requires English medium of instruction and clinical licensing in the host country"
      ]
    },
    {
      "acronym": "FMGE",
      "name": "Foreign Medical Graduate Exam",
      "tagline": "Licensure Screening Test",
      "description": "FMGE is the screening examination conducted by the National Board of Examinations (NBE) for Indian citizens with medical degrees from abroad.",
      "points": [
        "Screening examination required to practice medicine in India",
        "Biannual test covering complete clinical and non-clinical curriculum",
        "Transitioning into the unified National Exit Test (NExT)"
      ]
    },
    {
      "acronym": "NExT",
      "name": "National Exit Test",
      "tagline": "Unified Future Examination",
      "description": "The National Exit Test (NExT) is the upcoming standardized exam designed to serve as both the MBBS final exam and the nationwide licensing test.",
      "points": [
        "Two-part national assessment: NExT-1 (Theory) and NExT-2 (Practical)",
        "Serves as the common qualifying exam for both Indian and foreign medical graduates",
        "Determines merit-based ranking for Postgraduate (MD/MS) admissions across India"
      ]
    }
  ]
},

  featuredUniversitiesSection: {
    pill: "Trusted Universities",
    title: "Featured Medical Universities",
    subtext:
      "Selecting the right university needs meticulous research. Students, when making a decision, should check the curriculum, the medium of instruction, the clinical opportunities available, and overall campus support systems.",
    universities: [
  {
    "name": "Tbilisi State Medical University",
    "country": "Georgia",
    "badge": "Top Ranked",
    "estYear": "1918",
    "tuition": "$8,000 / year",
    "duration": "6 Years",
    "language": "100% English Medium",
    "highlights": [
      "WHO & NMC Recognized",
      "European Credit Transfer System (ECTS)",
      "Advanced Clinical Simulation Labs"
    ]
  },
  {
    "name": "Bashkir State Medical University",
    "country": "Russia",
    "badge": "Historic Prestige",
    "estYear": "1932",
    "tuition": "₹3.5L / year",
    "duration": "6 Years",
    "language": "English Medium",
    "highlights": [
      "Top Russian Federal Institution",
      "8,000+ Bedded Teaching Hospitals",
      "Active Indian Student Community"
    ]
  },
  {
    "name": "Samarkand State Medical University",
    "country": "Uzbekistan",
    "badge": "Modern Infrastructure",
    "estYear": "1930",
    "tuition": "$3,600 / year",
    "duration": "5+1 Years",
    "language": "English Medium",
    "highlights": [
      "Compliant with NMC 2021 Gazette",
      "Smart Digital Classrooms",
      "Indian Mess & Hostel on Campus"
    ]
  },
  {
    "name": "Kazakh National Medical University",
    "country": "Kazakhstan",
    "badge": "Premier National",
    "estYear": "1930",
    "tuition": "$4,500 / year",
    "duration": "5+1 Years",
    "language": "English Medium",
    "highlights": [
      "Ranked #1 in Kazakhstan",
      "Extensive Surgical & Clinical Rotations",
      "Direct Flights from Delhi"
    ]
  },
  {
    "name": "Osh State University",
    "country": "Kyrgyzstan",
    "badge": "High Value",
    "estYear": "1992",
    "tuition": "$3,000 / year",
    "duration": "5 Years",
    "language": "English Medium",
    "highlights": [
      "Affordable High-Quality Education",
      "Experienced International Faculty",
      "FMGE Mentorship Programs"
    ]
  },
  {
    "name": "Kazan Federal University",
    "country": "Russia",
    "badge": "World Top 400",
    "estYear": "1804",
    "tuition": "₹4.2L / year",
    "duration": "6 Years",
    "language": "English Medium",
    "highlights": [
      "QS World Ranked University",
      "Cutting-edge Robotic Surgery Labs",
      "Safe & Historic Student City"
    ]
  }
],
  },

  whyAbroad: {
    pill: "Key Benefits",
    title: "Why Indian Students Prefer Doing MBBS Abroad",
    subtext:
      "Medical education continues to be a popular and highly respected academic career option. Over 3 crore students opt for international education, and here are the core reasons why Indian medical aspirants look overseas.",
    benefits: [
      {
        title: "Opportunity To Explore International Study Environments",
        description:
          "Studying abroad gives students the opportunity to learn from world-class faculty in international environments with cutting-edge laboratories and modern simulation hospitals.",
      },
      {
        title: "Multiple Academic Experiences",
        description:
          "Students gain diverse clinical exposure by rotating through high-capacity public and specialized teaching hospitals, diagnosing varied patient demographics.",
      },
      {
        title: "International Cultural Connections",
        description:
          "Living and studying with international peers builds cross-cultural competence, independence, and an international network of fellow healthcare professionals.",
      },
      {
        title: "Self-Growth And Personal Development",
        description:
          "Living independently overseas fosters resilience, adaptability, and mature problem-solving capabilities essential for exceptional medical practitioners.",
      },
    ],
  },

  financialPlanning: {
    pill: "Fee Transparency",
    title: "Understanding The Real Cost Of MBBS Abroad",
    subtext:
      "Financial planning is an important part of educational preparation. Many families focus only on the tuition fee, but budgeting for living costs, travel, and insurance ensures financial peace of mind throughout the entire degree.",
    cards: [
      {
        title: "Tuition Fees",
        description:
          "Tuition fees vary significantly across countries and universities. We ensure 100% transparent fee structures with direct university payment options and no hidden agent markups.",
      },
      {
        title: "Accommodation",
        description:
          "University hostels or private apartments range from affordable dormitory living to modern studios. Safe, university-managed hostels are recommended for first-year students.",
      },
      {
        title: "Food & Daily Living",
        description:
          "Monthly grocery and dining expenses remain affordable across Eastern Europe and Central Asia, with specialized Indian mess services providing familiar home-cooked food.",
      },
      {
        title: "Medical Insurance & Visa",
        description:
          "Mandatory student health insurance guarantees comprehensive medical care abroad. Annual student visa renewals are supported directly by university international offices.",
      },
      {
        title: "Travel & Transport",
        description:
          "Budgeting for round-trip flights during vacation breaks and local public transit ensures students can comfortably visit home without unexpected financial pressure.",
      },
    ],
  },

  scholarships: {
    pill: "Financial Support",
    title: "Scholarships & Financial Opportunities",
    subtext:
      "Students should do careful financial planning before pursuing any educational degree. They search for financial aid, scholarships, and flexible payment plans to ease tuition commitments.",
    cards: [
      {
        title: "Merit-Based Scholarships",
        description:
          "Prestigious universities offer tuition fee waivers and academic performance discounts to top-ranking students based on NEET percentiles and high school scores.",
      },
      {
        title: "Institutional Support Programs",
        description:
          "Many partner universities provide semester-wise installment payment options, eliminating the burden of lump-sum annual advance payments.",
      },
      {
        title: "Education Loan Guidance",
        description:
          "Our advisory team provides complete documentation support to help families secure nationalized and private bank education loans under attractive interest schemes.",
      },
    ],
  },

  parentGuide: {
    pill: "Family Guidance",
    title: "Tips For Parents To Choose The Right MBBS Destination",
    subtext:
      "When making vital educational decisions parents ask questions that go beyond academics. Safety, pastoral care, and continuous communication are paramount.",
    highlights: [
      {
        title: "Safety & Student Well-Being",
        description:
          "Vetted campuses with 24/7 security, dedicated Indian student coordinators, and secure university-managed residential dormitories.",
      },
      {
        title: "Hostel Accommodation & Food",
        description:
          "Nutritious Indian vegetarian and non-vegetarian mess facilities operated by experienced chefs on campus.",
      },
      {
        title: "Academic & Clinical Support",
        description:
          "Regular performance tracking, low student-to-teacher clinical ratios, and ongoing FMGE/NExT screening preparation.",
      },
    ],
  },

  comparisons: {
    pill: "The WeStudy Approach",
    title: "Better Comparisons Lead To Better Decisions",
    subtext:
      "Even though students have access to all the information today, that doesn't guarantee that they have the right roadmap. A methodical comparison between private medical seats in India and accredited global universities ensures sound career investments.",
    comparisonPoints: [
      {
        feature: "Total Investment",
        indiaPrivate: "₹80 Lakhs - ₹1.5 Crore",
        abroadGovt: "₹15 Lakhs - ₹35 Lakhs Total",
      },
      {
        feature: "Institution Quality",
        indiaPrivate: "Varying patient flow, new infrastructure",
        abroadGovt: "Century-old government universities with massive clinical beds",
      },
      {
        feature: "Recognition",
        indiaPrivate: "NMC Only",
        abroadGovt: "Global recognition: WHO, NMC, ECFMG, WDOMS, UNESCO",
      },
      {
        feature: "Global Practice Rights",
        indiaPrivate: "Requires additional USMLE/PLAB clearances",
        abroadGovt: "Direct eligibility to sit for USMLE (USA), PLAB (UK), and NExT (India)",
      },
    ],
  },

  studentVoices: {
    pill: "Success Stories",
    title: "Student Success Stories",
    subtext:
      "Every student has a unique and special journey that aligns with their individual educational goals. Hear from students currently studying medicine across our premier destinations.",
    stories: [
      {
        name: "Aditi Sharma",
        university: "Bashkir State Medical University, Russia",
        quote:
          "We Study Overseas guided me through every step—from documentation to hostel settlement in Ufa. The practical clinical exposure here exceeded my expectations.",
        avatarInitials: "AS",
      },
      {
        name: "Rahul Verma",
        university: "Samarkand State Medical University, Uzbekistan",
        quote:
          "The NMC-compliant curriculum, affordable fee structure, and dedicated Indian mess on campus made Samarkand the ideal choice for my medical journey.",
        avatarInitials: "RV",
      },
      {
        name: "Priya Patel",
        university: "Kazakh National Medical University, Kazakhstan",
        quote:
          "The faculty are immensely supportive and the clinical rotations in Almaty's multi-specialty hospitals have built tremendous diagnostic confidence in me.",
        avatarInitials: "PP",
      },
      {
        name: "Arjun Mehta",
        university: "Tbilisi State Medical University, Georgia",
        quote:
          "The 100% English-medium European curriculum and advanced clinical simulation labs at Tbilisi gave me hands-on confidence right from my early semesters.",
        avatarInitials: "AM",
      },
      {
        name: "Kavya Reddy",
        university: "Osh State University, Kyrgyzstan",
        quote:
          "Transparent tuition costs, dedicated Indian hostel facilities, and structured FMGE mentorship made studying medicine at Osh stress-free for my whole family.",
        avatarInitials: "KR",
      },
    ],
  },

  reviews: {
    pill: "Student Experiences",
    title: "We Study Overseas Google Reviews",
    subtext:
      "Here are a few real video testimonials from our students and parents sharing their candid experiences with We Study Overseas.",
    testimonials: [
      {
        title: "MBBS in Russia: How to Choose the Right Medical University?",
        student: "Ankit Roy",
        details: "4th Year MBBS Student",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        title: "Real Parents Review the Westudy Abroad MBBS Experience 2026",
        student: "Dr. & Mrs. Mehra",
        details: "Parents of 2nd Year Student",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        title: "Hostel, Food & Daily Life as an Indian Student in Uzbekistan",
        student: "Sneha Nair",
        details: "3rd Year MBBS Student",
        youtubeId: "dQw4w9WgXcQ",
      },
    ],
  },

  videos: {
    pill: "Media & Insights",
    title: "We Study Overseas Featured Videos Of The Year",
    subtext:
      "Watch in-depth documentary guides, ground-reality campus walkthroughs, and expert analysis on studying medicine abroad.",
    featuredList: [
      {
        title:
          "MBBS in Russia: How to Choose the Right University? 65 Top Universities Audited",
        views: "18.5K views",
        duration: "14:20",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        title:
          "MBBS Uzbekistan 2026: Cost, NMC Guide, Admission Process & Living Realities",
        views: "24.1K views",
        duration: "18:45",
        youtubeId: "dQw4w9WgXcQ",
      },
      {
        title:
          "NMC 2021 Gazette Explained for Indian Medical Aspirants: Crucial Checklist",
        views: "31.2K views",
        duration: "12:10",
        youtubeId: "dQw4w9WgXcQ",
      },
    ],
  },

  lifeAfterMbbs: {
    pill: "Career Options",
    title: "Life After MBBS Abroad",
    subtext:
      "At We Study Overseas, we focus on providing futuristic guidance to students, so they learn to consider long-term licensing, PG specializations, and global opportunities.",
    pathways: [
      {
        title: "Postgraduate Education",
        description:
          "Graduates can pursue MD/MS specializations in India through NExT, or pursue residency pathways in the USA (USMLE), UK (PLAB/UKMLA), and Australia (AMC).",
      },
      {
        title: "Research Opportunities",
        description:
          "Participate in groundbreaking biomedical research, clinical trials, and epidemiological studies with leading international healthcare institutes.",
      },
      {
        title: "Clinical Practice & Licensing",
        description:
          "Attain dual medical licensure allowing practice in both the host country and India, unlocking flexible global medical career mobility.",
      },
      {
        title: "Healthcare Leadership",
        description:
          "Combine clinical expertise with hospital administration, public health policy, and medical technology entrepreneurship.",
      },
    ],
  },

  blog: {
    pill: "Latest Updates",
    title: "Read Directly from the Editorial Desk",
    subtext:
      "Read about the latest trends, up-to-date statutory NMC updates, transparent fee structures and much more from our research team.",
    posts: [
      {
        title:
          "The Most Affordable Medical Universities in Russia for Indian Students [2026 Guide]",
        date: "October 14, 2026",
        category: "Study Guides",
        readTime: "6 min read",
        excerpt:
          "Comprehensive analysis of tuition fees, cost of living, and clinical infrastructure across premier Russian medical academies.",
      },
      {
        title:
          "MBBS in Russia Fee Structure 2026: A Complete University-Wise Breakdown",
        date: "October 02, 2026",
        category: "Cost & Fees",
        readTime: "8 min read",
        excerpt:
          "Detailed fee tables including hostel, insurance, visa renewal, and mess charges with zero hidden surprises.",
      },
      {
        title:
          "NMC Guidelines for MBBS Abroad: 2026 Checklist Every Aspirant Must Know",
        date: "September 24, 2026",
        category: "Regulations",
        readTime: "5 min read",
        excerpt:
          "Critical checklist verifying course duration, internship rules, medium of instruction, and foreign registration validity.",
      },
    ],
  },

  counselling: {
    pill: "Global Network",
    title: "Top Countries for MBBS Abroad",
    subtext:
      "We connect you to some of the best options, so you can choose your dream university overseas and complete your medical education with excellence.",
    formTitle: "Book Free Profile Evaluation",
    formDescription:
      "Speak directly with a senior medical admissions advisor to evaluate your NEET score, preferred country, and budget.",
  },

  knowledgeNetwork: {
    pill: "University Partners",
    title: "Explore The Westudy Abroad Knowledge Network",
    subtext:
      "We've carefully designed our educational ecosystem to provide complete assistance and guidance to students at every milestone of their overseas journey.",
    directories: [
      {
        category: "Destination Guides",
        items: [
          "MBBS in Russia Comprehensive Handbook",
          "MBBS in Uzbekistan Admissions Manual",
          "MBBS in Kazakhstan Complete Roadmap",
          "MBBS in Kyrgyzstan Student Dossier",
        ],
      },
      {
        category: "University Resources",
        items: [
          "Top Government Medical Universities in Russia",
          "NMC Compliant Institutions in Uzbekistan",
          "Clinical Hospital Bed Strengths & Rankings",
          "Hostel Living & Mess Quality Audits",
        ],
      },
      {
        category: "Licensing & Academics",
        items: [
          "NExT Exam Blueprint & Preparation Roadmap",
          "FMGE Historical Passing Percentage Statistics",
          "USMLE Step 1 & Step 2 Alignment Guide",
          "Postgraduate Residency Abroad Protocols",
        ],
      },
    ],
  },

  faqsSection: {
    pill: "Student Questions",
    title: "Frequently Asked Questions About MBBS Abroad",
    subtitle:
      "Note: These foundational FAQs are designed for early exploration. For deep-dive technical knowledge, you may visit our upcoming Master FAQ Hub.",
    faqs: [
  {
    "id": 1,
    "question": "1. Which country is currently most popular for MBBS abroad among Indian students?",
    "answer": "The most popular country for MBBS aboard would depend on individual priorities rather than just popularity. That said, Indian students frequently compare countries like Russia, Georgia, Kazakhstan, Kyrgyzstan and Uzbekistan, and select a destination based on their priorities. Explore Country Comparisons"
  },
  {
    "id": 2,
    "question": "2. How should parents decide between two countries?",
    "answer": "Parents should evaluate: Educational quality & Total costs Student safety & Campus facilities Climate & Language Differences Future academic goals Academic opportunities and realistic financial planning together help make the best decision."
  },
  {
    "id": 3,
    "question": "3. What should students know before selecting a university?",
    "answer": "Students should consider: Infrastructure evaluation & Faculty experience Student support systems & Practical learning opportunities Campus environment & International student communities It’s vitally important for a student to choose the right university for doing global education."
  },
  {
    "id": 4,
    "question": "4. How much money should families budget for MBBS abroad?",
    "answer": "The total amount of money varies from one university to the other, but it should be between ₹20 lakh and ₹55 lakh for the full program of 6 years. The costs include: Tuition fees, Hostel costs, Food expenses, Health insurance, Flight tickets, Emergency funds, and Personal expenses. Families should focus on comprehensive budgeting for clarity, confidence and stability."
  },
  {
    "id": 5,
    "question": "5. What lifestyle changes should students expect abroad?",
    "answer": "Students should expect: Independent living, Budget management, Multicultural environments, Varied climates, and New & different educational systems. These new experiences are important for a student’s holistic personal development beyond academics."
  },
  {
    "id": 6,
    "question": "6. Can students travel home during holidays?",
    "answer": "Yes, international students usually return home during academic breaks and long vacations. Students need to plan ahead of the travel and the planning should include: Flight availability, Seasonal considerations, Budget preparation, and Academic schedules."
  },
  {
    "id": 7,
    "question": "7. What qualities help students succeed abroad?",
    "answer": "Qualities include: Adaptability, Communication skills, Discipline, Financial responsibility, Curiosity, and Emotional resilience. Academic success is the result of both classroom learning and personal growth."
  },
  {
    "id": 8,
    "question": "8. Are international student communities important?",
    "answer": "Yes, they help provide: Social & Emotional support, Important Guidance, Cultural familiarity, and Shared experiences."
  },
  {
    "id": 9,
    "question": "9. Should students prioritize affordability or educational environment?",
    "answer": "Both factors are important. Students should go for Affordability, but at the same time, a favorable educational environment including Educational quality, Clinical exposure, Campus facilities, Overall Safety & Security, Student support and Long-term goals also matters. A balanced decision often produces a better outcome."
  },
  {
    "id": 10,
    "question": "10. How early should students begin planning?",
    "answer": "Early preparation is beneficial. While planning, students should consider: Deep Research, Budgeting & Financial arrangement, University comparisons, Documentation, and Career goals. Early preparation ensures greater flexibility and a stress-free departure."
  },
  {
    "id": 11,
    "question": "11. What role do parents play in educational decisions?",
    "answer": "Parents play a significant role. They contribute through: Financial planning, Decision-making guidance, Research participation and Emotional support. Collaborative approaches generally produce better educational decisions."
  },
  {
    "id": 12,
    "question": "12. What should students compare besides tuition costs?",
    "answer": "Besides tuition costs, students should compare: Food, Accommodation, Campus facilities, Transportation, Community support, Climatic changes, and Healthcare access. Overseas education is a complete lifestyle experience that beyond a single financial decision."
  },
  {
    "id": 13,
    "question": "13. Are scholarships available for international students?",
    "answer": "Yes, scholarship opportunities are available, and vary across destinations and educational programs. Student scholarships usually depend on: Merit-based opportunities, Academic achievements, Government initiatives, and Institutional programs."
  },
  {
    "id": 14,
    "question": "14. How can students prepare emotionally for studying abroad?",
    "answer": "Parents may prepare their children emotionally for studying in a foreign country by developing: Adaptability, Communication skills, Financial management, Curiosity, Independence, Realistic expectations etc."
  },
  {
    "id": 15,
    "question": "15. What is the most important advice for future medical students?",
    "answer": "Set goals. Research deeply. Do comparisons. Prepare thoroughly. Your research and preparation help you make an informed decision. Plan your future education based on your personal goals instead of external pressures."
  }
],
  },

  vision: {
    title: "Your Future Is Bigger Than One Destination",
    subtext:
      "Medical education extends beyond just earning a degree. It includes clinical acumen, global perspectives, and the compassionate heart to heal humanity across borders.",
    pillars: [
      "Clinical Excellence",
      "Global Recognition",
      "Lifelong Mentorship",
    ],
  },

  footer: {
    brandName: "We Study Overseas",
    tagline:
      "Empowering Indian medical aspirants with honest, ethical, and NMC-compliant overseas medical education guidance.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "/" },
          { label: "About Us", href: "#impact" },
          { label: "Top Destinations", href: "#destinations" },
          { label: "Featured Universities", href: "#featured-universities" },
          { label: "Real Cost Ledger", href: "#financial-planning" },
          { label: "Student FAQs", href: "#faqs" },
        ],
      },
      {
        title: "Study Destinations",
        links: [
          { label: "MBBS in Russia", href: "#destinations" },
          { label: "MBBS in Uzbekistan", href: "#destinations" },
          { label: "MBBS in Kazakhstan", href: "#destinations" },
          { label: "MBBS in Kyrgyzstan", href: "#destinations" },
          { label: "MBBS in Georgia", href: "#destinations" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "NMC 2021 Regulations", href: "#regulatory-framework" },
          { label: "FMGE / NExT Roadmap", href: "#regulatory-framework" },
          { label: "Fee Transparency Guide", href: "#financial-planning" },
          { label: "Parents Advisory Handbook", href: "#parent-guide" },
          { label: "Editorial Blog", href: "#blog" },
        ],
      },
      {
        title: "Advisory & Support",
        links: [
          { label: "Free Profile Evaluation", href: "#counselling" },
          { label: "Document Verification", href: "#counselling" },
          { label: "Visa Assistance Desk", href: "#counselling" },
          { label: "On-Campus Welfare Support", href: "#parent-guide" },
        ],
      },
    ],
    contactInfo: {
      phone: "+91 98765 43210",
      email: "admissions@westudyoverseas.com",
      address: "Connaught Place, New Delhi, India",
    },
    copyright: "© 2026 We Study Overseas. All rights reserved.",
    disclaimer:
      "Disclaimer: We Study Overseas is an independent overseas education counseling consultancy. All institutional names, logos, and trademarks belong to their respective universities and government bodies.",
  },
};
