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

      

      /* CARRITO DE COMPRAS */

      /* Contador de la bolsa */

      document.addEventListener('DOMContentLoaded', function() {
        const cartCount = document.getElementById('contadorBolsa');
        
        let count = localStorage.getItem('cartCount');
        if (count === null) {
            count = 0;
        }
        cartCount.textContent = count;
        
    });


    const cart = document.querySelector(".carritodesplegado");
    const addcartButtons = document.querySelectorAll(".btn-card");

    addcartButtons.forEach(button => {
      button.addEventListener("click", event => {
        const productBox = event.target.closest(".Productos");
        addtoCart(productBox);

        let currentCount = parseInt(document.getElementById('contadorBolsa').textContent);
        currentCount++;

        // Actualizar el contador visualmente
        document.getElementById('contadorBolsa').textContent = currentCount;

        // Guardar el nuevo contador en localStorage
        localStorage.setItem('cartCount', currentCount);


      });
    });



    /* AÑADIR PRODUCTOS AL CARRITO */

    const cartContent = document.querySelector(".articulosCarrito");
    const addtoCart = productBox => {
      const productImgSrc = productBox.querySelector("img").src;
      const productTitle = productBox.querySelector(".Productname").textContent;
      const productPrice = productBox.querySelector(".precio-1").textContent;


      // const cartItems = cartContent.querySelectorAll(".nombreProducto");
      // for (let item of cartItems) {
      //   if (item.textContent === productTitle) {
      //     alert("Este producto ya esta en la Bolsa.");
      //     return;
      //   }
      // }

      const cartBox = document.createElement("div");
      cartBox.classList.add("cart-box");
      cartBox.innerHTML = `

      <div class="articulo">
          <img class="imgproductocarrito" src="${productImgSrc}" alt="">
          <div class="articuloNombre">
              <small>Nombre</small>
              <p class="nombreProducto">${productTitle}</p>
              </div>
              <div class="articuloCantidad">
              <small>Cantidad</small>
              <p class="CantArticulo">1</p>
              </div>
              <div class="articuloPrecio">
              <small>Precio</small>
              <p class="precioArt">${productPrice}</p>
              </div>
              <button class="BotonEliminarProducto"><i class="fa-solid fa-xmark"></i></button>

          </div>
      
      `;

      cartContent.appendChild(cartBox);

      cartBox.querySelector(".BotonEliminarProducto").addEventListener("click", () => {
        cartBox.remove();

        updateTotalPrice();

        let currentCount = parseInt(document.getElementById('contadorBolsa').textContent);
        currentCount--;

        // Actualizar el contador visualmente
        document.getElementById('contadorBolsa').textContent = currentCount;

        // Guardar el nuevo contador en localStorage
        localStorage.setItem('cartCount', currentCount);


      });




  
      /* CALCULAR TOTAL DEL CARRITO */

    const numberElement = cartBox.querySelector(".CantArticulo");
    let quantity = numberElement.textContent;

    const updateTotalPrice = () => {
      const totalPriceElement = document.querySelector(".total-price");
      const cartBoxes = cartContent.querySelectorAll(".articulo");
      let total = 0;

      cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".precioArt");
        const quantityElement = cartBox.querySelector(".CantArticulo");
        const price = parseFloat(priceElement.textContent.replace("RD$", "").split(",").join(""));
        const quantity = parseInt(quantityElement.textContent);
      
        total += Number(price) * Number(quantity);
    });

    totalPriceElement.textContent = `$${total.toLocaleString()}`;
  };

  updateTotalPrice();

    /* BOTON COMPRAR */

  const botonComprar = document.querySelector (".btn-carrito").addEventListener("click", () => {
    alert("Su Compra se realizo con Exito")});

    };



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
  
      if (loggedIn === 'true') {
          // Si está logueado, oculta el botón de login y muestra el icono de cuenta
          loginButton.style.display = 'none';
          accountIcon.style.display = 'block';
          iconoContadorBolsa.style.display = 'flex'

      } else {
          // Si no está logueado, muestra el botón de login y oculta el icono de cuenta
          loginButton.style.display = 'block';
          accountIcon.style.display = 'none';
          iconoContadorBolsa.style.display = 'none';
      }
  };


  function logout() {

    alert("Sesión Cerrada!")
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}


/* OPCIONES DE CUENTA */

const botonCuenta = document.getElementById("AccountIcon").addEventListener("click", ()=> {

  const opcionesCuenta = document.getElementById("accoutOptions");

  opcionesCuenta.style.opacity = '1';
  opcionesCuenta.style.pointerEvents = 'all';
});





