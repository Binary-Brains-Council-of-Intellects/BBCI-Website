import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import PrinciplesGrid from '../components/PrinciplesGrid';
import OrgChart from '../components/OrgChart';
import Icon from '../components/Icon';
import BbciLogo from '../components/BbciLogo';
import { BBCI_ORG } from '../data/organization';
import { FOUNDING_MEMBERS } from '../data/people';

export default function About() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Page Header */}
      <PageHeader
        eyebrow="Institutional Profile"
        title="About the Binary Brains Council of Intellects"
        description="A voluntary, non-profit, non-political, and non-religious council connecting global intellects across disciplines to build a lasting body of shared intellectual work."
        breadcrumbs={[{ label: 'About BBCI' }]}
      />

      {/* 1. Who We Are & Why BBCI Exists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
              <span className="w-2 h-0.5 bg-bbci-magenta"></span>
              <span>Council Nature &amp; Status</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 leading-snug">
              Uniting Intellects for the Advancement of Knowledge
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-editorial leading-relaxed">
              <p>
                The <strong>Binary Brains Council of Intellects (BBCI)</strong> was formally established by its eight Founding Members on <strong>02 October 2026</strong>. 
              </p>
              <p>
                BBCI is strictly voluntary, non-profit, non-political, and non-religious. The Council shall not be operated for private financial gain, shall not affiliate with or promote any political party or movement, and shall not endorse or discriminate on the basis of any religious or geographical affiliation.
              </p>
              <p className="font-sans text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                Instead, membership, participation, and leadership are open on the foundation of <strong>intellectual merit, capability, and commitment alone</strong>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-elevated p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xs font-mono font-bold text-bbci-indigo">BRAND ESSENCE &amp; PHILOSOPHY</span>
                <span className="text-xs font-mono text-slate-400">BBCI Identity</span>
              </div>

              <div className="flex justify-center py-4">
                <BbciLogo size="lg" />
              </div>

              <div className="space-y-3 text-xs text-slate-600 font-sans leading-relaxed">
                <p>
                  The official BBCI emblem symbolizes the union of two complementary intellectual realms:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-bbci-teal block mb-1">Analytical Left Brain</span>
                    <span className="text-slate-500">
                      Slate Teal (#4F6D78). Methodological rigor, formal logic, structured research systems.
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-bbci-magenta block mb-1">Networked Right Brain</span>
                    <span className="text-slate-500">
                      Magenta (#EE4A7F). Creative synthesis, cross-disciplinary connections, innovative ideation.
                    </span>
                  </div>
                </div>
                <p className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-100">
                  Flanked by the Deep Indigo digits "1" and "1", symbolizing digital precision and binary structure.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 2. Vision & Mission Detailed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-bbci-magenta font-bold">
              Vision Statement
            </span>
            <p className="text-xl font-editorial leading-relaxed text-slate-100">
              "{BBCI_ORG.vision}"
            </p>
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-sans">
              To build an enduring, self-sustaining global intellectual network producing consequential advancements for humanity.
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-bbci-indigo font-bold">
              Mission Statement
            </span>
            <p className="text-xl font-editorial leading-relaxed text-slate-800">
              "{BBCI_ORG.mission}"
            </p>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-sans">
              To institutionalize collaborative projects, scientific papers, and patents across multidisciplinary teams.
            </div>
          </div>

        </div>
      </section>


      {/* 3. What Makes BBCI Distinct */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Distinctive Characteristics"
          title="Constitutional Distinctions of BBCI"
          description="The institutional architecture of BBCI is built upon principles that distinguish it from standard academic clubs or transient tech communities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-indigo">
              <Icon name="FiShield" className="w-5 h-5 text-bbci-indigo" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Constitutional Supremacy</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              All decisions, officer appointments, fiscal allocations, and events are legally subordinate to the supreme governing document.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-teal">
              <Icon name="FiShare2" className="w-5 h-5 text-bbci-teal" />
            </div>
            <h3 className="text-base font-bold text-slate-900">70/30 Creator Equity</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              The Council explicitly guarantees that 70% of royalties, earnings, and licensing fees belong to the actual creators and contributors, with 30% to Council sustainment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-magenta">
              <Icon name="FiAward" className="w-5 h-5 text-bbci-magenta" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Joint &amp; Inseparable Credit</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Every research paper, patent, and invention produced under Council auspices carries joint credit. The Council's name can never substitute the credit due to the actual inventors.
            </p>
          </div>
        </div>
      </section>


      {/* 4. Complete Organizational Governance Tree */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Governance"
          title="Organizational Governance Architecture"
          description="Visual representation of reporting chains, executive offices, and autonomous regional oversight."
        />

        <OrgChart />
      </section>


      {/* 5. Founding Members Recognition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Council Leadership"
          title="Founding Members of the Council"
          description="The eight individuals who formally constituted and adopted the BBCI Constitution on 02 October 2026."
          action={
            <Link
              to="/people"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-bbci-indigo hover:text-bbci-magenta transition-colors"
            >
              <span>View Full Directory</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDING_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                  member.isFounder ? 'bg-bbci-indigo text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {member.role}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-2">
                  {member.name}
                </h3>
                <p className="text-xs text-bbci-teal font-medium mt-0.5">
                  {member.executiveRole}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                Founding Member
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 6. Principles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Institutional Ethics"
          title="Core Principles of Conduct"
          description="Ethical standards binding every general, project, and committee member."
        />

        <PrinciplesGrid />
      </section>


      {/* 7. Bottom Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Read the Supreme Governing Document
          </h2>
          <p className="text-sm text-slate-600 font-editorial">
            Explore the complete 24-page BBCI Official Constitution, covering membership rules, financial transparency, dispute resolution, and Annexes.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/constitution"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-bbci-indigo hover:bg-bbci-indigo-light text-white text-xs font-bold shadow-sm transition-colors"
            >
              <Icon name="FiBookmark" className="w-4 h-4" />
              <span>Open Constitution Reader</span>
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors"
            >
              <span>Membership Information</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
