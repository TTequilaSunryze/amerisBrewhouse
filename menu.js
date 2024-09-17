$(document).ready( () =>{
     // Cargar el archivo JSON externo usando fetch
     fetch('menu.json')
     .then(response => response.json())
     .then(data => {
       let mostrar = data.menu;
       console.log(mostrar);
 
       const menu = document.getElementById("menu");
      
       // Mapeo de los datos: 
       mostrar.forEach(categoria => {
         const titulo = document.createElement('h4');
         titulo.innerText = categoria.categoria;    
         menu.appendChild(titulo);
         
         
           categoria.platos.forEach(plato => {
           const card = document.createElement('div');
           card.classList.add('tarjetaMenu');
           card.innerHTML = `
           <img class="imagenMenu" src="${plato.imagen}" alt="${plato.nombre}" />
           <p class="parrafoTitulo">${plato.nombre}</p>
           <p class="parrafoMenu">${plato.descripcion}</p>
           <span class="precio">€ ${plato.precio}</span>
           `;
           menu.appendChild(card);
    
           //Evento de click en las tarketas de menu
           // Primero quiero que al darle click se agrande. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           // Segundo quiero que se abra un overlay de fondo con la imagen de la tarjeta
           // Tercero quiero que al hacer click fuera de la tarjeta se cierre el overlay
           
           const overlay = document.getElementById('overlayMenu');
           const tarjetas = document.querySelectorAll('.tarjetaMenu');
         
           tarjetas.forEach(tarjeta => {
             tarjeta.addEventListener('click', function(event) {
               const tarjetaMenu = event.target.closest('.tarjetaMenu');
                 if(!tarjetaMenu) return;
               
              
             // Expandimos Tarjeta
               tarjetaMenu.classList.add('tarjetaExpandida');
               tarjetaMenu.classList.remove('tarjetaMenu');
               
             // Activamos la imagen del menu
               const imagenMenu = tarjetaMenu.querySelector('.imagenMenu');
               if (imagenMenu) {
                 imagenMenu.classList.add('active');
               }
            
            //activamos la tarjeta
            if(tarjetaMenu.classList.contains('tarjetaExpandida')){
                tarjetaMenu.classList.add('active');
            }
             
 
             //Mostramos el overlay
               overlay.classList.add('overlay-visible');
               overlay.classList.remove('hidden');
 
          });
 
             // Evento para cerrar la tarjeta y el overlay al hacer clic fuera de la tarjeta
             overlay.addEventListener('click', function() {
               const tarjetaExpandida = document.querySelector('.tarjetaExpandida');
               
               if (tarjetaExpandida) {
                 tarjetaExpandida.classList.add('tarjetaMenu');
                 tarjetaExpandida.classList.remove('tarjetaExpandida');
                 tarjetaExpandida.classList.remove('active');
                 const imagenMenu = tarjetaExpandida.querySelector('.imagenMenu');
                   if (imagenMenu) {
                     imagenMenu.classList.remove('active');
                   }
               }
               overlay.classList.remove('overlay-visible');
               overlay.classList.add('hidden');
             });
           });
         });
       });
 });



} );