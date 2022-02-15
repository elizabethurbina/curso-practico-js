// codigo Promedio
function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(function (valorAcumulado = 0, newValor) {
    return valorAcumulado + newValor;
  });

  let promedioLista = sumaLista / lista.length;
  return promedioLista;
}
// console.log(calcularMediaAritmetica([100, 720, 500, 200])); PRUEBA

// codigoi Mediana
function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(arreglo) {
  arreglo.sort((a, b) => a - b);
  const mitadArreglo = parseInt(arreglo.length / 2);

  let mediana;

  if (esPar(arreglo.length)) {
    const elemento1 = arreglo[mitadArreglo - 1];
    const elemento2 = arreglo[mitadArreglo];
    const promedioE1E2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioE1E2;
  } else {
    mediana = arreglo[mitadArreglo];
  }
  return mediana;
}

// console.log(
//   "La Función calcular mediana es" +
//     calcularMediana([500, 600, 200, 100, 300, 400])  CODIGO PRUEBA
// );

// codigo Moda

function calcularModa(listaNumeros) {
  const conteoLista = {};

  listaNumeros.map(function (elemento) {
    if (conteoLista[elemento]) {
      conteoLista[elemento] = conteoLista[elemento] + 1; //+=
    } else {
      conteoLista[elemento] = 1;
    }
  });
  const newLista = Object.entries(conteoLista).sort((a, b) => a[1] - b[1]);
  const moda = newLista[newLista.length - 1];

  return moda;
}

// console.log("Arreglo Original: " + listaNumeros);
// console.log("El nuevo objeto es: " + Object.values(conteoLista));
// console.log("El arreglo ordenado es: " + newLista);
