function login(event) {
    event.preventDefault();
    var text = document.getElementById("text").value;
    var tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "user@example.com" && password === "password") {
        localStorage.setItem("loggedIn", true);
        window.location.href = "cart.html";
    } else {
        alert("Invalid credentials!");
    }
}
