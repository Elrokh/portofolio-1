import { Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3 text-white">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-blue-900 shadow-lg shadow-cyan-950/30">
        <Layers3 className="h-5 w-5" />
      </span>
      {!compact ? (
        <span>
          <span className="block text-sm font-extrabold tracking-wide">PortfolioCraft</span>
          <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-500">Build your story</span>
        </span>
      ) : null}
    </Link>
  );
}
