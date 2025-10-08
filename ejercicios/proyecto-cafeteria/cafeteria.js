console.log("¡Cargando contenido de la cafeteria!");

const productos = [
    {
        nombre:"Café de la Finca",
        descripcion:"Nuestro café de origen único, cultivado en las montañas de Risaralda con notas a chocolate y panela",
        imagen:"favicon/cafe_negro.jpg"
    },
    {
        nombre:"Torta de Chocolate de la Abuela",
        descripcion:"La receta secreta de la familia. Un bizcocho húmedo y una cobertura de chocolate que te hará feliz.",
        imagen:"favicon/torta_de_chocolate.jpg"
    },
    {
        nombre:"Arequipe Latte",
        descripcion:"Una mezcla dulce y cremosa de espresso, leche vaporizada y un toque generoso de arequipe local.",
        imagen:"favicon/vaso_late.jpg"
    },
    {
        nombre:"Pandebono Relleno",
        descripcion:"Nuestro pandebono tradicional, horneado al momento y relleno de queso mozzarella derretido.",
        imagen:"favicon/pandebono.jpg"
    }
]

const elementoImage = document.querySelector('#producto-imagen');
const elementoNombre = document.querySelector('#producto-nombre');
const elementoDescripcion = document.querySelector('#producto-descripcion');
const botonCambiar = document.querySelector('#cambiar-especial');

function cambiarEspecial (){
    const indiceAleatorio = Math.floor(Math.random()*productos.length);
    const especialSeleccionado = productos[indiceAleatorio];
    elementoImage.src = especialSeleccionado.imagen;
    elementoNombre.textContent = especialSeleccionado.nombre;
    elementoDescripcion.textContent = especialSeleccionado.descripcion;
}

botonCambiar.addEventListener('click', cambiarEspecial);