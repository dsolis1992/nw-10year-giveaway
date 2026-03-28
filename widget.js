(function(){
  if(document.getElementById('nw-giveaway-banner')) return;

  var style = document.createElement('style');
  style.textContent = [
    '#nw-giveaway-banner{display:block;width:100%;text-decoration:none;background:linear-gradient(135deg,#001d52 0%,#002360 40%,#0a2f6e 100%);border-top:2px solid rgba(0,184,240,0.3);border-bottom:2px solid rgba(0,184,240,0.3);padding:18px 24px;position:relative;overflow:hidden;cursor:pointer;transition:all .3s ease;font-family:Outfit,-apple-system,BlinkMacSystemFont,sans-serif}',
    '#nw-giveaway-banner:hover{background:linear-gradient(135deg,#001d52 0%,#00296b 40%,#0a3580 100%)}',
    '#nw-giveaway-banner::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(0,184,240,0.08),transparent);animation:nw-gb-sweep 4s linear infinite}',
    '#nw-giveaway-banner::after{content:"";position:absolute;top:50%;left:50%;width:600px;height:100px;transform:translate(-50%,-50%);background:radial-gradient(ellipse,rgba(249,203,20,0.06) 0%,transparent 70%);pointer-events:none}',
    '@keyframes nw-gb-sweep{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}',
    '#nw-giveaway-banner .nw-gb-inner{display:flex;align-items:center;justify-content:center;gap:14px;position:relative;z-index:1;max-width:900px;margin:0 auto}',
    '#nw-giveaway-banner .nw-gb-icon{font-size:26px;filter:drop-shadow(0 0 8px rgba(249,203,20,0.5));animation:nw-gb-pulse 2s ease-in-out infinite}',
    '@keyframes nw-gb-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}',
    '#nw-giveaway-banner .nw-gb-text{display:flex;flex-direction:column;align-items:flex-start;gap:2px}',
    '#nw-giveaway-banner .nw-gb-title{font-size:15px;font-weight:800;letter-spacing:2px;color:#f9cb14;text-shadow:0 0 12px rgba(249,203,20,0.35);line-height:1.2;text-transform:uppercase}',
    '#nw-giveaway-banner .nw-gb-sub{font-size:12px;font-weight:400;color:rgba(224,246,255,0.8);line-height:1.3}',
    '#nw-giveaway-banner .nw-gb-cta{display:inline-flex;align-items:center;gap:6px;background:rgba(249,203,20,0.12);border:1px solid rgba(249,203,20,0.35);border-radius:100px;padding:8px 20px;font-size:12px;font-weight:600;color:#f9cb14;letter-spacing:.8px;text-transform:uppercase;transition:all .25s ease;white-space:nowrap}',
    '#nw-giveaway-banner:hover .nw-gb-cta{background:rgba(249,203,20,0.2);border-color:rgba(249,203,20,0.6);transform:translateX(3px)}',
    '#nw-giveaway-banner .nw-gb-cta svg{width:14px;height:14px;stroke:#f9cb14;stroke-width:2;fill:none;transition:transform .25s}',
    '#nw-giveaway-banner:hover .nw-gb-cta svg{transform:translateX(3px)}',
    '@media(max-width:767px){',
    '  #nw-giveaway-banner{padding:14px 16px}',
    '  #nw-giveaway-banner .nw-gb-inner{gap:10px}',
    '  #nw-giveaway-banner .nw-gb-icon{font-size:22px}',
    '  #nw-giveaway-banner .nw-gb-title{font-size:12px;letter-spacing:1.5px}',
    '  #nw-giveaway-banner .nw-gb-sub{font-size:10px}',
    '  #nw-giveaway-banner .nw-gb-cta{padding:6px 14px;font-size:10px}',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  var banner = document.createElement('a');
  banner.id = 'nw-giveaway-banner';
  banner.href = 'https://nw-10year-giveaway.vercel.app/web';
  banner.target = '_blank';
  banner.rel = 'noopener';
  banner.innerHTML = '<div class="nw-gb-inner">'
    + '<span class="nw-gb-icon">&#127942;</span>'
    + '<span class="nw-gb-text">'
    + '<span class="nw-gb-title">10-Year Anniversary Giveaway</span>'
    + '<span class="nw-gb-sub">10 free full-car window tints &mdash; no purchase needed</span>'
    + '</span>'
    + '<span class="nw-gb-cta">Enter Now <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>'
    + '</div>';

  // Insert between hero and about section
  var about = document.querySelector('.nw-about');
  var wave = document.querySelector('.nw-wave');
  if(about) {
    about.parentNode.insertBefore(banner, about);
  } else if(wave) {
    wave.parentNode.insertBefore(banner, wave.nextSibling);
  } else {
    // Fallback: append after the hero
    var hero = document.querySelector('.nw-hero');
    if(hero) hero.parentNode.insertBefore(banner, hero.nextSibling);
    else document.body.appendChild(banner);
  }
})();
