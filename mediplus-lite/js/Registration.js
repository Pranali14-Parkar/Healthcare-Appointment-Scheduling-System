
console.log("Registration.js is loaded");
function nameIsValid(nameInput) {
    var re = /^[a-zA-Z\s]+$/; // Allowing spaces in the name
    return re.test(nameInput.value);
}
    function emailIsValid(emailInput) {
    var re = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z]{2,})+$/;
    return re.test(emailInput.value);
    }
    function validateEmail(emailInput) {
    var re = /\S+@\S+\.\S+/;
    return re.test(emailInput.value);
    }
    function validatePasswordLength(passwordInput) {
        var minLength = 8;
        var password = passwordInput.value; // Fix: Get the value of the passwordInput
    
        var hasUpperCase = /[A-Z]/.test(password);
        var hasLowerCase = /[a-z]/.test(password);
        var hasDigit = /\d/.test(password);
        var hasSpecialChar = /[!@#\$%\^&\*_]/.test(password);
    
        if (!hasUpperCase) {
            alert("Your password must contain at least one uppercase letter.");
            return false;
        }
    
        if (!hasLowerCase) {
            alert("Your password must contain at least one lowercase letter.");
            return false;
        }
    
        if (!hasDigit) {
            alert("Your password must contain at least one digit.");
            return false;
        }
    
        if (!hasSpecialChar) {
            alert("Your password must contain at least one special character.");
            return false;
        }
    
        if (password.length < minLength) { // Fix: Check the length of the password
            alert("Your Password must be at least 8 characters");
            return false;
        }
    
        return true;
    }
    function passwordsMatch(passwordInput, confirmPasswordInput) {
    return passwordInput.value === confirmPasswordInput.value;
    }

    function isAgeValid(ageInput, role) {
    if (role === "doctor" || role === "admin") {
    return true; // Skip age validation for Doctor and Admin roles
    }
    return ageInput.value >= 1 && ageInput.value <= 120;
    }


    function isContactNumberValid(contactNumberInput) {
        var re = /^(\+\d{1,4})?(\d{10})$/;
        return re.test(contactNumberInput.value);
    }
    
    function isCheckboxChecked(checkbox) {
    return checkbox.checked;
    }

    // function validatePassword(password) {
    //     var hasUpperCase = /[A-Z]/.test(password);
    //     var hasLowerCase = /[a-z]/.test(password);
    //     var hasDigit = /\d/.test(password);
    //     var hasSpecialChar = /[!@#\$%\^&\*_]/.test(password);
    
    //     if (!hasUpperCase) {
    //         alert("Your password must contain at least one uppercase letter.");
    //         return false;
    //     }
    
    //     if (!hasLowerCase) {
    //         alert("Your password must contain at least one lowercase letter.");
    //         return false;
    //     }
    
    //     if (!hasDigit) {
    //         alert("Your password must contain at least one digit.");
    //         return false;
    //     }
    
    //     if (!hasSpecialChar) {
    //         alert("Your password must contain at least one special character.");
    //         return false;
    //     }
    
    //     return true;
    // }
    
    function enableFields() {
    document.getElementById("age").disabled = false;
    document.getElementById("bloodGroup").disabled = false;
    document.getElementById("gender").disabled = false;
    document.getElementById("address").disabled = false;
    }
    function disableFields() {
    document.getElementById("age").disabled = true;
    document.getElementById("bloodGroup").disabled = true;
    document.getElementById("gender").disabled = true;
    document.getElementById("address").disabled = true;
    }
    function handleSubmit(event) {
    event.preventDefault();
    var nameInput = document.querySelector('#name');
    var emailInput = document.querySelector('#email');
    // var password= document.querySelector('#password');
    var passwordInput = document.querySelector('#password');
    var confirmPasswordInput = document.querySelector('#confirmPassword');
    
    var ageInput = document.querySelector('#age');
    var contactNumberInput = document.querySelector('#phoneNumber');
    var checkbox = document.querySelector('.policy input[type="checkbox"]');
    var role = document.querySelector('input[name="role"]:checked').value.toLowerCase();
    if (!nameIsValid(nameInput)) {
    alert('Please enter a valid name.');
    return;
    }
    // if(!validatePassword(password))
    // {
    //     alert('Please enter a the correct password');
    //     return;

    // }
    if (!isAgeValid(ageInput, role)) {
    alert('Please enter a valid age between 1 and 120.');
    return;
    }
    if (!validateEmail(emailInput)) {
    alert('Please enter a valid email address.');
    return;
    }
    if (!validatePasswordLength(passwordInput)) {
    alert('Please enter at least an 8-character password.');
    return;
    }
    if (!passwordsMatch(passwordInput, confirmPasswordInput)) {
    alert('Passwords do not match. Please try again.');
    return;
    }
    if (!isContactNumberValid(contactNumberInput)) {
    alert('Contact number should be exactly 10 digits long.');
    console.error('Please enter a valid contact number');
    return;
    }
    if (!isCheckboxChecked(checkbox)) {
    alert('You must accept the terms and conditions to register.');
    return;
    }
    console.log("Form is valid.");
    
    document.getElementById("registrationForm").submit();
    event.target.reset();
    // You can uncomment the line below if you want to actually submit the form
    // document.getElementById("registrationForm").submit();
    }
    // document.getElementById("registrationForm").addEventListener("submit1", handleSubmit);

    