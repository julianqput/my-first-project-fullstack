document.addEventListener('DOMContentLoaded', () => {
    // 1. OBTENER PARÁMETROS DE LA URL (Solo se declaran una vez)
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('guest');
    const mensajeTexto = "Hoy comienza un capítulo lleno de magia en mi vida, y no sería lo mismo sin ti. ¡Te espero para celebrar mis XV años en una noche inolvidable!";

    // 2. LÓGICA DE BIENVENIDA Y MENSAJE PERSONALIZADO
    const nameElement = document.getElementById('guest-name');
    const messageElement = document.getElementById('mensaje-personalizado');

    if (guestName) {
        guestName = decodeURIComponent(guestName);
        if (nameElement) nameElement.innerText = guestName;
    } else {
        guestName = "mi familia"; // Para el mensaje de WhatsApp
        if (nameElement) nameElement.innerText = "Familia y Amigos";
    }

    if (messageElement) {
        messageElement.innerText = mensajeTexto;
    }

    // 3. CONFIGURACIÓN DE LOS 3 BOTONES DE WHATSAPP
    const msgWhatsApp = encodeURIComponent(`¡Hola! Confirmo mi asistencia para ${guestName}. ¡Muchas gracias! ✨`);
    
    const phones = {
        reyes: "573182231079",
        monica: "573142748069",
        cristina: "573193484647"
    };

    const btn1 = document.getElementById('whatsapp-btn-1');
    const btn2 = document.getElementById('whatsapp-btn-2');
    const btn3 = document.getElementById('whatsapp-btn-3');

    if (btn1) btn1.href = `https://wa.me/${phones.reyes}?text=${msgWhatsApp}`;
    if (btn2) btn2.href = `https://wa.me/${phones.monica}?text=${msgWhatsApp}`;
    if (btn3) btn3.href = `https://wa.me/${phones.cristina}?text=${msgWhatsApp}`;

    // 4. LÓGICA DEL CONTADOR
    const eventDate = new Date('June 24, 2026 20:00:00').getTime();
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');

    setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (daysEl) daysEl.innerText = d < 10 ? '0' + d : d;
        if (hoursEl) hoursEl.innerText = h < 10 ? '0' + h : h;
        if (minsEl) minsEl.innerText = m < 10 ? '0' + m : m;
    }, 1000);

    // 5. BRILLOS Y ANIMACIONES
    function createSparkle() {
        const s = document.createElement('div');
        s.classList.add('sparkle');
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = '100vh';
        s.style.animation = `float ${Math.random() * 3 + 2}s linear infinite`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 5000);
    }
    setInterval(createSparkle, 400);

    const animatedElements = document.querySelectorAll('.animated');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animation');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});