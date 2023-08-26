// custom.js

document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('signInButton');

    // Toggle the d-none and d-block classes when the button is clicked
    signInButton.addEventListener('click', function() {
        if (signInButton.classList.contains('d-none')) {
            signInButton.classList.remove('d-none');
            signInButton.classList.add('d-block');
        } else {
            signInButton.classList.remove('d-block');
            signInButton.classList.add('d-none');
        }
    });
});
