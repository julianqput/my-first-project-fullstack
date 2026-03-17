window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Quitar el cargador después de 2 segundos
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 2000);

    // 2. Personalización del Invitado por URL
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('guest') || "Familia Especial";
    document.getElementById('guest-name').textContent = decodeURIComponent(guestName);

    // 3. Configurar WhatsApp dinámico
    const phone = "573142748069";
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const text = `¡Hola! Confirmo mi asistencia para ${guestName}. ✨`;
    whatsappBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // 4. Efecto de aparición al hacer Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const showOnScroll = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', showOnScroll);
    showOnScroll(); // Ejecutar una vez al inicio
});