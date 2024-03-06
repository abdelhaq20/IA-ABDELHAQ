const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function arraydepares(n) {
    let array = [];
    for (let i = n; i >= 0; i--) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    return array;
}

rl.question('Ingresa un numero: ', (num1) => {
      const numero1 = parseFloat(num1);

      if (!isNaN(numero1)) {
        const resultado = arraydepares(numero1);
        if (resultado) {
          console.log(`Array de pares :`, resultado);
        } else {
          console.log('Operación no válida.');
        }
      } else {
        console.log('Por favor, ingresa números válidos.');
      }
      rl.close();
});

