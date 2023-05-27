const limite = parseInt(prompt("Cuantos números va a agregar en cada array"));

const A = [];
const B = [];

alert("Ingrese los números del array 1");

for(let i = 1; i <= limite; i++){
    A.push(parseInt(prompt(`Ingrese el número ${i}`)));
}

alert("Ingrese los números del array 2");

for(let i = 1; i <= limite; i++){
    B.push(parseInt(prompt(`Ingrese el número ${i}`)));
}

const resultado = [];

for(let i = 0; i < A.length; i ++){
    resultado.push(A[i]);
    resultado.push(B[i]);
}

console.log(resultado);