const registrate = document.querySelector("#registerForm");
registrate.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const Users = JSON.parse(localStorage.getItem('Users')) || [];
    const IsUserRegistered = Users.find(user => user.email === email);
    if(IsUserRegistered){
        return alert('El usuario ya existe!')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('Users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = "login.html";


})