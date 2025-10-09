// ===== Element References =====
const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle"),
      sidebar = body.querySelector("header"),
      sidebarToggle = body.querySelector(".sidebar-toggle");

// ===== Dark Mode Toggle =====
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// ===== Sidebar Toggle =====
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  body.classList.toggle("open");
});

// ===== Animate Progress Bars on Scroll =====
const progressBars = document.querySelectorAll(".progress");

function animateProgress() {
  progressBars.forEach((progress) => {
    const bar = progress.querySelector(".bar span");
    const value = progress.getAttribute("data-percent");
    const rect = progress.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
      bar.style.width = value + "%";
    }
  });
}

window.addEventListener("scroll", animateProgress);
window.addEventListener("load", animateProgress);