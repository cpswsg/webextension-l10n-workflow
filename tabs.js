var locale;

var localeOptionKey = 'options.locale';
browser.storage.local.get(localeOptionKey).then(function(item) {
  if (item[localeOptionKey]) {
    locale = item[localeOptionKey];
  } else {
    locale = 'pt-BR';
  }
  if (locale != 'pt-BR') {
    document.getElementById('tabs-glossario').parentElement.style.display = 'none';
  }
});

document.addEventListener("click", function(e) {
  if (e.target.id === "tabs-pontoon") {
    browser.tabs.create({ url: `https://pontoon.mozilla.org/${locale}/` });
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
    browser.tabs.create({url: `https://mozilla-l10n.github.io/styleguides/${locale}/`});
  }

  else if (e.target.id === "tabs-cambridge") {
    browser.tabs.create({url: `http://dictionary.cambridge.org/${locale.split('-')[0]}/`});
  }

  else if (e.target.id === "tabs-web-localization-dashboard") {
    browser.tabs.create({url: `https://l10n.mozilla-community.org/webdashboard/?locale=${locale}`});
  }

  else if (e.target.id === "tabs-github") {
    browser.tabs.create({url: "https://github.com/cynthiapereira/webextension-l10n-workflow"});
  }

  e.preventDefault();
});
