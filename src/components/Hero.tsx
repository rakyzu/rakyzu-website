export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/0 to-zinc-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center relative z-10 px-4">
        <p className="text-sm text-zinc-500 mb-4 font-mono">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          rakyzu
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-8">
          Developer & Designer
        </p>
        <p className="text-zinc-500 max-w-md mx-auto mb-10 text-sm">
          Crafting digital experiences with clean code and thoughtful design.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
