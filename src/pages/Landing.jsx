import FeatureGrid from "../components/landing/FeatureGrid";
import LandingCta from "../components/landing/LandingCta";
import LandingHero from "../components/landing/LandingHero";
import TemplateShowcase from "../components/landing/TemplateShowcase";
import PageShell from "../components/layout/PageShell";

export default function Landing() {
  return (
    <PageShell>
      <LandingHero />
      <FeatureGrid />
      <TemplateShowcase />
      <LandingCta />
    </PageShell>
  );
}
