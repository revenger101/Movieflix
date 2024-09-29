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


