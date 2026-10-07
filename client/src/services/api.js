/**
 * BINARY BRAINS COUNCIL OF INTELLECTS (BBCI)
 * Backend Integration Service Layer
 * Designed for future endpoints served by the /server module
 */

import { FOUNDING_MEMBERS, EXECUTIVE_COMMITTEE } from '../data/people';
import { PROJECTS_DATA } from '../data/projects';
import { PUBLICATIONS_DATA } from '../data/publications';
import { RECURRING_SCHEDULE, UPCOMING_EVENTS } from '../data/activities';
import { BBCI_ORG } from '../data/organization';
import { CONSTITUTION_ARTICLES, CONSTITUTION_META } from '../data/constitution';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

/**
 * Service Layer abstraction.
 * Currently serves constitutionally verified local registries.
 * Ready to switch to remote server endpoints seamlessly when /server routes are connected.
 */
export const ApiService = {
  // Organization Metadata
  async getOrganizationInfo() {
    try {
      // Future integration: const res = await fetch(`${API_BASE_URL}/organization`); return await res.json();
      return BBCI_ORG;
    } catch (err) {
      console.warn("Falling back to local organizational records:", err);
      return BBCI_ORG;
    }
  },

  // People & Leadership
  async getFoundingMembers() {
    try {
      return FOUNDING_MEMBERS;
    } catch (err) {
      console.warn("Falling back to local founding member records:", err);
      return FOUNDING_MEMBERS;
    }
  },

  async getExecutiveCommittee() {
    try {
      return EXECUTIVE_COMMITTEE;
    } catch (err) {
      console.warn("Falling back to local executive committee records:", err);
      return EXECUTIVE_COMMITTEE;
    }
  },

  // Projects Registry
  async getProjects() {
    try {
      return PROJECTS_DATA;
    } catch (err) {
      console.warn("Falling back to local project records:", err);
      return PROJECTS_DATA;
    }
  },

  // Research & Publications
  async getPublications() {
    try {
      return PUBLICATIONS_DATA;
    } catch (err) {
      console.warn("Falling back to local publication records:", err);
      return PUBLICATIONS_DATA;
    }
  },

  // Activities & Events
  async getSchedule() {
    try {
      return RECURRING_SCHEDULE;
    } catch (err) {
      console.warn("Falling back to local schedule records:", err);
      return RECURRING_SCHEDULE;
    }
  },

  async getUpcomingEvents() {
    try {
      return UPCOMING_EVENTS;
    } catch (err) {
      console.warn("Falling back to local events records:", err);
      return UPCOMING_EVENTS;
    }
  },

  // Constitution
  async getConstitution() {
    try {
      return {
        meta: CONSTITUTION_META,
        articles: CONSTITUTION_ARTICLES
      };
    } catch (err) {
      console.warn("Falling back to local constitution records:", err);
      return { meta: CONSTITUTION_META, articles: CONSTITUTION_ARTICLES };
    }
  },

  // Membership & Contact Submissions (Frontend contract for future backend)
  async submitMembershipInquiry(formData) {
    // When backend endpoint is active:
    // return await fetch(`${API_BASE_URL}/membership/inquiry`, { method: 'POST', body: JSON.stringify(formData) });
    return {
      success: true,
      mode: "client-preview",
      message: "Membership inquiry staged. When server endpoints are activated, this inquiry transmits to binarybrains.bbci@gmail.com.",
      data: formData
    };
  },

  async submitContactMessage(formData) {
    // When backend endpoint is active:
    // return await fetch(`${API_BASE_URL}/contact`, { method: 'POST', body: JSON.stringify(formData) });
    return {
      success: true,
      mode: "client-preview",
      message: "Message prepared. Connects to server email gateway upon deployment.",
      data: formData
    };
  }
};
