(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");

  if (!button) {
    return;
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    button.setAttribute(
      "aria-label",
      theme === "dark" ? "Увімкнути світлу тему" : "Увімкнути темну тему"
    );
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* ignore quota / private mode */
    }
  }

  applyTheme(currentTheme());

  button.addEventListener("click", function () {
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
  });
})();
