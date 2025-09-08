console.log("¡Script de la App de tareas cargado!");

// ==========================================================================
//  PASO 1: SELECCIONAR ELEMENTOS
//  Guarda en constantes los elementos que necesitarás manipular.
// ==========================================================================

// 1.1: El input donde el usuario escribe la nueva tarea.
// Pista: Usa document.querySelector() con el ID '#nueva-tarea-input'.
const inputTarea = document.querySelector('#nueva-tarea-input');

// 1.2: El botón para agregar tareas.
// Pista: Usa document.querySelector() con el ID '#agregar-tarea-btn'.
const botonAgregar = document.querySelector('#agregar-tarea-btn');

// 1.3: La lista <ul> donde se mostrarán las tareas.
// Pista: Usa document.querySelector() con el ID '#lista-de-tareas'
const listaDeTareas = document.querySelector('#lista-de-tareas');

// ==========================================================================
//  PASO 2: CREAR LA FUNCIÓN PARA AÑADIR UNA NUEVA TAREA
// ==========================================================================

// 2.1: Crea una función llamada `agregarTarea`.

function crearTarea(){
    // 2.2: Dentro de la función, obtén el texto que el usuario escribió en el input.
    const textoTarea = inputTarea.Value; 

    if( textoTarea.trim()=== ""){
        return;// El .trim() elimina espacios en blanco al inicio y al final
    }

    // 2.4: Crea un nuevo elemento <li>. Será el contenedor de nuestra tarea.
    const nuevaTarea = document.createElement('li');

    // 2.5: Añádele la clase 'tarea-item' para que tome los estilos del CSS.
    nuevaTarea.classList.add('tarea-item');

    // 2.6: Ahora, crea el contenido interno del <li>. Usaremos .innerHTML
    //      para añadir el texto y el botón de eliminar de una sola vez.
    
}

