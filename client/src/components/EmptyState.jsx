import Icon from './Icon';

export default function EmptyState({ 
  icon = "FiInfo", 
  title = "No Entries Published", 
  description = "Official listings will appear here upon formal authorization by the Executive Committee.",
  actionText = null,
  actionLink = null,
  onAction = null,
  className = "" 
}) {
  return (
    <div className={`text-center py-16 px-6 bg-slate-50/70 border border-dashed border-slate-300 rounded-2xl max-w-2xl mx-auto my-6 ${className}`}>
      <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 text-slate-500 mx-auto flex items-center justify-center mb-4">
        <Icon name={icon} className="w-6 h-6 text-bbci-teal" />
      </div>

      <h3 className="text-base font-bold text-slate-900 tracking-tight">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-slate-500 font-editorial max-w-md mx-auto mt-2 leading-relaxed">
        {description}
      </p>

      {actionText && (
        <div className="mt-5">
          {actionLink ? (
            <a
              href={actionLink}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-bbci-indigo hover:bg-bbci-indigo-light shadow-sm transition-colors"
            >
              <span>{actionText}</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={onAction}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-bbci-indigo hover:bg-bbci-indigo-light shadow-sm transition-colors"
            >
              <span>{actionText}</span>
              <Icon name="FiArrowRight" className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
