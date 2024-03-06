const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPar(n) {
    const r = n%2==0;
    return r;
}

rl.question('Ingresa un numero: ', (num1) => {
      const numero1 = parseFloat(num1);

      if (!isNaN(numero1)) {
        const resultado = esPar(numero1);
        if (!isNaN(resultado)) {
          console.log(`El numero es:`, resultado ? "par" : "impar");
        } else {
          console.log('Operación no válida.');
        }
      } else {
        console.log('Por favor, ingresa números válidos.');
      }
      rl.close();
});

