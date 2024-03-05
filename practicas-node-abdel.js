const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//Ejemplo:
console.log("Escribe tu nombre:");
const stdin = process.openStdin();
 
stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    process.exit();
})

////////////////////////////////////////////////////

//1. 10 numeros ingresados por el usuario

let numeros = [];
let contador=1;

const leerNumeros = () => {
  rl.question('Ingresa un número del 1 al 10 (o "fin" para terminar): ', (numero) => {
    if (numero.toLowerCase() === 'fin' | contador>=10) {
      calcularSumaPares();
      rl.close();
    } else {
      const num = parseInt(numero);
      if (!isNaN(num) && num >= 1 && num <= 10) {
        numeros.push(num);
        contador++;
      } else {
        console.log('Por favor, ingresa un número válido del 1 al 10.');
      }
      leerNumeros(); 
    }
  });
};


const calcularSumaPares = () => {
  let sumaPares = 0;
  numeros.forEach(numero => {
    if (numero % 2 === 0) {
      sumaPares += numero;
    }
  });
  console.log('La suma de los números pares es:', sumaPares);
};

console.log('Ingresa los números del 1 al 10. Cuando termines, escribe "fin".');
leerNumeros();


//2. positvo negativo o 0
rl.question('Ingresa un número: ', (numero) => {
  const num = parseFloat(numero);

  if (isNaN(num)) {
    console.log('Por favor, ingresa un número válido.');
  } else if (num > 0) {
    console.log('El número', num, 'es positivo.');
  } else if (num < 0) {
    console.log('El número', num, 'es negativo.');
  } else {
    console.log('El número es 0.');
  }

  rl.close();
});


//3. dia con numero
rl.question('Ingresa un número del 1 al 7: ', (numero) => {
  const dia = parseInt(numero);

  switch (dia) {
    case 1:
      console.log('Lunes');
      break;
    case 2:
      console.log('Martes');
      break;
    case 3:
      console.log('Miércoles');
      break;
    case 4:
      console.log('Jueves');
      break;
    case 5:
      console.log('Viernes');
      break;
    case 6:
      console.log('Sábado');
      break;
    case 7:
      console.log('Domingo');
      break;
    default:
      console.log('Número inválido. Ingresa un número del 1 al 7.');
  }
rl.close();
});


//4.los primeros 10 números impares

function imprimirNumerosImpares() {
  let contador = 0;
  let numero = 1;

  console.log("Los primeros 10 números impares son:");

  while (contador < 10) {
    if (numero % 2 !== 0) {
      console.log(numero);
      contador++;
    }
    numero++;
  }
}
imprimirNumerosImpares();


//5. los primeros 10 números impares

function imprimirNumerosPares() {
  let contador = 0;
  let numero = 2;

  console.log("Los primeros 10 números pares son:");

  while (contador < 10) {
    console.log(numero);
    contador++;
    numero += 2;
  }
}

imprimirNumerosPares();


//6.numero primo

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

rl.question('Ingrese un número: ', (numero) => {
  numero = parseInt(numero);

  if (esPrimo(numero)) {
    console.log(`${numero} es un número primo.`);
  } else {
    console.log(`${numero} no es un número primo.`);
  }

  rl.close();
});

