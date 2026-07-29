import { useLang } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/assets/og/hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/60 to-zinc-950/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-sm text-zinc-300 mb-4 font-mono">{t.hero.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-8">
          {t.hero.subtitle}
        </p>
        <p className="text-zinc-400 max-w-md mx-auto mb-10 text-sm">
          {t.hero.description}
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-500 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-800/50 transition-colors"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
