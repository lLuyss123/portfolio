export function renderButton(label, href = "#", variant = "primary", downloadName = "") {
  const base = "inline-block px-5 py-2 rounded-lg font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-blue-700 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      : "border border-outline text-content hover:bg-surface";
  const downloadAttribute = downloadName ? ` download="${downloadName}" target="_blank" rel="noopener noreferrer"` : "";
  return `<a href="${href}"${downloadAttribute} class="${base} ${styles}">${label}</a>`;
}
