export default function Projects() {
  const items = [
    {
      title: 'SaaS Starter (Laravel + Vue)',
      desc: 'Multi-tenant boilerplate with teams, billing, and permissions',
      tags: ['Laravel', 'Vue 3', 'Inertia', 'Stripe'],
      link: 'https://awaisdotgeek.com'
    },
    {
      title: 'E-commerce API',
      desc: 'Headless backend with clean architecture and testing',
      tags: ['Laravel', 'MySQL', 'Pest'],
      link: '#'
    },
    {
      title: 'Realtime Chat',
      desc: 'WebSockets powered chat with presence and typing indicators',
      tags: ['Laravel', 'Echo', 'Redis', 'Vue'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Highlighted Projects</h2>
          <p className="mt-2 text-slate-300">A quick look at things I loved building.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <a key={p.title} href={p.link} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/7 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold group-hover:text-emerald-200 transition-colors">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
