(function () {
  "use strict";

  var menuButton = document.querySelector("#site-nav .greedy-nav__toggle");
  var hiddenLinks = document.querySelector("#site-nav .hidden-links");
  var themeButton = document.querySelector("#theme-toggle");

  function syncMenuState() {
    if (!menuButton || !hiddenLinks) return;
    var expanded = !hiddenLinks.classList.contains("hidden");
    menuButton.setAttribute("aria-expanded", String(expanded));
    menuButton.setAttribute(
      "aria-label",
      expanded
        ? "关闭导航菜单 / Close navigation"
        : "打开导航菜单 / Open navigation"
    );
  }

  function syncThemeState() {
    if (!themeButton) return;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute(
      "aria-label",
      isDark
        ? "切换到浅色主题 / Switch to light theme"
        : "切换到深色主题 / Switch to dark theme"
    );
  }

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      window.requestAnimationFrame(syncMenuState);
    });
  }

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      window.requestAnimationFrame(syncThemeState);
    });
  }

  if (window.MutationObserver) {
    new MutationObserver(syncThemeState).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
  }

  window.requestAnimationFrame(function () {
    syncMenuState();
    syncThemeState();
  });
})();
