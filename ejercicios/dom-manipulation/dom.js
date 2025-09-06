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



