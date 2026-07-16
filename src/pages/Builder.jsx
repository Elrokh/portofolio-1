import { useState } from "react";
import AboutPanel from "../components/builder/AboutPanel";
import BuilderSidebar from "../components/builder/BuilderSidebar";
import BuilderTopbar from "../components/builder/BuilderTopbar";
import CertificatesPanel from "../components/builder/CertificatesPanel";
import DesignPanel from "../components/builder/DesignPanel";
import ExperiencePanel from "../components/builder/ExperiencePanel";
import LivePreview from "../components/builder/LivePreview";
import PersonalPanel from "../components/builder/PersonalPanel";
import PreviewToolbar from "../components/builder/PreviewToolbar";
import ProjectsPanel from "../components/builder/ProjectsPanel";
import PublishPanel from "../components/builder/PublishPanel";
import SectionsPanel from "../components/builder/SectionsPanel";
import SkillsPanel from "../components/builder/SkillsPanel";
import { usePortfolio } from "../context/PortfolioContext";

const panelComponents = {
  personal: PersonalPanel,
  about: AboutPanel,
  skills: SkillsPanel,
  experience: ExperiencePanel,
  projects: ProjectsPanel,
  certificates: CertificatesPanel,
  design: DesignPanel,
  sections: SectionsPanel,
  publish: PublishPanel,
};

export default function Builder() {
  const [activePanel, setActivePanel] = useState("personal");
  const { portfolio, updatePortfolio, updateSettings, resetPortfolio, saveStatus } = usePortfolio();
  const ActivePanel = panelComponents[activePanel];

  const confirmReset = () => {
    if (window.confirm("Reset every change and restore Mustafa's original portfolio data?")) resetPortfolio();
  };

  return (
    <div className="h-screen overflow-hidden bg-[#020617] text-slate-100">
      <BuilderTopbar saveStatus={saveStatus} onReset={confirmReset} />
      <div className="builder-layout">
        <BuilderSidebar activePanel={activePanel} onChange={setActivePanel} />
        <section className="builder-editor overflow-y-auto border-r border-white/[0.07] bg-[#07101f]/[0.55]">
          <ActivePanel />
        </section>
        <section className="builder-preview min-w-0 overflow-hidden bg-[#020617]">
          <PreviewToolbar device={portfolio.device} onDeviceChange={(device) => updatePortfolio({ device })} />
          <LivePreview portfolio={portfolio} onToggleMode={() => updateSettings("mode", portfolio.settings.mode === "dark" ? "light" : "dark")} />
        </section>
      </div>
    </div>
  );
}
