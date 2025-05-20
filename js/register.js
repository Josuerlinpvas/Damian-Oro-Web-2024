
const registrate = document.querySelector("#registerForm");
registrate.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const Users = JSON.parse(localStorage.getItem('Users')) || [];
    const IsUserRegistered = Users.find(user => user.email === email);
    if(IsUserRegistered){
        return swal.fire({
            title: 'El Usuario ya Existe!',
            icon:'error',
            background: 'rgb(255, 255, 255)',
            timer:5000,
            timerProgressBar: true
        });
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('Users', JSON.stringify(Users))
     swal.fire({
            title: 'Registro Exitoso!',
            icon:'succefull',
            background: 'rgb(255, 255, 255)',
        });
    window.location.href = "login.html";


})