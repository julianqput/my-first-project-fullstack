console.log("¡Script de Búsqueda en Arrays cargado!");

const inventario =[
    {
        id: 1, nombre:"Laptop Pro",precio:1200,categoria:"Electronicá"
    },
    {
        id: 2, nombre:"Mouse Inalámbrico",precio:25,categoria:"Accesorios"
    },
    {
        id: 3, nombre:"Teclado Mecánico",precio:80,categoria:"Accesorios"
    },
    {
        id: 4, nombre:"Monitor 4K",precio:450,categoria:"Electrónica"
    }
]

console.log("\n--- Ejercicio 1: Encontrar Producto por Nombre ---");

function EncontrarProductoPorNombre(nombreProducto){
    for( let i = 0; i < inventario.length; i++ ){
        if(inventario[i].nombre === nombreProducto){
            return inventario[i];
        }
    }
    return null;
}


const ProductoBuscado = EncontrarProductoPorNombre("Teclado Mecánico");
console.log("Producto en  encontradro:", ProductoBuscado);

const ProductoNoExiste = EncontrarProductoPorNombre("Silla gamer");
console.log("Producto no encontrado", ProductoNoExiste);


console.log("\n--- Ejercicio 2: Econtrar Producto por Categoria");

function FiltrarPorCategoria(categoria){
    for (let i = 0; i < inventario.length; i++)
    {
        if(inventario[i].categoria === categoria){
            return inventario[i];
        }
    }
    return null;
}

const Electronicos = FiltrarPorCategoria("Electrónica");
console.log("Producto de Electrónica",Electronicos);

const ropa = FiltrarPorCategoria("Ropa");
console.log("Producto de Ropa:",ropa);