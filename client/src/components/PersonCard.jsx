import { useState } from 'react';
import Icon from './Icon';
import { PLACEHOLDER_IMAGE, LOCAL_PLACEHOLDER_IMAGE } from '../data/organization';

export default function PersonCard({ person }) {
  const [hasError, setHasError] = useState(false);

  const imgSrc = hasError
    ? PLACEHOLDER_IMAGE
    : person.image || LOCAL_PLACEHOLDER_IMAGE;

  const isFounder = person.isFounder || person.role === "Founder";

  return (
    <div className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-bbci-indigo/40 transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Top Banner & Photo Section */}
      <div className="relative p-5 pb-0 flex items-center gap-4">
        {/* Profile Image with subtle ring */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
          <img 
            src={imgSrc} 
            alt={person.imageAlt || person.name || person.officeHolder} 
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
            loading="lazy"
          />
          {/* Subtle overlay accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-bbci-indigo/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Header Details */}
        <div className="flex-1 min-w-0">
          {/* Badge */}
          <div className="mb-1.5 flex flex-wrap gap-1.5">
            {isFounder ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-bbci-indigo text-white">
                <Icon name="FiShield" className="w-3 h-3 text-bbci-magenta" />
                <span>Founder</span>
              </span>
            ) : person.role === "Co-Founder" ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                <span>Co-Founder</span>
              </span>
            ) : null}

            {person.reportsTo && (
              <span className="inline-flex items-center text-[10px] font-mono text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">
                Reports: {person.reportsTo}
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate group-hover:text-bbci-indigo transition-colors">
            {person.name || person.officeHolder}
          </h3>

          <div className="text-xs font-semibold text-bbci-teal mt-0.5">
            {person.executiveRole || person.position || person.role}
          </div>
        </div>
      </div>

      {/* Body / Responsibilities */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        {person.responsibility ? (
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {person.responsibility}
          </p>
        ) : person.responsibilities ? (
          <ul className="space-y-1.5 text-xs text-slate-600">
            {person.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <Icon name="FiCheck" className="w-3.5 h-3.5 text-bbci-teal flex-shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-1">
            <Icon name="FiCheckCircle" className="w-3.5 h-3.5 text-bbci-teal" />
            <span>{isFounder ? "Founder & President" : "Founding Fellow"}</span>
          </div>

          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">BBCI Council</span>
        </div>
      </div>

    </div>
  );
}
