function calcularPrecioDescontado(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioconDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioconDescuento;
}

function onclickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const price = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discount = inputDiscount.value;

  const PrecioDescontado = calcularPrecioDescontado(price, discount);

  const resultado = document.getElementById("ResultP");
  resultado.innerText = "El precio con descuento es: $ " + PrecioDescontado;
}

// const precioOriginal = 120;
// const descuento = 18;
// const porPrecioDescuento = 100 - descuento;
// const precioFin = (precioOriginal * porPrecioDescuento) / 100;
// console.log({
//   precioOriginal,
//   descuento,
//   porPrecioDescuento,
//   precioFin,
// });
