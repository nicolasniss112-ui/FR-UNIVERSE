const pages = [
  ['index.html', 'Início'],
  ['batalhas.html', 'Batalhas'],
  ['competicoes.html', 'Competições'],
  ['mcs.html', 'MCs'],
  ['rankings.html', 'Rankings'],
  ['rimagram.html', 'Rimagram'],
  ['rimatube.html', 'RimaTube'],
  ['jornal.html', 'Jornal do Rap'],
  ['calendario.html', 'Calendário']
];

const current = (location.pathname.split('/').pop() || 'index.html');

const header = `
  <header class="topbar">
    <div class="navwrap">
      <a class="brand" href="index.html">FR <em>UNIVERSE</em><span style="color:#777;font-size:10px;vertical-align:top;margin-left:5px">2027</span></a>
      <nav class="nav" aria-label="Navegação principal">
        ${pages.map(([url, name]) => `<a href="${url}" class="${current === url ? 'active' : ''}">${name}</a>`).join('')}
      </nav>
      <span class="live">● TEMPORADA 2027</span>
    </div>
  </header>
`;

const footer = `
  <footer class="footer">
    <div class="container">
      <span><strong>FR UNIVERSE</strong> © 2027 · Portal de universo fictício de batalhas de rima</span>
      <span>Resultados e estatísticas somente após registro oficial</span>
    </div>
  </footer>
`;

const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');
if (headerEl) headerEl.innerHTML = header;
if (footerEl) footerEl.innerHTML = footer;

const FR_ESTADO_SEMANAS = {
  semanaAtual: 2, // Semana 2 abre em destaque por padrão
  modo: "2"        // "2" | "1" | "all"
};

const FR_SEMANAS = {
  2: {
    id: 2,
    destaque: true,
    rotulo: "SEMANA 2 · FOCO EM ES, AM E GO",
    subtitulo: "42 novos nomes (pos. 230 a 271) na base · Pronta para receber o relatório da 2ª semana.",
    status: "2ª SEMANA EM DESTAQUE",
    resumoCards: [
      {
        kicker: "SELETIVAS & PRAÇAS · S2",
        titulo: "ES · AM · GO",
        descricao: "Espaço pronto para os confrontos, chaves e resultados da 2ª semana."
      },
      {
        kicker: "ELENCO · POS. 230–271",
        titulo: "42 Novos Registros",
        descricao: "37 personagens fictícios e 5 MCs reais integrados ao elenco."
      },
      {
        kicker: "REDAÇÃO & MÍDIA · S2",
        titulo: "Jornal · Rimagram · RimaTube",
        descricao: "Preenchimento automático assim que você colar o relatório da rodada."
      }
    ],
    jornal: {
      manchete: "SEGUNDA SEMANA DO FR UNIVERSE ABRE EM DESTAQUE COM FOCO EM ES, AM E GO",
      texto: "Aguardando os resultados e acontecimentos da 2ª semana para fechar a edição."
    },
    rimagramPosts: [
      {
        perfil: "@fruniverse.oficial",
        sigla: "S2",
        local: "ES · AM · GO · 2ª Semana",
        legenda: "Semana 2 no ar e em destaque no portal!"
      }
    ],
    rimatubeConfrontos: [
      { titulo: "Confrontos Semana 2 · ES / AM / GO", tag: "AGUARDANDO RELATÓRIO" }
    ],
    ranking: []
  },

  1: {
    id: 1,
    destaque: false,
    rotulo: "SEMANA 1 · ARQUIVO HISTÓRICO (EDITÁVEL)",
    subtitulo: "Registro da 1ª semana isolado neste bloco para você editar depois sem mexer na Semana 2.",
    status: "ARQUIVO · EDITÁVEL",
    resumoCards: [
      {
        kicker: "CAMPEÕES · SEMANA 1",
        titulo: "Guri, Jotapê, Youngui e Poeta Gabriela",
        descricao: "Destaques registrados na 1ª semana; editáveis quando você quiser revisar."
      },
      {
        kicker: "LNF · SEMANA 1",
        titulo: "Seletivas SP, RJ e DF",
        descricao: "Bloco separado da 1ª semana, sem misturar com a Semana 2."
      }
    ],
    jornal: {
      manchete: "ARQUIVO DA 1ª SEMANA · PRONTO PARA REVISÃO FUTURA",
      texto: "Edite este objeto quando for ajustar os detalhes da 1ª semana."
    },
    rimagramPosts: [
      {
        perfil: "@arquivo.s1",
        sigla: "S1",
        local: "1ª Semana · Registro Base",
        legenda: "Histórico da Semana 1 preservado para consulta e edição."
      }
    ],
    rimatubeConfrontos: [
      { titulo: "Registros da Semana 1", tag: "EDITÁVEL" }
    ],
    ranking: [
      { pos: "1º", mc: "Guri", uf: "SP", titulos: 1, vitorias: 4, pts: 9 },
      { pos: "1º", mc: "Jotapê", uf: "SP", titulos: 1, vitorias: 4, pts: 9 },
      { pos: "1º", mc: "Youngui", uf: "—", titulos: 1, vitorias: 4, pts: 9 },
      { pos: "4º", mc: "Poeta Gabriela", uf: "PR", titulos: 1, vitorias: 4, pts: 7 },
      { pos: "5º", mc: "Joãozinho", uf: "PR", titulos: 0, vitorias: 3, pts: 5 }
    ]
  }
};

function renderSeletorSemanas() {
  const opcoes = [
    { key: "2", label: "Semana 2", badge: "DESTAQUE" },
    { key: "1", label: "Semana 1", badge: "EDITÁVEL" },
    { key: "all", label: "Todas", badge: "S2 + S1" }
  ];

  const botoes = opcoes.map((op) => {
    const ativo = FR_ESTADO_SEMANAS.modo === op.key ? "is-active" : "";
    return `
      <button type="button" class="fr-week-btn ${ativo}" data-fr-week="${op.key}">
        <span>${op.label}</span>
        <span class="fr-week-tag">${op.badge}</span>
      </button>
    `;
  }).join("");

  const atual = getSemanasSelecionadas()[0];

  return `
    <div class="fr-week-dock">
      <div class="fr-week-copy">
        <strong>Semanas do FR Universe 2027</strong>
        <span>Semana 2 em destaque por padrão · Semana 1 disponível para edição futura</span>
      </div>
      <div class="fr-week-group">${botoes}</div>
    </div>
    <div class="fr-week-banner">
      <div>
        <div class="kicker">${FR_ESTADO_SEMANAS.modo === "all" ? "SEMANA 2 + SEMANA 1" : atual.status}</div>
        <h3>${atual.rotulo}</h3>
        <p>${atual.subtitulo}</p>
      </div>
    </div>
  `;
}

function getSemanasSelecionadas() {
  if (FR_ESTADO_SEMANAS.modo === "all") return [FR_SEMANAS[2], FR_SEMANAS[1]];
  if (FR_ESTADO_SEMANAS.modo === "1") return [FR_SEMANAS[1]];
  return [FR_SEMANAS[2]];
}

function bindSeletorSemanas(rerenderFn) {
  document.querySelectorAll("[data-fr-week]").forEach((btn) => {
    btn.addEventListener("click", () => {
      FR_ESTADO_SEMANAS.modo = btn.getAttribute("data-fr-week");
      if (typeof rerenderFn === "function") rerenderFn();
    });
  });
}

const data = {
  'batalhas.html': {
    title: 'CASAS DE <span>BATALHA.</span>',
    eyebrow: 'O circuito',
    desc: 'Explore as casas de batalha, acompanhe as edições e consulte os resultados oficiais do FR Universe 2027.',
    cards: [['ALDEIA', 'Segunda-feira', '🎤'], ['COLISEU', 'Quarta-feira', '⚔'], ['ANA ROSA', 'Quinta-feira', '🎙'], ['NORTE', 'Sexta-feira', '🔥'], ['JAMALIA', 'Domingo', '★']]
  },
  'competicoes.html': {
    title: 'GRANDES <span>COMPETIÇÕES.</span>',
    eyebrow: 'A disputa pelo topo',
    desc: 'LNF Série A, estaduais, nacionais, copas e edições especiais. Cada competição terá seus próprios resultados e chaveamentos.',
    cards: [['LNF SÉRIE A', 'Liga nacional', '🏆'], ['ESTADUAIS', 'Disputas por estado', '◈'], ['NACIONAIS', 'Palco nacional', '★'], ['COPAS', 'Torneios e formatos especiais', '⚡'], ['ESPECIAIS', 'Eventos extraordinários', '◆']]
  },
  'mcs.html': {
    title: 'OS DONOS DO <span>MICROFONE.</span>',
    eyebrow: 'Elenco oficial',
    desc: 'Perfis, estilos, conquistas e históricos dos participantes. Os cadastros serão importados da base oficial aprovada pelo Presidente.',
    cards: []
  },
  'rankings.html': {
    title: 'A CORRIDA PELO <span>TOPO.</span>',
    eyebrow: 'Ranking nacional',
    desc: 'Classificação exclusiva das edições individuais das casas de batalha. Pontuação calculada somente com resultados oficiais registrados.',
    cards: []
  },
  'rimagram.html': {
    title: 'O UNIVERSO <span>REPERCUTE.</span>',
    eyebrow: 'Rimagram',
    desc: 'O feed social fictício do FR Universe: campeões, comentários e acontecimentos autorizados pelo Presidente.',
    cards: []
  },
  'rimatube.html': {
    title: 'BATALHAS QUE <span>MARCAM.</span>',
    eyebrow: 'RimaTube',
    desc: 'Registros simulados das batalhas selecionadas pelo Presidente. Não são vídeos reais e não há reprodução de imagens de confrontos.',
    cards: []
  },
  'jornal.html': {
    title: 'JORNAL DO <span>RAP.</span>',
    eyebrow: 'Cobertura semanal',
    desc: 'Uma edição resumida por semana, após a Jamalia e o fechamento presidencial. A manchete principal é escolhida pelo Presidente.',
    cards: []
  },
  'calendario.html': {
    title: 'CADA DATA, UMA <span>HISTÓRIA.</span>',
    eyebrow: 'Calendário histórico',
    desc: 'Navegue pelos meses de 2027 e consulte as edições já realizadas. Eventos futuros não aparecem neste calendário.',
    cards: []
  }
};

function empty(title, description, emoji = '✦') {
  return `<div class="empty"><div class="big">${emoji}</div><h3>${title}</h3><p>${description}</p></div>`;
}

function renderPage(page, d) {
  if (page === 'batalhas.html' || page === 'competicoes.html') {
    return `
      <section class="section">
        <div class="sectionhead">
          <div><h2>${page === 'batalhas.html' ? 'CIRCUITO DE BATALHAS' : 'COMPETIÇÕES OFICIAIS'}</h2><p>Estrutura inicial • registros em atualização</p></div>
        </div>
        <div class="grid">
          ${d.cards.map(([name, sub, icon]) => `
            <article class="card">
              <div class="placeholder"><div class="symbol">${icon}</div><small>FR UNIVERSE 2027</small></div>
              <div class="cardpad"><div class="kicker">${sub}</div><h3>${name}</h3><p>Edições, confrontos e resultados exibidos conforme registro oficial.</p></div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }

  if (page === 'mcs.html') {
    return `
      <section class="section">
        <div class="sectionhead"><div><h2>ELENCO OFICIAL</h2><p>Cadastro atualizado do FR Universe 2027 · Clique em qualquer MC para abrir a ficha</p></div></div>
        <div class="filters mc-controls">
          <input class="search" id="mc-search" placeholder="Buscar MC por nome ou apelido..." aria-label="Buscar MC">
          <select class="mc-select" id="mc-state" aria-label="Filtrar por estado"><option value="">Todos os estados</option></select>
          <select class="mc-select" id="mc-nature" aria-label="Filtrar por natureza"><option value="">Reais e fictícios</option><option value="real">Reais</option><option value="fictício">Fictícios</option></select>
        </div>
        <p class="mc-count" id="mc-count" aria-live="polite"></p>
        <div class="mc-grid" id="mc-list"></div>
        <div class="mc-more-wrap"><button class="btn secondary" id="mc-more" type="button" hidden>VER MAIS MCS</button></div>
        <p class="fine">As categorias e descrições representam o cadastro fornecido pelo Presidente, não uma avaliação externa verificada.</p>
      </section>
      <dialog id="mc-dialog" class="mc-dialog" aria-label="Ficha do MC">
        <button class="mc-close" id="mc-close" aria-label="Fechar ficha">✕</button>
        <div id="mc-detail"></div>
      </dialog>
    `;
  }

  if (page === 'rankings.html') {
    const sem = getSemanasSelecionadas()[0];
    const rows = sem.ranking.length
      ? sem.ranking.map((r) => `<tr><td><strong>${r.pos}</strong></td><td><strong>${r.mc}</strong></td><td>${r.uf}</td><td>${r.titulos}</td><td>${r.vitorias}</td><td><strong style="color:#f3c54c">${r.pts}</strong></td></tr>`).join('')
      : `<tr><td colspan="6" style="text-align:center;padding:34px;color:#999">Aguardando resultados da Semana 2</td></tr>`;

    return `
      ${renderSeletorSemanas()}
      <section class="section">
        <div class="sectionhead"><div><h2>RANKING · SEMANA ${sem.id}</h2><p>${sem.rotulo}</p></div></div>
        <div class="tablewrap">
          <table>
            <thead><tr><th>Posição</th><th>MC</th><th>UF</th><th>Títulos</th><th>Vitórias</th><th>Pontos</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <p class="fine">Regras: campeão +7, vice +5, semifinal +3, vitória 2×0 +1, derrota na primeira fase −1. Desempates: títulos, vitórias e empate mantido.</p>
      </section>
    `;
  }

  if (page === 'rimagram.html') {
    const sems = getSemanasSelecionadas();
    const postsHtml = sems.flatMap((s) => s.rimagramPosts.map((p) => `
      <article class="card cardpad" style="margin-bottom:16px">
        <div class="kicker">${p.perfil} · ${p.local}</div>
        <h3 style="margin:6px 0">${p.legenda}</h3>
      </article>
    `)).join('');

    return `
      ${renderSeletorSemanas()}
      <section class="section">
        <div class="sectionhead"><div><h2>FEED DO UNIVERSO</h2><p>Publicações separadas por semana (Semana 2 em destaque)</p></div></div>
        <div style="max-width:720px;margin:auto">${postsHtml || empty('SEM POSTS', 'Nenhum post registrado neste recorte.', '📱')}</div>
      </section>
    `;
  }

  if (page === 'rimatube.html') {
    const sems = getSemanasSelecionadas();
    const itemsHtml = sems.flatMap((s) => s.rimatubeConfrontos.map((c) => `
      <article class="card cardpad">
        <div class="kicker">SEMANA ${s.id} · ${c.tag}</div>
        <h3>${c.titulo}</h3>
      </article>
    `)).join('');

    return `
      ${renderSeletorSemanas()}
      <section class="section">
        <div class="sectionhead"><div><h2>CENTRAL DE CONFRONTOS</h2><p>Registros textuais simulados por semana</p></div></div>
        <div class="grid">${itemsHtml}</div>
      </section>
    `;
  }

  if (page === 'jornal.html') {
    const sem = getSemanasSelecionadas()[0];
    const cardsResumo = sem.resumoCards.map((c) => `
      <article class="card cardpad">
        <div class="kicker">${c.kicker}</div>
        <h3>${c.titulo}</h3>
        <p>${c.descricao}</p>
      </article>
    `).join('');

    return `
      ${renderSeletorSemanas()}
      <section class="section">
        <div class="sectionhead"><div><h2>JORNAL DO RAP · SEMANA ${sem.id}</h2><p>${sem.rotulo}</p></div></div>
        <div class="card cardpad" style="margin-bottom:20px;border-color:#66562b">
          <div class="label">Manchete · Semana ${sem.id}</div>
          <h3 style="font-size:32px;margin:8px 0">${sem.jornal.manchete}</h3>
          <p>${sem.jornal.texto}</p>
        </div>
        <div class="grid">${cardsResumo}</div>
      </section>
    `;
  }

  if (page === 'calendario.html') {
    return `
      <section class="section">
        <div class="sectionhead"><div><h2>HISTÓRICO DE 2027</h2><p>Somente eventos concluídos e oficialmente registrados</p></div></div>
        <div class="card cardpad" style="max-width:850px;margin:auto">
          <div class="calendarbar"><button id="prevmonth" aria-label="Mês anterior">❮</button><h2 id="monthname">JANEIRO 2027</h2><button id="nextmonth" aria-label="Próximo mês">❯</button></div>
          <div class="week" id="calendar"></div>
          <p class="fine" style="margin-top:20px">Os símbolos das casas e competições aparecerão nos dias de eventos concluídos.</p>
        </div>
      </section>
    `;
  }

  return '';
}

function mountCurrentPage() {
  const d = data[current];
  const contentEl = document.
