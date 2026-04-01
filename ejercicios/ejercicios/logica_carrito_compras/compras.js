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

/// =======================================================================
/// ejercicio totalmente creado desde 0

console.log("\n---Ejercicio: logistica gestion de flota de vehiculos---- ");

flota = [
    {
        id: "AB-123-CD",
        marca: "Toyota",
        kilometraje:85000,
        combustible: 45,
        estadoDisponible:false
    },
    {
        id:"BA-213-DC",
        marca:"Renault",
        kilometraje: 25000,
        combustible:25,
        estadoDisponible: true
    },
    {
        id:"CB-312",
        marca:"Chevrolet",
        kilometraje:120000,
        combustible: 45,
        estadoDisponible: true
    },
    {
        id:"CD-432",
        marca:"Mazda",
        kilometraje: 85000,
        combustible:5,
        estadoDisponible: false
    }
]

function buscarVehiculo(id){
    for( let i = 0; i < flota.length; i++){
        if( flota[i] === id){
            return flota[i];
        }
    }
    return null;
}

function vehiculosListosParaUsar(){
    
    const vehiculosListos = [];

    for( let i = 0; i < flota[i].length; i++){

        vehiculoActual = flota[i];

        if( vehiculoActual.estadoDisponible === true && vehiculoActual.combustible > 10){
            vehiculosListos.push(vehiculoActual);
        }

    }
    return vehiculosListos;

}

function calcularKilometrajePromedio(){
    let sumaKmTotal = 0;
    for( let i = 0; i < flota.length; i++ ){
        sumaKmTotal += flota[i].kilometraje;
    }
    if( flota.length > 0 ){
        const promedio = sumaKmTotal / flota.length;
        return promedio
    }else{
        return 0;
    }
}

const encontrarVehiculo = buscarVehiculo("AB-123-CD");
console.log("Resultado de la busqueda (exito)", encontrarVehiculo);

const vehiculoNoEncontrado = buscarVehiculo("XX-999-ZZ");
console.log("Resultado de la búsqueda (fallo):", vehiculoNoEncontrado);


console.log("\\n--- Probando la función vehiculosListosParaUsar ---");

// --- Ejemplo 3: Obtener la lista de vehículos listos ---
// 1. Llamamos a la función (no necesita "ingredientes").
// 2. La función recorre la flota y crea un nuevo array con los vehículos que cumplen las condiciones.
// 3. Guardamos ese nuevo array en la variable 'listos'.
const listos = vehiculosListosParaUsar();
console.log("Vehículos listos para usar:", listos);


console.log("\\n--- Probando la función calcularKilometrajePromedio ---");

// --- Ejemplo 4: Calcular el promedio de KM ---
// 1. Llamamos a la función (tampoco necesita "ingredientes").
// 2. La función suma todos los kilometrajes y los divide por el total de vehículos.
// 3. Guardamos el número resultante en la variable 'promedio'.
const promedio = calcularKilometrajePromedio();
console.log(`El kilometraje promedio de la flota es: ${promedio} km`);

