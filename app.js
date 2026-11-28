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

  function cleanStrayObjectText() {
    try {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const toRemove = [];
      let n;
      while ((n = walker.nextNode())) {
        if ((n.nodeValue || '').includes('[object HTMLDivElement]')) {
          n.nodeValue = n.nodeValue.replace(/\[object HTMLDivElement\]/g, '').trim();
          if (!n.nodeValue) toRemove.push(n);
        }
      }
      toRemove.forEach((node) => {
        if (node.parentNode) node.parentNode.removeChild(node);
      });
    } catch (e) {
      console.error('Erro ao limpar texto solto:', e);
    }
  }

  window.addEventListener('DOMContentLoaded', cleanStrayObjectText);

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
        cleanStrayObjectText();
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
      nome: 'Seletivas da LNF · SP, RJ e DF',
      meta: '20 Classificados por Estado · 60 no Total',
      local: 'SP · RJ · DF',
      destaque: 'LNF · 60 CLASSIFICADOS',
      curtidas: 186,
      badge: '3 ESTADOS',
      texto: 'SP: 16 diretos + WM, EZ, Apollo e Killua (2×1 vs Grafitteh). RJ: 16 diretos + Nene, Bigode, Nicolas e Pivete (2×1 vs Scooby). DF: 16 diretos + Pietra Candangolândia, Nanda Samambaia (2×0), Soraia Brazlândia (2×0) e Breno Sobradinho.',
      tags: '#LNF #SeletivasLNF #SP #RJ #DF',
      comentarioDestaque: 'lnf.oficial: Repescagem pegou fogo com viradas e duelos diretos por vaga.'
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
      tags: '#Jamalia #BDJ #Curitiba #FreestylePR',
      comentarioDestaque: 'fr_oficial: Estreia histórica em Curitiba com quatro vitórias seguidas por 2×1.'
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
      titulo: 'Seletivas da LNF: 20 Classificados e 12 Eliminados por UF',
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

  function backToHomeButton() {
    return `<div style="margin-bottom:18px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap"><a href="index.html" class="btn secondary" style="display:inline-flex;align-items:center;gap:8px;border-color:#66562b;color:#f3c54c">← VOLTAR</a></div>`;
  }

  function ensureDetailDialog() {
    let dlg = document.getElementById('fu-detail-dialog');
    if (!dlg) {
      dlg = document.createElement('dialog');
      dlg.id = 'fu-detail-dialog';
      dlg.className = 'mc-dialog';
      dlg.innerHTML = `<button class="mc-close" id="fu-detail-close" type="button" aria-label="Fechar">✕</button><div id="fu-detail-content"></div>`;
      document.body.appendChild(dlg);
      const closeBtn = document.getElementById('fu-detail-close');
      if (closeBtn) closeBtn.onclick = () => dlg.close();
      dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    }
    return dlg;
  }

  function openEdicoesModal(tituloTopo, nomeItem, subItem, listaEdicoes) {
    try {
      const dlg = ensureDetailDialog();
      const box = document.getElementById('fu-detail-content');
      if (!box) return;

      if (!listaEdicoes || !listaEdicoes.length) {
        box.innerHTML = `
          <div class="label">${tituloTopo}</div>
          <h2 style="font-size:40px;margin:10px 0 6px">${nomeItem}</h2>
          <p style="color:#f3c54c;font-size:12px;font-weight:800;text-transform:uppercase;margin:0 0 18px">${subItem}</p>
          ${empty('NENHUMA EDIÇÃO REGISTRADA', 'Ainda não há edições ou resultados oficiais registrados neste tópico.', '★')}
        `;
      } else {
        const blocks = listaEdicoes.map((ed) => `
          <div style="background:#17191f;border:1px solid #2d313b;border-radius:8px;padding:18px;margin-top:14px">
            <div class="label">BLOCO REGISTRADO</div>
            <h3 style="font-size:23px;margin:6px 0 12px;color:#fff">${ed.nome}</h3>
            <div class="mc-profile-meta" style="margin-bottom:14px">
              <div><small>DESTAQUE / VAGAS</small><strong>${ed.campeao}</strong></div>
              <div><small>STATUS / ELIMINADOS</small><strong>${ed.vice}</strong></div>
            </div>
            <div class="label" style="margin-bottom:8px">DETALHAMENTO</div>
            <ul style="margin:0;padding-left:18px;color:#d6d8de;font-size:12.5px;line-height:1.7">
              ${ed.acontecimentos.map((a) => `<li style="margin-bottom:6px">${a}</li>`).join('')}
            </ul>
          </div>
        `).join('');

        box.innerHTML = `
          <div class="label">${tituloTopo}</div>
          <h2 style="font-size:40px;margin:10px 0 6px">${nomeItem}</h2>
          <p style="color:#f3c54c;font-size:12px;font-weight:800;text-transform:uppercase;margin:0">${subItem}</p>
          ${blocks}
        `;
      }

      if (typeof dlg.showModal === 'function') {
        if (!dlg.open) dlg.showModal();
      } else {
        dlg.setAttribute('open', '');
      }
    } catch (e) {
      console.error('Erro ao abrir modal:', e);
    }
  }

  function renderPage(page) {
    const backBtn = backToHomeButton();

    if (page === 'batalhas.html') {
      const cardsHtml = Object.entries(BATALHAS_EDICOES).map(([nome, info]) => `
        <button class="mc-card" type="button" data-open-batalha="${nome}" style="display:flex;flex-direction:column;width:100%">
          <span class="mc-info">
            <span class="mc-location">${info.icon} ${info.sub}</span>
            <strong>${nome}</strong>
            <span class="mc-category">${info.resumo}</span>
            <span class="mc-view">VER EDIÇÕES ↗</span>
          </span>
        </button>
      `).join('');
      return `<section class="section">${backBtn}<div class="sectionhead"><div><h2>CIRCUITO DE BATALHAS</h2><p>Clique em uma batalha para abrir suas edições e acontecimentos</p></div></div><div class="grid">${cardsHtml}</div></section>`;
    }

    if (page === 'competicoes.html') {
      const cardsHtml = Object.entries(COMPETICOES_EDICOES).map(([nome, info]) => `
        <button class="mc-card" type="button" data-open-comp="${nome}" style="display:flex;flex-direction:column;width:100%">
          <span class="mc-info">
            <span class="mc-location">${info.icon} ${info.sub}</span>
            <strong>${nome}</strong>
            <span class="mc-category">${info.resumo}</span>
            <span class="mc-view">VER DETALHES ↗</span>
          </span>
        </button>
      `).join('');
      return `<section class="section">${backBtn}<div class="sectionhead"><div><h2>COMPETIÇÕES OFICIAIS</h2><p>Clique em uma competição para abrir os registros organizados</p></div></div><div class="grid">${cardsHtml}</div></section>`;
    }

    if (page === 'mcs.html') {
      return `<section class="section">${backBtn}<div class="sectionhead"><div><h2>ELENCO OFICIAL</h2><p>Cadastro atualizado do FR Universe 2027 · Clique em qualquer MC para abrir a ficha</p></div></div><div class="filters mc-controls"><input class="search" id="mc-search" placeholder="Buscar MC por nome ou apelido..." aria-label="Buscar MC"><select class="mc-select" id="mc-state" aria-label="Filtrar por estado"><option value="">Todos os estados</option></select><select class="mc-select" id="mc-nature" aria-label="Filtrar por natureza"><option value="">Reais e fictícios</option><option value="real">Reais</option><option value="fictício">Fictícios</option></select></div><p class="mc-count" id="mc-count" aria-live="polite"></p><div class="mc-grid" id="mc-list"></div><div class="mc-more-wrap"><button class="btn secondary" id="mc-more" type="button" hidden>VER MAIS MCS</button></div></section><dialog id="mc-dialog" class="mc-dialog" aria-label="Ficha do MC"><button class="mc-close" id="mc-close" type="button" aria-label="Fechar ficha">✕</button><div id="mc-detail"></div></dialog>`;
    }

    if (page === 'rankings.html') {
      const top3 = WEEK1_RANKING.slice(0, 3).map((r) => `
        <article class="card cardpad" style="border-color:#66562b">
          <div class="kicker">POS. ${r.pos} · ${r.uf}</div>
          <h3 style="font-size:32px;margin:8px 0">${r.mc}</h3>
          <p style="color:#f3c54c;font-weight:800;font-size:15px;margin:0">${r.pts} PONTOS · ${r.titulos} TÍTULO · ${r.vitorias} VITÓRIAS</p>
        </article>
      `).join('');
      const rows = WEEK1_RANKING.map((r) => `<tr><td><strong>${r.pos}</strong></td><td><strong>${r.mc}</strong></td><td>${r.uf}</td><td>${r.titulos}</td><td>${r.vitorias}</td><td><strong style="color:#f3c54c">${r.pts}</strong></td></tr>`).join('');
      return `
        <section class="section">
          ${backBtn}
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
          <span style="width:52px;height:52px;border-radius:50%;padding:2px;background:linear-gradient(135deg,#f3c54c,#e07a1b,#a855f7);display:grid;place-items:center">
            <span style="width:100%;height:100%;border-radius:50%;background:#13151a;color:#f3c54c;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:15px;display:grid;place-items:center;border:2px solid #0b0c0e">${p.sigla}</span>
          </span>
          <span style="font-size:10px;color:#cfd2da;max-width:74px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.perfil}</span>
        </a>
      `).join('');

      const postsHtml = RIMAGRAM_POSTS.map((p) => `
        <article id="post-${p.id}" class="card" style="margin-bottom:20px;border-color:#262930;background:#0e1014;overflow:hidden">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;background:#12141a;border-bottom:1px solid #1e2128">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:36px;height:36px;border-radius:50%;padding:2px;background:linear-gradient(135deg,#f3c54c,#d97706);display:grid;place-items:center;flex-shrink:0">
                <div style="width:100%;height:100%;border-radius:50%;background:#181b22;color:#f3c54c;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:14px;display:grid;place-items:center">${p.sigla}</div>
              </div>
              <div>
                <div style="font-size:13px;font-weight:800;color:#f8f9fa;line-height:1.2">${p.perfil}</div>
                <div style="font-size:11px;color:#9ea3ae;line-height:1.25">${p.local} · ${p.meta}</div>
              </div>
            </div>
            <button type="button" data-follow-btn style="background:transparent;border:1px solid #383c47;color:#f3c54c;padding:5px 11px;border-radius:6px;font-size:11px;font-weight:800;cursor:pointer">Seguir</button>
          </div>

          <div style="padding:18px 20px;background:radial-gradient(circle at 15% 20%,rgba(243,197,76,.14),transparent 50%),radial-gradient(circle at 90% 80%,rgba(217,119,6,.10),transparent 50%),#14171f;border-bottom:1px solid #1e2128">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px">
              <span style="font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#f3c54c;background:rgba(243,197,76,.12);border:1px solid rgba(243,197,76,.35);padding:4px 8px;border-radius:4px">${p.destaque}</span>
              <span style="font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#111;background:#f3c54c;padding:4px 8px;border-radius:4px">${p.badge}</span>
            </div>
            <h3 style="font-size:24px;line-height:1.12;margin:0 0 8px;color:#ffffff">${p.nome}</h3>
            <p style="font-size:13.5px;line-height:1.6;color:#e4e7ee;margin:0 0 10px">${p.texto}</p>
            <div style="font-size:11.5px;color:#f3c54c;font-weight:700">${p.tags}</div>
          </div>

          <div style="padding:11px 16px 14px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
              <div style="display:flex;align-items:center;gap:14px">
                <button type="button" data-like-btn data-likes="${p.curtidas}" style="background:none;border:none;color:#f8f9fa;font-size:12px;font-weight:700;cursor:pointer;padding:0;display:flex;align-items:center;gap:5px">
                  <span class="like-icon">♡</span> <span class="like-count">${p.curtidas}</span>
                </button>
                <button type="button" data-comment-toggle style="background:none;border:none;color:#cfd3dc;font-size:12px;font-weight:700;cursor:pointer;padding:0">💬 Comentar</button>
              </div>
              <button type="button" data-save-btn style="background:none;border:none;color:#cfd3dc;font-size:12px;font-weight:700;cursor:pointer;padding:0">🔖 Salvar</button>
            </div>
            <div style="font-size:12px;color:#9ea3ae;margin-bottom:4px">${p.comentarioDestaque}</div>
            <div data-comment-box hidden style="margin-top:10px;padding-top:10px;border-top:1px solid #1e2128;display:flex;gap:8px">
              <input type="text" placeholder="Escreva um comentário..." style="flex:1;background:#181b22;border:1px solid #2e3340;color:#fff;border-radius:6px;padding:7px 10px;font-size:12px">
              <button type="button" data-comment-send style="background:#f3c54c;color:#111;border:none;border-radius:6px;padding:7px 12px;font-size:11px;font-weight:800;cursor:pointer">Publicar</button>
            </div>
            <div data-comments-list style="display:flex;flex-direction:column;gap:4px;font-size:12px;color:#cfd3dc"></div>
          </div>
        </article>
      `).join('');

      const topRankHtml = WEEK1_RANKING.slice(0, 5).map((r, i) => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid #1e2128;font-size:12.5px">
          <div><strong style="color:#f3c54c;margin-right:6px">#${i + 1}</strong> <strong>${r.mc}</strong> <span style="color:#8e94a2;font-size:11px">${r.uf}</span></div>
          <strong style="color:#fff">${r.pts} pts</strong>
        </div>
      `).join('');

      return `
        <section class="section">
          ${backBtn}
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;align-items:start">
            <div style="grid-column:span 2;min-width:0">
              <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#12141a;border:1px solid #262930;border-radius:8px;margin-bottom:12px">
                <strong style="font-family:'Barlow Condensed',sans-serif;font-size:22px;letter-spacing:.06em;color:#f3c54c">RIMAGRAM</strong>
                <span style="font-size:11px;color:#9ea3ae;font-weight:700">${RIMAGRAM_POSTS.length} PUBLICAÇÕES · SEMANA 1</span>
              </div>
              <div style="display:flex;gap:12px;overflow-x:auto;padding:12px 14px;background:#0e1014;border:1px solid #262930;border-radius:8px;margin-bottom:18px">
                ${storiesHtml}
              </div>
              ${postsHtml}
            </div>

            <aside style="display:flex;flex-direction:column;gap:16px">
              <div class="card cardpad" style="border-color:#262930;background:#0e1014">
                <div class="label">TOP PONTUADORES · SEMANA 1</div>
                <h3 style="font-size:22px;margin:4px 0 10px">LÍDERES DA RODADA</h3>
                ${topRankHtml}
                <a href="rankings.html" style="display:inline-block;margin-top:12px;font-size:12px;font-weight:800;color:#f3c54c">Ver ranking completo ↗</a>
              </div>

              <div class="card cardpad" style="border-color:#262930;background:#0e1014">
                <div class="label">LIGA NACIONAL</div>
                <h3 style="font-size:22px;margin:4px 0 8px">LNF · 60 CLASSIFICADOS</h3>
                <p style="font-size:12.5px;color:#c5c7ce;line-height:1.55;margin:0 0 12px">20 classificados em SP, 20 no RJ e 20 no DF após diretos e repescagem.</p>
                <a href="competicoes.html?abrir=LNF" style="display:inline-block;font-size:12px;font-weight:800;color:#f3c54c">Abrir detalhes da LNF ↗</a>
              </div>

              <div class="card cardpad" style="border-color:#262930;background:#0e1014">
                <div class="label">CENTRAL DE CONFRONTOS</div>
                <h3 style="font-size:22px;margin:4px 0 8px">RIMATUBE & JORNAL</h3>
                <p style="font-size:12.5px;color:#c5c7ce;line-height:1.55;margin:0 0 12px">Confira o chaveamento completo das finais e a cobertura semanal.</p>
                <div style="display:flex;gap:14px;font-size:12px;font-weight:800">
                  <a href="rimatube.html" style="color:#f3c54c">RimaTube ↗</a>
                  <a href="jornal.html" style="color:#f3c54c">Jornal do Rap ↗</a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      `;
    }

    if (page === 'rimatube.html') {
      const vidsHtml = RIMATUBE_ITEMS.map((v) => `
        <article class="card" style="display:flex;flex-direction:column;border-color:#2e3138">
          <div style="position:relative;aspect-ratio:16/9;background:radial-gradient(circle at 65% 35%,#4a3916,#191a1f 55%,#0c0d10 100%);display:flex;align-items:center;justify-content:center;border-bottom:1px solid #27292f">
            <div style="width:58px;height:42px;border-radius:10px;background:#f3c54c;color:#111;display:grid;place-items:center;font-size:18px;font-weight:900;box-shadow:0 8px 24px rgba(0,0,0,.55)">▶</div>
            <span style="position:absolute;top:12px;left:12px;background:rgba(8,9,11,.85);border:1px solid #66562b;color:#f3c54c;padding:4px 8px;border-radius:3px;font-size:10px;font-weight:800;letter-spacing:.08em">${v.canal}</span>
            <span style="position:absolute;bottom:12px;right:12px;background:rgba(8,9,11,.9);color:#f8f8f8;padding:4px 8px;border-radius:3px;font-size:10px;font-weight:800;letter-spacing:.06em">${v.selo}</span>
          </div>
          <div class="cardpad" style="flex:1">
            <h3 style="font-size:23px;margin:0 0 10px;line-height:1.05">${v.titulo}</h3>
            <p style="color:#b8bac2;font-size:12px;line-height:1.65;margin:0">${v.detalhe}</p>
          </div>
        </article>
      `).join('');
      return `<section class="section">${backBtn}<div class="sectionhead"><div><h2>RIMATUBE · CENTRAL DE CONFRONTOS</h2><p>Registros textuais dos confrontos e seletivas</p></div></div><div class="grid">${vidsHtml}</div></section>`;
    }

    if (page === 'jornal.html') {
      return `
        <section class="section">
          ${backBtn}
          <div class="card" style="border-color:#66562b;background:#121317;margin-bottom:20px">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px;padding:14px 24px;border-bottom:1px solid #2b2d34;background:#18191e">
              <span style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:20px;letter-spacing:.08em;color:#f3c54c;text-transform:uppercase">JORNAL DO RAP · EDIÇÃO SEMANAL</span>
              <span style="font-size:11px;font-weight:800;color:#aeb0b6;letter-spacing:.1em;text-transform:uppercase">FR UNIVERSE 2027 · COBERTURA OFICIAL</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">
              <div style="padding:26px;border-right:1px solid #25272e">
                <div class="label">MANCHETE PRINCIPAL</div>
                <h2 style="font-size:36px;line-height:1.02;margin:12px 0 14px">NEO, JOTAPÊ E KANT LEVAM A ALDEIA; JOTAPÊ VENCE O COLISEU; GURI LEVA O ANA ROSA; YOUNGUI VENCE A NORTE; POETA GABRIELA ESTREIA COM TÍTULO NA JAMÁLIA E LNF DEFINE 60 CLASSIFICADOS</h2>
                <p style="color:#c5c7ce;font-size:13px;line-height:1.7;margin:0">Cobertura completa das casas de batalha e das seletivas da LNF (SP, RJ e DF) registradas na rodada.</p>
              </div>
              <div style="padding:26px;display:flex;flex-direction:column;gap:14px">
                <div class="label">COLUNA DE RESULTADOS</div>
                <div>
                  <strong style="color:#f3c54c;font-size:12px;text-transform:uppercase">Aldeia · 1ª Edição (Edição Lendas — Trios)</strong>
                  <p style="color:#d4d6dc;font-size:12px;line-height:1.6;margin:4px 0 0">Campeões: Neo, Jotapê e Kant (3×0 na final) · Vice: Big Mike, Ike e Valle.</p>
                </div>
                <hr style="border:0;border-top:1px solid #262830;margin:0">
                <div>
                  <strong style="color:#f3c54c;font-size:12px;text-transform:uppercase">Coliseu, Ana Rosa e Norte</strong>
                  <p style="color:#d4d6dc;font-size:12px;line-height:1.6;margin:4px 0 0">Coliseu: Jotapê campeão (2×1 vs WL) · Ana Rosa: Guri campeão (2×1 vs Mano Ayron) · Norte (45s / 90s / 45s): Youngui campeão (2×0 vs Dehat).</p>
                </div>
                <hr style="border:0;border-top:1px solid #262830;margin:0">
                <div>
                  <strong style="color:#f3c54c;font-size:12px;text-transform:uppercase">Jamália (BDJ) · Inauguração (Curitiba/PR)</strong>
                  <p style="color:#d4d6dc;font-size:12px;line-height:1.6;margin:4px 0 0">Campeã: Poeta Gabriela (4V–0D, 8–4 em rounds; quatro vitórias por 2×1, final 2×1 vs Joãozinho).</p>
                </div>
                <hr style="border:0;border-top:1px solid #262830;margin:0">
                <div>
                  <strong style="color:#f3c54c;font-size:12px;text-transform:uppercase">LNF · Seletivas (SP, RJ e DF)</strong>
                  <p style="color:#d4d6dc;font-size:12px;line-height:1.6;margin:4px 0 0">20 classificados e 12 eliminados por estado (16 diretos + 4 repescagem em SP, RJ e DF).</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (page === 'calendario.html') {
      return `<section class="section">${backBtn}<div class="sectionhead"><div><h2>HISTÓRICO DE 2027</h2><p>Somente eventos concluídos e oficialmente registrados</p></div></div><div class="card cardpad" style="max-width:850px;margin:auto"><div class="calendarbar"><button id="prevmonth" aria-label="Mês anterior">❮</button><h2 id="monthname">JANEIRO 2027</h2><button id="nextmonth" aria-label="Próximo mês">❯</button></div><div class="week" id="calendar"></div><p class="fine" style="margin-top:20px">Os símbolos das casas e competições aparecem nos dias de eventos concluídos. Ao clicar, abrirão a página oficial correspondente.</p></div></section>`;
    }

    return '';
  }

  if (pageData && contentEl) {
    document.title = pageData.title.replace(/<[^>]+>/g, '') + ' | FR Universe 2027';
    contentEl.innerHTML = `<section class="pagehero"><div class="container"><div class="eyebrow">${pageData.eyebrow}</div><h1>${pageData.title}</h1><p>${pageData.desc}</p><span class="status">Registros publicados · 2027</span></div></section><main class="container">${renderPage(current)}</main>`;
  }

  if (current === 'rimagram.html' && contentEl) {
    contentEl.addEventListener('click', (e) => {
      const likeBtn = e.target.closest('[data-like-btn]');
      if (likeBtn) {
        const liked = likeBtn.dataset.liked === '1';
        const base = Number(likeBtn.dataset.likes || '0');
        likeBtn.dataset.liked = liked ? '0' : '1';
        likeBtn.querySelector('.like-icon').textContent = liked ? '♡' : '♥';
        likeBtn.querySelector('.like-icon').style.color = liked ? '#f8f9fa' : '#f3c54c';
        likeBtn.querySelector('.like-count').textContent = String(base + (liked ? 0 : 1));
        return;
      }

      const followBtn = e.target.closest('[data-follow-btn]');
      if (followBtn) {
        const following = followBtn.dataset.following === '1';
        followBtn.dataset.following = following ? '0' : '1';
        followBtn.textContent = following ? 'Seguir' : 'Seguindo';
        followBtn.style.background = following ? 'transparent' : '#f3c54c';
        followBtn.style.color = following ? '#f3c54c' : '#111';
        return;
      }

      const saveBtn = e.target.closest('[data-save-btn]');
      if (saveBtn) {
        const saved = saveBtn.dataset.saved === '1';
        saveBtn.dataset.saved = saved ? '0' : '1';
        saveBtn.textContent = saved ? '🔖 Salvar' : '🔖 Salvo';
        saveBtn.style.color = saved ? '#cfd3dc' : '#f3c54c';
        return;
      }

      const cToggle = e.target.closest('[data-comment-toggle]');
      if (cToggle) {
        const art = cToggle.closest('article');
        const box = art && art.querySelector('[data-comment-box]');
        if (box) {
          box.hidden = !box.hidden;
          if (!box.hidden) {
            const inp = box.querySelector('input');
            if (inp) inp.focus();
          }
        }
        return;
      }

      const cSend = e.target.closest('[data-comment-send]');
      if (cSend) {
        const art = cSend.closest('article');
        const inp = art && art.querySelector('[data-comment-box] input');
        const list = art && art.querySelector('[data-comments-list]');
        const val = (inp && inp.value || '').trim();
        if (val && list) {
          const line = document.createElement('div');
          line.innerHTML = `<strong style="color:#f3c54c">você:</strong> ${val.replace(/</g, '&lt;')}`;
          list.appendChild(line);
          inp.value = '';
        }
      }
    });
  }

  if (current === 'batalhas.html' && contentEl) {
    contentEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-open-batalha]');
      if (!btn) return;
      const chave = btn.dataset.openBatalha;
      const item = BATALHAS_EDICOES[chave];
      if (item) openEdicoesModal('BATALHA · EDIÇÕES E ACONTECIMENTOS', chave, item.sub, item.edicoes);
    });
    const abrir = new URLSearchParams(location.search).get('abrir');
    if (abrir && BATALHAS_EDICOES[abrir]) {
      const item = BATALHAS_EDICOES[abrir];
      openEdicoesModal('BATALHA · EDIÇÕES E ACONTECIMENTOS', abrir, item.sub, item.edicoes);
    }
  }

  if (current === 'competicoes.html' && contentEl) {
    contentEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-open-comp]');
      if (!btn) return;
      const chave = btn.dataset.openComp;
      const item = COMPETICOES_EDICOES[chave];
      if (item) openEdicoesModal('COMPETIÇÃO · REGISTROS OFICIAIS', chave, item.sub, item.edicoes);
    });
    const abrir = new URLSearchParams(location.search).get('abrir');
    if (abrir && COMPETICOES_EDICOES[abrir]) {
      const item = COMPETICOES_EDICOES[abrir];
      openEdicoesModal('COMPETIÇÃO · REGISTROS OFICIAIS', abrir, item.sub, item.edicoes);
    }
  }

  if (current === 'calendario.html') {
    let m = 0;
    const months = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];
    function draw() {
      const monthEl = document.getElementById('monthname');
      const calEl = document.getElementById('calendar');
      if (!monthEl || !calEl) return;
      monthEl.textContent = months[m] + ' 2027';
      const first = new Date(2027, m, 1).getDay();
      const count = new Date(2027, m + 1, 0).getDate();
      const daysHtml = Array.from({ length: count }, (_, i) => {
        const dayNum = i + 1;
        const ev = WEEK1_CALENDAR_EVENTS[`2027-${m + 1}-${dayNum}`];
        if (ev) {
          return `<a class="day" href="${ev.href}" title="${ev.title}" style="display:flex;flex-direction:column;justify-content:space-between;border-color:#f3c54c;background:#1d1910"><span>${dayNum}</span><small style="color:#f3c54c;font-weight:800;font-size:10px;line-height:1.15">${ev.label}</small></a>`;
        }
        return `<div class="day">${dayNum}</div>`;
      }).join('');
      calEl.innerHTML = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((d) => `<div class="weekday">${d}</div>`).join('') + Array.from({ length: first }, () => '<div class="day outside"></div>').join('') + daysHtml;
      const prevBtn = document.getElementById('prevmonth');
      const nextBtn = document.getElementById('nextmonth');
      if (prevBtn) prevBtn.disabled = m === 0;
      if (nextBtn) nextBtn.disabled = m === 11;
    }
    const prevBtn = document.getElementById('prevmonth');
    const nextBtn = document.getElementById('nextmonth');
    if (prevBtn) prevBtn.onclick = () => { if (m > 0) { m--; draw(); } };
    if (nextBtn) nextBtn.onclick = () => { if (m < 11) { m++; draw(); } };
    draw();
  }

  if (current === 'mcs.html') {
    const el = document.getElementById('mc-list');
    const search = document.getElementById('mc-search');
    const state = document.getElementById('mc-state');
    const nature = document.getElementById('mc-nature');
    const more = document.getElementById('mc-more');
    const count = document.getElementById('mc-count');
    const dialog = document.getElementById('mc-dialog');
    const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const normalize = (s) => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    let roster = [], shown = 24, filtered = [];

    function draw() {
      if (!el) return;
      const q = normalize((search && search.value || '').trim());
      const stVal = state ? state.value : '';
      const natVal = nature ? nature.value : '';
      filtered = roster.filter((m) =>
        (!stVal || (stVal === 'pendente' ? !m.uf : m.uf === stVal)) &&
        (!natVal || m.natureza === natVal) &&
        (!q || normalize([m.nome, ...(m.aliases || [])].join(' ')).includes(q))
      );
      if (count) count.textContent = `${filtered.length} MC${filtered.length === 1 ? '' : 's'} encontrado${filtered.length === 1 ? '' : 's'}`;
      el.innerHTML = filtered.slice(0, shown).map((m) => `
        <button class="mc-card" data-id="${m.posicao}" type="button" aria-label="Ver ficha de ${esc(m.nome)}">
          <span class="mc-info">
            <span class="mc-location">${esc(m.uf || 'UF pendente')} ${m.natureza === 'fictício' ? '<span class="mc-fiction">FICTÍCIO</span>' : ''}</span>
            <strong>${esc(m.nome)}</strong>
            <span class="mc-category">${esc(m.categoria)}</span>
            <span class="mc-view">VER FICHA ↗</span>
          </span>
        </button>
      `).join('');
      if (more) more.hidden = shown >= filtered.length;
    }

    function openProfile(id) {
      const m = roster.find((x) => x.posicao === id);
      const detail = document.getElementById('mc-detail');
      if (!m || !detail || !dialog) return;
      detail.innerHTML = `
        <div class="mc-profile-top">
          <div>
            <div class="label">FICHA OFICIAL • FR UNIVERSE 2027</div>
            <h2>${esc(m.nome)}</h2>
            <p>${esc(m.uf || 'Estado pendente')} • ${esc(m.natureza === 'fictício' ? 'Personagem fictício' : 'MC real')}</p>
          </div>
        </div>
        <div class="mc-profile-meta">
          <div><small>CATEGORIA</small><strong>${esc(m.categoria)}</strong></div>
          <div><small>APELIDOS</small><strong>${esc((m.aliases && m.aliases.length) ? m.aliases.join(', ') : 'Não informados')}</strong></div>
        </div>
        <h3>ESTILO E CARACTERÍSTICAS</h3>
        <p class="mc-description">${esc(m.descricao)}</p>
        <h3>ESTATÍSTICAS • 2027</h3>
        <div class="mc-profile-stats">
          <div><b>0</b><small>Batalhas</small></div>
          <div><b>0</b><small>Vitórias</small></div>
          <div><b>0</b><small>Títulos</small></div>
        </div>
      `;
      if (typeof dialog.showModal === 'function') {
        if (!dialog.open) dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
      }
    }

    if (el) {
      el.addEventListener('click', (e) => {
        const b = e.target.closest('[data-id]');
        if (b) openProfile(Number(b.dataset.id));
      });
    }
    const closeBtn = document.getElementById('mc-close');
    if (closeBtn && dialog) closeBtn.onclick = () => dialog.close();
    if (dialog) dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    for (const control of [search, state, nature]) {
      if (control) {
        control.addEventListener(control === search ? 'input' : 'change', () => { shown = 24; draw(); });
      }
    }
    if (more) more.onclick = () => { shown += 24; draw(); };

    fetch('mcs-data.json')
      .then((r) => { if (!r.ok) throw Error('Dados indisponíveis'); return r.json(); })
      .then((d) => {
        roster = (d.participantes || []).filter((m) => m.status_cadastro === 'válido');
        if (state) {
          const states = [...new Set(roster.map((m) => m.uf).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
          state.innerHTML += '<option value="pendente">UF pendente</option>' + states.map((uf) => `<option value="${esc(uf)}">${esc(uf)}</option>`).join('');
        }
        draw();
      })
      .catch(() => {
        if (el) el.innerHTML = '<div class="empty"><h3>Não foi possível carregar o elenco</h3><p>Verifique se o arquivo mcs-data.json foi enviado junto ao site.</p></div>';
      });
  }
})();
