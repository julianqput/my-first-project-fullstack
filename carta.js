/**
 * ARCHIVO: carta.js
 * DESCRIPCIÓN: Lógica para invitación de XV Años de Julieth
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMACIÓN AMBIENTAL
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
            particle.style.animationDelay = Math.random() * 2 + 's';

            container.appendChild(particle);
            setTimeout(() => particle.remove(), (duration + 2) * 1000);
        }

        setInterval(() => createParticle('petal'), 800);
        setInterval(() => createParticle('sparkle'), 500);
    }
    startAmbientAnimation();

    // 2. PERSONALIZACIÓN DE INVITADOS
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('guest');
    let relation = urlParams.get('rel'); 

    const nameElement = document.getElementById('guest-name');
    const messageElement = document.getElementById('mensaje-personalizado');

    const mensajes = {
        "amigo": "¡Prepárate para la mejor fiesta del año! No puedo esperar a bailar y celebrar contigo mis 15. ¡Será épico!",
        "familia": "Eres una parte esencial de nuestra historia. Me haría muy feliz contar con tu presencia en esta noche tan especial.",
        "especial": "Tu apoyo y cariño han sido fundamentales en mi camino. Sería un verdadero honor que me acompañaras.",
        "default": "Hoy comienza un capítulo lleno de magia en mi vida, y no sería lo mismo sin ti. ¡Te espero!"
    };

    // Aplicar Nombre y Mensaje
    if (guestName) {
        guestName = decodeURIComponent(guestName);
        nameElement.innerText = guestName;
    } else {
        guestName = "Familia y Amigos";
        nameElement.innerText = guestName;
    }
    messageElement.innerText = mensajes[relation] || mensajes["default"];

    // 3. WHATSAPP (Reyes, Monica, Cristina)
    const msgWA = encodeURIComponent(`¡Hola! Soy ${guestName}, confirmo con mucha alegría mi asistencia a los XV de Julieth. ✨`);
    const phones = { reyes: "573182231079", monica: "573142748069", cristina: "573193484647" };

    if(document.getElementById('whatsapp-btn-1')) document.getElementById('whatsapp-btn-1').href = `https://wa.me/${phones.reyes}?text=${msgWA}`;
    if(document.getElementById('whatsapp-btn-2')) document.getElementById('whatsapp-btn-2').href = `https://wa.me/${phones.monica}?text=${msgWA}`;
    if(document.getElementById('whatsapp-btn-3')) document.getElementById('whatsapp-btn-3').href = `https://wa.me/${phones.cristina}?text=${msgWA}`;

    // 4. CONTADOR (24 de Junio, 2026)
    const eventDate = new Date('June 24, 2026 20:00:00').getTime();
    const timerElements = {
        d: document.getElementById('days'),
        h: document.getElementById('hours'),
        m: document.getElementById('minutes'),
        s: document.getElementById('seconds')
    };

    const updateTimer = () => {
        const now = new Date().getTime();
        const diff = eventDate - now;
        
        if (diff <= 0) return;

        timerElements.d.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        timerElements.h.innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timerElements.m.innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        timerElements.s.innerText = Math.floor((diff % (1000 * 60)) / 1000);
    };
    setInterval(updateTimer, 1000);
    updateTimer();

    // 5. ANIMACIONES DE SCROLL
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show-animation');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated').forEach(el => observer.observe(el));
});