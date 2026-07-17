/* Customize panel: sets data-* axes on <html>, persisted to localStorage.
   Pure progressive enhancement — if JS is blocked the page still renders the
   default (green / heritage / sage) from the data-* attributes in index.html. */
(function () {
  var root = document.documentElement;
  var KEY = 'wpm-tweaks';
  var defaults = { color: 'green', style: 'heritage', accent: 'sage', compact: false, logo: 'square' };
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

  // Inject a hamburger button that toggles the mobile nav (works on every page from this file).
  (function injectBurger() {
    var header = document.querySelector('header');
    if (!header) return;
    var inner = header.firstElementChild;
    var nav = header.querySelector('nav');
    if (!inner || !nav || header.querySelector('.wpm-burger')) return;
    var burger = document.createElement('button');
    burger.className = 'wpm-burger';
    burger.type = 'button';
    burger.setAttribute('aria-label', 'Toggle menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = '<span></span><span></span><span></span>';
    inner.appendChild(burger);
    function setNav(open) {
      root.setAttribute('data-nav', open ? 'open' : 'closed');
      burger.setAttribute('aria-expanded', String(open));
    }
    burger.addEventListener('click', function () { setNav(root.getAttribute('data-nav') !== 'open'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
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

/* Request-a-Proposal form: progressive enhancement.
   With JS blocked, the form still POSTs to Web3Forms and shows their hosted
   success page. With JS we submit via fetch and show an inline message so the
   visitor never leaves the page. Submissions email to the address tied to the
   Web3Forms access_key (set in index.html). */
(function () {
  function init() {
    var form = document.getElementById('proposal-form');
    if (!form) return;
    var status = document.getElementById('proposal-status');
    var btn = form.querySelector('button[type="submit"]');
    var btnHTML = btn ? btn.innerHTML : '';

    function show(ok, msg) {
      if (!status) return;
      status.hidden = false;
      status.textContent = msg;
      status.style.background = ok ? 'rgba(31,122,60,.12)' : 'rgba(176,42,42,.10)';
      status.style.color = ok ? '#1b5e20' : '#9b1c1c';
    }
    function reset() {
      if (btn) { btn.disabled = false; btn.innerHTML = btnHTML; }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      if (status) status.hidden = true;
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.success) {
            form.reset();
            show(true, 'Thanks — your request has been sent. We’ll be in touch within one business day.');
          } else {
            show(false, (data && data.message) || 'Something went wrong. Please call us or email larry@welcomepropertymanagement.com.');
          }
          reset();
        })
        .catch(function () {
          show(false, 'Network error — please call us or email larry@welcomepropertymanagement.com.');
          reset();
        });
    });
  }
  if (document.readyState !== 'loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();