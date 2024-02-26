$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top-link').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    // Function to toggle between light and dark themes
   

});


  
    
