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

const current = location.pathname.split('/').pop() || 'index.html';

const header = `<header class="topbar"><div class="navwrap"><a class="brand" href="index.html">FR <em>UNIVERSE</em><span style="color:#777;font-size:10px;vertical-align:top;margin-left:5px">2027</span></a><nav class="nav" aria-label="Navegação principal">${pages.map(([url, name]) => `<a href="${url}" class="${current === url ? 'active' : ''}">${name}</a>`).join('')}</nav><span class="live">● TEMPORADA 2027</span></div></header>`;

const footer = `<footer class="footer"><div class="container"><span><strong>FR UNIVERSE</strong> © 2027 · Portal de universo fictício de batalhas de rima</span><span>Resultados e estatísticas somente após registro oficial</span></div></footer>`;

const headerEl = document.getElementById('header');
const footerEl = document.getElementById('footer');
if (headerEl) headerEl.innerHTML = header;
if (footerEl) footerEl.innerHTML = footer;

// Atualiza contadores na página inicial caso estejam zerados/fixos no HTML
if (current === 'index.html') {
  window.addEventListener('DOMContentLoaded', () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let node;
    while ((node = walker.nextNode())) {
      const txt = (node.textContent || '').trim();
      const parentTxt = (node.parentElement ? node.parentElement.textContent : '').toUpperCase();
      if (txt === '00' && node.children.length === 0) {
        if (parentTxt.includes('EDIÇÕES')) node.textContent = '05';
        if (parentTxt.includes('CAMPEÕES')) node.textContent = '05';
      }
    }
  });
}

const BATALHAS_EDICOES = {
  'ALDEIA': {
    sub: 'Segunda-feira · São Paulo',
    icon: '🎤',
    resumo: '1ª Edição (Edição Lendas) · Clique para ver edições e acontecimentos',
    edicoes: [
      {
        nome: '1ª Edição (Edição Lendas) — Batalha de Trios',
        campeao: 'Neo, Jotapê e Kant (título invicto por 3×0 na Grande Final)',
        vice: 'Big Mike, Ike e Valle',
        acontecimentos: [
          'Semifinalistas: Tubarão, Kroy e Bask | Apollo, Salvador da RIMA e Noventa.',
          'Quartas de Final: Guri, Prado e Tavin | Colombiana, Bob13 e Nicolas Niss | Barreto, Dopre e Brennuz | César, Sid e MCharles.',
          'Placares das Quartas: Tubarão/Kroy/Bask 3×2 Guri/Prado/Tavin; Colombiana/Bob13/Nicolas Niss 0×3 Big Mike/Ike/Valle; Neo/Jotapê/Kant 3×1 Barreto/Dopre/Brennuz; César/Sid/MCharles 2×3 Apollo/Salvador da RIMA/Noventa.',
          'Semifinais: Tubarão/Kroy/Bask 2×3 Big Mike/Ike/Valle; Neo/Jotapê/Kant 3×0 Apollo/Salvador da RIMA/Noventa.',
          'Grande Final: Big Mike, Ike e Valle 0×3 Neo, Jotapê e Kant.'
        ]
      }
    ]
  },
  'COLISEU': {
    sub: 'Quarta-feira',
    icon: '⚔',
    resumo: '1ª Edição (Individual) · Clique para ver edições e acontecimentos',
    edicoes: [
      {
        nome: '1ª Edição — Individual',
        campeao: 'Jotapê',
        vice: 'WL',
        acontecimentos: [
          'Semifinalistas: Neo | Magrão.',
          'Quartas de Final: Noventa | Perigx | Devilzinha | Torvi.',
          'Eliminados na 1ª Fase: Peke | Kaell | Xamuel | FP | Ike | Rico Mesquita | Nego Drama | Pivete.',
          'Caminho de Jotapê: 1ª Fase 2×0 vs Kaell; Quartas 2×0 vs Devilzinha; Semifinal 2×0 vs Magrão; Final 2×1 vs WL.'
        ]
      }
    ]
  },
  'ANA ROSA': {
    sub: 'Quinta-feira',
    icon: '🎙',
    resumo: '1ª Edição (Individual) · Clique para ver edições e acontecimentos',
    edicoes: [
      {
        nome: '1ª Edição — Individual',
        campeao: 'Guri',
        vice: 'Mano Ayron',
        acontecimentos: [
          'Semifinalistas: Salvador | Kroy.',
          'Quartas de Final: Fortes | Dehat | Ike | Magrão.',
          'Eliminados na 1ª Fase: Zuluzão | Bask | Bobby Midia | Valle | Levinsk | Tavin | Lion | Prado.',
          'Caminho de Guri: 1ª Fase 2×0 vs Lion; Quartas 2×0 vs Dehat; Semifinal 2×1 vs Salvador; Final 2×1 vs Mano Ayron.'
        ]
      }
    ]
  },
  'NORTE': {
    sub: 'Sexta-feira',
    icon: '🔥',
    resumo: '1ª Edição (Formato 45s / 90s / 45s) · Clique para ver edições e acontecimentos',
    edicoes: [
      {
        nome: '1ª Edição — Individual (Formato 45s / 90s / 45s)',
        campeao: 'Youngui',
        vice: 'Dehat',
        acontecimentos: [
          'Semifinalistas: Glaubin | Prado.',
          'Quartas de Final: MCharles | Martin | Tavin | Levinsk.',
          'Eliminados na 1ª Fase: Jotapê | Tonhão | Japa | Kroy | Sara Krl | Lion | Xamuel | Vick Vi.',
          'Caminho de Youngui: 1ª Fase 2×1 vs Tonhão; Quartas 2×0 vs Levinsk; Semifinal 2×1 vs Prado; Final 2×0 vs Dehat.'
        ]
      }
    ]
  },
  'JAMALIA': {
    sub: 'Domingo · Curitiba · PR',
    icon: '★',
    resumo: 'Edição de Inauguração (16 MCs) · Clique para ver edições e acontecimentos',
    edicoes: [
      {
        nome: 'Edição de Inauguração — Individual (16 MCs)',
        campeao: 'Poeta Gabriela (4V–0D, 8–4 em rounds; quatro vitórias seguidas por 2×1)',
        vice: 'Joãozinho (3V–1D, 7–2 em rounds)',
        acontecimentos: [
          'Semifinalistas: Olhinho (2V–1D, 5–4 em rounds) | Ranks (2V–1D, 4–3 em rounds).',
          'Quartas (1V–1D): Bigode 041, Levitico, Cadu e Cris.',
          'Oitavas (0V–1D): HW, Ravina, Lilica, Jef, Valle, Ike, Peu e Isa.',
          'Caminho de Poeta Gabriela: Oitavas 03 2×1 vs Lilica; Quartas 02 2×1 vs Levitico; Semifinal 01 2×1 vs Olhinho; Final 2×1 vs Joãozinho.'
        ]
      }
    ]
  }
};

const COMPETICOES_EDICOES = {
  'LNF SÉRIE A': {
    sub: 'Liga nacional · Seletivas SP, RJ e DF',
    icon: '🏆',
    resumo: '20 classificados por estado (60 no total) · Clique para ver acontecimentos',
    edicoes: [
      {
        nome: 'Seletivas Estaduais — São Paulo (SP)',
        campeao: '20 Classificados (16 diretos + 4 repescagem)',
        vice: '12 Eliminados',
        acontecimentos: [
          'Diretos (16): Mano Ayron, Kroy, Guri, Brennuz, Kairós, Prado, KLJR, Levinsk, Bask, Ajota, Dehat, Luh do Click, Arielzinha, Bonfim, Glaubin e Tubarão.',
          'Repescagem (4): WM, EZ, Apollo e Killua.',
          'Eliminados 1ª Fase Repescagem (8): Blackoutt, Sol na Voz, Baueb, Black Panther, Coral, Fortes, H7 e Lecroy.',
          'Eliminados Finais Repescagem (4): Derik, Lili, Lil Vi e Grafitteh (eliminado no detalhe por 1×2 para Killua).'
        ]
      },
      {
        nome: 'Seletivas Estaduais — Rio de Janeiro (RJ)',
        campeao: '20 Classificados (16 diretos + 4 repescagem)',
        vice: '12 Eliminados',
        acontecimentos: [
          'Diretos (16): Davi da 7, Nick Mory, MT, Filart, Kisol, Celia, WL, Chefona, João Vega, Pyetrin, Rico Mesquita, Mano na Area, Malagueta, Torvi, Thorment e Lujia.',
          'Repescagem (4): Nene, Bigode, Nicolas e Pivete.',
          'Eliminados 1ª Fase Repescagem (8): Schuler, Nart, Devilzinha, Julia, Peke, MC RJ #32, Bom na Rima e Karin.',
          'Eliminados Finais Repescagem (4): Ge, Rough, Saloic e Scooby.',
          'Destaques: Rico Mesquita avançou direto (2×1 sobre Ge); Pivete se recuperou após perder na 1ª rodada para Nick Mory (0×2) e venceu Scooby (2×1) na repescagem; Devilzinha e Peke caíram na 1ª fase da repescagem.'
        ]
      },
      {
        nome: 'Seletivas Estaduais — Distrito Federal (DF)',
        campeao: '20 Classificados (16 diretos + 4 repescagem)',
        vice: '12 Eliminados',
        acontecimentos: [
          'Diretos 1.ª Ronda (16): Foca Paranoá, Tito, Luna Guará, Cali Riacho, Kira Cruzeiro Velho, Zeca Gama, Mel Lago Sul, Mirela Recanto, Ianzin, Teca Estrutural, Roni São Sebastião, Léo Núcleo Bandeirante, Tinho Octogonal, Brisa Planaltina, Guga Águas Claras e Rato da Asa.',
          'Repescagem Finais de Vaga (4): Pietra Candangolândia, Nanda Samambaia, Soraia Brazlândia e Breno Sobradinho.',
          'Eliminados 1.ª Fase Repescagem (8): MDG, Vini Lago Norte, Kael DF, Duda Ceilândia, Juju Santa Maria, Gomes, Digo Varjão e Vektor Taguatinga.',
          'Eliminados Finais Repescagem (4): Tavo Cruzeiro, Nati Jardim Botânico, Beto Vicente Pires e Bia Park Way.',
          'Destaques: Tito (2×1 vs Juju Santa Maria) e Ianzin (2×0 vs Duda Ceilândia) avançaram direto; Gomes e MDG caíram na repescagem para Nati Jardim Botânico e Nanda Samambaia; Nanda Samambaia e Soraia Brazlândia venceram suas finais de repescagem por 2×0.'
        ]
      }
    ]
  },
  'ESTADUAIS': {
    sub: 'Disputas por estado',
    icon: '◈',
    resumo: 'Seletivas SP, RJ e DF registradas · Clique para ver acontecimentos',
    edicoes: [
      {
        nome: 'Seletivas Estaduais LNF — SP, RJ e DF',
        campeao: '60 Classificados no total (20 por estado)',
        vice: '36 Eliminados no total (12 por estado)',
        acontecimentos: [
          'Estados registrados: São Paulo (SP), Rio de Janeiro (RJ) e Distrito Federal (DF).'
        ]
      }
    ]
  },
  'NACIONAIS': {
    sub: 'Palco nacional',
    icon: '★',
    resumo: 'Nenhuma edição registrada até o momento',
    edicoes: []
  },
  'COPAS': {
    sub: 'Torneios e formatos especiais',
    icon: '⚡',
    resumo: 'Sem edições registradas até o momento · Clique para ver detalhes',
    edicoes: [
      {
        nome: 'Status das Copas',
        campeao: 'Nenhum campeão registrado',
        vice: '—',
        acontecimentos: [
          'Nenhum resultado oficial de copa foi registrado até agora.'
        ]
      }
    ]
  },
  'ESPECIAIS': {
    sub: 'Eventos extraordinários',
    icon: '◆',
    resumo: 'Aldeia (Edição Lendas) & Jamália (Inauguração) · Clique para ver acontecimentos',
    edicoes: [
      {
        nome: 'Aldeia · 1ª Edição (Edição Lendas — Trios)',
        campeao: 'Neo, Jotapê e Kant (3×0 na final)',
        vice: 'Big Mike, Ike e Valle',
        acontecimentos: [
          'Formato de trios com título invicto de Neo, Jotapê e Kant.'
        ]
      },
      {
        nome: 'Batalha da Jamália (BDJ) · Edição de Inauguração (Curitiba/PR)',
        campeao: 'Poeta Gabriela (4V–0D, 8–4 em rounds; 2×1 na final)',
        vice: 'Joãozinho (3V–1D, 7–2 em rounds)',
        acontecimentos: [
          'Inauguração em Curitiba (PR) com 16 MCs e quatro vitórias seguidas por 2×1 de Poeta Gabriela.'
        ]
      }
    ]
  }
};

const WEEK1_RANKING = [
  { pos: '1º', mc: 'Guri', uf: 'SP', titulos: 1, vitorias: 4, pts: 9 },
  { pos: '1º', mc: 'Jotapê', uf: 'SP', titulos: 1, vitorias: 4, pts: 9 },
  { pos: '1º', mc: 'Youngui', uf: '—', titulos: 1, vitorias: 4, pts: 9 },
  { pos: '4º', mc: 'Poeta Gabriela', uf: 'PR', titulos: 1, vitorias: 4, pts: 7 },
  { pos: '5º', mc: 'Joãozinho', uf: 'PR', titulos: 0, vitorias: 3, pts: 5 },
  { pos: '5º', mc: 'Dehat', uf: 'SP', titulos: 0, vitorias: 0, pts: 5 },
  { pos: '5º', mc: 'Mano Ayron', uf: 'SP', titulos: 0, vitorias: 0, pts: 5 },
  { pos: '5º', mc: 'WL', uf: 'RJ', titulos: 0, vitorias: 0, pts: 5 },
  { pos: '9º', mc: 'Olhinho', uf: 'PR', titulos: 0, vitorias: 2, pts: 3 },
  { pos: '9º', mc: 'Ranks', uf: '—', titulos: 0, vitorias: 2, pts: 3 },
  { pos: '9º', mc: 'Glaubin', uf: 'SP', titulos: 0, vitorias: 0, pts: 3 },
  { pos: '9º', mc: 'Magrão', uf: '—', titulos: 0, vitorias: 0, pts: 3 },
  { pos: '9º', mc: 'Neo', uf: '—', titulos: 0, vitorias: 0, pts: 3 },
  { pos: '9º', mc: 'Salvador', uf: '—', titulos: 0, vitorias: 0, pts: 3 },
  { pos: '15º', mc: 'Kroy', uf: 'SP', titulos: 0, vitorias: 0, pts: 2 },
  { pos: '15º', mc: 'Prado', uf: 'SP', titulos: 0, vitorias: 0, pts: 2 }
];

const WEEK1_CALENDAR_EVENTS = {
  '2027-1-4': { label: 'Aldeia #1', href: 'batalhas.html?abrir=ALDEIA', title: '04/01/2027 — Batalha da Aldeia · 1ª Edição' },
  '2027-1-6': { label: 'Coliseu #1', href: 'batalhas.html?abrir=COLISEU', title: '06/01/2027 — Batalha do Coliseu · 1ª Edição' },
  '2027-1-7': { label: 'Ana Rosa #1', href: 'batalhas.html?abrir=ANA%20ROSA', title: '07/01/2027 — Batalha do Ana Rosa · 1ª Edição' },
  '2027-1-8': { label: 'Norte #1', href: 'batalhas.html?abrir=NORTE', title: '08/01/2027 — Batalha da Norte · 1ª Edição' },
  '2027-1-9': { label: 'LNF Seletivas', href: 'competicoes.html?abrir=LNF%20S%C3%89RIE%20A', title: '09/01/2027 — LNF · Seletivas Estaduais (SP, RJ e DF)' },
  '2027-1-10': { label: 'Jamália #1', href: 'batalhas.html?abrir=JAMALIA', title: '10/01/2027 — Batalha da Jamália · Inauguração' }
};

const RIMAGRAM_POSTS = [
  {
    id: 'aldeia-1',
    perfil: '@aldeia.sp',
    sigla: 'AL',
    nome: 'Batalha da Aldeia · 1ª Edição (Edição Lendas)',
    meta: 'São Paulo · Segunda-feira · Trios',
    local: 'São Paulo, SP',
    destaque: 'TRIOS · FINAL 0×3',
    curtidas: 148,
    badge: 'CAMPEÕES 3×0',
    texto: 'Neo, Jotapê e Kant levam o título invicto por 3×0 na Grande Final contra Big Mike, Ike e Valle. Semifinais: Tubarão, Kroy e Bask | Apollo, Salvador da RIMA e Noventa.',
    comentarioDestaque: 'fr_oficial: Título invicto marcando a abertura da temporada em SP.'
  },
  {
    id: 'coliseu-1',
    perfil: '@coliseu.oficial',
    sigla: 'CL',
    nome: 'Batalha do Coliseu · 1ª Edição',
    meta: 'Quarta-feira · Individual',
    local: 'Arena Coliseu',
    destaque: 'INDIVIDUAL · FINAL 1×2',
    curtidas: 112,
    badge: 'CAMPEÃO 2×1',
    texto: 'Jotapê é campeão vencendo WL por 2×1 na final! Semifinalistas: Neo e Magrão. Quartas: Noventa, Perigx, Devilzinha e Torvi.',
    comentarioDestaque: 'jornaldorap: Chave dura até a decisão por 2×1.'
  },
  {
    id: 'anarosa-1',
    perfil: '@anarosa.batalha',
    sigla: 'AR',
    nome: 'Batalha do Ana Rosa · 1ª Edição',
    meta: 'Quinta-feira · Individual',
    local: 'Ana Rosa, SP',
    destaque: 'INDIVIDUAL · FINAL 2×1',
    curtidas: 97,
    badge: 'CAMPEÃO 2×1',
    texto: 'Guri conquista o título superando Mano Ayron por 2×1 na final! Semifinalistas: Salvador e Kroy. Quartas: Fortes, Dehat, Ike e Magrão.',
    comentarioDestaque: 'fr_oficial: Construção afiada do início ao fim da noite.'
  },
  {
    id: 'norte-1',
    perfil: '@norte.batalha',
    sigla: 'NT',
    nome: 'Batalha da Norte · 1ª Edição',
    meta: 'Sexta-feira · Formato 45s / 90s / 45s',
    local: 'Zona Norte',
    destaque: '45S/90S/45S · FINAL 0×2',
    curtidas: 104,
    badge: 'CAMPEÃO 2×0',
    texto: 'Youngui leva o título no formato 45s / 90s / 45s vencendo Dehat por 2×0 na final! Semifinalistas: Glaubin e Prado. Quartas: MCharles, Martin, Tavin e Levinsk.',
    comentarioDestaque: 'fr_oficial: Ritmo forte no formato 45s / 90s / 45s.'
  },
  {
    id: 'lnf-seletivas',
    perfil: '@lnf.oficial',
    sigla: 'LN',
    nome: 'Seletivas Estaduais — LNF',
    meta: 'SP · RJ · DF · 20 Classificados por Estado',
    local: 'SP · RJ · DF',
    destaque: '60 CLASSIFICADOS NA LNF',
    curtidas: 186,
    badge: '60 CLASSIFICADOS',
    texto: 'SP: 16 diretos + WM, EZ, Apollo e Killua (2×1 vs Grafitteh). RJ: 16 diretos + Nene, Bigode, Nicolas e Pivete (2×1 vs Scooby). DF: 16 diretos + Pietra Candangolândia, Nanda Samambaia (2×0), Soraia Brazlândia (2×0) e Breno Sobradinho.',
    comentarioDestaque: 'lnf.oficial: Lista oficial fechada com 20 classificados por estado.'
  },
  {
    id: 'jamalia-1',
    perfil: '@jamalia.cwb',
    sigla: 'JM',
    nome: 'Batalha da Jamália (BDJ) · Inauguração',
    meta: 'Curitiba · PR · Domingo · 16 MCs',
    local: 'Curitiba, PR',
    destaque: 'BDJ 16 MCS · FINAL 2×1',
    curtidas: 131,
    badge: '4V–0D · 2×1',
    texto: 'Poeta Gabriela é campeã inaugural com campanha 4V–0D (8–4 em rounds), vencendo quatro confrontos seguidos por 2×1 (Lilica, Levitico, Olhinho e Joãozinho na final).',
    comentarioDestaque: 'fr_oficial: Estreia histórica em Curitiba com quatro vitórias por 2×1.'
  }
];

const RIMATUBE_ITEMS = [
  {
    selo: 'TRIOS · FINAL 0×3',
    canal: 'FR UNIVERSE TV · SÃO PAULO',
    titulo: 'Aldeia · 1ª Edição (Edição Lendas): Big Mike, Ike e Valle 0 × 3 Neo, Jotapê e Kant',
    detalhe: 'Quartas: Tubarão/Kroy/Bask 3×2 Guri/Prado/Tavin; Colombiana/Bob13/Nicolas Niss 0×3 Big Mike/Ike/Valle; Neo/Jotapê/Kant 3×1 Barreto/Dopre/Brennuz; César/Sid/MCharles 2×3 Apollo/Salvador da RIMA/Noventa. Semis: Tubarão/Kroy/Bask 2×3 Big Mike/Ike/Valle; Neo/Jotapê/Kant 3×0 Apollo/Salvador da RIMA/Noventa.'
  },
  {
    selo: 'INDIVIDUAL · FINAL 1×2',
    canal: 'FR UNIVERSE TV · COLISEU',
    titulo: 'Coliseu · 1ª Edição: WL 1 × 2 Jotapê',
    detalhe: 'Caminho de Jotapê: 1ª Fase 2×0 vs Kaell; Quartas 2×0 vs Devilzinha; Semifinal 2×0 vs Magrão; Final 2×1 vs WL. Vice: WL; Semis: Neo e Magrão.'
  },
  {
    selo: 'INDIVIDUAL · FINAL 2×1',
    canal: 'FR UNIVERSE TV · ANA ROSA',
    titulo: 'Ana Rosa · 1ª Edição: Guri 2 × 1 Mano Ayron',
    detalhe: 'Caminho de Guri: 1ª Fase 2×0 vs Lion; Quartas 2×0 vs Dehat; Semifinal 2×1 vs Salvador; Final 2×1 vs Mano Ayron. Vice: Mano Ayron; Semis: Salvador e Kroy.'
  },
  {
    selo: '45S/90S/45S · FINAL 0×2',
    canal: 'FR UNIVERSE TV · NORTE',
    titulo: 'Norte · 1ª Edição (45s / 90s / 45s): Dehat 0 × 2 Youngui',
    detalhe: 'Caminho de Youngui: 1ª Fase 2×1 vs Tonhão; Quartas 2×0 vs Levinsk; Semifinal 2×1 vs Prado; Final 2×0 vs Dehat. Vice: Dehat; Semis: Glaubin e Prado; Quartas: MCharles, Martin, Tavin e Levinsk.'
  },
  {
    selo: 'BDJ 16 MCS · FINAL 2×1',
    canal: 'FR UNIVERSE TV · CURITIBA/PR',
    titulo: 'Jamália (BDJ) · Inauguração: Poeta Gabriela 2 × 1 Joãozinho',
    detalhe: 'Poeta Gabriela (4V–0D, 8–4 em rounds): Oitavas 03 2×1 vs Lilica; Quartas 02 2×1 vs Levitico; Semifinal 01 2×1 vs Olhinho; Final 2×1 vs Joãozinho (3V–1D, 7–2 em rounds).'
  },
  {
    selo: 'LNF · SELETIVAS SP/RJ/DF',
    canal: 'FR UNIVERSE TV · LNF',
    titulo: 'Seletivas Estaduais da LNF: 20 Classificados e 12 Eliminados por UF',
    detalhe: 'SP: 16 diretos + WM, EZ, Apollo e Killua (2×1 vs Grafitteh). RJ: 16 diretos + Nene, Bigode, Nicolas e Pivete (2×1 vs Scooby). DF: 16 diretos + Pietra Candangolândia, Nanda Samambaia (2×0), Soraia Brazlândia (2×0) e Breno Sobradinho.'
  }
];

const data = {
  'batalhas.html': { title: 'CASAS DE <span>BATALHA.</span>', eyebrow: 'O circuito', desc: 'Clique em uma casa de batalha para ver as edições e acontecimentos registrados.' },
  'competicoes.html': { title: 'GRANDES <span>COMPETIÇÕES.</span>', eyebrow: 'A disputa pelo topo', desc: 'Clique em uma competição para ver as edições e acontecimentos registrados.' },
  'mcs.html': { title: 'OS DONOS DO <span>MICROFONE.</span>', eyebrow: 'Elenco oficial', desc: 'Perfis, estilos, conquistas e históricos dos participantes.' },
  'rankings.html': { title: 'A CORRIDA PELO <span>TOPO.</span>', eyebrow: 'Ranking geral · Semana 1', desc: 'Classificação geral oficial da 1ª semana de janeiro de 2027 (04/01 a 10/01/2027).' },
  'rimagram.html': { title: 'RIMAGRAM <span>· FEED.</span>', eyebrow: 'Rede oficial', desc: 'Acompanhe as postagens, resultados e destaques da temporada.' },
  'rimatube.html': { title: 'BATALHAS QUE <span>MARCAM.</span>', eyebrow: 'RimaTube', desc: 'Central de destaques e registros dos confrontos e seletivas.' },
  'jornal.html': { title: 'JORNAL DO <span>RAP.</span>', eyebrow: 'Cobertura semanal', desc: 'Edição impressa do FR Universe com campeões, resultados e seletivas da LNF.' },
  'calendario.html': { title: 'CADA DATA, UMA <span>HISTÓRIA.</span>', eyebrow: 'Calendário histórico', desc: 'Navegue pelos meses de 2027 e clique nos dias destacados para abrir a página correspondente.' }
};

const contentEl = document.getElementById('content');
const pageData = data[current];

function empty(title, description, emoji = '✦') {
  return `<div class="empty"><div class="big">${emoji}</div><h3>${title}</h3><p>${description}</p></div>`;
}

function ensureDetailDialog() {
  let dlg = document.getElementById('fu-detail-dialog');
  if (!dlg) {
    dlg = document.createElement('dialog');
    dlg.id = 'fu-detail-dialog';
    dlg.className = 'mc-dialog';
    dlg.innerHTML = `<button class="mc-close" id="fu-detail-close" type="button" aria-label="Fechar">✕</button><div id="fu-detail-content"></div>`;
    document.body.appendChild(dlg);
    document.getElementById('fu-detail-close').onclick = () => dlg.close();
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  }
  return dlg;
}

function openEdicoesModal(tituloTopo, nomeItem, subItem, listaEdicoes) {
  const dlg = ensureDetailDialog();
  if (!listaEdicoes || !listaEdicoes.length) {
    document.getElementById('fu-detail-content').innerHTML = `
      <div class="label">${tituloTopo}</div>
      <h2 style="font-size:40px;margin:10px 0 6px">${nomeItem}</h2>
      <p style="color:#f3c54c;font-size:12px;font-weight:800;text-transform:uppercase;margin:0 0 18px">${subItem}</p>${empty('NENHUMA EDIÇÃO REGISTRADA', 'Ainda não há edições ou resultados oficiais registrados neste tópico.', '★')}
    `;
    dlg.showModal();
    return;
  }
  const blocks = listaEdicoes.map((ed) => `
    <div style="background:#191b20;border:1px solid #2e3138;border-radius:6px;padding:16px;margin-top:14px">
      <div class="label">EDIÇÃO REGISTRADA</div>
      <h3 style="font-size:24px;margin:6px 0 10px">${ed.nome}</h3>
      <div class="mc-profile-meta" style="margin-bottom:14px">
        <div><small>CAMPEÃO / DESTAQUE</small><strong>${ed.campeao}</strong></div>
        <div><small>VICE / STATUS</small><strong>${ed.vice}</strong></div>
      </div>
      <div class="label" style="margin-bottom:6px">ACONTECIMENTOS DA EDIÇÃO</div>
      <ul style="margin:0;padding-left:18px;color:#d6d8de;font-size:12px;line-height:1.65">
        ${ed.acontecimentos.map((a) => `<li style="margin-bottom:6px">${a}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  document.getElementById('fu-detail-content').innerHTML = `
    <div class="label">${tituloTopo}</div>
    <h2 style="font-size:40px;margin:10px 0 6px">${nomeItem}</h2>
    <p style="color:#f3c54c;font-size:12px;font-weight:800;text-transform:uppercase;margin:0">${subItem}</p>${blocks}
  `;
  dlg.showModal();
}

function renderPage(page) {
  if (page === 'batalhas.html') {
    const cardsHtml = Object.entries(BATALHAS_EDICOES).map(([nome, info]) => `
      <button class="mc-card" type="button" data-open-batalha="${nome}" style="display:flex;flex-direction:column;width:100%">
        <span class="mc-art" style="width:100%"><span class="mc-initial">${info.icon}</span><span class="mc-art-note">FR UNIVERSE 2027</span></span>
        <span class="mc-info">
          <span class="mc-location">${info.sub}</span>
          <strong>${nome}</strong>
          <span class="mc-category">${info.resumo}</span>
          <span class="mc-view">VER EDIÇÕES ↗</span>
        </span>
      </button>
    `).join('');
    return `<section class="section"><div class="sectionhead"><div><h2>CIRCUITO DE BATALHAS</h2><p>Clique em uma batalha para abrir suas edições e acontecimentos</p></div></div><div class="grid">${cardsHtml}</div></section>`;
  }

  if (page === 'competicoes.html') {
    const cardsHtml = Object.entries(COMPETICOES_EDICOES).map(([nome, info]) => `
      <button class="mc-card" type="button" data-open-comp="${nome}" style="display:flex;flex-direction:column;width:100%">
        <span class="mc-art" style="width:100%"><span class="mc-initial">${info.icon}</span><span class="mc-art-note">FR UNIVERSE 2027</span></span>
        <span class="mc-info">
          <span class="mc-location">${info.sub}</span>
          <strong>${nome}</strong>
          <span class="mc-category">${info.resumo}</span>
          <span class="mc-view">VER EDIÇÕES ↗</span>
        </span>
      </button>
    `).join('');
    return `<section class="section"><div class="sectionhead"><div><h2>COMPETIÇÕES OFICIAIS</h2><p>Clique em uma competição para abrir suas edições e acontecimentos</p></div></div><div class="grid">${cardsHtml}</div></section>`;
  }

  if (page === 'mcs.html') {
    return `<section class="section"><div class="sectionhead"><div><h2>ELENCO OFICIAL</h2><p>Cadastro atualizado do FR Universe 2027 · Clique em qualquer MC para abrir a ficha</p></div></div><div class="filters mc-controls"><input class="search" id="mc-search" placeholder="Buscar MC por nome ou apelido..." aria-label="Buscar MC"><select class="mc-select" id="mc-state" aria-label="Filtrar por estado"><option value="">Todos os estados</option></select><select class="mc-select" id="mc-nature" aria-label="Filtrar por natureza"><option value="">Reais e fictícios</option><option value="real">Reais</option><option value="fictício">Fictícios</option></select></div><p class="mc-count" id="mc-count" aria-live="polite"></p><div class="mc-grid" id="mc-list"></div><div class="mc-more-wrap"><button class="btn secondary" id="mc-more" type="button" hidden>VER MAIS MCS</button></div></section><dialog id="mc-dialog" class="mc-dialog" aria-label="Ficha do MC"><button class="mc-close" id="mc-close" aria-label="Fechar ficha">✕</button><div id="mc-detail"></div></dialog>`;
  }

  if (page === 'rankings.html') {
    const top3 = WEEK1_RANKING.slice(0, 3).map((r) => `
      <article class="card cardpad" style="border-color:#66562b">
        <div class="kicker">POS. ${r.pos} ·${r.uf}</div>
        <h3 style="font-size:32px;margin:8px 0">${r.mc}</h3>
        <p style="color:#f3c54c;font-weight:800;font-size:15px;margin:0">${r.pts} PONTOS · ${r.titulos} TÍTULO · ${r.vitorias} VITÓRIAS</p>
      </article>
    `).join('');
    const rows = WEEK1_RANKING.map((r) => `<tr><td><strong>${r.pos}</strong></td><td><strong>${r.mc}</strong></td><td>${r.uf}</td><td>${r.titulos}</td><td>${r.vitorias}</td><td><strong style="color:#f3c54c">${r.pts}</strong></td></tr>`).join('');
    return `
      <section class="section">
        <div class="sectionhead"><div><h2>RANKING GERAL · SEMANA 1</h2><p>Classificação geral da 1ª semana de janeiro de 2027</p></div></div>
        <div class="grid" style="margin-bottom:26px">${top3}</div>
        <div class="tablewrap"><table><thead><tr><th>Posição</th><th>MC</th><th>UF</th><th>Títulos</th><th>Vitórias</th><th>Pontos</th></tr></thead><tbody>${rows}</tbody></table></div>
        <p class="fine">Regras: campeão +7, vice +5, semifinal +3, vitória 2×0 +1, derrota na primeira fase −1. Desempates: títulos, vitórias e empate mantido.</p>
      </section>
    `;
  }

  if (page === 'rimagram.html') {
    const storiesHtml = RIMAGRAM_POSTS.map((p) => `
      <a href="#post-${p.id}" style="display:flex;flex-direction:column;align-items:center;gap:6px;text-decoration:none;min-width:68px">
        <span style="width:54px;height:54px;border-radius:50%;padding:2px;background:linear-gradient(135deg,#f3c54c,#e07a1b,#a855f7);display:grid;place-items:center">
          <span style="width:100%;height:100%;border-radius:50%;background:#13151a;color:#f3c54c;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:16px;display:grid;place-items:center;border:2px solid #0b0c0e">${p.sigla}</span>
        </span>
        <span style="font-size:10px;color:#cfd2da;max-width:74px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.perfil}</span>
      </a>
    `).join('');

    const postsHtml = RIMAGRAM_POSTS.map((p) => `
      <article id="post-${p.id}" class="card" style="margin-bottom:24px;border-color:#262930;background:#0e1014;overflow:hidden">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;background:#12141a;border-bottom:1px solid #1e2128">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:36px;height:36px;border-radius:50%;padding:2px;background:linear-gradient(135deg,#f3c54c,#d97706);display:grid;place-items:center;flex-shrink:0">
              <div style="width:100%;height:100%;border-radius:50%;background:#181b22;color:#f3c54c;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:14px;display:grid;place-items:center">${p.sigla}</div>
            </div>
            <div>
              <div style="font-size:13px;font-weight:800;color:#f8f9fa;line-height:1.2">${p.perfil}</div>
              <div style="font-size:11px;color:#9ea3ae;line-height:1.25">${p.local}</div>
            </div>
          </div>
          <button type="button" data-follow-btn style="background:transparent;border:1px solid #383c47;color:#f3c54c;padding:5px 11px;border-radius:6px;font-size:11px;font-weight:800;cursor:pointer">Seguir</button>
        </div>

        <div style="aspect-ratio:4/3;padding:24px;display:flex;flex-direction:column;justify-content:space-between;background:radial-gradient(circle at 20% 20%,rgba(243,197,76,.14),transparent 50%),radial-gradient(circle at 85% 80%,rgba(217,119,6,.12),transparent 50%),#14171f;border-bottom:1px solid #1e2128">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
            <span style="font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#f3c54c;background:rgba(243,197,76,.12);border:1px solid rgba(243,197,76,.35);padding:4px 8px;border-radius:4px">${p.destaque}</span>
            <span style="font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#d6d9e0">${p.badge}</span>
          </div>
          <div>
            <div style="font-size:11px;color:#a3a8b4;text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px">${p.meta}</div>
            <h3 style="font-size:26px;line-height:1.08;margin:0;color:#ffffff">${p.nome}</h3>
          </div>
          <div style="font-size:11px;color:#8e94a2;display:flex;justify-content:space-between">
            <span>FR UNIVERSE · 2027</span>
            <span>● OFICIAL</span>
          </div>
        </div>

        <div style="padding:12px 16px 16px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
            <div style="display:flex;align-items:center;gap:14px">
