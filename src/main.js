import "./styles/main.css";

import { renderNavbar } from "./components/Navbar.js";
import { renderHero } from "./sections/Hero.js";
import { renderTechnologies } from "./sections/Technologies.js";
import { renderProjects } from "./sections/Projects.js";
import { renderExperience } from "./sections/Experience.js";
import { renderEducation } from "./sections/Education.js";
import { renderContact } from "./sections/Contact.js";
import { renderFooter } from "./sections/Footer.js";
import { initNavbar, initTechnologyCarousel } from "./utils/helpers.js";
import { initHeroAvatar } from "./utils/avatarAnimation.js";

const app = document.getElementById("app");
app.innerHTML = `
  ${renderNavbar()}
  <main>
    ${renderHero()}
    ${renderTechnologies()}
    ${renderProjects()}
    ${renderExperience()}
    ${renderEducation()}
    ${renderContact()}
  </main>
  ${renderFooter()}
`;

initNavbar();
initTechnologyCarousel();
initHeroAvatar();