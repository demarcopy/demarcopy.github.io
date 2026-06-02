const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const label = document.querySelector("[data-theme-label]");

const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme === "light" ? "light" : "dark";

function applyTheme(theme) {
  root.dataset.theme = theme;

  if (!toggle || !label) {
    return;
  }

  const nextTheme = theme === "dark" ? "light" : "dark";
  label.textContent = theme === "dark" ? "Dark" : "Light";
  toggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
  toggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
}

function triggerThemeEffect() {
  root.classList.remove("theme-switching");
  void root.offsetWidth;
  root.classList.add("theme-switching");

  window.setTimeout(() => {
    root.classList.remove("theme-switching");
  }, 900);
}

applyTheme(initialTheme);

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", nextTheme);
  triggerThemeEffect();
  applyTheme(nextTheme);
});
