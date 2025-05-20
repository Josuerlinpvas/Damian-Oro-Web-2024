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

  // Crear objeto de producto
  const newProduct = {
    img: productImgSrc,
    title: productTitle,
    price: productPrice,
    quantity: 1
  };

  // Obtener carrito existente o inicializar
  let cartItems = JSON.parse(localStorage.getItem("cartStorage")) || [];

  // // Verificar si ya existe el producto
  // const existingItem = cartItems.find(item => item.title === productTitle);
  // if (existingItem) {
  //   alert("Este producto ya está en la bolsa.");
  //   return;
  // }; 

  // Agregar nuevo producto y guardar
  cartItems.push(newProduct);
  localStorage.setItem("cartStorage", JSON.stringify(cartItems));

  // Mostrar en el DOM
  renderProduct(newProduct);
};

window.addEventListener("DOMContentLoaded", () => {
  const savedItems = JSON.parse(localStorage.getItem("cartStorage")) || [];
  savedItems.forEach(item => renderProduct(item));

  // También cargar el contador si existe
  const savedCount = parseInt(localStorage.getItem('cartCount')) || 0;
  document.getElementById('contadorBolsa').textContent = savedCount;
});

const renderProduct = product => {
  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML = `
    <div class="articulo">
      <img class="imgproductocarrito" src="${product.img}" alt="">
      <div class="articuloNombre">
          <small>Nombre</small>
          <p class="nombreProducto">${product.title}</p>
      </div>
      <div class="articuloCantidad">
          <small>Cantidad</small>
          <p class="CantArticulo">${product.quantity}</p>
      </div>
      <div class="articuloPrecio">
          <small>Precio</small>
          <p class="precioArt">${product.price}</p>
      </div>
      <button class="BotonEliminarProducto"><i class="fa-solid fa-xmark"></i></button>
    </div>
  `;

  cartContent.appendChild(cartBox);

  // Botón eliminar
  cartBox.querySelector(".BotonEliminarProducto").addEventListener("click", () => {
    cartBox.remove();

    // Eliminar del localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartStorage")) || [];
    cartItems = cartItems.filter(item => item.title !== product.title);
    localStorage.setItem("cartStorage", JSON.stringify(cartItems));

    // Actualizar contador
    let currentCount = parseInt(document.getElementById('contadorBolsa').textContent);
    currentCount--;
    document.getElementById('contadorBolsa').textContent = currentCount;
    localStorage.setItem('cartCount', currentCount);
  });
};


/* BOTON COMPRAR */

document.getElementById('Comprar-carrito').addEventListener('click', () => {
  const productosEnCarrito = document.querySelectorAll('.cart-box');  

  if (productosEnCarrito.length === 0) {
    swal.fire({
      title: 'Bolsa vacía',
      text: 'No hay productos en la bolsa.',
      icon: 'info'
    });
    return;
  }

  // Si hay productos:
  else swal.fire({
    title: 'Gracias por su Compra!',
    text: 'Le hemos enviado un Recibo por Correo',
    icon: 'success'
  })

  // Vaciar carrito visualmente
  cartContent.innerHTML = "";

  // Reset contador
  document.getElementById('contadorBolsa').textContent = "0";
  localStorage.setItem('cartCount', "0");

  // Borrar del localStorage
  localStorage.removeItem('cartStorage');

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




  

    