import { Link } from 'react-router-dom';
import bbciLogoImg from '../assets/BBCI_Logo.jpeg';
import SectionHeading from '../components/SectionHeading';
import PersonCard from '../components/PersonCard';
import ProjectCard from '../components/ProjectCard';
import PublicationCard from '../components/PublicationCard';
import ActivityTimeline from '../components/ActivityTimeline';
import PrinciplesGrid from '../components/PrinciplesGrid';
import Icon from '../components/Icon';

import { BBCI_ORG } from '../data/organization';
import { FOUNDING_MEMBERS } from '../data/people';
import { PROJECTS_DATA } from '../data/projects';
import { PUBLICATIONS_DATA } from '../data/publications';

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      
      {/* ==================================================== */}
      {/* 1. HERO SECTION */}
      {/* ==================================================== */}
      <section className="relative bg-white border-b border-slate-200/80 pt-10 pb-16 md:py-24 overflow-hidden">
        {/* Subtle Architectural Grid & Brand Accents */}
        <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-bbci-indigo/5 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-bbci-magenta/5 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Editorial Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-mono font-semibold text-bbci-indigo">
                <span className="w-2 h-2 rounded-full bg-bbci-magenta"></span>
                <span>INTERNATIONAL RESEARCH &amp; INNOVATION COUNCIL</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Binary Brains{' '}
                <span className="text-bbci-indigo block sm:inline">
                  Council of Intellects
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-editorial italic text-bbci-teal">
                "{BBCI_ORG.tagline}"
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
                An international, interdisciplinary research and technology organization uniting scientists, engineers, and scholars to pioneer frontier projects, publish peer-reviewed research, and translate bold ideas into lasting innovations.
              </p>

              {/* Primary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-bbci-indigo hover:bg-bbci-indigo-light shadow-md hover:shadow-lg transition-all"
                >
                  <Icon name="FiCpu" className="w-4 h-4" />
                  <span>Explore Research &amp; Labs</span>
                </Link>

                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-300 transition-all"
                >
                  <span>Become a Member</span>
                  <Icon name="FiArrowRight" className="w-4 h-4 text-bbci-magenta" />
                </Link>
              </div>

              {/* Key Institutional Pillars Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block uppercase text-[10px]">Research Structure</span>
                  <span className="font-bold text-slate-800 text-sm">6 Frontier Divisions</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block uppercase text-[10px]">Creator IP Model</span>
                  <span className="font-bold text-bbci-indigo text-sm">70% Creator Royalty Equity</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 font-mono block uppercase text-[10px]">Global Community</span>
                  <span className="font-bold text-bbci-teal text-sm">Weekly &amp; Monthly Colloquia</span>
                </div>
              </div>
            </div>

            {/* Right Showcase Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-elevated p-8 overflow-hidden group">
                
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-100 pb-3 mb-6">
                  <span>DUAL-HEMISPHERE PARADIGM</span>
                  <span className="text-bbci-magenta font-semibold">BBCI EMBLEM</span>
                </div>

                {/* Official BBCI Logo Representation */}
                <div className="py-4 flex flex-col items-center justify-center">
                  <img 
                    src={bbciLogoImg} 
                    alt="Binary Brains Council of Intellects (BBCI) Official Logo" 
                    className="h-44 sm:h-52 w-auto object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
                  />
                  
                  <div className="text-center mt-5">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-bbci-indigo block">
                      Binary Brains Council of Intellects
                    </span>
                    <span className="text-xs font-editorial italic text-bbci-teal mt-1 block">
                      "{BBCI_ORG.tagline}"
                    </span>
                  </div>
                </div>

                {/* Hemispheric Symbolism Cards */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100 text-[11px]">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="flex items-center gap-1.5 font-bold text-bbci-teal mb-1">
                      <span className="w-2 h-2 rounded-full bg-bbci-teal"></span>
                      <span>Analytical Mind</span>
                    </div>
                    <p className="text-slate-600 font-sans leading-snug">
                      Mathematical rigor, systems engineering, and empirical inquiry.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="flex items-center gap-1.5 font-bold text-bbci-magenta mb-1">
                      <span className="w-2 h-2 rounded-full bg-bbci-magenta"></span>
                      <span>Creative Network</span>
                    </div>
                    <p className="text-slate-600 font-sans leading-snug">
                      Interdisciplinary synthesis, neural networks, and bold invention.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. INTERDISCIPLINARY RESEARCH DIVISIONS */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research Divisions"
          title="Interdisciplinary Frontiers of Inquiry"
          description="BBCI organizes its scholarly and engineering work across six interconnected research domains, bridging foundational science with real-world technology."
          action={
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>Explore Research Divisions</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BBCI_ORG.areasOfWork.map((area) => (
            <div 
              key={area.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-elevated hover:border-bbci-indigo/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-indigo group-hover:bg-bbci-indigo group-hover:text-white transition-colors">
                    <Icon name={area.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                    {area.symbol}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-bbci-indigo transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {area.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-bbci-teal font-semibold">Active Working Group</span>
                <Link to="/projects" className="text-bbci-indigo font-bold hover:text-bbci-magenta inline-flex items-center gap-1">
                  <span>View Labs</span>
                  <Icon name="FiChevronRight" className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. FEATURED RESEARCH PROJECTS & LABS */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Innovation Labs"
          title="Featured Research Projects &amp; Initiatives"
          description="Autonomous BBCI project groups develop open-source frameworks, experimental hardware testbeds, and computational pipelines across our core disciplines."
          action={
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>View All {PROJECTS_DATA.length} Project Tracks</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. VISION, MISSION & INSTITUTIONAL PILLARS */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-bbci-teal uppercase tracking-wider">
                <span className="text-bbci-magenta font-bold">Global Outlook</span>
                <span>Our Vision</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-editorial font-medium leading-relaxed text-slate-100">
                "{BBCI_ORG.vision}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Icon name="FiGlobe" className="w-4 h-4 text-bbci-magenta" />
              <span>A Self-Sustaining Global Community of Intellects</span>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white text-slate-900 rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-bbci-teal uppercase tracking-wider">
                <span className="text-bbci-indigo font-bold">Core Purpose</span>
                <span>Our Mission</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-editorial font-medium leading-relaxed text-slate-800">
                "{BBCI_ORG.mission}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
              <Icon name="FiLayers" className="w-4 h-4 text-bbci-indigo" />
              <span>Shared Intellectual Work Across Disciplines</span>
            </div>
          </div>

        </div>

        {/* 6 Core Institutional Objectives */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BBCI_ORG.objectives.map((obj) => (
            <div 
              key={obj.id}
              className="bg-slate-50 rounded-xl border border-slate-200/90 p-6 hover:bg-white hover:shadow-sm transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-bbci-indigo shadow-sm">
                <Icon name={obj.icon} className="w-5 h-5 text-bbci-indigo" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-slate-900">{obj.title}</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. LATEST PUBLICATIONS & WHITE PAPERS */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Scholarly Output"
          title="Selected Publications &amp; White Papers"
          description="Explore peer-reviewed papers, technical reports, and foundational monographs authored by BBCI research divisions and working groups."
          action={
            <Link
              to="/publications"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>View All Publications</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="space-y-6">
          {PUBLICATIONS_DATA.slice(0, 3).map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. COLLOQUIA, SYMPOSIUMS & EVENTS */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic &amp; Technical Convenings"
          title="Global Colloquia, Symposiums &amp; Programs"
          description="BBCI hosts an active calendar of weekly online research deliberations, monthly physical symposiums at ESRC, technical workshops, and annual innovation fests."
          action={
            <Link
              to="/activities"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>View Events &amp; Calendar</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <ActivityTimeline />
      </section>

      {/* ==================================================== */}
      {/* 7. LEADERSHIP & FOUNDING FELLOWS PREVIEW */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Council Leadership"
          title="Founding Fellows &amp; Executive Directorate"
          description="Guided by eight founding fellows and an executive directorate dedicated to scientific excellence, institutional integrity, and global research collaboration."
          action={
            <Link
              to="/people"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>Meet All Council Leaders</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDING_MEMBERS.slice(0, 4).map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/people"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <span>View Full Leadership &amp; Executive Directory</span>
            <Icon name="FiChevronRight" className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 8. CORE VALUES & RESEARCH ETHICS */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Institutional Ethos"
          title="Core Values &amp; Scientific Integrity"
          description="Our community is built on open inquiry, meritocratic fellowship, creator-first equity, and rigorous research ethics."
        />

        <PrinciplesGrid />
      </section>

      {/* ==================================================== */}
      {/* 9. JOIN THE GLOBAL COUNCIL BANNER */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-elevated border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-bbci-indigo/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-bbci-magenta/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-bbci-magenta uppercase">
                Global Fellowship &amp; Membership
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Collaborate With Exceptional Minds Worldwide
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-editorial leading-relaxed max-w-2xl">
                Whether you are an AI researcher, systems engineer, computational scientist, or ambitious university innovator—join BBCI to lead research projects, co-author publications, and build the future together.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                to="/membership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-bbci-magenta hover:bg-bbci-magenta-dark text-white text-xs sm:text-sm font-bold transition-colors shadow-md"
              >
                <span>Apply for Membership</span>
                <Icon name="FiArrowRight" className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
              >
                <span>Propose Institutional Partnership</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
