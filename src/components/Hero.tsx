import { useEffect, useRef } from "react";
import { useLang } from "../i18n/LanguageProvider";
import HeroFrame from "./HeroFrame";

export default function Hero() {
  const { t } = useLang();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.classList.add("animate-fade-in-up");
  }, []);

  return (
    <section className="relative w-full min-h-[480px] md:min-h-screen flex items-center justify-center overflow-hidden">
      <HeroFrame />

      <div className="absolute inset-0 hero-overlay-1 pointer-events-none" />
      <div className="absolute inset-0 hero-overlay-2 pointer-events-none" />

      <div ref={contentRef} className="relative z-10 text-center px-4 max-w-3xl opacity-0">
        <p className="text-sm hero-text-secondary mb-4 font-mono">{t.hero.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight hero-text-primary mb-4">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl hero-text-secondary mb-8">
          {t.hero.subtitle}
        </p>
        <p className="hero-text-muted max-w-md mx-auto mb-10 text-sm">
          {t.hero.description}
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium text-sm transition-colors"
            style={{
              backgroundColor: 'var(--fg)',
              color: 'var(--bg)',
            }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border rounded-lg text-sm font-medium transition-colors"
            style={{
              borderColor: 'var(--fg-muted)',
              color: 'var(--fg-secondary)',
            }}
          >
            {t.hero.cta2}
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/rakyzu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hero-text-secondary hover:hero-text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
          </a>
          <a href="https://linkedin.com/in/rakyzu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hero-text-secondary hover:hero-text-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:zulhampratama@rakyzu.my.id" aria-label="Email" className="hero-text-secondary hover:hero-text-primary transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
