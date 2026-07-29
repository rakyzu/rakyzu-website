import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang, Translation } from "./index";
import { en, id, zh, defaultLang } from "./index";

const translations: Record<Lang, Translation> = { en, id, zh };

type LangContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
};

const Ctx = createContext<LangContext>(null!);

export function useLang() {
  return useContext(Ctx);
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(defaultLang);

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored && stored in translations) setLang(stored);
  }, []);

  const set = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  return (
    <Ctx.Provider value={{ lang, setLang: set, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  );
}
