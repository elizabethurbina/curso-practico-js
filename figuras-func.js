function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado(5) + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado(5) + "cm");

//codigo Triangulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo es: " + perimetroTriangulo(5,5,4) + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//console.log("El área del triangulo es: " + areaTriangulo(5,5,4) + "cm");

// circunferencia

const pi = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

function areaCirculo(radio) {
  return radio * radio * pi;
}

//Interacción con html
//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("InputLado1");
  const lado1 = parseInt(input1.value);

  const input2 = document.getElementById("InputLado2");
  const lado2 = parseInt(input2.value);

  const input = document.getElementById("InputBase");
  const base = parseInt(input.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputB = document.getElementById("InputBase");
  const base = parseInt(inputB.value);
  const inputA = document.getElementById("InputAltura");
  const altura = parseFloat(inputA.value);

  const area = areaTriangulo(base, altura);
  alert(area);
}

//circunferencia
function calcularDiametroCirculo() {
  const input = document.getElementById("InputRadio");
  const radio = parseInt(input.value);

  const diametro = diametroCirculo(radio);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputRadio");
  const radio = parseInt(input.value);

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputRadio");
  const radio = parseInt(input.value);

  const area = areaCirculo(radio);
  alert(area);
}
