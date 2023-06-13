$(document).ready(function(){
    
    (function($) {
        "use strict"; 
        
    /*------------------------------    
    NiceScroll
    ------------------------------*/
        $("html").niceScroll({
            cursorcolor: "#293133",
            cursorborderradius: "0",
            cursorborder: "0 solid #fff",
            cursorwidth: "10px",
            zindex: "999999",
            scrollspeed: 60
        });
        
    /*------------------------------    
    Go Top
    ------------------------------*/
        $('a[href="#top"]').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false
        });
        
    /*------------------------------    
    Testimonial Slider
    ------------------------------*/
        $('.testimonialSlider').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            items:1,
            dots:false,
            lazyLoad: true,
            autoplay: true
        });
        
    /*------------------------------    
    Partner And Testimonial
    ------------------------------*/
        $('.ptTabNavs').on('click','.prevTab', function(){
          $('.ptTab_nav > .active').prev('li').find('a').trigger('click');
        });

        $('.ptTabNavs').on('click','.nextTab', function(){
          $('.ptTab_nav > .active').next('li').find('a').trigger('click');
        });
        
    /*------------------------------    
    Gallery Slider
    ------------------------------*/
        $('.ourGallerSlide').owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:true,
            nav: true,
            navText: [ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>' ],
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                1000:{
                    items:4,
                    nav:true
                }
            }
        }); 
    
    /*----------------------------------------------------*/
    /*  Count Up
    /*----------------------------------------------------*/
    $('.counter').counterUp({
        delay: 15,
        time: 1500
    });
        
    /*------------------------------    
    Team Member Slider
    ------------------------------*/
        $('.ourTeamSlide').owlCarousel({
            loop:true,
            margin:0,
            responsiveClass:true,
            nav: true,
            navText: [ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>' ],
            autoplay: true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:2,
                    nav:true
                }
            }
        })
        
    })(jQuery)
});

$(window).load(function() {
        
    /*------------------------------    
    Main Slider
    ------------------------------*/
    $('.homeSlider').flexslider({
        animation: "fade"
    })
});