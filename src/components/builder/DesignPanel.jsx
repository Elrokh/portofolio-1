import { Check, Moon, Sun } from "lucide-react";
import { usePortfolio } from "../../context/PortfolioContext";
import { Field, Select } from "../common/Field";
import PanelTitle from "../common/PanelTitle";

const templates = [
  { id: "modern", name: "Modern Developer", text: "Bold gradients, technical hierarchy and strong project cards.", gradient: "from-cyan-400 via-blue-600 to-blue-950" },
  { id: "minimal", name: "Minimal Professional", text: "Clean surfaces, compact spacing and recruiter-friendly reading.", gradient: "from-slate-300 via-slate-500 to-slate-900" },
  { id: "creative", name: "Creative Designer", text: "Expressive shape language and image-led visual presentation.", gradient: "from-fuchsia-500 via-violet-600 to-slate-950" },
];

const colorFields = [
  { key: "background", label: "Background" },
  { key: "surface", label: "Cards" },
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "accent", label: "Accent" },
  { key: "text", label: "Text" },
];

export default function DesignPanel() {
  const { portfolio, updatePortfolio, updateSettings } = usePortfolio();

  return (
    <div>
      <PanelTitle title="Design system" description="Choose a template and fine-tune the exact visual language of your portfolio." />
      <div className="builder-panel-content">
        <section>
          <div className="mb-4"><h3 className="text-sm font-bold text-white">Template</h3><p className="mt-1 text-xs text-slate-500">Content remains intact when you switch visual directions.</p></div>
          <div className="grid gap-3">
            {templates.map((template) => {
              const active = portfolio.template === template.id;
              return (
                <button key={template.id} type="button" onClick={() => updatePortfolio({ template: template.id })} className={`group rounded-2xl border p-3 text-left transition ${active ? "border-cyan-400/[0.45] bg-cyan-400/[0.07]" : "border-white/[0.08] bg-white/[0.025] hover:border-white/[0.15]"}`}>
                  <div className="grid grid-cols-[92px_1fr_auto] items-center gap-4">
                    <div className={`h-16 rounded-xl bg-gradient-to-br ${template.gradient} p-2`}><div className="h-full rounded-lg border border-white/[0.15] bg-slate-950/40 p-2"><div className="h-2 w-8 rounded bg-white/70" /><div className="mt-3 h-2 w-full rounded bg-white/20" /><div className="mt-1 h-2 w-3/4 rounded bg-white/20" /></div></div>
                    <div><div className="text-sm font-bold text-white">{template.name}</div><p className="mt-1 text-xs leading-5 text-slate-500">{template.text}</p></div>
                    <span className={`grid h-7 w-7 place-items-center rounded-full border ${active ? "border-cyan-400 bg-cyan-400 text-slate-950" : "border-white/10 text-transparent"}`}><Check className="h-4 w-4" /></span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="builder-form-card">
          <div className="mb-5"><h3 className="text-sm font-bold text-white">Appearance</h3><p className="mt-1 text-xs text-slate-500">Control mode, typography and corner shape.</p></div>
          <div className="grid grid-cols-2 gap-2 rounded-xl border border-white/[0.08] bg-[#020617] p-1">
            <button type="button" onClick={() => updateSettings("mode", "dark")} className={`builder-tab ${portfolio.settings.mode === "dark" ? "builder-tab-active" : ""}`}><Moon className="h-4 w-4" /> Dark</button>
            <button type="button" onClick={() => updateSettings("mode", "light")} className={`builder-tab ${portfolio.settings.mode === "light" ? "builder-tab-active" : ""}`}><Sun className="h-4 w-4" /> Light</button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Select label="Font family" value={portfolio.settings.font} onChange={(event) => updateSettings("font", event.target.value)}>
              <option>Inter</option><option>Manrope</option><option>Poppins</option><option>Serif</option><option>Mono</option>
            </Select>
            <Field label="Corner radius" type="number" min="0" max="40" value={portfolio.settings.radius} onChange={(event) => updateSettings("radius", Number(event.target.value))} />
          </div>
        </section>

        <section>
          <div className="mb-4"><h3 className="text-sm font-bold text-white">Color palette</h3><p className="mt-1 text-xs text-slate-500">The requested cyan and blue palette is used as the default.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {colorFields.map((field) => (
              <label key={field.key} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3">
                <input type="color" value={portfolio.settings[field.key]} onChange={(event) => updateSettings(field.key, event.target.value)} className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent p-0" />
                <span className="min-w-0"><span className="block text-sm font-semibold text-slate-200">{field.label}</span><span className="block text-xs uppercase tracking-wide text-slate-500">{portfolio.settings[field.key]}</span></span>
              </label>
            ))}
          </div>
          <div className="mt-4 h-16 rounded-2xl border border-white/10" style={{ background: `linear-gradient(135deg, ${portfolio.settings.primary}, ${portfolio.settings.secondary}, #1E3A8A)` }} />
        </section>
      </div>
    </div>
  );
}
