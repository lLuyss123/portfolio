export function renderNavbar() {
  return `
  <nav id="navbar" class="fixed top-0 inset-x-0 z-50 bg-[#0b1220]/90 backdrop-blur border-b border-[#1f2a44]">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#hero" class="font-semibold text-white">Luis Mejía</a>
      <button id="menuBtn" class="md:hidden text-white" aria-label="Menú">☰</button>
      <ul id="menu" class="hidden md:flex gap-6 text-sm text-[#94a3b8]">
        <li><a href="#hero" class="hover:text-white">Inicio</a></li>
        <li><a href="#about" class="hover:text-white">Sobre mí</a></li>
        <li><a href="#technologies" class="hover:text-white">Tecnologías</a></li>
        <li><a href="#projects" class="hover:text-white">Proyectos</a></li>
        <li><a href="#experience" class="hover:text-white">Experiencia</a></li>
        <li><a href="#education" class="hover:text-white">Formación</a></li>
        <li><a href="#contact" class="hover:text-white">Contacto</a></li>
        <li><a href="/documents/cv.pdf" download class="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-500">Descargar CV</a></li>
      </ul>
    </div>
    <div id="mobileMenu" class="hidden md:hidden px-4 pb-3">
      <ul class="flex flex-col gap-2 text-sm text-[#94a3b8]">
        <li><a href="#hero" class="hover:text-white">Inicio</a></li>
        <li><a href="#about" class="hover:text-white">Sobre mí</a></li>
        <li><a href="#technologies" class="hover:text-white">Tecnologías</a></li>
        <li><a href="#projects" class="hover:text-white">Proyectos</a></li>
        <li><a href="#experience" class="hover:text-white">Experiencia</a></li>
        <li><a href="#education" class="hover:text-white">Formación</a></li>
        <li><a href="#contact" class="hover:text-white">Contacto</a></li>
        <li><a href="/documents/cv.pdf" download class="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-500 inline-block">Descargar CV</a></li>
      </ul>
    </div>
  </nav>`;
}
