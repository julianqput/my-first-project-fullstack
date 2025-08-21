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


// ==========================================================================
//  EJERCICIO 1 (Dificultad: Fácil): Saludo Personalizado
//  - Problema: Crear una función que reciba un nombre y devuelva un saludo.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función con un nombre descriptivo, por ejemplo, `crearSaludo`.
// 2. La función debe aceptar un "ingrediente" (parámetro). Dale un nombre, como `nombrePersona`.
// 3. Dentro de la función, construye una frase. Puedes usar Template Literals para unir "Hola, " con el `nombrePersona` y un "!".
// 4. La función debe "entregar" (return) esa frase completa.
// 5. Fuera de la función, llama a tu nueva máquina con tu propio nombre como argumento.
// 6. Guarda el resultado que te devuelve la función en una constante llamada `miSaludo`.
// 7. Muestra `miSaludo` en la consola.

console.log("\n---Ejercicio 1: Saludo Personalizado---");

function crearSaludo(nombrePersona){
    const frase = `Hola, ${nombrePersona}!`; /* esta tambien es una forma de escribirir const fraseAntigua = "Hola, " + nombrePersona + "!";*/
    return frase;
}

const miSaludo = crearSaludo("Julián");
console.log(miSaludo);

// ==========================================================================
//  EJERCICIO 2 (Dificultad: Media): ¿Es Mayor de Edad?
//  - Problema: Crear una función que reciba una edad y devuelva `true` si la
//    persona es mayor de edad (18 o más) y `false` si no lo es.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función llamada `esMayorDeEdad`.
// 2. Debe aceptar un parámetro: `edad`.
// 3. Dentro de la función, usa un condicional `if/else`.
// 4. La condición del `if` debe verificar si la `edad` es mayor o igual a 18.
// 5. Si la condición es verdadera, la función debe devolver (return) `true`.
// 6. Si no (en el `else`), la función debe devolver `false`.
// 7. Fuera de la función, pruébala dos veces:
//    a. Llama a la función con una edad menor a 18 (ej: 15) y muestra el resultado.
//    b. Llama a la función con una edad mayor a 18 (ej: 25) y muestra el resultado.

console.log("\n---Ejercicio 2: ¿Es mayor de edad?---");

function esMayorDeEdad(edad){
    if(edad>=18){
        return true
    }else{
        return false
    }
}

const resultadoMenor = esMayorDeEdad(15);
console.log(`¿Una persone de 15 años es mayor de edad?: ${resultadoMenor}`);

const resultadoMayor = esMayorDeEdad(25);
console.log(`¿Una persona de 25 años es mayor de edad?: ${resultadoMayor}`);

function esMayorDeEdadSimplificado(edad) {
    return edad >= 18;
}

console.log("\n--- Prueba con la función simplificada ---");
console.log(`(Simplificado) ¿Una persona de 17 es mayor de edad?: ${esMayorDeEdadSimplificado(17)}`);
console.log(`(Simplificado) ¿Una persona de 20 es mayor de edad?: ${esMayorDeEdadSimplificado(20)}`);

/*Estas dos opciones sirven pero una simplifica muchas cosas*/

// ==========================================================================
//  EJERCICIO 3 (Dificultad: Media-Alta): Encontrar el Número Más Grande
//  - Problema: Crear una función que reciba un array de números y devuelva
//    el número más grande de esa lista.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función `encontrarMaximo` que acepte un parámetro `arrayDeNumeros`.
// 2. Dentro, crea una variable `let` llamada `maximoActual` y asígnale el primer
//    número del array (`arrayDeNumeros[0]`). Este será nuestro "campeón" inicial.
// 3. Usa un bucle `for` para recorrer el `arrayDeNumeros` (puedes empezar desde el índice 1).
// 4. En cada vuelta del bucle, compara el número actual (`arrayDeNumeros[i]`) con `maximoActual`.
// 5. Si el número actual es más grande que `maximoActual`, actualiza `maximoActual` con ese número.
// 6. Después de que el bucle termine, la variable `maximoActual` contendrá el número más grande.
// 7. La función debe devolver (return) `maximoActual`.
// 8. Fuera de la función, crea un array de números de prueba.
// 9. Llama a tu función con el array de prueba y muestra el resultado en la consola.

console.log("\n --- Ejercicio 3: Encontrar el Número mas grande --- ");

function encontrarMaximo (arrayDeNumeros){

    let maximoActual = arrayDeNumeros[0];

    for( let i = 1; i < arrayDeNumeros.length; i++ ){
        maximoActual = arrayDeNumeros[i];
        if(arrayDeNumeros[i]>maximoActual){
            maximoActual = arrayDeNumeros[i];
        }
    }
    return maximoActual;
}

const numerosPrueba = [1,2,4,7,9,4,5,10];
const numeroMayor = encontrarMaximo(numerosPrueba);

console.log(`El número mayor en la lista es: ${numeroMayor}`);


// ==========================================================================
//  EJERCICIO 1 (Dificultad: Fácil): Saludo Personalizado
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función con un nombre descriptivo, por ejemplo, `crearSaludo`.
// 2. La función debe aceptar un "ingrediente" (parámetro). Dale un nombre, como `nombrePersona`.
// 3. Dentro de la función, construye una frase. Puedes usar Template Literals para unir "Hola, " con el `nombrePersona` y un "!".
// 4. La función debe "entrega" (return) esa frase completa.
// 5. Fuera de la función, llama a tu nueva máquina con tu propio nombre como argumento.
// 6. Guarda el resultado que te devuelve la función en una constante llamada `miSaludo`.
// 7. Muestra `miSaludo` en la consola.

console.log("\n--- Ejercicio 1: Saludo Personalizado ---");

function crearSaludo(nombrePersona){
    const frase = `Hola,${nombrePersona}!`;
    return frase;
}

const elSaludo = crearSaludo("Julián");
console.log(elSaludo);


// ==========================================================================
//  EJERCICIO 1 (Dificultad: Fácil): Saludo Personalizado
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función con un nombre descriptivo, por ejemplo, `crearSaludo`.
// 2. La función debe aceptar un "ingrediente" (parámetro). Dale un nombre, como `nombrePersona`.
// 3. Dentro de la función, construye una frase. Puedes usar Template Literals para unir "Hola, " con el `nombrePersona` y un "!".
// 4. La función debe "entrega" (return) esa frase completa.
// 5. Fuera de la función, llama a tu nueva máquina con tu propio nombre como argumento.
// 6. Guarda el resultado que te devuelve la función en una constante llamada `miSaludo`.
// 7. Muestra `miSaludo` en la consola.

console.log("\n--- Ejercicio 1: Saludo Personalizado ---");

function crearSaludo(nombrePersona){
    const frase = `Hola,${nombrePersona}!`;
    return frase
}

const saludo = crearSaludo("Julián");
console.log(saludo);

// ==========================================================================
//  EJERCICIO 2 (Dificultad: Media): ¿Es Mayor de Edad?
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función llamada `esMayorDeEdad`.
// 2. Debe aceptar un parámetro: `edad`.
// 3. Dentro de la función, usa un condicional `if/else`.
// 4. La condición del `if` debe verificar si la `edad` es mayor o igual a 18.
// 5. Si la condición es verdadera, la función debe devolver (return) `true`.
// 6. Si no (en el `else`), la función debe devolver `false`.
// 7. Fuera de la función, pruébala dos veces:
//    a. Llama a la función con una edad menor a 18 (ej: 15) y muestra el resultado.
//    b. Llama a la función con una edad mayor a 18 (ej: 25) y muestra el resultado.

function esMayorDeEdad(edad){
    if(edad<=18){
        return true
    }else{
        return false
    }
}

const esMayor = esMayorDeEdad(15);
const esMenor = esMayorDeEdad(25);

console.log(`Es mayor,${esMayor}`);
console.log(`Es menor,${esMenor}`);



// ==========================================================================
//  EJERCICIO 4 (Dificultad: Media-Alta): Invertir una Cadena de Texto
//  - Problema: Crear una función que reciba un string (texto) y devuelva
//    un nuevo string con los caracteres en orden inverso.
//    Ejemplo: si recibe "hola", debe devolver "aloh".
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función `invertirCadena` que acepte un parámetro `texto`.
// 2. Dentro, crea una variable `let` llamada `cadenaInvertida` y asígnale un
//    string vacío: "". Aquí iremos construyendo el nuevo texto.
// 3. Usa un bucle `for` para recorrer el `texto` de atrás hacia adelante.
//    (Pista: el bucle debe empezar en el último índice (texto.length - 1),
//    continuar mientras i >= 0, y decrementar en cada paso (i--)).
// 4. En cada vuelta, toma el carácter actual (`texto[i]`) y añádelo al final
//    de `cadenaInvertida`. (Pista: cadenaInvertida = cadenaInvertida + texto[i];)
// 5. Después del bucle, la función debe devolver (return) `cadenaInvertida`.
// 6. Fuera de la función, prueba tu función con una palabra y muestra el resultado.

console.log("\n--- Ejercicio 4: Invertir una Cadena de Texto ---");

function invertirCadena(texto) {
    let cadenaInvertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        cadenaInvertida = cadenaInvertida + texto[i];
    }
    return cadenaInvertida;
}

const palabraOriginal = "javascript";
const palabraInvertida = invertirCadena(palabraOriginal);
console.log(`La palabra "${palabraOriginal}" invertida es: "${palabraInvertida}"`);


// ==========================================================================
//  EJERCICIO 5 (Dificultad: Media-Alta): Contar Vocales
//  - Problema: Crear una función que reciba un string y devuelva el número
//    total de vocales (a, e, i, o, u) que contiene.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función `contarVocales` que acepte un parámetro `texto`.
// 2. Dentro, crea una variable `let` llamada `contadorVocales` e inicialízala en 0.
// 3. Crea una constante `vocales` que sea un string con todas las vocales: "aeiou".
//    Esto nos ayudará a comparar fácilmente.
// 4. Usa un bucle `for` para recorrer cada carácter del `texto` que recibió la función.
// 5. Dentro del bucle, convierte el carácter actual a minúscula para evitar problemas
//    con mayúsculas. (Pista: `let caracter = texto[i].toLowerCase();`).
// 6. Usa un condicional `if` para verificar si el `caracter` actual está incluido
//    en nuestro string de `vocales`.
//    (Pista: un string tiene un método .includes() que devuelve true o false.
//    Ejemplo: `vocales.includes(caracter)`).
// 7. Si la condición es verdadera, incrementa `contadorVocales` en 1.
// 8. Después del bucle, la función debe devolver (return) `contadorVocales`.
// 9. Fuera de la función, pruébala con una frase y muestra el resultado.

console.log("\n--- Ejercicio 5: Contar Vocales ---");


function contarVocales(texto) {
    let contadorVocales = 0;
    const vocales = "aeiou";
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i].toLowerCase();
        if (vocales.includes(caracter)) {
            contadorVocales++;
        }
    }
    return contadorVocales;
}

const fraseDePrueba = "Hola Mundo, estoy aprendiendo JavaScript!";
const totalVocales = contarVocales(fraseDePrueba);
console.log(`La frase "${fraseDePrueba}" tiene ${totalVocales} vocales.`);x
