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
    primaryDiscipline: 'Computer Science & Software',
    curiosityStatement: '',
    commitmentAgreement: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.commitmentAgreement) {
      alert("You must agree to abide by the BBCI Constitution and Code of Conduct.");
      return;
    }

    setSubmitting(true);
    setSubmissionResult(null);

    try {
      await ApiService.submitMembershipInquiry(formData);
      setSubmissionResult({
        type: 'success',
        message: 'Your membership application inquiry has been formulated. Prospective members are evaluated through application, interview, or evaluation determined by the Executive Committee.'
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        academicBackground: '',
        primaryDiscipline: 'Computer Science & Software',
        curiosityStatement: '',
        commitmentAgreement: false
      });
    } catch {
      setSubmissionResult({
        type: 'error',
        message: 'Unable to process inquiry at this moment. Please email binarybrains.bbci@gmail.com directly.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Membership Framework"
        title="Membership in the Council"
        description="Open to individuals demonstrating genuine intellectual curiosity, capability, and commitment to collaborative research and innovation."
        breadcrumbs={[{ label: 'Membership' }]}
      />

      {/* 1. Eligibility & Fees Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Eligibility Statement */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
                Eligibility Criteria
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Merit-Based Intellectual Admission
              </h2>
              <p className="text-sm text-slate-600 font-editorial leading-relaxed">
                "{BBCI_ORG.membership.eligibility}"
              </p>
            </div>

            {/* Membership Categories */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Membership Categories:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {BBCI_ORG.membership.categories.map((cat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-sm font-bold text-slate-900 block mb-1">
                      {cat.name}
                    </span>
                    <span className="text-xs text-slate-600 leading-relaxed font-sans">
                      {cat.details}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Official Fee Structure */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-bbci-magenta font-bold">
                Membership Fees
              </span>
              <span className="text-[11px] font-mono text-slate-400">Constitutional Mandate</span>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  One-Time Registration Fee
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
                  Recurring Monthly Fee
                </span>
                <div className="text-3xl font-extrabold text-white">
                  {BBCI_ORG.membership.fees.monthly}
                </div>
                <p className="text-xs text-slate-300 font-editorial">
                  {BBCI_ORG.membership.fees.monthlyNote}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-800/50 border border-slate-700 text-[11px] font-mono text-slate-400 leading-relaxed">
              <Icon name="FiInfo" className="w-3.5 h-3.5 text-bbci-teal inline mr-1 mb-0.5" />
              {BBCI_ORG.membership.fees.constitutionalNote}
            </div>
          </div>

        </div>
      </section>


      {/* 2. Rights & Obligations (Articles III.4 & III.5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Rights */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
              <Icon name="FiCheckCircle" className="w-4 h-4 text-bbci-teal" />
              <span>Rights of Members</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Constitutional Rights &amp; Privileges
            </h3>

            <ul className="space-y-3 pt-2 text-xs text-slate-700 leading-relaxed font-sans">
              {BBCI_ORG.membership.rights.map((right, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Obligations */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-bbci-magenta">
              <Icon name="FiShield" className="w-4 h-4 text-bbci-magenta" />
              <span>Obligations of Members</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Member Obligations &amp; Compliance
            </h3>

            <ul className="space-y-3 pt-2 text-xs text-slate-700 leading-relaxed font-sans">
              {BBCI_ORG.membership.obligations.map((obligation, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </span>
                  <span>{obligation}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 text-[11px] font-editorial text-slate-500">
              Resignation &amp; Termination are strictly governed in cases of serious misconduct or violation of institutional principles.
            </div>
          </div>

        </div>
      </section>


      {/* 3. Formal Membership Evaluation Application */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Application Interface"
          title="Apply for Council Evaluation"
          description="Prospective members submit initial intellectual credentials. The Executive Committee reviews candidacies in accordance with constitutional merit requirements."
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
                  placeholder="Your legal or publication name"
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
                  Academic / Professional Affiliation
                </label>
                <input
                  type="text"
                  value={formData.academicBackground}
                  onChange={(e) => setFormData({ ...formData, academicBackground: e.target.value })}
                  placeholder="University, laboratory, or organization"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Intellectual Discipline *
                </label>
                <select
                  value={formData.primaryDiscipline}
                  onChange={(e) => setFormData({ ...formData, primaryDiscipline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-bbci-indigo bg-white"
                >
                  <option value="Computer Science & Systems">Computer Science &amp; Systems</option>
                  <option value="Mathematics & Logic">Mathematics &amp; Logic</option>
                  <option value="Natural & Physical Sciences">Natural &amp; Physical Sciences</option>
                  <option value="Biotechnology & Medicine">Biotechnology &amp; Medicine</option>
                  <option value="Engineering & Robotics">Engineering &amp; Robotics</option>
                  <option value="Interdisciplinary Humanities & Social Sciences">Interdisciplinary Humanities</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Statement of Intellectual Curiosity &amp; Research Interests *
              </label>
              <textarea
                rows="4"
                required
                value={formData.curiosityStatement}
                onChange={(e) => setFormData({ ...formData, curiosityStatement: e.target.value })}
                placeholder="Briefly describe what problems intrigue you, your technical capability, and what collaborative project you wish to explore within BBCI..."
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
                  I confirm that I have reviewed the BBCI Official Constitution, agree to abide by the Code of Conduct, and acknowledge the one-time registration (BDT 500) and monthly dues (BDT 300) upon formal admission.
                </span>
              </label>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-bbci-indigo hover:bg-bbci-indigo-light text-white text-xs font-bold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-bbci-magenta disabled:opacity-50"
              >
                {submitting ? (
                  <span>Recording Inquiry...</span>
                ) : (
                  <>
                    <Icon name="FiSend" className="w-3.5 h-3.5" />
                    <span>Submit Membership Application</span>
                  </>
                )}
              </button>

              <span className="text-[11px] font-mono text-slate-400">
                Merit-Based Evaluation
              </span>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
