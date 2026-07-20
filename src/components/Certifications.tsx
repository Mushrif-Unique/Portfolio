import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '../content';

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-surface/30">
      <div className="container-px">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4">06 — Certifications & Achievements</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Credentials and milestones.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {CERTIFICATIONS.map((c, i) => (
            <article
              key={i}
              className="reveal card group flex items-start gap-4 p-6 hover:border-accent/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent">
                <Award size={18} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                <p className="mt-2 font-mono text-xs text-accent">{c.year}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
