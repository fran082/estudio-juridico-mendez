(function($){

$(document).ready(function ($) {

<<<<<<< HEAD
     ////jQuery('#map').CustomMap();
    if ($('#map').length && typeof google !== 'undefined') {
=======
    //// jQuery('#map').CustomMap();
	if ($('#map').length && typeof google !== 'undefined') {
>>>>>>> 875ec463c3520f60d460b1bedfbf983df0b69710
    $('#map').CustomMap();
}

     ////------- Testimonials Carousel
    
    var testimonial = $(".testimonial-wrapper");
    testimonial.owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 1000,
        stopOnHover: true,
        autoPlay: 3000,
        singleItem: true,
        transitionStyle : "fade",
        navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
    });
    
    /*----------------------------------------------------*/
	/*	Nav Menu & Search
	/*----------------------------------------------------*/
	
	$(".nav > li:has(ul)").addClass("drop");
	$(".nav > li.drop > ul").addClass("dropdown");
	$(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
    
    
    
    
    
    /*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/
    $(document).ready(function($) {
	"use strict";

    
    
        $('.skill-shortcode').appear(function() {
            $('.progress').each(function(){ 
                $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
            });
        },{accY: -100});
        
        
    });    
    
    
    /*--------------------------------------------------*/
    /* Counter*/
    /*--------------------------------------------------*/ 
    $('.timer').countTo();

    $('.counter-item').appear(function() {
        $('.timer').countTo();
    },{accY: -100});
    
    
});

}(jQuery));
