/*
  "Leave a message" button, shared by every site (home, portfolio, brand, music).
  Messages are private: they go to the owner's email through Web3Forms.
  Use: <script src="message.js" data-key="WEB3FORMS_ACCESS_KEY" data-site="Home" defer></script>
  No key = nothing is shown. Copy this same file into each repo.
*/
(function () {
  var me = document.currentScript;
  var key = me && me.getAttribute('data-key');
  if (!key || document.getElementById('jp-msg')) return;
  var site = me.getAttribute('data-site') || location.hostname;

  var fr = (document.documentElement.lang || '').slice(0, 2) === 'fr';
  var L = fr ? {
    open: 'Message', title: 'Laisser un message', sub: 'Privé : seul Jibin le lit.',
    name: 'Nom', email: 'E-mail', msg: 'Message', send: 'Envoyer', close: 'Fermer',
    sending: 'Envoi…', ok: 'Merci ! Votre message a été envoyé.', err: 'Échec de l’envoi. Réessayez plus tard.'
  } : {
    open: 'Message', title: 'Leave a message', sub: 'Private: only Jibin reads it.',
    name: 'Name', email: 'Email', msg: 'Message', send: 'Send', close: 'Close',
    sending: 'Sending…', ok: 'Thank you! Your message was sent.', err: 'Could not send. Please try again later.'
  };

  var css = '' +
    '#jp-msg-btn{position:fixed;right:16px;bottom:16px;z-index:9998;display:inline-flex;align-items:center;gap:8px;' +
    'padding:12px 18px;border:0;border-radius:999px;cursor:pointer;font:600 15px/1 Geist,Inter,system-ui,sans-serif;' +
    'color:#04130d;background:linear-gradient(135deg,#34d399,#22d3ee);box-shadow:0 8px 24px rgba(0,0,0,.45)}' +
    '#jp-msg-btn:hover{filter:brightness(1.08)}#jp-msg-btn:focus-visible{outline:2px solid #ecf0f4;outline-offset:3px}' +
    '#jp-msg-btn svg{width:18px;height:18px}' +
    '#jp-msg{border:1px solid rgba(255,255,255,.14);border-radius:18px;padding:0;width:min(440px,calc(100vw - 32px));' +
    'background:#0b0e13;color:#ecf0f4;font:400 15px/1.5 Geist,Inter,system-ui,sans-serif}' +
    '#jp-msg::backdrop{background:rgba(0,0,0,.6)}' +
    '#jp-msg form{display:grid;gap:12px;padding:22px}' +
    '#jp-msg h2{margin:0;font-size:20px;font-weight:600;letter-spacing:-.02em}' +
    '#jp-msg .s{margin:-6px 0 4px;color:#a3adb9;font-size:13px}' +
    '#jp-msg label{display:grid;gap:5px;font-size:13px;color:#a3adb9}' +
    '#jp-msg input,#jp-msg textarea{font:inherit;color:#ecf0f4;background:#07090c;border:1px solid rgba(255,255,255,.14);' +
    'border-radius:10px;padding:10px 12px;width:100%;box-sizing:border-box}' +
    '#jp-msg textarea{min-height:110px;resize:vertical}' +
    '#jp-msg input:focus,#jp-msg textarea:focus{outline:none;border-color:#34d399;box-shadow:0 0 0 3px rgba(52,211,153,.18)}' +
    '#jp-msg .r{display:flex;gap:10px;justify-content:flex-end;margin-top:4px}' +
    '#jp-msg button{font:600 14px Geist,Inter,system-ui,sans-serif;border-radius:10px;padding:10px 16px;cursor:pointer}' +
    '#jp-msg .x{background:transparent;color:#a3adb9;border:1px solid rgba(255,255,255,.14)}' +
    '#jp-msg .go{border:0;color:#04130d;background:#34d399}#jp-msg .go[disabled]{opacity:.6;cursor:progress}' +
    '#jp-msg .st{min-height:1.4em;margin:0;font-size:13px;color:#a3adb9}#jp-msg .st.ok{color:#34d399}#jp-msg .st.bad{color:#f87171}' +
    '#jp-msg .hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}' +
    '@media print{#jp-msg-btn{display:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var btn = document.createElement('button');
  btn.id = 'jp-msg-btn'; btn.type = 'button'; btn.setAttribute('aria-haspopup', 'dialog');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span></span>';
  btn.querySelector('span').textContent = L.open;

  var dlg = document.createElement('dialog');
  dlg.id = 'jp-msg'; dlg.setAttribute('aria-labelledby', 'jp-msg-t');
  dlg.innerHTML =
    '<form novalidate>' +
    '<h2 id="jp-msg-t"></h2><p class="s"></p>' +
    '<label><span data-l="name"></span><input name="name" required maxlength="100" autocomplete="name"></label>' +
    '<label><span data-l="email"></span><input name="email" type="email" required maxlength="150" autocomplete="email"></label>' +
    '<label><span data-l="msg"></span><textarea name="message" required maxlength="4000"></textarea></label>' +
    '<input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
    '<p class="st" role="status" aria-live="polite"></p>' +
    '<div class="r"><button type="button" class="x"></button><button type="submit" class="go"></button></div>' +
    '</form>';
  dlg.querySelector('h2').textContent = L.title;
  dlg.querySelector('.s').textContent = L.sub;
  dlg.querySelectorAll('[data-l]').forEach(function (n) { n.textContent = L[n.getAttribute('data-l')]; });
  dlg.querySelector('.x').textContent = L.close;
  dlg.querySelector('.go').textContent = L.send;

  document.body.appendChild(btn);
  document.body.appendChild(dlg);

  var form = dlg.querySelector('form'), status = dlg.querySelector('.st'), go = dlg.querySelector('.go');
  btn.addEventListener('click', function () { status.textContent = ''; status.className = 'st'; dlg.showModal(); });
  dlg.querySelector('.x').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    if (form.botcheck.checked) return;
    go.disabled = true; status.className = 'st'; status.textContent = L.sending;
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: key,
        subject: 'New message from ' + site,
        from_name: site + ' website',
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
        page: location.href
      })
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (!j.success) throw 0;
      status.className = 'st ok'; status.textContent = L.ok; form.reset();
    }).catch(function () {
      status.className = 'st bad'; status.textContent = L.err;
    }).then(function () { go.disabled = false; });
  });
})();
