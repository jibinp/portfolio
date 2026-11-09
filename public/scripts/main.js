(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var body = document.body;

  /* ---------- Nav: border on scroll, mobile menu, active section ---------- */
  var nav = document.querySelector('.nav');
  var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');
  var scrim = document.createElement('div');
  scrim.className = 'nav-scrim';
  scrim.setAttribute('aria-hidden', 'true');
  body.appendChild(scrim);

  function setMenu(open) {
    links.classList.toggle('open', open);
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? body.dataset.menuClose : body.dataset.menuOpen);
  }
  toggle.addEventListener('click', function () { setMenu(!links.classList.contains('open')); });
  scrim.addEventListener('click', function () { setMenu(false); });
  links.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1080) setMenu(false); });

  /* ---------- Scope waveform (illustrative) ---------- */
  var path = document.getElementById('wave');
  if (path) {
    var W = 400, H = 180, N = 160, phase = 0;
    var draw = function () {
      var d = '';
      for (var i = 0; i <= N; i++) {
        var x = (i / N) * W;
        var t = (i / N) * Math.PI * 2 * 3 + phase;
        var y = Math.sin(t) * 0.82 + Math.sin(3 * t) * 0.14;
        y = Math.max(-0.9, Math.min(0.9, y));
        d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + (H / 2 - y * (H * 0.38)).toFixed(1);
      }
      path.setAttribute('d', d);
    };
    draw();
    if (!reduce) {
      var visible = true;
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(path.closest('svg'));
      }
      (function loop() {
        if (visible) { phase -= 0.045; draw(); }
        requestAnimationFrame(loop);
      })();
    }
  }

  /* ---------- Project filters ---------- */
  var bento = document.querySelector('.bento');
  var filters = document.querySelectorAll('.filter');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.f;
      filters.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      bento.classList.toggle('is-filtered', f !== 'all');
      bento.querySelectorAll('.card').forEach(function (card) {
        var show = f === 'all' || (card.dataset.cat || '').split(' ').indexOf(f) !== -1;
        card.classList.toggle('is-hidden', !show);
        if (show) card.classList.add('in');
      });
    });
  });

  /* ---------- Card spotlight follows cursor ---------- */
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---------- Reveal on scroll (staggered) ---------- */
  if (!reduce && 'IntersectionObserver' in window) {
    var groups = ['.sec-head', '.highlights', '.layers > *', '.bento > *', '.notes > *', '.skills > *', '.timeline > li', '.cta', '.prose > *'];
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    groups.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.setProperty('--d', (Math.min(i, 6) * 60) + 'ms');
        io.observe(el);
      });
    });
  }
})();
