// --- PASO 1: Definir las opciones del juego ---
// Usamos un array (una lista) para guardar las posibles elecciones.


const opciones =["Piedra","Papel","Tijera"];

// --- PASO 2: La elección del usuario ---
// Por ahora, la escribimos directamente. ¡Prueba cambiarla a "papel" o "tijera" para ver qué pasa!


const eleccionUsuario = "Papel";

// --- PASO 3: La elección de la computadora (La parte nueva) ---
// ¿Cómo hacemos que la computadora elija al azar?


// 1. Math.random() nos da un número decimal aleatorio entre 0 y 0.99...
// 2. Lo multiplicamos por 3 (la cantidad de opciones) para obtener un número entre 0 y 2.99...
// 3. Math.floor() redondea el número hacia abajo al entero más cercano (0, 1 o 2).


const indiceAleatorio = Math.floor(Math.random()* 3);



const eleccionComputadora = opciones[indiceAleatorio];// Usamos el número para seleccionar de la lista.

// --- PASO 4: Mostrar las elecciones ---

console.log("Tú elegiste:",eleccionUsuario);

console.log("La computadora eligió: ",eleccionComputadora);

// --- PASO 5: Aplicar las reglas y decidir quién gana ---
// Usamos condicionales if/else if/else para comparar.

if(eleccionUsuario == eleccionComputadora){
    // Caso 1: Empate

    console.log("¡Es un empate!");

}else if(
        (eleccionUsuario === "Piedra" && eleccionComputadora === "Tijera") ||
        (eleccionUsuario === "Papel" && eleccionComputadora === "Piedra") ||
        (eleccionUsuario === "Tijera" && eleccionComputadora === "Papel")
){
    // Caso 2: El usuario gana.
  // Usamos '&&' (Y) para cada condición ganadora y '||' (O) para unirlas.
    console.log("¡Ganaste!");
}else{
    // Caso 3: Si no es un empate y no ganaste, la computadora gana.

    console.log("¡Perdiste! La computadora gana.");
}







