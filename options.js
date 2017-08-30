var localeInput = document.getElementById('locale');

var localeOptionKey = 'options.locale';
browser.storage.local.get(localeOptionKey).then(function(item) {
  if (item[localeOptionKey]) {
    localeInput.value = item[localeOptionKey];
  } else {
    localeInput.value = 'pt-BR';
  }
});

localeInput.addEventListener('change', function(e) {
  var options = {};
  options[localeOptionKey] = e.target.value;
  browser.storage.local.set(options);
});
