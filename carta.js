document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para el nombre del invitado
    const urlParams = new URLSearchParams(window.location.search);
    let guestName = urlParams.get('guest');

    if (guestName) {
        guestName = decodeURIComponent(guestName);
        document.getElementById('guest-name').innerText = guestName;
    }

    // 2. Configuración del Botón de WhatsApp
    const myPhone = "573142748069"; // Tu número de contacto
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const msg = `¡Hola! Confirmo mi asistencia para ${guestName || "mi familia"}. ¡Muchas gracias!`;
    whatsappBtn.href = `https://wa.me/${myPhone}?text=${encodeURIComponent(msg)}`;

    // 3. Animaciones al Scroll
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