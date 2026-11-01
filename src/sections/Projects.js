import { projects } from "../data/projects.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

export function renderProjects() {
  const cards = projects
    .map(
      (p) => `
      <article class="bg-[#111a2e] border border-[#1f2a44] rounded-xl p-6 hover:border-blue-500 transition">
        <h3 class="text-xl font-semibold text-white">${p.name}</h3>
        <p class="text-[#94a3b8] mt-2">${p.description}</p>
        <p class="text-sm text-[#94a3b8] mt-3"><strong class="text-white">Problema:</strong> ${p.problem}</p>
        <p class="text-sm text-[#94a3b8] mt-1"><strong class="text-white">Solución:</strong> ${p.solution}</p>
        <div class="flex flex-wrap gap-2 mt-4">
          ${p.technologies.map((t) => `<span class="px-2 py-1 text-xs rounded bg-[#0b1220] border border-[#1f2a44]">${t}</span>`).join("")}
        </div>
        <div class="flex gap-3 mt-4">
          <a href="#" class="text-sm text-blue-400 hover:text-blue-300">Ver proyecto</a>
          ${p.repository ? `<a href="${p.repository}" target="_blank" rel="noopener" class="text-sm text-[#94a3b8] hover:text-white">Código fuente</a>` : ""}
        </div>
      </article>`
    )
    .join("");
  return `
  <section id="projects" class="py-20">
    <div class="max-w-6xl mx-auto px-4">
      ${renderSectionTitle("Proyectos destacados", "Soluciones reales desarrolladas.")}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>
    </div>
  </section>`;
}
