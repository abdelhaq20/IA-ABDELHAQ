const alumnos = [
    { nombre: 'Juan', nota: 8 },
    { nombre: 'María', nota: 5 },
    { nombre: 'Pedro', nota: 3 },
    { nombre: 'Ana', nota: 9 },
    { nombre: 'Luis', nota: 6 },
];

const nuevasNotasSuspensos = [
    { nombre: 'María', nota: 6 },
    { nombre: 'Pedro', nota: 4 },
];

let aprobados = 0;
let suspendidos = 0;

// Calcular cantidad de aprobados y suspendidos
alumnos.forEach(alumno => {
    if (alumno.nota >= 5) {
        aprobados++;
    } else {
        suspendidos++;
    }
});


console.log(`Cantidad de alumnos aprobados: ${aprobados}`);
console.log(`Cantidad de alumnos suspendidos: ${suspendidos}`);

// Calcular porcentaje de suficientes, notables y sobresalientes
const suficientes = alumnos.filter(alumno => alumno.nota >= 5 && alumno.nota < 6).length;
const notables = alumnos.filter(alumno => alumno.nota >= 6 && alumno.nota < 9).length;
const sobresalientes = alumnos.filter(alumno => alumno.nota >= 9).length;

const totalAlumnos = alumnos.length;
const porcentajeSuficientes = (suficientes / totalAlumnos) * 100;
const porcentajeNotables = (notables / totalAlumnos) * 100;
const porcentajeSobresalientes = (sobresalientes / totalAlumnos) * 100;

console.log(`Porcentaje de suficientes: ${porcentajeSuficientes.toFixed(2)}%`);
console.log(`Porcentaje de notables: ${porcentajeNotables.toFixed(2)}%`);
console.log(`Porcentaje de sobresalientes: ${porcentajeSobresalientes.toFixed(2)}%`);

// Modificar notas de los suspendidos
nuevasNotasSuspensos.forEach(nuevaNota => {
    const suspendido = alumnos.find(alumno => alumno.nombre === nuevaNota.nombre && alumno.nota < 6);
    if (suspendido) {
        suspendido.nota = nuevaNota.nota;
    }
});

console.log('Notas actualizadas de los suspendidos:');
console.log(alumnos);
