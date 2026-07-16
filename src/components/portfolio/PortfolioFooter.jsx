import { ArrowUp } from "lucide-react";

export default function PortfolioFooter({ portfolio }) {
  return (
    <footer className="border-t border-[color:var(--portfolio-border)] py-8">
      <div className="portfolio-container flex flex-col gap-4 text-sm text-[color:var(--portfolio-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolio.personal.name}. Built with focus and intention.</p>
        <a href="#hero" className="inline-flex items-center gap-2 font-semibold text-[color:var(--portfolio-text)]">
          Back to top <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
