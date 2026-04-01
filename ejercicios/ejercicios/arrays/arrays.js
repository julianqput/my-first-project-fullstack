// ==========================================================================
//  TEMA 8: Arrays (Listas) - Guardando Colecciones de Datos
// ==========================================================================
// Hasta ahora, cada variable guardaba un solo dato. Un array es como un
// archivador: una sola variable que contiene múltiples "cajones" numerados,
// y en cada cajón podemos guardar un dato.

// --- ¿Cómo se crea un Array? ---
// Simplemente usamos corchetes `[]` y separamos cada elemento con una coma.

const frutas = ["Manzana","Banana","Cereza","Fresa"];

console.log("Mi lista de frutas: ",frutas);

// --- ¿Cómo accedemos a los elementos? ---
// Usamos el "índice" del cajón. ¡MUY IMPORTANTE: los índices siempre empiezan en 0!
// El primer elemento es el índice 0, el segundo es el 1, y así sucesivamente.

const primeraFruta = frutas[0]; // Accedemos al primer elemento (índice 0)
console.log("La tercera fruta es: ",primeraFruta); //Muestra "Manzana"

const tercerFruta = frutas[2]; // Accedemos al tercer elemento (índice 2)
console.log("La tercera fruta es:", tercerFruta); // Muestra "Cereza"

// --- ¿Cómo sabemos cuántos elementos hay? La propiedad .length ---
// La propiedad `.length` nos devuelve el número total de elementos en el array.

const ultimaFruta = frutas[frutas.length - 1];
console.log("La última fruta de la lista es: ", ultimaFruta); //Muestra "Fresa"

// ==========================================================================
//  ¡TUS EJERCICIOS!
// ==========================================================================

// --- Ejercicio 1: Tu Lista de Tareas ---
// 1. Crea una constante llamada `misTareas` y asígnale un array con tres tareas
//    en formato string: "Hacer café", "Estudiar JS", "Ir al gimnasio".
// 2. Muestra el array completo en la consola.
// 3. Accede al primer elemento del array ("Hacer café") y muéstralo en la consola
//    con el mensaje: "Mi primera tarea de hoy es: [la tarea]".
// 4. Accede al último elemento del array ("Ir al gimnasio") usando la fórmula
//    de `.length - 1` y muéstralo en la consola con el mensaje:
//    "Mi última tarea de hoy es: [la tarea]".

console.log("\n--- Ejercicio 1: Lista de Tareas ---");

const misTareas = ["Hacer café","Estudiar JS","Ir al gimnasio"];
console.log("Estas son mis tareas: ", misTareas);

const miPrimerTarea = misTareas[0];
console.log("Mi primer tarea de hoy es:",miPrimerTarea);

const miUltimaTarea = misTareas[misTareas.length - 1];
console.log("Mi ultima tarea de hoy es: ",miUltimaTarea);

// --- Ejercicio 2: Puntuaciones de un Juego ---
// 1. Crea una constante `puntuaciones` y asígnale un array con 5 números: 150, 220, 95, 310, 180.
// 2. Muestra en la consola cuántas partidas se han jugado (el total de elementos en el array).
// 3. Muestra en la consola la puntuación de la segunda partida (índice 1).
// 4. Crea una nueva constante `sumaPuntos` y asígnale la suma de la primera y la quinta puntuación.
// 5. Muestra el resultado de `sumaPuntos` en la consola.

console.log("\n--- Ejercicio 2: Puntuaciones ---");

const puntuaciones = [150,220,95,310,180];

console.log("Total de partidas jugadas: ",puntuaciones.length);

const segundaPartida = puntuaciones[1];
console.log("La puntuacion de la segunda partida es: ",segundaPartida);

const sumaPuntos = puntuaciones[0]+puntuaciones[4];
console.log("Esta es la suma de la primera y la quinta puntuacion: ",sumaPuntos);