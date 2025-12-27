const downloadButton = document.getElementById("download-btn");
const navHeader = document.getElementById("nav-header");
const navLogo = document.querySelector(".logo");
const navListItems = document.querySelectorAll(".nav-list-items");
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const toggleButton = document.querySelector("#toggle-btn");

const navHeaderBackground = `#9318fa`;
const backgroundTransition = "0.3s ease-in";
const newNavLogo = "white";
function navHeaderScroll() {
  if (window.scrollY > 50) {
    navHeader.style.backgroundColor = `${navHeaderBackground}`;
    navHeader.style.transition = `${backgroundTransition}`;
    navLogo.style.color = newNavLogo;
    navListItems.forEach((item) => {
      item.style.color = "white";
    });
    toggleButton.style.fill = "white";
  } else {
    navHeader.style.backgroundColor = "";
    navLogo.style.color = "#0000EE";
    navListItems.forEach((item) => {
      item.style.color = "";
    });
    toggleButton.style.fill = "";
  }
}
window.addEventListener("scroll", navHeaderScroll);

menu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

downloadButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Download CV button clicked");
});

const workTogetherButton = document.getElementById("work-together-btn");
workTogetherButton.onclick = function (event) {
  event.preventDefault();
  alert("We are working hard to bring this feature live...");
};

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.warn("Please give us some time, we are form on the form. Thank you!");
});
// ===== Dark Mode =====

// Apply saved theme on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.toggle("dark-background");
}

// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-background");
});

// Save the preference
if (document.body.classList.contains("dark-background")) {
  localStorage.setItem("darkMode", "enabled");
} else {
  localStorage.setItem("darkMode", "disabled");
}

// ===== About paragragph switching =====

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
