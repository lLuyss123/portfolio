import { personal } from "../data/personal.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

export function renderContact() {
  return `
  <section id="contact" class="py-20 bg-[#0f172a]">
    <div class="max-w-6xl mx-auto px-4 text-center">
      ${renderSectionTitle("Contacto", "Comunícate conmigo por WhatsApp o redes profesionales.")}
      <div class="flex justify-center gap-4 flex-wrap">
        <a href="${personal.whatsapp}" target="_blank" rel="noopener" class="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500">WhatsApp</a>
        <a href="${personal.github}" target="_blank" rel="noopener" class="px-5 py-2 rounded-lg border border-[#1f2a44] text-white hover:bg-[#111a2e]">GitHub</a>
        <a href="${personal.linkedin}" target="_blank" rel="noopener" class="px-5 py-2 rounded-lg border border-[#1f2a44] text-white hover:bg-[#111a2e]">LinkedIn</a>
      </div>
    </div>
  </section>`;
}
