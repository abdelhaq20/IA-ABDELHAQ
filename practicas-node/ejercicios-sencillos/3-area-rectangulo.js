const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaRectangulo(base, altura) {
    const area = base * altura;
    return area;
}

rl.question('Ingresa la base: ', (num1) => {
  rl.question('Ingresa la altura: ', (num2) => {
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);

      if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = calcularAreaRectangulo(numero1, numero2);
        if (!isNaN(resultado)) {
          console.log(`El área del rectángulo es: ${resultado}`);
        } else {
          console.log('Operación no válida.');
        }
      } else {
        console.log('Por favor, ingresa números válidos.');
      }
      rl.close();
  });
});

