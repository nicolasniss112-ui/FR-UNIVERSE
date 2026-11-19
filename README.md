# FR UNIVERSE 2027

Primeira versão visual do portal fictício de batalhas de rima **FR Universe 2027**.

## O que está incluído
- Nove páginas HTML com navegação funcional.
- Design responsivo preto, dourado e branco.
- Calendário mensal navegável de 2027, ainda sem eventos.
- Estados vazios para rankings, MCs, Rimagram, RimaTube e Jornal do Rap.
- Nenhum resultado, campeão ou confronto fictício inventado.

## Como visualizar
Abra `index.html` no navegador ou use uma extensão de servidor local (Live Server).

## Publicar pelo GitHub Pages
1. Crie um repositório no GitHub (por exemplo, `fr-universe`).
2. Faça upload de **todos os arquivos** deste diretório na raiz do repositório.
3. Vá a **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, branch **main** e pasta **/(root)**. Salve.
5. Aguarde a publicação e acesse a URL indicada pelo GitHub.

## Próximas etapas
- Importação dos 170 cadastros válidos do elenco oficial (172 posições, duas exclusões).
- Banco de dados, validação e atualização de resultados.
- Páginas detalhadas de casas, edições, competições e MCs.
- Automatização de rankings e conteúdos autorizados.

**Nota:** esta versão é apenas front-end estático, sem persistência de dados. Conteúdos simulados devem permanecer identificados como tais. Não publique informações pessoais de MCs sem avaliar a necessidade e autorização.


## Versão 2 — Cadastro de MCs
- A página `mcs.html` carrega `mcs-data.json` com **172 posições históricas do cadastro**, sendo **170 MCs válidos** e **2 excluídos**.
- Os excluídos (Cebolinha e Nando) permanecem apenas no arquivo de dados, não aparecem como perfis públicos.
- Busca por nome e aliases, filtro por estado/natureza, fichas individuais e estatísticas 2027 zeradas.
- Os 5 personagens fictícios iniciais estão identificados internamente e nos cartões.
- Atributos desconhecidos não foram inventados. Não há resultados importados.
- Envie **todos os arquivos do ZIP** para a raiz do repositório GitHub, substituindo os de mesmo nome.
- `mcs-data.json` é indispensável para a página de MCs.
- Esta versão ainda é estática: os dados são publicados via GitHub Pages, sem banco de dados.
