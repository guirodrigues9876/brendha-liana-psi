const hambuguer = document.querySelector('.hamburguer');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

hambuguer.addEventListener('click', toggleMenu);
hambuguer.addEventListener('touchstart', toggleMenu);

