document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (email === 'SESAME@gmail.com' && password === 'SESAME') {
        // Redirect to Main page
        window.location.href = '../../Film.html';
    } else {
        // Show toast for incorrect information
        var toastElement = document.getElementById('loginToast');
        var toast = new bootstrap.Toast(toastElement);
        toast.show();
    }
});


// Ensure the DOM and all resources are fully loaded before hiding the loader
window.addEventListener('load', function() {
    console.log("Page fully loaded"); // To check if the event is firing correctly
    // Add the 'loaded' class to the body to hide the loader
    document.body.classList.add('loaded');
  });