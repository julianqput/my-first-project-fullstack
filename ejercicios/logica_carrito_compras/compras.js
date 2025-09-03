// ==========================================================================
//  MINI-PROYECTO: Lógica para un Carrito de Compras
// ==========================================================================

// --- PASO 1: El "Estado" de nuestra aplicación ---
// Este es el array que guardará los precios de los productos en nuestro carrito.

let carrito = [];

// ==========================================================================
//  Nuestras "Máquinas" (Funciones)
// ==========================================================================

// --- FUNCIÓN 1: Añadir un Producto al Carrito ---
// Guía: Esta función debe aceptar un parámetro: el `precio` del producto.
//       Dentro, debe usar el método .push() para añadir ese precio al
//       final del array `carrito`.

function agregarAlCarrito(precio){
    carrito.push(precio);
    console.log(`Producto con precio $${precio} añadido al carrito.`);
}

// --- FUNCIÓN 2: Calcular el Total del Carrito ---
// Guía: Esta función debe calcular la suma de todos los precios en el carrito.
//       1. Crea una variable `let total = 0;` para ir guardando la suma.
//       2. Usa un bucle `for` para recorrer el array `carrito`.
//       3. En cada vuelta, suma el precio actual (`carrito[i]`) a la variable `total`.
//       4. Después del bucle, la función debe DEVOLVER (return) el `total`.

function calcularTotal(){
    let total = 0;
    for( let i = 0; i < carrito.length; i++ ){
        total += carrito[i];
    }
    return total;
}

// --- FUNCIÓN 3: Mostrar el Carrito y el Total ---
// Guía: Esta función mostrará un resumen de la compra.
//       1. Muestra un mensaje inicial, como "--- Resumen de tu Compra ---".
//       2. Muestra los precios de los productos en el carrito. Puedes usar un bucle
//          o simplemente mostrar el array completo.
//       3. Llama a tu función `calcularTotal()` para obtener la suma final.
//       4. Muestra el total en la consola con un mensaje claro, como "Total a pagar: $[total]".


function mostrarResumen(){
    console.log("---Resumen de tu compra---");
    console.log("Precios en el carrito:",carrito);

    const totalPagar = calcularTotal();
    console.log(`Total a pagar: $${totalPagar}`);
} 

// ==========================================================================
//  Zona de Pruebas
//  - Simulemos una compra para probar nuestras funciones.
// ==========================================================================

// 1. Añadimos varios productos al carrito.

console.log("\n...Añadiendo productos...");

agregarAlCarrito(20);
agregarAlCarrito(50);
agregarAlCarrito(15);

// 2. Mostramos el resumen final de la compra.
console.log("\n...Mostrando resumend de la compra...");
mostrarResumen();