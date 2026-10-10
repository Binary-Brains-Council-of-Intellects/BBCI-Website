import Icon from './Icon';
import { RECURRING_SCHEDULE } from '../data/activities';

export default function ActivityTimeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {RECURRING_SCHEDULE.map((item, index) => {
        const isWeekly = item.frequency === 'Weekly';
        const isMonthly = item.frequency === 'Monthly';
        const isMilestone = item.frequency === 'Half-Yearly';

        return (
          <div 
            key={index}
            className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-elevated ${
              isWeekly 
                ? 'bg-white border-bbci-indigo/30 ring-1 ring-bbci-indigo/10' 
                : isMonthly 
                ? 'bg-white border-bbci-teal/40' 
                : isMilestone 
                ? 'bg-slate-50 border-bbci-magenta/30' 
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="space-y-3.5">
              {/* Header Tag */}
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
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

                <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                  {item.type === 'online' ? (
                    <>
                      <Icon name="FiGlobe" className="w-3.5 h-3.5 text-bbci-teal" />
                      <span>Virtual</span>
                    </>
                  ) : item.type === 'physical' ? (
                    <>
                      <Icon name="FiMapPin" className="w-3.5 h-3.5 text-bbci-magenta" />
                      <span>In-Person</span>
                    </>
                  ) : (
                    <>
                      <Icon name="FiAward" className="w-3.5 h-3.5 text-bbci-indigo" />
                      <span>Showcase</span>
                    </>
                  )}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                {item.category}
              </h3>

              {/* Date / Time / Venue */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Icon name="FiClock" className="w-3.5 h-3.5 text-bbci-indigo flex-shrink-0" />
                  <span>{item.timing}</span>
                </div>
                {item.venue && (
                  <div className="flex items-center gap-2 text-slate-600">
                    <Icon name="FiMapPin" className="w-3.5 h-3.5 text-bbci-teal flex-shrink-0" />
                    <span>{item.venue}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed pt-1">
                {item.details}
              </p>
            </div>

            {/* Schedule Tag Line */}
            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>BBCI Academic Program</span>
              <span className="text-bbci-teal font-semibold">Open to Fellows</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
