import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import EmptyState from '../components/EmptyState';
import Icon from '../components/Icon';
import { PROJECT_CATEGORIES, PLACEHOLDER_PROJECT_TEMPLATE } from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Disciplines");

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Collaborative Works"
        title="Project Groups &amp; Intellectual Property"
        description="The institutional framework for multidisciplinary research projects, technological prototypes, and patent generation in BBCI."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      {/* 1. Constitutional Project Architecture & Intellectual Property */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
              Constitutional IP Policy &amp; Equity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              70/30 Creator Equity &amp; Inseparable Attribution
            </h2>
            <p className="text-sm text-slate-600 font-editorial leading-relaxed">
              The BBCI Constitution enshrines strict guarantees protecting the rights, attribution, and financial proceeds of researchers, creators, and inventors.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-bbci-indigo text-white flex items-center justify-center">
                <Icon name="FiAward" className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Joint Credit Mandate</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                All projects, inventions, and papers produced carry the name of BBCI jointly and inseparably alongside actual authors and inventors. BBCI's name can never be omitted nor substituted for creator credit.
              </p>
              <div className="text-[10px] font-mono text-bbci-teal font-semibold">
                Inseparable Attribution
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-bbci-magenta text-white flex items-center justify-center">
                <Icon name="FiShield" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">70% Royalty to Creators</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Seventy percent (70%) of all earnings, royalties, licensing fees, or financial proceeds belong to the actual creators/contributors. Thirty percent (30%) is retained by BBCI for ongoing institutional funding.
              </p>
              <div className="text-[10px] font-mono text-bbci-magenta font-semibold">
                Creator Equity Guarantee
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-bbci-teal text-white flex items-center justify-center">
                <Icon name="FiCpu" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">One Project per Group</h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Each project group is kept entirely separate from one another and may execute only one project at a time under its single designated Project Leader.
              </p>
              <div className="text-[10px] font-mono text-bbci-teal font-semibold">
                Dedicated Focus
              </div>
            </div>

          </div>

          {/* Verification Protocol Callout (Article X.2) */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-3 text-xs text-slate-700 font-sans">
            <Icon name="FiFileText" className="w-4 h-4 text-bbci-indigo flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-slate-900">Document Verification Protocol:</span>
              <p className="font-editorial leading-relaxed text-slate-600">
                To maintain operational velocity, project-related proposals, budgets, milestone logs, and technical reports must be verified by the <strong>Project Leader, Regional Assistant Head, and Regional Head</strong>. Documents that bind the Council as a whole (such as patent assignments or external commercial agreements) are categorized as organizational documents requiring authorization by the President and General Secretary.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 2. Active Projects Registry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Registry &amp; Verification"
          title="Collaborative Projects Registry"
          description="In strict adherence to truthfulness guidelines, no fabricated projects are presented. Official project groups will be registered here as their proposals complete verification."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Icon name="FiFilter" className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {PROJECT_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-bbci-indigo text-white font-bold'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Display Schema Template with Verification Notice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ProjectCard project={PLACEHOLDER_PROJECT_TEMPLATE} />

          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
              <Icon name="FiBookmark" className="w-4 h-4 text-bbci-magenta" />
              <span>Project Group Proposal Submission</span>
            </div>

            <h3 className="text-base font-bold text-slate-900">
              How Project Groups Are Formed
            </h3>

            <ol className="space-y-3 text-xs text-slate-600 list-decimal pl-4 font-sans leading-relaxed">
              <li>
                <strong>Eligibility:</strong> General or Founding Members propose a defined project scope to the Regional Head of their designated region.
              </li>
              <li>
                <strong>Leadership Assignment:</strong> One designated Project Leader is appointed to supervise all Project Members within the group.
              </li>
              <li>
                <strong>Budget &amp; Proposal:</strong> Written proposal and requested Council funding contribution prepared for review.
              </li>
              <li>
                <strong>Three-Tier Verification:</strong> Formally verified by Project Leader, Regional Assistant Head, and Regional Head.
              </li>
              <li>
                <strong>Executive Ratification:</strong> Submitted to the Executive Committee for funding allocation and official repository tracking.
              </li>
            </ol>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Council Project Policy</span>
              <span>Official Protocol</span>
            </div>
          </div>
        </div>

        {/* Scholarly Empty State */}
        <div className="mt-8">
          <EmptyState
            icon="FiCpu"
            title="Awaiting Executive Committee Project Ratification"
            description="Active research projects will appear in this registry following review of formal proposals and Executive Committee budget approval."
            actionText="Submit Project Proposal Inquiry"
            actionLink="/contact"
          />
        </div>
      </section>

    </div>
  );
}
