var singUpData=document.getElementById("singUpData")

singUpData.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var reconfirmPassword= document.getElementById("password2").value;
    if (email === "rawan02almomani@gmail.com" && reconfirmPassword === "12345") {
        alert("your account has been created successfully")
        window.location.href = "login.html"; 
    }
    else {
        alert("Invalid password or email");
    }

});
