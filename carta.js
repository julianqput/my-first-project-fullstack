/**
 * ARCHIVO: carta.js
 * DESCRIPCIÓN: Lógica para invitación de XV Años - Estilo Rosado Pastel & Oro
 */

// 1. FUNCIÓN DE ANIMACIÓN AMBIENTAL (Pétalos y Brillos constantes)
function startAmbientAnimation() {
    const container = document.getElementById('ambient-particles');
    if (!container) return;

    function createParticle(type) {
        const particle = document.createElement('div');
        const isPetal = type === 'petal';
        
        particle.classList.add(isPetal ? 'petal' : 'sparkle-particle');
        
        // Tamaños aleatorios para dar profundidad (efecto 3D)
        const size = isPetal ? (Math.random() * 15 + 10) : (Math.random() * 6 + 2);
        particle.style.width = size + 'px';
        particle.style.height = isPetal ? (size * 1.2) + 'px' : size + 'px';
        
        // Posición horizontal aleatoria en toda la pantalla
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Duración de caída entre 6 y 12 segundos (suave y elegante)
        const duration = Math.random() * 6 + 6;
        particle.style.animationDuration = duration + 's';
        
        // Retraso para que no caigan todos al mismo tiempo al cargar
        particle.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(particle);

        // Limpieza de memoria: eliminar el elemento después de que termine de caer
        setTimeout(() => {
            particle.remove();
        }, (duration + 5) * 1000);
    }

    // Generar partículas iniciales para que la página no empiece vacía
    for(let i = 0; i < 20; i++) {
        createParticle('petal');
        createParticle('sparkle');
    }

    // Ciclo continuo de creación (Intensidad controlada)
    setInterval(() => createParticle('petal'), 600); // Un pétalo cada 0.6 seg
    setInterval(() => createParticle('sparkle'), 400); // Un brillo cada 0.4 seg
}

// 2. INICIO DE TODA LA LÓGICA AL CARGAR EL DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // Iniciar la animación de pétalos de fondo
    startAmbientAnimation();

    // --- LÓGICA DE NOMBRE Y MENSAJE PERSONALIZADO ---
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('guest');
    const mensajeTexto = "Hoy comienza un capítulo lleno de magia en mi vida, y no sería lo mismo sin ti. ¡Te espero para celebrar mis XV años en una noche inolvidable!";

    const nameElement = document.getElementById('guest-name');
    const messageElement = document.getElementById('mensaje-personalizado');

    if (guestName) {
        guestName = decodeURIComponent(guestName);
        if (nameElement) nameElement.innerText = guestName;
    } else {
        guestName = "mi familia y amigos";
        if (nameElement) nameElement.innerText = "Familia y Amigos";
    }
    if (messageElement) messageElement.innerText = mensajeTexto;

    // --- CONFIGURACIÓN DE BOTONES DE WHATSAPP ---
    const msgWA = encodeURIComponent(`¡Hola! Confirmo mi asistencia para ${guestName}. ¡Muchas gracias! ✨`);
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

    // --- CONTADOR REGRESIVO (24 de Junio, 2026) ---
    const eventDate = new Date('June 24, 2026 20:00:00').getTime();
    
    const updateTimer = () => {
        const now = new Date().getTime();
        const diff = eventDate - now;
        
        if (diff <= 0) return;
        
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if(document.getElementById('days')) document.getElementById('days').innerText = d;
        if(document.getElementById('hours')) document.getElementById('hours').innerText = h;
        if(document.getElementById('minutes')) document.getElementById('minutes').innerText = m;
    };

    setInterval(updateTimer, 1000);
    updateTimer(); // Llamada inicial para evitar el retraso de 1 segundo

    // --- BRILLOS FLOTANTES (Ascendentes) ---
    function createSparkle() {
        const s = document.createElement('div');
        s.classList.add('sparkle');
        
        // Color Rosado Pastel con centro transparente
        s.style.background = "radial-gradient(circle, #F8C8DC 0%, rgba(255,255,255,0) 70%)";
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = '100vh';
        
        // Animación de subida rápida
        s.style.animation = `float ${Math.random() * 2 + 1.5}s linear infinite`;
        
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 4000);
    }

    setInterval(createSparkle, 200);

    // --- OBSERVER PARA ANIMACIONES DE SCROLL ---
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animation');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animated').forEach(el => observer.observe(el));
});