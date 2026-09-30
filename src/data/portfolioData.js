/**
 * Portfolio Data Module
 * Authentic Information & Accredited Credentials for Elijah Exconde
 */

const STORAGE_KEY = 'my_react_portfolio_data_v9';

export const initialPortfolioData = {
  profile: {
    name: "Elijah Exconde",
    title: "Freelance Worker",
    bio: "Detail-oriented Freelance Worker with hands-on coursework and practical skills in administrative support, project task tracking, Gantt scheduling, financial recordkeeping, customer communication, video editing, and AI productivity tools. Holds verified course completions and certificates in CBRE Project Management, Psychological First Aid, Bookkeeping & Accounting Fundamentals, HubSpot CRM, and Salesforce Integrations. Dedicated to delivering reliable, high-quality operational support.",
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
  skills: [
    {
      category: "Verified Credentials & Coursework",
      items: [
        "CBRE Project Management Simulation (Forage)",
        "HubSpot Accredited Email Marketer",
        "Salesforce CRM Integration Specialist",
        "University of Helsinki AI Foundations",
        "OpenLearn Bookkeeping & Accounting Coursework",
        "NCTSN Psychological First Aid Trained",
        "105 WPM / 100% Accuracy Data Entry"
      ]
    },
    {
      category: "Administrative & Operations",
      items: [
        "Administrative Support",
        "Project Task Tracking & Gantt Scheduling",
        "Data Entry & Record Management",
        "Calendar & Meeting Scheduling",
        "Financial Recordkeeping Basics",
        "Customer Service & Communication"
      ]
    },
    {
      category: "AI & Software Tools",
      items: [
        "ChatGPT",
        "Gemini",
        "Claude",
        "Canva AI",
        "Google Workspace (Docs, Sheets, Slides)",
        "Microsoft 365 (Word, Excel, PowerPoint)",
        "Trello & Gantt Charts",
        "Zoom & Google Meet"
      ]
    },
    {
      category: "Design & Content Production",
      items: [
        "Award-Winning Video Editing (CapCut & Premiere Pro)",
        "Adobe Photoshop",
        "Canva Graphic Design",
        "Social Media Content Management (Instagram, TikTok, X, Facebook)"
      ]
    },
    {
      category: "Remote Work Readiness & Environment",
      items: [
        "Available Hours: 08:00AM - 05:00AM EST",
        "US & UK Time Zone Coverage",
        "Primary PLDT Fiber 50 Mbps + Backup Hotspot",
        "Personal Workstation (Ryzen 5, RTX 2050, 16GB RAM)",
        "Noise-Cancelling Headset & Web Camera"
      ]
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
