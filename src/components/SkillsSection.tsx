import ScrollReveal from "./ScrollReveal";
import { useLang } from "../i18n/LanguageProvider";

const skills = [
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Astro", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Cloudflare Workers", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "Figma", level: "Intermediate" },
  { name: "Next.js", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "Rust", level: "Beginner" },
];

export default function SkillsSection() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 bg-bg-sec">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-fg mb-2">{t.skills.title}</h2>
          <p className="text-fg-muted text-sm mb-10">{t.skills.subtitle}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name}>
              <div className="border border-border rounded-lg px-4 py-3 hover:border-fg-sec transition-colors">
                <p className="text-sm font-medium text-fg">{skill.name}</p>
                <p className="text-xs text-fg-muted mt-0.5">{skill.level}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
