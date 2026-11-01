import { education } from "../data/education.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

export function renderEducation() {
  const items = education
    .map(
      (e) => `
      <div class="rounded-xl border border-outline bg-surface p-6">
        <h3 class="text-lg font-semibold text-content">${e.degree}</h3>
        <p class="text-muted">${e.institution}</p>
      </div>`
    )
    .join("");
  return `
  <section id="education" class="py-20">
    <div class="max-w-6xl mx-auto px-4">
      ${renderSectionTitle("Formación académica")}
      <div class="grid md:grid-cols-2 gap-6">${items}</div>
    </div>
  </section>`;
}
