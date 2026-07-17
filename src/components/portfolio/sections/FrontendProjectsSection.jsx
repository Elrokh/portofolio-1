import { ArrowUpRight, Code2, Github } from "lucide-react";
import ProjectImage from "../ProjectImage";

export default function FrontendProjectsSection({ portfolio }) {
  return (
    <section id="frontendProjects" className="portfolio-section">
      <div className="portfolio-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="portfolio-section-kicker">Front End Work</div>
            <h2 className="portfolio-section-title mt-4">Interfaces designed to feel effortless.</h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--portfolio-muted)]">
              Selected React and UI projects combining responsive engineering, thoughtful interaction and clean visual direction.
            </p>
          </div>
          <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="portfolio-text-link">
            View GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolio.frontendProjects.map((project, index) => (
            <article key={project.id} className={`group portfolio-project-card ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_.85fr]" : ""}`}>
              <div className={`portfolio-project-image ${index === 0 ? "lg:min-h-[440px]" : ""}`}>
                <ProjectImage source={project.image} alt={project.title} className="transition duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/[0.15] bg-slate-950/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                  {project.category}
                </span>
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="portfolio-icon-box"><Code2 className="h-5 w-5" /></div>
                  <span className="text-xs font-bold tracking-[0.15em] text-[color:var(--portfolio-muted)]">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[color:var(--portfolio-text)]">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--portfolio-muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="portfolio-tag">{technology}</span>)}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="portfolio-small-button">Live demo <ArrowUpRight className="h-4 w-4" /></a>
                  ) : null}
                  {project.sourceUrl ? (
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="portfolio-outline-button"><Github className="h-4 w-4" /> Source</a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
