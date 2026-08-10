import React from 'react'

function Footer() {
  return (
    <footer className="mx-4 rounded-[32px] bg-slate-950/95 px-6 py-8 text-slate-300 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/90">CultivAIte</p>
          <p className="mt-2 text-sm text-slate-400">Helping farmers plan smarter with AI-driven recommendations.</p>
        </div>
        <p className="text-sm text-slate-400">© 2025 CultivAIte. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer