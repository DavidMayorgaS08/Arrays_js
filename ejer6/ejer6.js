const n = parseInt(prompt("Número de personas"))

const altura = [];

let suma = 0;

for(let i = 1; i <= n; i++){
    altura .push(parseFloat(prompt(`Altura de la persona ${i}`)));
    suma = suma + altura[i - 1];
}

altMedia = suma / altura.length;

let mayor = 0;
let menor = 0;

for(let i = 0; i < altura.length; i++){
    if(altura[i] > altMedia){
        mayor = mayor + 1;
    }else{
        menor = menor + 1;
    }
}

console.log(`La altura media es ${altMedia}`);
console.log(`Superan la altura media ${mayor}`);
console.log(`No superan la altura media ${menor}`);
