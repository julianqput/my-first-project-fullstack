// ==========================================================================
//  TEMA 10: Funciones y el Principio DRY (Don't Repeat Yourself)
// ==========================================================================

// --- El Problema: Código Repetido ---
// Tenemos las notas de tres estudiantes.
const nota1 = 7;
const nota2 = 4;
const nota3 = 9;


// --- TU MISIÓN ---
// 1. Crea una función llamada `verificarAprobacion`.
// 2. La función debe aceptar un parámetro, que será la `nota` a verificar.
// 3. Dentro de la función, mueve la lógica del `if/else` que verifica si una
//    nota es mayor o igual a 5.
// 4. En lugar de imprimir en la consola, la función debe DEVOLVER (return)
//    un string: "Aprobado" si la condición se cumple, o "Reprobado" si no.
// 5. Una vez creada la función, úsala (llámala) para cada uno de los tres estudiantes.
// 6. Muestra los resultados en la consola de una forma clara.
//    Ejemplo: console.log(`La nota ${nota1} corresponde a un estado: ${resultado1}`);

console.log("--- Ejercicio: Verificador de Notas con una Función ---");

function verificarAprobacion(nota){
    if(nota>=5)
    {
        return "Aprobado";
    }else{
        return "Reprobado";
    }
}

// 5. Llama a tu función para cada nota y guarda los resultados.
// const resultado1 = verificarAprobacion(nota1);
// ... y así para las otras notas.

const estudiantes1 = verificarAprobacion(nota1);
const estudiantes2 = verificarAprobacion(nota2);
const estudiantes3 = verificarAprobacion(nota3);

console.log(`El estudiante ha,${estudiantes1}!`);
console.log(`El estudiante ha,${estudiantes2}!`);
console.log(`El estudiante ha,${estudiantes3}!`);

/*console.log(`La nota ${nota1} corresponde a un estado: ${resultado1}`);
console.log(`La nota ${nota2} corresponde a un estado: ${resultado2}`);
console.log(`La nota ${nota3} corresponde a un estado: ${resultado3}`);*/ ///esta es otra forma en la que se puede presentar

// 6. Muestra los resultados en la consola.


// ==========================================================================
//  EJERCICIO 1: Calculadora de Áreas de Rectángulos
// =======================================================================

console.log("\n---Ejercicio 1: Calculadora de Áreas ---");

const ancho1 = 5;
const alto1 = 10;
const area1 = ancho1 * alto1;

console.log(`El áera del primer rectángulo es: ${area1}`);

const ancho2 = 20;
const alto2 = 15;
const area2 = ancho2 * alto2;
console.log(`El área del segundo rectángulo es: ${area2}`);

const ancho3 = 8;
const alto3 = 3;
const area3 = ancho3 * alto3;
console.log(`El área del segundo rectángulo es: ${area3}`);

// --- TU MISIÓN ---
// 1. Identifica la lógica que se repite: la fórmula `ancho * alto`.
// 2. Crea una función llamada `calcularArea`.
// 3. La función debe aceptar dos parámetros: `ancho` y `alto`.
// 4. Dentro de la función, calcula el área y haz que la función DEVUELVA (return) el resultado.
// 5. Usa tu nueva función para calcular el área de los tres rectángulos con una sola línea de código para cada uno.
// 6. Muestra los resultados en la consola.

console.log("\n--- Solución con Función ---");

function calcularArea (ancho,alto){
    const area = ancho * alto;
    return area;
}

const  resultadoArea1 = calcularArea(ancho1,alto1);
console.log(`El área del primer rectángulo (con función) es: ${resultadoArea1}`);

const  resultadoArea2 = calcularArea(ancho2,alto2);
console.log(`El área del primer rectángulo (con función) es: ${resultadoArea2}`);

const  resultadoArea3 = calcularArea(ancho3,alto3);
console.log(`El área del primer rectángulo (con función) es: ${resultadoArea3}`);


// ==========================================================================
//  EJERCICIO 3: Generador de Mensajes de Bienvenida
//  - Problema: Tenemos que generar un mensaje de bienvenida personalizado
//    para diferentes usuarios, mostrando su nombre y su nivel de cuenta.
// ==========================================================================

console.log("\n--- Ejercicio 3: Generador de Mensajes ---");

const usuario1_nombre = "julián";
const usuario1_nivel = "Premium";
const mensaje1 = `Bienvenido, ${usuario1_nombre}! Tu nivel de cuenta es: ${usuario1_nivel}.`;
console.log(mensaje1);

const usuario2_nombre = "Ana";
const usuario2_nivel = "Básico";
const mensaje2 = `Bienvenido, ${usuario2_nombre}! Tu nivel de cuenta es: ${usuario2_nivel}.`;
console.log(mensaje2);

const usuario3_nombre = "juan";
const usuario3_nivel = "Administrador";
const mensaje3 = `Bienvenido, ${usuario3_nombre}! Tu nivel de cuenta es: ${usuario3_nivel}.`;
console.log(mensaje3);

// --- TU MISIÓN ---
// 1. La lógica para crear el mensaje se repite. ¡Es perfecta para una función!
// 2. Crea una función llamada `generarMensajeBienvenida`.
// 3. La función debe aceptar dos parámetros: `nombre` y `nivel`.
// 4. Dentro de la función, usa un Template Literal para construir la frase completa.
// 5. Haz que la función DEVUELVA (return) el mensaje completo.
// 6. Usa tu nueva función para generar los mensajes para los tres usuarios.
// 7. Muestra cada mensaje en la consola.

console.log("\n---ejercicio con función---");

function generarMensajeBienvenida(nombre,nivel){
    const frase = `Bienvenido, ${nombre}! Tu nivel de cuenta es: ${nivel}.`;
    return frase;
}

const generarMensajeUsuario1 = generarMensajeBienvenida(usuario1_nombre,usuario1_nivel);
console.log(generarMensajeUsuario1);

const generarMensajeUsuario2 = generarMensajeBienvenida(usuario2_nombre,usuario2_nivel);
console.log(generarMensajeUsuario2);

const generarMensajeUsuario3 = generarMensajeBienvenida(usuario3_nombre,usuario3_nivel);
console.log(generarMensajeUsuario3);


// ==========================================================================
//  EJERCICIO 4: Calculadora de Precios con Descuento
//  - Problema: Tenemos varios productos y necesitamos calcular su precio
//    final después de aplicar un descuento. La fórmula matemática se repite.
// ==========================================================================

console.log("\n\n--- Ejercicio 4: Calculadora de Descuentos ---");

const precioProductoA = 100; //Precio original
const descuentoProductoA = 0.15; //15% de descuento
const precioFinalA = precioProductoA - ( precioProductoA * descuentoProductoA );
console.log(`El precio final del Producto A es: $${precioFinalA}`);

const precioProductoB = 250; //Precio original
const descuentoProductoB = 0.30; //30% de descuento
const precioFinalB = precioProductoB- ( precioProductoB * descuentoProductoB );
console.log(`El precio final del Producto B es: $${precioFinalB}`);

const precioProductoC = 100; //Precio original
const descuentoProductoC = 0.15; //15% de descuento
const precioFinalC = precioProductoC - ( precioProductoC * descuentoProductoC );
console.log(`El precio final del Producto C es: $${precioFinalC}`);

// --- TU MISIÓN ---
// 1. La fórmula para calcular el descuento es siempre la misma.
// 2. Crea una función llamada `calcularPrecioFinal`.
// 3. Debe aceptar dos parámetros: `precioOriginal` y `porcentajeDescuento`.
//    (Ojo: el porcentaje se pasa como un decimal, ej: 0.15 para 15%).
// 4. Dentro de la función, calcula el precio final y haz que la función DEVUELVA el resultado.
// 5. Usa tu nueva función para calcular el precio final de los tres productos.
// 6. Muestra los resultados en la consola.

console.log("\n--- Solución con Función ---");

function calcularPrecioFinal(precioOriginal,porcentajeDescuento){
    const preciFinal = precioProducto - (precioProducto * descuentoProducto);

}