$(document).ready( () =>{

    // SLIDER SECCION 2
    // const slides = document.querySelectorAll('.slide');
    // let currentSlide = 0;

    // function nextSlide() {
    //   slides[currentSlide].style.transform = 'translateX(-100%)';
    //   currentSlide = (currentSlide + 1) % slides.length;
    //   slides[currentSlide].style.transform = 'translateX(0)';
    // }

    // function startSlider() {
    //   slides.forEach((slide, index) => {
    //     slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    //   });
    //   setInterval(nextSlide, 3000);
    // }
    
    // startSlider();

//CAROUSEL COMENTARIOS
const carouselSlide = document.querySelector('.carSlide');
const carouselItems = document.querySelectorAll('.carItem');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = carouselItems[0].clientWidth; // Ancho de cada item

// Posiciona la primera diapositiva
carouselItems[counter].classList.add('active');

// Botón Siguiente
nextBtn.addEventListener('click', () => {
  carouselItems[counter].classList.remove('active');
  counter = (counter + 1) % carouselItems.length; // Volver al primer comentario si llega al final
  carouselItems[counter].classList.add('active');
});

// Botón Anterior
// Función para mostrar el comentario anterior
prevBtn.addEventListener('click', () => {
  carouselItems[counter].classList.remove('active');
  counter = (counter - 1 + carouselItems.length) % carouselItems.length; // Ir al último si está en el primero
  carouselItems[counter].classList.add('active');
}); setInterval(() => {
  if (counter >= carouselItems.length - 1) {
    counter = -1;
  }
  nextBtn.click(); // Simula clic en el botón "Siguiente"
}, 5000);


   //Efecto Fade In

   $(window).on("scroll", function () {
    $('.fade-in-section').each(function () {
        var elementTop = $(this).offset().top;
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Si el elemento está en el viewport
        if (windowTop + windowHeight > elementTop + 500) { // Ajusta para controlar cuándo se activa el fade
            $(this).addClass('visible');
        }
    });
});


});
