// ==========================================================================
//  TEMA 10: Funciones y el Principio DRY (Don't Repeat Yourself)
// ==========================================================================

// --- El Problema: Código Repetido ---
// Tenemos las notas de tres estudiantes.
const nota1 = 7;
const nota2 = 4;
const nota3 = 9;


// --- TU MISIÓN ---
// 1. Crea una función llamada `verificarAprobacion`.
// 2. La función debe aceptar un parámetro, que será la `nota` a verificar.
// 3. Dentro de la función, mueve la lógica del `if/else` que verifica si una
//    nota es mayor o igual a 5.
// 4. En lugar de imprimir en la consola, la función debe DEVOLVER (return)
//    un string: "Aprobado" si la condición se cumple, o "Reprobado" si no.
// 5. Una vez creada la función, úsala (llámala) para cada uno de los tres estudiantes.
// 6. Muestra los resultados en la consola de una forma clara.
//    Ejemplo: console.log(`La nota ${nota1} corresponde a un estado: ${resultado1}`);

console.log("--- Ejercicio: Verificador de Notas con una Función ---");

function verificarAprobacion(nota){
    if(nota>=5)
    {
        return "Aprobado";
    }else{
        return "Reprobado";
    }
}

// 5. Llama a tu función para cada nota y guarda los resultados.
// const resultado1 = verificarAprobacion(nota1);
// ... y así para las otras notas.

const estudiantes1 = verificarAprobacion(nota1);
const estudiantes2 = verificarAprobacion(nota2);
const estudiantes3 = verificarAprobacion(nota3);

console.log(`El estudiante ha,${estudiantes1}!`);
console.log(`El estudiante ha,${estudiantes2}!`);
console.log(`El estudiante ha,${estudiantes3}!`);

/*console.log(`La nota ${nota1} corresponde a un estado: ${resultado1}`);
console.log(`La nota ${nota2} corresponde a un estado: ${resultado2}`);
console.log(`La nota ${nota3} corresponde a un estado: ${resultado3}`);*/ ///esta es otra forma en la que se puede presentar

// 6. Muestra los resultados en la consola.




