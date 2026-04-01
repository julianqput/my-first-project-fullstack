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
    const preciFinal = precioOriginal - (precioOriginal * porcentajeDescuento);
    return preciFinal;

}

const preciFinalprA = calcularPrecioFinal(precioProductoA,descuentoProductoA);
console.log(`El precio final del producto A con desceunto es: $${preciFinalprA}`);

const preciFinalprB = calcularPrecioFinal(precioProductoB,descuentoProductoB);
console.log(`El precio final del producto B con desceunto es: $${preciFinalprB}`);

const preciFinalprC = calcularPrecioFinal(precioProductoC,descuentoProductoC);
console.log(`El precio final del producto C con desceunto es: $${preciFinalprC}`);


console.log("---Ejercicio 5: validador de entradas de usuario");

///Validador de Entradas de Usuario
//  - Problema: En un formulario, necesitamos validar que diferentes campos
//    de texto cumplan con una longitud mínima y máxima. La lógica de
//    validación se está repitiendo.

const nombreUsuario = "julianq"; // Válido (entre 3 y 15 caracteres)

if( nombreUsuario.length >= 3 && nombreUsuario <= 15 ){
    console.log("El nombre del usuario es valido.");
}else{
    console.log("Error: El nombre del usuario debe de tener entre 3 y 15 caracteres.");
}

const contrasena = "12345678";// Válido (entre 8 y 20 caracteres)

if (contrasena >= 8 && contrasena <= 20){
    console.log("La contraseña es valida.");
}else{
    console.log("Error: La contraseña debe de tener en 8 y 20 caracteres.");
}
// --- TU MISIÓN ---
// 1. La lógica para verificar la longitud de un texto se repite.
// 2. Crea una función llamada `validarLongitud`.
// 3. La función debe aceptar tres parámetros: `texto`, `min` y `max`.
// 4. Dentro de la función, la lógica debe verificar si la longitud del `texto`
//    es mayor o igual a `min` Y menor o igual a `max`.
// 5. La función debe DEVUELVER (return) un booleano: `true` si es válido, `false` si no.
// 6. Usa tu nueva función y un `if/else` para validar el `nombreUsuario` y la `contrasena`.

console.log("\n--- Solución con Función ---");

function validarLongitud(texto,min,max){
    const esValido = texto.length >= min && texto.length <= max;
    return esValido;
}

const esNombreValido = validarLongitud(nombreUsuario,3,15);

if(esNombreValido){
    console.log("Validación con funcion: El nombre de usuario es válido.");
}else{
    console.log("Validación con función: Error nombre de usuario.");
}

const esContrasenaValida = validarLongitud(contrasena,8,20);

if(esContrasenaValida){
    console.log("Validación con función: la contraseña es válida.");
}else{
    console.log("Valición con función: Error en la contraseña");
}


// ==========================================================================
//  EJERCICIO 6: Generador de Listas de Productos en HTML
//  - Problema: Tenemos una lista de productos y queremos generar una lista
//    HTML para mostrarlos en una página. El formato de cada elemento de la
//    lista (`<li>`) se repite.
// ==========================================================================

console.log("\n---Ejercicio 6: generador de listas de productos en HTML---");

const producto1 = { nombre: "Laptop", precio: 1200};
const producto2 = { nombre: "Mouse", precio: 25 };
const producto3 = {nombre: "Teclado", precio: 80};

let listaHTML = "<ul>";
listaHTML += `<li>${producto1.nombre} - Precio: $${producto1.precio}</li>`;
listaHTML += `<li>${producto2.nombre} - Precio: $${producto2.precio}</li>`;
listaHTML += `<li>${producto3.nombre} - Precio: $${producto3.precio}</li>`;
listaHTML += "</ul>";

console.log("Lista HTML generada manualmente: ");
console.log(listaHTML);

// --- TU MISIÓN ---
// 1. La lógica para crear cada `<li>` es idéntica.
// 2. Crea una función llamada `crearItemProductoHTML`.
// 3. La función debe aceptar un parámetro: un objeto `producto`.
// 4. Dentro, debe usar un Template Literal para construir el string del `<li>`
//    usando las propiedades `producto.nombre` y `producto.precio`.
// 5. La función debe DEVUELVER (return) el string del `<li>` completo.
// 6. Ahora, crea una segunda función llamada `generarListaProductosHTML` que
//    acepte un array de `productos` como parámetro.
// 7. Dentro de esta segunda función, usa un bucle `for` para recorrer el array de `productos`.
//    En cada vuelta, llama a tu primera función (`crearItemProductoHTML`) para
//    generar el `<li>` de cada producto y ve construyendo la lista HTML completa.
// 8. Esta función debe devolver la lista completa, incluyendo las etiquetas `<ul>` y `</ul>`.

console.log("\n---Solución con Funcion ---");

const listaDeProductos = [
    {nombre: "Laptop Pro", precio: 1500},
    {nombre: "Monitor 4k", precio: 600},
    {nombre: "Silla Ergonómica", precio: 350}
]

function crearItemProductoHTML(producto){
    const itemHTML = `<li>${producto.nombre} - precio: $${producto.precio}</li>`;
    return itemHTML;
}

function generarListaProductosHTML(productos){
    let htmlFinal = "<ul>"; 
    for( let i = 0; i < productos.length; i++ ){
        htmlFinal += crearItemProductoHTML(productos[i]);
    }
    htmlFinal += "</ul>";
    return htmlFinal;
}


// Llama a tu función generadora principal y muestra el resultado
const nuevaListaHTML = generarListaProductosHTML(listaDeProductos);
console.log("Lista HTML generada con funciones:");
console.log(nuevaListaHTML);
