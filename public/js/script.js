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
    
    // Nav Scroll 
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    // Mobile nav toggle
    $('.mobile-toggle').click(function() {
        var $nav = $('.main-nav');
        var $icon = $('.mobile-toggle i');
        
        $nav.slideToggle(500);
        
        if ($icon.hasClass('ion-navicon-round')) {
            $icon.addClass('ion-close-round');
            $icon.removeClass('ion-navicon-round');
        } else {
            $icon.addClass('ion-navicon-round');
            $icon.removeClass('ion-close-round');
        } 
        
        
        
    });
});