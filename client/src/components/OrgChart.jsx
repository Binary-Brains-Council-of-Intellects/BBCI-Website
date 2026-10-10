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
            Directorate &amp; Research Lab Structure
          </h3>
          <p className="text-xs text-slate-500 font-editorial mt-0.5">
            Executive Directorate and Global Research Lab Coordination
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
            <span>Executive Directorate</span>
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
            <span>Chapters &amp; Lab Network</span>
          </button>
        </div>
      </div>

      {activeTab === 'executive' ? (
        /* Executive Committee Hierarchy */
        <div className="space-y-6">
          {/* Level 0: Founding Council */}
          <div className="flex justify-center">
            <div className="max-w-md w-full bg-slate-900 text-white rounded-xl p-4 text-center border border-slate-800 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-bbci-magenta font-bold block mb-1">
                Founding Council
              </span>
              <h4 className="text-base font-bold">Founding Fellows (8)</h4>
              <p className="text-xs text-slate-400 mt-1">
                Guides long-term institutional vision, research governance, and global chapter expansion.
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
                Executive Presidency
              </span>
              <h4 className="text-lg font-bold">President</h4>
              <p className="text-xs font-semibold text-slate-200 mt-0.5">
                Sk Azmain Zunaeid
              </p>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                Leads scientific direction, chairs council colloquia and symposiums, and oversees institutional partnerships.
              </p>
            </div>
          </div>

          {/* Connector Branches */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -top-6 -bottom-6 w-0.5 bg-slate-200 -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              
              {/* Branch A: Direct Presidential Divisions */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-bbci-teal font-bold uppercase tracking-wider mb-2">
                    <Icon name="FiArrowRight" className="w-3.5 h-3.5 text-bbci-magenta" />
                    <span>External &amp; Media Divisions</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h5 className="text-sm font-bold text-slate-900">Media Secretary</h5>
                        <span className="text-[10px] font-mono text-bbci-teal bg-slate-100 px-1.5 py-0.5 rounded">Broadcasts</span>
                      </div>
                      <p className="text-xs font-medium text-bbci-indigo mt-0.5">Syeda Zawada Farah</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Chairs public programs, media interviews, keynote dialogues, and symposium broadcasts.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h5 className="text-sm font-bold text-slate-900">Representative</h5>
                        <span className="text-[10px] font-mono text-bbci-teal bg-slate-100 px-1.5 py-0.5 rounded">Partnerships</span>
                      </div>
                      <p className="text-xs font-medium text-bbci-indigo mt-0.5">Md Maruf Mia</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Institutional alliances, research grants, industry sponsorships, and academic outreach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch B: General Secretary & Operational Divisions */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  
                  {/* General Secretary Node */}
                  <div className="bg-white p-4 rounded-xl border-2 border-bbci-teal shadow-sm mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-bbci-teal font-bold">
                          Secretariat &amp; Operations
                        </span>
                        <h5 className="text-base font-bold text-slate-900">General Secretary</h5>
                      </div>
                      <span className="text-sm font-bold text-bbci-indigo">Md Delower Sarker</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Synchronizes cross-division operations, coordinates working groups, and manages institutional records.
                    </p>
                  </div>

                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1">
                    <Icon name="FiChevronDown" className="w-3.5 h-3.5" />
                    <span>Core Operational &amp; Research Divisions</span>
                  </div>

                  {/* Subordinate Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Research & Publications Secretary */}
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h6 className="text-xs font-bold text-slate-900">Research &amp; Publications</h6>
                        <span className="text-[10px] font-mono text-slate-500">Research</span>
                      </div>
                      <p className="text-xs font-medium text-bbci-teal mt-0.5">Abu Sufian Ratul</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Digital publications library, peer-review coordination, patent filings, and 70/30 IP attribution.
                      </p>
                    </div>

                    {/* Treasurers */}
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h6 className="text-xs font-bold text-slate-900">Treasurers I &amp; II</h6>
                        <span className="text-[10px] font-mono text-slate-500">Endowment</span>
                      </div>
                      <p className="text-xs font-medium text-bbci-teal mt-0.5">
                        Maher Afruz Mira &amp; Md Tahamid Hassan Sadib
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Research endowment stewardship, project grant disbursements, and financial transparency.
                      </p>
                    </div>

                    {/* SMM I */}
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h6 className="text-xs font-bold text-slate-900">Digital &amp; Editorial (SMM I)</h6>
                        <span className="text-[10px] font-mono text-slate-500">Digital</span>
                      </div>
                      <p className="text-xs font-medium text-bbci-teal mt-0.5">Tahmid Ibne Mofazzol</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Official web platform, LinkedIn, and X channels; research briefs and visual communication.
                      </p>
                    </div>

                    {/* SMM II */}
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-start">
                        <h6 className="text-xs font-bold text-slate-900">Video &amp; Broadcast (SMM II)</h6>
                        <span className="text-[10px] font-mono text-slate-500">Multimedia</span>
                      </div>
                      <p className="text-xs font-medium text-bbci-teal mt-0.5">Md Delower Sarker</p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        YouTube, Facebook, and Instagram video lectures, lab demonstrations, and science outreach.
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      ) : (
        /* Regional & Project Group Structure */
        <div className="space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              International Chapters &amp; Research Working Groups
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
              To support borderless collaboration, BBCI organizes regional hubs and autonomous project working groups that operate alongside the Executive Directorate.
            </p>

            {/* Vertical Flow */}
            <div className="relative border-l-2 border-bbci-indigo/30 ml-4 pl-6 space-y-6">
              
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-bbci-indigo border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-bbci-indigo font-bold">1. Executive Directorate</h5>
                <p className="text-sm font-bold text-slate-900">President &amp; General Secretary</p>
                <p className="text-xs text-slate-500">Coordinates global strategy, research grants, and inter-chapter collaboration.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-bbci-teal border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-bbci-teal font-bold">2. Regional Chapter Directors</h5>
                <p className="text-sm font-bold text-slate-900">Regional Heads &amp; Associate Leads</p>
                <p className="text-xs text-slate-500">Lead regional symposiums, university partnerships, and local research communities.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-bbci-magenta border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-bbci-magenta font-bold">3. Principal Project Leaders</h5>
                <p className="text-sm font-bold text-slate-900">One Dedicated Lead per Research Group</p>
                <p className="text-xs text-slate-500">Directs technical architecture, milestones, and manuscript preparation for the lab group.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-slate-400 border-2 border-white"></div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">4. Research &amp; Engineering Fellows</h5>
                <p className="text-sm font-bold text-slate-900">Project Contributors &amp; Co-Authors</p>
                <p className="text-xs text-slate-500">Build software/hardware systems, conduct experiments, and co-author publications.</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
