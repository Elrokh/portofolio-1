const categoryDescriptions = {
  "Front End": "Building responsive, component-driven interfaces and modern application experiences.",
  "UI/UX": "Turning requirements into clear structures, usable flows and polished visual systems.",
  Design: "Creating expressive identities, book covers and promotional visual work.",
  Core: "Thinking through challenges methodically and improving solutions through iteration.",
};

export default function SkillsSection({ portfolio }) {
  const categories = [...new Set(portfolio.skills.map((skill) => skill.category))];

  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container">
        <div className="max-w-3xl">
          <div className="portfolio-section-kicker">Capabilities</div>
          <h2 className="portfolio-section-title mt-4">Development discipline with a designer's eye.</h2>
          <p className="mt-5 text-base leading-8 text-[color:var(--portfolio-muted)] sm:text-lg">
            My toolkit covers front-end implementation, interface thinking and visual communication — allowing me to move from idea to polished experience with fewer gaps.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {categories.map((category) => {
            const categorySkills = portfolio.skills.filter((skill) => skill.category === category);
            return (
              <article key={category} className="portfolio-skill-group">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[color:var(--portfolio-text)]">{category}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[color:var(--portfolio-muted)]">
                      {categoryDescriptions[category] || "A focused set of practical skills used across real projects."}
                    </p>
                  </div>
                  <span className="portfolio-count-badge">{categorySkills.length}</span>
                </div>
                <div className="mt-7 space-y-5">
                  {categorySkills.map((skill) => (
                    <div key={skill.id}>
                      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                        <span className="font-semibold text-[color:var(--portfolio-text)]">{skill.name}</span>
                        <span className="text-[color:var(--portfolio-muted)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[color:var(--portfolio-soft-strong)]">
                        <div className="h-full rounded-full" style={{ width: `${skill.level}%`, background: "linear-gradient(90deg, var(--portfolio-primary), var(--portfolio-secondary))" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
