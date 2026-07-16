import { BriefcaseBusiness, Plus, Trash2 } from "lucide-react";
import { usePortfolio } from "../../context/PortfolioContext";
import Button from "../common/Button";
import { Field, Textarea } from "../common/Field";
import PanelTitle from "../common/PanelTitle";

export default function ExperiencePanel() {
  const { portfolio, updateArrayItem, addArrayItem, removeArrayItem } = usePortfolio();

  const addExperience = () => {
    addArrayItem("experience", {
      id: `experience-${Date.now()}`,
      company: "Company name",
      role: "Role title",
      period: "Period",
      location: "Location",
      description: "Describe the role and the value you delivered.",
      highlights: ["Add a measurable responsibility or achievement."],
    });
  };

  return (
    <div>
      <PanelTitle title="Experience" description="Present your work at Logic Designs, Sahm, i Network and your freelance practice." />
      <div className="builder-panel-content">
        <div className="flex items-center justify-between gap-4">
          <div><h3 className="text-sm font-bold text-white">Professional timeline</h3><p className="mt-1 text-xs text-slate-500">Keep each entry focused on responsibility, process and impact.</p></div>
          <Button size="sm" icon={Plus} onClick={addExperience}>Add role</Button>
        </div>

        <div className="grid gap-4">
          {portfolio.experience.map((item) => (
            <article key={item.id} className="builder-form-card">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3"><div className="builder-card-icon"><BriefcaseBusiness className="h-4 w-4" /></div><div><h3 className="text-sm font-bold text-white">{item.role}</h3><p className="text-xs text-slate-500">{item.company}</p></div></div>
                <Button variant="danger" size="sm" icon={Trash2} onClick={() => removeArrayItem("experience", item.id)} aria-label={`Delete ${item.role}`} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Company" value={item.company} onChange={(event) => updateArrayItem("experience", item.id, { company: event.target.value })} />
                <Field label="Role" value={item.role} onChange={(event) => updateArrayItem("experience", item.id, { role: event.target.value })} />
                <Field label="Period" value={item.period} onChange={(event) => updateArrayItem("experience", item.id, { period: event.target.value })} />
                <Field label="Location" value={item.location} onChange={(event) => updateArrayItem("experience", item.id, { location: event.target.value })} />
              </div>
              <Textarea className="mt-4" label="Role description" value={item.description} onChange={(event) => updateArrayItem("experience", item.id, { description: event.target.value })} />
              <Textarea
                className="mt-4"
                label="Highlights"
                hint="Write one highlight per line."
                value={item.highlights.join("\n")}
                onChange={(event) => updateArrayItem("experience", item.id, { highlights: event.target.value.split("\n").filter(Boolean) })}
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
