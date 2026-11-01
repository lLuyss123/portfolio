import { personal } from "../data/personal.js";
import { renderButton } from "../components/Button.js";

export function renderHero() {
  return `
  <section id="hero" class="hero-section min-h-screen flex items-center pt-20">
    <figure class="hero-avatar" data-avatar-stage aria-label="Avatar animado que sigue el cursor">
      <canvas class="hero-avatar__canvas" data-avatar-canvas role="img" aria-label="Retrato ilustrado que mira en distintas direcciones"></canvas>
      <figcaption class="hero-avatar__hint" aria-hidden="true">Mueve el cursor para interactuar</figcaption>
    </figure>
    <div class="hero-content max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
      <div class="hero-copy">
        <h1 class="text-5xl font-bold text-white">${personal.name}</h1>
        <p class="text-xl text-blue-400 mt-2">${personal.title}</p>
        <p class="text-[#94a3b8] mt-4">${personal.description}</p>
        <div class="flex flex-wrap gap-2 mt-4">
          ${personal.specialties.map((s) => `<span class="px-3 py-1 text-sm rounded-full bg-[#111a2e] border border-[#1f2a44]">${s}</span>`).join("")}
        </div>
        <div class="flex flex-wrap gap-3 mt-6">
          ${renderButton("Ver proyectos", "#projects")}
          ${renderButton("Descargar CV", personal.cv, "secondary", "CV-Luis-Mejia.pdf")}
          ${renderButton("Contactarme", "#contact", "secondary")}
        </div>
        <div class="flex gap-4 mt-6 text-[#94a3b8]">
          <a href="${personal.github}" target="_blank" rel="noopener" class="hover:text-white">GitHub</a>
          <a href="${personal.linkedin}" target="_blank" rel="noopener" class="hover:text-white">LinkedIn</a>
          <a href="mailto:lmejiaidep@gmail.com" class="hover:text-white">Gmail</a>
        </div>
      </div>
    </div>
  </section>`;
}
