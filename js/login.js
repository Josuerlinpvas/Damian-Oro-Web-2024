
function Login(){

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

}


