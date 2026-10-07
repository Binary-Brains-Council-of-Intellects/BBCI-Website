import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import PublicationCard from '../components/PublicationCard';
import EmptyState from '../components/EmptyState';
import Icon from '../components/Icon';
import { PUBLICATIONS_DATA, RESEARCH_CATEGORIES, RESEARCH_MILESTONES } from '../data/publications';

export default function Research() {
  const [activeCategory, setActiveCategory] = useState("All Publications");

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Academic &amp; Scientific Inquiries"
        title="Research &amp; Publications Repository"
        description="Fostering rigorous interdisciplinary scholarship, peer-reviewed technical manuscripts, and technological inventions in BBCI."
        breadcrumbs={[{ label: 'Research' }]}
      />

      {/* 1. Research Overview & Constitutional Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
                Output Targets
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Half-Yearly Research Milestones
              </h2>
              <p className="text-sm text-slate-600 font-editorial leading-relaxed">
                The BBCI Constitution establishes a mandatory baseline: <strong>minimum one published research paper and one completed project every half-year</strong> under Council auspices.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-bbci-indigo font-bold text-sm mb-1">
                  <Icon name="FiBookOpen" className="w-4 h-4 text-bbci-indigo" />
                  <span>Research Output</span>
                </div>
                <p className="text-xs text-slate-600">
                  Target: Minimum 1 published peer-reviewed research paper per bi-annual cycle.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-bbci-magenta font-bold text-sm mb-1">
                  <Icon name="FiAward" className="w-4 h-4 text-bbci-magenta" />
                  <span>Patents &amp; Inventions</span>
                </div>
                <p className="text-xs text-slate-600">
                  Target: Intellectual property and patent generation originating from group innovations.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 font-sans border-t border-slate-100 flex items-center justify-between">
              <span>{RESEARCH_MILESTONES.governingOfficial}</span>
              <span className="text-slate-400">Executive Administration</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-bbci-magenta font-bold block">
              Joint Affiliation Mandate
            </span>
            <h3 className="text-lg font-bold leading-snug">
              Inseparable Authorship &amp; BBCI Attribution
            </h3>
            <p className="text-xs text-slate-300 font-editorial leading-relaxed">
              All papers and projects produced under Council auspices carry the name of BBCI jointly and inseparably alongside the actual authors and inventors. The Council's name shall never be omitted nor substituted for creator credit.
            </p>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1 text-xs font-mono">
              <div className="text-bbci-magenta font-bold">Standard Institutional Citation:</div>
              <div className="text-slate-300">
                "[Author Name(s)], Binary Brains Council of Intellects (BBCI), 2026."
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 2. Repository Filter & Publications List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Archival Register"
          title="Official Publications &amp; Documents"
          description="Access official institutional charters, peer-reviewed manuscripts, and technical reports. The BBCI Constitution is the primary supreme document."
        />

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Icon name="FiFilter" className="w-3.5 h-3.5" />
            <span>Category:</span>
          </span>
          {RESEARCH_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-bbci-indigo text-white font-bold'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Publications Stream */}
        <div className="space-y-6">
          {PUBLICATIONS_DATA.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>

        {/* Empty State for Future Specialized Papers */}
        {activeCategory !== "All Publications" && activeCategory !== "Constitutional & Governance Documents" && (
          <div className="mt-8">
            <EmptyState
              icon="FiBookOpen"
              title={`No ${activeCategory} Published Yet`}
              description="The Council targets minimum 1 research paper per half-year. New manuscripts will appear here as they complete peer-review and verification."
              actionText="View Supreme Governing Document"
              actionLink="/constitution"
            />
          </div>
        )}
      </section>

    </div>
  );
}
