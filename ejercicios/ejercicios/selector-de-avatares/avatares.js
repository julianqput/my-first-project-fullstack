console.log("¡Script del Selector de Avatares cargado!");

const avatares = [
    {
        nombre: "León Valiente",
        ImagenSrc: "https://placehold.co/150x150/F39C12/FFFFFF?text=León"
    },
    {
        nombre : "Águila Imperial",
        ImagenSrc : "https://placehold.co/150x150/3498DB/FFFFFF?text=Águila"
    },
    {
        nombre : "Lobo Astuto",
        ImagenSrc : "https://placehold.co/150x150/95A5A6/FFFFFF?text=Lobo" 
    },
    {
        nombre : "Panda Pacífico",
        ImagenSrc : "https://placehold.co/150x150/2ECC71/FFFFFF?text=Panda"
    },
    {
        nombre : "Tigre Feroz",
        ImagenSrc : "https://placehold.co/150x150/E67E22/FFFFFF?text=Tigre"
    }
];

const elementoImage = document.querySelector('#avatar-imagen');
const elementoNombre = document.querySelector('#avatar-nombre');
const botonCambiar = document.querySelector('#btn-cambiar-avatar');

function cambiarAvatar(){
    // 2. Genera un índice aleatorio.
    const indiceAleatorio = Math.floor(Math.random()*avatares.length);
    // 3. Selecciona el avatar usando el índice.
    const avatarSeleccionado = avatares[indiceAleatorio];
    // 4. Actualiza la imagen en la página.
    elementoImage.src = avatarSeleccionado.ImagenSrc;
    // 5. Actualiza el nombre en la página.
    elementoNombre.textContent = avatarSeleccionado.nombre;
}


// ==========================================================================
//  PASO 4: AÑADIR EL EVENTO AL BOTÓN
// ==========================================================================
// Guía Lógica:
// 1. Añade un 'escuchador de eventos' de tipo 'click' al `botonCambiar`.
// 2. Cuando el usuario haga clic, debe llamar a la función `cambiarAvatar`.

botonCambiar.addEventListener('click', cambiarAvatar);