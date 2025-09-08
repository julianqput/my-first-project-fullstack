console.log("¡Script de manipulación del DOM cargado!");
// ==========================================================================
//  ¡TUS EJERCICIOS!
// ==========================================================================

// --- Ejercicio 1: Seleccionar y Modificar el Título ---
// 1. Selecciona el <h1> con la clase 'titulo-principal' usando querySelector.
// 2. Guarda el elemento en una constante llamada 'titulo'.
// 3. Cambia su contenido de texto (.textContent) a "¡Página Interactiva!".
// 4. Cambia su color de texto (.style.color) a 'purple'.

const titulo = document.querySelector('.titulo-principal');

// Paso 3: Cambiamos el texto del título.
titulo.textContent = "¡Página Interactiva!";

// Paso 4: Cambiamos el color del texto.
titulo.style.color = 'purple';

// --- Ejercicio 2: Seleccionar y Modificar el Botón ---
// 1. Selecciona el botón con el id 'mi-boton' usando querySelector.
// 2. Guarda el elemento en una constante llamada 'boton'.
// 3. Cambia su texto (.textContent) a "¡Presióname!".
// 4. Cambia su color de fondo (.style.backgroundColor) a 'green'.
 

const boton = document.querySelector('.boton');

// Paso 3: Cambiamos el texto del boton.
boton.textContent = "¡Presióname!";

// Paso 4: Cambiamos el color del fondo.
boton.style.backgroundColor = '#090866ff'; 

// --- Ejercicio 3: Seleccionar Múltiples Elementos y Modificarlos ---
// 1. Selecciona TODOS los <li> dentro de la lista '.lista-items' usando querySelectorAll.
// 2. Guarda los elementos en una constante llamada 'itemsDeLista'.
// 3. Usa un bucle `for` para recorrer cada elemento en 'itemsDeLista'.
// 4. Dentro del bucle, añade la clase 'resaltado' a cada ítem usando .classList.add().


const itemsDeLista = document.querySelectorAll('.lista-items li');

for (let i = 0; i < itemsDeLista.length; i++) {
  const itemActual = itemsDeLista[i];
  itemActual.classList.add('resaltado');
}
 

// --- Ejercicio 4 (Avanzado): Crear y Añadir un Nuevo Elemento ---
// 1. Crea un nuevo elemento <li> usando document.createElement().
// 2. Guárdalo en una constante llamada 'nuevoItem'.
// 3. Asígnale el texto "Cuarto Ítem (añadido desde JS)" a su .textContent.
// 4. Selecciona la lista <ul> con la clase '.lista-items'.
// 5. Añade el 'nuevoItem' al final de la lista usando .appendChild().

const nuevoItem = document.createElement('li'); 
nuevoItem.textContent = "Cuarto ítem (añadido dese JS)";

const lista = document.querySelector('.lista-items');
lista.appendChild(nuevoItem);


//Seleccionar el rpimer elemnto que coincida con un selector CSS:


//const miElemento = document.querySelector('.mi-clase'); // Selecciona por clase
//const otroElemento = document.querySelector('#mi-id');    // Selecciona por ID
//const titulo = document.querySelector('h1');            // Selecciona por etiqueta


//Seleccionar TODOS los elementos que coincidan con un selector de CSS:

//const todosLosItems = document.querySelectorAll('.lista li'); // Devuelve una lista de todos los <li> dentro de '.lista'


//Seleccionar un elemento por su id (forma clásica y muy rápida):
//const botonPrincipal = document.getElementById('boton-enviar');


//2. Modificar Elementos (Cambiar lo que ya existe)

//Cambiar el contenido de TEXTO:
//titulo.textContent = '¡Este es el nuevo título!';

//Cambiar el HTML interno (¡úsalo con cuidado!):
//const contenedor = document.querySelector('.contenedor');
//contenedor.innerHTML = '<h2>Nuevo Subtítulo</h2><p>Nuevo párrafo.</p>';


//Cambiar un atributo (como el src de una imagen o el href de un enlace):
//const imagen = document.querySelector('#logo');
//imagen.src = 'nuevo-logo.png';

//const enlace = document.querySelector('a');
// enlace.href = 'https://www.google.com';

//Cambiar estilos de CSS (se escribe en camelCase):
//const caja = document.querySelector('.caja-destacada');
//caja.style.backgroundColor = 'yellow';
//caja.style.fontSize = '24px';
//caja.style.border = '2px solid black';

//ñadir o quitar clases de CSS (la forma más profesional de cambiar estilos):
//const menu = document.querySelector('.menu');
//menu.classList.add('abierto');    // Añade la clase 'abierto'
//menu.classList.remove('cerrado'); // Quita la clase 'cerrado'
//menu.classList.toggle('visible'); // Si tiene la clase 'visible', la quita. Si no, la añade.


//Crear y Añadir Nuevos Elementos (Contenido Dinámico)
//Crear un nuevo elemento en la memoria:
//const nuevoParrafo = document.createElement('p');

//Añadir un nuevo elemento como el ÚLTIMO HIJO de otro:
//const contenedor = document.querySelector('.contenedor');
//nuevoParrafo.textContent = 'Este párrafo fue creado con JavaScript.';
//contenedor.appendChild(nuevoParrafo);

//4. Eliminar Elementos
//Eliminar un elemento de la página:
//const elementoAEliminar = document.querySelector('#elemento-viejo');
//elementoAEliminar.remove();

//5. Manejar Eventos (Hacer la Página Interactiva)
//Esto te permite ejecutar código en respuesta a las acciones del usuario.

//Escuchar un evento (como un clic):

//const miBoton = document.querySelector('#mi-boton');

//miBoton.addEventListener('click', function() {
  // El código que se ejecuta CUANDO el usuario hace clic
//  console.log('¡El botón fue presionado!');
//  document.body.style.backgroundColor = 'lightblue';
//});