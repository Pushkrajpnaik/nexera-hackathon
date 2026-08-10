import React from 'react'
import logo from '../assets/Cultiv.svg'

function Navbar() {
  return (
    <header className="nav-shell mx-4 mt-4 rounded-[32px] bg-white/80 backdrop-blur-lg border border-white/80 shadow-[0_18px_60px_rgba(28,88,101,0.12)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 gap-4">
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 rounded-2xl object-contain" src={logo} alt="CultivAIte logo" />
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">CultivAIte</p>
            <p className="text-sm text-slate-500">AI-powered farm planning</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 md:flex text-slate-600">
          <a href="#farm-analysis-section" className="transition hover:text-slate-900">Analyze</a>
          <a href="#features" className="transition hover:text-slate-900">Features</a>
          <a href="#about" className="transition hover:text-slate-900">About</a>
        </nav>
        <button className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 md:inline-block">
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Navbar