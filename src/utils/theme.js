const THEME_STORAGE_KEY = "portfolio-theme";
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = theme;

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute(
      "aria-label",
      isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );
    button.title = isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
  });

  document.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

export function initThemeToggle() {
  let followsSystem = document.documentElement.dataset.themePreference !== "user";
  const documentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  const initialTheme = followsSystem ? (systemTheme.matches ? "dark" : "light") : documentTheme;
  applyTheme(initialTheme);

  systemTheme.addEventListener("change", (event) => {
    if (followsSystem) applyTheme(event.matches ? "dark" : "light");
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;

    if (event.newValue === "light" || event.newValue === "dark") {
      followsSystem = false;
      document.documentElement.dataset.themePreference = "user";
      applyTheme(event.newValue);
    } else {
      followsSystem = true;
      document.documentElement.dataset.themePreference = "system";
      applyTheme(systemTheme.matches ? "dark" : "light");
    }
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const theme = document.documentElement.classList.contains("dark") ? "light" : "dark";
      followsSystem = false;
      document.documentElement.dataset.themePreference = "user";
      applyTheme(theme);

      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch (error) {
        console.warn("No se pudo guardar la preferencia de tema.", error);
      }
    });
  });
}
