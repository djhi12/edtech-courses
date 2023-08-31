// script.js
const image = document.getElementById('image');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

image.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

console.log('working');