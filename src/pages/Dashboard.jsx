import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Copy,
  Edit3,
  ExternalLink,
  FileDown,
  FolderKanban,
  Palette,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/common/Button";
import PageShell from "../components/layout/PageShell";
import { usePortfolio } from "../context/PortfolioContext";
import { exportElementToPdf } from "../utils/exportPdf";

const stats = [
  {
    label: "Front End projects",
    value: "03",
    icon: FolderKanban,
  },
  {
    label: "Graphic projects",
    value: "03",
    icon: Palette,
  },
  {
    label: "Professional roles",
    value: "04",
    icon: BriefcaseBusiness,
  },
];

export default function Dashboard() {
  const { portfolio } = usePortfolio();
  const [copied, setCopied] = useState(false);

  // Correct GitHub Pages URL when using HashRouter
  const publicUrl = `${window.location.origin}${
    import.meta.env.BASE_URL
  }#/portfolio/${portfolio.slug}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(publicUrl);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy portfolio link:", error);
    }
  };

  const quickExport = async () => {
    const element = document.getElementById("dashboard-portfolio-card");

    if (!element) return;

    await exportElementToPdf(element, `${portfolio.slug}-overview.pdf`);
  };

  return (
    <PageShell>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                Portfolio dashboard
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Welcome back, Mustafa.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                Your profile, front-end work, graphic design projects and
                professional experience are ready to edit and publish.
              </p>
            </div>

            <Link to="/builder">
              <Button size="lg" icon={Plus}>
                Edit portfolio
              </Button>
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              const values = [
                portfolio.frontendProjects.length,
                portfolio.graphicProjects.length,
                portfolio.experience.length,
              ];

              return (
                <motion.article
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="rounded-[24px] border border-white/[0.08] bg-[#0F172A]/75 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-3xl font-black text-white">
                      {String(values[index]).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-semibold text-slate-400">
                    {stat.label}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
            <article
              id="dashboard-portfolio-card"
              className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0F172A] shadow-panel"
            >
              <div className="relative min-h-[370px] overflow-hidden bg-[radial-gradient(circle_at_78%_25%,rgba(37,99,235,.3),transparent_30%),linear-gradient(135deg,#07101f,#020617)] p-6 sm:p-9">
                <div className="absolute right-8 top-8 h-64 w-64 rounded-full border border-cyan-400/10" />

                <div className="relative grid h-full gap-8 md:grid-cols-[1fr_220px] md:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Ready to publish
                    </div>

                    <h2 className="mt-6 text-4xl font-black tracking-tight text-white">
                      {portfolio.personal.name}
                    </h2>

                    <p className="mt-3 text-xl font-semibold text-cyan-300">
                      {portfolio.personal.title}
                    </p>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                      {portfolio.about.headline}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {["React.js", "Angular", "Tailwind CSS", "Figma"].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="mx-auto h-64 w-52 overflow-hidden rounded-[28px] border border-white/10 bg-blue-600/[0.15] shadow-2xl">
                    <img
                      src={portfolio.personal.profileImage}
                      alt={portfolio.personal.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/[0.08] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-bold text-white">
                    Modern Developer Portfolio
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    Last changes are automatically saved in your browser.
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link to="/builder">
                    <Button variant="secondary" size="sm" icon={Edit3}>
                      Edit
                    </Button>
                  </Link>

                  <Link
                    to={`/portfolio/${portfolio.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="secondary" size="sm" icon={ExternalLink}>
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="rounded-[28px] border border-white/[0.08] bg-[#0F172A] p-6">
                <h3 className="text-lg font-bold text-white">Quick actions</h3>

                <div className="mt-5 grid gap-3">
                  <Link to="/builder" className="dashboard-action">
                    <span className="inline-flex items-center gap-3">
                      <Edit3 className="h-4 w-4 text-cyan-300" />
                      Continue editing
                    </span>

                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={copy}
                    className="dashboard-action"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Copy className="h-4 w-4 text-cyan-300" />

                      {copied ? "Link copied" : "Copy public link"}
                    </span>

                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={quickExport}
                    className="dashboard-action"
                  >
                    <span className="  inline-flex items-center gap-3">
                      <FileDown className="h-4 w-4 text-cyan-300" />
                      Export overview
                    </span>

                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>

              <article className="rounded-[28px] border border-cyan-400/[0.15] bg-gradient-to-br from-cyan-400/10 via-blue-700/10 to-[#0F172A] p-6">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                  Profile strength
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <strong className="text-5xl font-black text-white">
                    94%
                  </strong>

                  <span className="text-sm font-semibold text-emerald-300">
                    Excellent
                  </span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Add final live demo URLs and a certificate file to make the
                  profile fully complete.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
