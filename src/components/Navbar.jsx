import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavItem({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200 hover:text-white transition-colors"
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/20" />
            <span className="text-white font-semibold tracking-tight group-hover:text-emerald-200 transition-colors">AwaisDotGeek</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavItem href="#projects" label="Projects" />
            <NavItem href="#about" label="About" />
            <NavItem href="#contact" label="Contact" />
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <a href="https://github.com/awaisdotgeek" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-slate-200 hover:text-white"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/awaisdotgeek" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-slate-200 hover:text-white"><Linkedin size={18} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/90 text-slate-900 font-medium hover:bg-emerald-400 transition-colors">
                <Mail size={16} /> Hire Me
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/5 text-slate-200 hover:text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 animate-in">
            <div className="grid gap-4">
              <NavItem href="#projects" label="Projects" onClick={close} />
              <NavItem href="#about" label="About" onClick={close} />
              <NavItem href="#contact" label="Contact" onClick={close} />
              <div className="h-px bg-white/10" />
              <div className="flex items-center gap-3">
                <a href="https://github.com/awaisdotgeek" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-slate-200 hover:text-white"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/awaisdotgeek" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 text-slate-200 hover:text-white"><Linkedin size={18} /></a>
                <a href="#contact" onClick={close} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/90 text-slate-900 font-medium hover:bg-emerald-400 transition-colors">
                  <Mail size={16} /> Hire Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
