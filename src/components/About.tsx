import { PROFILE, WHAT_I_DO } from '../content';

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-px">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4">01 — About</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            A developer focused on cloud, DevOps, and full-stack engineering.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16" data-reveal-group>
          <div className="reveal">
            <p className="text-lg leading-relaxed text-ink/90">{PROFILE.about}</p>
            <p className="mt-6 leading-relaxed text-muted">
              My work brings together <span className="text-ink">full-stack development</span>,{' '}
              <span className="text-ink">cloud</span>, and <span className="text-ink">DevOps</span> to build practical software that is ready to grow.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {[
                { k: 'Stack', v: 'MERN' },
                { k: 'Cloud', v: 'AWS' },
                { k: 'Focus', v: 'DevOps' },
                { k: 'Level', v: '3rd Year' },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">{s.k}</dt>
                  <dd className="mt-1 text-lg font-semibold text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHAT_I_DO.map((item) => (
              <article key={item.title} className="reveal card group p-6 hover:border-accent/40">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent"><item.icon size={20} /></div>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
