export const siteConfig = {
  name: "Good Works Disability Services",
  shortName: "Good Works",
  domain: "goodworksdisabilityservices.com.au",
  phone: "04 3316 5178",
  phoneHref: "tel:0433165178",
  email: "admin@goodworksdisabilityservices.com.au",
  // address: "Suite 4, 120 Dandenong Road, Melbourne VIC 3000",
  hours: "Mon–Fri 9:00am – 5:00pm",
  tagline: "Registered NDIS provider · Melbourne wide",
  footerTagline:
    "A registered NDIS provider delivering warm, person-centred disability support across Melbourne — sunrise to sunrise.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "NDIS Information", href: "/ndis-information" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
];

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "daily-living",
    title: "Daily Living",
    tagline: "Assistance with self-care and everyday routines",
    description:
      "Personalised, respectful support with the everyday tasks that keep life moving — from morning routines and personal care to meals, medication prompts and getting out the door on time.",
    bullets: [
      "Personal care, hygiene and dressing support",
      "Meal planning, preparation and healthy eating",
      "Medication prompting and health appointments",
      "Overnight and sleepover support options",
      "Skill-building for greater independence",
    ],
  },
  {
    slug: "community-participation",
    title: "Community Participation",
    tagline: "Connect, belong and enjoy life outside the home",
    description:
      "We help participants build confidence in the community — joining clubs, attending events, learning new skills and forming friendships that last well beyond a shift.",
    bullets: [
      "Social outings, sport, art and hobby groups",
      "Transport to and from activities",
      "Support to volunteer, study or attend work",
      "1:1 and small group community access",
      "Confidence and social skill development",
    ],
  },
  {
    slug: "household-tasks",
    title: "Household Tasks",
    tagline: "A clean, safe and comfortable home",
    description:
      "Practical help around the house so participants can focus on the things they enjoy, with support workers who do things with you rather than for you wherever possible.",
    bullets: [
      "Cleaning, laundry and general tidying",
      "Grocery shopping and errands",
      "Garden and outdoor maintenance support",
      "Home organisation and safety checks",
      "Building everyday household skills",
    ],
  },
  {
    slug: "support-coordination",
    title: "Support Coordination",
    tagline: "Make the most of every dollar in your plan",
    description:
      "Our coordinators translate the NDIS into plain language, connect you with quality providers and make sure your plan is working as hard as you are.",
    bullets: [
      "Understanding and implementing your NDIS plan",
      "Sourcing and comparing quality providers",
      "Crisis response and complex situation support",
      "Plan reviews and reporting to the NDIA",
      "Specialist Support Coordination available",
    ],
  },
  {
    slug: "sil",
    title: "Supported Independent Living (SIL)",
    tagline: "A home of your own, with support that fits",
    description:
      "Warm, well-matched shared and individual living arrangements with 24/7 support available, designed around routines, privacy and genuine housemate compatibility.",
    bullets: [
      "24/7 and active overnight support",
      "Vacancy matching and trial stays",
      "High physical support and SDA-linked homes",
      "Person-centred rosters of care",
      "Support to build household independence",
    ],
  },
  {
    slug: "nursing-complex-care",
    title: "Nursing & Complex Care",
    tagline: "Clinical expertise delivered at home",
    description:
      "Registered nurses and specially trained support workers deliver high-intensity supports safely at home, with clear clinical oversight and documented care plans.",
    bullets: [
      "Registered nurse assessments and care plans",
      "PEG feeding, catheter and stoma care",
      "Complex wound and continence management",
      "Epilepsy and diabetes management",
      "Hospital discharge and transition support",
    ],
  },
  {
    slug: "more-services",
    title: "More Services",
    tagline: "Short-term accommodation, transport and beyond",
    description:
      "From respite and STA to travel support and group programs, we round out our core offering with flexible services that adapt as needs change.",
    bullets: [
      "Short Term Accommodation (STA) and respite",
      "Medium Term Accommodation (MTA)",
      "Transport and travel training",
      "Group programs and holiday activities",
      "Assistance with life-stage transitions",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Our coordinator explained the plan in plain language and had supports running within a fortnight.",
    name: "Salma J.",
  },
  {
    quote:
      "The same two workers every week has made an enormous difference to Dad's confidence.",
    name: "Shaun C.",
  },
  {
    quote:
      "They genuinely care. Nothing is too much trouble and communication is excellent.",
    name: "Eliana Z.",
  },
];

export const whyUs = [
  {
    title: "Person-first, always",
    description:
      "Every plan starts with a conversation about the life you want, not a list of services we sell.",
  },
  {
    title: "Registered & rights-based",
    description:
      "Aligned with the NDIS Act, the Disability Act and the Charter of Human Rights.",
  },
  {
    title: "Carefully matched teams",
    description:
      "We match support workers on personality and interests, not just availability.",
  },
  {
    title: "Support around the clock",
    description:
      "On-call coordinators and 24/7 rosters for participants who need them.",
  },
];

export type AboutSection = {
  slug: string;
  title: string;
  tagline: string;
};

export const aboutSections: AboutSection[] = [
  {
    slug: "our-story",
    title: "Our Story",
    tagline: "How Good Works Disability Services came to be",
  },
  {
    slug: "mission",
    title: "Mission",
    tagline: "To provide the highest quality support and services that empower people living with a disability to lead a fulfilling and valued.",
  },
  {
    slug: "vision",
    title: "Vision",
    tagline: "To lead with love in action and truth, creating a caring community where respect, integrity, confidentiality, growth, safety, harmony, and passion inspire every life we touch.",
  },
  {
    slug: "our-values",
    title: "Our Values",
    tagline: "The five words that shape every shift",
  },
  {
    slug: "meet-our-team",
    title: "Meet Our Team",
    tagline: "The people behind your support",
  },
  {
    slug: "why-choose-us",
    title: "Why Choose Us",
    tagline: "The professionalism of a big provider, the warmth of a small team",
  },
];

export const ourValues = [
  {
    title: "Respect & Recognition",
    description:
      "We see the person before the plan — every participant's choices, culture and dignity are respected in every interaction.",
  },
  {
    title: "Determination",
    description:
      "We don't give up when things get hard. Our team works through challenges alongside participants and families until goals are met.",
  },
  {
    title: "Knowledge",
    description:
      "Ongoing training and clinical oversight mean our team brings genuine expertise to daily living, complex care and everything between.",
  },
  {
    title: "Community",
    description:
      "We help participants build real connections — with support workers, with services, and with the community around them.",
  },
  {
    title: "Professionalism",
    description:
      "Reliable, well-documented, accountable support — the structure of a big provider without losing the personal touch.",
  },
];

export const teamGroups = [
  {
    title: "Leadership Team",
    description:
      "Sets the direction, oversees quality and safeguarding, and makes sure every participant's plan is genuinely working for them.",
  },
  {
    title: "Support Coordinators",
    description:
      "Help participants understand and get the most from their NDIS plan, and connect them with the right providers.",
  },
  {
    title: "Support Workers",
    description:
      "The friendly, familiar faces delivering day-to-day support — matched on personality and interests, not just availability.",
  },
  {
    title: "Registered Nurses & Clinical Staff",
    description:
      "Provide clinical oversight and hands-on complex care, with documented care plans for every participant who needs them.",
  },
];

export const ndisSteps = [
  {
    number: "01",
    title: "Check eligibility",
    description:
      "Under 65, an Australian resident, and living with a permanent and significant disability.",
  },
  {
    number: "02",
    title: "Make an access request",
    description:
      "Call the NDIA on 1800 800 110 or ask us to help you gather the evidence you need.",
  },
  {
    number: "03",
    title: "Plan meeting",
    description:
      "Talk through your goals, current supports and daily life. We can attend with you.",
  },
  {
    number: "04",
    title: "Start your supports",
    description:
      "Once your plan is approved we can begin services, usually within two weeks.",
  },
];

export const ndisFaqs = [
  {
    question: "What are the three NDIS budget categories?",
    answer:
      "Core Supports (everyday assistance), Capacity Building (skills and independence) and Capital Supports (equipment and home modifications). Most of our services sit under Core and Capacity Building.",
  },
  {
    question: "What's the difference between self, plan and agency managed?",
    answer:
      "Self-managed means you pay providers directly. Plan-managed means a plan manager handles invoices. Agency-managed means the NDIA pays registered providers on your behalf. We work with all three.",
  },
  {
    question: "Do I need a registered provider?",
    answer:
      "If your plan is agency-managed, yes. Self and plan-managed participants can choose any provider — many still prefer a registered one for the extra quality and safeguarding requirements.",
  },
  {
    question: "Can I change providers?",
    answer:
      "Absolutely. You can change providers at any time, subject to the notice period in your service agreement. We'll help make the transition smooth.",
  },
  {
    question: "What happens at a plan review?",
    answer:
      "You and the NDIA review what worked, what didn't and what's next. Our coordinators prepare reports and evidence so your next plan reflects your real needs.",
  },
];

export const resourceDocuments = [
  {
    title: "Participant Handbook",
    description: "How we work, your rights and what to expect.",
  },
  {
    title: "Service Agreement Template",
    description: "Plain-language agreement used for all supports.",
  },
  {
    title: "Feedback & Complaints Form",
    description: "Tell us what's working and what isn't.",
  },
  {
    title: "Referral Form",
    description: "For coordinators, hospitals and families.",
  },
  {
    title: "Easy Read Service Guide",
    description: "Our services in Easy Read format.",
  },
  {
    title: "Incident Reporting Policy",
    description: "How incidents are recorded and escalated.",
  },
];

export const externalLinks = [
  { title: "NDIS Official Website", href: "https://www.ndis.gov.au/" },
  {
    title: "NDIS Quality & Safeguards Commission",
    href: "https://www.ndiscommission.gov.au/",
  },
  { title: "Carer Gateway", href: "https://www.carergateway.gov.au/" },
  { title: "Services Australia", href: "https://www.servicesaustralia.gov.au/" },
];

export const careerOpenings = [
  {
    title: "Disability Support Worker",
    location: "Melbourne – South East",
    type: "Casual",
  },
  {
    title: "SIL House Team Leader",
    location: "Dandenong",
    type: "Full time",
  },
  {
    title: "Support Coordinator",
    location: "Melbourne CBD / Hybrid",
    type: "Full time",
  },
  {
    title: "Registered Nurse – Complex Care",
    location: "Melbourne wide",
    type: "Part time",
  },
  {
    title: "Rostering Officer",
    location: "Melbourne CBD",
    type: "Full time",
  },
];

export const careerPerks = [
  "Above-award pay with penalty rates paid correctly",
  "Rosters built around your availability",
  "Paid onboarding and ongoing NDIS training",
  "Employee assistance program and wellbeing support",
  "Career pathways into team leader and coordination roles",
  "A leadership team that knows your name",
];
