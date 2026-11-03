import { personal } from "../data/personal.js";

export function renderNavbar() {
  return `
  <nav id="navbar" class="fixed inset-x-0 top-0 z-50 border-b border-outline bg-page/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <a href="#hero" class="font-semibold text-content">Luis Mejía</a>
      <div class="flex items-center gap-3 md:hidden">
        <button type="button" class="theme-toggle" data-theme-toggle aria-label="Cambiar tema" aria-pressed="false">
          <svg class="theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
          <svg class="theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /></svg>
        </button>
        <button id="menuBtn" class="text-content md:hidden" aria-label="Menú" aria-expanded="false" aria-controls="mobileMenu">☰</button>
      </div>
      <ul id="menu" class="hidden items-center gap-6 text-sm text-muted md:flex">
        <li><a href="#hero" class="hover:text-content">Inicio</a></li>
        <li><a href="#technologies" class="hover:text-content">Tecnologías</a></li>
        <li><a href="#projects" class="hover:text-content">Proyectos</a></li>
        <li><a href="#experience" class="hover:text-content">Experiencia</a></li>
        <li><a href="#education" class="hover:text-content">Formación</a></li>
        <li><a href="#contact" class="hover:text-content">Contacto</a></li>
        <li>
          <button type="button" class="theme-toggle" data-theme-toggle aria-label="Cambiar tema" aria-pressed="false">
            <svg class="theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
            <svg class="theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /></svg>
          </button>
        </li>
        <li><a href="${personal.cv}" download="CV-Luis-Mejia.pdf" target="_blank" rel="noopener noreferrer" class="rounded bg-blue-700 px-3 py-1 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">Descargar CV</a></li>
      </ul>
    </div>
    <div id="mobileMenu" class="hidden px-4 pb-3 md:hidden">
      <ul class="flex flex-col gap-2 text-sm text-muted">
        <li><a href="#hero" class="hover:text-content">Inicio</a></li>
        <li><a href="#technologies" class="hover:text-content">Tecnologías</a></li>
        <li><a href="#projects" class="hover:text-content">Proyectos</a></li>
        <li><a href="#experience" class="hover:text-content">Experiencia</a></li>
        <li><a href="#education" class="hover:text-content">Formación</a></li>
        <li><a href="#contact" class="hover:text-content">Contacto</a></li>
        <li>
          <button type="button" class="theme-toggle" data-theme-toggle aria-label="Cambiar tema" aria-pressed="false">
            <svg class="theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
            <svg class="theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /></svg>
          </button>
        </li>
        <li><a href="${personal.cv}" download="CV-Luis-Mejia.pdf" target="_blank" rel="noopener noreferrer" class="inline-block rounded bg-blue-700 px-3 py-1 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">Descargar CV</a></li>
      </ul>
    </div>
  </nav>`;
}
