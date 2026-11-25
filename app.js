(function () {
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

  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  try {
    const header = `<header class="topbar"><div class="navwrap"><a class="brand" href="index.html">FR <em>UNIVERSE</em><span style="color:#777;font-size:10px;vertical-align:top;margin-left:5px">2027</span></a><nav class="nav" aria-label="Navegação principal">${pages.map(([url, name]) => `<a href="${url}" class="${current === url.toLowerCase() ? 'active' : ''}">${name}</a>`).join('')}</nav><span class="live">● TEMPORADA 2027</span></div></header>`;
    const footer = `<footer class="footer"><div class="container"><span><strong>FR UNIVERSE</strong> © 2027 · Portal de universo fictício de batalhas de rima</span><span>Resultados e estatísticas somente após registro oficial</span></div></footer>`;

    const headerEl = document.getElementById('header');
    const footerEl = document.getElementById('footer');
    if (headerEl) headerEl.innerHTML = header;
    if (footerEl) footerEl.innerHTML = footer;
  } catch (e) {
    console.error('Erro ao montar header/footer:', e);
  }

  if (current === 'index.html') {
    window.addEventListener('DOMContentLoaded', () => {
      try {
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
      } catch (e) {
        console.error('Erro ao atualizar contadores:', e);
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
    'LNF': {
      sub: 'Liga nacional · 60 classificados (SP · RJ · DF)',
      icon: '🏆',
      resumo: '20 classificados por estado · Organização por UF (SP, RJ e DF)',
      edicoes: [
        {
          nome: 'São Paulo (SP) — 20 Classificados',
          campeao: '16 Diretos + 4 Repescagem',
          vice: '12 Eliminados',
          acontecimentos: [
            'Classificados Diretos (16): Mano Ayron, Kroy, Guri, Brennuz, Kairós, Prado, KLJR, Levinsk, Bask, Ajota, Dehat, Luh do Click, Arielzinha, Bonfim, Glaubin e Tubarão.',
            'Classificados via Repescagem (4): WM, EZ, Apollo e Killua.',
            'Eliminados na Repescagem — 1ª Fase (8): Blackoutt, Sol na Voz, Baueb, Black Panther, Coral, Fortes, H7 e Lecroy.',
            'Eliminados na Repescagem — Finais (4): Derik, Lili, Lil Vi e Grafitteh (1×2 vs Killua).'
          ]
        },
        {
          nome: 'Rio de Janeiro (RJ) — 20 Classificados',
          campeao: '16 Diretos + 4 Repescagem',
          vice: '12 Eliminados',
          acontecimentos: [
            'Classificados Diretos (16): Davi da 7, Nick Mory, MT, Filart, Kisol, Celia, WL, Chefona, João Vega, Pyetrin, Rico Mesquita, Mano na Area, Malagueta, Torvi, Thorment e Lujia.',
            'Classificados via Repescagem (4): Nene, Bigode, Nicolas e Pivete.',
            'Eliminados na Repescagem — 1ª Fase (8): Schuler, Nart, Devilzinha, Julia, Peke, MC RJ #32, Bom na Rima e Karin.',
            'Eliminados na Repescagem — Finais (4): Ge, Rough, Saloic e Scooby.',
            'Destaques: Rico Mesquita avançou direto (2×1 vs Ge); Pivete virou na repescagem (2×1 vs Scooby) após estrear com 0×2 para Nick Mory.'
          ]
        },
        {
          nome: 'Distrito Federal (DF) — 20 Classificados',
          campeao: '16 Diretos + 4 Repescagem',
          vice: '12 Eliminados',
          acontecimentos: [
            'Classificados Diretos (16): Foca Paranoá, Tito, Luna Guará, Cali Riacho, Kira Cruzeiro Velho, Zeca Gama, Mel Lago Sul, Mirela Recanto, Ianzin, Teca Estrutural, Roni São Sebastião, Léo Núcleo Bandeirante, Tinho Octogonal, Brisa Planaltina, Guga Águas Claras e Rato da Asa.',
            'Classificados via Repescagem (4): Pietra Candangolândia, Nanda Samambaia, Soraia Brazlândia e Breno Sobradinho.',
            'Eliminados na Repescagem — 1ª Fase (8): MDG, Vini Lago Norte, Kael DF, Duda Ceilândia, Juju Santa Maria, Gomes, Digo Varjão e Vektor Taguatinga.',
            'Eliminados na Repescagem — Finais (4): Tavo Cruzeiro, Nati Jardim Botânico, Beto Vicente Pires e Bia Park Way.',
            'Destaques: Tito (2×1 vs Juju Santa Maria) e Ianzin (2×0 vs Duda Ceilândia) garantiram vaga direta; Nanda Samambaia e Soraia Brazlândia venceram suas finais de repescagem por 2×0.'
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
    '2027-1-9': { label: 'LNF Seletivas', href: 'competicoes.html?abrir=LNF', title: '09/01/2027 — LNF · Seletivas (SP, RJ e DF)' },
    '2027-1-10': { label: 'Jamália #1', href: 'batalhas.html?abrir=JAMALIA', title: '10/01/2027 — Batalha da Jamália · Inauguração' }
  };

  const RIMAGRAM_POSTS = [
    {
      id: 'aldeia-1',
      perfil: '@aldeia.sp',
      sigla: 'AL',
      nome: 'Batalha da Aldeia · 1ª Edição (Edição Lendas)',
      meta: 'São Paulo · Segunda-feira · Batalha de Trios',
      local: 'São Paulo, SP',
      destaque: 'TRIOS · FINAL 0×3',
      curtidas: 148,
      badge: 'INVICTOS 3×0',
      texto: 'Neo, Jotapê e Kant levam o título invicto por 3×0 na Grande Final contra Big Mike, Ike e Valle. Semifinais: Tubarão, Kroy e Bask | Apollo, Salvador da RIMA e Noventa.',
      tags: '#BatalhaDaAldeia #EdicaoLendas #FreestyleSP #Trios',
      comentarioDestaque: 'fr_oficial: Trio entrosado do início ao fim na abertura da temporada.'
    },
    {
      id: 'coliseu-1',
      perfil: '@coliseu.oficial',
      sigla: 'CL',
      nome: 'Batalha do Coliseu · 1ª Edição',
      meta: 'Quarta-feira · Chave Individual',
      local: 'Arena Coliseu',
      destaque: 'INDIVIDUAL · FINAL 1×2',
      curtidas: 112,
      badge: 'CAMPEÃO 2×1',
      texto: 'Jotapê é campeão vencendo WL por 2×1 na final! Semifinalistas: Neo e Magrão. Quartas: Noventa, Perigx, Devilzinha e Torvi.',
      tags: '#BatalhaDoColiseu #Freestyle #RimaLivre',
      comentarioDestaque: 'jornaldorap: Chave pesada até a decisão equilibrada por 2×1.'
    },
    {
      id: 'anarosa-1',
      perfil: '@anarosa.batalha',
      sigla: 'AR',
      nome: 'Batalha do Ana Rosa · 1ª Edição',
      meta: 'Quinta-feira · Chave Individual',
      local: 'Ana Rosa, SP',
      destaque: 'INDIVIDUAL · FINAL 2×1',
      curtidas: 97,
      badge: 'CAMPEÃO 2×1',
      texto: 'Guri conquista o título superando Mano Ayron por 2×1 na final! Semifinalistas: Salvador e Kroy. Quartas: Fortes, Dehat, Ike e Magrão.',
      tags: '#AnaRosa #BatalhaDeRima #Flow #Punchline',
      comentarioDestaque: 'fr_oficial: Guri firme nos rounds decisivos contra Mano Ayron.'
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
      tags: '#BatalhaDaNorte #45s90s45s #Freestyle',
      comentarioDestaque: 'fr_oficial: Domínio no tempo longo de 90s e fechamento limpo.'
    },
    {
      id: 'lnf-seletivas',
      perfil: '@lnf.oficial',
      sigla: 'LN',
      nome: 'Seletivas da
