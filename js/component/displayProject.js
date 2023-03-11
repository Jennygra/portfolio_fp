import { projects } from "../data/projects.js";

export function displayProject() {
  const projectWrapper = document.querySelector(".project-wrapper");

  for (let i = 0; i < projects.length; i++) {
    projectWrapper.innerHTML += `
    <div class="project-item">
            <a href="${projects[i].url}" target="_blank">
              <img src="${projects[i].mainImg}" alt="${projects[i].name}">
              <img src="${projects[i].hoverImg}" alt="${projects[i].name}" class="hover-img">
            </a>
          </div>
    `;
  }
}
