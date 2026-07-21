(function () {
  "use strict";

  var menuButton = document.querySelector("#site-nav .greedy-nav__toggle");
  var hiddenLinks = document.querySelector("#site-nav .hidden-links");
  var themeButton = document.querySelector("#theme-toggle");
  var languageButton = document.querySelector("#language-toggle");
  var languageLabel = languageButton && languageButton.querySelector(".masthead__language-label");
  var brandLink = document.querySelector(".masthead__menu-item--lg a");

  function getLanguage() {
    return document.documentElement.getAttribute("data-language") === "en" ? "en" : "zh";
  }

  function syncMenuState() {
    if (!menuButton || !hiddenLinks) return;
    var expanded = !hiddenLinks.classList.contains("hidden");
    menuButton.setAttribute("aria-expanded", String(expanded));
    var isEnglish = getLanguage() === "en";
    menuButton.setAttribute("aria-label", expanded
      ? (isEnglish ? "Close navigation" : "关闭导航菜单")
      : (isEnglish ? "Open navigation" : "打开导航菜单"));
  }

  function syncThemeState() {
    if (!themeButton) return;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    themeButton.setAttribute("aria-pressed", String(isDark));
    var isEnglish = getLanguage() === "en";
    themeButton.setAttribute("aria-label", isDark
      ? (isEnglish ? "Switch to light theme" : "切换到浅色主题")
      : (isEnglish ? "Switch to dark theme" : "切换到深色主题"));
  }

  function syncLanguageState() {
    var isEnglish = getLanguage() === "en";
    document.documentElement.setAttribute("lang", isEnglish ? "en" : "zh-CN");

    if (languageButton && languageLabel) {
      languageButton.setAttribute("aria-label", isEnglish ? "切换到中文" : "Switch to English");
      languageLabel.textContent = isEnglish ? "中" : "EN";
    }

    if (brandLink) {
      brandLink.setAttribute("aria-label", isEnglish ? "Eric Zhang's homepage" : "返回张正的个人主页");
    }

    syncMenuState();
    syncThemeState();
  }

  function setLanguage(language) {
    document.documentElement.setAttribute("data-language", language);
    try {
      window.localStorage.setItem("language", language);
    } catch (error) {
      // The preference is optional when storage is unavailable.
    }
    syncLanguageState();
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

  if (languageButton) {
    languageButton.addEventListener("click", function () {
      setLanguage(getLanguage() === "en" ? "zh" : "en");
    });
  }

  if (window.MutationObserver) {
    new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "data-language") syncLanguageState();
        if (mutation.attributeName === "data-theme") syncThemeState();
      });
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "data-language"]
    });
  }

  window.requestAnimationFrame(function () {
    syncLanguageState();
  });
})();
