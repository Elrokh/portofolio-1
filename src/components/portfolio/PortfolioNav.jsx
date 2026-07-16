import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

export default function PortfolioNav({ portfolio, onToggleMode, preview = false }) {
  const [open, setOpen] = useState(false);
  const links = portfolio.sections.filter((section) => section.visible && section.id !== "hero");

  return (
    <header className="portfolio-nav sticky top-0 z-40 border-b border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-bg-alpha)] backdrop-blur-xl">
      <div className="portfolio-container flex h-[72px] items-center justify-between">
        <a href="#hero" className="group inline-flex items-center gap-3">
          <span className="portfolio-logo-mark">ME</span>
          <span className="text-sm font-extrabold tracking-wide text-[color:var(--portfolio-text)]">
            {portfolio.personal.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="portfolio-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMode}
            className="portfolio-icon-button"
            aria-label="Toggle portfolio mode"
          >
            {portfolio.settings.mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          {!preview ? (
            <a href={`mailto:${portfolio.personal.email}`} className="portfolio-small-button hidden sm:inline-flex">
              Let's talk
            </a>
          ) : null}
          <button
            type="button"
            className="portfolio-icon-button lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle portfolio navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="portfolio-container grid gap-2 border-t border-[color:var(--portfolio-border)] py-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm text-[color:var(--portfolio-muted)] hover:bg-[color:var(--portfolio-soft)] hover:text-[color:var(--portfolio-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
