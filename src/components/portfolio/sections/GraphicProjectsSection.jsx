import { ArrowUpRight, Palette } from "lucide-react";
import ProjectImage from "../ProjectImage";

export default function GraphicProjectsSection({ portfolio }) {
  return (
    <section id="graphicProjects" className="portfolio-section border-y border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-soft)]">
      <div className="portfolio-container">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="portfolio-section-kicker">Graphic Design Work</div>
            <h2 className="portfolio-section-title mt-4">Visual stories built to be remembered.</h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--portfolio-muted)]">
              Branding, editorial and campaign work that demonstrates the visual thinking behind my development decisions.
            </p>
          </div>
          <a href={portfolio.socials.behance} target="_blank" rel="noreferrer" className="portfolio-text-link">
            Visit Behance <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.graphicProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.projectUrl || "#graphicProjects"}
              target={project.projectUrl ? "_blank" : undefined}
              rel={project.projectUrl ? "noreferrer" : undefined}
              className={`group portfolio-graphic-card ${index === 1 ? "md:translate-y-8" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ProjectImage source={project.image} alt={project.title} className="transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
                  <span className="rounded-full bg-slate-950/[0.55] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] backdrop-blur-xl">{project.category}</span>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--portfolio-accent)]"><Palette className="h-4 w-4" /> Visual project</div>
                <h3 className="mt-3 text-xl font-bold text-[color:var(--portfolio-text)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--portfolio-muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="portfolio-tag">{tool}</span>)}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
