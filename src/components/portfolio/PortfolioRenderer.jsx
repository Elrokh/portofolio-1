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
  Inter: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  Manrope: 'Manrope, ui-sans-serif, system-ui, sans-serif',
  Poppins: 'Poppins, ui-sans-serif, system-ui, sans-serif',
  Serif: 'Georgia, "Times New Roman", serif',
  Mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
};

export default function PortfolioRenderer({ portfolio, onToggleMode, preview = false, elementId = "portfolio-renderer" }) {
  const isDark = portfolio.settings.mode === "dark";
  const style = {
    "--portfolio-bg": isDark ? portfolio.settings.background : "#F8FAFC",
    "--portfolio-bg-alpha": isDark ? "rgba(2, 6, 23, .86)" : "rgba(248, 250, 252, .88)",
    "--portfolio-surface": isDark ? portfolio.settings.surface : "#FFFFFF",
    "--portfolio-soft": isDark ? "rgba(15, 23, 42, .52)" : "rgba(226, 232, 240, .52)",
    "--portfolio-soft-strong": isDark ? "rgba(148, 163, 184, .12)" : "rgba(15, 23, 42, .10)",
    "--portfolio-text": isDark ? portfolio.settings.text : "#0F172A",
    "--portfolio-muted": isDark ? "#94A3B8" : "#475569",
    "--portfolio-border": isDark ? "rgba(148, 163, 184, .13)" : "rgba(15, 23, 42, .12)",
    "--portfolio-primary": portfolio.settings.primary,
    "--portfolio-secondary": portfolio.settings.secondary,
    "--portfolio-accent": portfolio.settings.accent,
    "--portfolio-primary-soft": `${portfolio.settings.primary}1f`,
    "--portfolio-radius": `${portfolio.settings.radius}px`,
    "--portfolio-font": fontFamilies[portfolio.settings.font] || fontFamilies.Inter,
  };

  return (
    <div
      id={elementId}
      style={style}
      className={`portfolio-root portfolio-template-${portfolio.template} ${isDark ? "portfolio-dark" : "portfolio-light"}`}
    >
      <PortfolioNav portfolio={portfolio} onToggleMode={onToggleMode} preview={preview} />
      <main>
        {portfolio.sections.map((section) => {
          if (!section.visible) return null;
          const Section = sections[section.id];
          return Section ? <Section key={section.id} portfolio={portfolio} /> : null;
        })}
      </main>
      <PortfolioFooter portfolio={portfolio} />
    </div>
  );
}
