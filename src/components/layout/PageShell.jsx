import MainFooter from "./MainFooter";
import MainNavbar from "./MainNavbar";

export default function PageShell({ children, footer = true }) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <MainNavbar />
      <main className="pt-20">{children}</main>
      {footer ? <MainFooter /> : null}
    </div>
  );
}
