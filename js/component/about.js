export function about() {
  const aboutContainer = document.querySelector("#about");

  aboutContainer.innerHTML += `
  <div class="about-content-container">
            <div class="about-content-img">
            <img src="../img/pp.jpg" alt="Picture of Jenny Gramdal">
            </div>

            <div class="about-content-text">
            <h3>About</h3>
            <h1>Hi, I’m Jenny</h1>
            <p>
              I’m a Front-End Developer located in Norway. Well-organised
              person, problem solver, high attention to details. Love outdoor
              activities, TV series, moba games, travel, photography and I am a foodie.
            </p>
            </div>
          </div>
          `;
}
