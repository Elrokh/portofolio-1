export default function PanelTitle({ title, description }) {
  return (
    <div className="border-b border-white/[0.08] px-5 py-5">
      <h2 className="text-lg font-bold text-white">{title}</h2>
      {description ? <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p> : null}
    </div>
  );
}
