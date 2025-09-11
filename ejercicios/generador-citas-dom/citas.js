console.log("¡Script del Generador de citas cargado!");

// ==========================================================================
//  PASO 1: LOS DATOS (NUESTRO ARRAY DE CITAS)
// ==========================================================================
// Este es un array de objetos. Cada objeto representa una cita.

const citas = [
    {
        texto: "La única forma de hacer un gran trabajo es amar lo que haces.",
        autor: "Steve Jobs"
    },
    {
        texto:"El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
        autor:"Winston Churchill"
    },
    {
        texto:"Cree que puedes y ya estás a medio camino",
        autor:"Theodore Roosevelt"
    },
    {
        texto:"La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        autor:"John Lennon"
    },
    {
        texto:"El futuro pertenece a quienes creen en la belleza de sus sueños.",
        autor:"Eleanor Roosevelt"
    }
]

// ==========================================================================
//  PASO 2: SELECCIONAR ELEMENTOS DEL HTML
//  Guarda en constantes los elementos que necesitarás manipular.
// ==========================================================================

// 2.1: El párrafo donde se mostrará el texto de la cita.
// Pista: Usa document.querySelector() con el ID '#cita-texto'.
// TU CÓDIGO AQUÍ:

const elementoCita = document.querySelector('#cita-texto');


// 2.2: El párrafo donde se mostrará el autor de la cita.
// Pista: Usa document.querySelector() con el ID '#cita-autor'.
// TU CÓDIGO AQUÍ:

const elementoAutor = document.querySelector('#cita-autor');


// 2.3: El botón que genera una nueva cita.
// Pista: Usa document.querySelector() con el ID '#boton-nueva-cita'.
// TU CÓDIGO AQUÍ:

const botonNuevaCita = document.querySelector('#boton-nueva-cita');


// ==========================================================================
//  PASO 3: CREAR LA FUNCIÓN PRINCIPAL
// ==========================================================================

// 3.1: Crea una función llamada `mostrarNuevaCita`.

function mostrarNuevaCita(){
     // 3.2: Dentro de la función, genera un número aleatorio entre 0 y el
    //      último índice del array `citas`.
    // Pista: Math.random() genera un número entre 0 y 1.
    // Multiplícalo por la longitud del array `citas.length`.
    // Usa Math.floor() para redondearlo hacia abajo y obtener un índice válido.
    // TU CÓDIGO AQUÍ:

    // 3.3: Genera un número aleatorio que sea un índice válido para el array 'citas'.
    const indiceAleatorio = Math.floor(Math.random() * citas.length);

    // 3.4: Usa el índice aleatorio para obtener un objeto de cita del array.
    const citaSeleccionada = citas[indiceAleatorio];

    // 3.5: Actualiza el texto de los elementos en la página.
    elementoCita.textContent = citaSeleccionada.texto;
    elementoAutor.textContent = `- ${citaSeleccionada.autor}`;// Añadimos un guion para el estilo
}

// ==========================================================================
//  PASO 4: AÑADIR EL EVENTO AL BOTÓN
// ==========================================================================


// 4.1: Añade un 'escuchador de eventos' al botón para que llame a la función
//      cuando el usuario haga clic.

botonNuevaCita.addEventListener('click', mostrarNuevaCita);