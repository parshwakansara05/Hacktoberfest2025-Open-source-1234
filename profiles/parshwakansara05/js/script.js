// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

// Follow / Unfollow Button
const followBtn = document.getElementById("followBtn");
let isFollowing = false;

followBtn.addEventListener("click", () => {
  isFollowing = !isFollowing;

  if (isFollowing) {
    followBtn.textContent = "Following";
    followBtn.style.background = "#34D399"; // green color
  } else {
    followBtn.textContent = "Follow";
    followBtn.style.background = "#86A8E7";
  }
});
