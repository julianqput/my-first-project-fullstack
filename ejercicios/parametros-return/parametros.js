// ==========================================================================
//  EJERCICIO 1 (Tarea del Día): Calculadora de IVA
//  - Problema: Crear una función que reciba un precio, calcule el IVA (19%)
//    y devuelva el precio final con el IVA incluido.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función llamada `calcularPrecioFinal`.
// 2. La función debe aceptar un parámetro: `precioSinIVA`.
// 3. Dentro de la función, crea una constante `tasaIVA` y asígnale el valor 0.19.
// 4. Calcula el monto del IVA. Crea una constante `montoIVA` que sea igual a `precioSinIVA * tasaIVA`.
// 5. Calcula el precio final sumando el `precioSinIVA` y el `montoIVA`.
// 6. La función debe DEVOLVER (return) el precio final calculado.
// 7. Fuera de la función, prueba tu "máquina" con un precio de ejemplo (ej: 100).
// 8. Guarda el resultado en una variable y muéstralo en la consola.

console.log("---Ejercicio 1: Calculadora de IVA ---");

function calcularPrecioFinal(precioSinIVA){
    const tasaIVA = 0.19;
    const montoIVA = precioSinIVA * tasaIVA;
    const precioFinal = precioSinIVA + montoIVA;
    return precioFinal;
}

const prueba = calcularPrecioFinal(100);
console.log(`El precio con iva es: $${prueba}¡`);

// ==========================================================================
//  EJERCICIO 2 (Dificultad: Media): Conversor de Temperatura
//  - Problema: Crear una función que convierta grados Celsius a Fahrenheit.
//    La fórmula es: Fahrenheit = (Celsius * 9/5) + 32.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función llamada `convertirCelsiusAFahrenheit`.
// 2. Debe aceptar un parámetro: `gradosCelsius`.
// 3. Dentro de la función, aplica la fórmula matemática para calcular los grados Fahrenheit.
// 4. La función debe DEVOLVER el resultado del cálculo.
// 5. Fuera de la función, pruébala con un valor conocido (ej: 0°C debería ser 32°F).
// 6. Muestra el resultado en la consola con un mensaje claro.

console.log("\n--- Ejercicio 2: conversor de temperatura");

function convertirCelsiusAFahrenheit(gradosCelsius){
    const gradosFahrenheit = (gradosCelsius + 1.8) + 32;
    return gradosFahrenheit;
}

const temperaturaFarenheit = convertirCelsiusAFahrenheit(0);
console.log(`0°C equivalen a: ${temperaturaFarenheit}°F`);

const otraTemperatura = convertirCelsiusAFahrenheit(25);
console.log(`25°C equivalen a: ${otraTemperatura}°F`);


// --- Guía Lógica Paso a Paso ---
// 1. Define una función llamada `crearUsuario`.
// 2. La función debe aceptar dos parámetros: `nombre` y `edad`.
// 3. Dentro de la función, crea un objeto `const usuario = { ... }`.
// 4. El objeto debe tener tres propiedades:
//    - `nombreUsuario`: cuyo valor será el parámetro `nombre`.
//    - `edadUsuario`: cuyo valor será el parámetro `edad`.
//    - `esMayorDeEdad`: cuyo valor debe ser el resultado de verificar si la `edad`
//      es mayor o igual a 18. (¡Puedes usar un operador de comparación aquí mismo!).
// 5. La función debe DEVOLVER (return) el objeto `usuario` completo.
// 6. Fuera de la función, llama a `crearUsuario` con datos de ejemplo.
// 7. Guarda el objeto resultante en una variable y muéstralo en la consola.

console.log("\n--- Ejercicio 3: Creador de Objetos de Usuario ---");

function crearUsuario(nombre,edad){
    const usuario = {nombreUsuario: nombre,
        edadUsuario: edad,
        esMayorDeEdad: edad >= 18
    };
    return usuario;
}

const primerUsuario = crearUsuario("Ana",25);
const segundoUsuario = crearUsuario("Luis",16);

console.log(primerUsuario);
console.log(segundoUsuario);



// ==========================================================================
//  NUEVO EJERCICIO 4: Formateador de Nombres Completos
//  - Problema: Crear una función que reciba un nombre y un apellido, y
//    devuelva el nombre completo formateado.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función llamada `obtenerNombreCompleto`.
// 2. La función debe aceptar dos parámetros: `nombre` y `apellido`.
// 3. Dentro de la función, usa un Template Literal para unir el nombre y el apellido
//    con un espacio en medio.
// 4. La función debe DEVOLVER (return) el nombre completo.
// 5. Fuera de la función, pruébala con tu nombre y apellido.
// 6. Guarda el resultado en una variable y muéstralo en la consola.

console.log("\n--- Ejercicio 4: Formateador de Nombres ---");

function obtenerNombreCompleto (nombre,apellido){
    const unirNomApell = `Este es su nombre completo; ${nombre} ${apellido}`;
    return unirNomApell;
}

const primerNombre = "julián";
const segundoNombre = "Quesada";

const nombreCompleto = obtenerNombreCompleto(primerNombre,segundoNombre);
console.log(nombreCompleto);

// ==========================================================================
//  NUEVO EJERCICIO 5: Verificador de Lista Vacía
//  - Problema: Crear una función que reciba un array y devuelva `true` si
//    la lista está vacía, o `false` si tiene al menos un elemento.
// ==========================================================================

// --- Guía Lógica Paso a Paso ---
// 1. Define una función llamada `estaVacia`.
// 2. La función debe aceptar un parámetro: `lista`.
// 3. Dentro de la función, necesitas verificar la longitud (length) de la `lista`.
// 4. Usa un condicional `if` para preguntar si la longitud de la `lista` es
//    estrictamente igual a 0.
// 5. Si es 0, la función debe devolver `true`.
// 6. Si no (en el `else`), debe devolver `false`.
// 7. Fuera de la función, crea dos arrays de prueba: uno con elementos y otro vacío.
// 8. Llama a tu función con ambos arrays y muestra los resultados en la consola.

console.log("\n--- Ejercicio 5: Verificador de Lista Vacía ---");

function estaVacia (lista){
    return lista.length === 0;
}


const lista1 = [10,20,40,30];
const lista2 = [];

const pruebaDeLista = estaVacia(lista1);
console.log(`Esta funcion comprueba si la lista esta vacia?:${pruebaDeLista}`);

const pruebaDeLista2 = estaVacia(lista2);
console.log(`Esta funcion comprueba si la lista esta vacia?:${pruebaDeLista2}`);
