import Icon from './Icon';
import { RECURRING_SCHEDULE } from '../data/activities';

export default function ActivityTimeline() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RECURRING_SCHEDULE.map((item, index) => {
          const isWeekly = item.frequency === 'Weekly';
          const isMonthly = item.frequency === 'Monthly';
          const isMilestone = item.frequency === 'Half-Yearly';

          return (
            <div 
              key={index}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-card-hover ${
                isWeekly 
                  ? 'bg-white border-bbci-indigo/30 ring-1 ring-bbci-indigo/10' 
                  : isMonthly 
                  ? 'bg-white border-bbci-teal/40' 
                  : isMilestone 
                  ? 'bg-slate-50 border-bbci-magenta/30' 
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isWeekly 
                      ? 'bg-bbci-indigo text-white' 
                      : isMonthly 
                      ? 'bg-bbci-teal text-white' 
                      : isMilestone 
                      ? 'bg-bbci-magenta text-white' 
                      : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.frequency}
                  </span>

                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    {item.type === 'online' ? (
                      <>
                        <Icon name="FiGlobe" className="w-3 h-3 text-bbci-teal" />
                        <span>Online</span>
                      </>
                    ) : item.type === 'physical' ? (
                      <>
                        <Icon name="FiMapPin" className="w-3 h-3 text-bbci-magenta" />
                        <span>Physical</span>
                      </>
                    ) : (
                      <>
                        <Icon name="FiAward" className="w-3 h-3 text-bbci-indigo" />
                        <span>Milestone</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.category}
                </h3>

                {/* Date / Time / Venue */}
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <Icon name="FiClock" className="w-3.5 h-3.5 text-bbci-indigo flex-shrink-0" />
                    <span>{item.timing}</span>
                  </div>
                  {item.venue && (
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Icon name="FiMapPin" className="w-3.5 h-3.5 text-bbci-teal flex-shrink-0" />
                      <span>{item.venue}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                  {item.details}
                </p>
              </div>

              {/* Schedule Tag Line */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Official Program</span>
                <span>Council Schedule</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Discretionary & Minimum Commitment Note */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
        <Icon name="FiInfo" className="w-4 h-4 text-bbci-teal flex-shrink-0 mt-0.5" />
        <div className="space-y-0.5 font-editorial">
          <p className="font-semibold text-slate-800">
            Schedule Flexibility &amp; Guidelines:
          </p>
          <p>
            The Executive Committee may adjust specific days, times, and venues as operationally required, provided that the minimum yearly commitments (minimum 1 tour, 1 fest, 3 paid seminars, 3 paid training sessions, and bi-annual research paper and project outputs) are strictly maintained.
          </p>
        </div>
      </div>
    </div>
  );
}
