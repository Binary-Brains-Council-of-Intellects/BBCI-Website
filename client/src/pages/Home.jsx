import { Link } from 'react-router-dom';
import BbciLogo from '../components/BbciLogo';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import PersonCard from '../components/PersonCard';
import ProjectCard from '../components/ProjectCard';
import PublicationCard from '../components/PublicationCard';
import ActivityTimeline from '../components/ActivityTimeline';
import PrinciplesGrid from '../components/PrinciplesGrid';
import { BBCI_ORG } from '../data/organization';
import { FOUNDING_MEMBERS } from '../data/people';
import { PLACEHOLDER_PROJECT_TEMPLATE } from '../data/projects';
import { PUBLICATIONS_DATA } from '../data/publications';

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      
      {/* ==================================================== */}
      {/* 1. HERO SECTION */}
      {/* ==================================================== */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24 border-b border-slate-200/80 bg-white">
        {/* Subtle grid and neural backdrop */}
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-bbci-indigo/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bbci-magenta/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-slate-100 text-bbci-teal border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-bbci-magenta animate-pulse"></span>
                <span>Binary Brains Council of Intellects</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                A Global Council <br className="hidden sm:block" />
                <span className="text-bbci-indigo">Connecting Intellects</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 font-editorial leading-relaxed max-w-2xl">
                BBCI unites intellectually curious minds from diverse disciplines to collaborate on advanced research, technology systems, innovative endeavors, and shared intellectual works for the advancement of society.
              </p>

              {/* Status Tags */}
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600 pt-1">
                <span className="bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                  Non-Profit
                </span>
                <span className="bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                  Non-Political
                </span>
                <span className="bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                  Non-Religious
                </span>
                <span className="bg-slate-50 px-2.5 py-1 rounded border border-slate-200 text-bbci-indigo font-semibold">
                  Ref: {BBCI_ORG.referenceNo}
                </span>
              </div>

              {/* Primary Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wide text-white bg-bbci-indigo hover:bg-bbci-indigo-light shadow-md hover:shadow-elevated transition-all"
                >
                  <span>Explore BBCI</span>
                  <Icon name="FiArrowRight" className="w-4 h-4" />
                </Link>

                <Link
                  to="/membership"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wide text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
                >
                  <span>Become a Member</span>
                  <Icon name="FiUserCheck" className="w-4 h-4 text-bbci-teal" />
                </Link>

                <Link
                  to="/constitution"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-semibold text-slate-600 hover:text-bbci-indigo transition-colors"
                >
                  <Icon name="FiBookOpen" className="w-4 h-4 text-bbci-magenta" />
                  <span>The Constitution</span>
                </Link>
              </div>
            </div>

            {/* Right Abstract Visual Inspired by BBCI Symbolism */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200/90 shadow-elevated p-8 overflow-hidden group">
                
                {/* Subtle top decoration */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-100 pb-3 mb-6">
                  <span>BBCI BRAND SYMBOLISM</span>
                  <span className="text-bbci-magenta font-semibold">010101</span>
                </div>

                {/* Central High-Resolution BBCI Logo Representation */}
                <div className="py-6 flex flex-col items-center justify-center">
                  <BbciLogo size="hero" showTagline={false} />
                  
                  <div className="text-center mt-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-bbci-indigo block">
                      Binary Brains Council of Intellects
                    </span>
                    <span className="text-xs font-editorial italic text-bbci-teal mt-1 block">
                      "A Global Council Connecting Intellects"
                    </span>
                  </div>
                </div>

                {/* Hemispheric Symbolism Cards */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1.5 font-bold text-bbci-teal mb-1">
                      <span className="w-2 h-2 rounded-full bg-bbci-teal"></span>
                      <span>Left Hemisphere</span>
                    </div>
                    <p className="text-slate-600 font-sans leading-snug">
                      Slate Teal (#4F6D78) symbolizing the analytical, structured mind.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-1.5 font-bold text-bbci-magenta mb-1">
                      <span className="w-2 h-2 rounded-full bg-bbci-magenta"></span>
                      <span>Right Hemisphere</span>
                    </div>
                    <p className="text-slate-600 font-sans leading-snug">
                      Magenta (#EE4A7F) symbolizing the creative, networked intellect.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================== */}
      {/* 2. INTRODUCTION / WHO WE ARE */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
                Constitutional Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Who We Are
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-editorial">
              <p>
                The <strong>Binary Brains Council of Intellects (BBCI)</strong> is a voluntary, non-profit, non-political, and non-religious intellectual council established on 02 October 2026. It does not operate for private financial gain, holds no political affiliation, and does not discriminate on religious or geographic grounds.
              </p>
              <p className="text-slate-600 font-sans text-xs sm:text-sm">
                Membership, participation, and leadership are founded upon intellectual merit, commitment, and good faith alone. BBCI exists to cultivate a rigorous environment where thinkers, researchers, and innovators build a lasting body of collective intellectual work.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ==================================================== */}
      {/* 3. VISION & MISSION EDITORIAL STATEMENTS */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-bbci-teal uppercase tracking-wider">
                <span className="text-bbci-magenta font-bold">Guiding Direction</span>
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
                <span className="text-bbci-indigo font-bold">Institutional Purpose</span>
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
      </section>


      {/* ==================================================== */}
      {/* 4. WHAT BBCI DOES (CONSTITUTIONAL OBJECTIVES) */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Objectives"
          title="Institutional Mandate &amp; Core Objectives"
          description="Pursuant to the BBCI founding charter, the Council pursues five clear organizational objectives designed for international intellectual collaboration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BBCI_ORG.objectives.map((obj) => (
            <div 
              key={obj.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm hover:shadow-card-hover hover:border-bbci-indigo/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-indigo">
                  <Icon name={obj.icon} className="w-5 h-5 text-bbci-indigo" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {obj.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {obj.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                Objective 0{obj.id}
              </div>
            </div>
          ))}

          {/* 6th Card: Intellectual Property Rule */}
          <div className="bg-slate-50 rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-bbci-magenta">
                <Icon name="FiShield" className="w-5 h-5 text-bbci-magenta" />
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                70/30 Creator Equity
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Joint credit is constitutionally guaranteed. 70% of royalties/earnings belong to actual creators; 30% to Council fund.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] font-mono text-bbci-teal">
              Collaborative Royalty Share
            </div>
          </div>
        </div>
      </section>


      {/* ==================================================== */}
      {/* 5. AREAS OF WORK */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Scope of Activity"
          title="Interdisciplinary Areas of Work"
          description="BBCI bridges diverse fields, fostering high-impact intersectional scholarship and technological creation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BBCI_ORG.areasOfWork.map((area) => (
            <div 
              key={area.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-bbci-teal transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-bbci-teal">
                <Icon name={area.icon} className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">{area.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ==================================================== */}
      {/* 6. PROJECTS PREVIEW */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Collaborative Projects"
          title="Collaborative Projects Architecture"
          description="Project groups operate autonomously under regional leadership with verified proposals and peer review."
          action={
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>View Project Registry</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ProjectCard project={PLACEHOLDER_PROJECT_TEMPLATE} />

          {/* Project Governance Rules Card */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide font-mono">
              Collaborative Project Principles
            </h3>
            
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Icon name="FiCheck" className="w-4 h-4 text-bbci-indigo flex-shrink-0 mt-0.5" />
                <span><strong>Separation:</strong> Project groups are kept strictly separate; no member may treat two groups as one.</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="FiCheck" className="w-4 h-4 text-bbci-indigo flex-shrink-0 mt-0.5" />
                <span><strong>Singular Focus:</strong> Each project group may run only one project at a time.</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="FiCheck" className="w-4 h-4 text-bbci-indigo flex-shrink-0 mt-0.5" />
                <span><strong>Designated Leadership:</strong> Exactly one Project Leader per group, reporting to the Regional Head.</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="FiCheck" className="w-4 h-4 text-bbci-indigo flex-shrink-0 mt-0.5" />
                <span><strong>Funding Verification:</strong> Proposals and budgets require formal verification before Executive Committee allocation.</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-200">
              <Link 
                to="/projects"
                className="text-xs font-semibold text-bbci-indigo underline hover:text-bbci-magenta"
              >
                Read full Project &amp; Patent Protocol &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ==================================================== */}
      {/* 7. RESEARCH & PUBLICATIONS */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Institutional Milestones"
          title="Research &amp; Publications Repository"
          description="BBCI targets, at minimum, one published research paper and one completed project every half-year, preserving joint author and council credit."
          action={
            <Link
              to="/publications"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>Explore Repository</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="space-y-6">
          {PUBLICATIONS_DATA.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </section>


      {/* ==================================================== */}
      {/* 8. ACTIVITIES & CALENDAR */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Institutional Schedule"
          title="Recurring Programs &amp; Assemblies"
          description="The Council adheres to a structured schedule of weekly deliberations, monthly physical symposiums, and annual milestones."
          action={
            <Link
              to="/activities"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>Full Schedule &amp; Calendar</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <ActivityTimeline />
      </section>


      {/* ==================================================== */}
      {/* 9. LEADERSHIP PREVIEW */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Governance &amp; Leadership"
          title="Founding Members &amp; Executive Leadership"
          description="Founded by eight dedicated individuals. Day-to-day administration is guided by the Executive Committee."
          action={
            <Link
              to="/people"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>View Full Leadership Directory</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        {/* Highlight Founder & Co-Founders Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDING_MEMBERS.slice(0, 4).map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/people"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <span>View All 8 Founding Members &amp; Executive Roles</span>
            <Icon name="FiChevronRight" className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* ==================================================== */}
      {/* 10. CODE OF CONDUCT & PRINCIPLES */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Institutional Ethics"
          title="Institutional Code of Conduct"
          description="Every member, officer, and committee member is bound to uphold the core ethical and organizational principles of the Council."
        />

        <PrinciplesGrid />
      </section>


      {/* ==================================================== */}
      {/* 11. MEMBERSHIP BANNER */}
      {/* ==================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-elevated border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-bbci-indigo/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-bbci-magenta uppercase">
              Membership Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Join the Binary Brains Council of Intellects
            </h2>
            <p className="text-sm text-slate-300 font-editorial leading-relaxed">
              Open to individuals demonstrating genuine intellectual curiosity, capability, and commitment. Evaluated on intellectual merit and character alone.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
              <span className="bg-slate-800 px-3 py-1.5 rounded border border-slate-700">
                Registration: BDT 500
              </span>
              <span className="bg-slate-800 px-3 py-1.5 rounded border border-slate-700">
                Monthly: BDT 300
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-bbci-magenta hover:bg-bbci-magenta-dark text-white text-xs font-bold transition-colors shadow-sm"
              >
                <span>Read Membership Criteria &amp; Apply</span>
                <Icon name="FiArrowRight" className="w-4 h-4" />
              </Link>
              <Link
                to="/constitution"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <span>Constitutional Charter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
