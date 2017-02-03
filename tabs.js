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

  else if (e.target.id === "tabs-cambridge") {
    browser.tabs.create({url: "http://dictionary.cambridge.org/pt/"});
  }

  e.preventDefault();
});
