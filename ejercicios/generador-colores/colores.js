console.log("¡Script del Generador de Colores cargado!");

// ==========================================================================
//  EJERCICIO 1: GENERADOR DE COLORES RGB ALEATORIOS
// ==========================================================================
const body = document.querySelector('body');
const displayColorRGB = document.querySelector('#color-displey-rgb');
const botonCambiarColor = document.querySelector('btn-cambiar-color');



// --- PASO 2: CREAR LA FUNCIÓN PARA GENERAR UN COLOR ---
// Guía Lógica:
// 1. Define una función `generarColorAleatorioRGB`. No necesita parámetros.
// 2. Dentro, crea tres variables (rojo, verde, azul).
// 3. A cada variable, asígnale un número aleatorio entero entre 0 y 255.
//    (Pista: Math.floor(Math.random() * 256)).
// 4. La función debe DEVOLVER (return) un string con el formato "rgb(rojo, verde, azul)".
//    (Pista: Usa Template Literals: `rgb(${rojo}, ${verde}, ${azul})`).

function generarColorAleatorioRGB(){
    let rojo;
    let verde;
    let azul;
    
}