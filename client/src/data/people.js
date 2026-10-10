/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Leadership & Council Fellows Directory
 */

import { PLACEHOLDER_IMAGE, LOCAL_PLACEHOLDER_IMAGE } from './organization';

export const FOUNDING_MEMBERS = [
  {
    id: "founder-1",
    name: "Sk Azmain Zunaeid",
    role: "Founder",
    type: "Founder",
    executiveRole: "President",
    image: LOCAL_PLACEHOLDER_IMAGE,
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
    image: LOCAL_PLACEHOLDER_IMAGE,
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
    image: LOCAL_PLACEHOLDER_IMAGE,
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
    image: LOCAL_PLACEHOLDER_IMAGE,
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
    image: LOCAL_PLACEHOLDER_IMAGE,
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
    image: LOCAL_PLACEHOLDER_IMAGE,
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
    image: LOCAL_PLACEHOLDER_IMAGE,
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
    image: LOCAL_PLACEHOLDER_IMAGE,
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
    image: LOCAL_PLACEHOLDER_IMAGE
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
