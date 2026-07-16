import { Check, Copy, Download, ExternalLink, Link2, Rocket } from "lucide-react";
import { useMemo, useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import { exportElementToPdf } from "../../utils/exportPdf";
import { slugify } from "../../utils/slugify";
import Button from "../common/Button";
import { Field, Textarea } from "../common/Field";
import PanelTitle from "../common/PanelTitle";

export default function PublishPanel() {
  const { portfolio, updatePortfolio, updateNested } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [exporting, setExporting] = useState(false);
  const publicUrl = useMemo(() => `${window.location.origin}/portfolio/${portfolio.slug}`, [portfolio.slug]);

  const copyLink = async () => {
    await navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const exportPdf = async () => {
    setExporting(true);
    try {
      await exportElementToPdf(document.getElementById("portfolio-preview-canvas"), `${portfolio.slug || "portfolio"}.pdf`);
    } catch (error) {
      window.alert(error.message || "Could not export the PDF.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div>
      <PanelTitle title="Publish & export" description="Create a shareable route, refine the contact message and export the live portfolio as PDF." />
      <div className="builder-panel-content">
        <div className="builder-form-card">
          <div className="mb-5 flex items-center gap-3"><div className="builder-card-icon"><Link2 className="h-4 w-4" /></div><div><h3 className="text-sm font-bold text-white">Public link</h3><p className="text-xs text-slate-500">The route works inside this React application.</p></div></div>
          <Field label="Portfolio slug" value={portfolio.slug} onChange={(event) => updatePortfolio({ slug: slugify(event.target.value) })} hint="Lowercase letters, numbers and hyphens only." />
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#020617] p-2 pl-4">
            <span className="min-w-0 flex-1 truncate text-xs text-slate-500">{publicUrl}</span>
            <Button variant="secondary" size="sm" icon={copied ? Check : Copy} onClick={copyLink}>{copied ? "Copied" : "Copy"}</Button>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <Button icon={Rocket} onClick={() => updatePortfolio({ published: true })}>{portfolio.published ? "Published" : "Publish portfolio"}</Button>
            <a href={`/portfolio/${portfolio.slug}`} target="_blank" rel="noreferrer"><Button variant="secondary" icon={ExternalLink} className="w-full">Open public page</Button></a>
          </div>
        </div>

        <div className="builder-form-card">
          <h3 className="text-sm font-bold text-white">Contact section</h3>
          <p className="mt-1 text-xs text-slate-500">Control the final call to action.</p>
          <Textarea className="mt-4" label="Headline" value={portfolio.contact.headline} onChange={(event) => updateNested("contact", "headline", event.target.value)} />
          <Textarea className="mt-4" label="Description" value={portfolio.contact.description} onChange={(event) => updateNested("contact", "description", event.target.value)} />
        </div>

        <div className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-600/10 to-[#0F172A] p-5">
          <Download className="h-6 w-6 text-cyan-300" />
          <h3 className="mt-4 text-lg font-bold text-white">Export high-resolution PDF</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">The exporter captures the full live preview and creates one continuous PDF page suitable for direct sharing.</p>
          <Button className="mt-5 w-full" icon={Download} loading={exporting} onClick={exportPdf}>Export portfolio PDF</Button>
        </div>
      </div>
    </div>
  );
}
