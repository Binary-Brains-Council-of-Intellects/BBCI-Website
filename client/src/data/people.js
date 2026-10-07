/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Leadership & People Directory
 * Source: BBCI Official Constitution (Article V.1 & Annex A)
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
    responsibility: "Presides over the Founding Members, supervises all activities of the Council, chairs all meetings, authorizes organizational documents, and resolves internal and external conflicts.",
    isFounder: true
  },
  {
    id: "founder-2",
    name: "Md Delower Sarker",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "General Secretary & SMM II (Interim)",
    image: LOCAL_PLACEHOLDER_IMAGE,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Bridges communication between the President and members, supervises Council activities alongside the President, implements directives, verifies documents, and manages video channels (Facebook, Instagram, YouTube).",
    isFounder: false
  },
  {
    id: "founder-3",
    name: "Tahmid Ibne Mofazzol",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Social Media Manager I (SMM I)",
    image: LOCAL_PLACEHOLDER_IMAGE,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Oversees official digital channels including Website, LinkedIn, and X (Twitter), primarily responsible for broad-form editorial content and image assets.",
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
    responsibility: "Hosts official council programs, anchors events, gives media interviews on behalf of the Council, and coordinates creative content production.",
    isFounder: false
  },
  {
    id: "founder-5",
    name: "Md Maruf Mia",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Representative",
    image: LOCAL_PLACEHOLDER_IMAGE,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Prepares external proposals, conducts institutional negotiations, secures sponsorships and grants, and identifies strategic avenues for collaboration.",
    isFounder: false
  },
  {
    id: "founder-6",
    name: "Maher Afruz Mira",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Treasurer I",
    image: LOCAL_PLACEHOLDER_IMAGE,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Jointly manages Council financial activities, tracks membership dues, disburses approved project funds, and archives all fiscal transaction records.",
    isFounder: false
  },
  {
    id: "founder-7",
    name: "Md Tahamid Hassan Sadib",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Treasurer II",
    image: LOCAL_PLACEHOLDER_IMAGE,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Jointly oversees financial administration, maintains ledger transparency, audits project allocations, and prepares bi-annual fiscal summaries.",
    isFounder: false
  },
  {
    id: "founder-8",
    name: "Abu Sufian Ratul",
    role: "Co-Founder",
    type: "Co-Founder",
    executiveRole: "Research and Publications Secretary",
    image: LOCAL_PLACEHOLDER_IMAGE,
    fallbackImage: PLACEHOLDER_IMAGE,
    responsibility: "Monitors progress of research papers, projects, and patent filings across all project groups; maintains the official IP and publications register; enforces joint BBCI credit.",
    isFounder: false
  }
];

export const EXECUTIVE_COMMITTEE = [
  {
    position: "President",
    officeHolder: "Sk Azmain Zunaeid",
    reportsTo: "Founding Members",
    responsibilities: [
      "Supervising all activities of the Council",
      "Authorizing all organizational documents",
      "Resolving internal and external conflicts",
      "Chairing all meetings of the Council"
    ],
    tier: 1,
    image: LOCAL_PLACEHOLDER_IMAGE
  },
  {
    position: "General Secretary",
    officeHolder: "Md Delower Sarker",
    reportsTo: "President",
    responsibilities: [
      "Bridging communication between President and members",
      "Supervising Council operations alongside President",
      "Assuming duties of President during absence",
      "Verifying & authorizing organizational documents jointly",
      "Recording and archiving all minutes and resolutions"
    ],
    tier: 2,
    image: LOCAL_PLACEHOLDER_IMAGE
  },
  {
    position: "Media Secretary",
    officeHolder: "Syeda Zawada Farah",
    reportsTo: "President",
    responsibilities: [
      "Hosting all Council programs and public ceremonies",
      "Producing and coordinating institutional media content",
      "Giving authorized interviews on behalf of BBCI",
      "Anchoring official events and symposiums"
    ],
    tier: 3,
    image: LOCAL_PLACEHOLDER_IMAGE
  },
  {
    position: "Representative",
    officeHolder: "Md Maruf Mia",
    reportsTo: "President",
    responsibilities: [
      "Preparing and submitting external proposals",
      "Securing funding, donations, and corporate sponsorships",
      "Conducting partnership negotiations on behalf of the Council",
      "Submitting collaboration agreements to Executive Committee"
    ],
    tier: 3,
    image: LOCAL_PLACEHOLDER_IMAGE
  },
  {
    position: "Treasurer I",
    officeHolder: "Maher Afruz Mira",
    reportsTo: "General Secretary",
    responsibilities: [
      "Jointly managing Council accounts and financial activities",
      "Archiving all financial receipts and ledgers",
      "Disbursing funds for approved project grants",
      "Receiving unspent project balances"
    ],
    tier: 3,
    image: LOCAL_PLACEHOLDER_IMAGE
  },
  {
    position: "Treasurer II",
    officeHolder: "Md Tahamid Hassan Sadib",
    reportsTo: "General Secretary",
    responsibilities: [
      "Jointly managing financial administration and records",
      "Auditing project group expenditures and receipts",
      "Maintaining bi-annual fiscal summary transparency",
      "Managing membership fee registers"
    ],
    tier: 3,
    image: LOCAL_PLACEHOLDER_IMAGE
  },
  {
    position: "Social Media Manager I (SMM I)",
    officeHolder: "Tahmid Ibne Mofazzol",
    reportsTo: "General Secretary",
    responsibilities: [
      "Managing Website, LinkedIn, and X (Twitter)",
      "Primarily responsible for image posts and editorial copy",
      "Adjusting professional tone for formal channels",
      "Responding to community queries across platforms"
    ],
    tier: 3,
    image: LOCAL_PLACEHOLDER_IMAGE
  },
  {
    position: "Social Media Manager II (SMM II)",
    officeHolder: "Md Delower Sarker",
    reportsTo: "General Secretary (Supervised by President per Art. IV.5)",
    note: "Holds SMM II concurrently on an interim basis",
    responsibilities: [
      "Managing Facebook, Instagram, and YouTube",
      "Primarily responsible for video posts and broad media",
      "Adapting content for video and visual engagement",
      "Monitoring audience reach and engagement analytics"
    ],
    tier: 3,
    image: LOCAL_PLACEHOLDER_IMAGE
  },
  {
    position: "Research & Publications Secretary",
    officeHolder: "Abu Sufian Ratul",
    reportsTo: "General Secretary",
    responsibilities: [
      "Tracking research progress, papers, and patent filings",
      "Enforcing joint BBCI credit on all intellectual output",
      "Maintaining the official publications and IP register",
      "Reporting research output at least once every six months"
    ],
    tier: 3,
    image: LOCAL_PLACEHOLDER_IMAGE
  }
];

// Scalable Annex B Architecture
export const REGIONAL_STRUCTURE_STATUS = {
  isPopulated: false,
  message: "Regional Heads, Assistant Heads, and Project Groups are established and appointed by resolution of the Founding Members as the international presence expands. No arbitrary designations are manufactured.",
  hierarchy: [
    "President & General Secretary",
    "Regional Heads",
    "Regional Assistant Heads",
    "Project Leaders",
    "Project Members"
  ],
  annexBTemplate: [
    {
      region: "To be designated",
      regionalHead: "To be appointed",
      assistantHead: "To be appointed",
      projectGroup: "To be designated",
      projectLeader: "To be appointed",
      projectMembers: "To be listed"
    },
    {
      region: "To be designated",
      regionalHead: "To be appointed",
      assistantHead: "To be appointed",
      projectGroup: "To be designated",
      projectLeader: "To be appointed",
      projectMembers: "To be listed"
    }
  ]
};
