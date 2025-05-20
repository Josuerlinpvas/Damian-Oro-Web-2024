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
      })

      const url = new URL(window.location.href)
      const paramsUrl = new URLSearchParams(url.search)

      const TipoParam = paramsUrl.get("tipo")

      if (TipoParam != null) {
        const LowercasedTipo = TipoParam.toLowerCase()

        console.log(LowercasedTipo)
        document.querySelectorAll(".Productos").forEach((tarjeta) => {
          const category = tarjeta.getAttribute("Category")


          if (category.toLowerCase().includes(LowercasedTipo) ) {
            tarjeta.classList.add("Visible");
            tarjeta.classList.remove("NonVisible")
          }else {
            tarjeta.classList.add("NonVisible")
            tarjeta.classList.remove("Visible")
          } 

        });

        document.querySelectorAll(".Productos").forEach((tarjeta) => {
          const ContenedorInfo = tarjeta.querySelector(".info")
          const ProductName = ContenedorInfo.querySelector(".Productname").textContent

          if (ProductName.toLowerCase().includes(LowercasedTipo) ) {
            tarjeta.classList.add("Visible");
            tarjeta.classList.remove("NonVisible")
          }else {
            tarjeta.classList.add("NonVisible")
            tarjeta.classList.remove("Visible")
          } 

        });
      }

      const SearchBar = document.querySelector(".barrabusqueda")
      const SearchBarInput = SearchBar.querySelector("input")

      document.querySelectorAll(".categoria").forEach((tipo) => {
        tipo.addEventListener("click",(e) => {
          const typeName = tipo.querySelector(".CategoriaNombre")

          const TypeNamLowerCased = typeName.textContent.toLowerCase()

          
          document.querySelectorAll(".Productos").forEach((tarjeta) => {
            const category = tarjeta.getAttribute("Category")
            const ContenedorInfo = tarjeta.querySelector(".info")
            const ProductName = ContenedorInfo.querySelector(".Productname")

            const LowerCasedProductName = ProductName.textContent.toLowerCase()


            if (category.toLowerCase().includes(TypeNamLowerCased) ) {
              tarjeta.classList.add("Visible");
              tarjeta.classList.remove("NonVisible")
            }else {
              tarjeta.classList.add("NonVisible")
              tarjeta.classList.remove("Visible")
            } 

          });
        })
      })

      document.addEventListener("keyup",(e) => {
        console.log(e.key   )

        if (e.key != "Enter") {return }

          document.querySelectorAll(".Productos").forEach((tarjeta) => {
            const ContenedorInfo = tarjeta.querySelector(".info")
            const ProductName = ContenedorInfo.querySelector(".Productname")

            const LowerCasedProductName = ProductName.textContent.toLowerCase()
            const SearchBarContent = SearchBarInput.value.toLowerCase()

            const Splitted = SearchBarContent.split(" ")

            console.log(Splitted)
            let SeEncontroElProducto = false 
            Splitted.forEach((palabra) =>  {
              if (LowerCasedProductName.includes(palabra)) {
                SeEncontroElProducto = true

              }
            })

            if (SeEncontroElProducto == true ) {
              tarjeta.classList.add("Visible");
              tarjeta.classList.remove("NonVisible")
            }else {
              tarjeta.classList.add("NonVisible")
              tarjeta.classList.remove("Visible")
            } 


            console.log(SearchBarContent)
            console.log(LowerCasedProductName)
          });

        }
      );



    /* ABRIR Vista Previa de los Productos */

    const botonesLeerMas = document.querySelectorAll(".leerMas");
    const contenedorVistaPrevia = document.getElementById("vistaPreviaProducto");
    const botonesImgProducto = document.querySelectorAll(".img-producto")

    botonesLeerMas.forEach(function(botonLeerMas) {
      botonLeerMas.addEventListener('click', function() {
        contenedorVistaPrevia.style.display = 'flex';
    });


    botonesImgProducto.forEach(function(botonImg) {
      botonImg.addEventListener('click', function() {
        contenedorVistaPrevia.style.display = 'flex';
      });
    });
  });


    /* CERRAR Vista Previa de los Productos */

    const botonCerrarVistaPrevia = document.getElementById("botonCerrarProductView");

    botonCerrarVistaPrevia.addEventListener('click', function () {
      contenedorVistaPrevia.style.display = 'none';
    });




    /* ICONO DE CUENTA */


     window.onload = function() {
        const loggedIn = localStorage.getItem('loggedIn');
        const loginButton = document.getElementById('btnlogin');
        const accountIcon = document.getElementById('AccountIcon');
        const iconoContadorBolsa = document.getElementById('contadorBolsa');
        const allcartcontent = document.getElementById('allcartcontent');
    
        if (loggedIn === 'true') {
            // Si está logueado, oculta el botón de login y muestra el icono de cuenta
            loginButton.style.display = 'none';
            accountIcon.style.display = 'block';
            contadorBolsa.style.display = 'flex';
            allcartcontent.style.display = 'flex';

        } else {
            loginButton.style.display = 'block';
            accountIcon.style.display = 'none';
            contadorBolsa.style.display = 'none'
            allcartcontent.style.display = 'none';
        }
    };



const cerrarSesion = document.getElementById("btnSalir").addEventListener("click", ()=>{
      swal.fire({
            title: 'Sesion Cerrada!',
            icon:'warning',
            background: 'rgb(255, 255, 255)',
            timer: '5000',
        }).then(() => {
 
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
  });
});


/* OPCIONES DE CUENTA */

const botonCuenta = document.getElementById("AccountIcon").addEventListener("click", ()=> {

  const opcionesCuenta = document.getElementById("accoutOptions");

  opcionesCuenta.style.opacity = '1';
  opcionesCuenta.style.pointerEvents = 'all';
});








