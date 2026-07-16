import { Maximize2, Monitor, Smartphone, Tablet } from "lucide-react";

const devices = [
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "tablet", label: "Tablet", icon: Tablet },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

export default function PreviewToolbar({ device, onDeviceChange }) {
  return (
    <div className="flex min-h-14 items-center justify-between gap-4 border-b border-white/[0.07] bg-[#07101f] px-4">
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Live preview</div>
      </div>
      <div className="flex items-center gap-1 rounded-xl border border-white/[0.08] bg-[#020617] p-1">
        {devices.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onDeviceChange(item.id)}
              className={`grid h-8 w-9 place-items-center rounded-lg transition ${device === item.id ? "bg-cyan-400/[0.15] text-cyan-300" : "text-slate-500 hover:text-white"}`}
              title={item.label}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
      </div>
      <a href="/portfolio/mustafa-elrokh" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-xl border border-white/[0.08] text-slate-400 hover:text-white" title="Full-screen preview">
        <Maximize2 className="h-4 w-4" />
      </a>
    </div>
  );
}
