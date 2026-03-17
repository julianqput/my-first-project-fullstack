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