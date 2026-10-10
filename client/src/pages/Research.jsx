import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import PublicationCard from '../components/PublicationCard';
import EmptyState from '../components/EmptyState';
import Icon from '../components/Icon';
import { BBCI_ORG } from '../data/organization';
import { PUBLICATIONS_DATA, RESEARCH_CATEGORIES } from '../data/publications';

export default function Research() {
  const [activeCategory, setActiveCategory] = useState("All Publications");

  const filteredPublications = activeCategory === "All Publications"
    ? PUBLICATIONS_DATA
    : PUBLICATIONS_DATA.filter((pub) => pub.category === activeCategory);

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Scientific &amp; Technological Inquiry"
        title="Research Divisions &amp; Scholarly Output"
        description="Advancing foundational and applied research across artificial intelligence, distributed systems, computational biology, robotics, and applied mathematics."
        breadcrumbs={[{ label: 'Research' }]}
      />

      {/* 1. Six Core Research Divisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Domains"
          title="BBCI Research Divisions"
          description="Our research ecosystem is structured into six specialized divisions, uniting theoretical scientists and systems engineers to solve high-impact problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BBCI_ORG.areasOfWork.map((area) => (
            <div 
              key={area.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-elevated hover:border-bbci-indigo/30 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-indigo">
                  <Icon name={area.icon} className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-bbci-teal bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                  {area.symbol}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-slate-900">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Research Philosophy & Authorship Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
                Research Excellence
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Continuous Scholarly &amp; Engineering Output
              </h2>
              <p className="text-sm text-slate-600 font-editorial leading-relaxed">
                BBCI combines the rigor of an academic research institute with the agility of a modern deep-tech laboratory. Our working groups commit to continuous semi-annual cycles of peer-reviewed paper publication and functional prototype releases.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-bbci-indigo font-bold text-sm mb-1">
                  <Icon name="FiBookOpen" className="w-4 h-4 text-bbci-indigo" />
                  <span>Peer-Reviewed Papers</span>
                </div>
                <p className="text-xs text-slate-600">
                  Rigorous manuscripts, technical reports, and foundational white papers across all six divisions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-bbci-magenta font-bold text-sm mb-1">
                  <Icon name="FiAward" className="w-4 h-4 text-bbci-magenta" />
                  <span>Patents &amp; Open Source</span>
                </div>
                <p className="text-xs text-slate-600">
                  Protected intellectual property and open-source software frameworks with 70% creator royalty equity.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-bbci-magenta font-bold block">
                Scholarly Attribution
              </span>
              <h3 className="text-xl font-bold leading-snug">
                Joint Authorship &amp; Institutional Backing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-editorial leading-relaxed">
                Every research manuscript, dataset, and invention produced within BBCI labs carries joint attribution—recognizing the individual researchers and inventors alongside the Binary Brains Council of Intellects.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5 text-xs font-mono">
              <div className="text-bbci-magenta font-bold">Standard Affiliation Format:</div>
              <div className="text-slate-300">
                "[Author Name(s)], Binary Brains Council of Intellects (BBCI)"
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Research Publications Stream */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Digital Library"
          title="Recent Research Papers &amp; Reports"
          description="Browse recent white papers, working manuscripts, and technical reports from BBCI research groups."
          action={
            <Link
              to="/publications"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>Open Full Publications Search</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Icon name="FiFilter" className="w-3.5 h-3.5" />
            <span>Format:</span>
          </span>
          {RESEARCH_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-bbci-indigo text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Publications Stream */}
        {filteredPublications.length > 0 ? (
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="FiBookOpen"
            title={`No ${activeCategory} Indexed Yet`}
            description="New manuscripts and proceedings in this category are currently undergoing peer review by our division leads."
            actionText="View All Publications"
            onAction={() => setActiveCategory("All Publications")}
          />
        )}
      </section>

    </div>
  );
}
