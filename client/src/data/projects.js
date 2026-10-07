/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Projects Architecture & Register
 * Source: BBCI Official Constitution (Article VII, IX.3, X.2)
 */

import { LOCAL_PLACEHOLDER_IMAGE, PLACEHOLDER_IMAGE } from './organization';

export const PROJECT_GOVERNANCE = {
  rule1: "Project groups are strictly separated; no member may treat two groups as one.",
  rule2: "Each project group may run only one project at a time.",
  rule3: "Each project group is led by exactly one Project Leader operating under regional supervision.",
  rule4: "Project proposals, budgets, and milestones must be formally verified prior to funding allocation.",
  rule5: "Joint credit: BBCI carries joint and inseparable credit alongside actual creators on all outputs.",
  rule6: "Royalty share: 70% to actual creators, 30% to BBCI for institutional sustainment.",
};

/**
 * Projects Register
 * In compliance with the Constitution, no fabricated projects are presented as historical facts.
 * Structured placeholders demonstrate the exact production data schema for upcoming approved projects.
 */
export const PROJECT_CATEGORIES = [
  "All Disciplines",
  "Artificial Intelligence & Systems",
  "Computational Biology",
  "Distributed Networks",
  "Applied Mathematics",
  "Open Hardware & Robotics"
];

export const PROJECTS_DATA = [
  // Empty active list:
  // In accordance with Section 3 and 16 of the BBCI instructions, actual project rosters
  // are populated as project proposals complete the verification and funding review.
];

export const PLACEHOLDER_PROJECT_TEMPLATE = {
  id: "template-notice",
  isPlaceholderNotice: true,
  title: "Project Registry Initializing",
  subtitle: "Collaborative Project Architecture",
  description: "Official collaborative project groups are established under designated Regional Heads and confirmed by the Founding Members. When groups are formed and their proposals verified, active research repositories, progress logs, and creator attributions will be indexed here.",
  image: LOCAL_PLACEHOLDER_IMAGE,
  fallbackImage: PLACEHOLDER_IMAGE,
  status: "Registry Open for Proposals",
  disciplines: ["Interdisciplinary", "Applied Sciences", "Systems Engineering"],
  governanceArticle: "Collaborative Governance"
};
