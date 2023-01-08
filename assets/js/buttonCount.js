var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");


let lightTheme = "assets/css/style.css";
let darkTheme = "assets/css/dark.css";


// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

// Swaps the stylesheet in order to  achieve dark mode.
function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") === darkTheme) {
    theme.href = lightTheme;
    darkMode.innerHTML = "Dark Mode 🌙";
  } else {
    theme.href = darkTheme;
    darkMode.innerHTML = "Light Mode 🌞";
  }

}