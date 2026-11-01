export function renderSectionTitle(title, subtitle = "") {
  return `
  <div class="mb-10">
    <h2 class="text-3xl font-bold text-content">${title}</h2>
    ${subtitle ? `<p class="mt-2 text-muted">${subtitle}</p>` : ""}
  </div>`;
}
