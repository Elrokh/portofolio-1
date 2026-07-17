import { ImageOff } from "lucide-react";
import { assetUrl } from "../../utils/assetUrl";

export default function ProjectImage({ source, alt, className = "" }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950">
      <div className="absolute inset-0 grid place-items-center text-center text-slate-400">
        <div>
          <ImageOff className="mx-auto h-8 w-8 text-cyan-400/70" />
          <span className="mt-3 block text-xs font-bold uppercase tracking-[0.12em]">{alt}</span>
        </div>
      </div>
      <img
        src={assetUrl(source)}
        alt={alt}
        className={`relative h-full w-full object-cover ${className}`}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
