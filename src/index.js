import "./style.scss";
import homepage from "./homepage";
import menu from "./menu";
import about from "./about";

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
buttons[0].addEventListener("click", function () {
  if (currentPage != "homepage") {
    changePage(showHomepage);
    currentPage = "homepage";
  }
});
buttons[2].addEventListener("click", function () {
  if (currentPage != "about") {
    changePage(showAbout);
    currentPage = "about";
  }
});

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
  content.appendChild(homepage().headline);
  content.appendChild(homepage().para);
  content.appendChild(homepage().img1);
}

// The menu page
function showMenu() {
  content.appendChild(homepage().headline);
  content.appendChild(homepage().para);
  content.appendChild(homepage().img);
}

// The about page
function showAbout() {
  content.appendChild(about().headline);
  content.appendChild(about().mapImg);
  content.appendChild(about().para1);
}

// Show the homepage when the page is loaded
showHomepage();
