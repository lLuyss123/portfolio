export function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="border-t border-outline py-6 text-center text-sm text-muted">
    <p>Luis Mejía · Systems Engineer · © ${year}</p>
  </footer>`;
}
