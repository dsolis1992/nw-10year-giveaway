(function(){
  if(document.getElementById('nw-giveaway-widget')) return;

  var style = document.createElement('style');
  style.textContent = [
    '#nw-giveaway-widget{position:fixed;bottom:20px;right:20px;z-index:99999;text-decoration:none;display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#001d52,#002360);border:2px solid #00b8f0;border-radius:14px;padding:12px 20px 12px 16px;box-shadow:0 0 20px rgba(0,184,240,0.3),0 4px 15px rgba(0,0,0,0.3);animation:nw-gw-float 3s ease-in-out infinite;cursor:pointer;transition:all 0.3s ease;font-family:-apple-system,BlinkMacSystemFont,sans-serif}',
    '#nw-giveaway-widget:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 0 30px rgba(0,184,240,0.5),0 8px 25px rgba(0,0,0,0.4);border-color:#f9cb14}',
    '#nw-giveaway-widget .nw-gw-icon{font-size:28px;filter:drop-shadow(0 0 6px rgba(249,203,20,0.6))}',
    '#nw-giveaway-widget .nw-gw-text{display:flex;flex-direction:column}',
    '#nw-giveaway-widget .nw-gw-title{font-size:13px;font-weight:800;letter-spacing:1.2px;color:#f9cb14;text-shadow:0 0 10px rgba(249,203,20,0.4);line-height:1.2}',
    '#nw-giveaway-widget .nw-gw-sub{font-size:11px;color:#e0f6ff;margin-top:2px;line-height:1.3}',
    '#nw-giveaway-widget .nw-gw-arrow{color:#00b8f0;font-size:18px;margin-left:4px;transition:transform 0.3s}',
    '#nw-giveaway-widget:hover .nw-gw-arrow{transform:translateX(3px);color:#f9cb14}',
    '#nw-giveaway-widget::before{content:"";position:absolute;inset:-2px;border-radius:15px;background:linear-gradient(90deg,transparent,rgba(0,184,240,0.4),transparent);z-index:-1;animation:nw-gw-sweep 3s linear infinite}',
    '@keyframes nw-gw-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}',
    '@keyframes nw-gw-sweep{0%{opacity:0;transform:translateX(-100%)}50%{opacity:1}100%{opacity:0;transform:translateX(100%)}}'
  ].join('\n');
  document.head.appendChild(style);

  var a = document.createElement('a');
  a.id = 'nw-giveaway-widget';
  a.href = 'https://nw-10year-giveaway.vercel.app/web';
  a.target = '_blank';
  a.rel = 'noopener';
  a.innerHTML = '<span class="nw-gw-icon">&#127942;</span>'
    + '<span class="nw-gw-text">'
    + '<span class="nw-gw-title">10-YEAR GIVEAWAY</span>'
    + '<span class="nw-gw-sub">10 free full-car tints &mdash; Enter now!</span>'
    + '</span>'
    + '<span class="nw-gw-arrow">&#8250;</span>';
  document.body.appendChild(a);
})();
