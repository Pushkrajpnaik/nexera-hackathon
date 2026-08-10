import React from 'react';
import bgImage from '../assets/sunn3.jpg';

function Hero() {
  const handleGetStartedClick = () => {
    const farmAnalysisSection = document.getElementById('farm-analysis-section');
    if (farmAnalysisSection) {
      farmAnalysisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero-section mx-4 mt-6 overflow-hidden rounded-[32px] bg-cover bg-center shadow-[0_30px_80px_rgba(7,39,65,0.18)]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-6 py-16 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-emerald-100/25 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
            Smart farming, simplified
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Unlock optimal crop yield with AI-powered precision.
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-100/90 sm:text-lg">
            CultivAIte transforms field layouts into intelligent crop plans with tailored recommendations, geospatial insight, and simple actions for better harvests.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
            <button className="rounded-full border border-white/60 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/20">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-10 w-full max-w-md rounded-[28px] border border-white/20 bg-slate-950/35 p-8 backdrop-blur-xl lg:mt-0">
          <p className="text-xl font-semibold text-emerald-200">Farm Intelligence Card</p>
          <p className="mt-4 text-sm leading-7 text-slate-100/85">
            Draw your own farm area and receive hyper-local recommendations powered by satellite-aware AI, soil insight, and weather-aware planning.
          </p>
          <div className="mt-8 grid gap-4 text-slate-100/90">
            <div className="rounded-3xl bg-white/10 p-4">
              <p className="font-semibold">1. Draw your area</p>
              <p className="text-sm text-slate-200/90">Trace the farm boundary on the map with ease.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4">
              <p className="font-semibold">2. Choose language</p>
              <p className="text-sm text-slate-200/90">Get advice in regional languages for better understanding.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4">
              <p className="font-semibold">3. Analyze & improve</p>
              <p className="text-sm text-slate-200/90">Receive recommendations that maximize yield and sustainability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
