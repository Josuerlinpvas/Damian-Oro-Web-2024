
let savedPass = JSON.parse(localStorage.getItem("Users"));

if (!savedPass) {
    alert("El usuario no existe!");      
}



const botonLogin = document.getElementById("botonlogin");

botonLogin.addEventListener("click", ()=> {


    let username = document.getElementById("User").value;
    let pass = document.getElementById("password").value;
    const UserRegistered = savedPass.find(user => user.name == username);
    if (!UserRegistered) {
        return alert("No se encontro el usuario")
    }

    if (UserRegistered.password == pass) {
        alert("Inicio de sesión exitoso!");
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html";
    } else {
        alert("contraseña incorrecta.");
    }
    });













/*function Login(){

    const emailuser = document.getElementById ('email').value;
    const passuser = document.getElementById('password').value;

    if (emailuser == "josuerlinbritopvas@gmail.com" && passuser == "pvas12345678")
    {
        window.location="sesionIniciada.html";
    }

    else
    {
        alert("Correo electrónico o Contraseña incorrectos");
    }

}*/


