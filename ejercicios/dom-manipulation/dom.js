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


