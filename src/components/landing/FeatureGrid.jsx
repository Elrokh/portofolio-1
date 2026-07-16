import { motion } from "framer-motion";
import {
  Download,
  Eye,
  GripVertical,
  Link2,
  MoonStar,
  Palette,
  PanelsTopLeft,
  Smartphone,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const features = [
  {
    icon: PanelsTopLeft,
    title: "Professional templates",
    text: "Switch between modern developer, minimal professional and creative designer directions.",
  },
  {
    icon: Eye,
    title: "True live preview",
    text: "Every edit appears instantly, so you always know exactly what the final portfolio will look like.",
  },
  {
    icon: GripVertical,
    title: "Drag-and-drop sections",
    text: "Control the narrative by reordering or hiding sections without touching the layout code.",
  },
  {
    icon: Palette,
    title: "Visual customization",
    text: "Choose colors, type, corner radius and light or dark presentation from a focused design panel.",
  },
  {
    icon: Smartphone,
    title: "Responsive preview",
    text: "Review the exact desktop, tablet and mobile composition before you publish your work.",
  },
  {
    icon: Link2,
    title: "Shareable portfolio link",
    text: "Create a clean personal slug and copy the public URL in one click.",
  },
  {
    icon: Download,
    title: "PDF export",
    text: "Turn the rendered portfolio into a high-resolution PDF for applications and direct sharing.",
  },
  {
    icon: MoonStar,
    title: "Dark and light modes",
    text: "Adapt the presentation to your preferred visual direction while keeping contrast accessible.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="Everything you need"
          title="A complete builder, not a collection of disconnected form fields."
          description="PortfolioCraft was designed around a real front-end and visual design profile, so every section has a clear purpose and a professional final result."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                className="group rounded-[24px] border border-white/[0.08] bg-[#0F172A]/[0.65] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-[#0F172A]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-700/20 text-cyan-300 ring-1 ring-cyan-400/[0.15] transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{feature.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
