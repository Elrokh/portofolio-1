import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/mustafa-profile.jpg";
import Button from "../common/Button";

export default function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(6,182,212,.17),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(37,99,235,.2),transparent_30%),linear-gradient(180deg,#020617_0%,#020617_70%,#071126_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.025] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Build. Customize. Publish.
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Your experience deserves a portfolio that feels
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-700 bg-clip-text text-transparent">
              unmistakably yours.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            PortfolioCraft lets you edit every detail, organize sections with drag and drop, preview every device and publish a polished portfolio without writing code.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/builder">
              <Button size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Start with Mustafa's portfolio
              </Button>
            </Link>
            <Link to="/portfolio/mustafa-elrokh">
              <Button size="lg" variant="secondary" icon={MonitorSmartphone} className="w-full sm:w-auto">
                View public portfolio
              </Button>
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {["Live preview", "Responsive controls", "PDF export", "Local autosave"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="absolute -inset-8 -z-10 rounded-[50px] bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#07101f]/95 p-3 shadow-[0_40px_120px_rgba(2,6,23,.7)] backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/[0.08] px-3 pb-3 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 h-7 flex-1 rounded-lg bg-white/[0.04]" />
            </div>
            <div className="grid min-h-[500px] grid-cols-[110px_1fr] overflow-hidden rounded-b-[22px] bg-[#020617] sm:grid-cols-[145px_1fr]">
              <div className="border-r border-white/5 bg-[#07101f] p-3">
                <div className="h-8 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-600/20" />
                <div className="mt-7 space-y-3">
                  {[78, 92, 64, 86, 72, 90].map((width, index) => (
                    <div key={index} className="h-8 rounded-lg bg-white/[0.035] p-2">
                      <div className="h-full rounded bg-slate-700/50" style={{ width: `${width}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden p-4 sm:p-6">
                <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="relative grid gap-4 sm:grid-cols-[1fr_145px] sm:items-center">
                  <div>
                    <div className="h-3 w-20 rounded-full bg-cyan-400/70" />
                    <div className="mt-4 h-7 w-full max-w-[250px] rounded-lg bg-white/90" />
                    <div className="mt-2 h-7 w-4/5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600" />
                    <div className="mt-5 space-y-2">
                      <div className="h-2.5 w-full rounded bg-slate-700" />
                      <div className="h-2.5 w-10/12 rounded bg-slate-700" />
                      <div className="h-2.5 w-8/12 rounded bg-slate-700" />
                    </div>
                    <div className="mt-5 flex gap-2">
                      <div className="h-9 w-24 rounded-xl bg-cyan-500" />
                      <div className="h-9 w-24 rounded-xl border border-white/10" />
                    </div>
                  </div>
                  <div className="relative mx-auto h-44 w-36 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-cyan-400/[0.15] to-blue-700/25 sm:h-52 sm:w-40">
                    <img src={profileImage} alt="Mustafa Ibrahim Galal" className="h-full w-full object-cover object-top" />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#020617] to-transparent" />
                  </div>
                </div>
                <div className="relative mt-7 grid grid-cols-3 gap-3">
                  {["2+ Years", "React", "Design"].map((item) => (
                    <div key={item} className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-3 text-center text-[10px] font-semibold text-slate-300 sm:text-xs">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
                  {[1, 2].map((item) => (
                    <div key={item} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F172A]">
                      <div className={`h-24 ${item === 1 ? "bg-gradient-to-br from-orange-400/60 to-red-900/70" : "bg-gradient-to-br from-cyan-400/50 to-blue-900/80"}`} />
                      <div className="space-y-2 p-3">
                        <div className="h-2.5 w-3/4 rounded bg-slate-500/70" />
                        <div className="h-2 w-full rounded bg-slate-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-7 -left-5 rounded-2xl border border-cyan-400/20 bg-[#0F172A]/95 px-4 py-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="text-xs text-slate-500">Autosave</div>
            <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> All changes saved
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
