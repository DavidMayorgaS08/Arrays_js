const numeros = [];

while(true){  
    const num = (parseInt(prompt("Ingrese un número")));
    if(num > 0){
        numeros.push(num);
    }else{
        break
    }
}

let mayor = 0;
let menor = 0;
let suma = 0;


for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }else{
        menor = numeros[i];
    }

    suma = suma + numeros[i];
}

console.log(`El número mayor es ${mayor}`);
console.log(`El número menor es ${menor}`);
console.log(`La media de los números es ${suma / numeros.length}`);