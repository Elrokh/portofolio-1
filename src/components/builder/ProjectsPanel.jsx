import { Code2, ImagePlus, Palette, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import Button from "../common/Button";
import { Field, Textarea } from "../common/Field";
import PanelTitle from "../common/PanelTitle";

function ProjectImage({ image, title }) {
  return <img src={image} alt={title} className="h-28 w-full rounded-xl object-cover ring-1 ring-white/[0.08]" />;
}

export default function ProjectsPanel() {
  const [tab, setTab] = useState("frontendProjects");
  const { portfolio, updateArrayItem, addArrayItem, removeArrayItem } = usePortfolio();
  const isFrontend = tab === "frontendProjects";
  const projects = portfolio[tab];

  const addProject = () => {
    if (isFrontend) {
      addArrayItem(tab, {
        id: `frontend-${Date.now()}`,
        title: "New Front End Project",
        category: "React Application",
        description: "Describe the problem, experience and key features.",
        image: "/projects/medical-hub.svg",
        technologies: ["React.js", "Tailwind CSS"],
        liveUrl: "",
        sourceUrl: "https://github.com/Elrokh",
        featured: false,
      });
    } else {
      addArrayItem(tab, {
        id: `graphic-${Date.now()}`,
        title: "New Graphic Project",
        category: "Visual Design",
        description: "Describe the design direction and intended outcome.",
        image: "/projects/social-campaign.svg",
        tools: ["Figma", "Visual Design"],
        projectUrl: "https://www.behance.net/mustafaelrokh",
      });
    }
  };

  return (
    <div>
      <PanelTitle title="Projects" description="Manage front-end case studies and graphic design work as two focused collections." />
      <div className="builder-panel-content">
        <div className="grid grid-cols-2 gap-2 rounded-xl border border-white/[0.08] bg-[#020617] p-1">
          <button type="button" onClick={() => setTab("frontendProjects")} className={`builder-tab ${isFrontend ? "builder-tab-active" : ""}`}><Code2 className="h-4 w-4" /> Front End</button>
          <button type="button" onClick={() => setTab("graphicProjects")} className={`builder-tab ${!isFrontend ? "builder-tab-active" : ""}`}><Palette className="h-4 w-4" /> Graphic Design</button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div><h3 className="text-sm font-bold text-white">{isFrontend ? "Development projects" : "Visual projects"}</h3><p className="mt-1 text-xs text-slate-500">{projects.length} projects currently displayed.</p></div>
          <Button size="sm" icon={Plus} onClick={addProject}>Add project</Button>
        </div>

        <div className="grid gap-4">
          {projects.map((project) => (
            <article key={project.id} className="builder-form-card">
              <div className="grid gap-5 sm:grid-cols-[150px_1fr]">
                <div>
                  <ProjectImage image={project.image} title={project.title} />
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500"><ImagePlus className="h-3.5 w-3.5" /> Edit image path below</div>
                </div>
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div><h3 className="font-bold text-white">{project.title}</h3><p className="mt-1 text-xs text-slate-500">{project.category}</p></div>
                    <Button variant="danger" size="sm" icon={Trash2} onClick={() => removeArrayItem(tab, project.id)} aria-label={`Delete ${project.title}`} />
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Field label="Project title" value={project.title} onChange={(event) => updateArrayItem(tab, project.id, { title: event.target.value })} />
                    <Field label="Category" value={project.category} onChange={(event) => updateArrayItem(tab, project.id, { category: event.target.value })} />
                  </div>
                </div>
              </div>
              <Textarea className="mt-4" label="Project description" value={project.description} onChange={(event) => updateArrayItem(tab, project.id, { description: event.target.value })} />
              <Field className="mt-4" label="Image URL or /public path" value={project.image} onChange={(event) => updateArrayItem(tab, project.id, { image: event.target.value })} />
              {isFrontend ? (
                <>
                  <Field className="mt-4" label="Technologies" hint="Separate technologies with commas." value={project.technologies.join(", ")} onChange={(event) => updateArrayItem(tab, project.id, { technologies: event.target.value.split(",").map((value) => value.trim()).filter(Boolean) })} />
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Field label="Live demo URL" value={project.liveUrl} onChange={(event) => updateArrayItem(tab, project.id, { liveUrl: event.target.value })} />
                    <Field label="Source URL" value={project.sourceUrl} onChange={(event) => updateArrayItem(tab, project.id, { sourceUrl: event.target.value })} />
                  </div>
                </>
              ) : (
                <>
                  <Field className="mt-4" label="Tools / disciplines" hint="Separate tools with commas." value={project.tools.join(", ")} onChange={(event) => updateArrayItem(tab, project.id, { tools: event.target.value.split(",").map((value) => value.trim()).filter(Boolean) })} />
                  <Field className="mt-4" label="Behance or project URL" value={project.projectUrl} onChange={(event) => updateArrayItem(tab, project.id, { projectUrl: event.target.value })} />
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
