import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function PageHeader({ 
  eyebrow, 
  title, 
  description, 
  breadcrumbs = [],
  constitutionalRef = null,
  actions = null 
}) {
  return (
    <div className="relative bg-white border-b border-slate-200/80 py-12 md:py-16 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-bbci-indigo transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <Fragment key={idx}>
                <Icon name="FiChevronRight" className="w-3 h-3 text-slate-400" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-bbci-indigo transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-slate-700">{crumb.label}</span>
                )}
              </Fragment>
            ))}
          </nav>
        )}

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-slate-100 text-bbci-teal border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-bbci-magenta"></span>
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {title}
            </h1>

            {description && (
              <p className="text-base sm:text-lg text-slate-600 font-editorial leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {constitutionalRef && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
                <Icon name="FiFileText" className="w-3.5 h-3.5 text-bbci-indigo" />
                <span>Ref: {constitutionalRef}</span>
              </div>
            )}
            {actions}
          </div>
        </div>
      </div>
    </div>
  );
}
