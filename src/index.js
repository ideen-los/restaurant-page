import "./style.scss";
import homepage from "./homepage";
import about from "./about";
import foodItemsHTML from "./menu.js";

const buttons = document.querySelectorAll("a");
const content = document.querySelector("#content");
const transition = document.querySelector("#transition");
let currentPage = "homepage";

// Function to change a page
function changePage(showPage) {
  transition.classList.add("is-transitioning");
  transition.addEventListener("transitionend", () => {
    content.innerHTML = "";
    showPage();
    transition.classList.remove("is-transitioning");
  });
}

// Add event listeners to the nav buttons
function activateButtons() {
  buttons[0].addEventListener("click", function () {
    if (currentPage != "homepage") {
      changePage(showHomepage);
      currentPage = "homepage";
    }
  });
  buttons[1].addEventListener("click", function () {
    if (currentPage != "menu") {
      changePage(showMenu);
      currentPage = "menu";
    }
  });
  buttons[2].addEventListener("click", function () {
    if (currentPage != "about") {
      changePage(showAbout);
      currentPage = "about";
    }
  });
}

// Add active class
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

// The homepage
function showHomepage() {
  content.appendChild(homepage().container);
}

// The menu page
function showMenu() {
  content.appendChild(foodItemsHTML);
}

// The about page
function showAbout() {
  content.appendChild(about().iframeContainer);
  content.appendChild(about().aboutContainer);
}

// Show the homepage when the page is loaded
showHomepage();
activateButtons();
