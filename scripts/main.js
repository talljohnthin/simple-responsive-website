$(document).ready(function(){

    // Hamburger Menu
    var $menu = document.querySelector(".menu"),
        $nav = document.querySelector(".mobile-navigation")
        $backdrop = document.querySelector(".mobile-navigation-backdrop")
    var isMenuOpen = false;

    $menu.addEventListener("click", () => {
        if (!isMenuOpen) {
            $menu.classList.add("open");
            $nav.classList.add("open");
            $backdrop.classList.add("open");
        } else {
            $menu.classList.remove("open");
            $nav.classList.remove("open");
            $backdrop.classList.remove("open");
        }
        isMenuOpen = !isMenuOpen;
    });

    // Insight Carousel

    var insightCarousel = $(".owl-carousel-insight");

    insightCarousel.on('initialized.owl.carousel',  () => {
        setTimeout(function(){
            var activeEls = $('.owl-carousel-insight .owl-item.active').eq(1); 
            setCarouselCaption( activeEls, '.owl-carousel-insight' ); 
          },1);
    })

    insightCarousel.owlCarousel({
        mouseDrag: false,
        touchDrag: false,
        margin:6,
        dots:true,
        responsive : {
            0 : {
                items:2,
                autoWidth:true,
                touchDrag: true,
                loop:true
            },
            476 : {
                items:2,
                touchDrag: true,
                loop:true
            },
            768 : {
                items:3 
            }
        }
    });

    insightCarousel.on('changed.owl.carousel', function() {
        setTimeout(function(){
          var activeEls = $('.owl-carousel-insight .owl-item.active').eq(1); 
          setCarouselCaption( activeEls, '.owl-carousel-insight' ); 
        },1);
    });

    // Event Carousel

    var eventCarousel = $(".owl-carousel-events");

    eventCarousel.on('initialized.owl.carousel',  () => {
        setTimeout(function(){
            var activeEls = $('.owl-carousel-events .owl-item.active').eq(1); 
            setCarouselCaption( activeEls, '.owl-carousel-events' ); 
          },1);
    })

    eventCarousel.owlCarousel({
        mouseDrag: false,
        touchDrag: false,
        margin:18,
        dots:true,
        responsive : {
            0 : {
                items:2,
                autoWidth:true,
                touchDrag: true,
                loop:true
            },
            476 : {
                items:2,
                touchDrag: true,
                loop:true
            },
            768 : {
                items:3 
            }
        }
    });

    eventCarousel.on('changed.owl.carousel', function() {
        setTimeout(function(){
          var activeEls = $('.owl-carousel-events .owl-item.active').eq(1); 
          setCarouselCaption( activeEls, '.owl-carousel-events' ); 
        },1);
    });

    function setCarouselCaption(el, parent){
        $(parent + " .owl-item").removeClass("target");
        el.addClass("target");
    }

});