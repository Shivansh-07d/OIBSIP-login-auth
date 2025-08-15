// Register Logic
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful! Please login.");
    window.location.href = "index.html";
});

// Login Logic
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "secure.html";
    } else {
        alert("Invalid username or password!");
    }
});

// Secure Page Access Control
if (window.location.pathname.includes("secure.html")) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("You must be logged in to access this page.");
        window.location.href = "index.html";
    }
}

// Logout
function logout() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "index.html";
}

