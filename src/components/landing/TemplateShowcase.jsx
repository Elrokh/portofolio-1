import { ArrowUpRight, LayoutTemplate } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";

const templates = [
  {
    name: "Modern Developer",
    description: "Strong hierarchy, technical detail and project-first storytelling.",
    className: "from-cyan-400/60 via-blue-600/60 to-blue-950",
  },
  {
    name: "Minimal Professional",
    description: "A crisp, recruiter-friendly layout built around clarity and readable experience.",
    className: "from-slate-200 via-slate-400 to-slate-800",
  },
  {
    name: "Creative Designer",
    description: "Image-rich composition for visual work, branding and graphic design projects.",
    className: "from-fuchsia-500/70 via-violet-600/70 to-slate-950",
  },
];

export default function TemplateShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#07101f] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Template system"
            title="One profile. Three distinct ways to present it."
            description="The content stays yours while the visual direction, density and project treatment adapt to the template you select."
          />
          <Link to="/builder" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
            Open template controls <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {templates.map((template, index) => (
            <article key={template.name} className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0F172A] shadow-panel">
              <div className={`relative h-64 bg-gradient-to-br ${template.className} p-5`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className={`relative h-full rounded-2xl border border-white/[0.15] ${index === 1 ? "bg-white/90" : "bg-slate-950/70"} p-4 backdrop-blur`}>
                  <div className="flex items-center justify-between">
                    <div className={`h-3 w-20 rounded-full ${index === 1 ? "bg-slate-900" : "bg-white/[0.08]0"}`} />
                    <div className="flex gap-2"><span className="h-2 w-9 rounded-full bg-white/20" /><span className="h-2 w-9 rounded-full bg-white/20" /></div>
                  </div>
                  <div className="mt-8 grid grid-cols-[1fr_80px] gap-5">
                    <div className="space-y-3">
                      <div className={`h-5 w-full rounded ${index === 1 ? "bg-slate-900" : "bg-white/[0.08]0"}`} />
                      <div className={`h-5 w-4/5 rounded ${index === 1 ? "bg-blue-600" : "bg-cyan-400"}`} />
                      <div className={`h-2 w-full rounded ${index === 1 ? "bg-slate-300" : "bg-white/20"}`} />
                      <div className={`h-2 w-5/6 rounded ${index === 1 ? "bg-slate-300" : "bg-white/20"}`} />
                    </div>
                    <div className={`rounded-2xl ${index === 1 ? "bg-slate-300" : "bg-white/10"}`} />
                  </div>
                  <div className="mt-7 grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => <div key={item} className={`h-12 rounded-xl ${index === 1 ? "bg-slate-200" : "bg-white/[0.06]"}`} />)}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  <LayoutTemplate className="h-4 w-4" /> Template {index + 1}
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">{template.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{template.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
