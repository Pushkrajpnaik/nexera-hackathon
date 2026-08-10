import React from 'react'
import image from '../assets/poly.jpg'

function About() {
  return (
    <section id="about" className="section-wrapper py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-label">About CultivAIte</p>
            <h2 className="section-heading">Bringing intelligent farming tools to every field</h2>
            <p className="section-copy max-w-2xl">
              CultivAIte is designed for farmers and agronomists who want actionable, data-driven crop recommendations. We combine artificial intelligence, geospatial analysis, and clear local insights so your farm plan reflects both your goals and your land's real characteristics.
            </p>
            <p className="mt-6 section-copy max-w-2xl">
              Our mission is to simplify sustainable agriculture with tools that help you maximize yield, optimize resources, and choose the right crops for your soil and climate.
            </p>
          </div>

          <div className="rounded-[32px] bg-slate-950/10 p-4 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
            <img className="h-full w-full rounded-[28px] object-cover" src={image} alt="CultivAIte overview" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About