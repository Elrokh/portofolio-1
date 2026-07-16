import {
  Award,
  BriefcaseBusiness,
  FileText,
  GripVertical,
  LayoutTemplate,
  Palette,
  Rocket,
  Sparkles,
  UserRound,
} from "lucide-react";

export const builderPanels = [
  { id: "personal", label: "Personal info", icon: UserRound },
  { id: "about", label: "About & education", icon: FileText },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", icon: LayoutTemplate },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "design", label: "Design system", icon: Palette },
  { id: "sections", label: "Section order", icon: GripVertical },
  { id: "publish", label: "Publish & export", icon: Rocket },
];

export default function BuilderSidebar({ activePanel, onChange }) {
  return (
    <aside className="builder-sidebar border-r border-white/[0.07] bg-[#07101f] p-3">
      <div className="flex gap-2 overflow-x-auto lg:grid lg:overflow-visible">
        {builderPanels.map((panel) => {
          const Icon = panel.icon;
          const active = activePanel === panel.id;
          return (
            <button
              key={panel.id}
              type="button"
              onClick={() => onChange(panel.id)}
              className={`builder-sidebar-item shrink-0 ${active ? "builder-sidebar-item-active" : ""}`}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.04]">
                <Icon className="h-4 w-4" />
              </span>
              <span className="hidden text-left lg:block">
                <strong className="block text-sm">{panel.label}</strong>
                <small className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.12em] opacity-50">
                  Edit section
                </small>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
