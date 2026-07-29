import { useLang } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/0 to-zinc-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow rounded-full blur-3xl pointer-events-none" />

      <div className="text-center relative z-10 px-4">
        <p className="text-sm text-fg-muted mb-4 font-mono">{t.hero.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-fg mb-4">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-fg-sec mb-8">
          {t.hero.subtitle}
        </p>
        <p className="text-fg-muted max-w-md mx-auto mb-10 text-sm">
          {t.hero.description}
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-fg text-bg rounded-lg font-medium text-sm hover:bg-fg-sec transition-colors"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-fg-sec rounded-lg text-sm font-medium hover:bg-bg-sec transition-colors"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
