import { useLang } from "../i18n/LanguageProvider";
import HeroFrame from "./HeroFrame";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative w-full min-h-[480px] md:min-h-screen flex items-center justify-center overflow-hidden">
      <HeroFrame />

      <div className="absolute inset-0 hero-overlay-1 pointer-events-none" />
      <div className="absolute inset-0 hero-overlay-2 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
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
        <div className="flex items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
