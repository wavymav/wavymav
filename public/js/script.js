$(document).ready(function() {
    
    // Sticky Navigation
    $('.sticky-nav-active').waypoint(function(direction) {
       if (direction === 'down') {
           $('nav').addClass('sticky');
       }  else {
           $('nav').removeClass('sticky');
       }
    },{
        offset: '70px;'
    });
    
    // Hreo Button Scroll 
    $('.scroll-to-proj').click(function () {
       $('html, body').animate({scrollTop: $('.projects').offset().top}, 1000); 
    });
    
    
});