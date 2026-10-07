
export default function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  centered = false,
  action = null,
  className = "" 
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row md:items-end justify-between gap-6'} ${className}`}>
      <div className={centered ? 'space-y-3' : 'max-w-2xl space-y-2'}>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-bbci-teal">
            <span className="w-2 h-0.5 bg-bbci-magenta"></span>
            <span>{eyebrow}</span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-slate-600 font-editorial leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {action && !centered && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}
