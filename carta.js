document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener nombre de la URL
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('guest');

    if (guestName) {
        guestName = decodeURIComponent(guestName);
        document.getElementById('guest-name').innerText = guestName;
    } else {
        document.getElementById('guest-name').innerText = "Familia y Amigos";
    }

    // 2. Configurar WhatsApp
    const myPhone = "573142748069"; 
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const finalName = guestName || "mi familia";
    const msg = `¡Hola! Confirmo mi asistencia para ${finalName}. ¡Muchas gracias por la invitación! ✨`;
    
    whatsappBtn.href = `https://wa.me/${myPhone}?text=${encodeURIComponent(msg)}`;

    // 3. Observador para animaciones
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

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Contador ---
    const eventDate = new Date('June 24, 2026 20:00:00').getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').innerText = d < 10 ? '0'+d : d;
        document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
        document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
    }, 1000);

    // --- Generador de Brillos (Actividad) ---
    function createSparkle() {
        const s = document.createElement('div');
        s.classList.add('sparkle');
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = '100vh';
        s.style.animation = `float ${Math.random() * 3 + 2}s linear infinite`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 5000);
    }
    setInterval(createSparkle, 300);
});