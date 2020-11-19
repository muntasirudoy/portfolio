
$('#work .right .our-service-sass .inner-wrapper .slide').slick({
    
  dots: false,
  infinite: true,
  speed: 2000,
   slidesToShow: 3,
  slidesToScroll: 1,
   autoplay:false,
    autoplaySpeed:2500,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
    
});




$('#testi .right .plate').slick({
    
  dots: false,
  infinite: true,
  speed: 2000,
   slidesToShow: 2,
  slidesToScroll: 1,
   autoplay:false,
    autoplaySpeed:2500,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
    
});




























$('#pricing .right .slide').slick({
    
  dots: false,
  infinite: true,
  speed: 1000,
   slidesToShow: 3,
  slidesToScroll: 1,
   autoplay:true,
    autoplaySpeed:2500,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
     
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
    
});
    


$('#testi .right .tslide').slick({
    
  dots: false,
  infinite: true,
  speed: 2000,
   slidesToShow: 2,
  slidesToScroll: 1,
   autoplay:false,
    autoplaySpeed:2500,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
    
});







$('#clients .right .items').slick({
    
  dots: false,
  infinite: true,
  speed: 1000,
   slidesToShow: 5,
  slidesToScroll: 1,
   autoplay:true,
    autoplaySpeed:2500,
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
     
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots:false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
    
});
    








$("#top-bar .navb .mobile-toggal").click(function() {
        $("#top-bar .navb .menu ").toggleClass('active');
      });




////////////////////////////////// portfolio///////////



$(".choose").click(function() {
	$(".choose").addClass("active");
	$(".choose .icon").addClass("active");
	$(".pay").removeClass("active");
	$(".wrap").removeClass("active");
	$(".ship").removeClass("active");
	$(".pay .icon").removeClass("active");
	$(".wrap .icon").removeClass("active");
	$(".ship .icon").removeClass("active");
	$("#line").addClass("one");
	$("#line").removeClass("two");
	$("#line").removeClass("three");
	$("#line").removeClass("four");
});

$(".pay").click(function() {
	$(".pay").addClass("active");
	$(".pay .icon").addClass("active");
	$(".choose").removeClass("active");
	$(".wrap").removeClass("active");
	$(".ship").removeClass("active");
	$(".choose .icon").removeClass("active");
	$(".wrap .icon").removeClass("active");
	$(".ship .icon").removeClass("active");
	$("#line").addClass("two");
	$("#line").removeClass("one");
	$("#line").removeClass("three");
	$("#line").removeClass("four");
});

$(".wrap").click(function() {
	$(".wrap").addClass("active");
	$(".wrap .icon").addClass("active");
	$(".pay").removeClass("active");
	$(".choose").removeClass("active");
	$(".ship").removeClass("active");
	$(".pay .icon").removeClass("active");
	$(".choose .icon").removeClass("active");
	$(".ship .icon").removeClass("active");
	$("#line").addClass("three");
	$("#line").removeClass("two");
	$("#line").removeClass("one");
	$("#line").removeClass("four");
});

$(".ship").click(function() {
	$(".ship").addClass("active");
	$(".ship .icon").addClass("active");
	$(".pay").removeClass("active");
	$(".wrap").removeClass("active");
	$(".choose").removeClass("active");
	$(".pay .icon").removeClass("active");
	$(".wrap .icon").removeClass("active");
	$(".choose .icon").removeClass("active");
	$("#line").addClass("four");
	$("#line").removeClass("two");
	$("#line").removeClass("three");
	$("#line").removeClass("one");
});

$(".choose").click(function() {
	$("#first").addClass("active");
	$("#second").removeClass("active");
	$("#third").removeClass("active");
	$("#fourth").removeClass("active");
});

$(".pay").click(function() {
	$("#first").removeClass("active");
	$("#second").addClass("active");
	$("#third").removeClass("active");
	$("#fourth").removeClass("active");
});

$(".wrap").click(function() {
	$("#first").removeClass("active");
	$("#second").removeClass("active");
	$("#third").addClass("active");
	$("#fourth").removeClass("active");
});

$(".ship").click(function() {
	$("#first").removeClass("active");
	$("#second").removeClass("active");
	$("#third").removeClass("active");
	$("#fourth").addClass("active");
});










