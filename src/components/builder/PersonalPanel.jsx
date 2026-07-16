import { ImagePlus, UserRound } from "lucide-react";
import { useRef } from "react";
import { usePortfolio } from "../../context/PortfolioContext";
import Button from "../common/Button";
import { Field } from "../common/Field";
import PanelTitle from "../common/PanelTitle";

export default function PersonalPanel() {
  const { portfolio, updateNested } = usePortfolio();
  const inputRef = useRef(null);
  const personal = portfolio.personal;

  const handleImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => updateNested("personal", "profileImage", reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <PanelTitle title="Personal information" description="The core identity and contact details shown across the portfolio." />
      <div className="builder-panel-content">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
          <div className="flex items-center gap-4">
            <img src={personal.profileImage} alt={personal.name} className="h-20 w-20 rounded-2xl object-cover object-top ring-1 ring-white/10" />
            <div>
              <div className="text-sm font-bold text-white">Profile photo</div>
              <p className="mt-1 text-xs leading-5 text-slate-500">Use a clear professional portrait. The uploaded image is saved in this browser.</p>
              <input ref={inputRef} type="file" accept="image/*" onChange={handleImage} className="hidden" />
              <Button variant="secondary" size="sm" icon={ImagePlus} className="mt-3" onClick={() => inputRef.current?.click()}>
                Replace image
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" value={personal.name} onChange={(event) => updateNested("personal", "name", event.target.value)} />
          <Field label="Professional name" value={personal.shortName} onChange={(event) => updateNested("personal", "shortName", event.target.value)} />
          <Field label="Primary title" value={personal.title} onChange={(event) => updateNested("personal", "title", event.target.value)} />
          <Field label="Secondary title" value={personal.secondaryTitle} onChange={(event) => updateNested("personal", "secondaryTitle", event.target.value)} />
          <Field label="Age" type="number" min="16" max="100" value={personal.age} onChange={(event) => updateNested("personal", "age", Number(event.target.value))} />
          <Field label="Location" value={personal.location} onChange={(event) => updateNested("personal", "location", event.target.value)} />
          <Field label="Email" type="email" value={personal.email} onChange={(event) => updateNested("personal", "email", event.target.value)} />
          <Field label="Phone (optional)" value={personal.phone} onChange={(event) => updateNested("personal", "phone", event.target.value)} />
        </div>
        <Field label="Availability status" value={personal.availability} onChange={(event) => updateNested("personal", "availability", event.target.value)} />

        <div className="builder-form-card">
          <div className="mb-4">
            <h3 className="text-sm font-bold text-white">Social links</h3>
            <p className="mt-1 text-xs text-slate-500">Your real professional and social profiles are included below.</p>
          </div>
          <div className="grid gap-4">
            <Field label="GitHub" value={portfolio.socials.github} onChange={(event) => updateNested("socials", "github", event.target.value)} />
            <Field label="Behance" value={portfolio.socials.behance} onChange={(event) => updateNested("socials", "behance", event.target.value)} />
            <Field label="LinkedIn" value={portfolio.socials.linkedin} onChange={(event) => updateNested("socials", "linkedin", event.target.value)} />
            <Field label="Facebook" value={portfolio.socials.facebook} onChange={(event) => updateNested("socials", "facebook", event.target.value)} />
            <Field label="Instagram" value={portfolio.socials.instagram} onChange={(event) => updateNested("socials", "instagram", event.target.value)} />
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-400/[0.15] bg-cyan-400/[0.06] p-4 text-sm leading-6 text-slate-400">
          <div className="flex items-center gap-2 font-semibold text-cyan-300"><UserRound className="h-4 w-4" /> Real profile content included</div>
          <p className="mt-2">Your uploaded photo and professional details are already connected to the live preview.</p>
        </div>
      </div>
    </div>
  );
}
