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



