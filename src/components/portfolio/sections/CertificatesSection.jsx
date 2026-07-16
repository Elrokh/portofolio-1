import { Award, ArrowUpRight } from "lucide-react";

export default function CertificatesSection({ portfolio }) {
  return (
    <section id="certificates" className="portfolio-section">
      <div className="portfolio-container">
        <div className="max-w-3xl">
          <div className="portfolio-section-kicker">Learning & growth</div>
          <h2 className="portfolio-section-title mt-4">Training that supports the work beyond the screen.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {portfolio.certificates.map((certificate) => (
            <article key={certificate.id} className="portfolio-certificate-card">
              <div className="flex items-start justify-between gap-4">
                <div className="portfolio-icon-box"><Award className="h-5 w-5" /></div>
                {certificate.url ? <a href={certificate.url} target="_blank" rel="noreferrer" className="portfolio-icon-button"><ArrowUpRight className="h-4 w-4" /></a> : null}
              </div>
              <div className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--portfolio-accent)]">{certificate.date}</div>
              <h3 className="mt-2 text-xl font-bold text-[color:var(--portfolio-text)]">{certificate.title}</h3>
              <p className="mt-1 text-sm font-semibold text-[color:var(--portfolio-muted)]">{certificate.issuer}</p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--portfolio-muted)]">{certificate.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
