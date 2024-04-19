function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Dummy validation (you should perform proper validation here)
    if (email === "example@example.com" && password === "password") {
        // Redirect to home.html on successful login
        window.location.href = "homegvi.html";
    } else {
        alert("Invalid email or password");
    }

    return false; // Prevent form submission
}