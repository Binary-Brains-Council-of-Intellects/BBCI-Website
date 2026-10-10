import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { BBCI_ORG } from '../data/organization';
import { ApiService } from '../services/api';

export default function Membership() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    academicBackground: '',
    primaryDiscipline: 'Computer Science & Systems',
    curiosityStatement: '',
    commitmentAgreement: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.commitmentAgreement) {
      alert("Please confirm your agreement to BBCI's research ethics and membership terms.");
      return;
    }

    setSubmitting(true);
    setSubmissionResult(null);

    try {
      await ApiService.submitMembershipInquiry(formData);
      setSubmissionResult({
        type: 'success',
        message: 'Your membership application has been received. Our admissions committee reviews prospective fellows based on intellectual curiosity, technical capability, and research alignment.'
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        academicBackground: '',
        primaryDiscipline: 'Computer Science & Systems',
        curiosityStatement: '',
        commitmentAgreement: false
      });
    } catch (err) {
      setSubmissionResult({
        type: 'error',
        message: 'Unable to process application at this moment. Please email binarybrains.bbci@gmail.com directly.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Global Fellowship &amp; Membership"
        title="Join the Binary Brains Council of Intellects"
        description="Connect with researchers, engineers, and scholars worldwide. Collaborate on interdisciplinary projects, publish peer-reviewed papers, and innovate together."
        breadcrumbs={[{ label: 'Membership' }]}
      />

      {/* 1. Eligibility & Membership Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Eligibility & Tiers */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
                Who Can Join
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Merit-Based Global Admission
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-editorial leading-relaxed">
                {BBCI_ORG.membership.eligibility}
              </p>
            </div>

            {/* Membership Categories */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Council Membership Tiers:
              </h3>
              <div className="grid grid-cols-1 gap-3.5">
                {BBCI_ORG.membership.categories.map((cat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-slate-900">
                        {cat.name}
                      </span>
                      {cat.badge && (
                        <span className="text-[10px] font-mono font-semibold text-bbci-indigo bg-white px-2 py-0.5 rounded border border-slate-200">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-600 leading-relaxed font-sans block">
                      {cat.details}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Membership Dues & Endowment Contribution */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-bbci-magenta font-bold">
                Member Dues &amp; Endowment
              </span>
              <span className="text-[11px] font-mono text-slate-400">Non-Profit Sustainment</span>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  One-Time Registration
                </span>
                <div className="text-3xl font-extrabold text-white">
                  {BBCI_ORG.membership.fees.registration}
                </div>
                <p className="text-xs text-slate-300 font-editorial">
                  {BBCI_ORG.membership.fees.registrationNote}
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Monthly Council Contribution
                </span>
                <div className="text-3xl font-extrabold text-white">
                  {BBCI_ORG.membership.fees.monthly}
                </div>
                <p className="text-xs text-slate-300 font-editorial">
                  {BBCI_ORG.membership.fees.monthlyNote}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-editorial leading-relaxed border-t border-slate-800 pt-3">
              {BBCI_ORG.membership.fees.constitutionalNote}
            </p>
          </div>

        </div>
      </section>

      {/* 2. Fellowship Benefits & Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Benefits */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
              <Icon name="FiCheckCircle" className="w-4 h-4 text-bbci-teal" />
              <span>Member Benefits</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Fellowship Privileges &amp; Opportunities
            </h3>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              {BBCI_ORG.membership.rights.map((right, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-bbci-indigo font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commitments */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-bbci-magenta">
              <Icon name="FiShield" className="w-4 h-4 text-bbci-magenta" />
              <span>Community Standards</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Fellowship Commitments &amp; Ethics
            </h3>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              {BBCI_ORG.membership.obligations.map((obligation, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span>{obligation}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 text-xs font-editorial text-slate-500">
              All fellows uphold the highest standards of scientific integrity, open inquiry, and collaborative professionalism.
            </div>
          </div>

        </div>
      </section>

      {/* 3. Membership Application Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Online Application"
          title="Apply for BBCI Membership"
          description="Submit your academic or technical background and research interests to be considered for admission into the Binary Brains Council of Intellects."
        />

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          {submissionResult && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-3">
              <Icon name="FiCheckCircle" className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{submissionResult.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  University / Research Institution / Organization
                </label>
                <input
                  type="text"
                  value={formData.academicBackground}
                  onChange={(e) => setFormData({ ...formData, academicBackground: e.target.value })}
                  placeholder="Affiliation or department"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Research / Technical Domain *
                </label>
                <select
                  value={formData.primaryDiscipline}
                  onChange={(e) => setFormData({ ...formData, primaryDiscipline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo bg-white"
                >
                  <option value="Computer Science & Systems">Artificial Intelligence &amp; Cognitive Systems</option>
                  <option value="Distributed Computing">Systems Engineering &amp; Distributed Computing</option>
                  <option value="Mathematics & Logic">Computational Sciences &amp; Applied Mathematics</option>
                  <option value="Engineering & Robotics">Robotics, Autonomous Systems &amp; Hardware</option>
                  <option value="Biotechnology & Medicine">Bioinformatics &amp; Frontier Sciences</option>
                  <option value="Interdisciplinary Innovation">Interdisciplinary Innovation &amp; Policy</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Research Interests &amp; Collaborative Statement *
              </label>
              <textarea
                rows="4"
                required
                value={formData.curiosityStatement}
                onChange={(e) => setFormData({ ...formData, curiosityStatement: e.target.value })}
                placeholder="Share the scientific or engineering problems that excite you, your technical background, and the research tracks you wish to contribute to..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo font-sans"
              ></textarea>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.commitmentAgreement}
                  onChange={(e) => setFormData({ ...formData, commitmentAgreement: e.target.checked })}
                  className="mt-0.5 rounded text-bbci-indigo focus:ring-bbci-indigo"
                />
                <span>
                  I confirm my commitment to BBCI's research mission and ethical standards, and acknowledge the one-time registration (BDT 500) and monthly contribution (BDT 300) upon formal admission.
                </span>
              </label>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-bbci-indigo hover:bg-bbci-indigo-light text-white text-xs sm:text-sm font-bold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-bbci-magenta disabled:opacity-50"
              >
                {submitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <Icon name="FiSend" className="w-3.5 h-3.5" />
                    <span>Submit Fellowship Application</span>
                  </>
                )}
              </button>

              <span className="text-[11px] font-mono text-slate-400">
                Reviewed by BBCI Admissions
              </span>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
