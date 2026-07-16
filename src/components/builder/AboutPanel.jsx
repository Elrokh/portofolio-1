import { GraduationCap } from "lucide-react";
import { usePortfolio } from "../../context/PortfolioContext";
import { Field, Textarea } from "../common/Field";
import PanelTitle from "../common/PanelTitle";

export default function AboutPanel() {
  const { portfolio, updateNested, updateArrayItem } = usePortfolio();
  const about = portfolio.about;
  const education = portfolio.education[0];

  return (
    <div>
      <PanelTitle title="About & education" description="Refine your positioning, background and academic information." />
      <div className="builder-panel-content">
        <Field label="Section label" value={about.eyebrow} onChange={(event) => updateNested("about", "eyebrow", event.target.value)} />
        <Textarea label="Main positioning statement" rows={3} value={about.headline} onChange={(event) => updateNested("about", "headline", event.target.value)} />
        <Textarea label="Professional biography" rows={9} value={about.bio} onChange={(event) => updateNested("about", "bio", event.target.value)} />
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Years of experience" value={about.yearsExperience} onChange={(event) => updateNested("about", "yearsExperience", event.target.value)} />
          <Field label="Projects count" value={about.projectsCount} onChange={(event) => updateNested("about", "projectsCount", event.target.value)} />
          <Field label="Core focus" value={about.focus} onChange={(event) => updateNested("about", "focus", event.target.value)} />
        </div>

        <div className="builder-form-card">
          <div className="mb-5 flex items-center gap-3"><div className="builder-card-icon"><GraduationCap className="h-4 w-4" /></div><div><h3 className="text-sm font-bold text-white">Education</h3><p className="text-xs text-slate-500">Your Computer Science degree is pre-filled.</p></div></div>
          <div className="grid gap-4">
            <Field label="Degree" value={education.degree} onChange={(event) => updateArrayItem("education", education.id, { degree: event.target.value })} />
            <Field label="Institution" value={education.institution} onChange={(event) => updateArrayItem("education", education.id, { institution: event.target.value })} />
            <Field label="Status / period" value={education.period} onChange={(event) => updateArrayItem("education", education.id, { period: event.target.value })} />
            <Textarea label="Description" value={education.description} onChange={(event) => updateArrayItem("education", education.id, { description: event.target.value })} />
          </div>
        </div>
      </div>
    </div>
  );
}
