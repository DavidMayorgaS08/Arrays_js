const num = [];

while(true){
    num.push(parseInt(prompt("Ingrese un número")));

    const rta = prompt("otro número S/N");
    if(rta.toUpperCase() == "N"){
        break        
    }
}

let mayor = 0;
let menor = 0;
let suma = 0;


for(let i = 0; i < num.length; i++){
    if(num[i] > mayor){
        mayor = num[i];
    }else{
        menor = num[i];
    }

    suma = suma + num[i];
}

console.log(`El número mayor es ${mayor}`);
console.log(`El número menor es ${menor}`);
console.log(`La media de los números es ${suma / num.length}`);