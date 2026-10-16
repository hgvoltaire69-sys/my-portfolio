/**
 * Portfolio Data Module
 * Authentic Information & Accredited Credentials for Elijah Exconde
 */

const STORAGE_KEY = 'my_react_portfolio_data_v14';

export const initialPortfolioData = {
  profile: {
    name: "Elijah Exconde",
    title: "Aspiring Virtual Assistant",
    bio: "Certified Freelance Operations Specialist delivering high-precision administrative support, CRM workflows (HubSpot & Salesforce), and AI tool integration. Backed by credentials, 105 WPM / 100% precision data entry, and reliable EST remote coverage.",
    location: "Lipa City, Philippines",
    email: "exconde.elijah@gmail.com",
    phone: "+63 976 259 1824",
    linkedin: "https://www.linkedin.com/in/elijah-exconde-02a83a430",
    resumeImagePath: "images/resumeimages/Exconde_Elijah_P.png",
    resumePdfPath: "pdf/Exconde_Elijah_P_resume.pdf",
    avatarUrl: "images/profilepic/pic1x1.jpg"
  },
  certifications: [
    {
      id: "cert-8",
      title: "EF SET English Certificate — C1 Advanced",
      issuer: "EF Standard English Test (EF SET)",
      issueDate: "2026-10-16",
      expiryDate: "Never Expires",
      credentialId: "cert.efset.org/XucPme",
      credentialUrl: "https://cert.efset.org/XucPme",
      category: "Language & Communication",
      badgeIcon: "Languages",
      imagePath: "images/certificateENGPROFICIENCY-1.png",
      skills: ["English Proficiency (C1 Advanced)", "C2 Proficient Reading (75/100)", "C2 Proficient Listening (72/100)", "Professional Communication"],
      description: "Official EF SET English Certificate scoring 65/100 (C1 Advanced) on the CEFR scale. Verified C2 Proficient in Reading (75/100) and Listening (72/100), demonstrating advanced English fluency for international client communications and virtual assistance."
    },
    {
      id: "cert-6",
      title: "Psychological First Aid (PFA) Online",
      issuer: "The National Child Traumatic Stress Network (NCTSN)",
      issueDate: "2026-06-03",
      expiryDate: "Never Expires",
      credentialId: "5 CE Contact Hours / 5 NBCC Clock Hours",
      credentialUrl: "https://www.nctsn.org/",
      category: "Crisis & Wellness",
      badgeIcon: "Shield",
      imagePath: "images/certificatePSYCHFIRSTAID-1.png",
      skills: ["Psychological First Aid", "Crisis Response", "Trauma Stress Mitigation", "Disaster Relief Support"],
      description: "Completed Psychological First Aid (PFA) Online training for crisis intervention, disaster response, and traumatic stress support."
    },
    {
      id: "cert-4",
      title: "Elements of AI - Certificate of Completion",
      issuer: "University of Helsinki & MinnaLearn",
      issueDate: "2026-09-30",
      expiryDate: "Never Expires",
      credentialId: "zaricm0nm1r",
      credentialUrl: "https://certificates.mooc.fi/validate/zaricm0nm1r",
      category: "AI & Tech",
      badgeIcon: "Cpu",
      imagePath: "images/certificateELEMENTSOFAI.png",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Ethics", "Neural Networks"],
      description: "Successfully completed the 2 ECTS credits online course covering artificial intelligence concepts, algorithms, machine learning models, and societal impacts."
    },
    {
      id: "cert-2",
      title: "HubSpot Salesforce Integration Certification",
      issuer: "HubSpot Academy",
      issueDate: "2026-09-29",
      expiryDate: "2027-10-29",
      credentialId: "f9ea628256294b1ca642d68bc7bdd17f",
      credentialUrl: "https://academy.hubspot.com/",
      category: "Marketing & CRM",
      badgeIcon: "Cloud",
      imagePath: "images/certificateHUBSPOTSALESFORCE.png",
      skills: ["Salesforce Integration", "HubSpot CRM", "System Maintenance", "Troubleshooting", "Data Sync"],
      description: "Certified as fully capable and skilled in installing, implementing, troubleshooting, and maintaining the Salesforce integration with HubSpot."
    },
    {
      id: "cert-1",
      title: "HubSpot Email Marketing Certified",
      issuer: "HubSpot Academy",
      issueDate: "2026-09-29",
      expiryDate: "2028-10-28",
      credentialId: "08ee7c9cdb6545b1b089eeefc7f7130c",
      credentialUrl: "https://academy.hubspot.com/",
      category: "Marketing & CRM",
      badgeIcon: "Award",
      imagePath: "images/certificateHUBSPOTEMAILS.png",
      skills: ["Email Strategy", "Audience Segmentation", "Email Design", "Deliverability", "A/B Testing"],
      description: "Certified in building an email marketing strategy to build trust, audience segmentation, high-performing email sends, design, and deliverability optimization."
    },
    {
      id: "cert-3",
      title: "Project Management Training (CBRE & Forage)",
      issuer: "CBRE & Forage",
      issueDate: "2026-09-30",
      expiryDate: "Never Expires",
      credentialId: "6abcae0ede68562c3ede3b50",
      credentialUrl: "https://www.theforage.com/",
      category: "Project Management",
      badgeIcon: "Award",
      imagePath: "images/certificatePROJECTMANAGEMENT-1.png",
      skills: ["Project Planning", "Executing & Monitoring", "Gantt Charts", "Task Tracking", "Resource Coordination"],
      description: "Statement of Completion for practical tasks in project planning, executing, tracking, and monitoring through CBRE's Project Management Job Simulation on Forage."
    },
    {
      id: "cert-5",
      title: "Introduction to Bookkeeping and Accounting",
      issuer: "OpenLearn | The Open University",
      issueDate: "2026-09-30",
      expiryDate: "Never Expires",
      credentialId: "Course Code: B190_1",
      credentialUrl: "https://www.open.edu/openlearn/money-business/introduction-bookkeeping-and-accounting/content-section-0",
      category: "Finance & Admin",
      badgeIcon: "Database",
      imagePath: "images/certificateBOOKKEEPING-1.png",
      skills: ["Double-Entry Bookkeeping", "Accounting Principles", "Financial Records", "Numerical Skills"],
      description: "Statement of Participation for completing an 8-hour course covering essential numerical skills required for accounting and bookkeeping including double-entry bookkeeping."
    },
    {
      id: "cert-7",
      title: "Typing Proficiency Certificate of Excellence",
      issuer: "TypingTest.me",
      issueDate: "2026-09-29",
      expiryDate: "Never Expires",
      credentialId: "Expert Verified",
      credentialUrl: "https://typingtest.me",
      category: "AI & Tech",
      badgeIcon: "Code",
      imagePath: "images/certificateTYPESPEEDPDF-1.png",
      skills: ["80+ WPM Typing Speed", "100% Accuracy Rate", "96% Consistency", "Fast Data Entry"],
      description: "Achieved Expert Typing Proficiency rating with 80+ WPM (Words Per Minute), 100% Precision Accuracy Rate, and 96% Stability Consistency."
    }
  ],
  skillsHighlights: [
    {
      id: "metric-typing",
      label: "Typing & Data Entry",
      value: "105 WPM / 100% Precision",
      subtext: "TypingTest.me Verified",
      icon: "Zap"
    },
    {
      id: "metric-english",
      label: "English Proficiency",
      value: "CEFR C1 Advanced",
      subtext: "C2 Reading & Listening (EF SET)",
      icon: "Globe"
    },
    {
      id: "metric-crm",
      label: "CRM & Pipelines",
      value: "Salesforce & HubSpot",
      subtext: "Accredited Integration & Sync",
      icon: "Database"
    },
    {
      id: "metric-ai",
      label: "AI-Augmented Stack",
      value: "ChatGPT, Claude & Gemini",
      subtext: "Univ. of Helsinki Certified",
      icon: "Sparkles"
    },
    {
      id: "metric-schedule",
      label: "Remote Availability",
      value: "08:00 AM – 05:00 AM EST",
      subtext: "US & UK Full Shift Ready",
      icon: "Clock"
    }
  ],
  skills: [
    {
      id: "admin-operations",
      category: "Executive & Administrative Operations",
      subtitle: "Virtual Assistance, Workflow Coordination & Documentation",
      icon: "Briefcase",
      badge: "Core Support",
      items: [
        "Executive & Virtual Assistance",
        "Calendar Management & Meeting Scheduling",
        "105 WPM / 100% Precision Data Entry",
        "Email Management & Inbox Triage",
        "Customer Service & Client Correspondence",
        "Project Task Tracking & Gantt Scheduling",
        "Psychological First Aid & Crisis Handling"
      ]
    },
    {
      id: "crm-finance",
      category: "CRM, Marketing & Business Systems",
      subtitle: "Enterprise Platforms, Automation & Financial Recordkeeping",
      icon: "Database",
      badge: "Accredited Systems",
      items: [
        "Salesforce CRM Integration & Data Sync",
        "HubSpot Inbound Marketing & Automation",
        "Email Campaign Deliverability & A/B Testing",
        "Audience Segmentation & Lead Hygiene",
        "Double-Entry Bookkeeping & Ledger Records",
        "Financial Recordkeeping & Invoicing Basics",
        "CBRE Project Management Simulation"
      ]
    },
    {
      id: "ai-productivity",
      category: "AI Tooling & Digital Productivity Stack",
      subtitle: "Prompt Engineering, Cloud Platforms & Collaboration",
      icon: "Sparkles",
      badge: "AI & Productivity",
      items: [
        "Prompt Engineering (ChatGPT, Claude, Gemini)",
        "Google Workspace (Docs, Sheets, Slides, Drive)",
        "Microsoft 365 (Word, Excel, PowerPoint, Outlook)",
        "Trello & Kanban Project Boards",
        "Remote Conferencing (Zoom, Google Meet, Slack)",
        "AI-Assisted Research & Documentation",
        "University of Helsinki AI Foundations"
      ]
    },
    {
      id: "creative-media",
      category: "Creative Media & Digital Content",
      subtitle: "Video Editing, Visual Design & Social Channel Management",
      icon: "Palette",
      badge: "Digital Production",
      items: [
        "Award-Winning Video Editing (Premiere Pro, CapCut)",
        "Adobe Photoshop Graphic Design",
        "Canva Pro Presentations & Marketing Collateral",
        "Social Media Management (TikTok, IG, FB, X)",
        "Short-Form Video Scripting & Formatting",
        "Audio Enhancement & Subtitle Synchronization"
      ]
    }
  ],
  remoteInfrastructure: [
    {
      icon: "Clock",
      title: "Work Hours & Shift Coverage",
      value: "08:00 AM – 05:00 AM EST",
      detail: "Full overlap with US (Eastern & Pacific) and UK business hours"
    },
    {
      icon: "Wifi",
      title: "Network Connectivity & Redundancy",
      value: "50 Mbps PLDT Fiber + Cellular Backup",
      detail: "Zero-downtime dual-channel connection with mobile hotspot failover"
    },
    {
      icon: "Laptop",
      title: "Hardware Rig & Workstation",
      value: "AMD Ryzen 5, NVIDIA RTX 2050, 16GB RAM",
      detail: "High-performance dual-display setup for multitasking and heavy rendering"
    },
    {
      icon: "Headphones",
      title: "Audio/Video & Environment",
      value: "Noise-Cancelling Headset + HD Webcam",
      detail: "Crystal-clear communications in a dedicated, quiet home office environment"
    }
  ]
};

export function loadPortfolioData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (err) {
    console.error("Failed to load portfolio data from localStorage", err);
  }
  return initialPortfolioData;
}
