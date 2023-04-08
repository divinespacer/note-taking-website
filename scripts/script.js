const theme = document.querySelector("#theme");
const navB = document.querySelector("nav");

function themeToggle(event) {
  console.log(event);
  document.body.classList.toggle("darkMode");
  navB.classList.toggle("navDarkMode");
  theme.textContent === "Dark Theme"
    ? (theme.textContent = "Light Theme")
    : (theme.textContent = "Dark Theme");
}

theme.addEventListener("click", themeToggle);
