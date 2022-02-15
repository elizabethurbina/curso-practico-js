//Funciones Helpers
function esPar(numerito) {
  return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, newValor) {
    return valorAcumulado + newValor;
  });

  let promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//Calcular Mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

//Mediana General

const salaryCol = colombia.map(function (persona) {
  return persona.salary;
});

const salaryColSorted = salaryCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneralColombia = medianaSalarios(salaryColSorted);

//Mediana del Top 10%
const spliceStart = (salaryColSorted.length * 90) / 100;
const sapliceCount = salaryColSorted.length - spliceStart;
const salariosColTop10 = salaryColSorted.splice(spliceStart, sapliceCount);

const medianaTop10col = medianaSalarios(salariosColTop10);

console.log(medianaGeneralColombia, medianaTop10col);
