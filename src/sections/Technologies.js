import { technologyCategories } from "../data/technologies.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

const categoryIcons = {
  backend: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/><circle cx="7" cy="7" r="1" fill="currentColor"/><circle cx="7" cy="17" r="1" fill="currentColor"/></svg>`,
  data: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  cloud: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  automation: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12"/><circle cx="12" cy="12" r="4"/></svg>`,
};

export function renderTechnologies() {
  const cards = technologyCategories
    .map(
      (cat) => `
      <article class="flex flex-col justify-between rounded-xl border border-outline bg-surface p-6 transition hover:border-accent">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
              ${categoryIcons[cat.icon] || ""}
            </div>
            <div>
              <h3 class="text-lg font-semibold text-content">${cat.title}</h3>
            </div>
          </div>
          <p class="text-sm text-muted mb-5">${cat.description}</p>
        </div>
        <div class="flex flex-wrap gap-2 pt-3 border-t border-outline/50">
          ${cat.items
            .map(
              (item) => `
            <div class="inline-flex items-center gap-2 rounded-lg border border-outline bg-surface-raised px-3 py-1.5 text-xs font-medium text-content transition hover:border-accent">
              <img
                src="https://cdn.simpleicons.org/${item.icon}/60A5FA"
                alt=""
                class="h-4 w-4 shrink-0 object-contain"
                loading="lazy"
                onerror="this.style.display='none'"
              />
              <span>${item.name}</span>
            </div>`
            )
            .join("")}
        </div>
      </article>`
    )
    .join("");

  return `
  <section id="technologies" class="bg-section py-20">
    <div class="max-w-6xl mx-auto px-4">
      ${renderSectionTitle("Tecnologías y Especialidades", "Stack técnico estructurado por áreas de aplicación.")}
      <div class="grid md:grid-cols-2 gap-6 mt-8">
        ${cards}
      </div>
    </div>
  </section>`;
}
