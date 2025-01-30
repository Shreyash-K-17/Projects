// Function to register a new user
function registerUser(event) {
    event.preventDefault();

    var text = document.getElementById("text").value;
    var tel = document.getElementById("tel").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("Email is already registered. Please log in.");
        return;
    }

    // Add new user to the users array
    users.push({ email, password });

    // Save updated users list to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    document.getElementById("register-form").reset();
}

// Function to log in an existing user
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with matching email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Save logged-in user to localStorage
        localStorage.setItem("currentUser", email);

        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Function to log out the current user
function logoutUser() {
    localStorage.removeItem("currentUser");
    alert("You have been logged out.");
    window.location.href = "login.html"; // Redirect to login page
}

// Function to check if a user is logged in
function checkAuth() {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("You must be logged in to access this page.");
        window.location.href = "login.html"; // Redirect to login page
    }
}

// Attach event listeners (for forms)
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) registerForm.addEventListener("submit", registerUser);
    if (loginForm) loginForm.addEventListener("submit", loginUser);
});
