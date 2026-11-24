const pages=[['index.html','Início'],['batalhas.html','Batalhas'],['competicoes.html','Competições'],['mcs.html','MCs'],['rankings.html','Rankings'],['rimagram.html','Rimagram'],['rimatube.html','RimaTube'],['jornal.html','Jornal do Rap'],['calendario.html','Calendário']];
const current=(location.pathname.split('/').pop()||'index.html');
const header=`<header class="topbar"><div class="navwrap"><a class="brand" href="index.html">FR <em>UNIVERSE</em><span style="color:#777;font-size:10px;vertical-align:top;margin-left:5px">2027</span></a><nav class="nav" aria-label="Navegação principal">${pages.map(([url,name])=>`<a href="${url}" class="${current===url?'active':''}">${name}</a>`).join('')}</nav><span class="live">● TEMPORADA 2027</span></div></header>`;
const footer=`<footer class="footer"><div class="container"><span><strong>FR UNIVERSE</strong> © 2027 · Portal de universo fictício de batalhas de rima</span><span>Resultados e estatísticas somente após registro oficial</span></div></footer>`;
document.getElementById('header').innerHTML=header;document.getElementById('footer').innerHTML=footer;

const RIMAGRAM_POSTS = [
  {
    autor: 'Batalha da Aldeia · 1ª Edição (Edição Lendas)',
    sub: 'São Paulo — Segunda-feira · Trios',
    texto: 'Neo, Jotapê e Kant levam o título invicto por 3×0 na Grande Final contra Big Mike, Ike e Valle! Semifinais: Tubarão, Kroy e Bask | Apollo, Salvador da RIMA e Noventa.'
  },
  {
    autor: 'Batalha do Coliseu · 1ª Edição',
    sub: 'Quarta-feira · Individual',
    texto: 'Jotapê é campeão vencendo WL por 2×1 na final! Caminho do campeão: 2×0 vs Kaell, 0×2/2×0 vs Devilzinha, 2×0 vs Magrão e 2×1 vs WL.'
  },
  {
    autor: 'Batalha do Ana Rosa · 1ª Edição',
    sub: 'Quinta-feira · Individual',
    texto: 'Guri conquista o título superando Mano Ayron por 2×1 na final! Semifinalistas: Salvador e Kroy; Quartas: Fortes, Dehat, Ike e Magrão.'
  },
  {
    autor: 'Batalha da Norte · 1ª Edição',
    sub: 'Sexta-feira · Formato Nacional',
    texto: 'Youngui leva o título no Formato Nacional vencendo Dehat por 2×0 na final! Semifinalistas: Glaubin e Prado; Quartas: MCharles, Martin, Tavin e Levinsk.'
  },
  {
    autor: 'Seletivas Estaduais — LNF',
    sub: 'SP (20 classificados) · RJ (20 classificados) · DF (20 classificados)',
    texto: '60 classificados no total (16 diretos + 4 repescagem por estado). Destaques: Killua (2×1 vs Grafitteh em SP), Pivete (2×1 vs Scooby no RJ) e Nanda Samambaia / Soraia Brazlândia (2×0 nas finais do DF).'
  },
  {
    autor: 'Batalha da Jamália (BDJ) · Inauguração',
    sub: 'Curitiba · PR — Domingo · Individual (16 MCs)',
    texto: 'Poeta Gabriela é campeã inaugural com campanha 4V–0D (8–4 em rounds), vencendo quatro confrontos seguidos por 2×1 (Lilica, Levitico, Olhinho e Joãozinho na final).'
  }
];

const RIMATUBE_ITEMS = [
  {
    titulo: 'Aldeia · 1ª Edição (Edição Lendas — Trios)',
    sub: 'São Paulo — Segunda-feira · Final: Big Mike, Ike e Valle 0 × 3 Neo, Jotapê e Kant',
    detalhe: 'Quartas: Tubarão/Kroy/Bask 3×2 Guri/Prado/Tavin; Colombiana/Bob13/Nicolas Niss 0×3 Big Mike/Ike/Valle; Neo/Jotapê/Kant 3×1 Barreto/Dopre/Brennuz; César/Sid/MCharles 2×3 Apollo/Salvador da RIMA/Noventa. Semis: Tubarão/Kroy/Bask 2×3 Big Mike/Ike/Valle; Neo/Jotapê/Kant 3×0 Apollo/Salvador da RIMA/Noventa.'
  },
  {
    titulo: 'Coliseu · 1ª Edição (Individual)',
    sub: 'Quarta-feira · Final: WL 1 × 2 Jotapê',
    detalhe: 'Caminho de Jotapê: 1ª Fase 2×0 vs Kaell; Quartas 2×0 vs Devilzinha; Semifinal 2×0 vs Magrão; Final 2×1 vs WL. Vice: WL; Semis: Neo e Magrão.'
  },
  {
    titulo: 'Ana Rosa · 1ª Edição (Individual)',
    sub: 'Quinta-feira · Final: Guri 2 × 1 Mano Ayron',
    detalhe: 'Caminho de Guri: 1ª Fase 2×0 vs Lion; Quartas 2×0 vs Dehat; Semifinal 2×1 vs Salvador; Final 2×1 vs Mano Ayron. Vice: Mano Ayron; Semis: Salvador e Kroy.'
  },
  {
    titulo: 'Norte · 1ª Edição (Formato Nacional)',
    sub: 'Sexta-feira · Final: Dehat 0 × 2 Youngui',
    detalhe: 'Caminho de Youngui: 1ª Fase 2×1 vs Tonhão; Quartas 2×0 vs Levinsk; Semifinal 2×1 vs Prado; Final 2×0 vs Dehat. Vice: Dehat; Semis: Glaubin e Prado.'
  },
  {
    titulo: 'Jamália (BDJ) · Edição de Inauguração (Curitiba · PR)',
    sub: 'Domingo · Individual (16 MCs) · Final: Poeta Gabriela 2 × 1 Joãozinho',
    detalhe: 'Poeta Gabriela (4V–0D, 8–4 em rounds): Oitavas 03 2×1 vs Lilica; Quartas 02 2×1 vs Levitico; Semifinal 01 2×1 vs Olhinho; Final 2×1 vs Joãozinho (3V–1D, 7–2 em rounds).'
  },
  {
    titulo: 'Seletivas Estaduais — LNF (SP, RJ e DF)',
    sub: '20 Classificados e 12 Eliminados por Estado',
    detalhe: 'SP: 16 diretos + WM, EZ, Apollo e Killua (2×1 vs Grafitteh). RJ: 16 diretos + Nene, Bigode, Nicolas e Pivete (2×1 vs Scooby). DF: 16 diretos + Pietra Candangolândia, Nanda Samambaia (2×0), Soraia Brazlândia (2×0) e Breno Sobradinho.'
  }
];

const data={
'batalhas.html':{title:'CASAS DE <span>BATALHA.</span>',eyebrow:'O circuito',desc:'Explore as casas de batalha, acompanhe as edições e consulte os resultados oficiais do FR Universe 2027.',cards:[['ALDEIA','Segunda-feira','🎤'],['COLISEU','Quarta-feira','⚔'],['ANA ROSA','Quinta-feira','🎙'],['NORTE','Sexta-feira','🔥'],['JAMALIA','Domingo','★']]},
'competicoes.html':{title:'GRANDES <span>COMPETIÇÕES.</span>',eyebrow:'A disputa pelo topo',desc:'LNF Série A, estaduais, nacionais, copas e edições especiais. Cada competição terá seus próprios resultados e chaveamentos.',cards:[['LNF SÉRIE A','Liga nacional','🏆'],['ESTADUAIS','Disputas por estado','◈'],['NACIONAIS','Palco nacional','★'],['COPAS','Torneios e formatos especiais','⚡'],['ESPECIAIS','Eventos extraordinários','◆']]},
'mcs.html':{title:'OS DONOS DO <span>MICROFONE.</span>',eyebrow:'Elenco oficial',desc:'Perfis, estilos, conquistas e históricos dos participantes. Os cadastros serão importados da base oficial aprovada pelo Presidente.',cards:[]},
'rankings.html':{title:'A CORRIDA PELO <span>TOPO.</span>',eyebrow:'Ranking nacional',desc:'Classificação exclusiva das edições individuais das casas de batalha. Pontuação calculada somente com resultados oficiais registrados.',cards:[]},
'rimagram.html':{title:'O UNIVERSO <span>REPERCUTE.</span>',eyebrow:'Rimagram',desc:'O feed do FR Universe com os acontecimentos registrados na rodada.',cards:[]},
'rimatube.html':{title:'BATALHAS QUE <span>MARCAM.</span>',eyebrow:'RimaTube',desc:'Registros textuais dos confrontos e resultados registrados na rodada.',cards:[]},
'jornal.html':{title:'JORNAL DO <span>RAP.</span>',eyebrow:'Cobertura semanal',desc:'Edição resumida com campeões, resultados, seletivas da LNF e destaques registrados.',cards:[]},
'calendario.html':{title:'CADA DATA, UMA <span>HISTÓRIA.</span>',eyebrow:'Calendário histórico',desc:'Navegue pelos meses de 2027 e consulte as edições já realizadas. Eventos futuros não aparecem neste calendário.',cards:[]}
};
const d=data[current];if(d){document.title=d.title.replace(/<[^>]+>/g,'')+' | FR Universe 2027';document.getElementById('content').innerHTML=`<section class="pagehero"><div class="container"><div class="eyebrow">${d.eyebrow}</div><h1>${d.title}</h1><p>${d.desc}</p><span class="status">Registros publicados · 2027</span></div></section><main class="container">${renderPage(current,d)}</main>`;}
function empty(title,description,emoji='✦'){return `<div class="empty"><div class="big">${emoji}</div><h3>${title}</h3><p>${description}</p></div>`}
function renderPage(page,d){
  if(page==='batalhas.html'||page==='competicoes.html'){return `<section class="section"><div class="sectionhead"><div><h2>${page==='batalhas.html'?'CIRCUITO DE BATALHAS':'COMPETIÇÕES OFICIAIS'}</h2><p>Casas e competições registradas</p></div></div><div class="grid">${d.cards.map(([name,sub,icon])=>`<article class="card"><div class="placeholder"><div class="symbol">${icon}</div><small>FR UNIVERSE 2027</small></div><div class="cardpad"><div class="kicker">${sub}</div><h3>${name}</h3><p>Resultados e chaveamentos oficiais registrados na rodada.</p></div></article>`).join('')}</div></section>`}
  if(page==='mcs.html')return `<section class="section"><div class="sectionhead"><div><h2>ELENCO OFICIAL</h2><p>170 MCs válidos • 5 personagens fictícios • estatísticas 2027 zeradas</p></div></div><div class="mc-summary"><span><strong>170</strong> MCs cadastrados</span><span><strong>5</strong> fictícios</span><span><strong>0</strong> resultados de 2027</span></div><div class="filters mc-controls"><input class="search" id="mc-search" placeholder="Buscar MC por nome ou apelido..." aria-label="Buscar MC"><select class="mc-select" id="mc-state" aria-label="Filtrar por estado"><option value="">Todos os estados</option></select><select class="mc-select" id="mc-nature" aria-label="Filtrar por natureza"><option value="">Reais e fictícios</option><option value="real">Reais</option><option value="fictício">Fictícios</option></select></div><p class="mc-count" id="mc-count" aria-live="polite"></p><div class="mc-grid" id="mc-list"></div><div class="mc-more-wrap"><button class="btn secondary" id="mc-more" type="button" hidden>VER MAIS MCS</button></div><p class="fine">As categorias e descrições representam o cadastro fornecido pelo Presidente, não uma avaliação externa verificada. Informações desconhecidas permanecem pendentes.</p></section><dialog id="mc-dialog" class="mc-dialog" aria-label="Ficha do MC"><button class="mc-close" id="mc-close" aria-label="Fechar ficha">✕</button><div id="mc-detail"></div></dialog>`;
  if(page==='rankings.html')return `<section class="section"><div class="sectionhead"><div><h2>PÓDIO NACIONAL</h2><p>Somente edições individuais das casas de batalha</p></div></div>${empty('O PÓDIO AINDA ESTÁ VAZIO','Nenhuma edição de 2027 foi registrada. O ranking começará do zero.','🏆')}<div style="height:24px"></div><div class="tablewrap"><table><thead><tr><th>Posição</th><th>MC</th><th>UF</th><th>Títulos</th><th>Vitórias</th><th>Pontos</th></tr></thead><tbody><tr><td colspan="6" style="text-align:center;padding:34px;color:#999">Aguardando primeiros resultados oficiais</td></tr></tbody></table></div><p class="fine">Regras: campeão +7, vice +5, semifinal +3, vitória 2×0 +1, derrota na primeira fase −1. Desempates: títulos, vitórias e empate mantido.</p></section>`;
  if(page==='rimagram.html'){
    return `<section class="section"><div class="sectionhead"><div><h2>FEED DO UNIVERSO</h2><p>Resultados e repercussões registradas</p></div></div><div style="max-width:680px;margin:auto">${RIMAGRAM_POSTS.map(p=>`<article class="card cardpad" style="margin-bottom:16px"><div class="label">${p.sub}</div><h3 style="font-size:24px;margin-top:8px">${p.autor}</h3><p style="color:#f8f8f8;font-size:14px;margin-top:10px">${p.texto}</p></article>`).join('')}</div></section>`;
  }
  if(page==='rimatube.html'){
    return `<section class="section"><div class="sectionhead"><div><h2>DESTAQUES EM VÍDEO</h2><p>Registros textuais dos confrontos e seletivas</p></div></div><div class="grid">${RIMATUBE_ITEMS.map(v=>`<article class="card"><div class="placeholder"><div class="symbol">▶</div><small>FR UNIVERSE 2027</small></div><div class="cardpad"><div class="kicker">${v.sub}</div><h3>${v.titulo}</h3><p>${v.detalhe}</p></div></article>`).join('')}</div></section>`;
  }
  if(page==='jornal.html'){
    return `<section class="section"><div class="sectionhead"><div><h2>EDIÇÃO DA SEMANA</h2><p>Cobertura completa das casas e seletivas da LNF</p></div></div><div class="feature"><article class="card"><div class="placeholder" style="min-height:250px"><div class="symbol">FR</div><small>Manchete da semana</small></div><div class="cardpad"><div class="label">Manchete principal</div><h3 style="font-size:34px;margin-top:20px">NEO, JOTAPÊ E KANT LEVAM A ALDEIA; JOTAPÊ VENCE O COLISEU; GURI LEVA O ANA ROSA; YOUNGUI VENCE A NORTE; POETA GABRIELA ESTREIA COM TÍTULO NA JAMÁLIA E LNF DEFINE 60 CLASSIFICADOS</h3><p style="margin-top:14px">Confira os campeões, finais, caminhos dos campeões e os 20 classificados por estado em SP, RJ e DF.</p></div></article><div class="card cardpad"><div class="label">Nesta edição</div><h3>COBERTURA OFICIAL</h3><p><strong>Aldeia · 1ª Edição (Edição Lendas — Trios):</strong> Campeões Neo, Jotapê e Kant (3×0 na final) · Vice: Big Mike, Ike e Valle.</p><hr style="border:0;border-top:1px solid #333"><p><strong>Coliseu · 1ª Edição:</strong> Campeão Jotapê (2×1 vs WL) · <strong>Ana Rosa · 1ª Edição:</strong> Campeão Guri (2×1 vs Mano Ayron) · <strong>Norte · 1ª Edição:</strong> Campeão Youngui (2×0 vs Dehat).</p><hr style="border:0;border-top:1px solid #333"><p><strong>Jamália (BDJ) · Inauguração (Curitiba/PR):</strong> Campeã Poeta Gabriela (4V–0D, 8–4 em rounds, quatro vitórias por 2×1, final 2×1 vs Joãozinho).</p><hr style="border:0;border-top:1px solid #333"><p><strong>Seletivas LNF (SP, RJ e DF):</strong> 20 classificados e 12 eliminados em cada estado (16 diretos + 4 repescagem por UF).</p></div></div></section>`;
  }
  if(page==='calendario.html')return `<section class="section"><div class="sectionhead"><div><h2>HISTÓRICO DE 2027</h2><p>Somente eventos concluídos e oficialmente registrados</p></div></div><div class="card cardpad" style="max-width:850px;margin:auto"><div class="calendarbar"><button id="prevmonth" aria-label="Mês anterior">❮</button><h2 id="monthname">JANEIRO 2027</h2><button id="nextmonth" aria-label="Próximo mês">❯</button></div><div class="week" id="calendar"></div><p class="fine" style="margin-top:20px">Os símbolos das casas e competições aparecerão nos dias de eventos concluídos. Ao clicar, abrirão a página oficial correspondente.</p></div></section>`;
  return '';
}
if(current==='calendario.html'){let m=0;const months=['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO'];function draw(){document.getElementById('monthname').textContent=months[m]+' 2027';let first=new Date(2027,m,1).getDay(),count=new Date(2027,m+1,0).getDate();document.getElementById('calendar').innerHTML=['DOM','SEG','TER','QUA','QUI','SEX','SÁB'].map(d=>`<div class="weekday">${d}</div>`).join('')+Array.from({length:first},()=>'<div class="day outside"></div>').join('')+Array.from({length:count},(_,i)=>`<div class="day">${i+1}</div>`).join('');document.getElementById('prevmonth').disabled=m===0;document.getElementById('nextmonth').disabled=m===11}document.getElementById('prevmonth').onclick=()=>{m--;draw()};document.getElementById('nextmonth').onclick=()=>{m++;draw()};draw()}

if(current==='mcs.html'){
  const el=document.getElementById('mc-list'), search=document.getElementById('mc-search'), state=document.getElementById('mc-state'), nature=document.getElementById('mc-nature'), more=document.getElementById('mc-more'), count=document.getElementById('mc-count'), dialog=document.getElementById('mc-dialog');
  const esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
  const normalize=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  let roster=[],shown=24,filtered=[];
  const portrait=m=>m.natureza==='fictício'?`avatars/avatar-${String((m.posicao*7+3)%16+1).padStart(2,'0')}.webp`:`fotos/mc-${String(m.posicao).padStart(3,'0')}.webp`;

  function draw(){const q=normalize(search.value.trim());filtered=roster.filter(m=>(!state.value||(state.value==='pendente'?!m.uf:m.uf===state.value))&&(!nature.value||m.natureza===nature.value)&&(!q||normalize([m.nome,...m.aliases].join(' ')).includes(q)));count.textContent=`${filtered.length} MC${filtered.length===1?'':'s'} encontrado${filtered.length===1?'':'s'}`;el.innerHTML=filtered.slice(0,shown).map(m=>`<button class="mc-card" data-id="${m.posicao}" type="button" aria-label="Ver ficha de ${esc(m.nome)}"><span class="mc-art"><img class="mc-portrait" src="${portrait(m)}" alt="Foto de ${esc(m.nome)}" loading="lazy"><span class="mc-art-note">FR UNIVERSE • 2027</span></span><span class="mc-info"><span class="mc-location">${esc(m.uf||'UF pendente')} ${m.natureza==='fictício'?'<span class="mc-fiction">FICTÍCIO</span>':''}</span><strong>${esc(m.nome)}</strong><span class="mc-category">${esc(m.categoria)}</span><span class="mc-view">VER FICHA ↗</span></span></button>`).join('');more.hidden=shown>=filtered.length;}
  function openProfile(id){const m=roster.find(m=>m.posicao===id);if(!m)return;document.getElementById('mc-detail').innerHTML=`<div class="mc-profile-top"><span class="mc-profile-avatar"><img src="${portrait(m)}" alt="Foto de ${esc(m.nome)}"></span><div><div class="label">FICHA OFICIAL • FR UNIVERSE 2027</div><h2>${esc(m.nome)}</h2><p>${esc(m.uf||'Estado pendente')} • ${esc(m.natureza==='fictício'?'Personagem fictício':'MC real')}</p></div></div><div class="mc-profile-meta"><div><small>CATEGORIA</small><strong>${esc(m.categoria)}</strong></div><div><small>APELIDOS</small><strong>${esc(m.aliases.length?m.aliases.join(', '):'Não informados')}</strong></div></div><h3>ESTILO E CARACTERÍSTICAS</h3><p class="mc-description">${esc(m.descricao)}</p><h3>ESTATÍSTICAS • 2027</h3><div class="mc-profile-stats"><div><b>0</b><small>Batalhas</small></div><div><b>0</b><small>Vitórias</small></div><div><b>0</b><small>Títulos</small></div></div><p class="fine">Nenhum resultado do reinício de 2027 foi registrado. Dados de temporadas anteriores não são contabilizados.</p>`;dialog.showModal();}
  el.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)openProfile(Number(b.dataset.id));});
  document.getElementById('mc-close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  for(const control of [search,state,nature])control.addEventListener(control===search?'input':'change',()=>{shown=24;draw()});more.onclick=()=>{shown+=24;draw()};
  fetch('mcs-data.json').then(r=>{if(!r.ok)throw Error('Dados indisponíveis');return r.json()}).then(data=>{roster=data.participantes.filter(m=>m.status_cadastro==='válido');const states=[...new Set(roster.map(m=>m.uf).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'pt-BR'));state.innerHTML+='<option value="pendente">UF pendente</option>'+states.map(uf=>`<option value="${esc(uf)}">${esc(uf)}</option>`).join('');draw()}).catch(()=>{el.innerHTML='<div class="empty"><h3>Não foi possível carregar o elenco</h3><p>Verifique se o arquivo mcs-data.json foi enviado junto ao site.</p></div>'});
}
