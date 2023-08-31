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
        `
        <div class="content-container">
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
        </div>
        `,

        // CSS
        `<div class="content-container">
        <p>CSS stands for "Cascading Style Sheets." It is a language used in web development to control the presentation and layout of HTML (Hypertext Markup Language) elements on a webpage. HTML is responsible for defining the structure and content of a webpage, while CSS is used to define how the content should be displayed, styled, and positioned.</p>

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
        </div>
        `,

        // JS
        `<div class="content-container">
        <p>"JS" typically refers to JavaScript, which is a widely used programming language for creating interactive and dynamic content on websites. JavaScript is primarily used for front-end web development, allowing developers to add functionality, interactivity, and behavior to websites. It is supported by all major web browsers, making it a fundamental technology for building modern web applications.</p>
        
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
        </div>
        `,

        // Python
        `<p>Python is a high-level, general-purpose programming language known for its simplicity and readability. It was created by Guido van Rossum and was first released in 1991. Python emphasizes clean and concise code that is easy to understand, which makes it a popular choice for beginners and experienced programmers alike.</p>
        
        <p>Here are some common course outcomes:</p>

        <ul>
        <li>Programming Proficiency</li>
        <li>Problem-Solving Skills</li>
        <li>Software Development</li>
        <li>Web Development</li>
        <li>Data Analysis and Visualization</li>
        <li>Machine Learning and Artificial Intelligence</li>
        <li>Automation and Scripting</li>
        <li>Career Opportunities</li>
        <li>Portfolio Development</li>
        <li>Preparation for Advanced Topics</li>
        </ul>
        `,

        // Scratch
        `<p>Scratch is a visual programming language and online community developed by the Lifelong Kindergarten Group at the MIT Media Lab. It's designed to teach programming concepts to beginners, especially young learners, in a fun and engaging way. Scratch allows users to create interactive stories, animations, games, and more by snapping together blocks of code like puzzle pieces.</p>

        <p>Here are some potential course outcomes:</p>

        <ul>
        <li>Basic Programming Logic</li>
        <li>Project Creation</li>
        <li>Creative Problem Solving</li>
        <li>Debugging Skills</li>
        <li>Algorithmic Thinking</li>
        <li>Collaboration and Sharing</li>
        <li>Digital Literacy</li>
        <li>Learning Transfer</li>
        <li>Documentation and Reflection</li>
        <li>Presentation Skills</li>
        </ul>
        `,

        // Scratch JR
        `<p>ScratchJr is a programming language and platform designed specifically for young children (ages 5-7) to learn about programming and computational thinking in a playful and intuitive manner. It was developed as a collaboration between the Lifelong Kindergarten Group at the MIT Media Lab and the Tufts University DevTech Research Group.</p>

        <p>The outcomes of a course that incorporates ScratchJr into its curriculum for young children could include:</p>

        <ul>
        <li>Basic Programming Concepts</li>
        <li>Creative Expression</li>
        <li>Problem-Solving Skills</li>
        <li>Logical Thinking</li>
        <li>Digital Literacy</li>
        <li>Collaboration</li>
        <li>Introduction to Computational Thinking</li>
        <li>Confidence with Technology</li>
        <li>Introduction to Design</li>
        <li>Parental Engagement</li>
        </ul>
        `,

        // Roblox
        `<p>Roblox is an online platform and game creation system that allows users to design, create, and play games created by other users. It was launched in 2006 by the company Roblox Corporation. The platform enables users to create games using the Roblox Studio, which is a powerful game development environment that provides tools for building 3D environments, scripting interactive elements, and designing characters.</p>

        <p>Here are some possible course outcomes:</p>

        <ul>
        <li>Game Development Skills</li>
        <li>Creativity and Problem-Solving</li>
        <li>Programming Proficiency</li>
        <li>Portfolio Building</li>
        <li>Community Engagement</li>
        <li>Monetization Strategies</li>
        <li>Entrepreneurship</li>
        <li>Learning Platform Familiarity</li>
        <li>Personal Satisfaction</li>
        </ul>
        `,

        // Canva
        `<p>Graphic design is a creative and visual communication process that involves combining elements such as typography, images, colors, and layout to convey information, ideas, or messages visually. Graphic designers use various design principles and tools to create visually appealing and effective designs for a wide range of media, including print, digital platforms, advertisements, websites, logos, packaging, posters, and more.</p>

        <p>Course outcome:</p>

        <ul>
        <li>Understanding Design Principles</li>
        <li>Proficiency with Design Tools</li>
        <li>Typography Skills</li>
        <li>Color Theory</li>
        <li>Layout and Composition</li>
        <li>Creating Brand Identity</li>
        <li>Digital Design</li>
        <li>Creative Problem-Solving</li>
        <li>Effective Communication</li>
        <li>Portfolio Development</li>
        </ul>
        `,

        // Frontend Dev
        `<p>Frontend development refers to the practice of creating the user interface (UI) and user experience (UX) of a website, web application, or any digital platform that users interact with directly. It involves designing and building the visual elements that users see and interact with on their screens, including layout, design, animations, and overall user flow. Frontend developers work to ensure that the digital product is not only visually appealing but also functional, intuitive, and responsive across different devices and screen sizes.</p>

        <p>By the end of this course, students will be able to:</p>

        <ul>
        <li>Demonstrate Proficiency in HTML</li>
        <li>Apply CSS Styling Techniques</li>
        <li>Utilize Responsive Design Principles</li>
        <li>Implement Interactivity with JavaScript</li>
        <li>Design User-Friendly Interfaces</li>
        <li>Optimize Performance</li>
        <li>Collaborate with Version Control</li>
        <li>Use Frontend Frameworks</li>
        <li>Ensure Web Accessibility</li>
        <li>Debug and Troubleshoot</li>
        <li>Work in a Development Environment</li>
        <li>Demonstrate Project Completion</li>
        </ul>
        `,
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
