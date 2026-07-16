import { BriefcaseBusiness, Check } from "lucide-react";

export default function ExperienceSection({ portfolio }) {
  return (
    <section id="experience" className="portfolio-section border-y border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-soft)]">
      <div className="portfolio-container">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="portfolio-section-kicker">Professional journey</div>
            <h2 className="portfolio-section-title mt-4">Experience shaped across development and design.</h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--portfolio-muted)]">
              Working while studying gave me early exposure to real teams, client needs and the discipline required to turn visual ideas into working products.
            </p>
          </div>

          <div className="space-y-5">
            {portfolio.experience.map((item, index) => (
              <article key={item.id} className="portfolio-experience-card">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="portfolio-icon-box shrink-0"><BriefcaseBusiness className="h-5 w-5" /></div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--portfolio-accent)]">
                        {String(index + 1).padStart(2, "0")} • {item.period}
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-[color:var(--portfolio-text)]">{item.role}</h3>
                      <p className="mt-1 font-semibold text-[color:var(--portfolio-muted)]">{item.company} · {item.location}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-[color:var(--portfolio-muted)]">{item.description}</p>
                <div className="mt-5 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 text-sm leading-6 text-[color:var(--portfolio-muted)]">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--portfolio-primary-soft)] text-[color:var(--portfolio-accent)]"><Check className="h-3 w-3" /></span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
