const pages=[['index.html','Início'],['batalhas.html','Batalhas'],['competicoes.html','Competições'],['mcs.html','MCs'],['rankings.html','Rankings'],['rimagram.html','Rimagram'],['rimatube.html','RimaTube'],['jornal.html','Jornal do Rap'],['calendario.html','Calendário']];
const current=(location.pathname.split('/').pop()||'index.html');
const header=`<header class="topbar"><div class="navwrap"><a class="brand" href="index.html">FR <em>UNIVERSE</em><span style="color:#777;font-size:10px;vertical-align:top;margin-left:5px">2027</span></a><nav class="nav" aria-label="Navegação principal">${pages.map(([url,name])=>`<a href="${url}" class="${current===url?'active':''}">${name}</a>`).join('')}</nav><span class="live">● TEMPORADA 2027</span></div></header>`;
const footer=`<footer class="footer"><div class="container"><span><strong>FR UNIVERSE</strong> © 2027 · Portal de universo fictício de batalhas de rima</span><span>Resultados e estatísticas somente após registro oficial</span></div></footer>`;
document.getElementById('header').innerHTML=header;document.getElementById('footer').innerHTML=footer;

const WEEK1_RANKING = [
  {pos:'1º',mc:'Guri',uf:'SP',titulos:1,vitorias:4,pts:9},
  {pos:'1º',mc:'Jotapê',uf:'SP',titulos:1,vitorias:4,pts:9},
  {pos:'1º',mc:'Youngui',uf:'—',titulos:1,vitorias:4,pts:9},
  {pos:'4º',mc:'Poeta Gabriela',uf:'PR',titulos:1,vitorias:4,pts:7},
  {pos:'5º',mc:'Joãozinho',uf:'PR',titulos:0,vitorias:3,pts:5},
  {pos:'5º',mc:'Dehat',uf:'SP',titulos:0,vitorias:0,pts:5},
  {pos:'5º',mc:'Mano Ayron',uf:'SP',titulos:0,vitorias:0,pts:5},
  {pos:'5º',mc:'WL',uf:'RJ',titulos:0,vitorias:0,pts:5},
  {pos:'9º',mc:'Olhinho',uf:'PR',titulos:0,vitorias:2,pts:3},
  {pos:'9º',mc:'Ranks',uf:'—',titulos:0,vitorias:2,pts:3},
  {pos:'9º',mc:'Glaubin',uf:'SP',titulos:0,vitorias:0,pts:3},
  {pos:'9º',mc:'Magrão',uf:'—',titulos:0,vitorias:0,pts:3},
  {pos:'9º',mc:'Neo',uf:'—',titulos:0,vitorias:0,pts:3},
  {pos:'9º',mc:'Salvador',uf:'—',titulos:0,vitorias:0,pts:3},
  {pos:'15º',mc:'Kroy',uf:'SP',titulos:0,vitorias:0,pts:2},
  {pos:'15º',mc:'Prado',uf:'SP',titulos:0,vitorias:0,pts:2}
];

const WEEK1_BATALHAS = [
  {
    id:'aldeia-1',
    casa:'ALDEIA',
    sub:'Segunda-feira · 04/01/2027',
    icon:'🎤',
    chamada:'1ª Edição (Edição Lendas — Trios) · Clique para ver detalhes',
    edicao:'1ª Edição (Edição Lendas)',
    formato:'Batalha de Trios',
    data:'04/01/2027',
    campeao:'Neo, Jotapê e Kant (título invicto, 3 × 0 na final)',
    vice:'Big Mike, Ike e Valle',
    extras:'Semifinais: Tubarão, Kroy e Bask | Apollo, Salvador da RIMA e Noventa. Quartas: Guri, Prado e Tavin | Colombiana, Bob13 e Nicolas Niss | Barreto, Dopre e Brennuz | César, Sid e MCharles.'
  },
  {
    id:'coliseu-1',
    casa:'COLISEU',
    sub:'Quarta-feira · 06/01/2027',
    icon:'⚔',
    chamada:'1ª Edição (Individual) · Clique para ver detalhes',
    edicao:'1ª Edição',
    formato:'Individual',
    data:'06/01/2027',
    campeao:'Jotapê (2 × 1 sobre WL na final)',
    vice:'WL',
    extras:'Semifinais: Neo | Magrão. Quartas: Noventa | Perigx | Devilzinha | Torvi. 1ª Fase: Peke, Kaell, Xamuel, FP, Ike, Rico Mesquita, Nego Drama e Pivete.'
  },
  {
    id:'ana-rosa-1',
    casa:'ANA ROSA',
    sub:'Quinta-feira · 07/01/2027',
    icon:'🎙',
    chamada:'1ª Edição (Individual) · Clique para ver detalhes',
    edicao:'1ª Edição',
    formato:'Individual',
    data:'07/01/2027',
    campeao:'Guri (2 × 1 sobre Mano Ayron na final)',
    vice:'Mano Ayron',
    extras:'Semifinais: Salvador | Kroy. Quartas: Fortes | Dehat | Ike | Magrão. 1ª Fase: Zuluzão, Bask, Bobby Midia, Valle, Levinsk, Tavin, Lion e Prado.'
  },
  {
    id:'norte-1',
    casa:'NORTE',
    sub:'Sexta-feira · 08/01/2027',
    icon:'🔥',
    chamada:'1ª Edição (Formato Nacional) · Clique para ver detalhes',
    edicao:'1ª Edição',
    formato:'Individual (Formato Nacional)',
    data:'08/01/2027',
    campeao:'Youngui (2 × 0 sobre Dehat na final)',
    vice:'Dehat',
    extras:'Semifinais: Glaubin | Prado. Quartas: MCharles | Martin | Tavin | Levinsk. 1ª Fase: Jotapê, Tonhão, Japa, Kroy, Sara Krl, Lion, Xamuel e Vick Vi.'
  },
  {
    id:'jamalia-1',
    casa:'JAMÁLIA',
    sub:'Domingo · 10/01/2027 · Curitiba/PR',
    icon:'★',
    chamada:'Edição de Inauguração (Individual — 16 MCs) · Clique para ver detalhes',
    edicao:'Edição de Inauguração',
    formato:'Individual (16 MCs)',
    data:'10/01/2027',
    campeao:'Poeta Gabriela (4V–0D, 8–4 em rounds; 2 × 1 na final)',
    vice:'Joãozinho (3V–1D, 7–2 em rounds)',
    extras:'Semifinais: Olhinho | Ranks. Quartas: Bigode 041, Levitico, Cadu e Cris. Oitavas: HW, Ravina, Lilica, Jef, Valle, Ike, Peu e Isa.'
  }
];

const WEEK1_COMPETICOES = [
  {
    id:'lnf-serie-a',
    nome:'LNF SÉRIE A',
    sub:'Seletivas SP, RJ e DF · 09/01/2027',
    icon:'🏆',
    chamada:'60 classificados (20 por UF) · Clique para ver detalhes',
    resumo:'Seletivas estaduais realizadas em São Paulo, Rio de Janeiro e Distrito Federal na Semana 1.',
    detalhes:'SP: 16 diretos + 4 repescagem (WM, EZ, Apollo, Killua). RJ: 16 diretos + 4 repescagem (Nene, Bigode, Nicolas, Pivete). DF: 16 diretos + 4 repescagem (Pietra Candangolândia, Nanda Samambaia, Soraia Brazlândia, Breno Sobradinho).'
  },
  {
    id:'estaduais',
    nome:'ESTADUAIS',
    sub:'Disputas estaduais · Semana 1',
    icon:'◈',
    chamada:'Etapas SP, RJ e DF registradas · Clique para ver detalhes',
    resumo:'Classificatórias estaduais da Semana 1 encerradas com 20 classificados e 12 eliminados em cada estado.',
    detalhes:'Estados registrados na Semana 1: São Paulo (SP), Rio de Janeiro (RJ) e Distrito Federal (DF).'
  },
  {
    id:'nacionais',
    nome:'NACIONAIS',
    sub:'Palco nacional · Semana 1',
    icon:'★',
    chamada:'Batalha da Norte (Formato Nacional) · Clique para ver detalhes',
    resumo:'Na sexta-feira (08/01/2027), a 1ª Edição da Batalha da Norte foi disputada no Formato Nacional.',
    detalhes:'Campeão: Youngui (2 × 0 sobre Dehat na final). Semifinalistas: Glaubin e Prado.'
  },
  {
    id:'copas',
    nome:'COPAS',
    sub:'Torneios e formatos especiais',
    icon:'⚡',
    chamada:'Ver status da Semana 1 · Clique para ver detalhes',
    resumo:'Sem resultados oficiais de copas registrados na Semana 1.',
    detalhes:'Apenas eventos oficialmente concluídos e registrados entram no histórico do portal.'
  },
  {
    id:'especiais',
    nome:'ESPECIAIS',
    sub:'Eventos extraordinários',
    icon:'◆',
    chamada:'Aldeia (Edição Lendas) & Jamália (Inauguração) · Clique para ver detalhes',
    resumo:'Destaques especiais da Semana 1: Aldeia (Edição Lendas em trios) e Inauguração da Jamália em Curitiba/PR.',
    detalhes:'Aldeia: Neo, Jotapê e Kant (3 × 0). Jamália: Poeta Gabriela campeã invicta (4V–0D, 2 × 1 na final).'
  }
];

const WEEK1_RIMAGRAM = [
  {handle:'@jotape.mc',texto:'Segunda na Aldeia com Neo e Kant (3×0), quarta no Coliseu (2×1). A Semana 1 começou pesada pro FR Universe! 🏆🔥',tag:'Aldeia & Coliseu · Semana 1'},
  {handle:'@poetagabriela',texto:'4 batalhas, 4 vezes no terceiro round, 4 vitórias por 2×1. Inauguração da Batalha da Jamália em Curitiba com o título em casa! 👑🎤',tag:'Batalha da Jamália · Curitiba/PR'},
  {handle:'@youngui.mc',texto:'Formato Nacional na sexta exigiu tudo. 2×0 na final da Norte e mais um troféu na conta.',tag:'Batalha da Norte · Formato Nacional'},
  {handle:'@guri.mc',texto:'Ana Rosa na quinta foi guerra até o fim: 2×1 em cima do Mano Ayron e o título garantido.',tag:'Batalha do Ana Rosa · Semana 1'},
  {handle:'@fruniverse.oficial',texto:'Fechamento da Semana 1 (04/01 a 10/01/2027): Aldeia, Coliseu, Ana Rosa, Norte, Seletivas LNF (SP, RJ, DF) e Jamália concluídos.',tag:'Oficial · Semana 1'}
];

const WEEK1_RIMATUBE = [
  {titulo:'Big Mike, Ike e Valle 0 × 3 Neo, Jotapê e Kant',sub:'Batalha da Aldeia · 1ª Edição (Edição Lendas — Trios) · 04/01/2027',nota:'Final em trios com título invicto de Neo, Jotapê e Kant.'},
  {titulo:'WL 1 × 2 Jotapê',sub:'Batalha do Coliseu · 1ª Edição (Individual) · 06/01/2027',nota:'Decisão do título individual após vitórias por 2×0 de Jotapê sobre Kaell, Devilzinha e Magrão.'},
  {titulo:'Guri 2 × 1 Mano Ayron',sub:'Batalha do Ana Rosa · 1ª Edição (Individual) · 07/01/2027',nota:'Final equilibrada fechando a campanha de Guri após passar por Lion, Dehat e Salvador.'},
  {titulo:'Dehat 0 × 2 Youngui',sub:'Batalha da Norte · 1ª Edição (Formato Nacional) · 08/01/2027',nota:'Youngui conquista o título nacional vencendo Tonhão, Levinsk, Prado e Dehat.'},
  {titulo:'Poeta Gabriela 2 × 1 Joãozinho',sub:'Batalha da Jamália (BDJ) · Inauguração (Curitiba/PR) · 1
