const cadena = "hello world";
const fC = {caracter:"",apareciones:0};

for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena[i];
    fC[caracter] = (fC[caracter] || 0) + 1;
}

for (const caracter in fC) {
    console.log(`El carácter '${caracter}' aparece ${fC[caracter]} veces.`);
}
