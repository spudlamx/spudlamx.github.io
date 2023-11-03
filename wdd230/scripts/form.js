function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var message = document.getElementById("passwordMessage");

    if (password.value !== confirmPassword.value) {
        message.innerHTML = "Passwords do not match. Please try again.";
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    } else {
        message.innerHTML = "";
    }
}

function updateRatingValue() {
    var ratingValue = document.getElementById("ratingValue");
    var pageRating = document.getElementById("pageRating");
    ratingValue.innerHTML = pageRating.value;
}