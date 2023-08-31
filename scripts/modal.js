const images = document.querySelectorAll('.card-img-top');
const modals = document.querySelectorAll('.modal'); // Use class selector for modals
const closeBtns = document.querySelectorAll('.close'); // Use class selector for close buttons

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        showModal(index);
    });
});

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        closeModal();
    });
});

modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});

function showModal(index) {
    const modalContent = [
        "Content for image 1.",
        "Content for image 2.",
        "Content for image 3.",
        // Add more content entries for each image
    ];

    const content = modalContent[index];

    const modalContentElement = modals[index].querySelector('.modal-content p');
    modalContentElement.textContent = content;
    modals[index].style.display = 'block';
}

function closeModal() {
    modals.forEach((modal) => {
        modal.style.display = 'none';
    });
}
