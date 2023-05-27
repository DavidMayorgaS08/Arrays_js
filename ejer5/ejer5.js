const n = [];

let positivos = 0;
let negativos = 0;

let conPos = 0;
let conNeg = 0;

for(let i = 0; i <= 10; i++){
    n.push(parseInt(prompt("Ingrese un número negativo o positivo")));

    if(n[i] > 0){
        positivos = positivos + n[i];
        conPos = conPos + 1;
    }else{
        negativos = negativos + n[i];
        conNeg = conNeg + 1;
    }
}

console.log(`La media de los números postivos es ${positivos / conPos}`);
console.log(`La media de los números Negativos es ${negativos / conNeg}`);
