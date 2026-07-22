import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';
import { PROFILE, TECH_BADGES } from '../content';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pb-20 pt-24">
      <div className="absolute inset-0 grid-bg radial-fade animate-gridMove" aria-hidden />
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px] animate-pulseGlow"
        aria-hidden
      />

      <div className="container-px relative z-10">
        <div className="flex min-h-[calc(100vh-17rem)] items-center">
          <div className="flex max-w-3xl flex-col items-start">
          <p className="eyebrow mb-6 reveal">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {PROFILE.location}
          </p>

          <h1 className="reveal text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {PROFILE.headline}
          </h1>

          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {PROFILE.subhead}
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo('#projects')}
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="btn-ghost"
            >
              Contact Me
            </button>
            <a href={PROFILE.resume} download className="btn-ghost">
              <FileText size={16} /> Resume
            </a>
          </div>

          <div className="reveal mt-10 flex items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent hover:text-accent"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent hover:text-accent"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} className="animate-float" />
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="flex flex-wrap gap-3 border-t border-border/60 pt-6">
            {TECH_BADGES.map((t) => (
              <div
                key={t.label}
                className="group flex min-w-[7.25rem] items-center gap-3 rounded-xl border border-border bg-surface/80 px-4 py-3 font-mono text-sm text-muted backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-ink hover:shadow-[0_12px_30px_-18px_rgba(59,130,246,0.8)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <t.icon size={19} strokeWidth={1.8} />
                </span>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
