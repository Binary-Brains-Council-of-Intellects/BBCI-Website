import { useState } from 'react';
import Icon from './Icon';

export default function OrgChart() {
  const [activeTab, setActiveTab] = useState('executive'); // 'executive' | 'regional'

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      {/* Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Organizational Structure & Chains of Authority
          </h3>
          <p className="text-xs text-slate-500 font-editorial mt-0.5">
            Executive and Regional Leadership Hierarchy
          </p>
        </div>

        <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('executive')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'executive'
                ? 'bg-bbci-indigo text-white shadow-sm'
                : 'text-slate-600 hover:text-bbci-indigo'
            }`}
          >
            <Icon name="FiShield" className="w-3.5 h-3.5" />
            <span>Executive Hierarchy</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('regional')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'regional'
                ? 'bg-bbci-indigo text-white shadow-sm'
                : 'text-slate-600 hover:text-bbci-indigo'
            }`}
          >
            <Icon name="FiGlobe" className="w-3.5 h-3.5" />
            <span>Regional & Project Chain</span>
          </button>
        </div>
      </div>

      {activeTab === 'executive' ? (
        /* Executive Committee Hierarchy */
        <div className="space-y-6">
          {/* Level 0: Supreme Governance */}
          <div className="flex justify-center">
            <div className="max-w-md w-full bg-slate-900 text-white rounded-xl p-4 text-center border border-slate-800 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-bbci-magenta font-bold block mb-1">
                Supreme Governance Authority
              </span>
              <h4 className="text-base font-bold">Founding Members (8)</h4>
              <p className="text-xs text-slate-400 mt-1">
                Holds ultimate authority over leadership, membership termination, and constitutional amendments.
              </p>
            </div>
          </div>

          {/* Connector Down */}
          <div className="flex justify-center">
            <div className="w-0.5 h-6 bg-slate-300"></div>
          </div>

          {/* Level 1: President */}
          <div className="flex justify-center">
            <div className="max-w-md w-full bg-bbci-indigo text-white rounded-xl p-5 text-center shadow-lg border border-bbci-indigo-light">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-200 block mb-1">
                Apex Executive Officer
              </span>
              <h4 className="text-lg font-bold">President</h4>
              <p className="text-xs font-semibold text-slate-200 mt-0.5">
                Sk Azmain Zunaeid
              </p>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                Supervises Council activities, authorizes documents, chairs all meetings, resolves disputes.
              </p>
            </div>
          </div>

          {/* Connector Branches */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -top-6 -bottom-6 w-0.5 bg-slate-200 -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              
              {/* Branch A: Direct Presidential Reports (Media Secretary & Representative) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-bbci-teal font-bold uppercase tracking-wider mb-2">
                    <Icon name="FiArrowRight" className="w-3.5 h-3.5 text-bbci-magenta" />
                    <span>Direct Presidential Reports</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h5 className="text-sm font-bold text-slate-900">Media Secretary</h5>
                      </div>
                      <p className="text-xs font-medium text-bbci-indigo mt-0.5">Syeda Zawada Farah</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Hosts all programs, content production, interviews, and public ceremonies.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h5 className="text-sm font-bold text-slate-900">Representative</h5>
                      </div>
                      <p className="text-xs font-medium text-bbci-indigo mt-0.5">Md Maruf Mia</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        External proposals, sponsorships, partner negotiations, institutional growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch B: General Secretary & Subordinate Operational Officers */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  
                  {/* General Secretary Node */}
                  <div className="bg-white p-4 rounded-xl border-2 border-bbci-teal shadow-sm mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-bbci-teal font-bold">
                          Reports to: President
                        </span>
                        <h5 className="text-base font-bold text-slate-900">General Secretary</h5>
                      </div>
                      <span className="text-sm font-bold text-bbci-indigo">Md Delower Sarker</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Bridges communication with President, supervises operations, co-authorizes documents, archives records.
                    </p>
                  </div>

                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1">
                    <Icon name="FiChevronDown" className="w-3.5 h-3.5" />
                    <span>Officers Operating Under General Secretary Supervision</span>
                  </div>

                  {/* Subordinate Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Treasurers */}
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h6 className="text-xs font-bold text-slate-900">Treasurers I & II</h6>
                      </div>
                      <p className="text-xs font-medium text-bbci-teal mt-0.5">
                        Maher Afruz Mira &amp; Md Tahamid Hassan Sadib
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Fiscal management, receipt archives, transaction registers, project funding disbursement.
                      </p>
                    </div>

                    {/* SMM I */}
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h6 className="text-xs font-bold text-slate-900">Social Media Manager I</h6>
                      </div>
                      <p className="text-xs font-medium text-bbci-teal mt-0.5">Tahmid Ibne Mofazzol</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Website, LinkedIn, and X. Editorial copy and image communication assets.
                      </p>
                    </div>

                    {/* SMM II */}
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h6 className="text-xs font-bold text-slate-900">Social Media Manager II</h6>
                      </div>
                      <p className="text-xs font-medium text-bbci-teal mt-0.5">Md Delower Sarker (Interim)</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Facebook, Instagram, YouTube. Broad-form video production and audience channels.
                      </p>
                    </div>

                    {/* Research & Publications Secretary */}
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h6 className="text-xs font-bold text-slate-900">Research &amp; Publications</h6>
                      </div>
                      <p className="text-xs font-medium text-bbci-teal mt-0.5">Abu Sufian Ratul</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Research milestone tracking, patent filings, joint BBCI credit verification, publication register.
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      ) : (
        /* Regional & Project Group Structure (Article IV.2 & Annex B) */
        <div className="space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              International Regional &amp; Project Hierarchy
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
              In recognition of BBCI's international character, the Council maintains an autonomous operational chain organized by region, which functions concurrently alongside the Executive Committee.
            </p>

            {/* Vertical Flow */}
            <div className="relative border-l-2 border-bbci-indigo/30 ml-4 pl-6 space-y-6">
              
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-bbci-indigo border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-bbci-indigo font-bold">1. Apex Oversight</h5>
                <p className="text-sm font-bold text-slate-900">President &amp; General Secretary</p>
                <p className="text-xs text-slate-500">Supervises all regional charters and global directives.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-bbci-teal border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-bbci-teal font-bold">2. Regional Heads</h5>
                <p className="text-sm font-bold text-slate-900">Appointed by Founding Members</p>
                <p className="text-xs text-slate-500">Coordinates BBCI's members, activities, and project groups within designated international regions.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-bbci-teal border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-bbci-teal font-bold">3. Regional Assistant Heads</h5>
                <p className="text-sm font-bold text-slate-900">Appointed on Regional Head Recommendation</p>
                <p className="text-xs text-slate-500">Assists in daily supervision and acts for Regional Head during absence or vacancy.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-bbci-magenta border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-bbci-magenta font-bold">4. Project Leaders</h5>
                <p className="text-sm font-bold text-slate-900">One Designated Leader per Project Group</p>
                <p className="text-xs text-slate-500">Prepares proposal, budget, manages group research, and coordinates documentation.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-400 border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">5. Project Members</h5>
                <p className="text-sm font-bold text-slate-900">General or Founding Members</p>
                <p className="text-xs text-slate-500">Contribute actively to assigned research projects and uphold the constitutional Code of Conduct.</p>
              </div>

            </div>

            {/* Annex B Status Callout */}
            <div className="mt-8 p-4 rounded-lg bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Icon name="FiInfo" className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Annex B Administrative Record Status</span>
              </div>
              <p className="font-editorial leading-relaxed text-amber-800">
                Pursuant to Annex B of the BBCI Constitution, regional charters and project groups are designated and ratified by resolution of the Founding Members without requiring constitutional amendment. Current placeholder records reflect positions to be designated as international regional chapters are formally constituted.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
