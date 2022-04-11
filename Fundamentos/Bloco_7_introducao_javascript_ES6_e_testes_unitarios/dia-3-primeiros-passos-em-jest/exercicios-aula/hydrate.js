const contaBebidas = (pedido) => {
  let numeroDeBebidas = 0;
  for (let index = 0; index < pedido.length; index += 1) {
    if (isNaN(parseInt(pedido[index])) === false) {
      numeroDeBebidas += parseInt(pedido[index]);
    }
  }
  return numeroDeBebidas;
};

const hydrate = (pedido) => {
  let numeroDeBebidas = contaBebidas(pedido);
  let sugestaoDeAguas;

  if (numeroDeBebidas > 1) {
    sugestaoDeAguas = `${numeroDeBebidas} copos de água`;
  } else {
    sugestaoDeAguas = `${numeroDeBebidas} copo de água`;
  }
  return sugestaoDeAguas;
};

module.exports = hydrate;
