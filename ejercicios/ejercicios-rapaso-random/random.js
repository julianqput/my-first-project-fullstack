// ==========================================================================
//  GUÍA RÁPIDA: LA FÓRMULA MÁGICA
// ==========================================================================
//
// La fórmula para generar un número entero aleatorio entre un MÍNIMO y un MÁXIMO (ambos incluidos) es:
// Math.floor(Math.random() * (max - min + 1)) + min
//
// ==========================================================================
 console.log("--- Eejrcicios de Números Aleatorios ---");

// ==========================================================================
//  EJERCICIO 1 (Dificultad: Básica): Simular el Lanzamiento de un Dado
//  - Problema: Genera un número aleatorio que represente el lanzamiento
//    de un dado estándar de 6 caras (los resultados posibles son 1, 2, 3, 4, 5 o 6).
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Necesitas un número entre 1 (mínimo) y 6 (máximo).
// 2. Usa la "fórmula mágica": Math.random() * (6 - 1 + 1) + 1.
//    - (6 - 1 + 1) es 6. Así que la fórmula se simplifica a: Math.random() * 6.
//    - Esto te dará un número decimal entre 0 y 5.999...
// 3. Usa Math.floor() para redondearlo hacia abajo. Obtendrás un entero entre 0 y 5.
// 4. Súmale 1 al resultado para cambiar el rango de 0-5 a 1-6.
// 5. Guarda el resultado en una constante y muéstralo en la consola.

console.log("\n--- Ejercicio 1: Lanzamiento de un Dado ---");

const resultadoDado = Math.floor(Math.random() * 6) + 1;
console.log(`El resultado del dado es: ${resultadoDado}`);

// ==========================================================================
//  EJERCICIO 2 (Dificultad: Intermedia): Generador de Números en un Rango
//  - Problema: Crea una FUNCIÓN llamada `generarNumeroAleatorio` que reciba
//    dos parámetros: `min` y `max`. La función debe devolver un número
//    entero aleatorio entre `min` y `max` (ambos incluidos).
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función `generarNumeroAleatorio` que acepte dos parámetros: `min` y `max`.
// 2. Dentro de la función, aplica la "fórmula mágica" que está al principio de este archivo,
//    usando los parámetros `min` y `max` que recibe la función.
// 3. La función debe DEVOLVER (return) el número calculado.
// 4. Fuera de la función, llama a tu nueva "máquina" varias veces con diferentes
//    rangos (ej: entre 10 y 20, entre 50 y 100) y muestra los resultados en la consola
//    para verificar que funciona.

function generarNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numero1 = generarNumeroAleatorio(10,20);
const numero2 = generarNumeroAleatorio(50,100);

console.log(`Número aleatorio enrtre 10 y 20: ${numero1}`);
console.log(`Número aleatorio entre 50 y 100: ${numero2}`);


// ==========================================================================
//  EJERCICIO 3 (Dificultad: Avanzada): Sorteo de Lotería
//  - Problema: Crea una FUNCIÓN llamada `sorteoLoteria` que reciba tres
//    parámetros: `cantidadNumeros` (cuántos números generar), `min` y `max`.
//  - La función debe devolver un ARRAY con la cantidad de números aleatorios
//    solicitada, asegurándose de que NINGÚN NÚMERO SE REPITA.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define la función `sorteoLoteria` con sus tres parámetros.
// 2. Dentro, crea un array vacío para guardar los números ganadores, ej: `const ganadores = [];`.
// 3. Usa un bucle `while`. La condición del bucle debe ser: "mientras el número de
//    ganadores sea menor que la `cantidadNumeros` que nos pidieron...".
//    (Pista: `while (ganadores.length < cantidadNumeros)`).
// 4. Dentro del `while`, genera un número aleatorio entre `min` y `max` usando la función
//    que creaste en el ejercicio anterior (`generarNumeroAleatorio`).
// 5. Ahora, la parte clave: necesitas verificar si el número que acabas de generar
//    YA ESTÁ en tu array `ganadores`.
//    (Pista: los arrays tienen un método `.includes()` que devuelve `true` o `false`.
//    Usa un `if` para preguntar: `if (!ganadores.includes(numeroGenerado))`).
// 6. Si el número NO está incluido, añádelo a tu array `ganadores` con `.push()`.
// 7. Si el número ya estaba, el `if` será falso y el bucle `while` simplemente dará
//    otra vuelta para generar un nuevo número y volver a intentarlo.
// 8. Después de que el bucle `while` termine, devuelve (return) el array `ganadores`.
// 9. Fuera de la función, pruébala pidiendo 6 números para un sorteo del 1 al 49.

console.log("\n--- Ejercicio 3: Sorteo de Lotería ---");

function sorteoLoteria(cantidadNumeros,min,max){
    const ganadores = [];
    while(ganadores.length<cantidadNumeros){
        const numeroGenerado = generarNumeroAleatorio(min,max);
        if(!ganadores.includes(numeroGenerado)){
            ganadores.push(numeroGenerado);
        }
    }
    return ganadores;
}

const numerosSorteo = sorteoLoteria(6, 1, 49);
console.log(`Los números ganadores del sorteo son: ${numerosSorteo}`);