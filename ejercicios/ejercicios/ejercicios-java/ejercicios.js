alert("Hello, I'm JWeb");

// ==========================================================================
//  EJEMPLO 1: Modelando un Usuario
//  ==========================================================================
//  Aquí representamos a una persona usando tres variables. Cada variable
//  guarda una "pieza" de información sobre el usuario.

console.log("----Ejemplo de Usuairo----");

const nombreUsuario = "Ana lopez";// Tipo String (texto)
const edadUsuario = 28; // Tipo Number (número)
const esActivo = true; // Tipo Boolean (verdadero/falso)

console.log("Nombre: ",nombreUsuario);
console.log("Edad: ",edadUsuario);
console.log("¿Esta activo?:",esActivo);

// ==========================================================================
//  EJEMPLO 2: Modelando un Producto
//  ==========================================================================
//  Hacemos lo mismo para un producto de una tienda.

console.log("\n---Ejemplo de Producto---");

const nombreProducto = "Teclado mecanico RGB";
let precioProducto = 150; // Usamos 'let' porque el precio podría cambiar por un descuento.
let stockProducto = 25; // Usamos 'let' porque el stock cambiará cuando se venda.

console.log("Producto:",nombreProducto);
console.log("Precio:",precioProducto);
console.log("Unidades en stock: ",stockProducto);


// --- Ejercicio 1: Modela tu Película Favorita ---
// 1. Crea una constante `tituloPelicula` y guárdale el nombre de tu película favorita.
// 2. Crea una constante `anioEstreno` y guárdale el año en que se estrenó.
// 3. Crea una variable `laHasVisto` (usa 'let') y guárdale `true` si ya la viste, o `false` si no.
// 4. Muestra cada una de estas variables en la consola.

console.log("\n---Ejercicio 1: Mi pelicula favorita ---");

const tituloPelicula = "El juez";
const anioEstreno = 2024;
let laHasVisto = true;

console.log("QuePelicula:",tituloPelicula);
console.log("QueAniosalio:",anioEstreno);
console.log("LaHAsVisto:",laHasVisto);


// --- Ejercicio 2: Simula una Compra ---
//  Vamos a usar las variables del producto del Ejemplo 2.
// 1. Disminuye el stock del producto en 1. (Pista: stockProducto = stockProducto - 1; o la forma corta: stockProducto--;)
// 2. Aplica un descuento de 25 al precio del producto.
// 3. Muestra en la consola un mensaje que diga: "Se ha vendido 1 Teclado Mecánico RGB."
// 4. Muestra el nuevo stock y el nuevo precio en la consola.

console.log("\n---Ejercicio 2: Simular una comptra---");

stockProducto = stockProducto - 1;
precioProducto = precioProducto - 25;

console.log("Se ha vendido 1 teclado Mecanico RGB");
//console.log("EL nuevo stock es:",stockProducto, "y el nuevo precio del producto es:",precioProducto); Se puede de esta forma pero es la version antigua
console.log(`El nuevo stock es: ${stockProducto}, y el nuevo precio del producto es: ${precioProducto}`);//Esta es la versioon mas moderna

// ==========================================================================
//  TEMA 3: Operadores - Manipulando y Comparando Datos
// ==========================================================================
// Los operadores son símbolos que realizan acciones sobre nuestras variables.

// --- Operadores Matemáticos ---

let a = 10;
let b = 5;

console.log("suma:",a+b);
console.log("resta",a-b);
console.log("Multiplicación:",a*b);
console.log("división:",a/b);


console.log("\n--- Operadores de Comparación (¡Muy importantes!) ---");
// Estos operadores SIEMPRE devuelven un resultado booleano: true o false.

let edadAna = 25;
let edadJuan = 30;

console.log("¿Ana es mayor que Juan: ",edadAna>edadJuan);  // false
console.log("¿Juan tiene 30 años?",edadJuan==30);  // true (=== significa "estrictamente igual a")
console.log("¿Tienen edades diferentes?",edadAna!==edadJuan); // true (!== significa "estrictamente diferente a")


// ==========================================================================
console.log ("\nTEMA 4: Condicionales (if/else) - Tomando Decisiones");
// ==========================================================================
// Los condicionales nos permiten ejecutar diferentes bloques de código
// dependiendo de si una condición es verdadera (true) o falsa (false).

console.log("---Ejemplo de condicional---");
const temperatura = 22;

if("temperatura > 25"){
    console.log("Hace calor, ¡Ponte ropa ligera!");
}else{
    console.log("El clima esta agradable, pero lleva una chaqueta por si acaso.");
}

// ==========================================================================
//  ¡TUS NUEVOS EJERCICIOS!
// ==========================================================================

// --- Ejercicio 3: Calculadora de Presupuesto para Viaje ---
// 1. Crea una constante `costoVuelo` y asígnale un valor de 500.
// 2. Crea una constante `costoHotelPorNoche` y asígnale un valor de 80.
// 3. Crea una constante `numeroDeNoches` y asígnale un valor de 4.
// 4. Crea una variable `presupuesto` (usa 'let') y asígnale un valor de 800.
// 5. Calcula el costo total del viaje (vuelo + el costo total del hotel por todas las noches). Guarda el resultado en una nueva constante `costoTotal`.
// 6. Compara si tu `presupuesto` es suficiente para cubrir el `costoTotal`. Guarda el resultado (true o false) en una constante `presupuestoAlcanza`.
// 7. Muestra el `costoTotal` y si el `presupuestoAlcanza` en la consola.

console.log("\n---Ejercicio 3: Presupuesto de viaje---");

const costoVuelo = 500;
const costoHotelPorNoche = 80;
const numeroDeNoches = 4;
let presupuesto = 800;
const costoTotal = costoVuelo + costoHotelPorNoche * numeroDeNoches;
const presupuestoAlcanza = costoTotal<presupuesto;

console.log("El presupuesto alcanza?",presupuestoAlcanza); //false


if(costoTotal<=presupuesto){
    console.log("El presupuesto alcanzo: ");
}else{
    console.log("El presupuesto no alcanza");
}

// --- Ejercicio 4: Verificador de Acceso a un Evento ---
// 1. Crea una constante `edadPersona` y asígnale un valor (prueba con 17 y luego con 20).
// 2. Crea una constante `tieneEntrada` y asígnale `true`.
// 3. Usa un condicional `if/else` para verificar si la persona puede entrar al evento.
//    La condición es que la persona debe ser mayor o igual a 18 AÑOS Y debe tener una entrada.
//    (Pista: para "Y", se usa el operador lógico `&&`).
// 4. Si puede entrar, muestra en la consola: "Bienvenido al evento."
// 5. Si no puede entrar, muestra: "Acceso denegado."

console.log("\n---Ejercicio 4: acceso al evento---");

const edadPersona = 20;
const tieneEntrada = true;

if(edadPersona>=18 && tieneEntrada == true){
    console.log("Bienvenido al evento.");
}else{
    console.log("Acceso denegado.");
}

