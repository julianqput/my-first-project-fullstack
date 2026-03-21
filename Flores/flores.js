document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('bloom-btn');
    const envelope = document.getElementById('envelope');
    const garden = document.getElementById('garden');

    // Abrir sobre
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    // Crear flores amarillas
    btn.addEventListener('click', () => {
        for (let i = 0; i < 15; i++) {
            setTimeout(createFlower, i * 200);
        }
    });

    function createFlower() {
        const flower = document.createElement('div');
        flower.innerHTML = '🌻';
        flower.style.position = 'absolute';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = '110vh';
        flower.style.fontSize = Math.random() * 30 + 20 + 'px';
        flower.style.transition = 'transform 3s linear, opacity 3s';
        
        garden.appendChild(flower);

        // Animación de subida
        setTimeout(() => {
            flower.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
            flower.style.opacity = '0';
        }, 100);

        // Limpiar DOM
        setTimeout(() => {
            flower.remove();
        }, 3000);
    }
});