import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ActivityTimeline from '../components/ActivityTimeline';
import EmptyState from '../components/EmptyState';
import Icon from '../components/Icon';
import { FEST_COMPETITION_RULES } from '../data/activities';

export default function Activities() {
  const [activeTab, setActiveTab] = useState('recurring'); // 'recurring' | 'upcoming' | 'competitions'

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Council Programs"
        title="Council Activities &amp; Recurring Calendar"
        description="The schedule of recurring online deliberations, monthly physical symposiums at ESRC, academic tours, fests, and specialized training sessions."
        breadcrumbs={[{ label: 'Activities & Events' }]}
      />

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-slate-200 gap-4 sm:gap-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('recurring')}
            className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'recurring'
                ? 'border-bbci-indigo text-bbci-indigo'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon name="FiCalendar" className="w-4 h-4" />
            <span>Recurring Schedule</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('upcoming')}
            className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'upcoming'
                ? 'border-bbci-indigo text-bbci-indigo'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon name="FiClock" className="w-4 h-4" />
            <span>Upcoming Public Events</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('competitions')}
            className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'competitions'
                ? 'border-bbci-indigo text-bbci-indigo'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon name="FiAward" className="w-4 h-4" />
            <span>Fests &amp; Competitions Protocol</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Recurring Schedule */}
      {activeTab === 'recurring' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Standing Calendar"
            title="Standing Assemblies &amp; Milestones"
            description="All meetings are chaired by the President and scheduled according to the mandatory minimum commitments of the Council."
          />

          <ActivityTimeline />

          {/* Meeting Focus Details Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
              <div className="flex items-center gap-2 text-bbci-indigo font-bold text-sm">
                <Icon name="FiGlobe" className="w-4 h-4 text-bbci-indigo" />
                <span>Weekly Online Deliberations (Sundays, 9:00 PM)</span>
              </div>
              <p className="text-xs text-slate-600 font-editorial leading-relaxed">
                Connects international members for structured technical discussions, cross-disciplinary presentations, project status updates, and peer review of ongoing research manuscripts.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
              <div className="flex items-center gap-2 text-bbci-teal font-bold text-sm">
                <Icon name="FiMapPin" className="w-4 h-4 text-bbci-teal" />
                <span>Monthly Physical Assemblies (1st Friday, 8 AM - 12 PM)</span>
              </div>
              <p className="text-xs text-slate-600 font-editorial leading-relaxed">
                Convened at the designated <strong>ESRC</strong> venue. Covers thorough review of the preceding month's achievements, strategic planning, in-person collaborative innovation, and administrative reviews.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: Upcoming Events (Strictly avoiding fake data) */}
      {activeTab === 'upcoming' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Official Calendar"
            title="Scheduled Public Programs &amp; Symposiums"
            description="Official events, hackathons, and paid training modules will be scheduled here upon Executive Committee authorization."
          />

          <EmptyState
            icon="FiCalendar"
            title="No Upcoming Events Have Been Published Yet"
            description="The Executive Committee schedules dates, venues, and registration criteria for seminars, fests, and tours. Upcoming dates will be publicized here and across official channels."
            actionText="Inquire on Program Schedules"
            actionLink="/contact"
          />
        </section>
      )}

      {/* Tab 3: Competitions & External Representation Protocol (Article VIII.2) */}
      {activeTab === 'competitions' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="External Representation"
            title="Participation in Fests, Competitions &amp; Hackathons"
            description="Members representing BBCI in external competitions, olympiads, and hackathons must comply with strict institutional protocols to protect Council dignity and intellectual property."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEST_COMPETITION_RULES.map((rule, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-bold flex items-center justify-center text-bbci-indigo">
                    0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{rule.title}</h3>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed pl-8">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <span className="font-bold text-slate-900 block font-mono uppercase tracking-wider">
              Costs &amp; Prize Money Provisions:
            </span>
            <p className="font-editorial leading-relaxed text-slate-600">
              Any cost to be borne by the Council requires prior approval. Unless the approval provides otherwise, prize money won belongs to the participants; where the Council has funded the participation, the Council's share of any prize money, if any, shall be fixed in the prior approval.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
