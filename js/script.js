import displayNav from "./component/displayNav.js";
import { about } from "./component/about.js";
import { displayIcons } from "./component/displayIcons.js";
import { displayProject } from "./component/displayProject.js";
import { contact } from "./component/contact.js";

displayNav();

let timeout = setTimeout(() => {
  document.querySelector("#about").scrollIntoView();
}, 1500);

(function () {
  document.querySelector("#home").scrollIntoView();
})();

about();
displayIcons();
displayProject();
contact();
