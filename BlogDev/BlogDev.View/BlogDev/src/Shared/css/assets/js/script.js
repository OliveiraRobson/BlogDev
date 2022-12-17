/*=================================================================

Template name: Patrika
Version: 1.0.0
Author: SITLBD       
Author url: https://www.sitlbd.com/  
Developer: Najmul Huda Eimon  


[Table of Content]

01. Preloader
02: Background image
03: sidemenu
04: Sticky menubar
05: Scroll to top button
06: Select style
07: banner slider
08: news slider
09: video slider
10: food slider
11: home 2 banner slider
12: Ad slider
13: insta slider
14: home 3 banner slider
15: blog page slider
16: Venobox video play
17: image popup
18: Menu
19: wavesurfer audio play
20: range slider
21: shop detail gallery slider
22: star rating
23: input spinner
24. contact page Google Map
25. cart update prevent
 
====================================================================*/

  $(function(){
    "use strict";

    /*================================================================
      01. Preloader
    =================================================================*/
    $( document ).ready(function() {
        setTimeout(()=>{
            $('.preloader').addClass('move')
        }, 250)
    });
  

    /*=====================================================================
        02: Background image
    ======================================================================*/
   let imageTarget = $('[data-img]');
   imageTarget.css('background', function(){
       return 'url('+this.getAttribute('data-img')+') no-repeat center'
   });
   imageTarget.css('backgroundSize', 'cover');

   /*================================================================
        03: sidemenu
    =================================================================*/
    $('.sidemenu-btn').on('click',function(){
        $('.side-menu').addClass('show');
        $('.side-menu-overlay').addClass('show');
    });
    $('.sidemenu-close').on('click',function(){
        $('.side-menu').removeClass('show');
        $('.side-menu-overlay').removeClass('show');
    });
    $('.side-menu-overlay').on('click',function(){
        $('.side-menu').removeClass('show');
        $(this).removeClass('show');
    });

   /*================================================================
        04: Sticky menubar
    =================================================================*/

    var $navOffset = $('.menubar').offset().top;
    $(window).on('scroll',function(){
        var $scroll = $(this).scrollTop();

       if($scroll > $navOffset){
           $('.menubar').addClass('sticky');
       }else{
           $('.menubar').removeClass('sticky');
       }
   });

   /*=====================================================================
        05: Scroll to top button
    =======================================================================*/

    $('.top-btn').on('click',function(){
        $('html').animate({
            scrollTop: 0
        },1000);
    });

    $(window).on('scroll',function(){
        var $scroll = $(this).scrollTop();

        if($scroll > 300){
            $('.top-btn').addClass('show');
        }else{
            $('.top-btn').removeClass('show');
        }
    });

   /*=====================================================================
    06: Select style
   ======================================================================*/
    $(".select").select2({
        width: 'resolve' 
    });

    /*=====================================================================
        07: banner slider
    ======================================================================*/
      var swiper = new Swiper('.banner-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 0,
        speed: 4000,
        disableOnInteraction: false,
        autoplay: false,
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
            1920: {
            slidesPerView: 3,
            },
            992: {
            slidesPerView: 3,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        }
        
    });

    $(".banner-slider").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });
    /*=====================================================================
        08: news slider
    ======================================================================*/
      var swiper = new Swiper('.news-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        autoplay: false,
        breakpoints: {
            1920: {
            slidesPerView: 3,
            },
            992: {
            slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }
        
    });

    /*=====================================================================
        09: video slider
    ======================================================================*/
    var swiper = new Swiper('.video-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        autoplay: false,
        breakpoints: {
            1920: {
            slidesPerView: 3,
            },
            992: {
            slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }
        
    });
    /*=====================================================================
        10: food slider
    ======================================================================*/
    var swiper = new Swiper('.food-slider', {
        effect: 'slide',
        autoplay: false,
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        }
        
    });
    var swiper = new Swiper('.sport-slider', {
        effect: 'slide',
        autoplay: false,
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.next-btn1',
          prevEl: '.prev-btn1',
        }
        
    });
    var swiper = new Swiper('.fashion-slider', {
        effect: 'slide',
        autoplay: false,
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.next-btn2',
          prevEl: '.prev-btn2',
        }
        
    });


    /*=====================================================================
        11: home 2 banner slider
    ======================================================================*/
    var swiper = new Swiper('.banner-slide', {
        observer: true,
        observeParents: true,
        // loop: true,
        centeredSlides: false,
        spaceBetween: 20,
        speed: 1000,
        disableOnInteraction: false,
        autoplay: false,
        direction: 'vertical',
        breakpoints: {
            1920: {
            slidesPerView: 3,
            },
            992: {
            slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.btn-up',
          prevEl: '.btn-down',
        }
        
    });

    var swiper = new Swiper('.banner-main-slider', {
        observer: true,
        observeParents: true,
        // loop: true,
        centeredSlides: false,
        spaceBetween: 0,
        speed: 1000,
        disableOnInteraction: false,
        autoplay: false,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.btn-up',
          prevEl: '.btn-down',
        }
        
    });
    /*=====================================================================
        12: Ad slider
    ======================================================================*/

    var swiper = new Swiper('.ad-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 0,
        speed: 1000,
        disableOnInteraction: false,
        autoplay: false,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.ad-next',
          prevEl: '.ad-prev',
        }
        
    });
    /*=====================================================================
        13: insta slider
    ======================================================================*/

    var swiper = new Swiper('.insta-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 0,
        speed: 1000,
        disableOnInteraction: false,
        autoplay: false,
        breakpoints: {
            1920: {
            slidesPerView: 4,
            },
            992: {
            slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 3,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.insta-next',
          prevEl: '.insta-prev',
        }
        
    });

    /*=====================================================================
        14: home 3 banner slider
    ======================================================================*/
    var swiper = new Swiper('.gym-banner-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        autoplay: false,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.gym-banner-next',
          prevEl: '.gym-banner-prev',
        }
        
    });

    /*=====================================================================
        15: blog page slider
    ======================================================================*/
    var swiper = new Swiper('.blog-slider', {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: false,
        spaceBetween: 30,
        autoplay: false,
        breakpoints: {
            1920: {
            slidesPerView: 1,
            },
            992: {
            slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        },
        navigation: {
          nextEl: '.blog-next',
          prevEl: '.blog-prev',
        }
        
    });

    /*=====================================================================
        16: Venobox video play
    ======================================================================*/
    $('.venobox').venobox();



    /*=====================================================================
        17: image popup
    ======================================================================*/
    
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });


   /*=====================================================================
        18: Menu
    ======================================================================*/
    $('.header-menu a[href="#"]').on("click", function (e) {
      e.preventDefault();
    });

    $(".header-menu").menumaker({ title: '<i class="flaticon-menu"></i>', format: "multitoggle" });

  /*=====================================================================
        19: wavesurfer audio play
    ======================================================================*/
    let wave =  document.querySelector('#waveform');
    if(wave){
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            scrollParent: false,
            barGap: 1,
            barWidth: 6,
            barHeight: 1,
            cursorColor: '#fff',
            progressColor: '#fff',
            waveColor: 'hsla(0, 0%, 100%, 0.8)',
            responsive: true
        });
        var wavesurfer2 = WaveSurfer.create({
            container: '#waveform2',
            scrollParent: false,
            barGap: 1,
            barWidth: 6,
            barHeight: 1,
            cursorColor: '#fff',
            progressColor: '#fff',
            waveColor: 'hsla(0, 0%, 100%, 0.8)',
            responsive: true
        });
        wavesurfer.load('assets/images/blog-video/soft_love.mp3');
        wavesurfer2.load('assets/images/blog-video/soft_love.mp3');
    
        $('.play').on('click', function(){
            wavesurfer.playPause()
        });
        $('.play2').on('click', function(){
            wavesurfer2.playPause()
        });
    }

    /*=====================================================================
        20: range slider
    ======================================================================*/

    // Product Quantity
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 300,
        values: [ 0, 200 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    /*=====================================================================
        21: shop detail gallery slider
    ======================================================================*/
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
          });
          var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            loop: true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
              nextEl: '.gallery-button-next',
              prevEl: '.gallery-button-prev',
            },
            thumbs: {
              swiper: galleryThumbs,
            },
          });


    /*=====================================================================
        22: star rating
    ======================================================================*/
        
          $('#stars li').on('mouseover', function(){
            var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
          
          /* 2. Action to perform on click */
          $('#stars li').on('click', function(){
            var onStar = parseInt($(this).data('value'), 10); // The star currently selected
            var stars = $(this).parent().children('li.star');
            
            for (var i = 0; i < stars.length; i++) {
              $(stars[i]).removeClass('selected');
            }
            
            for (var i = 0; i < onStar; i++) {
              $(stars[i]).addClass('selected');
            }
            
          });
          
          
        });

    /*=====================================================================
        23: input spinner
    ======================================================================*/

    $('.number-spinner button').on('click', function (e) { 
        e.preventDefault()
          var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val(),
            newVal = 0;
	
        if (btn.attr('data-dir') == 'up') {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
    });

    /*=========================================================
        24. contact page Google Map
    ==========================================================*/

    if($('#map').length !==0){
            
        var googleMapSelector = $('#map');
        var latitude = $('.google-map-wrapper').attr('data-latitude');
        var longitude = $('.google-map-wrapper').attr('data-longitude');
        var zoome = $('.google-map-wrapper').attr('data-zoom');
        var zoomtoNum = Number(zoome);
        var mapmarker = $('.google-map-wrapper').attr('data-marker');
        var myCenter = new google.maps.LatLng(latitude, longitude);
  
        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: zoomtoNum,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f7f1e0"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#d0e3b4"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.medical",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#fbd3da"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#bde6ab"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffe36f"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#efd151"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "black"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.airport",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#cfb2db"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#a2daf2"
                                }
                            ]
                        }
                    ]
            };
            var map = new google.maps.Map( document.getElementById('map'), mapProp );
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: mapmarker,
            });
            marker.setMap(map);
  
           
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    }

    /* =============================================
        25: cart update prevent
    ================================================= */
    $('.cart-submit button').on('click', function(e){
        e.preventDefault()
    })
    $('.coupon .coupon-code button').on('click', function(e){
        e.preventDefault()
    });

    /*================================================
        26: parallax activation home 1
    ================================================*/
    var $parallaxLayers = $('[data-trigger="parallax_layers"]');

    if( $parallaxLayers.length ){
        $parallaxLayers.each(function () {
            new Parallax( $(this)[0], {
                selector: '[data-depth]'
            });
        });
    }

    /*================================================
        26: packery home 1
    ================================================*/
    $(window).ready(function(){
        $('.grid').packery({
            itemSelector: '.grid-item'
          });
    });
});