import { Github, Linkedin, Mail } from "lucide-react";
import Logo from "../common/Logo";

export default function MainFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#020617]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
            A complete React and Tailwind portfolio builder created around Mustafa Ibrahim Galal's professional profile, projects and design work.
          </p>
        </div>
        <div className="flex items-center gap-3 md:justify-end">
          <a href="mailto:mustafaelrokh77@gmail.com" className="social-button" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://github.com/Elrokh" target="_blank" rel="noreferrer" className="social-button" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-elrokh-12a302258"
            target="_blank"
            rel="noreferrer"
            className="social-button"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 px-4 py-5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} PortfolioCraft. Designed and built for Mustafa Elrokh.
      </div>
    </footer>
  );
}
