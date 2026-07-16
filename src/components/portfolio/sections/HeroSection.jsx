import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

export default function HeroSection({ portfolio }) {
  const { personal, socials } = portfolio;

  return (
    <section id="hero" className="portfolio-section portfolio-hero-section relative isolate overflow-hidden pt-12 sm:pt-20">
      <div className="portfolio-hero-orb portfolio-hero-orb-one" />
      <div className="portfolio-hero-orb portfolio-hero-orb-two" />
      <div className="portfolio-container relative grid min-h-[720px] items-center gap-14 pb-20 lg:grid-cols-[1.08fr_.92fr] lg:pb-28">
        <div>
          <div className="portfolio-eyebrow">
            <Sparkles className="h-4 w-4" />
            {personal.availability}
          </div>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--portfolio-accent)]">
            Hello, I'm
          </p>
          <h1 className="portfolio-display-title mt-4">
            {personal.name}
            <span>{personal.title}</span>
          </h1>
          <p className="mt-5 text-xl font-medium text-[color:var(--portfolio-muted)] sm:text-2xl">
            {personal.secondaryTitle}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[color:var(--portfolio-muted)] sm:text-lg">
            I combine two years of front-end development experience with a strong visual design background to build responsive products that feel as good as they function.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#frontendProjects" className="portfolio-primary-button">
              Explore my work <ArrowDown className="h-4 w-4" />
            </a>
            <a href={`mailto:${personal.email}`} className="portfolio-secondary-button">
              Contact me <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={socials.github} target="_blank" rel="noreferrer" className="portfolio-social-link">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="portfolio-social-link">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <span className="portfolio-social-link cursor-default">
              <MapPin className="h-4 w-4" /> {personal.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="portfolio-photo-glow" />
          <div className="portfolio-photo-frame">
            <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between">
              <span className="rounded-full border border-white/[0.15] bg-slate-950/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                Front End Developer
              </span>
              <ArrowUpRight className="h-5 w-5 text-white/70" />
            </div>
            <img src={personal.profileImage} alt={personal.name} className="h-full w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-2 gap-3">
              <div className="portfolio-photo-stat">
                <strong>{portfolio.about.yearsExperience}</strong>
                <span>Years of experience</span>
              </div>
              <div className="portfolio-photo-stat">
                <strong>{portfolio.about.projectsCount}</strong>
                <span>Selected projects</span>
              </div>
            </div>
          </div>
          <div className="portfolio-floating-card portfolio-floating-card-left">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Currently at Logic Designs
          </div>
          <div className="portfolio-floating-card portfolio-floating-card-right">
            React • Angular • Figma
          </div>
        </div>
      </div>
    </section>
  );
}
