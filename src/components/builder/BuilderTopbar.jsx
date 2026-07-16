import { ArrowLeft, Check, Eye, LoaderCircle, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Logo from "../common/Logo";

export default function BuilderTopbar({ saveStatus, onReset }) {
  return (
    <header className="flex min-h-[72px] items-center justify-between gap-4 border-b border-white/[0.07] bg-[#020617]/95 px-4 py-3 backdrop-blur-xl sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <Link to="/dashboard" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="hidden sm:block"><Logo /></div>
        <div className="hidden h-8 w-px bg-white/[0.08] lg:block" />
        <div className="min-w-0">
          <div className="truncate text-sm font-bold text-white">Mustafa's Portfolio</div>
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-500">
            {saveStatus === "saving" ? <LoaderCircle className="h-3 w-3 animate-spin" /> : <Check className="h-3 w-3 text-emerald-400" />}
            {saveStatus === "saving" ? "Saving changes…" : "All changes saved locally"}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" icon={RotateCcw} onClick={onReset} className="hidden sm:inline-flex">
          Reset
        </Button>
        <Link to="/portfolio/mustafa-elrokh" target="_blank">
          <Button variant="secondary" size="sm" icon={Eye}>
            <span className="hidden sm:inline">Public view</span>
            <span className="sm:hidden">View</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
