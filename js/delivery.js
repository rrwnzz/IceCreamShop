var info = document.getElementById("info");

info.addEventListener('submit', function(event){
    event.preventDefault();
    var name = document.getElementById("name").value; 
    var phone = document.getElementById("phone").value;
    var locationInput = document.getElementById("location").value;
    // خزنت قيمة الانبوت اللي راح يدخله اليوزر داخل 3 متغيرات

    // اخزن قيم الانبوت اللي دخلها اليوزر داخل اللوكال ستورج
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("location", locationInput);
    alert("Your info has been saved successfully");
});




