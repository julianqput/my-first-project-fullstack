console.log("¡Script de Filtrador de arrays cargado!");

const estudiantes = [
    {
        nombre: "Ana", nota: 8, curso:"Matemáticas"
    },
    {
        nombre: "Luis", nota: 4, curso:"Historia"
    },
    {
        nombre:"Carlos", nota: 9, curso:"Matemáticas"
    },
    {
        nombre:"Sofia", nota: 5, curso:"Ciencias"
    },
    {
        nombre:"David", nota: 3, curso:"Matemáticas"
    }
]

// ==========================================================================
//  EJERCICIO: Filtrar Estudiantes Aprobados
// ==========================================================================
//  - Problema: Crea una función `obtenerAprobados` que reciba el array
//    `estudiantes` y devuelva un NUEVO ARRAY que contenga únicamente
//    a los estudiantes cuya `nota` sea mayor o igual a 5.

// --- Guía Lógica Paso a Paso ---
// 1. Define una función `obtenerAprobados` que acepte un parámetro `listaEstudiantes`.
// 2. Dentro, crea un array vacío llamado `aprobados`.
// 3. Usa un bucle `for` para recorrer cada `estudiante` en `listaEstudiantes`.
// 4. En cada vuelta, usa un `if` para verificar si `estudiante.nota` es >= 5.
// 5. Si la condición es verdadera, añade el `estudiante` completo al array `aprobados`.
// 6. Después del bucle, devuelve (return) el array `aprobados`.

console.log("\n--- Ejercicio: Filtrar Estudiantes Aprobados ---");

function obtenerAprobados(listaEstudiantes){
    const aprobados = [];
    for( let i = 0; i < listaEstudiantes.length; i++)
    {
        const estudiantesActual = listaEstudiantes[i];
        if(estudiantesActual.nota >= 5)
        {
            aprobados.push(estudiantesActual);
        }
    }
    return aprobados;
}


// --- Zona de Prueba ---
const estudiantesAprobados = obtenerAprobados(estudiantes);
console.log("Estudiantes Aprobados: ",estudiantesAprobados);
// Debería mostrar un array con Ana, Carlos y Sofía.

const listaVacia = [];
const aprobadosDeListaVacia = obtenerAprobados(listaVacia);
console.log("Aprobados de lista vacía:", aprobadosDeListaVacia);
// Debería mostrar un array vacío [].


console.log("\n --- ¡Mas Ejercicios Sobre filtrado de arrays");

// ==========================================================================
//  EJERCICIO 1: Filtrar Productos en Stock
// ==========================================================================
//  - Problema: Tienes una lista de productos de una tienda. Necesitas crear
//    una función que devuelva una nueva lista solo con los productos
//    que están disponibles en stock.
// ==========================================================================

const productos = [
    {
        id: 1, nombre:"Laptop", enStock:true
    },
    {
        id: 2, nombre:"Mouse", enStock:false
    },
    {
        id: 3, nombre: "Teclado", enStock:true
    },
    {
        id: 4, nombre:"Monitor", enStock:true
    },
    {
        id: 5, nombre: "Silla Gamer", enStock:false
    }
];


// --- Guía Lógica Paso a Paso ---
// 1. Define una función `filtrarEnStock` que acepte un parámetro `listaProductos`.
// 2. Dentro, crea un array vacío llamado `disponibles`.
// 3. Usa un bucle `for` para recorrer `listaProductos`.
// 4. En cada vuelta, obtén el producto actual (ej: `const productoActual = ...`).
// 5. Usa un `if` para verificar si la propiedad `enStock` del producto actual es `true`.
//    (Pista: `if (productoActual.enStock === true)` o simplemente `if (productoActual.enStock)`).
// 6. Si la condición es verdadera, añade el `productoActual` al array `disponibles` con `.push()`.
// 7. Después del bucle, devuelve (return) el array `disponibles`.

console.log("\n--- Ejercicio 1: Filtrar Productos en Stock ---");

function filtrarEnStock(listaProductos){
    const productoDis = [];
    for(i=0; i < listaProductos.length; i++ ){
        const listaActual = listaProductos[i];
        if(listaActual.enStock == true){
            productoDis.push(listaActual)
        }
    }
    return productoDis;
}

// --- Zona de Pruebas ---
const productosDisponibles = filtrarEnStock(productos);
console.log("Productos Disponibles:", productosDisponibles);
// Debería mostrar un array con Laptop, Teclado y Monitor.

// ==========================================================================
//  EJERCICIO 2: Filtrar Tareas Pendientes
// ==========================================================================
//  - Problema: Tienes una lista de tareas. Necesitas una función que devuelva
//    una nueva lista solo con las tareas que NO están completadas.
// ==========================================================================

console.log("\n--Filtrar Tareas Pendientes---");

const listaDeTareas = [
    {
        id: 10, descripcion: "Estudiar JavaScript", completada: true
    },
    {
        id: 20, descripcion: "Hacer Ejercicio", completada: false
    },
    {
        id: 30, descripcion:"Comprar viveres", completada: false
    },
    {
        id: 40, descripcion:"Pagar Facturas", completada: true
    }
]

// --- Guía Lógica Paso a Paso ---
// 1. Define una función `filtrarPendientes` que acepte un parámetro `tareas`.
// 2. Dentro, crea un array vacío llamado `pendientes`.
// 3. Usa un bucle `for` para recorrer el array `tareas`.
// 4. En cada vuelta, obtén la tarea actual.
// 5. Usa un `if` para verificar si la propiedad `completada` de la tarea es `false`.
//    (Pista: `if (tareaActual.completada === false)`).
// 6. Si la condición es verdadera, añade la `tareaActual` al array `pendientes` con `.push()`.
// 7. Después del bucle, devuelve (return) el array `pendientes`.

function filtrarPendientes(tareas){
    const pendientes = [];
    for( let i=0; i < tareas.length; i++ )
    {
        const listaPendientes = tareas[i];
        if(listaPendientes.completada === false)
        {
            pendientes.push(listaPendientes)
        }
    }
    return pendientes;
}


// --- Zona de Pruebas ---
const tareasPendientes = filtrarPendientes(listaDeTareas);
console.log("Tareas Pendientes:", tareasPendientes);
// Debería mostrar un array con "Hacer ejercicio" y "Comprar víveres".
