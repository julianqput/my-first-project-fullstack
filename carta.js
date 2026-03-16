// Espera a que cargue todo el documento
document.addEventListener('DOMContentLoaded', () => {

    /* --- PARTE 1: Personalización del Nombre --- */
    
    // 1. Obtiene los parámetros de la URL (la parte después del '?')
    const urlParams = new URLSearchParams(window.location.search);
    
    // 2. Busca el parámetro 'guest' (invitado)
    let guestName = urlParams.get('guest');
    
    // 3. Si existe, limpia el nombre y actualiza el HTML
    if (guestName) {
        // Reemplaza guiones bajos por espacios y lo limpia
        guestName = decodeURIComponent(guestName).trim();
        
        // Selecciona el elemento HTML y cambia su texto
        const guestNameElement = document.getElementById('guest-name');
        guestNameElement.textContent = guestName;
        
        console.log(`Invitación personalizada para: ${guestName}`);
    } else {
        // Si no hay nombre en la URL, se queda el por defecto o uno genérico
        console.log('No se proporcionó nombre de invitado en la URL.');
    }

    /* --- PARTE 2: Configuración del Botón de WhatsApp --- */
    
    // Cambia esto por TU número de celular (con código de país sin '+')
    const myPhoneNumber = "573142748069"; // Usando el de Monica de la imagen

    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    // Prepara el mensaje automático
    const finalName = guestName ? guestName : "un invitado"; // Si no hay nombre, usa genérico
    const message = `¡Hola! Confirmo mi asistencia para ${finalName}. ¡Estamos muy emocionados! 🎉`;
    
    // Crea la URL final para WhatsApp (codificada correctamente)
    const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Asigna la URL al botón
    whatsappBtn.setAttribute('href', whatsappUrl);


    /* --- PARTE 3: Animaciones Simples al Scroll --- */
    
    // Selecciona todas las secciones con la clase 'animated'
    const animatedElements = document.querySelectorAll('.animated');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4; // Punto de activación (80% de la pantalla)

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('show-animation'); // Añade clase que activa CSS
            }
        });
    }

    // Ejecuta al cargar y al hacer scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Activa las que ya están visibles al inicio
});