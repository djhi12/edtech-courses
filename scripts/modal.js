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
        // html
        `
        <p><strong>HTML</strong> stands for "Hypertext Markup Language." It is the standard markup language used to create and structure content on the World Wide Web (the internet). HTML is the foundation of web pages and is used to define the structure and layout of a web document, such as text, images, links, forms, and other multimedia elements.</p>
        
        <p>By the end of this course, students will be able to:</p>
        
        <ul>
        <li>Understand HTML Basics</li>
        <li>Create Structured Content</li>
        <li>Apply Hyperlinks</li>
        <li>Embed Multimedia</li>
        <li>Construct Forms</li>
        <li>Implement Semantic Markup</li>
        <li>Integrate CSS Styles</li>
        <li>Adhere to Best Practices</li>
        <li>Debug and Validate</li>
        <li>Collaborate and Share</li>
        </ul>
        `,

        // CSS
        `<p>Content for image 2.</p>`,

        `<p>Content for image 3.</p>`,
        // Add more content entries for each image


    ];

    const content = modalContent[index];

    const modalContentElement = modals[index].querySelector('.modal-content');
    modalContentElement.innerHTML = content;
    modals[index].style.display = 'block';
}



function closeModal() {
    modals.forEach((modal) => {
        modal.style.display = 'none';
    });
}
