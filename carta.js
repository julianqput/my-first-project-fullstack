document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica del nombre del invitado desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('guest');

    if (guestName) {
        guestName = decodeURIComponent(guestName);
        document.getElementById('guest-name').innerText = guestName;
    } else {
        guestName = "mi familia"; // Para el mensaje de WhatsApp
        document.getElementById('guest-name').innerText = "Familia y Amigos";
    }

    // 2. Configuración de los 3 botones de WhatsApp
    const msg = encodeURIComponent(`¡Hola! Confirmo mi asistencia para ${guestName}. ¡Muchas gracias! ✨`);

    const phone1 = "573182231079"; // Reyes
    const phone2 = "573142748069"; // Monica
    const phone3 = "573193484647"; // Cristina

    if(document.getElementById('whatsapp-btn-1')) {
        document.getElementById('whatsapp-btn-1').href = `https://wa.me/${phone1}?text=${msg}`;
    }
    if(document.getElementById('whatsapp-btn-2')) {
        document.getElementById('whatsapp-btn-2').href = `https://wa.me/${phone2}?text=${msg}`;
    }
    if(document.getElementById('whatsapp-btn-3')) {
        document.getElementById('whatsapp-btn-3').href = `https://wa.me/${phone3}?text=${msg}`;
    }

    // 3. Lógica del Contador (Para el 24 de Junio de 2026)
    const eventDate = new Date('June 24, 2026 20:00:00').getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if(document.getElementById('days')) {
            document.getElementById('days').innerText = d < 10 ? '0'+d : d;
            document.getElementById('hours').innerText = h < 10 ? '0'+h : h;
            document.getElementById('minutes').innerText = m < 10 ? '0'+m : m;
        }
    }, 1000);

    // 4. Generador de Brillos
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

    // 5. Observador para animaciones al hacer scroll
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