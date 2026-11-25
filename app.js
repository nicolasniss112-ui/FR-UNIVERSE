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
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg) dlg.close();
    });
  }
  return dlg;
}

function openEdicoesModal(tituloTopo, nomeItem, subItem, listaEdicoes) {
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
}
