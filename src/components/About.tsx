import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8">About</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
          <ScrollReveal>
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-zinc-800 overflow-hidden mx-auto md:mx-0">
              <img
                src="/assets/og/default.png"
                alt="rakyzu"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
            <ScrollReveal>
              <p>
                I'm a developer and designer passionate about building beautiful,
                functional digital products. I specialize in modern web technologies
                including TypeScript, React, and Node.js, with a focus on performant
                and accessible user interfaces.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                With experience spanning full-stack development and UI/UX design, I
                bring a holistic approach to every project. I believe in writing clean,
                maintainable code and creating interfaces that delight users.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p>
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or experimenting with creative
                tools.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
