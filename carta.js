document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica del nombre y mensaje personalizado
    // Función para crear la lluvia
function createRain() {
    const rainContainer = document.querySelector('.rain-container');
    const drop = document.createElement('div');
    
    drop.classList.add('drop');
    
    // Posición aleatoria horizontal
    drop.style.left = Math.random() * 100 + "vw";
    
    // Velocidad aleatoria para que se vea natural (entre 2 y 5 segundos)
    const duration = Math.random() * 3 + 2;
    drop.style.animationDuration = duration + "s";
    
    // Opacidad aleatoria para dar profundidad
    drop.style.opacity = Math.random() * 0.5;

    rainContainer.appendChild(drop);

    // Eliminar la gota después de que termine la animación
    setTimeout(() => {
        drop.remove();
    }, duration * 1000);
}

// Crear una gota cada 150 milisegundos (ajusta este número para más o menos lluvia)
setInterval(createRain, 150);

    
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('guest');
    const mensajeTexto = "Hoy comienza un capítulo lleno de magia en mi vida, y no sería lo mismo sin ti. ¡Te espero para celebrar mis XV años en una noche inolvidable!";

    const nameElement = document.getElementById('guest-name');
    const messageElement = document.getElementById('mensaje-personalizado');

    if (guestName) {
        guestName = decodeURIComponent(guestName);
        if (nameElement) nameElement.innerText = guestName;
    } else {
        guestName = "mi familia";
        if (nameElement) nameElement.innerText = "Familia y Amigos";
    }
    if (messageElement) messageElement.innerText = mensajeTexto;

    // 2. Configuración de los 3 botones de WhatsApp
    const msgWA = encodeURIComponent(`¡Hola! Confirmo mi asistencia para ${guestName}. ¡Muchas gracias! ✨`);
    const phones = { reyes: "573182231079", monica: "573142748069", cristina: "573193484647" };

    const btn1 = document.getElementById('whatsapp-btn-1');
    const btn2 = document.getElementById('whatsapp-btn-2');
    const btn3 = document.getElementById('whatsapp-btn-3');

    if (btn1) btn1.href = `https://wa.me/${phones.reyes}?text=${msgWA}`;
    if (btn2) btn2.href = `https://wa.me/${phones.monica}?text=${msgWA}`;
    if (btn3) btn3.href = `https://wa.me/${phones.cristina}?text=${msgWA}`;

    // 3. Contador Regresivo
    const eventDate = new Date('June 24, 2026 20:00:00').getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;
        if (diff <= 0) return;
        
        document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    }, 1000);

    // 4. Brillos (Sparkles)
    function createSparkle() {
    const s = document.createElement('div');
    s.classList.add('sparkle');
    // Cambiamos el estilo directamente para que sean rosados
    s.style.background = "radial-gradient(circle, #F8C8DC 0%, rgba(255,255,255,0) 70%)";
    s.style.left = Math.random() * 100 + 'vw';
    s.style.top = '100vh';
    s.style.animation = `float ${Math.random() * 2 + 1.5}s linear infinite`; // Más rápidos
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 4000);
}

// Reducimos el tiempo de 400 a 200 para que salgan más seguido
setInterval(createSparkle, 200);

    // 5. Animaciones de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show-animation');
        });
    });
    document.querySelectorAll('.animated').forEach(el => observer.observe(el));
});

