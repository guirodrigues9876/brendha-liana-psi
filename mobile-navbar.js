const hambuguer = document.querySelector('.hamburguer');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('area-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');     
    }
}

hambuguer.addEventListener('click', toggleMenu);
hambuguer.addEventListener('touchstart', toggleMenu);

