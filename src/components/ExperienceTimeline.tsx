import ScrollReveal from "./ScrollReveal";
import { useLang } from "../i18n/LanguageProvider";

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
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 bg-bg-sec">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2 text-fg">{t.experience.title}</h2>
          <p className="text-fg-muted text-sm mb-10">{t.experience.subtitle}</p>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={i}>
              <div className={`relative flex mb-12 md:mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block flex-1" />

                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-border md:-translate-x-1/2 mt-1.5 ring-4 ring-bg-sec z-10" />

                <div className="w-full md:flex-1 pl-10 md:pl-0">
                  <div className="border border-border rounded-lg p-5">
                    <span className="text-xs text-fg-muted font-mono">{exp.period}</span>
                    <h3 className="font-semibold mt-1 text-fg">{exp.role}</h3>
                    <p className="text-sm text-fg-sec">{exp.company}</p>
                    <p className="text-sm text-fg-muted mt-2">{exp.description}</p>
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
