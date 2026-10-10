import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ActivityTimeline from '../components/ActivityTimeline';
import Icon from '../components/Icon';
import { FEST_COMPETITION_RULES, UPCOMING_EVENTS } from '../data/activities';

export default function Activities() {
  const [activeTab, setActiveTab] = useState('recurring'); // 'recurring' | 'upcoming' | 'competitions'

  return (
    <div className="space-y-16 md:space-y-24 pb-24">
      {/* Header */}
      <PageHeader
        eyebrow="Conferences, Colloquia &amp; Symposiums"
        title="Events, Programs &amp; Global Convenings"
        description="Join our weekly global research colloquia, monthly in-person symposiums at ESRC, hands-on engineering bootcamps, and the annual BBCI Innovation Fest."
        breadcrumbs={[{ label: 'Events & Programs' }]}
      />

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-slate-200 gap-4 sm:gap-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('recurring')}
            className={`pb-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'recurring'
                ? 'border-bbci-indigo text-bbci-indigo'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon name="FiCalendar" className="w-4 h-4" />
            <span>Colloquia &amp; Program Cadence</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('upcoming')}
            className={`pb-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'upcoming'
                ? 'border-bbci-indigo text-bbci-indigo'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon name="FiClock" className="w-4 h-4" />
            <span>Featured &amp; Upcoming Sessions</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('competitions')}
            className={`pb-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'competitions'
                ? 'border-bbci-indigo text-bbci-indigo'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon name="FiAward" className="w-4 h-4" />
            <span>Hackathons &amp; Global Representation</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Recurring Schedule */}
      {activeTab === 'recurring' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Academic &amp; Technical Rhythm"
            title="Standing Colloquia, Symposiums &amp; Workshops"
            description="BBCI maintains a structured year-round cadence of virtual and physical convenings to ensure continuous momentum across all research working groups."
          />

          <ActivityTimeline />

          {/* Flagship Convenings Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5 text-bbci-indigo font-bold text-base">
                <Icon name="FiGlobe" className="w-5 h-5 text-bbci-indigo" />
                <span>Weekly Global Research Colloquium (Sundays, 9:00 PM)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-editorial leading-relaxed">
                Unites fellows across time zones for technical architecture walkthroughs, literature reviews, working group synchronizations, and open scientific debate.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5 text-bbci-teal font-bold text-base">
                <Icon name="FiMapPin" className="w-5 h-5 text-bbci-teal" />
                <span>Monthly ESRC Physical Symposium (1st Friday, 8 AM – 12 PM)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-editorial leading-relaxed">
                Hosted in person at <strong>ESRC</strong>. Features live hardware &amp; software demonstrations, monthly lab milestone reviews, keynote talks, and hands-on team collaboration.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: Upcoming & Featured Sessions */}
      {activeTab === 'upcoming' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="Active Calendar"
            title="Featured Sessions &amp; Upcoming Convenings"
            description="Register to attend upcoming BBCI colloquia, technical workshops, and symposiums."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_EVENTS.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-elevated hover:border-bbci-indigo/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-bbci-indigo border border-slate-200">
                      {evt.category}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {evt.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="FiClock" className="w-3.5 h-3.5 text-bbci-magenta" />
                      {evt.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="FiMapPin" className="w-3.5 h-3.5 text-bbci-teal" />
                      {evt.location} ({evt.format})
                    </span>
                  </div>

                  <div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-bbci-indigo hover:text-bbci-magenta transition-colors"
                    >
                      <span>Register / Request Invitation</span>
                      <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tab 3: Hackathons & External Representation */}
      {activeTab === 'competitions' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeading
            eyebrow="Competitive Excellence"
            title="Hackathons, Olympiads &amp; Conference Representation"
            description="BBCI fellows actively compete in international hackathons, robotics challenges, and scientific olympiads under the Council banner."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEST_COMPETITION_RULES.map((rule, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-bbci-indigo text-white text-xs font-mono font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{rule.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed pl-10">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="font-bold text-bbci-magenta block font-mono text-xs uppercase tracking-wider">
                Team Endorsement &amp; Grants
              </span>
              <h4 className="text-lg font-extrabold">
                Representing BBCI at an Upcoming Competition or Conference?
              </h4>
              <p className="text-xs sm:text-sm font-editorial leading-relaxed text-slate-300">
                Member teams can apply for official BBCI endorsement, technical mentorship from division leads, and sponsorship support. All prize awards won belong directly to the competing fellows.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bbci-magenta hover:bg-bbci-magenta-dark text-white text-xs font-bold transition-colors"
            >
              <span>Request Team Endorsement</span>
              <Icon name="FiArrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
