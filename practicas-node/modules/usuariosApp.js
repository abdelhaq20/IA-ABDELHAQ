const usuarios = require("./usuarios");

function validarContraseña(email, contraseña) {
    const usuario = usuarios.find(usuario => usuario.email === email);

    if (usuario && usuario.password === contraseña) {
        return true;
    } else {
        return false;
    }
}

const email = 'usuario1@example.com';
const contraseña = 'password1';
if (validarContraseña(email, contraseña)) {
    console.log('Contraseña válida.');
} else {
    console.log('Contraseña inválida.');
}