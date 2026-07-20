import { SKILLS } from '../content';

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/30">
      <div className="container-px">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4">02 — Skills</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I use to ship secure, scalable software.
          </h2>
        </div>

        <div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-reveal-group
        >
          {SKILLS.map((skill) => (
            <article
              key={skill.group}
              className="reveal card group p-7 hover:border-accent/40"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent">
                  <skill.icon size={18} />
                </span>
                <h3 className="text-lg font-semibold text-ink">{skill.group}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-bg px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
