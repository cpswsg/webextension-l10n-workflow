document.addEventListener("click", function(e) {
  if (e.target.id === "tabs-pontoon") {
    browser.tabs.create({ url: "https://pontoon.mozilla.org/pt-BR/" });
  }

  else if (e.target.id === "tabs-pontoon-terminology") {
    browser.tabs.create({url: "https://pontoon.mozilla.org/terminology/"});
  }

  else if (e.target.id === "tabs-transvision") {
    browser.tabs.create({url: "https://transvision.mozfr.org/"});
  }

  else if (e.target.id === "tabs-glossario") {
    browser.tabs.create({url: "https://wiki.mozilla.org/Brasil/L10n/Glossario"});
  }

  else if (e.target.id === "tabs-guia-estilos") {
    browser.tabs.create({url: "https://wiki.mozilla.org/L10n:Teams:pt-BR/Style_Guide"});
  }

  else if (e.target.id === "tabs-cambridge") {
    browser.tabs.create({url: "http://dictionary.cambridge.org/pt/"});
  }

  else if (e.target.id === "tabs-web-localization-dashboard") {
    browser.tabs.create({url: "https://l10n.mozilla-community.org/webdashboard/?locale=pt-BR"});
  }

  else if (e.target.id === "tabs-github") {
    browser.tabs.create({url: "https://github.com/cynthiapereira/webextension-l10n-workflow"});
  }

  e.preventDefault();
});
