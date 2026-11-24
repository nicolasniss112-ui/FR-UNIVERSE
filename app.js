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
    casa:'ALDEIA',
    sub:'1ª Edição (Edição Lendas — Trios) · 04/01/2027',
    icon:'🎤',
    resumo:'Campeões: Neo, Jotapê e Kant (3 × 0 invicto na final) · Vice: Big Mike, Ike e Valle.'
  },
  {
    casa:'COLISEU',
    sub:'1ª Edição (Individual) · 06/01/2027',
    icon:'⚔',
    resumo:'Campeão: Jotapê (2 × 1 na final) · Vice: WL.'
  },
  {
    casa:'ANA ROSA',
    sub:'1ª Edição (Individual) · 07/01/2027',
    icon:'🎙',
    resumo:'Campeão: Guri (2 × 1 na final) · Vice: Mano Ayron.'
  },
  {
    casa:'NORTE',
    sub:'1ª Edição (Formato Nacional) · 08/01/2027',
    icon:'🔥',
    resumo:'Campeão: Youngui (2 × 0 na final) · Vice: Dehat.'
  },
  {
    casa:'JAMÁLIA',
    sub:'Edição de Inauguração (Curitiba/PR) · 10/01/2027',
    icon:'★',
    resumo:'Campeã: Poeta Gabriela (4V–0D, 2 × 1 na final) · Vice: Joãozinho.'
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
  {titulo:'Poeta Gabriela 2 × 1 Joãozinho',sub:'Batalha da Jamália (BDJ) · Inauguração (Curitiba/PR) · 10/01/2027',nota:'Quarta vitória por 2×1 seguida de Poeta Gabriela (4V–0D) na estreia da Jamália.'},
  {titulo:'Seletivas LNF — Repescagem (SP, RJ e DF)',sub:'LNF · 09/01/2027',nota:'Destaques para Killua (2×1 vs Grafitteh em SP), Pivete (2×1 vs Scooby no RJ) e os 60 classificados.'}
];

const WEEK1_CALENDAR_EVENTS = {
  '2027-1-4': {label:'Aldeia #1',href:'batalhas.html',title:'04/01/2027 — Batalha da Aldeia · 1ª Edição (Edição Lendas — Trios)'},
  '2027-1-6': {label:'Coliseu #1',href:'batalhas.html',title:'06/01/2027 — Batalha do Coliseu · 1ª Edição (Individual)'},
  '2027-1-7': {label:'Ana Rosa #1',href:'batalhas.html',title:'07/01/2027 — Batalha do Ana Rosa · 1ª Edição (Individual)'},
  '2027-1-8': {label:'Norte #1',href:'batalhas.html',title:'08/01/2027 — Batalha da Norte · 1ª Edição (Formato Nacional)'},
  '2027-1-9': {label:'LNF Seletivas',href:'competicoes.html',title:'09/01/2027 — LNF · Seletivas Estaduais (SP, RJ e DF)'},
  '2027-1-10': {label:'Jamália #1',href:'batalhas.html',title:'10/01/2027 — Batalha da Jamália · Edição de Inauguração (Curitiba/PR)'}
};

const data={
'batalhas.html':{title:'CASAS DE <span>BATALHA.</span>',eyebrow:'O circuito · Semana 1',desc:'Resultados registrados na Semana 1 (04/01 a 10/01/2027) nas casas do FR Universe.',cards:[]},
'competicoes.html':{title:'GRANDES <span>COMPETIÇÕES.</span>',eyebrow:'A disputa pelo topo',desc:'LNF Série A, estaduais, nacionais, copas e edições especiais. Cada competição terá seus próprios resultados e chaveamentos.',cards:[['LNF SÉRIE A','Seletivas SP, RJ e DF (09/01)','🏆'],['ESTADUAIS','20 classificados por UF','◈'],['NACIONAIS','Palco nacional','★'],['COPAS','Torneios e formatos especiais','⚡'],['ESPECIAIS','Eventos extraordinários','◆']]},
'mcs.html':{title:'OS DONOS DO <span>MICROFONE.</span>',eyebrow:'Elenco oficial',desc:'Perfis, estilos, conquistas e históricos dos participantes. Os cadastros serão importados da base oficial aprovada pelo Presidente.',cards:[]},
'rankings.html':{title:'A CORRIDA PELO <span>TOPO.</span>',eyebrow:'Ranking geral · Semana 1',desc:'Classificação geral oficial registrada após o fechamento da Semana 1 (04/01 a 10/01/2027).',cards:[]},
'rimagram.html':{title:'O UNIVERSO <span>REPERCUTE.</span>',eyebrow:'Rimagram · Semana 1',desc:'O feed social do FR Universe: campeões, comentários e acontecimentos registrados na Semana 1.',cards:[]},
'rimatube.html':{title:'BATALHAS QUE <span>MARCAM.</span>',eyebrow:'RimaTube · Semana 1',desc:'Registros textuais simulados das batalhas em destaque da Semana 1. Não são vídeos reais e não há reprodução de imagens de confrontos.',cards:[]},
'jornal.html':{title:'JORNAL DO <span>RAP.</span>',eyebrow:'Cobertura semanal · Semana 1',desc:'Edição da Semana 1 (04/01 a 10/01/2027) após o fechamento oficial da rodada.',cards:[]},
'calendario.html':{title:'CADA DATA, UMA <span>HISTÓRIA.</span>',eyebrow:'Calendário histórico · 2027',desc:'Navegue pelos meses de 2027 e consulte as edições já realizadas. Eventos futuros não aparecem neste calendário.',cards:[]}
};

const d=data[current];
if(d){
  document.title=d.title.replace(/<[^>]+>/g,'')+' | FR Universe 2027';
  document.getElementById('content').innerHTML=`<section class="pagehero"><div class="container"><div class="eyebrow">${d.eyebrow}</div><h1>${d.title}</h1><p>${d.desc}</p><span class="status">Semana 1 registrada · 2027</span></div></section><main class="container">${renderPage(current,d)}</main>`;
}

function empty(title,description,emoji='✦'){return `<div class="empty"><div class="big">${emoji}</div><h3>${title}</h3><p>${description}</p></div>`}

function renderPage(page,d){
  if(page==='batalhas.html'){
    return `<section class="section"><div class="sectionhead"><div><h2>RESULTADOS DA SEMANA 1</h2><p>Edições concluídas de 04/01 a 10/01/2027</p></div></div><div class="grid">${WEEK1_BATALHAS.map(b=>`<article class="card"><div class="placeholder"><div class="symbol">${b.icon}</div><small>FR UNIVERSE · SEMANA 1</small></div><div class="cardpad"><div class="kicker">${b.sub}</div><h3>${b.casa}</h3><p style="color:#f8f8f8">${b.resumo}</p></div></article>`).join('')}</div></section>`;
  }
  if(page==='competicoes.html'){
    return `<section class="section"><div class="sectionhead"><div><h2>COMPETIÇÕES OFICIAIS</h2><p>Semana 1 concluída (04/01 a 10/01/2027)</p></div></div><div class="grid">${d.cards.map(([name,sub,icon])=>`<article class="card"><div class="placeholder"><div class="symbol">${icon}</div><small>FR UNIVERSE 2027</small></div><div class="cardpad"><div class="kicker">${sub}</div><h3>${name}</h3><p>Registro oficial da Semana 1 computado no calendário e na cobertura do portal.</p></div></article>`).join('')}</div></section>`;
  }
  if(page==='mcs.html')return `<section class="section"><div class="sectionhead"><div><h2>ELENCO OFICIAL</h2><p>170 MCs válidos • 5 personagens fictícios • base oficial</p></div></div><div class="mc-summary"><span><strong>170</strong> MCs cadastrados</span><span><strong>5</strong> fictícios</span><span><strong>01</strong> semana registrada</span></div><div class="filters mc-controls"><input class="search" id="mc-search" placeholder="Buscar MC por nome ou apelido..." aria-label="Buscar MC"><select class="mc-select" id="mc-state" aria-label="Filtrar por estado"><option value="">Todos os estados</option></select><select class="mc-select" id="mc-nature" aria-label="Filtrar por natureza"><option value="">Reais e fictícios</option><option value="real">Reais</option><option value="fictício">Fictícios</option></select></div><p class="mc-count" id="mc-count" aria-live="polite"></p><div class="mc-grid" id="mc-list"></div><div class="mc-more-wrap"><button class="btn secondary" id="mc-more" type="button" hidden>VER MAIS MCS</button></div><p class="fine">As categorias e descrições representam o cadastro fornecido pelo Presidente, não uma avaliação externa verificada. Informações desconhecidas permanecem pendentes.</p></section><dialog id="mc-dialog" class="mc-dialog" aria-label="Ficha do MC"><button class="mc-close" id="mc-close" aria-label="Fechar ficha">✕</button><div id="mc-detail"></div></dialog>`;
  if(page==='rankings.html'){
    const rows = WEEK1_RANKING.map(r=>`<tr><td><strong>${r.pos}</strong></td><td><strong>${r.mc}</strong></td><td>${r.uf}</td><td>${r.titulos}</td><td>${r.vitorias}</td><td><strong>${r.pts}</strong></td></tr>`).join('');
    return `<section class="section"><div class="sectionhead"><div><h2>RANKING GERAL · SEMANA 1</h2><p>Pontuação oficial da 1ª semana de janeiro de 2027</p></div></div><div class="tablewrap"><table><thead><tr><th>Posição</th><th>MC</th><th>UF</th><th>Títulos</th><th>Vitórias</th><th>Pontos</th></tr></thead><tbody>${rows}</tbody></table></div><p class="fine">Regras: campeão +7, vice +5, semifinal +3, vitória 2×0 +1, derrota na primeira fase −1. Desempates: títulos, vitórias e empate mantido.</p></section>`;
  }
  if(page==='rimagram.html'){
    const posts = WEEK1_RIMAGRAM.map(p=>`<article class="card cardpad" style="margin-bottom:16px"><div class="label">${p.tag}</div><h3 style="font-size:22px;margin-top:8px">${p.handle}</h3><p style="color:#f8f8f8;font-size:14px;margin-top:10px">${p.texto}</p></article>`).join('');
    return `<section class="section"><div class="sectionhead"><div><h2>FEED DO UNIVERSO · SEMANA 1</h2><p>Publicações registradas na Semana 1 (04/01 a 10/01/2027)</p></div></div><div style="max-width:680px;margin:auto">${posts}</div></section>`;
  }
  if(page==='rimatube.html'){
    const vids = WEEK1_RIMATUBE.map(v=>`<article class="card"><div class="placeholder"><div class="symbol">▶</div><small>FR UNIVERSE · SEMANA 1</small></div><div class="cardpad"><div class="kicker">${v.sub}</div><h3>${v.titulo}</h3><p>${v.nota}</p></div></article>`).join('');
    return `<section class="section"><div class="sectionhead"><div><h2>DESTAQUES EM VÍDEO · SEMANA 1</h2><p>Registros textuais simulados • sem reprodução de vídeo real</p></div></div><div class="grid">${vids}</div></section>`;
  }
  if(page==='jornal.html')return `<section class="section"><div class="sectionhead"><div><h2>EDIÇÃO DA SEMANA 1</h2><p>04/01 a 10/01/2027 · Fechamento oficial</p></div></div><div class="feature"><article class="card"><div class="placeholder" style="min-height:250px"><div class="symbol">FR</div><small>Manchete da Semana 1</small></div><div class="cardpad"><div class="label">Manchete principal</div><h3 style="font-size:34px;margin-top:18px">JOTAPÊ ABRE 2027 COM DOIS TÍTULOS; POETA GABRIELA LEVA A JAMÁLIA E LNF DEFINE 60 CLASSIFICADOS</h3><p>Neo, Jotapê e Kant vencem a Aldeia por 3×0; Jotapê leva o Coliseu por 2×1; Guri vence o Ana Rosa por 2×1; Youngui leva a Norte por 2×0; Poeta Gabriela é campeã inaugural da Jamália em Curitiba (4V–0D); e SP, RJ e DF classificam 20 MCs cada para a LNF.</p></div></article><div class="card cardpad"><div class="label">Nesta edição</div><h3>COBERTURA OFICIAL · SEMANA 1</h3><p><strong>Campeões:</strong> Neo, Jotapê e Kant (Aldeia); Jotapê (Coliseu); Guri (Ana Rosa); Youngui (Norte); Poeta Gabriela (Jamália).</p><hr style="border:0;border-top:1px solid #333"><p><strong>Principais resultados:</strong> Finais em 3×0, 2×1, 2×1, 2×0 e 2×1; Seletivas LNF com 60 classificados e 36 eliminados.</p><hr style="border:0;border-top:1px solid #333"><p><strong>Momentos autorizados:</strong> Quatro vitórias seguidas por 2×1 de Poeta Gabriela na Jamália e repescagens decisivas na LNF.</p><hr style="border:0;border-top:1px solid #333"><p><strong>Panorama das competições:</strong> Grade semanal de janeiro de 2027 (04/01 a 10/01) integralmente registrada.</p><p class="fine">Apenas a edição mais recente ficará disponível nesta página.</p></div></div></section>`;
  if(page==='calendario.html')return `<section class="section"><div class="sectionhead"><div><h2>HISTÓRICO DE 2027</h2><p>Somente eventos concluídos e oficialmente registrados</p></div></div><div class="card cardpad" style="max-width:850px;margin:auto"><div class="calendarbar"><button id="prevmonth" aria-label="Mês anterior">❮</button><h2 id="monthname">JANEIRO 2027</h2><button id="nextmonth" aria-label="Próximo mês">❯</button></div><div class="week" id="calendar"></div><p class="fine" style="margin-top:20px">Os símbolos das casas e competições aparecerão nos dias de eventos concluídos. Ao clicar, abrirão a página oficial correspondente.</p></div></section>`;
  return '';
}

if(current==='calendario.html'){
  let m=0;
  const months=['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO'];
  function draw(){
    document.getElementById('monthname').textContent=months[m]+' 2027';
    let first=new Date(2027,m,1).getDay(),count=new Date(2027,m+1,0).getDate();
    const daysHtml = Array.from({length:count},(_,i)=>{
      const dayNum = i+1;
      const ev = WEEK1_CALENDAR_EVENTS[`2027-${m+1}-${dayNum}`];
      if(ev){
        return `<a class="day" href="${ev.href}" title="${ev.title}" style="display:flex;flex-direction:column;justify-content:space-between;border-color:#f3c54c;background:#1d1910"><span>${dayNum}</span><small style="color:#f3c54c;font-weight:800;font-size:10px;line-height:1.15">${ev.label}</small></a>`;
      }
      return `<div class="day">${dayNum}</div>`;
    }).join('');
    document.getElementById('calendar').innerHTML=['DOM','SEG','TER','QUA','QUI','SEX','SÁB'].map(d=>`<div class="weekday">${d}</div>`).join('')+Array.from({length:first},()=>'<div class="day outside"></div>').join('')+daysHtml;
    document.getElementById('prevmonth').disabled=m===0;
    document.getElementById('nextmonth').disabled=m===11;
  }
  document.getElementById('prevmonth').onclick=()=>{m--;draw()};
  document.getElementById('nextmonth').onclick=()=>{m++;draw()};
  draw();
}

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
