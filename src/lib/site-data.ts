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

export type ServiceDetailBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "heading"; text: string }
  | { type: "highlight"; text: string };

export type Service = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  detailBody?: ServiceDetailBlock[];
};

export const services: Service[] = [
  {
    slug: "daily-living",
    title: "Daily Living Assistance & Supported Independent Living",
    description:
      "Personalised support with daily routines, personal care, meal preparation, household tasks and community participation, helping people live with greater confidence, dignity and independence. \n \n <strong className='font-extrabold'>Supporting independence. Building confidence. Living with choice and dignity.</strong>",
    bullets: [
      "Personal care, hygiene and dressing support",
      "Meal planning, preparation and healthy eating",
      "Medication prompting and health appointments",
      "Overnight and sleepover support options",
      "Skill-building for greater independence",
    ],
    detailBody: [
      { type: "heading", text: "Daily Living Assistance" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we provide personalised <strong className='font-extrabold'>Daily Living Assistance</strong> to help people manage everyday activities with greater confidence, dignity and independence.",
      },
      {
        type: "paragraph",
        text: "Our support is tailored to each person's individual needs, preferences and goals. We work alongside the people we support—not simply doing things for them, but encouraging participation, building skills and promoting greater choice and independence.",
      },
      {
        type: "paragraph",
        text: "Our Daily Living Assistance may include support with personal care, meal preparation, household tasks, shopping, appointments, daily routines and other everyday activities.",
      },
      {
        type: "paragraph",
        text: "<strong className='font-extrabold'>Our goal is simple: to provide practical support that helps each person live safely, confidently and as independently as possible.</strong>",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "We believe that quality support is not about taking over—it is about walking alongside each person, building their confidence, strengthening their skills and supporting them to live a fulfilling and valued life.",
      },
    ],
  },
  {
    slug: "community-participation",
    title: "Community Participation",
    description:
      "Supporting people to participate in social, recreational, cultural and community activities that reflect their interests and goals, while building confidence, independence and meaningful connections.\n\n<strong className='font-extrabold'>Supporting people to connect, participate, belong and live life with confidence and purpose.</strong>",
    bullets: [
      "Social outings, sport, art and hobby groups",
      "Transport to and from activities",
      "Support to volunteer, study or attend work",
      "1:1 and small group community access",
      "Confidence and social skill development",
    ],
    detailBody: [
      { type: "heading", text: "Community Participation" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we believe that being part of the community is an important part of living a fulfilling, connected and valued life.",
      },
      {
        type: "paragraph",
        text: "Our <strong className='font-extrabold'>Community Participation</strong> supports are designed to help people build confidence, develop independence and actively participate in activities and experiences that are meaningful to them. We work alongside each person to understand their interests, goals and preferences and support them to engage with their community in ways that are safe, respectful and empowering.",
      },
      { type: "heading", text: "Our support may include:" },
      {
        type: "list",
        items: [
          "Supporting participation in social and recreational activities",
          "Attending community events and local activities",
          "Visiting libraries, parks, shopping centres and other community facilities",
          "Supporting participation in hobbies, interests and group activities",
          "Developing social skills and building meaningful relationships",
          "Supporting access to community groups and activities",
          "Assistance to attend appointments and community-based activities where appropriate",
          "Encouraging confidence, independence and decision-making",
          "Supporting people to explore new interests and develop new skills",
          "Assistance with community engagement and maintaining social connections",
        ],
      },
      {
        type: "paragraph",
        text: "We recognise that every person has different interests, abilities and aspirations. Our approach is therefore <strong className='font-extrabold'>person-centred and goal-focused</strong>, giving each individual choice and control over how they participate in their community.",
      },
      {
        type: "paragraph",
        text: "At GWDS, we don't simply take people into the community—we <strong className='font-extrabold'>walk alongside them</strong>, encouraging participation, building confidence and creating opportunities to experience connection, belonging and greater independence.",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Supporting people to connect, participate, belong and live life with confidence and purpose.",
      },
    ],
  },
  {
    slug: "household-tasks",
    title: "Household Tasks",
    description:
      "Practical assistance with everyday household tasks such as cleaning, laundry, meal preparation, tidying and maintaining a safe and comfortable home environment.\n\n<strong className='font-extrabold'>Practical support with genuine care—helping people maintain their home with confidence and dignity.</strong>",
    bullets: [
      "Cleaning, laundry and general tidying",
      "Grocery shopping and errands",
      "Garden and outdoor maintenance support",
      "Home organisation and safety checks",
      "Building everyday household skills",
    ],
    detailBody: [
      { type: "heading", text: "Household Tasks" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we provide practical and respectful support with everyday household tasks to help people maintain a <strong className='font-extrabold'>safe, clean, comfortable and well-organised home environment</strong>.",
      },
      {
        type: "paragraph",
        text: "Our Household Tasks support is tailored to each person's individual needs, preferences and circumstances. We aim to provide practical assistance while encouraging people to participate in household activities wherever possible, helping to build confidence, maintain independence and develop everyday living skills.",
      },
      { type: "heading", text: "Our Household Tasks Support May Include" },
      {
        type: "list",
        items: [
          "General household cleaning and tidying",
          "Vacuuming, mopping and dusting",
          "Cleaning kitchens, bathrooms and living areas",
          "Laundry and linen changes",
          "Washing, drying, folding and putting away clothes",
          "Meal preparation and basic food-related household tasks",
          "Assistance with organising household items",
          "Support with maintaining a safe and comfortable home environment",
          "Assistance with routine household tasks that a person may find difficult to complete independently",
        ],
      },
      {
        type: "paragraph",
        text: "We understand that maintaining a home can be challenging for some people. Our team provides support with <strong className='font-extrabold'>kindness, dignity and respect</strong>, while encouraging each person to have choice and control over their home and daily routines.",
      },
      {
        type: "paragraph",
        text: "Where appropriate, we encourage active participation rather than simply completing tasks on a person's behalf. This can help develop practical skills, confidence and greater independence over time.",
      },
      { type: "heading", text: "Our Approach" },
      {
        type: "paragraph",
        text: "At GWDS, we take the time to understand <strong className='font-extrabold'>how each person wants their home to be maintained</strong>. We respect individual preferences, routines, privacy and cultural considerations, and provide support in a way that promotes dignity and wellbeing.",
      },
      {
        type: "paragraph",
        text: "<strong className='font-extrabold'>Our goal is to help create a home environment where people feel safe, comfortable, respected and empowered.</strong>",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Practical support with genuine care—helping people maintain their home, build independence and live with confidence and dignity.",
      },
    ],
  },
  {
    slug: "high-intensity-daily-personal-activities",
    title: "High Intensity Daily Personal Activities",
    description:
      "Specialised, person-centred support for people who require high-intensity assistance with complex daily personal activities, delivered with dignity, safety and respect.\n\n<strong className='font-extrabold'>Skilled support. Compassionate care. Empowering people to live with dignity and confidence</strong>.", 
    bullets: [
      "Understanding and implementing your NDIS plan",
      "Sourcing and comparing quality providers",
      "Crisis response and complex situation support",
      "Plan reviews and reporting to the NDIA",
      "Specialist Support Coordination available",
    ],
    detailBody: [
      { type: "heading", text: "High Intensity Daily Personal Activities" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we provide respectful, person-centred support for people who require <strong className='font-extrabold'>high-intensity assistance with daily personal activities</strong> due to complex or significant support needs.",
      },
      {
        type: "paragraph",
        text: "Our approach is centred on dignity, safety, choice and individualised care. We work alongside each person to understand their needs, preferences, routines and goals, providing support that promotes comfort, confidence and the greatest possible level of independence.",
      },
      { type: "heading", text: "Our High Intensity Support May Include" },
      {
        type: "paragraph",
        text: "Depending on the individual's approved supports, needs and support plan, our appropriately trained and competent support workers may assist with:",
      },
      {
        type: "list",
        items: [
          "High-intensity personal care and daily routines",
          "Showering, dressing, grooming and personal hygiene",
          "Complex continence and bowel care",
          "Mealtime and specialised feeding support",
          "Enteral feeding support where applicable",
          "Tracheostomy-related support where applicable",
          "Complex wound and skin care",
          "Respiratory-related support where applicable",
          "Support for people with complex physical or medical needs",
          "Assistance with specialised personal-care routines",
          "Monitoring and responding appropriately to identified risks and changes in a person's condition, in accordance with their support plan",
        ],
      },
      { type: "heading", text: "Safe, Skilled and Person-Centred Support" },
      {
        type: "paragraph",
        text: "High-intensity support requires a higher level of knowledge, skill and competency. At GWDS, we are committed to ensuring that support is provided by appropriately trained workers who understand the individual's specific needs and follow relevant support plans, procedures and professional guidance.",
      },
      {
        type: "paragraph",
        text: "We work collaboratively with the person, their family or support network and relevant health professionals, where appropriate, to promote <strong className='font-extrabold'>safe, consistent and quality support</strong>.",
      },
      {
        type: "paragraph",
        text: "We respect each person's privacy, dignity, choices and right to have control over their own life. Our aim is not simply to provide care, but to support each person to participate in their daily life as fully and independently as possible.",
      },
      { type: "heading", text: "Our Commitment" },
      {
        type: "paragraph",
        text: "At GWDS, we understand that high-intensity support is about more than specialised care—it is about <strong className='font-extrabold'>trust, relationships and genuine human connection</strong>.",
      },
      {
        type: "paragraph",
        text: "We provide support with patience, compassion and respect, recognising the individual behind the support needs and celebrating their abilities, strengths and potential.",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Skilled support. Compassionate care. Empowering people to live with dignity, confidence and greater independence.",
      },
    ],
  },
  {
    slug: "employment-higher-education",
    title: "Employment & Higher Education",
    description:
      "Supporting people to pursue employment, training and higher education by developing workplace and study skills, confidence and independence.\n\n<strong className='font-extrabold'>Building confidence. Supporting aspirations. Creating pathways to employment and education.</strong>",
    bullets: [
      "24/7 and active overnight support",
      "Vacancy matching and trial stays",
      "High physical support and SDA-linked homes",
      "Person-centred rosters of care",
      "Support to build household independence",
    ],
    detailBody: [
      { type: "heading", text: "Assistance to Access and Maintain Employment or Higher Education" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we believe that everyone should have the opportunity to pursue meaningful employment, education and personal development.",
      },
      {
        type: "paragraph",
        text: "Our <strong className='font-extrabold'>Assistance to Access and Maintain Employment or Higher Education</strong> supports are designed to help people with disability build the confidence, skills and independence they need to explore employment opportunities, participate in education and achieve their individual goals.",
      },
      {
        type: "paragraph",
        text: "We work alongside each person to understand their strengths, interests, aspirations and support needs, providing practical and personalised assistance to help them overcome disability-related barriers.",
      },
      { type: "heading", text: "Our Support May Include" },
      {
        type: "list",
        items: [
          "Exploring employment, training and education opportunities",
          "Assistance with job-search activities and identifying suitable opportunities",
          "Support to prepare for job interviews",
          "Developing workplace readiness and confidence",
          "Support to establish routines and skills for the workplace",
          "Assistance with transitioning into a new job or educational environment",
          "Developing communication, organisational and time-management skills",
          "Support to understand workplace or education routines and expectations",
          "Assistance to build confidence in communicating with employers, colleagues, teachers or other relevant people",
          "Support to maintain participation in employment or higher education",
          "Encouragement to develop greater independence and self-advocacy",
        ],
      },
      { type: "heading", text: "Person-Centred Support" },
      {
        type: "paragraph",
        text: "At GWDS, we recognise that every person has different strengths, abilities, interests and goals. Our approach is therefore <strong className='font-extrabold'>person-centred and goal-focused</strong>, ensuring that the support we provide reflects what is important to each individual.",
      },
      {
        type: "paragraph",
        text: "We don't simply focus on finding a job or accessing education. We focus on helping people develop the <strong className='font-extrabold'>skills, confidence and independence</strong> to participate meaningfully and work towards their longer-term aspirations.",
      },
      {
        type: "paragraph",
        text: "Where appropriate, we work collaboratively with the person, their family or support network, employers, educational providers and other relevant professionals to create a supportive pathway towards achieving their goals.",
      },
      { type: "heading", text: "Empowering Your Future" },
      {
        type: "paragraph",
        text: "Whether a person is taking their first steps towards employment, returning to work, starting a course or working to maintain their current employment or education, GWDS is committed to walking alongside them.",
      },
      {
        type: "paragraph",
        text: "<strong className='font-extrabold'>We believe meaningful employment and education can provide purpose, confidence, connection and greater independence.</strong>",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Supporting aspirations. Building confidence. Creating pathways to employment, education and a more independent future.",
      },
    ],
  },
  {
    slug: "life-stages-transitions-supports",
    title: "Life Stages, Transitions & Supports",
    description:
      "Helping people navigate significant life changes and transitions through personalised planning, guidance and support that promotes independence, choice and confidence.\n\n<strong className='font-extrabold'>Supporting life's transitions with compassion, clarity and care.</strong>",
    bullets: [
      "Registered nurse assessments and care plans",
      "PEG feeding, catheter and stoma care",
      "Complex wound and continence management",
      "Epilepsy and diabetes management",
      "Hospital discharge and transition support",
    ],
    detailBody: [
      { type: "heading", text: "Assistance with Life Stages, Transitions and Supports – Registration Group 0106" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we understand that life can bring periods of change and transition that may require additional guidance, planning and support. Our <strong className='font-extrabold'>Assistance with Life Stages, Transitions and Supports</strong> service is designed to help people navigate these changes with greater confidence, choice and control.",
      },
      {
        type: "paragraph",
        text: "We work alongside each person to understand their circumstances, goals and support needs, helping them manage transitions and coordinate the supports and services that contribute to their wellbeing, independence and participation.",
      },
      { type: "heading", text: "Our Support May Include" },
      {
        type: "list",
        items: [
          "Assistance to plan and prepare for significant life changes",
          "Support during transitions between different living arrangements",
          "Assistance with transitioning from school to further education, training or employment",
          "Support to establish new routines and adapt to changing circumstances",
          "Assistance to coordinate everyday support arrangements",
          "Helping people understand and manage their available supports",
          "Assistance with organising appointments and communicating with relevant services",
          "Support to identify and address barriers that may affect independence and participation",
          "Assistance to develop decision-making, planning and organisational skills",
          "Support to build confidence in communicating individual needs, preferences and choices",
          "Assistance to develop greater independence in managing personal supports",
        ],
      },
      { type: "heading", text: "Person-Centred Support" },
      {
        type: "paragraph",
        text: "Every person's journey is different. At GWDS, we take the time to listen, understand what matters to each individual and provide support that reflects their <strong className='font-extrabold'>goals, preferences, strengths and aspirations</strong>.",
      },
      {
        type: "paragraph",
        text: "We can work alongside the person and, where appropriate, their family, carers, support network and relevant service providers to help create a coordinated and positive transition.",
      },
      {
        type: "paragraph",
        text: "Our focus is not simply on managing change—it is on helping each person feel <strong className='font-extrabold'>prepared, informed, supported and empowered throughout their journey</strong>.",
      },
      { type: "heading", text: "Supporting Positive Transitions" },
      {
        type: "paragraph",
        text: "Whether someone is moving into a new home, starting or leaving school, exploring employment or education, adjusting to a change in circumstances, or managing multiple supports, GWDS is committed to walking alongside them.",
      },
      {
        type: "paragraph",
        text: "<strong className='font-extrabold'>We help turn periods of change into opportunities for growth, confidence and greater independence.</strong>",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Supporting life's transitions with compassion, clarity and care—empowering people to move forward with confidence, choice and purpose.",
      },
    ],
  },
  {
    slug: "community-nursing-care",
    title: "Community Nursing Care",
    description:
      "Professional nursing support for people with disability, delivered in the home and community to promote health, safety, dignity, comfort and quality of life.\n\n<strong className='font-extrabold'>Professional nursing care with compassion—supporting health, dignity and wellbeing.</strong>",
    bullets: [
      "Short Term Accommodation (STA) and respite",
      "Medium Term Accommodation (MTA)",
      "Transport and travel training",
      "Group programs and holiday activities",
      "Assistance with life-stage transitions",
    ],
    detailBody: [
      { type: "heading", text: "Community Nursing Care" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we provide professional and person-centred <strong className='font-extrabold'>Community Nursing Care</strong> to support people with disability to manage their health and wellbeing while living in their own homes and participating in their communities.",
      },
      {
        type: "paragraph",
        text: "Our nursing services are tailored to each person's individual health needs, preferences, goals and care requirements. We aim to provide safe, respectful and responsive care that promotes dignity, comfort, independence and quality of life.",
      },
      { type: "heading", text: "Our Community Nursing Support May Include" },
      {
        type: "list",
        items: [
          "Nursing assessment and ongoing health monitoring",
          "Clinical nursing care in the person's home or community",
          "Wound and skin care",
          "Continence and catheter care",
          "Bowel care",
          "Enteral feeding and PEG-related support, where required",
          "Respiratory and airway-related support, where appropriate",
          "Assistance with complex health and disability-related needs",
          "Health monitoring and recognising changes in a person's condition",
          "Supporting health-related routines and self-management",
          "Education and guidance to help people better understand and manage their health needs",
          "Working collaboratively with families, carers and other healthcare professionals",
          "Supporting the implementation of individualised health and care plans",
        ],
      },
      { type: "heading", text: "Person-Centred Nursing Care" },
      {
        type: "paragraph",
        text: "At GWDS, we understand that good nursing care is about more than clinical tasks. It is about building trust, listening to the person and respecting their dignity, choices, privacy and individual circumstances.",
      },
      {
        type: "paragraph",
        text: "Our nursing team takes a <strong className='font-extrabold'>person-centred approach</strong>, ensuring that care is delivered in a respectful and culturally sensitive manner while supporting each person's goals and preferences.",
      },
      {
        type: "paragraph",
        text: "Where appropriate, we work collaboratively with the participant, their family or support network, support workers, doctors, allied health professionals and other relevant healthcare providers to promote continuity and quality of care.",
      },
      { type: "heading", text: "Supporting Health, Independence and Wellbeing" },
      {
        type: "paragraph",
        text: "Our goal is to help people receive the nursing support they need while maintaining as much <strong className='font-extrabold'>choice, control and independence</strong> as possible.",
      },
      {
        type: "paragraph",
        text: "We recognise that every person has different abilities and support needs. We focus on their strengths and work alongside them to promote confidence, participation and quality of life.",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Professional nursing care with compassion—supporting health, dignity, independence and wellbeing every step of the way.",
      },
    ],
  },
  {
    slug: "travel-transport",
    title: "Travel & Transport",
    description:
      "Helping people overcome transport-related barriers and develop the confidence and skills needed to travel more safely and independently.\n\n<strong className='font-extrabold'>Opening pathways to greater independence—helping people travel, connect and participate with confidence.</strong>",
    bullets: [
      "Short Term Accommodation (STA) and respite",
      "Medium Term Accommodation (MTA)",
      "Transport and travel training",
      "Group programs and holiday activities",
      "Assistance with life-stage transitions",
    ],
    detailBody: [
      { type: "heading", text: "Assistance with Travel & Transport" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we believe that access to safe and reliable transport plays an important role in helping people live independently, participate in their community and pursue the activities that are meaningful to them.",
      },
      {
        type: "paragraph",
        text: "Our <strong className='font-extrabold'>Assistance with Travel and Transport</strong> supports people with disability to overcome transport-related barriers and develop greater confidence, skills and independence in accessing the community.",
      },
      {
        type: "paragraph",
        text: "We take a person-centred approach, tailoring our support to each individual's abilities, needs, preferences and goals.",
      },
      
      {
        type: "list",
        items: [
          "Assistance with planning and organising journeys",
          "Support to understand available transport options",
          "Assistance to access and use public transport",
          "Travel training and developing independent travel skills",
          "Support to learn routes and navigate transport services",
          "Assistance with understanding timetables, stops and transport procedures",
          "Support to develop confidence when travelling independently",
          "Assistance with planning travel to appointments, education, employment and community activities",
          "Support to overcome disability-related barriers to accessing transport",
          "Assistance to develop safe travel and road-awareness skills",
          "Support to build skills for managing future travel independently",
        ],
      },
      { type: "heading", text: "Building Confidence and Independence" },
      {
        type: "paragraph",
        text: "At GWDS, our focus is not simply on getting from one place to another. We aim to help each person <strong className='font-extrabold'>develop the confidence and skills to participate more independently in their community</strong>.",
      },
      {
        type: "paragraph",
        text: "Where appropriate, we encourage people to take an active role in planning their journeys, making decisions and learning how to use available transport options. Our support can be gradually adjusted as a person's confidence and independence develop.",
      },
      { type: "heading", text: "Person-Centred Support" },
      {
        type: "paragraph",
        text: "Every person's transport needs are different. We take the time to understand what is important to each individual and provide support that respects their <strong className='font-extrabold'>choices, dignity, safety and independence</strong>.",
      },
      {
        type: "paragraph",
        text: "Whether someone is learning a new route, accessing a community activity, attending an appointment or developing the confidence to use public transport, we walk alongside them at their own pace.",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Opening pathways to greater independence—supporting people to travel, connect and participate in life with confidence.",
      },
    ],
  },
  {
    slug: "innovative-community-participation",
    title: "Innovative Community Participation",
    description:
      "Creating personalised opportunities to explore interests, try new experiences, develop skills and build meaningful connections within the community.\n\n<strong className='font-extrabold'>Creating opportunities. Building confidence. Discovering possibilities.</strong>",
    bullets: [
      "Short Term Accommodation (STA) and respite",
      "Medium Term Accommodation (MTA)",
      "Transport and travel training",
      "Group programs and holiday activities",
      "Assistance with life-stage transitions",
    ],
    detailBody: [
      { type: "heading", text: "Innovative Community Participation" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we believe everyone should have the opportunity to discover their interests, develop their abilities and experience meaningful connection within their community.",
      },
      {
        type: "paragraph",
        text: "Our <strong className='font-extrabold'>Innovative Community Participation</strong> supports are designed around each person's individual interests, strengths, goals and aspirations. We create personalised opportunities for people to explore new experiences, develop skills, build confidence and participate in activities that bring meaning and enjoyment to their lives.",
      },
      { type: "heading", text: "Our Support May Include" },
      {
        type: "list",
        items: [
          "Exploring new hobbies, interests and recreational activities",
          "Participation in arts, crafts, music and creative activities",
          "Gardening and nature-based activities",
          "Sports, fitness and recreational opportunities",
          "Community groups, clubs and interest-based activities",
          "Cultural and local community activities",
          "Developing social and communication skills",
          "Building confidence when meeting and interacting with others",
          "Learning practical skills through meaningful community activities",
          "Developing planning, organisation and decision-making skills",
          "Trying new experiences and discovering new interests",
          "Supporting greater independence in community participation",
        ],
      },
      { type: "heading", text: "Individualised and Meaningful Support" },
      {
        type: "paragraph",
        text: "At GWDS, we understand that <strong className='font-extrabold'>one size does not fit all</strong>. We take the time to understand what each person enjoys, what they would like to learn and what they would like to achieve.",
      },
      {
        type: "paragraph",
        text: "Our support is designed to create meaningful opportunities rather than simply filling time. Whether someone wants to discover a new hobby, join a community group, develop social connections or build confidence trying something new, we support them at their own pace.",
      },
      { type: "heading", text: "Building Skills Through Participation" },
      {
        type: "paragraph",
        text: "Community activities can provide valuable opportunities to develop everyday skills. Through participation, we encourage people to build:",
      },
      {
        type: "list",
        items: [
          "Communication and social skills",
          "Confidence and self-esteem",
          "Decision-making and problem-solving",
          "Planning and organisational skills",
          "Teamwork and cooperation",
          "Independence and self-advocacy",
        ],
      },
      {
        type: "paragraph",
        text: "Where appropriate, we gradually encourage greater independence so that each person can take more control over the activities and experiences that are important to them.",
      },
      { type: "heading", text: "Celebrating Possibilities" },
      {
        type: "paragraph",
        text: "At GWDS, we focus on <strong className='font-extrabold'>what people can do and what they can achieve</strong>. We encourage individuals to explore their potential, try new experiences and build meaningful connections in ways that reflect their unique abilities and aspirations.",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Creating opportunities. Building confidence. Discovering possibilities. Empowering people to participate, connect and belong.",
      },
    ],
  },
  {
    slug: "daily-living-life-skills-development",
    title: "Daily Living & Life Skills Development",
    description:
      "Helping people develop practical everyday skills such as cooking, shopping, budgeting, planning, communication and household routines to promote greater independence.\n\n<strong className='font-extrabold'>Building skills. Growing confidence. Empowering independence—one step at a time.</strong>",
    bullets: [
      "Short Term Accommodation (STA) and respite",
      "Medium Term Accommodation (MTA)",
      "Transport and travel training",
      "Group programs and holiday activities",
      "Assistance with life-stage transitions",
    ],
    detailBody: [
      { type: "heading", text: "Development of Daily Living and Life Skills - Registration Group 0117" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we believe that developing everyday skills can create greater confidence, independence and choice. Our <strong className='font-extrabold'>Development of Daily Living and Life Skills</strong> supports are designed to help people build practical skills that enable them to participate more independently in their home, community and everyday life.",
      },
      {
        type: "paragraph",
        text: "Our approach focuses on <strong className='font-extrabold'>building capacity rather than simply doing things for the person</strong>. We work alongside each individual at their own pace, recognising their existing abilities and supporting them to develop new skills, confidence and greater independence.",
      },
      { type: "heading", text: "Our Support May Include" },
      {
        type: "list",
        items: [
          "Developing cooking and meal preparation skills",
          "Learning household cleaning and maintenance routines",
          "Developing laundry skills",
          "Shopping and grocery-planning skills",
          "Developing personal organisation and daily routines",
          "Time management and planning",
          "Money-management and budgeting skills",
          "Decision-making and problem-solving",
          "Developing communication and social skills",
          "Learning to use public transport and navigate the community",
          "Developing skills to manage personal belongings and responsibilities",
          "Building confidence in making everyday choices",
          "Developing skills for greater independence at home and in the community",
        ],
      },
      { type: "heading", text: "Building Skills, Confidence and Independence" },
      {
        type: "paragraph",
        text: "At GWDS, we believe that every person has the capacity to learn and grow. We identify each person's strengths, interests and goals and create opportunities for them to <strong className='font-extrabold'>learn by doing</strong>.",
      },
      {
        type: "paragraph",
        text: "For example, rather than simply preparing a meal for someone, we may support them to choose a recipe, plan the ingredients, go shopping, prepare the food, cook safely and clean up afterwards. The level of assistance can be adjusted as their confidence and skills develop.",
      },
      { type: "heading", text: "Person-Centred Capacity Building" },
      {
        type: "paragraph",
        text: "Everyone learns differently. Our support is therefore tailored to each person's abilities, learning style, preferences and goals.",
      },
      { type: "paragraph", text: "We encourage people to:" },
      {
        type: "list",
        items: [
          "Make their own choices",
          "Take an active role in everyday activities",
          "Develop problem-solving skills",
          "Build confidence through achievement",
          "Learn from experience",
          "Increase independence at their own pace",
        ],
      },
      {
        type: "paragraph",
        text: "Our goal is not perfection—it is <strong className='font-extrabold'>progress, confidence and greater choice and control in everyday life</strong>.",
      },
      { type: "heading", text: "Supporting Your Journey" },
      {
        type: "paragraph",
        text: "Whether a person is learning to manage a household, preparing for greater independence, developing community skills or simply wanting to become more confident with everyday activities, GWDS walks alongside them with patience, encouragement and respect.",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Building skills. Growing confidence. Empowering independence—one step at a time.",
      },
    ],
  },
  {
    slug: "specialised-supported-employment",
    title: "Specialised Supported Employment",
    description:
      "Providing tailored support for people who require assistance to participate in a specialised supported employment environment, with a focus on workplace skills, confidence and meaningful contribution.\n\n<strong className='font-extrabold'>Creating opportunities to contribute, building workplace confidence and supporting employment goals.</strong>",
    bullets: [
      "Short Term Accommodation (STA) and respite",
      "Medium Term Accommodation (MTA)",
      "Transport and travel training",
      "Group programs and holiday activities",
      "Assistance with life-stage transitions",
    ],
    detailBody: [
      { type: "heading", text: "Specialised Supported Employment – Registration Group 0133" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we believe that every person should have opportunities to develop their skills, contribute meaningfully and experience the confidence and sense of purpose that comes through participation in work.",
      },
      {
        type: "paragraph",
        text: "Our <strong className='font-extrabold'>Specialised Supported Employment</strong> service provides tailored employment support for people with disability who require additional assistance to participate in a supported work environment.",
      },
      {
        type: "paragraph",
        text: "We take a person-centred approach, recognising each individual's abilities, interests, strengths and employment goals. Our support is designed to encourage participation, develop workplace skills and promote greater confidence and independence.",
      },
      { type: "heading", text: "Our Support May Include" },
      {
        type: "list",
        items: [
          "Assistance to participate in a specialised supported employment environment",
          "Developing workplace skills and routines",
          "Support to understand workplace responsibilities and expectations",
          "Assistance with learning and completing work-related tasks",
          "Developing communication and interpersonal skills",
          "Building confidence and workplace independence",
          "Support with time management and following workplace routines",
          "Developing teamwork and cooperation skills",
          "Assistance to maintain participation in employment",
          "Encouragement to take greater responsibility for workplace tasks",
          "Identifying and developing individual strengths and abilities",
          "Supporting progression towards greater independence in employment where appropriate",
        ],
      },
      { type: "heading", text: "Person-Centred Employment Support" },
      {
        type: "paragraph",
        text: "At GWDS, we understand that every person's employment journey is different. We take the time to understand what each individual enjoys, what they are good at and what they would like to achieve.",
      },
      {
        type: "paragraph",
        text: "Our support is tailored to the person's abilities and support needs, with an emphasis on <strong className='font-extrabold'>participation, skill development and meaningful contribution</strong>.",
      },
      {
        type: "paragraph",
        text: "We encourage people to take an active role in their work, make choices, develop new skills and experience the satisfaction that comes from achieving personal and workplace goals.",
      },
      { type: "heading", text: "Building Skills for the Future" },
      {
        type: "paragraph",
        text: "Specialised supported employment can provide valuable opportunities to develop skills that can contribute to greater independence and participation in the wider community.",
      },
      {
        type: "paragraph",
        text: "Through appropriate support and encouragement, individuals can develop:",
      },
      {
        type: "list",
        items: [
          "Work-related skills",
          "Communication and social skills",
          "Confidence and self-esteem",
          "Teamwork and cooperation",
          "Time management",
          "Problem-solving",
          "Responsibility and reliability",
          "Independence and self-advocacy",
        ],
      },
      {
        type: "paragraph",
        text: "Where appropriate, we support individuals to build skills that may help them explore further employment opportunities and greater independence in the future.",
      },
      { type: "heading", text: "Our Commitment" },
      {
        type: "paragraph",
        text: "At GWDS, we focus on <strong className='font-extrabold'>abilities, potential and possibilities</strong>. We believe every person has something valuable to contribute, and we are committed to creating supportive opportunities where people can learn, grow, participate and succeed.",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Creating opportunities to contribute, building workplace confidence and empowering people to achieve their employment goals.",
      },
    ],
  },
  {
    slug: "group-centre-based-activities",
    title: "Group & Centre-Based Activities",
    description:
      "Providing inclusive opportunities to socialise, learn new skills, explore interests and participate in meaningful activities through supportive group and centre-based programs.\n\n<strong className='font-extrabold'>Creating meaningful connections. Building skills. Celebrating abilities.</strong>",
    bullets: [
      "Short Term Accommodation (STA) and respite",
      "Medium Term Accommodation (MTA)",
      "Transport and travel training",
      "Group programs and holiday activities",
      "Assistance with life-stage transitions",
    ],
    detailBody: [
      { type: "heading", text: "Group & Centre-Based Activities – Registration Group 0136" },
      {
        type: "paragraph",
        text: "At <strong className='font-extrabold'>Good Works Disability Services (GWDS)</strong>, we believe that meaningful activities, social connection and opportunities to learn can play an important role in building confidence, wellbeing and independence.",
      },
      {
        type: "paragraph",
        text: "Our <strong className='font-extrabold'>Group and Centre-Based Activities</strong> provide a welcoming and supportive environment where people can participate in activities that reflect their interests, abilities and individual goals. Our programs encourage participants to connect with others, develop new skills, explore interests and enjoy meaningful experiences in a safe and inclusive setting.",
      },
      { type: "heading", text: "Our Group & Centre-Based Activities May Include" },
      {
        type: "list",
        items: [
          "Social and recreational activities",
          "Arts, crafts and creative programs",
          "Music and cultural activities",
          "Cooking and meal-preparation activities",
          "Gardening and nature-based activities",
          "Games and structured group activities",
          "Health, fitness and wellbeing activities",
          "Life-skills and independence programs",
          "Educational and skill-development activities",
          "Group outings and community activities",
          "Activities designed to develop communication and social skills",
          "Programs that encourage teamwork, cooperation and friendship",
        ],
      },
      { type: "heading", text: "Building Skills Through Participation" },
      {
        type: "paragraph",
        text: "Our activities are designed to provide more than entertainment. They create opportunities for people to <strong className='font-extrabold'>learn, practise skills, build confidence and develop greater independence</strong>.",
      },
      {
        type: "paragraph",
        text: "Through participation, individuals may develop:",
      },
      {
        type: "list",
        items: [
          "Communication and social skills",
          "Teamwork and cooperation",
          "Decision-making and problem-solving",
          "Confidence and self-esteem",
          "Planning and organisational skills",
          "Practical and everyday living skills",
          "Independence and self-advocacy",
        ],
      },
      {
        type: "paragraph",
        text: "We encourage participants to take an active role in activities wherever possible, with support adjusted to their individual abilities and goals.",
      },
      { type: "heading", text: "Person-Centred Group Activities" },
      {
        type: "paragraph",
        text: "Although our programs are delivered in a group or centre-based environment, we recognise that <strong className='font-extrabold'>every person is unique</strong>.",
      },
      {
        type: "paragraph",
        text: "We take the time to understand each individual's interests, strengths, preferences and goals and encourage meaningful participation at their own pace. Our team creates opportunities for people to try new activities, discover interests, build friendships and experience a sense of belonging.",
      },
      { type: "heading", text: "A Place to Connect, Learn and Belong" },
      {
        type: "paragraph",
        text: "At GWDS, we want our group and centre-based programs to be places where people feel <strong className='font-extrabold'>welcomed, valued, respected and included</strong>.",
      },
      {
        type: "paragraph",
        text: "Whether someone is learning a new skill, enjoying a creative activity, making a new friend or participating in a community outing, we aim to create experiences that contribute to a fulfilling and valued life.",
      },
      { type: "highlight", text: "Love in Action. Truth in Everything We Do." },
      {
        type: "highlight",
        text: "Creating meaningful connections. Building skills. Celebrating abilities. Empowering people to learn, participate and belong.",
      },
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
