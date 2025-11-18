import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 backdrop-blur border border-white/10 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Muhammad Awais
          </h1>
          <p className="mt-3 text-lg md:text-xl text-slate-300">
            Full‑stack Laravel + Vue developer crafting robust backends and delightful frontends. I build from pixel to production.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 text-white hover:bg-white/15 border border-white/10 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}
