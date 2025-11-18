export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I'm Muhammad Awais, a full‑stack developer focused on Laravel and Vue. I care about developer
              experience, performance, and crafting UIs that feel effortless. From architecture to pixel polish,
              I own the full stack. I love shipping real products and working with startups and agencies.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200">8+ years experience</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200">Laravel, Vue 3, Inertia</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200">Tailwind CSS, UI/UX</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-200">CI/CD, Docker</div>
            </div>
          </div>
          <div>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
              <h3 className="text-white font-semibold">Tech I enjoy</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-slate-300 text-sm">
                {['Laravel', 'PHP 8', 'Vue 3', 'Vite', 'Inertia', 'MySQL', 'Redis', 'Tailwind', 'Alpine', 'TypeScript', 'Pest', 'Livewire'].map(t => (
                  <li key={t} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
