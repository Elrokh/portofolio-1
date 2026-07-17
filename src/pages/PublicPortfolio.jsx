import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import PortfolioRenderer from "../components/portfolio/PortfolioRenderer";
import { usePortfolio } from "../context/PortfolioContext";

export default function PublicPortfolio() {
  const { slug } = useParams();
  const { portfolio } = usePortfolio();

  const portfolioContainerRef = useRef(null);
  const [publicPortfolio, setPublicPortfolio] = useState(portfolio);

  /*
   * تحديث بيانات البورتفوليو وعنوان الصفحة.
   */
  useEffect(() => {
    if (!portfolio) return;

    setPublicPortfolio(portfolio);

    const name = portfolio.personal?.name || "Portfolio";
    const title =
      portfolio.personal?.title || "Interactive Portfolio";

    document.title = `${name} | ${title}`;

    return () => {
      document.title =
        "PortfolioCraft | Interactive Portfolio Builder";
    };
  }, [portfolio]);

  /*
   * منع روابط الأقسام من كسر HashRouter.
   *
   * الخطأ القديم:
   * href="#frontendProjects"
   *
   * كان يحوّل الرابط إلى:
   * /#/frontendProjects
   *
   * وReact Router كان يعتبره Route جديد ويعرض 404.
   */
  useEffect(() => {
    const container = portfolioContainerRef.current;

    if (!container) return undefined;

    const handleSectionNavigation = (event) => {
      const clickedElement = event.target;

      if (!(clickedElement instanceof Element)) return;

      const anchor = clickedElement.closest("a[href]");

      if (!anchor || !container.contains(anchor)) return;

      const href = anchor.getAttribute("href");

      /*
       * نتعامل فقط مع روابط الأقسام:
       * #about
       * #frontendProjects
       * #graphicProjects
       *
       * ولا نتدخل في روابط HashRouter مثل:
       * #/dashboard
       * #/portfolio/mustafa-elrokh
       */
      if (
        !href ||
        !href.startsWith("#") ||
        href.startsWith("#/")
      ) {
        return;
      }

      const sectionId = decodeURIComponent(
        href.substring(1).trim()
      );

      if (!sectionId) return;

      const section = document.getElementById(sectionId);

      if (!section) {
        console.warn(
          `Portfolio section "${sectionId}" was not found.`
        );

        return;
      }

      event.preventDefault();
      event.stopPropagation();

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    container.addEventListener(
      "click",
      handleSectionNavigation
    );

    return () => {
      container.removeEventListener(
        "click",
        handleSectionNavigation
      );
    };
  }, [publicPortfolio]);

  const toggleMode = () => {
    setPublicPortfolio((current) => {
      if (!current) return current;

      const currentMode =
        current.settings?.mode || "dark";

      return {
        ...current,

        settings: {
          ...current.settings,

          mode:
            currentMode === "dark"
              ? "light"
              : "dark",
        },
      };
    });
  };

  /*
   * حماية الصفحة في حالة البيانات لم تُحمّل بعد.
   */
  if (!portfolio || !publicPortfolio) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#020617] px-4 text-center text-white">
        <div>
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-cyan-400" />

          <p className="mt-4 text-sm text-slate-400">
            Loading portfolio...
          </p>
        </div>
      </div>
    );
  }

  /*
   * التحقق من رابط البورتفوليو.
   */
  const validSlug =
    slug === portfolio.slug ||
    slug === "mustafa-elrokh";

  if (!validSlug) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#020617] px-4 text-center text-white">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            404 Error
          </div>

          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Portfolio not found
          </h1>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-500">
            The requested public portfolio slug does not exist
            in this browser.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={portfolioContainerRef}>
      <PortfolioRenderer
        portfolio={publicPortfolio}
        onToggleMode={toggleMode}
      />
    </div>
  );
}