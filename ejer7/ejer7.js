const notas = [];
const nombres = [];

let n = 1;

while (n <= 10) {
  const nota = parseFloat(prompt(`Nota del estudante ${n}`));
  if (nota >= 0 && nota <= 10) {
    const nombre = prompt("Nombre del estudiante");
    notas.push(nota);
    nombres.push(nombre);

    n = n + 1;
  } else {
    alert("Nota invalida, ingrese una nota valida entre 0 y 10");
  }
}

const resultados = [];
for (let i = 0; i < notas.length; i++) {
  let resultado;
  if (notas[i] >= 0 && notas[i] <= 4.99) {
    resultado = "suspenso";
  } else if (notas[i] >= 5 && notas[i] <= 6.99) {
    resultado = "bien";
  } else if (notas[i] >= 7 && notas[i] <= 8.99) {
    resultado = "notable";
  } else {
    resultado = "sobresaliente";
  }
  resultados.push(resultado);
}

for (let i = 0; i < notas.length; i++) {
  console.log(`El estudiante ${nombres[i]}, tiene una nota de ${notas[i]} y su resultado es ${resultados[i]}`);
}

