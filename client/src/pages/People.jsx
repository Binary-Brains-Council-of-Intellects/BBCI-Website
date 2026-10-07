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
        eyebrow="Institutional Leadership"
        title="Council Members &amp; Office Bearers"
        description="The governing individuals, founding signatories, and executive officers responsible for the leadership, administration, and research stewardship of BBCI."
        breadcrumbs={[{ label: 'People & Leadership' }]}
      />

      {/* 1. Founding Members Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Founding Signatories"
          title="Founding Members of BBCI"
          description="The eight founding individuals who established BBCI on 02 October 2026. Sk Azmain Zunaeid holds the permanent and personal title of Founder; the seven other members are Co-Founders on equal footing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDING_MEMBERS.map((person) => (
            <PersonCard key={person.id} person={person} variant="founder" />
          ))}
        </div>
      </section>


      {/* 2. Executive Committee (Annex A) */}
      <section id="executive-committee" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Current Office Bearers"
          title="Executive Committee Roster"
          description="The operational body responsible for day-to-day administration, financial stewardship, media broadcasts, project grants, and research monitoring."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXECUTIVE_COMMITTEE.map((officer, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-card-hover hover:border-bbci-indigo/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-bbci-teal px-2 py-0.5 rounded border border-slate-200">
                    Tier 0{officer.tier} Executive
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Reports: {officer.reportsTo}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {officer.position}
                  </h3>
                  <div className="text-xs font-semibold text-bbci-indigo mt-0.5">
                    {officer.officeHolder}
                  </div>
                  {officer.note && (
                    <div className="mt-1 text-[11px] text-amber-700 font-mono bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {officer.note}
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">
                    Key Responsibilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {officer.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Icon name="FiCheck" className="w-3.5 h-3.5 text-bbci-teal flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Executive Record</span>
                <span>Verified Active</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. Interactive Hierarchy & Reporting Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Structure Visualization"
          title="Chains of Authority &amp; Oversight"
          description="Visual architecture demonstrating reporting flows between Founding Members, the President, General Secretary, and supervisory lines."
        />

        <OrgChart />
      </section>


      {/* 4. Regional & Project Leadership (Annex B Architecture) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="International Charters"
          title="Regional &amp; Project Leadership"
          description="Regional Heads and Project Groups are established by resolution of the Founding Members as international expansion proceeds."
        />

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-base font-bold text-slate-900">
              Regional Administrative Record Template
            </h3>
            <p className="text-xs text-slate-600 font-editorial leading-relaxed">
              Regional structures shall be populated and updated by resolution of the Founding Members as regions, Regional Heads, Assistant Heads, and Project Groups are designated.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-mono uppercase text-[11px]">
                <tr>
                  <th className="p-3 border-b border-slate-200">Region</th>
                  <th className="p-3 border-b border-slate-200">Regional Head</th>
                  <th className="p-3 border-b border-slate-200">Regional Assistant Head</th>
                  <th className="p-3 border-b border-slate-200">Project Group</th>
                  <th className="p-3 border-b border-slate-200">Project Leader</th>
                  <th className="p-3 border-b border-slate-200">Project Members</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono text-slate-500">
                {REGIONAL_STRUCTURE_STATUS.annexBTemplate.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 text-slate-400 italic">{row.region}</td>
                    <td className="p-3 text-slate-400 italic">{row.regionalHead}</td>
                    <td className="p-3 text-slate-400 italic">{row.assistantHead}</td>
                    <td className="p-3 text-slate-400 italic">{row.projectGroup}</td>
                    <td className="p-3 text-slate-400 italic">{row.projectLeader}</td>
                    <td className="p-3 text-slate-400 italic">{row.projectMembers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3 text-xs text-slate-600 font-editorial">
            <Icon name="FiInfo" className="w-4 h-4 text-bbci-teal flex-shrink-0 mt-0.5" />
            <span>
              Reporting order within this structure: <strong>President &amp; General Secretary &rarr; Regional Heads &rarr; Regional Assistant Heads &rarr; Project Leaders &rarr; Project Members</strong>, pursuant to organizational governance guidelines.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
