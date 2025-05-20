
let savedPass = JSON.parse(localStorage.getItem("Users"));



const botonLogin = document.getElementById("botonlogin");

botonLogin.addEventListener("click", ()=> {
    let username = document.getElementById("User").value;
    let pass = document.getElementById("password").value;

    if (username === "" || pass === "") {
        swal.fire({
            title: 'Ups!',
            text: 'Por favor, complete todos los campos.',
            icon:'warning',
            background: 'rgb(255, 255, 255)',
            timer:5000,
            timerProgressBar: true,
        })
        return;
    }

    const UserRegistered = savedPass.find(user => user.name == username);
    
    if (!UserRegistered) {
        return swal.fire({
            title: 'Ups!',
            text: 'No se encontro el Usuario.',
            icon:'warning',
            background: 'rgb(255, 255, 255)',
            timer:5000,
            timerProgressBar: true,
        })
    }

    if (UserRegistered.password == pass) {
        swal.fire({
            title: 'Bienvenido!',
            text: 'Inicio de Sesión Exitoso!',
            icon:'success'
        }).then(() => {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html";});
    } else {
        swal.fire({
            title: 'Contraseña incorrecta!',
            icon:'error',
            background: 'rgb(255, 255, 255)',
            timer:5000,
            timerProgressBar: true,
        })
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


