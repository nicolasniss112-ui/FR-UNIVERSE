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

function renderSeletorSemanas(onChange) {
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

  return `
    <div class="fr-week-dock">
      <div class="fr-week-copy">
        <strong>Semanas do FR Universe 2027</strong>
        <span>Semana 2 em destaque · Semana 1 disponível para edição futura</span>
      </div>
      <div class="fr-week-group">${botoes}</div>
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
      rerenderFn();
    });
  });
}
