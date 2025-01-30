function registerForEvent(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Simulate payment gateway interaction
    alert("Redirecting to payment gateway...");
    setTimeout(() => {
        alert(`Registration successful for ${name}!`);
        window.location.href = "index.html";
    }, 2000);
}
