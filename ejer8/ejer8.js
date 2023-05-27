const Original = [1, 2, 3, 4, 5];
const Invertido = [];

for (let i = Original.length - 1; i >= 0; i--) {
  Invertido.push(Original[i]);
}

console.log(`Array original: ${Original}`);
console.log(`Array invertido: ${Invertido}`);