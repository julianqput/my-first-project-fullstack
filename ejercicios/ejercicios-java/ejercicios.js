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




