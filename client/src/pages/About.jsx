import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import PrinciplesGrid from '../components/PrinciplesGrid';
import OrgChart from '../components/OrgChart';
import Icon from '../components/Icon';
import bbciLogoImg from '../assets/BBCI_Logo.jpeg';
import { BBCI_ORG } from '../data/organization';
import { FOUNDING_MEMBERS } from '../data/people';

export default function About() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Page Header */}
      <PageHeader
        eyebrow="About the Organization"
        title="Binary Brains Council of Intellects"
        description="An international, non-profit research and technology organization uniting scientists, engineers, and scholars across disciplines to build frontier innovations and lasting shared knowledge."
        breadcrumbs={[{ label: 'About BBCI' }]}
      />

      {/* 1. Who We Are & Why BBCI Exists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
              <span className="w-2 h-0.5 bg-bbci-magenta"></span>
              <span>Our Identity &amp; Purpose</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 leading-snug">
              Bridging Analytical Science and Creative Innovation
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-editorial leading-relaxed">
              <p>
                The <strong>Binary Brains Council of Intellects (BBCI)</strong> is an independent, international intellectual and research council dedicated to advancing interdisciplinary science, software &amp; hardware engineering, and collaborative scholarship.
              </p>
              <p>
                Founded in October 2026 by eight visionary researchers and technologists, BBCI operates as a non-profit, non-political, and non-religious institution. We exist to break down traditional silos between academic research and hands-on engineering—creating an environment where ambitious thinkers collaborate on real-world problems.
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                Fellowship, project leadership, and collaboration within BBCI are driven by <strong>intellectual curiosity, technical merit, and scholarly integrity</strong>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-elevated p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xs font-mono font-bold text-bbci-indigo">THE BINARY BRAINS PARADIGM</span>
                <span className="text-xs font-mono text-slate-400">Official Emblem</span>
              </div>

              <div className="flex justify-center py-4">
                <img 
                  src={bbciLogoImg} 
                  alt="Binary Brains Council of Intellects (BBCI) Official Logo" 
                  className="h-32 sm:h-40 w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="space-y-3 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  The official BBCI emblem represents a stylized brain formed from binary digits—uniting two complementary modes of human and machine intelligence:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-bbci-teal block mb-1">Analytical Left Hemisphere</span>
                    <span className="text-slate-500">
                      Slate Teal (#4F6D78) — Formal logic, mathematical rigor, empirical methodology, and systems architecture.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-bbci-magenta block mb-1">Creative Right Hemisphere</span>
                    <span className="text-slate-500">
                      Magenta (#EE4A7F) — Networked synthesis, cross-disciplinary discovery, and transformative invention.
                    </span>
                  </div>
                </div>
                <p className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100">
                  Anchored by Deep Indigo (#2E2F81), representing computational foundation and institutional permanence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Vision & Mission Detailed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-bbci-magenta font-bold">
              Our Vision
            </span>
            <p className="text-xl sm:text-2xl font-editorial leading-relaxed text-slate-100">
              "{BBCI_ORG.vision}"
            </p>
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-sans">
              Building a borderless, self-sustaining global network of researchers, engineers, and innovators.
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-bbci-indigo font-bold">
              Our Mission
            </span>
            <p className="text-xl sm:text-2xl font-editorial leading-relaxed text-slate-800">
              "{BBCI_ORG.mission}"
            </p>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-sans">
              Advancing frontier engineering projects, peer-reviewed papers, and open scientific collaboration.
            </div>
          </div>

        </div>
      </section>

      {/* 3. What Makes BBCI Distinct */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Research Model"
          title="How BBCI Accelerates Discovery"
          description="Unlike conventional student clubs or isolated laboratories, BBCI combines autonomous research working groups with a creator-first intellectual property model."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-indigo">
              <Icon name="FiCpu" className="w-5 h-5 text-bbci-indigo" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Focused Research Labs</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Each BBCI project group operates as a dedicated research unit led by a Principal Project Leader, focusing deeply on one technical or scientific challenge at a time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-teal">
              <Icon name="FiShare2" className="w-5 h-5 text-bbci-teal" />
            </div>
            <h3 className="text-base font-bold text-slate-900">70/30 Creator Royalty Equity</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              We champion creator-first innovation: 70% of all licensing revenues and patent royalties go directly to the contributing researchers and inventors, while 30% sustains the Council's research fund.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-magenta">
              <Icon name="FiAward" className="w-5 h-5 text-bbci-magenta" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Co-Attribution &amp; Peer Review</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Every paper, software framework, and invention carries joint attribution—elevating individual authors alongside the institutional recognition of BBCI.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Organizational Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Institutional Structure"
          title="Council Directorate &amp; Research Hierarchy"
          description="How our Executive Directorate, Regional Chapters, and Research Labs coordinate globally."
        />

        <OrgChart />
      </section>

      {/* 5. Founding Fellows */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Founding Council"
          title="Founding Fellows of BBCI"
          description="The eight founding leaders who established the Binary Brains Council of Intellects and guide its scientific and executive stewardship."
          action={
            <Link
              to="/people"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>View Full Leadership Directory</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDING_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md ${
                  member.isFounder ? 'bg-bbci-indigo text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {member.role}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-2.5">
                  {member.name}
                </h3>
                <p className="text-xs text-bbci-teal font-semibold mt-0.5">
                  {member.executiveRole}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                BBCI Founding Fellow
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Principles Grid */}
      <section id="principles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="Institutional Ethics &amp; Research Principles"
          description="The foundational standards of integrity, open inquiry, and mutual respect that guide every BBCI fellow and working group."
        />

        <PrinciplesGrid />
      </section>

      {/* 7. Bottom Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5 shadow-elevated border border-slate-800">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-bbci-magenta">
            Global Research Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Be Part of Our Scientific &amp; Technological Community
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-editorial max-w-2xl mx-auto">
            Explore our active research divisions, read our latest working papers, or apply to join BBCI as a council member or institutional partner.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bbci-magenta hover:bg-bbci-magenta-dark text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
            >
              <span>Apply for Membership</span>
              <Icon name="FiArrowRight" className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
            >
              <span>Explore Research Projects</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
