const getInTouch = document.getElementById("getInTouch");
const downloadButton = document.getElementById("download-btn");
const navHeader = document.getElementById("nav-header");
const navLogo = document.querySelector(".logo");
const navListItems = document.querySelectorAll(".nav-list-items");
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const toggleButton = document.getElementById("toggle-btn");
console.log(toggleButton);

const navHeaderBackground = `#9318fa`;
const backgroundTransition = "0.3s ease-in";
const newNavLogo = "white";

function navHeaderScroll() {
  if (window.scrollY > 50) {
    navHeader.style.backgroundColor = `${navHeaderBackground}`;
    navHeader.style.transition = `${backgroundTransition}`;
    navLogo.style.color = newNavLogo;
  } else {
    navHeader.style.backgroundColor = "";
    navLogo.style.color = "#0000EE";
  }
}
window.addEventListener("scroll", navHeaderScroll);

// Change Background color to dark mode

toggleButton.addEventListener("click", () => {
  if ((document.style.backgroundColor = "white")) {
    document.classList.add("dark-background-color");
  }
});

menu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

getInTouch.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Get in Touch Button clicked..");
});

downloadButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Download CV button clicked");
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
