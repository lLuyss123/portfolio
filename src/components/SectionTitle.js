export function renderSectionTitle(title, subtitle = "") {
  return `
  <div class="mb-10">
    <h2 class="text-3xl font-bold text-white">${title}</h2>
    ${subtitle ? `<p class="text-[#94a3b8] mt-2">${subtitle}</p>` : ""}
  </div>`;
}
