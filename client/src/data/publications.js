/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Research & Publications Repository
 * Source: BBCI Official Constitution (Article VII.2, VII.4 & VIII.1)
 */

import { LOCAL_PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE } from './organization';

export const RESEARCH_CATEGORIES = [
  "All Publications",
  "Research Papers",
  "Technical Reports",
  "Patents & Inventions",
  "Constitutional & Governance Documents",
  "White Papers"
];

export const RESEARCH_MILESTONES = {
  biAnnualTarget: "Minimum 1 research paper published and 1 project completed every 6 months.",
  governingOfficial: "Monitored and maintained by the Research and Publications Secretary (Abu Sufian Ratul).",
  jointCreditMandate: "Mandatory joint BBCI affiliation and credit alongside all contributing authors.",
  royaltyTerms: "70% to authors / inventors, 30% to Council institutional fund."
};

/**
 * Publications Data
 * The BBCI Constitution is the first supreme official institutional publication (Ref: BBCI/2026/OFFICIAL/1).
 * Additional peer-reviewed research papers and patents are added upon formal approval by the Executive Committee.
 */
export const PUBLICATIONS_DATA = [
  {
    id: "bbci-constitution-2026",
    title: "Binary Brains Council of Intellects Official Constitution",
    referenceNumber: "BBCI/2026/OFFICIAL/1",
    category: "Constitutional & Governance Documents",
    year: "2026",
    date: "02 October 2026",
    authors: [
      "Sk Azmain Zunaeid (Founder)",
      "Md Delower Sarker (Co-Founder)",
      "Tahmid Ibne Mofazzol (Co-Founder)",
      "Syeda Zawada Farah (Co-Founder)",
      "Md Maruf Mia (Co-Founder)",
      "Maher Afruz Mira (Co-Founder)",
      "Md Tahamid Hassan Sadib (Co-Founder)",
      "Abu Sufian Ratul (Co-Founder)"
    ],
    abstract: "The supreme governing document of the Binary Brains Council of Intellects (BBCI). Formally constitutes the Council's identity, vision, mission, membership criteria, executive hierarchy, regional and project group structure, intellectual property policy (70/30 distribution), recurring programs, code of conduct, and ratification.",
    status: "Officially Adopted & Effective",
    pdfAvailable: true,
    pdfLink: "#constitution-viewer",
    image: LOCAL_PLACEHOLDER_IMAGE,
    fallbackImage: PLACEHOLDER_IMAGE,
    affiliation: "Binary Brains Council of Intellects"
  }
];
