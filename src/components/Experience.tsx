import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../content';

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface/30">
      <div className="container-px">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4">04 — Leadership & Activities</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Leading on and off the field.</h2>
        </div>
        <ol className="relative" data-reveal-group>
          <span className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block" aria-hidden />
          {EXPERIENCE.map((job, i) => (
            <li key={`${job.company}-${i}`} className="reveal relative mb-10 pl-0 last:mb-0 sm:pl-10">
              <span className="absolute left-0 top-1.5 hidden h-4 w-4 items-center justify-center rounded-full border border-accent bg-bg sm:flex" aria-hidden><span className="h-1.5 w-1.5 rounded-full bg-accent" /></span>
              <div className="card p-6 hover:border-accent/40">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent"><Briefcase size={16} /></span><div><h3 className="text-base font-semibold text-ink">{job.role}</h3><p className="text-sm text-muted">{job.company}</p></div></div>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <ul className="mt-4 space-y-2">{job.bullets.map((b, bi) => <li key={bi} className="flex gap-2 text-sm leading-relaxed text-muted"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />{b}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
