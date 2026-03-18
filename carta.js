/**
 * ARCHIVO: carta.js
 * DESCRIPCIÓN: Lógica para invitación de XV Años de Julieth - Estilo Rosado Pastel & Oro
 */

// 1. FUNCIÓN DE ANIMACIÓN AMBIENTAL (Pétalos y Brillos constantes)
function startAmbientAnimation() {
    const container = document.getElementById('ambient-particles');
    if (!container) return;

    function createParticle(type) {
        const particle = document.createElement('div');
        const isPetal = type === 'petal';
        
        particle.classList.add(isPetal ? 'petal' : 'sparkle-particle');
        
        const size = isPetal ? (Math.random() * 15 + 10) : (Math.random() * 6 + 2);
        particle.style.width = size + 'px';
        particle.style.height = isPetal ? (size * 1.2) + 'px' : size + 'px';
        particle.style.left = Math.random() * 100 + 'vw';
        
        const duration = Math.random() * 6 + 6;
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, (duration + 5) * 1000);
    }

    for(let i = 0; i < 20; i++) {
        createParticle('petal');
        createParticle('sparkle');
    }

    setInterval(() => createParticle('petal'), 600);
    setInterval(() => createParticle('sparkle'), 400);
}

// 2. INICIO DE TODA LA LÓGICA AL CARGAR EL DOM
document.addEventListener('DOMContentLoaded', () => {
    
    startAmbientAnimation();

    // --- LÓGICA DE PERSONALIZACIÓN AVANZADA ---
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('guest');
    let relation = urlParams.get('rel'); // Obtiene la relación: amigo, familia, etc.

    const nameElement = document.getElementById('guest-name');
    const messageElement = document.getElementById('mensaje-personalizado');

    // Diccionario de mensajes según el tipo de invitado
    const mensajesPersonalizados = {
        "default": "Hoy comienza un capítulo lleno de magia en mi vida, y no sería lo mismo sin ti. ¡Te espero para celebrar mis XV años en una noche inolvidable!",
        "amigo": "¡Prepárate para la mejor fiesta del año! No puedo esperar a bailar y celebrar contigo mis 15. ¡Será épico!",
        "familia": "Eres una parte esencial de mi historia y de mi familia. Me haría muy feliz contar con tu presencia en esta noche tan especial.",
        "especial": "Tu apoyo y cariño han sido fundamentales en mi camino. Sería un verdadero honor que me acompañaras a celebrar mis XV años.",
    };

    // Aplicar Nombre
    if (guestName) {
        guestName = decodeURIComponent(guestName);
        if (nameElement) nameElement.innerText = guestName;
    } else {
        guestName = "mi familia y amigos";
        if (nameElement) nameElement.innerText = "Familia y Amigos";
    }

    // Aplicar Mensaje según relación (si no existe, usa el default)
    const textoFinal = mensajesPersonalizados[relation] || mensajesPersonalizados["default"];
    if (messageElement) messageElement.innerText = textoFinal;

    // --- CONFIGURACIÓN DE BOTONES DE WHATSAPP ---
    // El mensaje de confirmación ahora incluye el nombre del invitado automáticamente
    const msgWA = encodeURIComponent(`¡Hola! Soy ${guestName}, confirmo con mucha alegría mi asistencia a los XV de Julieth. ✨`);
    const phones = { 
        reyes: "573182231079", 
        monica: "573142748069", 
        cristina: "573193484647" 
    };

    const btn1 = document.getElementById('whatsapp-btn-1');
    const btn2 = document.getElementById('whatsapp-btn-2');
    const btn3 = document.getElementById('whatsapp-btn-3');

    if (btn1) btn1.href = `https://wa.me/${phones.reyes}?text=${msgWA}`;
    if (btn2) btn2.href = `https://wa.me/${phones.monica}?text=${msgWA}`;
    if (btn3) btn3.href = `https://wa.me/${phones.cristina}?text=${msgWA}`;

    // --- CONTADOR REGRESIVO ---
    const eventDate = new Date('June 24, 2026 20:00:00').getTime();
    const updateTimer = () => {
        const now = new Date().getTime();
        const diff = eventDate - now;
        if (diff <= 0) return;
        
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000); // <-- Cálculo de segundos

        if(document.getElementById('days')) document.getElementById('days').innerText = d;
        if(document.getElementById('hours')) document.getElementById('hours').innerText = h;
        if(document.getElementById('minutes')) document.getElementById('minutes').innerText = m;
        if(document.getElementById('seconds')) document.getElementById('seconds').innerText = s; // <-- Mostrar segundos
    };
    setInterval(updateTimer, 1000);
    updateTimer();

    // --- BRILLOS FLOTANTES ---
    function createSparkle() {
        const s = document.createElement('div');
        s.classList.add('sparkle');
        s.style.background = "radial-gradient(circle, #F8C8DC 0%, rgba(255,255,255,0) 70%)";
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = '100vh';
        s.style.animation = `float ${Math.random() * 2 + 1.5}s linear infinite`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 4000);
    }
    setInterval(createSparkle, 200);

    // --- OBSERVER PARA ANIMACIONES DE SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show-animation');
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animated').forEach(el => observer.observe(el));
});