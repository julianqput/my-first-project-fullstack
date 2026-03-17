function generarLink() {
    const nombre = document.getElementById('nombreInvitado').value;
    if (!nombre) return alert("Escribe un nombre");

    // TU URL BASE
    const urlBase = "https://julianqput.github.io/my-first-project-fullstack/index.html";
    
    // Creamos el link personalizado
    const link = `${urlBase}?guest=${encodeURIComponent(nombre)}`;
    
    // Mostrar resultado
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('linkFinal').innerText = link;
    
    // Configurar mensaje de WhatsApp
    const mensaje = encodeURIComponent(`¡Hola! Te compartimos nuestra invitación especial para los 15 años de Raquel. ¡Te esperamos! ✨\n\nMira la invitación aquí: ${link}`);
    document.getElementById('btnWhatsApp').href = `https://wa.me/?text=${mensaje}`;
}