export function Field({ label, hint, error, className = "", ...props }) {
  return (
    <label className={`grid gap-2 ${className}`}>
      {label ? <span className="text-sm font-medium text-slate-200">{label}</span> : null}
      <input
        className="min-h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-500/10"
        {...props}
      />
      {hint ? <span className="text-xs leading-5 text-slate-500">{hint}</span> : null}
      {error ? <span className="text-xs text-rose-300">{error}</span> : null}
    </label>
  );
}

export function Textarea({ label, hint, className = "", rows = 5, ...props }) {
  return (
    <label className={`grid gap-2 ${className}`}>
      {label ? <span className="text-sm font-medium text-slate-200">{label}</span> : null}
      <textarea
        rows={rows}
        className="w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-3.5 py-3 text-sm leading-6 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-500/10"
        {...props}
      />
      {hint ? <span className="text-xs leading-5 text-slate-500">{hint}</span> : null}
    </label>
  );
}

export function Select({ label, children, className = "", ...props }) {
  return (
    <label className={`grid gap-2 ${className}`}>
      {label ? <span className="text-sm font-medium text-slate-200">{label}</span> : null}
      <select
        className="min-h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3.5 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-500/10"
        {...props}
      >
        {children}
      </select>
    </label>
  );
}
