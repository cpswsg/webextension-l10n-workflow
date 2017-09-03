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
  switch (e.target.id) {
    case "tabs-pontoon":
      browser.tabs.create({ url: `https://pontoon.mozilla.org/${locale}/` });
      break;
    case "tabs-pontoon-terminology":
      browser.tabs.create({url: "https://pontoon.mozilla.org/terminology/"});
      break;
    case "tabs-transvision":
      browser.tabs.create({url: "https://transvision.mozfr.org/"});
      break;
    case "tabs-glossary":
      browser.tabs.create({url: "https://wiki.mozilla.org/Brasil/L10n/Glossario"});
      break;
    case "tabs-style-guide":
      browser.tabs.create({url: `https://mozilla-l10n.github.io/styleguides/${locale}/`});
      break;
    case "tabs-cambridge":
      browser.tabs.create({url: `http://dictionary.cambridge.org/${locale.split('-')[0]}/`});
      break;
    case "tabs-web-localization-dashboard":
      browser.tabs.create({url: `https://l10n.mozilla-community.org/webdashboard/?locale=${locale}`});
      break;
    case "tabs-github":
      browser.tabs.create({url: "https://github.com/cynthiapereira/webextension-l10n-workflow"});
      break;
    default:
      e.target.parentNode.click();
      break;
  }
});

for (const element of document.querySelectorAll('[data-l10n-id]')) {
  element.textContent = chrome.i18n.getMessage(element.dataset.l10nId);
}

for (const element of document.querySelectorAll('[data-tooltip-l10n-id]')) {
  element.title = chrome.i18n.getMessage(element.dataset.tooltipL10nId);
}
