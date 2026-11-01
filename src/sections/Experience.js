import { experience } from "../data/experience.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

export function renderExperience() {
  const items = experience
    .map(
      (e) => `
      <div class="bg-[#111a2e] border border-[#1f2a44] rounded-xl p-6">
        <h3 class="text-xl font-semibold text-white">${e.role}</h3>
        <p class="text-blue-400">${e.company} · ${e.period}</p>
        <p class="text-[#94a3b8] mt-3">${e.description}</p>
        <ul class="list-disc list-inside text-[#94a3b8] mt-3 space-y-1">
          ${e.activities.map((a) => `<li>${a}</li>`).join("")}
        </ul>
        <div class="flex flex-wrap gap-2 mt-4">
          ${e.technologies.map((t) => `<span class="px-2 py-1 text-xs rounded bg-[#0b1220] border border-[#1f2a44]">${t}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
  return `
  <section id="experience" class="py-20 bg-[#0f172a]">
    <div class="max-w-6xl mx-auto px-4">
      ${renderSectionTitle("Experiencia profesional")}
      <div class="space-y-6">${items}</div>
    </div>
  </section>`;
}
