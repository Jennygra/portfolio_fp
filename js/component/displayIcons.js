import { skillsIcon } from "../data/skillsIcon.js";

export function displayIcons() {
  const skillsWrapper = document.querySelector(".skills-wrapper");

  skillsIcon.forEach((icon) => {
    skillsWrapper.innerHTML += `
    <div class="skills-item">
            <img src="${icon.url}" alt="${icon.name}" >
          </div>
    `;
  });
}
