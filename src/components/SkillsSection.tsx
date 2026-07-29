import ScrollReveal from "./ScrollReveal";

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
  return (
    <section id="skills" className="py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="text-zinc-500 text-sm mb-10">Technologies I work with</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name}>
              <div className="border border-zinc-800 rounded-lg px-4 py-3 hover:border-zinc-600 transition-colors">
                <p className="text-sm font-medium">{skill.name}</p>
                <p className="text-xs text-zinc-600 mt-0.5">{skill.level}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
