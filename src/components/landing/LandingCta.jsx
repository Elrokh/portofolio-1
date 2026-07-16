import { ArrowRight, WandSparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function LandingCta() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-cyan-400/[0.15] bg-gradient-to-br from-cyan-500/[0.15] via-blue-700/[0.15] to-[#0F172A] px-6 py-16 text-center shadow-glow sm:px-12 lg:py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <WandSparkles className="mx-auto h-10 w-10 text-cyan-300" />
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Mustafa's complete portfolio is already inside. Make it yours in real time.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Open the builder, refine the details, reorder the story, preview every screen and export a polished result.
          </p>
          <Link to="/builder" className="mt-8 inline-block">
            <Button size="lg" icon={ArrowRight}>Launch PortfolioCraft</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
