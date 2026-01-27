const track = document.querySelector('.track');
let index = 0;

document.querySelector('.next').onclick = () => {
    index++;
    track.style.transform = `translateX(${-280 * index}px)`;
};

document.querySelector('.prev').onclick = () => {
    index = Math.max(0, index - 1);
    track.style.transform = `translateX(${-280 * index}px)`;
};

// MODAL CONTATO
const btnContato = document.getElementById('openModal');
const modalContato = document.getElementById('modal');

btnContato.addEventListener('click', () => {
    modalContato.classList.add('active');
});

modalContato.addEventListener('click', (e) => {
    if (e.target === modalContato) {
        modalContato.classList.remove('active');
    }
});

// MODAL GITHUB
const btnGithub = document.querySelector('.btn.outline'); // botão "Ver meu trabalho"
const modalGithub = document.getElementById('modalGithub');
const cancelGithub = document.getElementById('cancelGithub');

btnGithub.addEventListener('click', () => {
    modalGithub.classList.add('active');
});

modalGithub.addEventListener('click', (e) => {
    if (e.target === modalGithub) {
        modalGithub.classList.remove('active');
    }
});

cancelGithub.addEventListener('click', () => {
    modalGithub.classList.remove('active');
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

/* Fecha o menu ao clicar em um link */
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
