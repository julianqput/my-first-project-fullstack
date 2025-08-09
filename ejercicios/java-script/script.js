let edad = 25; // Guardamos el número 25 en la caja "edad"
console.log(edad); // Muestra 25 en la consola del navegador

edad = 26; // Cambiamos el valor de la caja
console.log(edad); // Ahora muestra 26

const nombre = "Julian"  // Guardamos el texto "Julián"
console.log(nombre)

const saludo = "Hola mundo"; //String (Cadena de texto): Cualquier texto. Siempre va entre comillas (" o ').
const lenguaje = 'JavaScript';

const anio = 2025; //Number (Número): Cualquier número, ya sea entero o con decimales. No lleva comillas.   
const precio = 99.5;

const esMayorDeEdad = true; // boolean  
const tieneDescuento = false; //boolean

let proximaClase; //undefined: Es una variable que ha sido declarada pero a la que no se la ha asignado ningun valor
console.log(proximaClase); //Muestra undefined

let ganador = null; //null representa la ausencia intencional de un valor. Es como decir "esta caja esta vacia a proposito"


////if(si),else if(si no,si),else(si no)

const hora = 14;

if( hora < 12 ){
    console.log("Buenos dias");
}
else if ( hora < 18 ){
    console.log("Buenas tarde"); // Esta condición es true, así que se ejecuta este bloque.
}else{
    ("Buenas noches");  
}


////Bucle for: Es el más común. Se usa cuando sabes de antemano cuántas
///Inicio: Se ejecuta una vez al principio (ej: let i = 1).
//Condición: Se comprueba antes de cada repetición. Si es true, el bucle continúa.
///Incremento: Se ejecuta después de cada repetición (ej: i++ significa "aumentar i en 1").
//Este bucle contara del 1 al 5
for( let i = 1; i < 5; i++ )
{
    console.log("El numero es: "+1);
}

//Bucle while: Se usa cuando no sabes cuántas veces se repetirá el bucle. Continuará mientras la condición sea true.

let contador = 0;

while (contador < 3){
    console.log("Hola");
    contador++; // ¡Muy importante! Si no incrementas, el bucle será infinito.
}
// Muestra "Hola" 3 veces.