export const personal = {
  name: "Muhammad Maaz Bin Imtiaz",
  title: "SQA Engineer",
  subtitle: "Test Automation Specialist",
  tagline: "Making software reliable, fast, and user-friendly — one test at a time.",
  bio: "Detail-oriented SQA Engineer with 1.5+ years of experience in manual, API, and automation testing. I specialize in Playwright, Selenium, and K6, consistently achieving 95%+ test coverage and reducing post-release defects by 20%. From enterprise platforms to AI chatbots, I ensure software reliability at every stage. Currently pursuing an MSSE at FAST-NUCES.",
  location: "Karachi, Pakistan",
  email: "maazimtiaz3456@gmail.com",
  phone: "+92 331 365 4593",
  linkedin: "https://www.linkedin.com/in/muhammad-maaz-bin-imtiaz/",
  github: "https://github.com/maazimtiaz3456",
  availableForWork: true,
};

export const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "95%+", label: "Test Coverage" },
  { value: "20%", label: "Bug Reduction" },
  { value: "8", label: "Certifications" },
];

export const skills = [
  {
    category: "Automation Testing",
    icon: "bot",
    items: ["Playwright (JavaScript)", "Playwright (C#)", "Selenium (C#)"],
  },
  {
    category: "API Testing",
    icon: "plug",
    items: ["Postman", "Swagger", "REST API Validation"],
  },
  {
    category: "Performance Testing",
    icon: "zap",
    items: ["K6 (JavaScript)", "Load Testing", "Stress Testing"],
  },
  {
    category: "Manual Testing",
    icon: "flask",
    items: ["Functional Testing", "Regression Testing", "UI/UX Testing", "NSFW Content Testing"],
  },
  {
    category: "Bug Tracking & Management",
    icon: "bug",
    items: ["Jira", "Trello", "Bug Reporting", "Defect Lifecycle"],
  },
  {
    category: "Database & Infrastructure",
    icon: "database",
    items: ["SQL Queries", "Beekeeper Studio", "Docker (Container Logs)", "RBAC Validation"],
  },
  {
    category: "Methodologies",
    icon: "gitBranch",
    items: ["Agile / Scrum", "SDLC", "Test Planning", "Test Case Design"],
  },
  {
    category: "Platforms Tested",
    icon: "globe",
    items: ["Web Applications", "Mobile Applications", "Payment Gateways", "AI Chatbots"],
  },
];

export const experience = [
  {
    role: "SQA Engineer",
    company: "Geeks of Kolachi",
    location: "Karachi, Pakistan",
    period: "Jul 2025 – Present",
    type: "Full-time",
    color: "cyan",
    bullets: [
      "Wrote and executed 100+ test cases per project, ensuring comprehensive coverage across web, mobile, and API modules.",
      "Reported and tracked 75+ bugs per project using Jira and Trello.",
      "Performed API load and stress testing with K6, simulating high concurrent users to validate system performance and stability.",
      "Coordinated with Project Managers and Development teams to align QA activities with project goals and deadlines.",
      "Delivered project demos to clients, improving transparency and ensuring client satisfaction.",
      "Analyzed test data to identify recurring defect patterns, optimizing test coverage and improving product reliability.",
      "Reduced bug leakage by 20% through proactive regression testing and test case optimization.",
      "Built end-to-end API automation using Playwright for integration testing, validating Credit Consumption logic.",
      "Configured a CI/CD pipeline that runs the test suite on each build, generates reports, and deploys them to a live Vercel URL.",
    ],
  },
  {
    role: "Associate SQA Engineer",
    company: "Tafsol Technologies",
    location: "Karachi, Pakistan",
    period: "Mar 2025 – Jul 2025",
    type: "Full-time",
    color: "purple",
    bullets: [
      "Coordinated with Project Managers to understand project workflows, scope, and gather precise requirements.",
      "Collaborated with Developers to verify bug resolutions and ensure alignment with project goals.",
      "Conducted thorough manual testing to verify software functionality and quality.",
      "Created detailed Test Plans and Test Cases for systematic testing.",
      "Managed bug reporting, ensuring clear documentation and timely tracking of issues.",
      "Performed web automation testing to improve application reliability and performance.",
      "Executed regression testing to ensure application stability across software updates.",
      "Reviewed UI/UX designs to enhance usability and user experience.",
      "Tested chat modules and payment gateways to ensure secure and seamless user interactions.",
      "Performed API testing using Postman to validate endpoints and ensure secure communication.",
      "Tested AI chatbots, including NSFW use cases, to verify response accuracy and safe user interactions.",
    ],
  },
  {
    role: "SQA Intern",
    company: "Tafsol Technologies",
    location: "Karachi, Pakistan",
    period: "Sep 2024 – Mar 2025",
    type: "Internship",
    color: "green",
    bullets: [
      "Coordinated with Project Managers to understand project workflows, scope, and gather precise requirements.",
      "Collaborated with Developers to verify bug resolutions and ensure alignment with project goals.",
      "Conducted thorough manual testing to verify software functionality and quality.",
      "Created detailed Test Plans and Test Cases for systematic testing procedures.",
      "Managed bug reporting, ensuring clear documentation and timely issue tracking.",
      "Performed web automation testing to improve application reliability and performance.",
      "Executed regression testing to ensure application stability across software updates.",
      "Reviewed UI/UX designs to enhance usability and user experience.",
      "Tested chat modules and payment gateways to ensure secure and seamless user interactions.",
      "Performed API testing using Postman to validate endpoints, ensuring secure and efficient communication.",
    ],
  },
  {
    role: "SAP SD Internee",
    company: "Proton Pakistan",
    location: "Karachi, Pakistan",
    period: "Jul 2022 – Aug 2022",
    type: "Internship",
    color: "blue",
    bullets: [
      "Gained understanding of core SAP SD processes, including sales order management, pricing, delivery, and billing.",
      "Observed and documented end-to-end sales workflows within SAP.",
      "Assisted in manual order creation and explored customer and material master data handling.",
    ],
  },
];

export const projects = [
  {
    name: "Multi-Tenant Enterprise Platform",
    period: "Nov 2025 – Mar 2026",
    icon: "fileText",
    description:
      "Enterprise document management platform with multi-OS deployment. Led end-to-end QA including deployment script testing across Windows, Mac, and Linux environments.",
    highlights: [
      "Tested deployment scripts on Windows, Mac & Linux (setup, update, uninstall)",
      "Monitored Docker container logs and ensured stable system setup",
      "Verified complex RBAC roles: Super Admin, Tenant, Employee",
      "Backend validation via SQL queries and Beekeeper Studio",
      "Tested digital & physical document tracking, retrieval, and custom reporting",
      "Validated tenant-specific settings: themes, password policies, subscriptions",
    ],
    tags: ["Docker", "SQL", "RBAC", "Deployment Testing", "Beekeeper", "Manual Testing"],
    tagColor: "blue",
  },
  {
    name: "Business Automation & Marketing Platform",
    period: "2025",
    icon: "messageSquare",
    description:
      "WhatsApp-first business platform for appointment booking, marketing campaigns, and service management with bot automation.",
    highlights: [
      "Tested onboarding: signup, subscription, and WhatsApp Business connection",
      "Verified bot activation, service setup, and appointment workflows",
      "Checked RBAC: Business Owners (full control) vs Staff (limited access)",
      "Validated payment workflows using Pagar.me and Google Calendar sync",
      "Tested WhatsApp number change, Meta WebView login, and bot assignment",
      "Verified Marketing module: template creation, Meta approval, and campaign execution",
    ],
    tags: ["WhatsApp API", "Pagar.me", "Google Calendar", "RBAC", "API Testing", "Regression"],
    tagColor: "purple",
  },
];

export const certifications = [
  { name: "SQL and Relational Databases 101", issuer: "Cognitive Class (IBM Skills Network)", logo: "ibm" },
  { name: "Career Essentials in Generative AI by Microsoft and LinkedIn", issuer: "LinkedIn Learning Community", logo: "linkedin" },
  { name: "Foundations of Prompt Engineering", issuer: "Amazon Web Services (AWS)", logo: "aws" },
  { name: "Scrum Foundation Professional Certification", issuer: "CertiProf", logo: "certiprof" },

  { name: "Introduction to API Testing with Postman", issuer: "10Pearls University", logo: "10pearls" },
  { name: "Automation With Selenium Web Driver and TestNg", issuer: "10Pearls University", logo: "10pearls" },
  { name: "QA Fundamentals", issuer: "10Pearls University", logo: "10pearls" },
];

export const education = [
  {
    degree: "MS Software Engineering",
    institution: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    period: "Aug 2025 – Present",
    location: "Karachi, Pakistan",
    icon: "graduationCap",
  },
  {
    degree: "BS Computer Science",
    institution: "Mohammad Ali Jinnah University (MAJU)",
    period: "Aug 2020 – Jul 2024",
    location: "Karachi, Pakistan",
    icon: "monitor",
  },
  {
    degree: "Pre-Engineering",
    institution: "Army Public School Faisal (APSACS)",
    period: "Aug 2018 – Jul 2020",
    location: "Karachi, Pakistan",
    icon: "bookOpen",
  },
];
