const matriz = [
    { valor: 10 },
    { valor: 20 },
    { valor: 30 }
];

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i].valor;
}

console.log('La suma de los valores es:', suma);
