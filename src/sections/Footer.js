export function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="border-t border-[#1f2a44] py-6 text-center text-[#94a3b8] text-sm">
    <p>Luis Mejía · Systems Engineer · © ${year}</p>
  </footer>`;
}
