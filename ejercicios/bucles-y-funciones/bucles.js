// ==========================================================================
//  TEMA 9: Bucles 'for' - Repitiendo Tareas en Arrays
// ==========================================================================
// Un bucle 'for' es la herramienta perfecta para "visitar" cada elemento
// de un array y hacer algo con él.

console.log("---Ejemplo de bucle fot---");
const nombres = ["Ana","Juan","Diego","Lucía"];

// Este bucle recorre el array 'nombres'.
// i < nombres.length asegura que el bucle se detenga al llegar al final. 

for(i=0;i<nombres.length;i++){
    // En cada vuelta, 'i' es un número (0, 1, 2, 3).
  // Usamos nombres[i] para acceder al elemento en esa posición.
  console.log(`Hola, ${nombres[i]}!`);

}

// ==========================================================================
//  TEMA 10: Funciones - Creando Bloques de Código Reutilizables
// ==========================================================================
// Una función es como una "máquina" a la que le das una entrada (parámetros)
// y te devuelve una salida (return).

console.log("\n--- Ejemplo de función ---");

// Definimos una función llamada 'sumar' que acepta dos parámetros: a y b.

function sumar(a,b){
    const resultado = a + b;
    return resultado; // 'return' nos devuelve el valor calculado.
}

// Ahora podemos "llamar" o usar nuestra función cuantas veces queramos.
const suma1 = sumar(5,10); //suma1 será 15
const suma2 = sumar(100,200); //suma2 será 300

console.log("El resultado de la primera suma es: ",suma1);
console.log("El resultado de la segunda suma es: ",suma2);


// ==========================================================================
//  ¡TUS NUEVOS EJERCICIOS!
// ==========================================================================

// --- Ejercicio 5 (Dificultad: Fácil): Sumar todos los números de una lista ---
// 1. Crea un array llamado `numeros` con los siguientes valores: [10, 20, 30, 40, 50].
// 2. Crea una variable `let` llamada `sumaTotal` e inicialízala en 0. Esta variable guardará la suma.
// 3. Escribe un bucle `for` que recorra el array `numeros`.
// 4. En cada vuelta del bucle, añade el número actual del array a la variable `sumaTotal`.
//    (Pista: sumaTotal = sumaTotal + numeros[i];)
// 5. Después de que el bucle termine, muestra el valor final de `sumaTotal` en la consola.


console.log("\n--- Ejercicio 5: suma de un Array ---");

const  numeros = [10,20,30,40,50];

let sumaTotal = 0;

for ( i = 0; i < numeros.length;i++){
    sumaTotal = sumaTotal + numeros[i];
}
console.log("Esta es la suma Total:",sumaTotal);

// --- Ejercicio 6 (Dificultad: Media): Encontrar la palabra más larga ---
// 1. Crea un array llamado `palabras` con los siguientes valores: ["hola", "javascript", "programacion", "web"].
// 2. Crea una variable `let` llamada `palabraMasLarga` y asígnale el primer elemento del array (`palabras[0]`).
//    Esta variable guardará la palabra más larga que encontremos.
// 3. Escribe un bucle `for` que recorra el array `palabras` (puedes empezar desde el segundo elemento, índice 1).
// 4. Dentro del bucle, usa un condicional `if` para comparar la longitud de la palabra actual (`palabras[i].length`)
//    con la longitud de `palabraMasLarga` (`palabraMasLarga.length`).
// 5. Si la palabra actual es más larga, actualiza el valor de `palabraMasLarga` con la palabra actual.
// 6. Después del bucle, muestra en la consola: "La palabra más larga es: [palabraMasLarga]".

const palabra = ["hola","javascript","programacion","web"];

let palabraMasLarga = palabra[0];

for( i = 1; i < palabra.length ; i++ ){
    if(palabra[i].length > palabraMasLarga.length)
    {
        palabraMasLarga = palabra[i];
    }
}
console.log(`La palabra más larga es: ${palabraMasLarga}`);


// --- Ejercicio 7 (Dificultad: Media): Crear una función que filtre números pares ---
// Este ejercicio combina todo: funciones, arrays, bucles y condicionales.
// 1. Crea una función llamada `filtrarPares` que acepte un parámetro: `arrayDeNumeros`.
// 2. Dentro de la función, crea un nuevo array vacío llamado `numerosPares`.
// 3. Escribe un bucle `for` que recorra el `arrayDeNumeros` que recibió la función.
// 4. Dentro del bucle, usa un condicional `if` para verificar si el número actual es par.
//    (Pista: usa el operador de módulo `%` que ya conoces).
// 5. Si el número es par, añádelo al final del array `numerosPares`.
//    (Pista: para añadir un elemento a un array, se usa el método .push(). Ejemplo: numerosPares.push(numeroActual);)
// 6. Después del bucle, haz que la función devuelva el array `numerosPares` usando `return`.
// 7. Fuera de la función, crea un array de prueba, por ejemplo: `const misNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`
// 8. Llama a tu función `filtrarPares` pasándole `misNumeros` y guarda el resultado en una nueva constante.
// 9. Muestra el resultado final (el array solo con números pares) en la consola.

console.log("\n--- Ejercicio 7: Filtrar Números Pares ---");

function filtrarPares(arrayDeNumeros){

    numerosPares=[]

    for( i = 0; i < arrayDeNumeros.length; i++ ){

        const numeroActual = arrayDeNumeros[i]; // Guardamos el número actual para más claridad

        if( numeroActual % 2 == 0 ){

            numerosPares.push(numeroActual);
        }
    }

    return numerosPares;
}

// 1. Creamos nuestra lista de prueba
const misNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Llamamos a la función, le pasamos nuestra lista y guardamos el resultado
const resultadoFinal = filtrarPares(misNumeros);

// 3. Mostramos el resultado en la consola
console.log("Los números pares son:", resultadoFinal); // Debería mostrar [2, 4, 6, 8, 10]