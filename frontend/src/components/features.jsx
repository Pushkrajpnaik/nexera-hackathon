import React from 'react'

function Features() {
  const featureItems = [
    {
      title: 'AI-Powered Optimization',
      description: 'Smart crop allocation uses your land shape, climate, and soil data to suggest the highest-value crop mix for maximum productivity.',
    },
    {
      title: 'Geospatial Precision',
      description: 'Accurate location-aware recommendations mean your farm plan reflects real-world soil and regional conditions.',
    },
    {
      title: 'Intelligent Explanations',
      description: 'Understand each recommendation with clear reasoning from the AI, tailored to your plot and farming goals.',
    },
  ];

  return (
    <section id="features" className="section-wrapper py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="section-label">Features</p>
          <h2 className="section-heading">Everything you need for better farm planning</h2>
          <p className="section-copy">
            CultivAIte brings together mapping, localized analytics, and farmer-friendly recommendations so you can plan with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureItems.map((feature) => (
            <div key={feature.title} className="feature-card rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                ✓
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features