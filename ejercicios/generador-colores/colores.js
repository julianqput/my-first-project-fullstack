console.log("¡Script del Generador de Colores cargado!");

// ==========================================================================
//  EJERCICIO 1: GENERADOR DE COLORES RGB ALEATORIOS
// ==========================================================================
const body = document.querySelector('body');
const displayColorRGB = document.querySelector('#color-display-rgb');
const botonCambiarColor = document.querySelector('#btn-cambiar-color');



// --- PASO 2: CREAR LA FUNCIÓN PARA GENERAR UN COLOR ---
// Guía Lógica:
// 1. Define una función `generarColorAleatorioRGB`. No necesita parámetros.
// 2. Dentro, crea tres variables (rojo, verde, azul).
// 3. A cada variable, asígnale un número aleatorio entero entre 0 y 255.
//    (Pista: Math.floor(Math.random() * 256)).
// 4. La función debe DEVOLVER (return) un string con el formato "rgb(rojo, verde, azul)".
//    (Pista: Usa Template Literals: `rgb(${rojo}, ${verde}, ${azul})`).

// --- PASO 2: CREAR LA FUNCIÓN PARA GENERAR UN COLOR ---
function generarColorAleatorioRGB() {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
    return `rgb(${rojo}, ${verde}, ${azul})`;
}

// --- PASO 3: AÑADIR EL EVENTO AL BOTÓN ---
botonCambiarColor.addEventListener('click', function() {
    const nuevoColor = generarColorAleatorioRGB();
    body.style.backgroundColor = nuevoColor;
    displayColorRGB.textContent = nuevoColor;
});

// ==========================================================================
//  EJERCICIO 2: SELECCIONAR UN COLOR DE UNA PALETA
// ==========================================================================

// --- PASO 1: DATOS Y SELECCIÓN DE ELEMENTOS ---

const paletaDeColores = [
    { nombre: "Rojo Pasión", hex: "#e74c3c" },
    { nombre: "Azul Océano", hex: "#3498db" },
    { nombre: "Verde Bosque", hex: "#2ecc71" },
    { nombre: "Amarillo Sol", hex: "#f1c40f" },
    { nombre: "Morado Real", hex: "#9b59b6" }
];

const displayColorPaleta = document.querySelector('#color-display-paleta');
const botonColorPaleta = document.querySelector('#btn-color-paleta');

// --- PASO 2: AÑADIR EL EVENTO AL SEGUNDO BOTÓN ---

// --- PASO 2: AÑADIR EL EVENTO AL SEGUNDO BOTÓN ---
botonColorPaleta.addEventListener('click', function() {
    // a. Genera un ÍNDICE aleatorio que sea válido para el array `paletaDeColores`.
    const indiceAleatorio = Math.floor(Math.random() * paletaDeColores.length);

    // b. Usa ese índice para seleccionar un objeto de color del array.
    const colorSeleccionado = paletaDeColores[indiceAleatorio];

    // c. Actualiza el color de fondo del `body` usando el código hexadecimal del color.
    body.style.backgroundColor = colorSeleccionado.hex;
    
    // d. Actualiza el texto del `displayColorPaleta` para mostrar el nombre del color.
    displayColorPaleta.textContent = colorSeleccionado.nombre;
});
