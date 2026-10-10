import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import EmptyState from '../components/EmptyState';
import Icon from '../components/Icon';
import { PROJECT_CATEGORIES, PROJECTS_DATA } from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All Disciplines");

  const filteredProjects = selectedCategory === "All Disciplines"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Innovation &amp; Engineering Labs"
        title="Research Projects &amp; Lab Initiatives"
        description="Explore interdisciplinary research tracks, open-source frameworks, and hardware testbeds developed by BBCI working groups across AI, distributed computing, bioinformatics, and robotics."
        breadcrumbs={[{ label: 'Projects & Labs' }]}
      />

      {/* 1. Active Projects Grid with Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal block mb-1">
              Active Lab Tracks
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Current Research &amp; Engineering Initiatives
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-500">
            Showing {filteredProjects.length} Active Track(s)
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200/80">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
            <Icon name="FiFilter" className="w-3.5 h-3.5" />
            <span>Domain:</span>
          </span>
          {PROJECT_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-bbci-indigo text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="FiCpu"
            title="No Projects in Selected Category"
            description="No active project tracks match this filter. Reset the domain filter to view all ongoing BBCI research initiatives."
            actionText="Show All Projects"
            onAction={() => setSelectedCategory("All Disciplines")}
          />
        )}
      </section>

      {/* 2. Creator-First Intellectual Property & Lab Model */}
      <section id="ip-equity" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-magenta">
              Creator-First Innovation Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              70/30 Creator Equity &amp; Co-Attribution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-editorial leading-relaxed">
              BBCI is built to empower inventors, software architects, and scientists. Our intellectual property model ensures that the researchers who build the work retain primary financial reward and permanent recognition.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-bbci-indigo text-white flex items-center justify-center shadow-sm">
                <Icon name="FiAward" className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Inseparable Co-Attribution</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                All research papers, open-source repositories, and patents carry the names of the individual creators alongside the Binary Brains Council of Intellects.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-bbci-magenta text-white flex items-center justify-center shadow-sm">
                <Icon name="FiShield" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900">70% Royalty to Creators</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Seventy percent (70%) of all commercial royalties, licensing revenues, or patent proceeds go directly to the contributing researchers and engineers; 30% sustains the BBCI Research Endowment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-bbci-teal text-white flex items-center justify-center shadow-sm">
                <Icon name="FiCpu" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Focused Lab Autonomy</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Each project working group operates with dedicated leadership and singular focus—ensuring deep technical execution from initial architecture to peer-reviewed release.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. How to Propose or Join a Project Lab */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-bbci-magenta">
              Launch a Working Group
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Have a Research Proposal or Deep-Tech Prototype?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-editorial leading-relaxed max-w-2xl">
              BBCI fellows and partner laboratories can propose new interdisciplinary project groups, apply for Council research grants, and recruit talented co-investigators from across our global network.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-bbci-magenta hover:bg-bbci-magenta-dark text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
            >
              <span>Submit a Project Proposal</span>
              <Icon name="FiArrowRight" className="w-4 h-4" />
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
            >
              <span>Join as a Research Fellow</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
