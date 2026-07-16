import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PortfolioRenderer from "../components/portfolio/PortfolioRenderer";
import { usePortfolio } from "../context/PortfolioContext";

export default function PublicPortfolio() {
  const { slug } = useParams();
  const { portfolio } = usePortfolio();
  const [publicPortfolio, setPublicPortfolio] = useState(portfolio);

  useEffect(() => {
    setPublicPortfolio(portfolio);
    document.title = `${portfolio.personal.name} | ${portfolio.personal.title}`;
    return () => { document.title = "PortfolioCraft | Interactive Portfolio Builder"; };
  }, [portfolio]);

  const toggleMode = () => {
    setPublicPortfolio((current) => ({
      ...current,
      settings: { ...current.settings, mode: current.settings.mode === "dark" ? "light" : "dark" },
    }));
  };

  if (slug !== portfolio.slug && slug !== "mustafa-elrokh") {
    return <div className="grid min-h-screen place-items-center bg-[#020617] px-4 text-center text-white"><div><h1 className="text-4xl font-black">Portfolio not found</h1><p className="mt-3 text-slate-500">The requested public portfolio slug does not exist in this browser.</p></div></div>;
  }

  return <PortfolioRenderer portfolio={publicPortfolio} onToggleMode={toggleMode} />;
}
