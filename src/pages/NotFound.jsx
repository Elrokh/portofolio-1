import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#020617] px-4 text-center text-white">
      <div>
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">404 error</div>
        <h1 className="mt-4 text-6xl font-black">Page not found.</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-slate-500">The page may have moved, or the URL may be incorrect.</p>
        <Link to="/" className="mt-8 inline-block"><Button icon={ArrowLeft}>Return home</Button></Link>
      </div>
    </div>
  );
}
