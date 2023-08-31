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



modals.forEach((modal, index) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Add an event listener to the modal content area
    const modalContentElement = modal.querySelector('.modal-content');
    modalContentElement.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the modal
    });
});


function showModal(index) {
    const modalContent = [
        // html
        `<p><strong>HTML</strong> stands for "Hypertext Markup Language." It is the standard markup language used to create and structure content on the World Wide Web (the internet). HTML is the foundation of web pages and is used to define the structure and layout of a web document, such as text, images, links, forms, and other multimedia elements.</p>
        
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
        `<p>CSS stands for "Cascading Style Sheets." It is a language used in web development to control the presentation and layout of HTML (Hypertext Markup Language) elements on a webpage. HTML is responsible for defining the structure and content of a webpage, while CSS is used to define how the content should be displayed, styled, and positioned.</p>

        <p>By the end of this course, students will be able to proficiently design and style web content using CSS, demonstrating the following competencies:</p>

        <ul>
        <li>Style Implementation</li>
        <li>Selectors and Specificity</li>
        <li>Responsive Design</li>
        <li>CSS Box Model</li>
        <li>Flexbox and Grid Layout</li>
        <li>Browser Compatibility</li>
        <li>Optimization and Performance</li>
        <li>Debugging and Troubleshooting</li>
        <li>Project Implementation</li>
        </ul>
        `,

        // JS
        `<p>"JS" typically refers to JavaScript, which is a widely used programming language for creating interactive and dynamic content on websites. JavaScript is primarily used for front-end web development, allowing developers to add functionality, interactivity, and behavior to websites. It is supported by all major web browsers, making it a fundamental technology for building modern web applications.</p>
        
        <p>By the end of the course, students should be able to:</p>

        <ul>
        <li>Understand JavaScript Basics</li>
        <li>Manipulate the DOM</li>
        <li>Implement Interactive Web Features</li>
        <li>Utilize Asynchronous Programming</li>
        <li>Apply JavaScript Libraries and Frameworks</li>
        <li>Build Basic Web Applications</li>
        <li>Debugging and Troubleshooting</li>
        <li>Introduction to Modern JavaScript Concepts</li>
        <li>Project Development</li>
        <li>Learning Resources and Lifelong Learning</li>
        </ul>
        `,
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
