import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../content';

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-px">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4">05 — Education</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Academic foundation.
          </h2>
        </div>

        <div className="reveal card max-w-3xl p-8 hover:border-accent/40">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                <GraduationCap size={22} />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-ink">{EDUCATION.degree}</h3>
                <p className="mt-1 text-base text-accent">{EDUCATION.school}</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {EDUCATION.details}
                </p>
              </div>
            </div>
            <span className="shrink-0 font-mono text-xs text-muted">{EDUCATION.period}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
