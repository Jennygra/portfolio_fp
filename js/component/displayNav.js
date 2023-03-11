export default function displayNav() {
  const navContainer = document.querySelector(".nav-container");

  navContainer.innerHTML = `
    <div>
        <a href="#home"><img src="img/logo.png" alt="logo" id="logo" /></a>
      </div>

      <label class="hamburger-label" for="hamburger-menu">
        <i class="fas fa-bars"></i>
        <i class="fa-solid fa-x"></i>
      </label>
      <input type="checkbox" id="hamburger-menu" />

      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://discord.com/users/Jen✿#1303" target="_blank"><i class="fa-brands fa-discord"></i></a>
          </li>
          <li>
            <a href="https://github.com/Jennygra" target="_blank"><i class="fa-brands fa-github"></i></a>
          </li>
        </ul>
      </nav>
      `;

  const hamburgerContainer = document.querySelector(".hamburger-label");
  const hamburgerLabel = document.querySelector(".fa-bars");
  const closeLabel = document.querySelector(".fa-x");

  closeLabel.style.display = "none";
  let menuOpen = false;

  hamburgerContainer.addEventListener("click", function () {
    if (!menuOpen) {
      hamburgerContainer.classList.add("open");
      hamburgerLabel.style.display = "none";
      closeLabel.style.display = "block";
      menuOpen = true;
    } else {
      hamburgerContainer.classList.remove("open");
      hamburgerLabel.style.display = "block";
      closeLabel.style.display = "none";
      menuOpen = false;
    }
  });
}
