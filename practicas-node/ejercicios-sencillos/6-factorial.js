const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}



rl.question('Ingresa un numero: ', (num1) => {
      const numero1 = parseFloat(num1);

      if (!isNaN(numero1)) {
        const resultado = factorial(numero1);
        if (!isNaN(resultado)) {
          console.log(`El factorial de ${num1} es: ${resultado}`);
        } else {
          console.log('Operación no válida.');
        }
      } else {
        console.log('Por favor, ingresa números válidos.');
      }
      rl.close();
});

