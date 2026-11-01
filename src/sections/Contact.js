import { personal } from "../data/personal.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

export function renderContact() {
  return `
  <section id="contact" class="bg-section py-20">
    <div class="max-w-6xl mx-auto px-4 text-center">
      ${renderSectionTitle("Contacto", "Comunícate conmigo por WhatsApp o redes profesionales.")}
      <div class="flex justify-center gap-4 flex-wrap">
        <a href="${personal.whatsapp}" target="_blank" rel="noopener" class="rounded-lg bg-green-700 px-5 py-2 text-white hover:bg-green-800">WhatsApp</a>
        <a href="${personal.github}" target="_blank" rel="noopener" class="rounded-lg border border-outline px-5 py-2 text-content hover:bg-surface">GitHub</a>
        <a href="${personal.linkedin}" target="_blank" rel="noopener" class="rounded-lg border border-outline px-5 py-2 text-content hover:bg-surface">LinkedIn</a>
      </div>
    </div>
  </section>`;
}
