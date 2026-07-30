import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLang } from "../i18n/LanguageProvider";
import { languages, type Lang } from "../i18n/index";

const navKeys = ["about", "skills", "projects", "experience", "guestbook", "contact"] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-fg">
          rakyzu
        </a>

        <div className="hidden md:flex items-center gap-3 text-sm text-fg-sec">
          {navKeys.map((key) => (
            <a key={key} href={`#${key}`} className="hover:text-fg transition-colors">
              {t.nav[key]}
            </a>
          ))}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-xs uppercase tracking-wider hover:text-fg transition-colors cursor-pointer"
            >
              {lang}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-bg border border-border rounded-md shadow-lg py-1 min-w-[120px]">
                {languages.map((l) => (
                  <button
                    key={l.value}
                    onClick={() => { setLang(l.value as Lang); setLangOpen(false); }}
                    className={`block w-full text-left px-3 py-1.5 text-xs transition-colors ${
                      lang === l.value ? "text-fg bg-bg-sec" : "text-fg-sec hover:text-fg hover:bg-bg-elv"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 text-fg-sec">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg px-4 py-4 space-y-3 text-sm text-fg-sec">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setOpen(false)}
              className="block hover:text-fg transition-colors"
            >
              {t.nav[key]}
            </a>
          ))}
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-fg-muted mb-2 uppercase tracking-wider">Language</p>
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.value}
                  onClick={() => { setLang(l.value as Lang); }}
                  className={`px-2 py-1 text-xs rounded border transition-colors ${
                    lang === l.value
                      ? "border-fg-sec text-fg bg-bg-sec"
                      : "border-border text-fg-sec hover:text-fg hover:bg-bg-elv"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
