import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../content';

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-px">
        <div className="reveal mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl"><p className="eyebrow mb-4">03 — Projects</p><h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Selected work across full-stack, AI, and desktop development.</h2></div>
          <a href="https://github.com/Mushrif-Unique" target="_blank" rel="noopener noreferrer" className="btn-ghost shrink-0"><Github size={16} /> All repos</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {PROJECTS.map((p) => (
            <article key={p.name} className="reveal card group flex flex-col overflow-hidden hover:border-accent/40">
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-accent/20 via-surface-2 to-bg">
                <span className="font-mono text-sm font-medium text-ink">{p.name}</span>
                <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg/80 text-accent backdrop-blur"><FolderGit2 size={16} /></div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">{p.tags.map((tag) => <li key={tag} className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-muted">{tag}</li>)}</ul>
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} source code on GitHub`} className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-ink"><Github size={14} /> Code</a>
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} demo`} className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"><ExternalLink size={14} /> Watch demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
