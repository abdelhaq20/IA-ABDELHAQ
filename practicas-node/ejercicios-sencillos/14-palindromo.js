function esPalindromo(cadena) {
    const limpia = cadena.replace(/\s/g, '').toLowerCase();
    const alReves = limpia.split('').reverse().join('');
    return limpia === alReves;
}

const cadena1 = "anita lava la tina";
const cadena2 = "hello world";

console.log(`"${cadena1}" :`, esPalindromo(cadena1)? "es un palíndromo" : "no es un palíndromo");
console.log(`"${cadena2}" :`, esPalindromo(cadena2)? "es un palíndromo" : "no es un palíndromo");
