try {
    const header = `<header class="topbar"><div class="navwrap"><a class="brand" href="index.html">FR <em>UNIVERSE</em><span style="color:#777;font-size:10px;vertical-align:top;margin-left:5px">2027</span></a><span class="live">● TEMPORADA 2027</span></div></header>`;
    const footer = `<footer class="footer"><div class="container"><span><strong>FR UNIVERSE</strong> © 2027 · Portal de universo fictício de batalhas de rima</span><span>Resultados e estatísticas somente após registro oficial</span></div></footer>`;

    const headerEl = document.getElementById('header');
    const footerEl = document.getElementById('footer');
    if (headerEl) headerEl.innerHTML = header;
    if (footerEl) footerEl.innerHTML = footer;
  } catch (e) {
    console.error('Erro ao montar header/footer:', e);
  }
