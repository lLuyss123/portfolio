export function renderButton(label, href = "#", variant = "primary", downloadName = "") {
  const base = "inline-block px-5 py-2 rounded-lg font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-500"
      : "border border-[#1f2a44] text-white hover:bg-[#111a2e]";
  const downloadAttribute = downloadName ? ` download="${downloadName}"` : "";
  return `<a href="${href}"${downloadAttribute} class="${base} ${styles}">${label}</a>`;
}
