import { projects } from "../data/projects.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

export function renderProjects() {
  const cards = projects
    .map(
      (p) => `
      <article class="rounded-xl border border-outline bg-surface p-6 transition hover:border-accent">
        <h3 class="text-xl font-semibold text-content">${p.name}</h3>
        <p class="mt-2 text-muted">${p.description}</p>
        <p class="mt-3 text-sm text-muted"><strong class="text-content">Problema:</strong> ${p.problem}</p>
        <p class="mt-1 text-sm text-muted"><strong class="text-content">Solución:</strong> ${p.solution}</p>
        <div class="flex flex-wrap gap-2 mt-4">
          ${p.technologies.map((t) => `<span class="rounded border border-outline bg-surface-raised px-2 py-1 text-xs text-muted">${t}</span>`).join("")}
        </div>
        <div class="flex gap-3 mt-4">
          <a href="#" class="text-sm text-accent hover:text-accent-hover">Ver proyecto</a>
          ${p.repository ? `<a href="${p.repository}" target="_blank" rel="noopener" class="text-sm text-muted hover:text-content">Código fuente</a>` : ""}
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
