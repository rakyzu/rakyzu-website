import ScrollReveal from "./ScrollReveal";
import { useLang } from "../i18n/LanguageProvider";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-fg mb-8">{t.about.title}</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
          <ScrollReveal>
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mx-auto md:mx-0">
              <img
                src="/assets/og/profile.png"
                alt="rakyzu"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <div className="space-y-4 text-fg-sec text-sm leading-relaxed">
            <ScrollReveal>
              <p>{t.about.p1}</p>
            </ScrollReveal>
            <ScrollReveal>
              <p>{t.about.p2}</p>
            </ScrollReveal>
            <ScrollReveal>
              <p>{t.about.p3}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
