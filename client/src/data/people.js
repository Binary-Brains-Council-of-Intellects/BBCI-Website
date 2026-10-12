/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Leadership & Council Fellows Directory
 */

import { PLACEHOLDER_IMAGE } from './organization';

export const MEMBER_PHOTOS = {
  "Sk Azmain Zunaeid": {
    url: "https://i.ibb.co.com/SgzRQXy/Professional-Profile-Picture-for-Binary-Brains-of-Sk-Azmain-Zunaeid-JPG-jpg.jpg",
    alt: "Professional-Profile-Picture-for-Binary-Brains-of-Sk-Azmain-Zunaeid-JPG-jpg"
  },
  "Md Delower Sarker": {
    url: "https://i.ibb.co.com/mV82kmMC/Professional-Profile-Picture-for-Binary-Brains-of-Md-Delower-Sarker-JPG-jpg.jpg",
    alt: "Professional-Profile-Picture-for-Binary-Brains-of-Md-Delower-Sarker-JPG-jpg"
  },
  "Tahmid Ibne Mofazzol": {
    url: "https://i.ibb.co.com/KxFPj0jz/Professional-Profile-Picture-for-Binary-Brains-of-Tahmid-Ibne-Mofazzol-JPG-jpg.jpg",
    alt: "Professional-Profile-Picture-for-Binary-Brains-of-Tahmid-Ibne-Mofazzol-JPG-jpg"
  },
  "Syeda Zawada Farah": {
    url: "https://i.ibb.co.com/HLfFWtRR/Professional-Profile-Picture-for-Binary-Brains-of-Syeda-Zawada-Farah-JPG-jpg.jpg",
    alt: "Professional-Profile-Picture-for-Binary-Brains-of-Syeda-Zawada-Farah-JPG-jpg"
  },
  "Md Maruf Mia": {
    url: "https://i.ibb.co.com/C3B4qC2Z/Professional-Profile-Picture-for-Binary-Brains-of-Md-Maruf-Mia-JPG-jpg.jpg",
    alt: "Professional-Profile-Picture-for-Binary-Brains-of-Md-Maruf-Mia-JPG-jpg"
  },
  "Maher Afruz Mira": {
    url: "https://i.ibb.co.com/h1R4tG5z/Professional-Profile-Picture-for-Binary-Brains-of-Maher-Afruz-Mira-JPG-jpg.jpg",
    alt: "Professional-Profile-Picture-for-Binary-Brains-of-Maher-Afruz-Mira-JPG-jpg"
  },
  "Md Tahamid Hassan Sadib": {
    url: "https://i.ibb.co.com/m539SYtv/Professional-Profile-Picture-for-Binary-Brains-of-Md-Tahamid-Hassan-Sadib-JPG-jpg.jpg",
    alt: "Professional-Profile-Picture-for-Binary-Brains-of-Md-Tahamid-Hassan-Sadib-JPG-jpg"
  },
  "Abu Sufian Ratul": {
    url: "https://i.ibb.co.com/4Rh1h9Fv/Professional-Profile-Picture-for-Binary-Brains-of-Abu-Sufian-ratul-JPG-jpg.jpg",
    alt: "Professional-Profile-Picture-for-Binary-Brains-of-Abu-Sufian-ratul-JPG-jpg"
  }
};

export const FOUNDING_MEMBERS = [
  {
    id: "founder-1",
    name: "Sk Azmain Zunaeid",
    role: "Founder",
    type: "Founder",
    executiveRole: "President",
    image: MEMBER_PHOTOS["Sk Azmain Zunaeid"].url,
    imageAlt: MEMBER_PHOTOS["Sk Azmain Zunaeid"].alt,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Spearheads BBCI's global vision and scientific direction, chairs council deliberations, oversees institutional strategy, and leads international research governance.",
    isFounder: true
  },
  {
    id: "founder-2",
    name: "Md Delower Sarker",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "General Secretary & Head of Media Operations",
    image: MEMBER_PHOTOS["Md Delower Sarker"].url,
    imageAlt: MEMBER_PHOTOS["Md Delower Sarker"].alt,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Directs organizational operations, coordinates cross-division initiatives, manages institutional documentation, and leads video & broadcast outreach.",
    isFounder: false
  },
  {
    id: "founder-3",
    name: "Tahmid Ibne Mofazzol",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Head of Digital Presence & Editorial (SMM I)",
    image: MEMBER_PHOTOS["Tahmid Ibne Mofazzol"].url,
    imageAlt: MEMBER_PHOTOS["Tahmid Ibne Mofazzol"].alt,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Leads BBCI's official web platform, LinkedIn, and X presence, curating technical editorials, research announcements, and visual brand communications.",
    isFounder: false
  },
  {
    id: "founder-4",
    name: "Syeda Zawada Farah",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Media Secretary",
    image: MEMBER_PHOTOS["Syeda Zawada Farah"].url,
    imageAlt: MEMBER_PHOTOS["Syeda Zawada Farah"].alt,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Chairs public symposiums and global broadcasts, serves as the official spokesperson for media engagements, and directs creative program production.",
    isFounder: false
  },
  {
    id: "founder-5",
    name: "Md Maruf Mia",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Director of External Relations & Partnerships",
    image: MEMBER_PHOTOS["Md Maruf Mia"].url,
    imageAlt: MEMBER_PHOTOS["Md Maruf Mia"].alt,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Forges strategic partnerships with external laboratories, universities, and industry sponsors, and leads institutional grant and fellowship proposals.",
    isFounder: false
  },
  {
    id: "founder-6",
    name: "Maher Afruz Mira",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Treasurer I (Research Grants & Finance)",
    image: MEMBER_PHOTOS["Maher Afruz Mira"].url,
    imageAlt: MEMBER_PHOTOS["Maher Afruz Mira"].alt,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Co-manages the BBCI Research Endowment, oversees project grant disbursements, and maintains transparent institutional financial stewardship.",
    isFounder: false
  },
  {
    id: "founder-7",
    name: "Md Tahamid Hassan Sadib",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Treasurer II (Fiscal Strategy & Audits)",
    image: MEMBER_PHOTOS["Md Tahamid Hassan Sadib"].url,
    imageAlt: MEMBER_PHOTOS["Md Tahamid Hassan Sadib"].alt,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Co-directs fiscal planning, audits research group budgets, oversees membership endowment sustainability, and prepares semi-annual financial reports.",
    isFounder: false
  },
  {
    id: "founder-8",
    name: "Abu Sufian Ratul",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Research & Publications Secretary",
    image: MEMBER_PHOTOS["Abu Sufian Ratul"].url,
    imageAlt: MEMBER_PHOTOS["Abu Sufian Ratul"].alt,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Directs the BBCI Publications Repository, tracks bi-annual research and patent milestones across all labs, and safeguards creator IP attribution.",
    isFounder: false
  }
];

export const EXECUTIVE_COMMITTEE = [
  {
    position: "President",
    officeHolder: "Sk Azmain Zunaeid",
    division: "Executive Presidency",
    responsibilities: [
      "Guiding overall scientific, technical, and institutional strategy",
      "Chairing weekly global colloquia and monthly symposiums",
      "Authorizing institutional charters and research partnerships",
      "Fostering cross-disciplinary collaboration across all divisions"
    ],
    tier: 1,
    image: MEMBER_PHOTOS["Sk Azmain Zunaeid"].url,
    imageAlt: MEMBER_PHOTOS["Sk Azmain Zunaeid"].alt
  },
  {
    position: "General Secretary",
    officeHolder: "Md Delower Sarker",
    division: "Secretariat & Operations",
    responsibilities: [
      "Synchronizing operations across executive divisions and research labs",
      "Co-authorizing institutional initiatives and official records",
      "Overseeing program execution, symposium logistics, and archives",
      "Facilitating seamless communication across the global membership"
    ],
    tier: 2,
    image: MEMBER_PHOTOS["Md Delower Sarker"].url,
    imageAlt: MEMBER_PHOTOS["Md Delower Sarker"].alt
  },
  {
    position: "Research & Publications Secretary",
    officeHolder: "Abu Sufian Ratul",
    division: "Research & Intellectual Property",
    responsibilities: [
      "Overseeing peer-reviewed research pipelines and working papers",
      "Coordinating patent filings and the 70/30 creator royalty framework",
      "Maintaining the official BBCI Digital Publications Repository",
      "Leading semi-annual research milestone reviews across project groups"
    ],
    tier: 3,
    image: MEMBER_PHOTOS["Abu Sufian Ratul"].url,
    imageAlt: MEMBER_PHOTOS["Abu Sufian Ratul"].alt
  },
  {
    position: "Representative (External Relations)",
    officeHolder: "Md Maruf Mia",
    division: "Global Partnerships & Grants",
    responsibilities: [
      "Cultivating alliances with universities, research labs, and industry",
      "Securing external research funding, sponsorships, and endowments",
      "Representing BBCI in inter-organizational memorandums",
      "Identifying global opportunities for collaborative innovation"
    ],
    tier: 3,
    image: MEMBER_PHOTOS["Md Maruf Mia"].url,
    imageAlt: MEMBER_PHOTOS["Md Maruf Mia"].alt
  },
  {
    position: "Media Secretary",
    officeHolder: "Syeda Zawada Farah",
    division: "Public Programs & Broadcasts",
    responsibilities: [
      "Hosting flagship symposiums, seminars, and annual innovation fests",
      "Directing academic documentary and multimedia production",
      "Leading press interviews and external public communications",
      "Curating keynote dialogues with visiting scholars"
    ],
    tier: 3,
    image: MEMBER_PHOTOS["Syeda Zawada Farah"].url,
    imageAlt: MEMBER_PHOTOS["Syeda Zawada Farah"].alt
  },
  {
    position: "Treasurer I",
    officeHolder: "Maher Afruz Mira",
    division: "Endowment & Project Grants",
    responsibilities: [
      "Managing institutional accounts and research endowment funds",
      "Allocating approved grants to active engineering & research teams",
      "Maintaining transparent financial ledgers and grant records",
      "Supporting sustainable funding for student and fellow innovations"
    ],
    tier: 3,
    image: MEMBER_PHOTOS["Maher Afruz Mira"].url,
    imageAlt: MEMBER_PHOTOS["Maher Afruz Mira"].alt
  },
  {
    position: "Treasurer II",
    officeHolder: "Md Tahamid Hassan Sadib",
    division: "Fiscal Governance & Auditing",
    responsibilities: [
      "Overseeing project budget compliance and expenditure audits",
      "Managing member contributions and event financial operations",
      "Preparing semi-annual institutional financial transparency reports",
      "Optimizing resource allocation for laboratory hardware and compute"
    ],
    tier: 3,
    image: MEMBER_PHOTOS["Md Tahamid Hassan Sadib"].url,
    imageAlt: MEMBER_PHOTOS["Md Tahamid Hassan Sadib"].alt
  },
  {
    position: "Digital & Editorial Lead (SMM I)",
    officeHolder: "Tahmid Ibne Mofazzol",
    division: "Digital Platform & Communications",
    responsibilities: [
      "Directing the official BBCI web portal, LinkedIn, and X channels",
      "Publishing research briefs, technical articles, and visual assets",
      "Maintaining brand integrity across global scholarly networks",
      "Engaging the international community of researchers and students"
    ],
    tier: 3,
    image: MEMBER_PHOTOS["Tahmid Ibne Mofazzol"].url,
    imageAlt: MEMBER_PHOTOS["Tahmid Ibne Mofazzol"].alt
  },
  {
    position: "Multimedia & Video Lead (SMM II)",
    officeHolder: "Md Delower Sarker",
    division: "Broadcast & Video Channels",
    note: "Concurrent Leadership",
    responsibilities: [
      "Directing YouTube, Facebook, and Instagram video broadcasts",
      "Publishing recorded symposiums, technical talks, and lab demos",
      "Expanding global reach through accessible science communication",
      "Analyzing audience engagement across multimedia platforms"
    ],
    tier: 3,
    image: MEMBER_PHOTOS["Md Delower Sarker"].url,
    imageAlt: MEMBER_PHOTOS["Md Delower Sarker"].alt
  }
];

export const REGIONAL_STRUCTURE_STATUS = {
  isPopulated: true,
  hierarchy: [
    "Executive Presidency & Secretariat",
    "Regional Chapter Directors",
    "Associate Regional Leads",
    "Principal Project Investigators (Project Leaders)",
    "Research & Engineering Fellows"
  ],
  chapters: [
    {
      region: "South Asia Flagship Hub (Bangladesh)",
      focus: "Core Executive Operations, ESRC Monthly Symposiums, AI & Distributed Systems Labs",
      status: "Active Headquarters"
    },
    {
      region: "Global Virtual Research Network",
      focus: "Borderless Online Colloquia, Collaborative Cloud Compute & Cross-Institutional Papers",
      status: "Active Global Node"
    },
    {
      region: "University & Institutional Chapters",
      focus: "Campus Research Groups, Hackathon Teams & Undergraduate Innovation Tracks",
      status: "Expanding Chapters"
    }
  ]
};
