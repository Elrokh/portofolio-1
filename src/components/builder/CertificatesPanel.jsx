import { Award, Plus, Trash2 } from "lucide-react";
import { usePortfolio } from "../../context/PortfolioContext";
import Button from "../common/Button";
import { Field, Textarea } from "../common/Field";
import PanelTitle from "../common/PanelTitle";

export default function CertificatesPanel() {
  const { portfolio, updateArrayItem, addArrayItem, removeArrayItem } = usePortfolio();

  const addCertificate = () => addArrayItem("certificates", {
    id: `certificate-${Date.now()}`,
    title: "New certificate",
    issuer: "Training provider",
    date: "Completed",
    description: "Describe what you learned and how it supports your work.",
    url: "",
  });

  return (
    <div>
      <PanelTitle title="Certificates" description="Add training, camps and professional learning experiences." />
      <div className="builder-panel-content">
        <div className="flex items-center justify-between gap-4"><div><h3 className="text-sm font-bold text-white">Professional learning</h3><p className="mt-1 text-xs text-slate-500">Your Freelancing Camp certificate is included.</p></div><Button size="sm" icon={Plus} onClick={addCertificate}>Add certificate</Button></div>
        <div className="grid gap-4">
          {portfolio.certificates.map((certificate) => (
            <article key={certificate.id} className="builder-form-card">
              <div className="mb-5 flex items-start justify-between gap-4"><div className="flex items-center gap-3"><div className="builder-card-icon"><Award className="h-4 w-4" /></div><div><h3 className="text-sm font-bold text-white">{certificate.title}</h3><p className="text-xs text-slate-500">{certificate.issuer}</p></div></div><Button variant="danger" size="sm" icon={Trash2} onClick={() => removeArrayItem("certificates", certificate.id)} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Certificate title" value={certificate.title} onChange={(event) => updateArrayItem("certificates", certificate.id, { title: event.target.value })} />
                <Field label="Issuer" value={certificate.issuer} onChange={(event) => updateArrayItem("certificates", certificate.id, { issuer: event.target.value })} />
                <Field label="Date / status" value={certificate.date} onChange={(event) => updateArrayItem("certificates", certificate.id, { date: event.target.value })} />
                <Field label="Certificate URL" value={certificate.url} onChange={(event) => updateArrayItem("certificates", certificate.id, { url: event.target.value })} />
              </div>
              <Textarea className="mt-4" label="Description" value={certificate.description} onChange={(event) => updateArrayItem("certificates", certificate.id, { description: event.target.value })} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
