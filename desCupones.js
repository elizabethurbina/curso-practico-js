function calcularPrecioDescontado(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioconDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioconDescuento;
}

function onclickButtonPriceDiscount() {
  const cupones = ["Especial", "Sorpresa", "Regular"];
  const inputPrice = document.getElementById("InputPrice");
  const price = inputPrice.value;
  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;

  let descuento = 0;

  if (!cupones.includes(cuponValue)) {
    alert("El cupón " + cuponValue + "no es válido");
  } else if (cuponValue === "Especial") {
    descuento = 30;
  } else if (cuponValue === "Sorpresa") {
    descuento = 25;
  } else if (cuponValue === "Regular") {
    descuento = 15;
  }

  const PrecioDescontado = calcularPrecioDescontado(price, descuento);

  const resultado = document.getElementById("ResultP");
  resultado.innerText = "El precio con descuento es: $ " + PrecioDescontado;
}
