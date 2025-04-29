var loginData = document.getElementById("loginData");

loginData.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "rawan02almomani@gmail.com" && password === "12345") {
        window.location.href = "home.html"; 
    } 
    else {
        alert("Invalid email or password");
    }
});
