const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Function to toggle the visibility of the navigation links
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('visible'); // Toggle the 'visible' class
});

// Array to store form responses
let formResponses = [];

// FORM RESET AND SUBMIT
document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecting form data into an array
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        recommend: document.querySelector('input[name="recommend"]:checked')?.value || 'Not selected',
        helpfulPart: document.getElementById('dropdown').value,
        bias: document.querySelector('input[name="bias"]:checked')?.value || 'Not selected',
        comments: document.getElementById('comments').value
    };

    // Add the formData object to the formResponses array
    formResponses.push(formData);

    alert('Thank you for submitting your feedback!');
    console.log('All form responses:', formResponses); // Display all responses in the console

    // Optionally, you can reset the form after submission
    document.getElementById('survey-form').reset();
});

document.getElementById('reset').addEventListener('click', function() {
    if (confirm('Are you sure you want to reset the form?')) {
        document.getElementById('survey-form').reset();
    }
});
