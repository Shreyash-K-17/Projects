function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("currentUser", email);
        window.location.href = "TaskDashboard.html";
    } else {
        alert("Invalid credentials!");
    }
}

function register() {
    const email = prompt("Enter your email:");
    const password = prompt("Enter a password:");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
}
