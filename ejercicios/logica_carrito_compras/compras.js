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
    for( i = 0; i < carrito; i++ ){
        total += carrito[i];
    }
    return total;
}