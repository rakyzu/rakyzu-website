import ScrollReveal from "./ScrollReveal";
import { useLang } from "../i18n/LanguageProvider";

type Category = "frontend" | "backend" | "design" | "devops";

const skills: { name: string; level: string; category: Category }[] = [
  { name: "TypeScript", level: "Advanced", category: "frontend" },
  { name: "React", level: "Advanced", category: "frontend" },
  { name: "Next.js", level: "Advanced", category: "frontend" },
  { name: "Astro", level: "Intermediate", category: "frontend" },
  { name: "Tailwind CSS", level: "Advanced", category: "frontend" },
  { name: "Node.js", level: "Advanced", category: "backend" },
  { name: "Python", level: "Intermediate", category: "backend" },
  { name: "PostgreSQL", level: "Intermediate", category: "backend" },
  { name: "Cloudflare Workers", level: "Intermediate", category: "backend" },
  { name: "Rust", level: "Beginner", category: "backend" },
  { name: "Figma", level: "Intermediate", category: "design" },
  { name: "Docker", level: "Intermediate", category: "devops" },
];

const categoryKeys: Category[] = ["frontend", "backend", "design", "devops"];

export default function SkillsSection() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 bg-bg-sec">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-fg mb-2">{t.skills.title}</h2>
          <p className="text-fg-muted text-sm mb-10">{t.skills.subtitle}</p>
        </ScrollReveal>

        <div className="space-y-10">
          {categoryKeys.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (catSkills.length === 0) return null;
            return (
              <div key={cat}>
                <ScrollReveal>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-muted mb-4">
                    {t.skills.categories[cat]}
                  </h3>
                </ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {catSkills.map((skill) => (
                    <ScrollReveal key={skill.name}>
                      <div className="border border-border rounded-lg px-4 py-3 hover:border-fg-sec transition-colors">
                        <p className="text-sm font-medium text-fg">{skill.name}</p>
                        <p className="text-xs text-fg-muted mt-0.5">{skill.level}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
