//Código del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
  "Las caracteristicas del triangulo son: " +
    ladoTriangulo1 +
    "cm lado1, " +
    ladoTriangulo2 +
    "cm lado2, " +
    baseTriangulo +
    "cm base del triangulo y " +
    alturaTriangulo +
    "cm su altura."
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm.");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Área del triangulo es: " + areaTriangulo + "cm.");
console.groupEnd();

//codigo del circulo
console.group("Circunferencia");
const radioCir = 2;
const pi = Math.PI;

const diametroCir = 2 * radioCir;
const perimetroCir = 2 * pi * radioCir;
const areaCir = pi * (radioCir * radioCir);

console.log("PI es: " + pi);

console.log(
  "Propiedades de la Circunferencia: radio: " +
    radioCir +
    "cm, Diámetro: " +
    diametroCir +
    "cm, Perímetro: " +
    perimetroCir +
    "cm y Área: " +
    areaCir +
    "cm^2"
);
console.groupEnd();
