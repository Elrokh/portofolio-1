import { Plus, Trash2 } from "lucide-react";
import { usePortfolio } from "../../context/PortfolioContext";
import Button from "../common/Button";
import { Field, Select } from "../common/Field";
import PanelTitle from "../common/PanelTitle";

export default function SkillsPanel() {
  const { portfolio, updateArrayItem, addArrayItem, removeArrayItem } = usePortfolio();

  const addSkill = () => {
    addArrayItem("skills", {
      id: `skill-${Date.now()}`,
      name: "New skill",
      category: "Front End",
      level: 80,
    });
  };

  return (
    <div>
      <PanelTitle title="Skills" description="Group technical and design capabilities with a clear proficiency indicator." />
      <div className="builder-panel-content">
        <div className="flex items-center justify-between gap-4">
          <div><h3 className="text-sm font-bold text-white">Skill library</h3><p className="mt-1 text-xs text-slate-500">{portfolio.skills.length} skills across your professional toolkit.</p></div>
          <Button size="sm" icon={Plus} onClick={addSkill}>Add skill</Button>
        </div>

        <div className="grid gap-3">
          {portfolio.skills.map((skill) => (
            <div key={skill.id} className="builder-form-card">
              <div className="grid gap-3 sm:grid-cols-[1fr_130px_90px_auto] sm:items-end">
                <Field label="Skill" value={skill.name} onChange={(event) => updateArrayItem("skills", skill.id, { name: event.target.value })} />
                <Select label="Category" value={skill.category} onChange={(event) => updateArrayItem("skills", skill.id, { category: event.target.value })}>
                  <option>Front End</option><option>UI/UX</option><option>Design</option><option>Core</option>
                </Select>
                <Field label="Level" type="number" min="1" max="100" value={skill.level} onChange={(event) => updateArrayItem("skills", skill.id, { level: Math.min(100, Math.max(1, Number(event.target.value))) })} />
                <Button variant="danger" size="sm" icon={Trash2} onClick={() => removeArrayItem("skills", skill.id)} aria-label={`Delete ${skill.name}`} />
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{ width: `${skill.level}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
