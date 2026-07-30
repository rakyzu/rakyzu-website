import ScrollReveal from "./ScrollReveal";
import { useLang } from "../i18n/LanguageProvider";

const techIcons = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

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
                src="/assets/ProfileImage.png"
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

            <ScrollReveal>
              <div className="flex flex-wrap gap-3 pt-4">
                {techIcons.map((tech) => (
                  <img
                    key={tech.name}
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className="w-8 h-8 opacity-60 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 border border-border rounded-lg text-sm font-medium text-fg hover:bg-bg-elv transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.about.resume}
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
