const iconoMenu = document.querySelector('#icono-menu'),
      links = document.querySelectorAll('#lista-menu'),
      menu = document.querySelector('#menu');

      iconoMenu.addEventListener('click', (e) =>{

        menu.classList.toggle('show')

      })

      links.forEach(e => {
        e.addEventListener('click', (e) =>{

          menu.classList.remove("show")
  
        })
      });



      window.onload = function() {
        const loggedIn = localStorage.getItem('loggedIn');
        const loginButton = document.getElementById('btnlogin');
        const accountIcon = document.getElementById('AccountIcon');
        const iconoContadorBolsa = document.getElementById('contadorBolsa');
    
        if (loggedIn === 'true') {
            // Si está logueado, oculta el botón de login y muestra el icono de cuenta
            loginButton.style.display = 'none';
            accountIcon.style.display = 'block';
            contadorBolsa.style.display = 'flex'

        } else {
            loginButton.style.display = 'block';
            accountIcon.style.display = 'none';
            contadorBolsa.style.display = 'none'
        }
    };



    function logout() {
  
      alert("Sesión Cerrada!")
      localStorage.removeItem('loggedIn');
      window.location.href = 'index.html';
  }


  const botonCuenta = document.getElementById("AccountIcon").addEventListener("click", ()=> {

    const opcionesCuenta = document.getElementById("accoutOptions");

    opcionesCuenta.style.opacity = '1';
    opcionesCuenta.style.pointerEvents = 'all';
  })


  const barraBusqueda = document.getElementById('busqueda');

  barraBusqueda.addEventListener("keyup", (e) => {

    if (e.key != "Enter") {return}

    const Texto = barraBusqueda.value 
    

    window.location.href = `./accesorios.html?tipo=${Texto}`


  });






  document.addEventListener('DOMContentLoaded', function() {
    const cartCount = document.getElementById('contadorBolsa');
    let count = localStorage.getItem('cartCount');
    if (count === null) {
        count = 0;
    }
    cartCount.textContent = count;
});

