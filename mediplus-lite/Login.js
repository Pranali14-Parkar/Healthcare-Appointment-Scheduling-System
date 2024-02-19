document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");

    if (!validateEmail(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!validatePasswordLength(passwordInput)) {
        alert('Please enter at least an  8-character password.');
        return;
    }

    // No need to check if passwords match in a login form
    // If the user is already registered, the password is verified at this point
    event.target.reset();
    // Continue with login process here...
});

function validateEmail(emailInput) {
    var re = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z]{2,})+$/;
    return re.test(emailInput.value);
}

function validatePasswordLength(passwordInput) {
    var minLength =  8;
    return passwordInput.value.length >= minLength;
}
