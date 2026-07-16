import { Code2, GraduationCap, Palette, Sparkles } from "lucide-react";

const cards = [
  { icon: Code2, label: "Development", value: "React, Angular and responsive interfaces" },
  { icon: Palette, label: "Design", value: "UI/UX, graphic design and visual systems" },
  { icon: Sparkles, label: "Approach", value: "Clean execution with strong visual detail" },
];

export default function AboutSection({ portfolio }) {
  return (
    <section id="about" className="portfolio-section border-y border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-soft)]">
      <div className="portfolio-container grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <div>
          <div className="portfolio-section-kicker">{portfolio.about.eyebrow}</div>
          <h2 className="portfolio-section-title mt-4">{portfolio.about.headline}</h2>
        </div>
        <div>
          <p className="text-base leading-8 text-[color:var(--portfolio-muted)] sm:text-lg">
            {portfolio.about.bio}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.label} className="portfolio-info-card">
                  <Icon className="h-5 w-5 text-[color:var(--portfolio-accent)]" />
                  <div className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--portfolio-muted)]">{card.label}</div>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--portfolio-text)]">{card.value}</p>
                </article>
              );
            })}
          </div>
          {portfolio.education.map((item) => (
            <div key={item.id} className="mt-6 flex gap-4 rounded-[var(--portfolio-radius)] border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface)] p-5">
              <div className="portfolio-icon-box shrink-0"><GraduationCap className="h-5 w-5" /></div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--portfolio-accent)]">Education</div>
                <h3 className="mt-2 font-bold text-[color:var(--portfolio-text)]">{item.degree}</h3>
                <p className="mt-1 text-sm leading-6 text-[color:var(--portfolio-muted)]">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
