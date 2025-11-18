import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact</h2>
          <p className="mt-2 text-slate-300">Tell me about your project. Let's build something great.</p>
        </div>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6">
          <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <input placeholder="Company / Website" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 md:col-span-2" />
          <textarea required placeholder="What are you building?" rows="5" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 md:col-span-2" />
          <div className="md:col-span-2 flex items-center justify-between">
            <button className="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">Send</button>
            <p className="text-emerald-300 text-sm">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
