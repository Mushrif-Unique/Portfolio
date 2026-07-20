import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE, SOCIALS } from '../content';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-px py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm text-center sm:text-left">
            <p className="font-mono text-sm font-semibold text-ink">
              <span className="text-accent">{'<'}</span>
              {PROFILE.name.replace('[', '').replace(']', '')}
              <span className="text-accent">{'/>'}</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Building scalable, secure software with the MERN stack and cloud.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent hover:text-accent"
              >
                <s.icon size={18} />
              </a>
            ))}
            <button
              type="button"
              onClick={toTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent hover:text-accent"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">
            Built with React, Tailwind, GSAP & Lenis.
          </p>
        </div>
      </div>
    </footer>
  );
}
