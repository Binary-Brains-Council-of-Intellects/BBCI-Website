import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import PersonCard from '../components/PersonCard';
import OrgChart from '../components/OrgChart';
import Icon from '../components/Icon';
import { FOUNDING_MEMBERS, EXECUTIVE_COMMITTEE, REGIONAL_STRUCTURE_STATUS } from '../data/people';

export default function People() {
  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Leadership &amp; Fellows"
        title="Founding Council &amp; Executive Directorate"
        description="Meet the founding fellows, executive directors, and division leads guiding the scientific, technological, and global operations of the Binary Brains Council of Intellects."
        breadcrumbs={[{ label: 'Leadership & People' }]}
      />

      {/* 1. Founding Fellows Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Founding Council"
          title="Founding Fellows of BBCI"
          description="The eight founding leaders who established the Binary Brains Council of Intellects. Sk Azmain Zunaeid serves as Founder & President alongside seven Co-Founding Fellows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDING_MEMBERS.map((person) => (
            <PersonCard key={person.id} person={person} variant="founder" />
          ))}
        </div>
      </section>

      {/* 2. Executive Directorate */}
      <section id="executive-committee" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Executive Directorate"
          title="Executive Committee &amp; Division Leads"
          description="The operational leadership responsible for research coordination, endowment management, global partnerships, digital platforms, and symposium programming."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXECUTIVE_COMMITTEE.map((officer, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-elevated hover:border-bbci-indigo/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-bbci-teal px-2.5 py-0.5 rounded-md border border-slate-200">
                    {officer.division || "Executive Division"}
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  {officer.image && (
                    <img
                      src={officer.image}
                      alt={officer.imageAlt || officer.officeHolder}
                      className="w-14 h-14 rounded-xl object-cover object-top border border-slate-200 flex-shrink-0 bg-slate-100"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {officer.position}
                    </h3>
                    <div className="text-xs font-bold text-bbci-indigo mt-0.5">
                      {officer.officeHolder}
                    </div>
                    {officer.note && (
                      <div className="mt-1.5 inline-block text-[10px] text-bbci-magenta font-mono bg-pink-50 px-2 py-0.5 rounded border border-pink-200">
                        {officer.note}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-2">
                    Core Portfolio:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {officer.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="FiCheck" className="w-3.5 h-3.5 text-bbci-teal flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>BBCI Directorate</span>
                <span className="text-emerald-600 font-semibold">Active Office</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Hierarchy & Reporting Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Organizational Architecture"
          title="Directorate &amp; Research Lab Structure"
          description="How BBCI coordinates across the Executive Directorate, Regional Chapters, and Autonomous Project Labs."
        />

        <OrgChart />
      </section>

      {/* 4. Global Chapters & Research Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Global Footprint"
          title="Regional Hubs &amp; Institutional Chapters"
          description="BBCI operates through both physical symposium hubs and a borderless virtual research network, enabling scholars and engineers worldwide to collaborate."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REGIONAL_STRUCTURE_STATUS.chapters.map((chapter, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-bbci-indigo">
                    <Icon name="FiGlobe" className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-bbci-teal bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {chapter.status}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  {chapter.region}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {chapter.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
                >
                  <span>Connect With Hub</span>
                  <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
