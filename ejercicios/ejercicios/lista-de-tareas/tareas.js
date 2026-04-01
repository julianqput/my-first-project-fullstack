// ==========================================================================
//  MINI-PROYECTO 2: Lógica para una App de Lista de Tareas
// ==========================================================================

// --- PASO 1: El "Estado" de nuestra aplicación ---
// Este es el array que guardará todas nuestras tareas.
// Lo empezamos con algunas tareas de ejemplo.

let tareas = ["Estudiar HTML","Practicar CSS","Aprender JavaScript"];
console.log(tareas)
// ==========================================================================
//  Nuestras "Máquinas" (Funciones)
// ==========================================================================

// --- FUNCIÓN 1: Añadir una Tarea ---
// Guía: Esta función debe aceptar un parámetro (el nombre de la nueva tarea).
//       Dentro, debe usar el método .

function agregarTarea(nombreTarea){
    tareas.push(nombreTarea);
    console.log(`Tarea"${nombreTarea}" añadida.`);
}

// --- FUNCIÓN 2: Eliminar una Tarea ---
// Guía: Esta función debe aceptar un parámetro (el 'indice' de la tarea a eliminar).
//       Dentro, debe usar el método .splice() para eliminar un elemento del array.
//       (Pista: tareas.splice(indice, 1) significa: "en el array tareas, ve a la
//        posición 'indice' y elimina 1 elemento").

// --- FUNCIÓN 2: Eliminar una Tarea ---
function eliminarTarea(indice) {
  // CORRECCIÓN: La condición debe ser >= 0 para incluir el primer elemento.
  if (indice >= 0 && indice < tareas.length) {
    // .splice() modifica el array original y devuelve un array con los elementos eliminados.
    const tareaEliminada = tareas.splice(indice, 1);
    console.log("tarea eliminada",tareaEliminada);
  } else {
    console.log("Índice no válido. No se eliminó ninguna tarea.");
  }
}

// --- FUNCIÓN 3: Mostrar todas las Tareas ---

function mostrarTareas(){
console.log("--- Mi lista de Tareas ---");
if ( tareas.length === 0){
    console.log("No hay tareas pendientes.");
}else{
    for ( let i = 0; i < tareas.length; i++   );
}
}

// ==========================================================================
//  Zona de Pruebas
//  - Aquí es donde llamamos a nuestras funciones para ver si funcionan.
// ==========================================================================

// 1. Muestra la lista inicial.
mostrarTareas();

// 2. Agrega una nueva tarea.
console.log("\n...Añadiendo una nueva tarea...");
agregarTarea("Dominar Funciones");

// 3. Muestra la lista de nuevo para ver el cambio.
mostrarTareas();

// 4. Elimina la segunda tarea ("Practicar CSS", que está en el índice 1).
console.log("\n...Eliminando la segunda tarea...");
eliminarTarea(1);

// 5. Muestra la lista final.
mostrarTareas();