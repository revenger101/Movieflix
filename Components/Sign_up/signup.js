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
