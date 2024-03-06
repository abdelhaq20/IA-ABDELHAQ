const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const realizarOperacion = (num1, num2, operacion) => {
  switch (operacion) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
        if(num2!=0)
            return num1 / num2;
        else
            return NaN
    default:
      return NaN;
  }
};

rl.question('Ingresa el primer número: ', (num1) => {
  rl.question('Ingresa el segundo número: ', (num2) => {
    rl.question('Ingresa la operación (+, -, *, /): ', (operacion) => {
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);

      if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = realizarOperacion(numero1, numero2, operacion);
        if (!isNaN(resultado)) {
          console.log(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
        } else {
          console.log('Operación no válida.');
        }
      } else {
        console.log('Por favor, ingresa números válidos.');
      }
      rl.close();
    });
  });
});
