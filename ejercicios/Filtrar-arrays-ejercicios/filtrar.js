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