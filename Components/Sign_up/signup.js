document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if all fields are filled
    if (name && email && password && confirmPassword) {
        // Further validation can be added here, such as checking if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Redirect to Sign In page after validation
        window.location.href = '../Sign_in/sign-in.html';
    } else {
        // Alert user if any field is empty
        alert('Please fill out all fields.');
    }
});

// Ensure the DOM and all resources are fully loaded before hiding the loader
window.addEventListener('load', function() {
    console.log("Page fully loaded"); // To check if the event is firing correctly
    // Add the 'loaded' class to the body to hide the loader
    document.body.classList.add('loaded');
  });