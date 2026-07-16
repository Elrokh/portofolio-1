import { LoaderCircle } from "lucide-react";

const variants = {
  primary:
    "bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#1E3A8A] text-white shadow-lg shadow-cyan-950/30 hover:-translate-y-0.5 hover:shadow-cyan-900/40",
  secondary:
    "border border-white/10 bg-white/[0.04] text-slate-100 hover:border-cyan-400/40 hover:bg-white/[0.07]",
  ghost: "text-slate-300 hover:bg-white/[0.06] hover:text-white",
  danger:
    "border border-rose-500/25 bg-rose-500/10 text-rose-200 hover:bg-rose-500/[0.15]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  icon: Icon,
  type = "button",
  ...props
}) {
  const sizes = {
    sm: "min-h-9 px-3.5 text-xs",
    md: "min-h-11 px-5 text-sm",
    lg: "min-h-[52px] px-6 text-base",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}
