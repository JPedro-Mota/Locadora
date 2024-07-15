function logar(){
    var name = document.getElementById("login-name").value;
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if(name == "admin" && password == "12345678" && email == "admin@gmail.com"){
        location.href = "../pages/dashboard.html";
    }
    else{
        alert('Usuario ou senha incorretos');
    }
}

