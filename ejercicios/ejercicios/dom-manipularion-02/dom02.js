console.log("¡Script de la App de Tareas cargado!");

// ==========================================================================
//  PASO 1: SELECCIONAR ELEMENTOS
//  Guarda en constantes los elementos que necesitarás manipular.
// ==========================================================================

const inputTarea = document.querySelector('#nueva-tarea-input');
const botonAgregar = document.querySelector('#agregar-tarea-btn');
const listaDeTareas = document.querySelector('#lista-de-tareas');

// ==========================================================================
//  PASO 2: CREAR LA FUNCIÓN PARA AÑADIR UNA NUEVA TAREA
// ==========================================================================

function agregarTarea() {
    // CORRECCIÓN 1: La propiedad es '.value' (con 'v' minúscula).
    const textoTarea = inputTarea.value;

    if (textoTarea.trim() === "") {
        return;
    }

    const nuevaTarea = document.createElement('li');
    nuevaTarea.classList.add('tarea-item');

    // CORRECCIÓN 2: Faltaba un '=' en class="texto-tarea".
    nuevaTarea.innerHTML = `
        <span class="texto-tarea">${textoTarea}</span>
        <button class="btn-eliminar">X</button>
    `;

    listaDeTareas.appendChild(nuevaTarea);

    // CORRECCIÓN 1 (de nuevo): La propiedad es '.value'.
    inputTarea.value = '';


    // ==========================================================================
    //  PASO 4: AÑADIR EVENTOS A LOS NUEVOS ELEMENTOS (DENTRO DE `agregarTarea`)
    // ==========================================================================

    const botonEliminar = nuevaTarea.querySelector('.btn-eliminar');

    botonEliminar.addEventListener('click', function(evento) {
        // Detenemos la "propagación" para que al hacer clic en el botón de eliminar,
        // no se active también el clic en la tarea (que la tacharía).
        evento.stopPropagation(); 
        nuevaTarea.remove();
    });

    nuevaTarea.addEventListener('click', function() {
        nuevaTarea.classList.toggle('completada');
    // CORRECCIÓN 3: Faltaba el paréntesis de cierre ');' para el addEventListener.
    }); 
}

// ==========================================================================
//  PASO 3: ESCUCHAR LOS EVENTOS DEL USUARIO
// ==========================================================================

botonAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter') {
        agregarTarea();
    }
});

