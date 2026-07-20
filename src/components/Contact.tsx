import { useState, type FormEvent } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../content';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-px">
        <div className="reveal mb-14 max-w-2xl">
          <p className="eyebrow mb-4">07 — Contact</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something secure and scalable.
          </h2>
          <p className="mt-4 text-muted">
            Open to internships, freelance work, and collaboration on cloud and full-stack
            projects. Drop a message and I'll reply soon.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14" data-reveal-group>
          <div className="reveal flex flex-col gap-4">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: PROFILE.email,
                href: `mailto:${PROFILE.email}`,
              },
              {
                icon: Github,
                label: 'GitHub',
                value: 'github.com/Mushrif-Unique',
                href: PROFILE.github,
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                value: 'linkedin.com/in/mohamad-mushrif-506b59302',
                href: PROFILE.linkedin,
              },
              { icon: MapPin, label: 'Location', value: PROFILE.location, href: null },
            ].map((c) => {
              const inner = (
                <div className="card flex items-center gap-4 p-5 hover:border-accent/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent">
                    <c.icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      {c.label}
                    </p>
                    <p className="mt-0.5 text-sm text-ink">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${c.label}: ${c.value}`}
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal card flex flex-col gap-5 p-7 sm:p-8"
            aria-label="Contact form"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or opportunity..."
                className="resize-y rounded-lg border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Opening your email app...
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>
            <p className="text-center text-xs text-muted">
              This form opens your email client pre-filled — no data is stored.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
