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