import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

const socialItems = [
  { key: "github", label: "GitHub", icon: Github },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin },
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "facebook", label: "Facebook", icon: Facebook },
];

export default function ContactSection({ portfolio }) {
  return (
    <section id="contact" className="portfolio-section border-t border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-soft)]">
      <div className="portfolio-container">
        <div className="portfolio-contact-card">
          <div className="portfolio-contact-glow" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <div className="portfolio-section-kicker">Start a conversation</div>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[color:var(--portfolio-text)] sm:text-5xl lg:text-6xl">
                {portfolio.contact.headline}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--portfolio-muted)]">{portfolio.contact.description}</p>
              <a href={`mailto:${portfolio.personal.email}`} className="portfolio-primary-button mt-8">
                <Mail className="h-4 w-4" /> {portfolio.personal.email}
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {socialItems.map((item) => {
                const Icon = item.icon;
                const href = portfolio.socials[item.key];
                if (!href) return null;
                return (
                  <a key={item.key} href={href} target="_blank" rel="noreferrer" className="portfolio-contact-link">
                    <span className="inline-flex items-center gap-3"><Icon className="h-5 w-5 text-[color:var(--portfolio-accent)]" /> {item.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
