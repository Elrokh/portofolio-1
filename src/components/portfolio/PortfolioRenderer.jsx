import AboutSection from "./sections/AboutSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import FrontendProjectsSection from "./sections/FrontendProjectsSection";
import GraphicProjectsSection from "./sections/GraphicProjectsSection";
import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import PortfolioFooter from "./PortfolioFooter";
import PortfolioNav from "./PortfolioNav";

const sections = {
  hero: HeroSection,
  about: AboutSection,
  skills: SkillsSection,
  experience: ExperienceSection,
  frontendProjects: FrontendProjectsSection,
  graphicProjects: GraphicProjectsSection,
  certificates: CertificatesSection,
  contact: ContactSection,
};

const fontFamilies = {
  Inter:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

  Manrope: "Manrope, ui-sans-serif, system-ui, sans-serif",

  Poppins: "Poppins, ui-sans-serif, system-ui, sans-serif",

  Serif: 'Georgia, "Times New Roman", serif',

  Mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
};

export default function PortfolioRenderer({
  portfolio,
  onToggleMode,
  preview = false,
  elementId = "portfolio-renderer",
}) {
  if (!portfolio) {
    return null;
  }

  const settings = portfolio.settings || {};

  const isDark = settings.mode === "dark";

  const style = {
    "--portfolio-bg": isDark ? settings.background || "#020617" : "#F8FAFC",

    "--portfolio-bg-alpha": isDark
      ? "rgba(2, 6, 23, .86)"
      : "rgba(248, 250, 252, .88)",

    "--portfolio-surface": isDark ? settings.surface || "#0F172A" : "#FFFFFF",

    "--portfolio-soft": isDark
      ? "rgba(15, 23, 42, .52)"
      : "rgba(226, 232, 240, .52)",

    "--portfolio-soft-strong": isDark
      ? "rgba(148, 163, 184, .12)"
      : "rgba(15, 23, 42, .10)",

    "--portfolio-text": isDark ? settings.text || "#FFFFFF" : "#0F172A",

    "--portfolio-muted": isDark ? "#94A3B8" : "#475569",

    "--portfolio-border": isDark
      ? "rgba(148, 163, 184, .13)"
      : "rgba(15, 23, 42, .12)",

    "--portfolio-primary": settings.primary || "#22D3EE",

    "--portfolio-secondary": settings.secondary || "#2563EB",

    "--portfolio-accent": settings.accent || "#8B5CF6",

    "--portfolio-primary-soft": `${settings.primary || "#22D3EE"}1f`,

    "--portfolio-radius": `${settings.radius ?? 24}px`,

    "--portfolio-font": fontFamilies[settings.font] || fontFamilies.Inter,
  };

  const portfolioSections = Array.isArray(portfolio.sections)
    ? portfolio.sections
    : [];

  return (
    <div
      id={elementId}
      style={style}
      className={`
        portfolio-root
        portfolio-template-${portfolio.template || "default"}
        ${isDark ? "portfolio-dark" : "portfolio-light"}
      `}
    >
      <PortfolioNav
        portfolio={portfolio}
        onToggleMode={onToggleMode}
        preview={preview}
      />

      <main>
        {portfolioSections.map((section) => {
          if (!section.visible) {
            return null;
          }

          const Section = sections[section.id];

          if (!Section) {
            return null;
          }

          return (
            <div
              key={section.id}
              id={section.id}
              data-portfolio-section={section.id}
              className="scroll-mt-24"
            >
              <Section portfolio={portfolio} />
            </div>
          );
        })}
      </main>

      <PortfolioFooter portfolio={portfolio} />
    </div>
  );
}
