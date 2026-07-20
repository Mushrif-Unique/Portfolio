import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';
import { PROFILE, TECH_BADGES } from '../content';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg radial-fade animate-gridMove" aria-hidden />
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px] animate-pulseGlow"
        aria-hidden
      />

      <div className="container-px relative z-10 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col items-start">
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

        <div className="reveal relative mx-auto hidden lg:block">
          <div className="relative aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/30 to-transparent blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface">
              <img
                src="/profile.jpg"
                alt="Portrait of Mohamad Mushrif"
                width={400}
                height={400}
                loading="eager"
                className="h-full w-full object-cover opacity-70"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} className="animate-float" />
        </div>
      </div>

      <div className="container-px absolute bottom-24 left-0 right-0 z-10 hidden sm:block">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/60 pt-6">
          {TECH_BADGES.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted"
            >
              <t.icon size={13} className="text-accent" />
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
