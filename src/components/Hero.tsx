import { useLang } from "../i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative w-full min-h-[480px] md:min-h-screen flex items-center justify-center overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="hBlur1"><feGaussianBlur stdDeviation="40" /></filter>
          <filter id="hBlur2"><feGaussianBlur stdDeviation="60" /></filter>
          <pattern id="dotGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="var(--hero-dot)" opacity="var(--hero-grid-opacity, 0.08)" />
          </pattern>
        </defs>

        <rect width="1920" height="1080" fill="var(--hero-bg)" />
        <rect width="1920" height="1080" fill="url(#dotGrid)" />

        <g opacity="0.12" stroke="var(--hero-line)" strokeWidth="1" fill="none">
          <path d="M1500,200 L1650,350 L1550,500 L1700,650" />
          <path d="M1550,250 L1700,400 L1600,550" />
          <path d="M1300,150 L1450,300 L1350,450" />
          <path d="M1600,600 L1750,750 L1650,900" />
          <path d="M1200,700 L1350,850 L1250,950" />
        </g>

        <g fill="var(--hero-dot)" opacity="0.2" className="hero-float-1">
          <circle cx="1500" cy="200" r="4" />
          <circle cx="1650" cy="350" r="3" />
          <circle cx="1550" cy="500" r="4" />
          <circle cx="1700" cy="650" r="3" />
          <circle cx="1200" cy="700" r="4" />
          <circle cx="1350" cy="850" r="3" />
          <circle cx="1300" cy="150" r="3" />
          <circle cx="1600" cy="600" r="3" />
        </g>

        <g opacity="0.12" className="hero-float-2">
          <polygon points="1620,280 1660,340 1580,340" stroke="var(--hero-polygon)" strokeWidth="1.5" fill="none" />
          <polygon points="1420,520 1460,580 1380,580" stroke="var(--hero-polygon)" strokeWidth="1.5" fill="none" />
          <rect x="1240" y="440" width="40" height="40" rx="4" stroke="var(--hero-polygon)" strokeWidth="1.5" fill="none" transform="rotate(15,1260,460)" />
          <rect x="1680" y="580" width="30" height="30" rx="3" stroke="var(--hero-polygon)" strokeWidth="1.5" fill="none" transform="rotate(-10,1695,595)" />
        </g>

        <g opacity="0.06">
          <line x1="1100" y1="400" x2="1400" y2="400" stroke="var(--hero-line)" strokeWidth="1" />
          <line x1="1200" y1="650" x2="1600" y2="650" stroke="var(--hero-line)" strokeWidth="0.5" />
          <line x1="1000" y1="250" x2="1300" y2="250" stroke="var(--hero-line)" strokeWidth="0.5" />
        </g>

        <g fontFamily="monospace" fontSize="28" fill="var(--hero-line)" opacity="0.06" fontWeight="bold">
          <text x="1520" y="180">{'</>'}</text>
          <text x="1250" y="880">{'{ }'}</text>
        </g>

        <circle cx="1400" cy="540" r="350" fill="var(--hero-accent-1)" filter="url(#hBlur1)" className="hero-breathe" />
        <circle cx="500" cy="800" r="280" fill="var(--hero-accent-2)" filter="url(#hBlur2)" className="hero-breathe" />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/60 to-zinc-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80 pointer-events-none" />

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
