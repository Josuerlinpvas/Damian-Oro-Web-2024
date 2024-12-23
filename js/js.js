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


