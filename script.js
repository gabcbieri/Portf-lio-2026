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

const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModal.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
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
