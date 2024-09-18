$(document).ready( () =>{

    //Fade In
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