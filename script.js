
    document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    emailInput.addEventListener("input", function () {
    if (emailInput.validity.valid) {
    emailError.textContent = ""; // Clear error message
    emailError.className = "invalid-feedback"; // Reset class
} else {
    showError("Please enter a valid email address.");
}
});

    contactForm.addEventListener("submit", function (event) {
    if (!emailInput.validity.valid) {
    showError("Please enter a valid email address.");
    event.preventDefault(); // Prevent form submission
}
});

    function showError(errorMessage) {
    emailError.textContent = errorMessage;
    emailError.className = "invalid-feedback active"; // Display error message
}

        function performSearch() {
            // Get the search input value
            const searchQuery = document.getElementById('searchInput').value;

            // Construct the URL for the search results page with the search query as a parameter
            const searchResultsURL = `shop.html?query=${encodeURIComponent(searchQuery)}`;

            // Redirect the user to the search results page
            window.location.href = searchResultsURL;
        }


});

