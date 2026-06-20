/* Customize panel: sets data-* axes on <html>, persisted to localStorage.
   Pure progressive enhancement — if JS is blocked the page still renders the
   default (green / heritage / gold) from the data-* attributes in index.html. */
(function () {
  var root = document.documentElement;
  var KEY = 'wpm-tweaks';
  var defaults = { color: 'green', style: 'heritage', accent: 'gold', compact: false, logo: 'square' };
  var state = Object.assign({}, defaults);
  try { state = Object.assign(state, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}

  function apply() {
    root.setAttribute('data-color', state.color);
    root.setAttribute('data-style', state.style);
    root.setAttribute('data-accent', state.accent);
    root.setAttribute('data-compact', String(!!state.compact));
    root.setAttribute('data-logo', state.logo);
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
    sync();
  }

  function sync() {
    var btns = document.querySelectorAll('.tw-swatches button, .tw-seg button');
    btns.forEach(function (b) {
      var axis = b.parentElement.getAttribute('data-axis');
      b.setAttribute('aria-pressed', String(b.getAttribute('data-val') === state[axis]));
    });
    var tog = document.querySelector('.tw-toggle[data-axis="compact"]');
    if (tog) tog.setAttribute('aria-checked', String(!!state.compact));
  }

  document.addEventListener('click', function (e) {
    var opt = e.target.closest('.tw-swatches button, .tw-seg button');
    if (opt) { state[opt.parentElement.getAttribute('data-axis')] = opt.getAttribute('data-val'); apply(); return; }
    if (e.target.closest('.tw-toggle[data-axis="compact"]')) { state.compact = !state.compact; apply(); return; }
    if (e.target.closest('#tw-fab')) { var p = document.getElementById('tw-panel'); p.hidden = !p.hidden; return; }
    if (e.target.closest('#tw-close')) { document.getElementById('tw-panel').hidden = true; return; }
    if (e.target.closest('#tw-reset')) { state = Object.assign({}, defaults); apply(); return; }
  });

  // Inject the Logo control into the Customize panel so every page gets it from this one file.
  (function injectLogo() {
    var panel = document.getElementById('tw-panel');
    if (!panel || panel.querySelector('[data-axis="logo"]')) return;
    var group = document.createElement('div');
    group.className = 'tw-group';
    group.innerHTML =
      '<label>Logo</label>' +
      '<div class="tw-seg" data-axis="logo">' +
        '<button data-val="square">Square</button>' +
        '<button data-val="rounded">Rounded</button>' +
        '<button data-val="circle">Circle</button>' +
      '</div>';
    var compactTog = panel.querySelector('.tw-toggle[data-axis="compact"]');
    var compactGroup = compactTog ? compactTog.closest('.tw-group') : null;
    if (compactGroup) panel.insertBefore(group, compactGroup);
    else panel.appendChild(group);
  })();

  apply();
})();

/* style-hover restore: the design markup carries inert style-hover attributes; bind them as real hover. */
(function () {
  function bind() {
    document.querySelectorAll('[style-hover]').forEach(function (el) {
      if (el.__hb) return; el.__hb = true;
      var base = el.getAttribute('style') || '';
      var hov = el.getAttribute('style-hover');
      el.addEventListener('mouseenter', function () { el.setAttribute('style', base + ';' + hov); });
      el.addEventListener('mouseleave', function () { el.setAttribute('style', base); });
    });
  }
  if (document.readyState !== 'loading') bind(); else document.addEventListener('DOMContentLoaded', bind);
})();