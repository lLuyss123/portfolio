import { experience } from "../data/experience.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

export function renderExperience() {
  const items = experience
    .map(
      (e) => `
      <div class="rounded-xl border border-outline bg-surface p-6">
        <h3 class="text-xl font-semibold text-content">${e.role}</h3>
        <p class="text-accent">${e.company} · ${e.period}</p>
        <p class="mt-3 text-muted">${e.description}</p>
        <ul class="mt-3 list-inside list-disc space-y-1 text-muted">
          ${e.activities.map((a) => `<li>${a}</li>`).join("")}
        </ul>
        <div class="flex flex-wrap gap-2 mt-4">
          ${e.technologies.map((t) => `<span class="rounded border border-outline bg-surface-raised px-2 py-1 text-xs text-muted">${t}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
  return `
  <section id="experience" class="bg-section py-20">
    <div class="max-w-6xl mx-auto px-4">
      ${renderSectionTitle("Experiencia profesional")}
      <div class="space-y-6">${items}</div>
    </div>
  </section>`;
}
