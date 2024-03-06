const matriz = [
    [1, 3, 5],
    [7, 9, 11],
    [13, 15, 17]
];

// Encontrar el número más grande
const maximo = Math.max(...matriz.flat());

console.log("El número más grande en la matriz es:", maximo);