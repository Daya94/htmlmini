document.addEventListener("DOMContentLoaded", function () {
    // Email validation for login form
    const emailInputLogin = document.getElementById("inputEmail4");
    const emailErrorLogin = document.getElementById("emailErrorLogin");

    emailInputLogin.addEventListener("input", function () {
        if (emailInputLogin.validity.valid) {
            emailErrorLogin.textContent = "";
            emailErrorLogin.className = "invalid-feedback";
        } else {
            showError(emailErrorLogin, "Please enter a valid email address.");
        }
    });

    // Email validation for registration form
    const emailInputRegistration = document.getElementById("inputRegEmail");
    const emailErrorRegistration = document.getElementById("emailErrorRegistration");

    emailInputRegistration.addEventListener("input", function () {
        if (emailInputRegistration.validity.valid) {
            emailErrorRegistration.textContent = "";
            emailErrorRegistration.className = "invalid-feedback";
        } else {
            showError(emailErrorRegistration, "Please enter a valid email address.");
        }
    });

    // ... Other form validation and submission logic ...

    function showError(errorElement, errorMessage) {
        errorElement.textContent = errorMessage;
        errorElement.className = "invalid-feedback active";
    }
});
