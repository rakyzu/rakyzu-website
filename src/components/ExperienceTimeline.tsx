import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Senior Developer",
    company: "Tech Corp",
    period: "2024 — Present",
    description: "Leading full-stack development of cloud-native applications.",
  },
  {
    role: "Full-Stack Developer",
    company: "Startup Inc",
    period: "2022 — 2024",
    description: "Built and shipped features for a SaaS platform serving 10k+ users.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 — 2022",
    description: "Developed responsive web applications for diverse clients.",
  },
  {
    role: "Junior Developer",
    company: "Web Co",
    period: "2020 — 2021",
    description: "Started career building websites and learning modern frameworks.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <p className="text-zinc-500 text-sm mb-10">Where I've worked</p>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i}>
              <div className={`relative flex items-start gap-6 mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block flex-1" />

                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-zinc-600 -translate-x-1/2 mt-1.5 ring-4 ring-zinc-950" />

                <div className="flex-1 pl-10 md:pl-0">
                  <div className="border border-zinc-800 rounded-lg p-5">
                    <span className="text-xs text-zinc-600 font-mono">{exp.period}</span>
                    <h3 className="font-semibold mt-1">{exp.role}</h3>
                    <p className="text-sm text-zinc-400">{exp.company}</p>
                    <p className="text-sm text-zinc-500 mt-2">{exp.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
