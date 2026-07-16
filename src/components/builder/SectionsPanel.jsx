import { Eye, EyeOff, GripVertical } from "lucide-react";
import { useRef } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import PanelTitle from "../common/PanelTitle";

export default function SectionsPanel() {
  const { portfolio, updatePortfolio, moveSection } = usePortfolio();
  const draggedIndex = useRef(null);

  const toggleVisibility = (id) => {
    updatePortfolio((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === id ? { ...section, visible: !section.visible } : section,
      ),
    }));
  };

  const handleDrop = (targetIndex) => {
    if (draggedIndex.current === null || draggedIndex.current === targetIndex) return;
    moveSection(draggedIndex.current, targetIndex);
    draggedIndex.current = null;
  };

  return (
    <div>
      <PanelTitle title="Section order" description="Drag sections to change the reading flow, or hide anything you do not want to publish." />
      <div className="builder-panel-content">
        <div className="rounded-2xl border border-cyan-400/[0.15] bg-cyan-400/[0.06] p-4 text-sm leading-6 text-slate-400">
          The order below is used immediately in both live preview and the public portfolio.
        </div>
        <div className="grid gap-3">
          {portfolio.sections.map((section, index) => (
            <div
              key={section.id}
              draggable
              onDragStart={() => { draggedIndex.current = index; }}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => handleDrop(index)}
              className={`group flex cursor-grab items-center gap-3 rounded-2xl border p-3 transition active:cursor-grabbing ${section.visible ? "border-white/[0.08] bg-white/[0.025]" : "border-white/5 bg-white/[0.015] opacity-[0.55]"}`}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#020617] text-slate-500 group-hover:text-cyan-300"><GripVertical className="h-4 w-4" /></div>
              <div className="min-w-0 flex-1"><div className="text-sm font-bold text-white">{section.label}</div><div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">Position {index + 1}</div></div>
              <button type="button" onClick={() => toggleVisibility(section.id)} className={`grid h-10 w-10 place-items-center rounded-xl border ${section.visible ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300" : "border-white/[0.08] bg-white/[0.03] text-slate-500"}`} aria-label={`Toggle ${section.label}`}>
                {section.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
