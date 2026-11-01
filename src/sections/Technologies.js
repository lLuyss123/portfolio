import { technologies } from "../data/technologies.js";
import { renderSectionTitle } from "../components/SectionTitle.js";

const technologyIcons = {
  Python: "python",
  FastAPI: "fastapi",
  JavaScript: "javascript",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  Pandas: "pandas",
  NumPy: "numpy",
  "Apache Airflow": "apacheairflow",
  "Apache Spark": "apachespark",
  PostgreSQL: "postgresql",
  Docker: "docker",
  Linux: "linux",
  Git: "git",
  HTML: "html5",
  CSS: "css",
  "Tailwind CSS": "tailwindcss",
  Vite: "vite",
};

export function renderTechnologies() {
  const cards = technologies
    .map(({ name, category }, index) => {
      const remoteIcon = technologyIcons[name];
      return `
        <article class="technology-card snap-start" aria-label="${name}, ${category}">
          <span class="technology-card__index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <span class="technology-card__mark" aria-hidden="true">
            ${remoteIcon
              ? `<img src="https://cdn.simpleicons.org/${remoteIcon}/60A5FA" alt="" loading="lazy" onerror="this.hidden=true" />`
              : `<span>${name.slice(0, 2).toUpperCase()}</span>`}
          </span>
          <h3 class="technology-card__name">${name}</h3>
          <p class="technology-card__category">${category}</p>
        </article>`;
    })
    .join("");

  return `
  <section id="technologies" class="bg-section py-20">
    <div class="technology-section">
      ${renderSectionTitle("Tecnologías", "Herramientas que uso para construir soluciones.")}
      <div class="technology-carousel" data-technology-carousel>
        <div class="technology-carousel__toolbar">
          <p class="technology-carousel__hint">Explora el stack <span aria-hidden="true">·</span> ${technologies.length} tecnologías</p>
          <div class="technology-carousel__controls" aria-label="Controles del carrusel">
            <button class="technology-carousel__button" type="button" data-carousel-prev aria-label="Ver tecnologías anteriores">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button class="technology-carousel__button" type="button" data-carousel-next aria-label="Ver más tecnologías">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
        <div class="technology-carousel__track" data-carousel-track tabindex="0" aria-label="Tecnologías, desplázate horizontalmente para explorar">
          ${cards}
        </div>
        <div class="technology-carousel__progress" aria-hidden="true"><span data-carousel-progress></span></div>
      </div>
    </div>
  </section>`;
}
