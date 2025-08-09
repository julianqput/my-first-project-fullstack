alert('Hello world!!');

for (let i = 1; i <=10; i++){
        // La condición para saber si un número es par es correcta.
  if (i % 2 === 0){
    // Usamos el operador '+' para unir el texto con el valor de la variable i.
    console.log("El número " + i + " es par");
  } else {
    // Hacemos lo mismo para el mensaje de los números impares.
    console.log("El número " + i + " es impar");
  }
}   