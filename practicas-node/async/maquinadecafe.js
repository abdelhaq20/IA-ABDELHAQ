// Función que simula calentar el agua de manera asíncrona
function calentarAgua() {
    console.log("Calentando agua...");
   
    // Simulamos un tiempo de calentamiento del agua (5 segundos)
    setTimeout(function() {
        console.log("Agua caliente!");
    }, 5000);
}
 
// Función que simula servir el café de manera síncrona
function servirCafe() {
    console.log("Sirviendo café... ¡Listo para disfrutar!");
}
 
 
// Uso de las funciones
calentarAgua();
servirCafe();
 
//Callback
function calentarAguaCall(callback) {
    console.log("Calentando agua...");
    setTimeout(function() {
        console.log("Agua caliente!");
        callback(); // Llamada al callback cuando el agua está caliente
    }, 5000);
}
 
// Uso de las funciones con callbacks
calentarAguaCall(function() {
    servirCafe();
});
 
 
//Promesas
function calentarAgua() {
    console.log("Calentando agua...");
    // Devolvemos una nueva promesa
    return new Promise(function(resolve) {
        // Simulamos un tiempo de calentamiento del agua (2 segundos)
        setTimeout(function() {
            console.log("Agua caliente!");
            resolve(); // Resolvemos la promesa cuando el agua está caliente
        }, 2000);
    });
}
 
// Uso de las funciones con Promesas
calentarAgua().then(function() {
    servirCafe();
});
 
//Async/await.
// Función que devuelve una promesa para calentar el agua de manera asíncrona
function calentarAgua() {
    console.log("Calentando agua...");
    // Devolvemos una nueva promesa
    return new Promise(function(resolve) {
        // Simulamos un tiempo de calentamiento del agua (5 segundos)
        setTimeout(function() {
            console.log("Agua caliente!");
            resolve(); // Resolvemos la promesa cuando el agua está caliente
        }, 5000);
    });
}
 
 
// Función principal usando async/await
async function hacerCafe() {
    await calentarAgua(); // Esperamos a que el agua esté caliente
    servirCafe();
}
 
// Llamada a la función principal
hacerCafe();
   
//Callback console.log("Inicio del programa... de BEATRIZ CLEMENTE RAMOS
//Callback
console.log("Inicio del programa");
 
// Función de inicio de sesión con callback
function iniciarSesionCallback(usuario, contrasena, callback) {
    setTimeout(() => {
        if (usuario === "usuario" && contrasena === "contrasena") {
            callback(null, "Inicio de sesión exitoso");
        } else {
            callback("Credenciales incorrectas", null);
        }
    }, 2000);
}
 
iniciarSesionCallback("usuario", "contrasena", (error, mensaje) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log(mensaje);
    }
});